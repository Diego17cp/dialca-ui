import { useVariantStyles } from "../utils";

/**
 * Hook to get styles for SearchableSelect variants based on state and customizations.
 *
 * @param {string} [variant="default"] - Variant key.
 * @param {Record<string, DialcaUI.SearchableSelectStates>} [customVariants={}] - Custom variants.
 * @param {{ isOpen?: boolean; isFocused?: boolean; disabled?: boolean; hasErrors?: boolean; hover?: boolean; optionSelected?: boolean; optionHighlighted?: boolean; optionDisabled?: boolean }} [states={}] - State flags.
 * @param {boolean} [extendDefault=true] - If true, merges custom variants with defaults.
 * @returns {{ getStyles: (element: keyof DialcaUI.SearchableSelectVariant) => string }}
 */
export const useSearchableSelectVariantStyles = (
    variant: string = "default",
    customVariants: Record<string, DialcaUI.SearchableSelectStates> = {},
    states: {
        isOpen?: boolean;
        isFocused?: boolean;
        disabled?: boolean;
        hasErrors?: boolean;
        hover?: boolean;
        optionSelected?: boolean;
        optionHighlighted?: boolean;
        optionDisabled?: boolean;
    } = {},
    extendDefault: boolean = true
) => {
	const mappedStates = {
        normal: true,
        open: states.isOpen,
        closed: !states.isOpen,
        focused: states.isFocused,
        disabled: states.disabled,
        error: states.hasErrors,
        hover: states.hover,
        optionSelected: states.optionSelected,
        optionHighlighted: states.optionHighlighted,
        optionDisabled: states.optionDisabled,
    };
    
    return useVariantStyles<DialcaUI.SearchableSelectStates, DialcaUI.SearchableSelectVariant>(
        variant,
        customVariants,
        mappedStates,
        extendDefault,
        "searchable-select"
    );
}