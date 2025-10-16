import { useVariantStyles } from "../utils";

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
		"loader"
	);
};