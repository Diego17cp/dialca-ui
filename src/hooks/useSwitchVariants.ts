import { useVariantStyles } from "../utils";

/**
 * Hook to get styles for Switch variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.SwitchStates>} [customVariants={}] - Custom variants.
 * @param {{ enabled?: boolean; disabled?: boolean; hasErrors?: boolean; focused?: boolean; hover?: boolean; loading?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.SwitchVariant) => string }}
 */
export const useSwitchVariantStyles = (
	variant: string = "default",
	customVariants: Record<string, DialcaUI.SwitchStates> = {},
	states: {
		enabled?: boolean;
		disabled?: boolean;
		hasErrors?: boolean;
		focused?: boolean;
		hover?: boolean;
		loading?: boolean;
	} = {},
	extendDefault: boolean = true
) => {
	const mappedStates = {
		normal: true,
		enabled: states.enabled,
		disabled: states.disabled,
		error: states.hasErrors,
		focused: states.focused,
		hover: states.hover,
		loading: states.loading,
	};
	
	return useVariantStyles<DialcaUI.SwitchStates, DialcaUI.SwitchVariant>(
		variant,
		customVariants,
		mappedStates,
		extendDefault,
		"switch"
	);
};