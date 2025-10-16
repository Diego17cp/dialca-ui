import { useVariantStyles } from "../utils";

/**
 * Hook to get styles for Checkbox variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.CheckboxStates>} [customVariants={}] - Custom variants.
 * @param {{ checked?: boolean; indeterminate?: boolean; disabled?: boolean; hasErrors?: boolean; focused?: boolean; hover?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.CheckboxVariant) => string }}
 */
export const useCheckboxVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.CheckboxStates> = {},
    states: {
        checked?: boolean;
        indeterminate?: boolean;
        disabled?: boolean;
        hasErrors?: boolean;
        focused?: boolean;
        hover?: boolean;
    } = {},
    extendDefault: boolean = true
) => {
    const mappedStates = {
        normal: true,
        checked: states.checked && !states.hasErrors,
        indeterminate: states.indeterminate && !states.hasErrors,
        disabled: states.disabled,
        error: states.hasErrors && !states.checked && !states.indeterminate,
        errorChecked: states.hasErrors && (states.checked || states.indeterminate),
        focused: states.focused,
        hover: states.hover,
    };
    
    return useVariantStyles<DialcaUI.CheckboxStates, DialcaUI.CheckboxVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        "checkbox"
    );
};