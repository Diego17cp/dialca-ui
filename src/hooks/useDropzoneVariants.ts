import { useVariantStyles } from "../utils";

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
		"dropzone"
	);
};