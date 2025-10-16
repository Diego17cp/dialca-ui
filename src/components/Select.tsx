import { useState, useRef, useEffect } from "react";
import { useSelectVariantStyles } from "../hooks";
import { cn } from "../utils";
import { FaChevronDown, FaExclamationCircle } from "react-icons/fa";

/**
 * Option for the {@link Select} component.
 */
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

/**
 * Props for the {@link Select} component.
 */
export interface SelectProps {
    /** Label for the select input. */
    label: string;
    /** Current selected value. */
    value: string;
    /** Array of selectable options. */
    options?: SelectOption[];
    /** Callback when selection changes. */
    onChange: (e: { target: { value: string } }) => void;
    /** If true, marks the field as required. */
    required?: boolean;
    /** If true, disables the select input. */
    disabled?: boolean;
    /** Icon to display inside the input. */
    icon?: React.ReactNode;
    /** Additional className for the container. */
    className?: string;
    /** Name attribute for the hidden input. */
    name?: string;
    /** If true, displays error state. */
    hasErrors?: boolean;
    /** Callback when the input loses focus. */
    onBlur?: () => void;
    /** Error message to display. */
    errorMessage?: string;
    /** Custom icon for error state. */
    errorIcon?: React.ReactNode;
    /** Variant key for custom styles. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.SelectStates>;
    /** Custom classes for styling. */
    classes?: {
        container?: string;
        input?: string;
        label?: string;
        icon?: string;
        error?: string;
        menu?: string;
        arrow?: string;
        option?: string;
        selectedOption?: string;
    };
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Maximum height for the dropdown menu. */
    maxHeight?: string;
    /** Custom loading icon. */
    loadingIcon?: React.ReactNode;
    /** If true, shows loading state. */
    isLoading?: boolean;
    /** Callback when the input gains focus. */
    onFocus?: () => void;
    /** Placeholder text when no option is selected. */
    placeholder?: string;
}

/**
 * **Select** renders a custom select dropdown.
 *
 * - Supports variants and custom styles
 * - Displays error messages and icons
 * - Handles disabled, loading, and required states
 * 
 * @component
 * @example
 * ```tsx
 * <Select
 *   label="Choose an option"
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 *   options={[
 *     { value: "option1", label: "Option 1" },
 *     { value: "option2", label: "Option 2" }
 *   ]}
 *   required
 *   hasErrors={!selected}
 *   errorMessage="Please select an option"
 * />
 * ```
 *
 * @param props - See {@link SelectProps} for all supported props.
 */
export const Select = ({
    label,
    value,
    options = [],
    onChange,
    required = false,
    disabled = false,
    isLoading = false,
    maxHeight = "15rem",
    loadingIcon,
    onFocus = () => {},
    icon,
    className = "",
    name = "",
    hasErrors = false,
    onBlur = () => {},
    errorMessage = "",
    errorIcon,
    classes = {},
    extendDefault = true,
    variant = "default",
    variants: customVariants = {},
    placeholder = "",
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const { getStyles, shouldUseCSS } = useSelectVariantStyles(
        variant,
        customVariants,
        {
            hasErrors,
            disabled,
            focused: isFocused,
            open: isOpen,
            value: !!value
        },
        extendDefault
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                if (isOpen) {
                    setIsOpen(false);
                    onBlur();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [onBlur, isOpen]);

    const handleOpen = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
        setIsFocused(true);
        onFocus();
    };

    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (optionValue: string) => {
        if (disabled) return;
        onChange({ target: { value: optionValue } });
        setIsOpen(false);
        setIsFocused(false);
        onBlur();
    };

    const handleBlur = () => {
        setIsFocused(false);
        onBlur();
    };

    // CSS classes
    const blockClass = "dialca-select";
    const cssContainerClass = shouldUseCSS ? blockClass : '';
    const cssContainerModifiers = shouldUseCSS ? {
        [`${blockClass}--${variant}`]: variant !== 'default',
        [`${blockClass}--error`]: hasErrors,
        [`${blockClass}--disabled`]: disabled,
        [`${blockClass}--focused`]: isFocused,
        [`${blockClass}--open`]: isOpen,
        [`${blockClass}--has-value`]: !!value,
        [`${blockClass}--has-icon`]: !!icon,
        [`${blockClass}--loading`]: isLoading && !!loadingIcon,
    } : {};

    const containerClasses = cn(
        cssContainerClass,
        cssContainerModifiers,
        getStyles("container"),
        classes.container,
        className
    );

    return (
        <div>
            <div className={containerClasses} ref={selectRef}>
                <div
                    className={cn(
                        shouldUseCSS ? `${blockClass}__field` : ``,
                        getStyles("input"),
                        classes.input
                    )}
                    onClick={handleOpen}
                    onBlur={handleBlur}
                    tabIndex={disabled ? -1 : 0}
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-disabled={disabled}
                >
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__value` : 'flex-1 flex items-center gap-2',
                        !selectedOption && (shouldUseCSS ? `${blockClass}__placeholder` : 'text-gray-400')
                    )}>
                        {selectedOption ? (
                            <span style={{
                                display: "flex",
                                alignItems: "center",
                                gap: ".5rem"
                            }}>
                                {selectedOption.icon}
                                {selectedOption.label}
                            </span>
                        ) : (
                            placeholder || "\u00A0"
                        )}
                    </div>
                    <input type="hidden" name={name} value={value} />
                </div>
                
                <label
                    className={cn(
                        shouldUseCSS ? `${blockClass}__label` : ``,
                        getStyles("label"),
                        classes.label
                    )}
                >
                    {label}
                    {required && (
                        <span className={cn(
                            shouldUseCSS ? `${blockClass}__required` : 'text-red-500 font-black ml-0.5'
                        )}>
                            *
                        </span>
                    )}
                </label>

                {icon && (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__icon` : '',
                        getStyles("icon"),
                        classes.icon
                    )}>
                        {icon}
                    </div>
                )}

                {isLoading && loadingIcon ? (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__loader` : ''
                    )}>
                        {loadingIcon}
                    </div>
                ) : (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__arrow` : '',
                        isOpen && !shouldUseCSS ? 'rotate-180' : '',
                        getStyles("arrow"),
                        classes.arrow
                    )}>
                        <FaChevronDown />
                    </div>
                )}

                {isOpen && !disabled && (
                    <div
                        className={cn(
                            shouldUseCSS ? `${blockClass}__menu` : ``,
                            getStyles("menu"),
                            classes.menu
                        )}
                        style={{ maxHeight }}
                        role="listbox"
                    >
                        {options.length > 0 ? (
                            options.map((option) => (
                                <div
                                    key={option.value}
                                    className={cn(
                                        shouldUseCSS ? `${blockClass}__option` : '',
                                        value === option.value && (shouldUseCSS ? `${blockClass}__option--selected` : ''),
                                        option.disabled && (shouldUseCSS ? `${blockClass}__option--disabled` : 'opacity-50 cursor-not-allowed'),
                                        getStyles("option"),
                                        value === option.value && getStyles("selectedOption"),
                                        classes.option,
                                        value === option.value && classes.selectedOption
                                    )}
                                    onClick={() => !option.disabled && handleSelect(option.value)}
                                    role="option"
                                    aria-selected={value === option.value}
                                >
                                    <span style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: ".5rem"
                                    }}>
                                        {option.icon}
                                        {option.label}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className={cn(
                                shouldUseCSS ? `${blockClass}__no-options` : 'px-4 py-3 text-gray-500 text-center'
                            )}>
                                No hay opciones disponibles
                            </div>
                        )}
                    </div>
                )}
            </div>

            {hasErrors && errorMessage && (
                <div className={cn(
                    shouldUseCSS ? `${blockClass} ${blockClass}__error` : '',
                    getStyles("error"),
                    classes.error
                )}>
                    {errorIcon || <FaExclamationCircle size={17} />}
                    {errorMessage}
                </div>
            )}
        </div>
    );
};