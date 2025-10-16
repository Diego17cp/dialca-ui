import { useVariantStyles } from "../utils";

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
		"input-field"
	);
};
