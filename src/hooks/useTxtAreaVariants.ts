import { useVariantStyles } from "../utils";

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
		"textarea"
	);
};