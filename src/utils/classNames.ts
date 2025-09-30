/**
 * Utility to combine multiple class names into a single string.
 * Filters out falsy values and trims extra spaces.
 *
 * @param {...(string | undefined | null | false)[]} classes - Class names to combine.
 * @returns {string} The combined class names.
 *
 * @example
 * cn("a", undefined, "b", false, "c") // "a b c"
 */
export const cn = (
	...classes: (string | undefined | null | false)[]
): string => {
	return classes.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
};

/**
 * Merges two variant objects, combining their states.
 *
 * @template T
 * @param {T} base - The base variant object.
 * @param {Partial<T>} override - The override variant object.
 * @returns {T} The merged variant object.
 */
const mergeVariants = <T extends Record<string, any>>(
	base: T,
	override: Partial<T>
): T => {
	const result = { ...base };
	Object.keys(override).forEach((state) => {
		if (override[state]) {
			(result as any)[state] = {
				...(base as any)[state],
				...(override as any)[state],
			};
		}
	});
	return result;
};

// ============
// Default variants and overrides per component
// ============

// Input
const inputDefaultVariants: Record<string, DialcaUI.InputStates> = {
	default: {
		normal: {
			container: "relative",
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
			loader: "absolute top-[50%] right-[.8em]",
		},
		error: {
			input: "border-red-500 focus:ring-red-400 focus:border-red-400",
			label: "peer-focus:text-red-500 text-red-500",
			button: "text-red-500 hover:text-red-700",
			icon: "text-red-500",
			error: "text-red-500 text-sm mt-2 ml-1 flex items-center gap-1",
		},
		disabled: {
			input: "bg-gray-100 text-gray-500 cursor-not-allowed",
			label: "peer-focus:text-gray-500",
		},
	},
};
const inputVariantOverrides: Record<string, Partial<DialcaUI.InputStates>> = {
	dark: {
		normal: {
			input: "w-full p-3.5 border-2 focus:ring-2 transition-all text-lg peer duration-300 ease-in-out focus:outline-none bg-gray-800 text-white border-gray-600 focus:ring-gray-400 focus:border-gray-400",
			label: "absolute top-[45%] left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out bg-gray-800 peer-placeholder-shown:top-[45%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:-top-0.5 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:bg-gray-800",
			button: "text-gray-300 hover:text-white",
			icon: "text-gray-300",
		},
		error: {
			input: "border-red-400 focus:ring-red-300 focus:border-red-400",
			label: "peer-focus:text-red-400",
			button: "text-red-400 hover:text-red-300",
			icon: "text-red-400",
		},
	},
};
// TextArea
const txtAreaDefaultVariants: Record<string, DialcaUI.TxtAreaStates> = {
	default: {
		normal: {
			container: "relative",
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
			charCounter: "absolute right-3 bottom-3 z-10",
		},
		error: {
			textarea: "border-red-500 focus:ring-red-400 focus:border-red-400",
			label: "peer-focus:text-red-500 text-red-500",
			icon: "text-red-500",
			error: "text-red-500 text-sm mt-2 ml-1 flex items-center gap-1",
		},
		disabled: {
			textarea: "bg-gray-100 text-gray-500 cursor-not-allowed",
			label: "peer-focus:text-gray-500",
		},
		resizing: {
			textarea: "resize-y",
		},
	},
};
const txtAreaVariantOverrides: Record<
	string,
	Partial<DialcaUI.TxtAreaStates>
> = {
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
			icon: "absolute top-3 right-3 px-0.5 py-0 bg-transparent text-gray-300 text-[1.3rem] transition-all duration-300 ease-in-out",
		},
		error: {
			textarea: "border-red-400 focus:ring-red-300 focus:border-red-400",
			label: "peer-focus:text-red-400 text-red-400",
			icon: "text-red-400",
		},
	},
	resizable: {
		normal: {
			textarea: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none focus:ring-2 
                transition-all duration-300 ease-in-out peer text-lg bg-transparent
                border-gray-300 focus:ring-purple-400 focus:border-purple-400
                min-h-24 max-h-96 resize-y field-sizing-content scrollbar-thin
            `,
		},
	},
};
// DropZone
const dropZoneDefaultVariants: Record<string, DialcaUI.DropZoneStates> = {
	default: {
		normal: {
			container:
				"border-2 border-dashed border-gray-300 hover:border-[#3A7DC0] hover:bg-gray-100 p-8 rounded-lg text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-40",
			icon: "text-4xl mb-3 text-[#085691]",
			title: "font-medium text-lg",
			description: "text-base text-gray-500 mt-2",
			error: "text-red-500 text-sm mt-2 ml-1 flex items-center gap-1",
		},
		error: {
			container: "border-red-500 border-3",
			icon: "text-red-500",
		},
		dragging: {
			container: "border-[#3A7DC0] bg-[#3A7DC0]/5",
		},
	},
};
const dropZoneVariantOverrides: Record<
	string,
	Partial<DialcaUI.DropZoneStates>
> = {
	dark: {
		normal: {
			container:
				"border-2 bg-gray-800 border-dashed border-[#3A7DC0] hover:border-[#3a8dc0] hover:bg-gray-800/95 p-8 rounded-lg text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-40",
			icon: "text-4xl mb-3 text-[#3A7DC0]",
			title: "font-medium text-gray-400 text-lg",
			description: "text-base text-gray-400 mt-2",
		},
		error: {
			container: "border-red-400 border-3",
			icon: "text-red-400",
		},
		dragging: {
			container: "border-[#3A8DC0] bg-[#3A8DC0]/5",
		},
	},
};
// Loader
const loaderDefaultVariants: Record<string, DialcaUI.LoaderStates> = {
	default: {
		normal: {
			container: "flex items-center justify-center flex-col gap-2",
			outerRing:
				"border-2 border-transparent animate-spin rounded-full border-t-[#3A7DC0] flex items-center justify-center",
			innerRing:
				"border-2 border-transparent animate-spin rounded-full border-t-[#085691]",
			content: "text-[#3A7DC0] text-sm font-medium",
		},
		error: {
			outerRing: "border-t-red-500!",
			innerRing: "border-t-red-700!",
			content: "text-red-500!",
		},
		success: {
			outerRing: "border-t-green-500!",
			innerRing: "border-t-green-700!",
			content: "text-green-500!",
		},
		disabled: {
			outerRing: "border-t-gray-400 opacity-50",
			innerRing: "border-t-gray-500 opacity-50",
			content: "text-gray-400",
		},
	},
};
const loaderVariantOverrides: Record<string, Partial<DialcaUI.LoaderStates>> = {
	dark: {
		normal: {
			outerRing:
				"border-2 border-transparent animate-spin rounded-full border-t-[#d79b5f] flex items-center justify-center",
			innerRing:
				"border-2 border-transparent animate-spin rounded-full border-t-[#f3c892]",
			content: "text-gray-300",
		},
	},

	pulse: {
		normal: {
			container: "flex items-center justify-center",
			outerRing:
				"bg-[#085691] animate-pulse! rounded-full flex items-center justify-center",
			innerRing:
				"bg-[#3A7DC0] animate-pulse! rounded-full opacity-60 delay-100",
		},
	},

	dots: {
		normal: {
			container: "flex items-center justify-center space-x-1",
			outerRing: "w-3 h-3 bg-[#3A7DC0] rounded-full animate-bounce",
			innerRing:
				"w-3 h-3 bg-[#085691] rounded-full animate-bounce delay-100",
		},
	},

	minimal: {
		normal: {
			outerRing:
				"border border-gray-300 animate-spin rounded-full border-t-[#3A7DC0]",
			innerRing: "hidden", // Solo un anillo
		},
	},
};
// Select
const selectDefaultVariants: Record<string, DialcaUI.SelectStates> = {
	default: {
		normal: {
			container: "relative",
			input: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none 
                transition-all duration-300 ease-in-out text-lg bg-transparent
                cursor-pointer flex items-center min-h-[3.25rem]
                border-gray-300
            `,
			label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-white z-10 top-[45%] -translate-y-1/2 text-lg text-gray-500
            `,
			icon: "absolute left-3 top-[45%] -translate-y-1/2 text-[#3A7DC0] text-[1.3rem] z-10",
			menu: "absolute z-40 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto",
			arrow: "absolute right-3 top-1/2 -translate-y-1/2 text-[#3A7DC0] transition-transform duration-300",
			option: "px-4 py-2.5 cursor-pointer hover:bg-[#3A7DC0]/20 transition-colors",
			selectedOption: "bg-[#085691]/30 text-[#085691] font-medium",
		},
		error: {
			input: "border-red-500! ring-red-500!",
			label: "text-red-500!",
			icon: "text-red-500!",
			arrow: "text-red-500!",
			error: "text-red-500 text-sm mt-1 ml-1 flex items-center gap-1",
			selectedOption:
				"bg-red-50 text-red-500 font-medium hover:bg-red-100",
		},
		disabled: {
			input: "bg-gray-100 text-gray-500 cursor-not-allowed opacity-50",
			label: "text-gray-500",
			icon: "text-gray-500",
			arrow: "text-gray-500",
		},
		focused: {
			input: "ring-2 ring-[#3A7DC0]! border-[#3A7DC0]!",
			label: "-top-0.5! -translate-y-1/2 text-[.85rem] text-[#3A7DC0]!",
		},
		open: {
			input: "ring-2 ring-[#3A7DC0]! border-[#3A7DC0]!",
			arrow: "rotate-180",
			label: "-top-0.5 -translate-y-1/2 text-[.85rem] text-[#3A7DC0]!",
		},
		value: {
			label: "-top-0.5! -translate-y-1/2 text-[.85rem]",
		},
	},
};

const selectVariantOverrides: Record<string, Partial<DialcaUI.SelectStates>> = {
	dark: {
		normal: {
			input: `
                w-full p-3.5 border-2 border-solid rounded-lg outline-none 
                transition-all duration-300 ease-in-out text-lg
                cursor-pointer relative flex items-center min-h-[3.25rem]
                bg-gray-800 text-white border-gray-600
            `,
			label: `
                absolute left-[1em] px-1.5 py-0 pointer-events-none transition-all duration-300 ease-in-out
                bg-gray-800 z-10 top-[45%] -translate-y-1/2 text-lg text-gray-300
            `,
			icon: "absolute left-3 top-[45%] -translate-y-1/2 text-gray-300 text-[1.3rem] z-10",
			menu: "absolute z-40 left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto",
			arrow: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 transition-transform duration-300",
			option: "px-4 py-2.5 cursor-pointer hover:bg-gray-700 transition-colors text-white",
		},
		error: {
			input: "border-red-400! ring-red-400!",
			label: "!text-red-400",
			icon: "!text-red-400",
			arrow: "!text-red-400",
			selectedOption:
				"bg-red-800! text-red-400! font-medium hover:bg-red-900!",
		},
		focused: {
			input: "ring-2 ring-gray-400! border-gray-400!",
			label: "-top-0.5! -translate-y-1/2 text-[.85rem] text-gray-300 bg-gray-800",
		},
		open: {
			input: "ring-2 ring-gray-400! border-gray-400!",
			label: "-top-0.5! -translate-y-1/2 text-[.85rem] text-gray-300 bg-gray-800",
		},
		value: {
			label: "-top-0.5! -translate-y-1/2 text-[.85rem] text-gray-300 bg-gray-800",
		},
	},

	minimal: {
		normal: {
			input: `
                w-full p-2 border-0 border-b-2 outline-none 
                transition-all duration-300 ease-in-out text-lg bg-transparent
                cursor-pointer relative flex items-center min-h-[2.5rem]
                border-gray-300
            `,
			label: `
                absolute left-0 px-0 py-0 pointer-events-none transition-all duration-300 ease-in-out
                z-10 top-[45%] -translate-y-1/2 text-lg text-gray-500
            `,
			arrow: "absolute right-0 top-1/2 -translate-y-1/2 text-[#3A7DC0] transition-transform duration-300",
			menu: "absolute z-40 left-0 right-0 mt-1 bg-white border-0 border-t border-gray-200 shadow-md max-h-60 overflow-y-auto",
		},
		focused: {
			input: "border-[#3A7DC0]!",
			label: "-top-2! text-sm text-[#3A7DC0]!",
		},
		open: {
			input: "border-[#3A7DC0]!",
			label: "-top-2! text-sm text-[#3A7DC0]!",
		},
		value: {
			label: "-top-2! text-sm text-[#3A7DC0]!",
		},
	},
};
// Radio
const radioDefaultVariants: Record<string, DialcaUI.RadioStates> = {
	default: {
		normal: {
			container:
				"flex items-start space-x-3 transition-all duration-300 ease-in-out",
			radio: `
                mt-1 w-5 h-5 cursor-pointer border-2 border-solid rounded-full 
                transition-all appearance-none radio-checked focus:outline-2 
                focus:outline-offset-2 border-gray-300 hover:border-[#3A7DC0] 
                focus:outline-[#3A7DC0]
            `,
			label: "flex-1 cursor-pointer",
			text: "font-medium text-gray-700",
			description: "text-sm text-gray-500 mt-1",
		},
		checked: {
			radio: "bg-[#3A7DC0]! border-[#3A7DC0]!",
			text: "text-gray-900",
		},
		disabled: {
			container: "opacity-50",
			radio: "cursor-not-allowed border-gray-300 bg-gray-100",
			label: "cursor-not-allowed",
			text: "text-gray-500",
		},
		error: {
			radio: "border-red-500! hover:border-red-600! focus:outline-red-500! checked:bg-red-500! checked:border-red-500!",
			text: "text-red-700",
			error: "text-red-500 text-sm mt-2 flex items-center gap-1",
		},
		focused: {
			radio: "ring-2 ring-[#3A7DC0] ring-opacity-50",
		},
	},
};

const radioVariantOverrides: Record<string, Partial<DialcaUI.RadioStates>> = {
	card: {
		normal: {
			container: `
                flex items-start space-x-3 p-4 border rounded-lg cursor-pointer 
                transition-all ease-in duration-300 hover:bg-gray-50 border-gray-200
            `,
			radio: `
                mt-1 w-5 h-5 cursor-pointer border-2 border-solid rounded-full 
                transition-all appearance-none radio-checked
                border-gray-300 hover:border-[#3A7DC0] focus:outline-[#3A7DC0]
                focus:outline-2 focus:outline-offset-2
            `,
		},
		checked: {
			container: "bg-[#3A7DC0]/10! border-[#3A7DC0]/50!",
			radio: "bg-[#3A7DC0]! border-[#3A7DC0]!",
		},
		error: {
			container: "border-red-200 hover:bg-red-50",
			radio: "border-red-500! checked:bg-red-500! checked:border-red-500!",
		},
	},

	minimal: {
		normal: {
			container: "flex items-center space-x-2",
			radio: `
                w-4 h-4 cursor-pointer border-2 border-solid rounded-full 
                transition-all appearance-none radio-checked
                border-gray-300 hover:border-[#3A7DC0] focus:outline-[#3A7DC0]
                focus:outline-1 focus:outline-offset-1
            `,
			text: "text-sm text-gray-700",
		},
	},

	dark: {
		normal: {
			container:
				"flex items-start space-x-3 transition-all duration-300 ease-in-out",
			radio: `
                mt-1 w-5 h-5 cursor-pointer border-2 border-solid rounded-full 
                transition-all appearance-none radio-checked
                bg-gray-800 border-gray-600 hover:border-gray-400 focus:outline-gray-400
                focus:outline-2 focus:outline-offset-2
            `,
			text: "font-medium text-gray-200",
			description: "text-sm text-gray-400 mt-1",
		},
		checked: {
			radio: "bg-gray-300! border-gray-300!",
		},
		error: {
			radio: "border-red-400! hover:border-red-300! focus:outline-red-400! checked:bg-red-400! checked:border-red-400!",
			text: "text-red-300",
		},
	},
};
// Modal
const modalDefaultVariants: Record<string, DialcaUI.ModalStates> = {
    default: {
        normal: {
            overlay: `
                fixed inset-0 z-50 flex items-center justify-center p-4
                bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out
            `,
            container: `
                relative w-full max-w-md bg-white rounded-lg shadow-xl
                transition-all duration-300 ease-out
            `,
            header: `
                flex items-center justify-between p-6 pb-4
                border-b border-gray-200
            `,
            title: `
                text-lg font-semibold text-gray-900
            `,
            closeButton: `
                p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100
                rounded-full transition-colors duration-200 cursor-pointer
            `,
            content: `
                p-6
            `,
        },
        open: {
            overlay: "opacity-100",
            container: "scale-100 opacity-100 translate-y-0",
        },
        sm: {
            container: "max-w-sm",
        },
        md: {
            container: "max-w-md",
        },
        lg: {
            container: "max-w-lg",
        },
        xl: {
            container: "max-w-xl",
        },
        full: {
            container: "max-w-full w-full h-full m-0 rounded-none",
            overlay: "p-0",
        },
        center: {
            overlay: "items-center justify-center",
        },
        top: {
            overlay: "items-start justify-center pt-16",
        },
        bottom: {
            overlay: "items-end justify-center pb-16",
        },
        fade: {
            overlay: "transition-opacity duration-300",
            container: "transition-all duration-300",
        },
        slideUp: {
            container: "transition-all duration-300 translate-y-4 opacity-0",
            overlay: "transition-opacity duration-300",
        },
        slideDown: {
            container: "transition-all duration-300 -translate-y-4 opacity-0",
            overlay: "transition-opacity duration-300",
        },
        zoom: {
            container: "transition-all duration-300 scale-95 opacity-0",
            overlay: "transition-opacity duration-300",
        },
        hasTitle: {
            content: "pt-0",
        },
    },
};

const modalVariantOverrides: Record<string, Partial<DialcaUI.ModalStates>> = {
    dark: {
        normal: {
            overlay: `
                fixed inset-0 z-50 flex items-center justify-center p-4
                bg-black/70 backdrop-blur-sm
            `,
            container: `
                relative w-full max-w-md bg-gray-800 rounded-lg shadow-xl
                transform transition-all duration-300 ease-out
            `,
            header: `
                flex items-center justify-between p-6 pb-4
                border-b border-gray-700
            `,
            title: `
                text-lg font-semibold text-white
            `,
            closeButton: `
                p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700
                rounded-full transition-colors duration-200 cursor-pointer
            `,
            content: `
                p-6 text-gray-200
            `,
        },
    },

    minimal: {
        normal: {
            overlay: `
                fixed inset-0 z-50 flex items-center justify-center p-4
                bg-black/30
            `,
            container: `
                relative w-full max-w-md bg-white rounded-sm shadow-lg
                transform transition-all duration-200 ease-out
            `,
            header: `
                flex items-center justify-between p-4 pb-2
            `,
            title: `
                text-base font-medium text-gray-800
            `,
            closeButton: `
                p-1 text-gray-500 hover:text-gray-700
                transition-colors duration-200 cursor-pointer
            `,
            content: `
                p-4 pt-2
            `,
        },
    },

    glassmorphism: {
        normal: {
            overlay: `
                fixed inset-0 z-50 flex items-center justify-center p-4
                bg-black/20 backdrop-blur-md
            `,
            container: `
                relative w-full max-w-md 
                bg-white/80 backdrop-blur-lg border border-white/20
                rounded-xl shadow-2xl
                transform transition-all duration-300 ease-out
            `,
            header: `
                flex items-center justify-between p-6 pb-4
                border-b border-white/20
            `,
            title: `
                text-lg font-semibold text-gray-900
            `,
            closeButton: `
                p-2 text-gray-600 hover:text-gray-800 hover:bg-white/20
                rounded-full transition-colors duration-200
            `,
            content: `
                p-6
            `,
        },
    },
};

// ============
// Hooks
// ============

/**
 * Hook to get styles for Input variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.InputStates>} [customVariants={}] - Custom variants.
 * @param {{ hasErrors?: boolean; disabled?: boolean; focused?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.InputVariant) => string }}
 */
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
		focused: states.focused,
	};
	return useVariantStyles<DialcaUI.InputStates, DialcaUI.InputVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		inputDefaultVariants,
		inputVariantOverrides
	);
};

/**
 * Hook to get styles for TxtArea variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.TxtAreaStates>} [customVariants={}] - Custom variants.
 * @param {{ hasErrors?: boolean; disabled?: boolean; focused?: boolean; resizing?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.TxtAreaVariant) => string }}
 */
export const useTxtAreaVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.TxtAreaStates> = {},
	states: {
		hasErrors?: boolean;
		disabled?: boolean;
		focused?: boolean;
		resizing?: boolean;
	} = {},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		error: states.hasErrors,
		disabled: states.disabled,
		focused: states.focused,
		resizing: states.resizing,
	};
	return useVariantStyles<DialcaUI.TxtAreaStates, DialcaUI.TxtAreaVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		txtAreaDefaultVariants,
		txtAreaVariantOverrides
	);
};

/**
 * Hook to get styles for DropZone variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.DropZoneStates>} [customVariants={}] - Custom variants.
 * @param {{ isDragging?: boolean; hasErrors?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.DropZoneVariant) => string }}
 */
export const useDropZoneVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.DropZoneStates> = {},
	states: { isDragging?: boolean; hasErrors?: boolean } = {},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		error: states.hasErrors,
		dragging: states.isDragging,
	};
	return useVariantStyles<DialcaUI.DropZoneStates, DialcaUI.DropZoneVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		dropZoneDefaultVariants,
		dropZoneVariantOverrides
	);
};

/**
 * Hook to get styles for Loader variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.LoaderStates>} [customVariants={}] - Custom variants.
 * @param {{ hasErrors?: boolean; disabled?: boolean; success?: boolean }} states - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.LoaderVariant) => string }}
 */
export const useLoaderVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.LoaderStates> = {},
	states: {
		hasErrors?: boolean;
		disabled?: boolean;
		success?: boolean;
	},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		error: states.hasErrors,
		disabled: states.disabled,
		success: states.success,
	};
	return useVariantStyles<DialcaUI.LoaderStates, DialcaUI.LoaderVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		loaderDefaultVariants,
		loaderVariantOverrides
	);
};

/**
 * Hook to get styles for Select variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.SelectStates>} [customVariants={}] - Custom variants.
 * @param {{ hasErrors?: boolean; disabled?: boolean; focused?: boolean; open?: boolean; value?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.SelectVariant) => string }}
 */
export const useSelectVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.SelectStates> = {},
	states: {
		hasErrors?: boolean;
		disabled?: boolean;
		focused?: boolean;
		open?: boolean;
		value?: boolean;
	} = {},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		error: states.hasErrors,
		disabled: states.disabled,
		focused: states.focused,
		open: states.open,
		value: states.value,
	};
	return useVariantStyles<DialcaUI.SelectStates, DialcaUI.SelectVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		selectDefaultVariants,
		selectVariantOverrides
	);
};

/**
 * Hook to get styles for Radio variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.RadioStates>} [customVariants={}] - Custom variants.
 * @param {{ checked?: boolean; disabled?: boolean; hasErrors?: boolean; focused?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.RadioVariant) => string }}
 */
export const useRadioVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.RadioStates> = {},
	states: {
		checked?: boolean;
		disabled?: boolean;
		hasErrors?: boolean;
		focused?: boolean;
	} = {},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		checked: states.checked,
		disabled: states.disabled,
		error: states.hasErrors,
		focused: states.focused,
	};
	return useVariantStyles<DialcaUI.RadioStates, DialcaUI.RadioVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		radioDefaultVariants,
		radioVariantOverrides
	);
};
/**
 * Hook to get styles for Modal variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.ModalStates>} [customVariants={}] - Custom variants.
 * @param {{ open?: boolean; size?: string; position?: string; animation?: string; hasTitle?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.ModalVariant) => string }}
 */
export const useModalVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.ModalStates> = {},
    states: {
        open?: boolean;
        size?: string;
        position?: string;
        animation?: string;
        hasTitle?: boolean;
    } = {},
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        open: states.open,
        [states.size || "md"]: true,
        [states.position || "center"]: true,
        [states.animation || "fade"]: true,
        hasTitle: states.hasTitle,
    };
    return useVariantStyles<DialcaUI.ModalStates, DialcaUI.ModalVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        modalDefaultVariants,
        modalVariantOverrides
    );
};

/**
 * Generic hook to get styles for any variant-based component.
 *
 * @template TStates, TVariant
 * @param {string} variant - Variant key.
 * @param {Record<string, TStates>} customVariants - Custom variants.
 * @param {Record<string, boolean | undefined>} states - State flags.
 * @param {boolean} extendDefault - If true, merges custom variants with defaults.
 * @param {Record<string, TStates>} defaultVariants - Default variants.
 * @param {Record<string, Partial<TStates>>} variantOverrides - Variant overrides.
 * @returns {{ getStyles: (element: keyof TVariant) => string }}
 */
const useVariantStyles = <
	TStates extends Record<string, any>,
	TVariant extends Record<string, any>
>(
	variant: string,
	customVariants: Record<string, TStates> = {},
	states: Record<string, boolean | undefined>,
	extendDefault: boolean,
	defaultVariants: Record<string, TStates>,
	variantOverrides: Record<string, Partial<TStates>>
) => {
	const processedVariants: Record<string, TStates> = {
		...defaultVariants,
	};
	Object.entries(variantOverrides).forEach(([key, override]) => {
		processedVariants[key] = mergeVariants(
			defaultVariants.default || ({} as TStates),
			override
		);
	});
	Object.entries(customVariants).forEach(([key, customVariant]) => {
		if (extendDefault) {
			processedVariants[key] = mergeVariants(
				defaultVariants.default || ({} as TStates),
				customVariant
			);
		} else {
			processedVariants[key] = customVariant;
		}
	});
	const selectedVariant =
		processedVariants[variant] ||
		processedVariants.default ||
		({} as TStates);
	/**
	 * Returns the styles for a given element, considering the current states.
	 * @param {keyof TVariant} element - The element to get styles for.
	 * @returns {string} The computed class names.
	 */
	const getStyles = (element: keyof TVariant) => {
		let styles: string[] = [];
		if (selectedVariant.normal) {
			const normalStyles = (selectedVariant.normal as any)[element];
			if (normalStyles) styles.push(normalStyles);
		}
		Object.entries(states).forEach(([stateName, isActive]) => {
			if (
				isActive &&
				stateName !== "normal" &&
				selectedVariant[stateName]
			) {
				const stateStyles = (selectedVariant[stateName] as any)[
					element
				];
				if (stateStyles) styles.push(stateStyles);
			}
		});
		return cn(...styles);
	};

	return { getStyles };
};
