import { useVariantStyles } from "../utils";

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
		"radio-input"
	);
};