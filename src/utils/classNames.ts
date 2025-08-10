export const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

const mergeVariants = <T extends Record<string, any>>(base: T, override: Partial<T>): T => {
    const result = { ...base }
    Object.keys(override).forEach(state => {
        if (override[state]) {
            (result as any)[state] = {
                ...(base as any)[state],
                ...(override as any)[state]
            }
        }
    })
    return result
}

// ============
// Config per component
// ============

// Input
const inputDefaultVariants: Record<string, DialcaUI.InputStates> = {
    default: {
        normal: {
            container: 'relative space-y-2',
            input: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg bg-transparent
                text-lg border-gray-300 focus:ring-[#085691] focus:border-[#085691]
            `,
            label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-white
                peer-placeholder-shown:top-[45%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500
                peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-focus:bg-white peer-focus:text-[#085691]
            `, 
            button: "absolute top-[45%] right-[.8em] -translate-y-1/2 text-[#085691] hover:text-[#053866] transition-all duration-300 ease-in-out cursor-pointer",
            icon: "absolute top-[45%] right-[.8em] -translate-y-1/2 text-[#085691]",
            loader: "absolute top-[40%] right-[.8em]"
        },
        error: {
            input: "border-red-500 focus:ring-red-400 focus:border-red-400",
            label: "peer-focus:text-red-500",
            button: "text-red-500 hover:text-red-700",
            icon: "text-red-500",
            error: "text-red-500 text-sm mt-1 ml-1 flex items-center gap-1"
        },
        disabled: {
            input: "bg-gray-100 text-gray-500 cursor-not-allowed",
            label: "peer-focus:text-gray-500"
        }
    }
}
const inputVariantOverrides: Record<string, Partial<DialcaUI.InputStates>> = {
    dark: {
        normal: {
            input: 'w-full p-3.5 border-2 focus:ring-2 transition-all text-lg peer duration-300 ease-in-out focus:outline-none bg-gray-800 text-white border-gray-600 focus:ring-gray-400 focus:border-gray-400', // ✅ Agregar focus colors
            label: 'absolute top-[45%] left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out bg-gray-800 peer-placeholder-shown:top-[45%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:bg-gray-800',
            button: 'text-gray-300 hover:text-white', 
            icon: 'text-gray-300'
        },
        error: {
            input: 'border-red-400 focus:ring-red-300 focus:border-red-400',
            label: 'peer-focus:text-red-400',
            button: 'text-red-400 hover:text-red-300',
            icon: 'text-red-400'
        }
    }
}



// ============
// Hooks
// ============

// Input
export const useInputVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.InputStates> = {},
    states: { hasErrors?: boolean; disabled?: boolean; focused?: boolean } = {},
    extendDefault: boolean = true
) => {
    return useVariantStyles<DialcaUI.InputStates, DialcaUI.InputVariant>(
        variant,
        customVariants,
        states,
        extendDefault,
        inputDefaultVariants,
        inputVariantOverrides
    )
}

// Generic
const useVariantStyles = <TStates extends Record<string, any>, TVariant extends Record<string, any>>(
    variant: string,
    customVariants: Record<string, TStates> = {},
    states: Record<string, boolean | undefined>,
    extendDefault: boolean,
    defaultVariants: Record<string, TStates>,
    variantOverrides: Record<string, Partial<TStates>>
) => {
    const processedVariants: Record<string, TStates> = {
        ...defaultVariants
    }
    Object.entries(variantOverrides).forEach(([key, override]) => {
        processedVariants[key] = mergeVariants(defaultVariants.default || {} as TStates, override);
    });
    Object.entries(customVariants).forEach(([key, customVariant]) => {
        if (extendDefault) {
            processedVariants[key] = mergeVariants(defaultVariants.default || {} as TStates, customVariant);
        } else {
            processedVariants[key] = customVariant;
        }
    });
    const selectedVariant = processedVariants[variant] || processedVariants.default || {} as TStates;
    const getStyles = (element: keyof TVariant) => {
        let styles: string[] = []
        Object.entries(states).forEach(([stateName, isActive]) => {
            if (isActive && selectedVariant[stateName]) {
                const stateStyles = (selectedVariant[stateName] as any)[element]
                if (stateStyles) styles.push(stateStyles)
            }
        })
        if (styles.length === 0 && selectedVariant.normal) {
            const normalStyles = (selectedVariant.normal as any)[element]
            if (normalStyles) styles.push(normalStyles)
        }
        return cn(...styles)
    }

    return { getStyles }
}