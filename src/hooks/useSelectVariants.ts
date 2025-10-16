import { useVariantStyles } from "../utils";

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
		"select"
	);
};