import { useVariantStyles } from "../utils";

/**
 * Hook to get styles for Button variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.ButtonStates>} [customVariants={}] - Custom variants.
 * @param {{ disabled?: boolean; loading?: boolean; focused?: boolean; hover?: boolean; active?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.ButtonVariant) => string }}
 */
export const useButtonVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.ButtonStates> = {},
    states: {
        disabled?: boolean;
        loading?: boolean;
        focused?: boolean;
        hover?: boolean;
        active?: boolean;
    } = {},
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        disabled: states.disabled,
        loading: states.loading,
        focused: states.focused,
        hover: states.hover,
        active: states.active,
    };
    return useVariantStyles<DialcaUI.ButtonStates, DialcaUI.ButtonVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        "button",
    );
};