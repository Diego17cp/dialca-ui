import { useVariantStyles } from "../utils";

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
		"modal"
	);
};