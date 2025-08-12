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
            container: 'relative',
            input: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg bg-transparent
                border-gray-300 focus:ring-[#085691] focus:border-[#085691]
            `,
            label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-white
                peer-placeholder-shown:top-[45%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500
                peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-focus:bg-white peer-focus:text-[#085691]
            `, 
            button: "absolute top-[50%] right-[.8em] -translate-y-1/2 text-[#085691] hover:text-[#053866] transition-all duration-300 ease-in-out cursor-pointer",
            icon: "absolute top-[50%] right-[.8em] -translate-y-1/2 text-[#085691]",
            loader: "absolute top-[50%] right-[.8em]"
        },
        error: {
            input: "border-red-500 focus:ring-red-400 focus:border-red-400",
            label: "peer-focus:text-red-500 text-red-500",
            button: "text-red-500 hover:text-red-700",
            icon: "text-red-500",
            error: "text-red-500 text-sm mt-2 ml-1 flex items-center gap-1"
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
            input: 'w-full p-3.5 border-2 focus:ring-2 transition-all text-lg peer duration-300 ease-in-out focus:outline-none bg-gray-800 text-white border-gray-600 focus:ring-gray-400 focus:border-gray-400',
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
// TextArea
const txtAreaDefaultVariants: Record<string, DialcaUI.TxtAreaStates> = {
    default: {
        normal: {
            container: 'relative',
            textarea: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg bg-transparent
                border-gray-300 focus:ring-[#085691] focus:border-[#085691]
                min-h-12 max-h-40 resize-none field-sizing-content scrollbar-thin
            `,
            label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-white
                peer-placeholder-shown:top-[45%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500
                peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-sm
                peer-focus:bg-white peer-focus:text-[#085691]
            `,
            icon: "absolute top-3 right-3 px-0.5 py-0 text-[#085691] text-[1.3rem]",
            loader: "absolute top-3 right-3 animate-spin",
            charCounter: "absolute right-3 bottom-3 z-10"
        },
        error: {
            textarea: "border-red-500 focus:ring-red-400 focus:border-red-400",
            label: "peer-focus:text-red-500 text-red-500",
            icon: "text-red-500",
            error: "text-red-500 text-sm mt-2 ml-1 flex items-center gap-1"
        },
        disabled: {
            textarea: "bg-gray-100 text-gray-500 cursor-not-allowed",
            label: "peer-focus:text-gray-500"
        },
        resizing: {
            textarea: "resize-y"
        }
    }
}
const txtAreaVariantOverrides: Record<string, Partial<DialcaUI.TxtAreaStates>> = {
    dark: {
        normal: {
            textarea: `
                w-full p-3.5 border-2 border-solid rounded-sm outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg
                bg-gray-800 text-white border-gray-600 focus:ring-gray-400 focus:border-gray-400
                min-h-12 max-h-40 resize-none field-sizing-content scrollbar-thin
            `,
            label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-gray-800 font-body
                peer-placeholder-shown:top-[40%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500
                peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-[.85rem]
                peer-focus:bg-gray-800 peer-focus:text-gray-300 text-gray-300
            `,
            icon: "absolute top-3 right-3 px-0.5 py-0 bg-transparent text-gray-300 text-[1.3rem] transition-all duration-300 ease-in-out"
        },
        error: {
            textarea: "border-red-400 focus:ring-red-300 focus:border-red-400",
            label: "peer-focus:text-red-400 text-red-400",
            icon: "text-red-400"
        }
    },
    resizable: {
        normal: {
            textarea: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg bg-transparent
                border-gray-300 focus:ring-purple-400 focus:border-purple-400
                min-h-24 max-h-96 resize-y field-sizing-content scrollbar-thin
            `
        }
    }
};
// DropZone
const dropZoneDefaultVariants: Record<string, DialcaUI.DropZoneStates> = {
    default: {
        normal: {
            container: 'border-2 border-dashed border-gray-300 hover:border-[#3A7DC0] hover:bg-gray-100 p-8 rounded-lg text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-40',
            icon: 'text-4xl mb-3 text-[#085691]',
            title: 'font-medium text-lg',
            description: 'text-base text-gray-500 mt-2',
            error: 'text-red-500 text-sm mt-2 ml-1 flex items-center gap-1'
        },
        error: {
            container: 'border-red-500 border-3',
            icon: 'text-red-500',
        },
        dragging: {
            container: 'border-[#3A7DC0] bg-[#3A7DC0]/5',
        }
    }
}
const dropZoneVariantOverrides: Record<string, Partial<DialcaUI.DropZoneStates>> = {
    dark: {
        normal: {
            container: 'border-2 bg-gray-800 border-dashed border-[#3A7DC0] hover:border-[#3a8dc0] hover:bg-gray-800/95 p-8 rounded-lg text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-40',
            icon: 'text-4xl mb-3 text-[#3A7DC0]',
            title: 'font-medium text-gray-400 text-lg',
            description: 'text-base text-gray-400 mt-2',
        },
        error: {
            container: 'border-red-400 border-3',
            icon: 'text-red-400',
        },
        dragging: {
            container: 'border-[#3A8DC0] bg-[#3A8DC0]/5',
        }
    }
}
// Loader
const loaderDefaultVariants: Record<string, DialcaUI.LoaderStates> = {
    default: {
        normal: {
            container: 'flex items-center justify-center flex-col gap-2',
            outerRing: 'border-2 border-transparent animate-spin rounded-full border-t-[#3A7DC0] flex items-center justify-center',
            innerRing: 'border-2 border-transparent animate-spin rounded-full border-t-[#085691]',
            content: 'text-[#3A7DC0] text-sm font-medium'
        },
        error: {
            outerRing: 'border-t-red-500!',
            innerRing: 'border-t-red-700!',
            content: 'text-red-500!'
        },
        success: {
            outerRing: 'border-t-green-500!',
            innerRing: 'border-t-green-700!', 
            content: 'text-green-500!'
        },
        disabled: {
            outerRing: 'border-t-gray-400 opacity-50',
            innerRing: 'border-t-gray-500 opacity-50',
            content: 'text-gray-400'
        }
    }
}
const loaderVariantOverrides: Record<string, Partial<DialcaUI.LoaderStates>> = {
    dark: {
        normal: {
            outerRing: 'border-2 border-transparent animate-spin rounded-full border-t-[#d79b5f] flex items-center justify-center',
            innerRing: 'border-2 border-transparent animate-spin rounded-full border-t-[#f3c892]',
            content: 'text-gray-300'
        }
    },
    
    pulse: {
        normal: {
            container: 'flex items-center justify-center',
            outerRing: 'bg-[#085691] animate-pulse! rounded-full flex items-center justify-center',
            innerRing: 'bg-[#3A7DC0] animate-pulse! rounded-full opacity-60 delay-100'
        }
    },
    
    dots: {
        normal: {
            container: 'flex items-center justify-center space-x-1',
            outerRing: 'w-3 h-3 bg-[#3A7DC0] rounded-full animate-bounce',
            innerRing: 'w-3 h-3 bg-[#085691] rounded-full animate-bounce delay-100'
        }
    },
    
    minimal: {
        normal: {
            outerRing: 'border border-gray-300 animate-spin rounded-full border-t-[#3A7DC0]',
            innerRing: 'hidden' // Solo un anillo
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
    const mappedStates = {
        normal: true,
        error: states.hasErrors,
        disabled: states.disabled,
        focused: states.focused
    }
    return useVariantStyles<DialcaUI.InputStates, DialcaUI.InputVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        inputDefaultVariants,
        inputVariantOverrides
    )
}
export const useTxtAreaVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.TxtAreaStates> = {},
    states: { hasErrors?: boolean; disabled?: boolean; focused?: boolean; resizing?: boolean; } = {},
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        error: states.hasErrors,
        disabled: states.disabled,
        focused: states.focused,
        resizing: states.resizing
    }
    return useVariantStyles<DialcaUI.TxtAreaStates, DialcaUI.TxtAreaVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        txtAreaDefaultVariants,
        txtAreaVariantOverrides
    )
}
export const useDropZoneVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.DropZoneStates> = {},
    states: { isDragging?: boolean; hasErrors?: boolean } = {},
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        error: states.hasErrors,
        dragging: states.isDragging
    }
    return useVariantStyles<DialcaUI.DropZoneStates, DialcaUI.DropZoneVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        dropZoneDefaultVariants,
        dropZoneVariantOverrides
    )
}
export const useLoaderVariantStyles = (
    variant: string = 'default',
    customVariants: Record<string, DialcaUI.LoaderStates> = {},
    states: {
        hasErrors?: boolean
        disabled?: boolean
        success?: boolean
    },
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        error: states.hasErrors,
        disabled: states.disabled,
        success: states.success
    }
    return useVariantStyles<DialcaUI.LoaderStates, DialcaUI.LoaderVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        loaderDefaultVariants,
        loaderVariantOverrides
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
        if (selectedVariant.normal) {
            const normalStyles = (selectedVariant.normal as any)[element]
            if (normalStyles) styles.push(normalStyles)
        }
        Object.entries(states).forEach(([stateName, isActive]) => {
            if (isActive && stateName !== 'normal' && selectedVariant[stateName]) {
                const stateStyles = (selectedVariant[stateName] as any)[element]
                if (stateStyles) styles.push(stateStyles)
            }
        })
        return cn(...styles)
    }

    return { getStyles }
}