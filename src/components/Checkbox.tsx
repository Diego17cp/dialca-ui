import { useState, useId, useRef, useEffect, type InputHTMLAttributes, type MouseEventHandler } from "react";
import { useCheckboxVariantStyles } from "../hooks";
import { cn } from "../utils";
import { CiWarning } from "react-icons/ci";

/**
 * Props for the {@link Checkbox} component.
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Label text for the checkbox. */
    label?: string;
    /** Description text below the label. */
    description?: string;
    /** If true, shows checked state. */
    checked?: boolean;
    /** Callback when checked state changes (receives the new checked boolean). */
    onCheckedChange?: (checked: boolean) => void;
    /** If true, shows indeterminate state. */
    indeterminate?: boolean;
    /** If true, disables the checkbox. */
    disabled?: boolean;
    /** If true, shows error state. */
    hasErrors?: boolean;
    /** Error message to display. */
    errorMessage?: string;
    /** Custom error icon (default is a warning icon). */
    errorIcon?: React.ReactNode;
    /** Size preset for the checkbox. */
    size?: "sm" | "md" | "lg";
    /** Checkbox variant/style. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.CheckboxStates>;
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Custom classes for styling. */
    classes?: {
        container?: string;
        wrapper?: string;
        checkbox?: string;
        background?: string;
        icon?: string;
        label?: string;
        description?: string;
        error?: string;
    };
    /** Additional className for the container. */
    className?: string;
    /** Mouse enter handler for the outer container (HTMLDivElement) */
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    /** Mouse leave handler for the outer container (HTMLDivElement) */
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

/**
 * **Checkbox** renders a customizable checkbox input with various states and animations.
 *
 * - Support for indeterminate state
 * - Custom variants and styles
 * - Animated check mark and transitions
 * - Label and description support
 * - Error states with messages
 * - Size variations
 * - Accessibility features
 *
 * @component
 * @example
 * ```tsx
 * <Checkbox
 *   checked={isChecked}
 *   onChange={setIsChecked}
 *   label="Accept terms and conditions"
 *   description="Required to continue"
 *   variant="default"
 * />
 * ```
 */
export const Checkbox = ({
    label,
    description,
    checked = false,
    onCheckedChange,
    indeterminate = false,
    disabled = false,
    hasErrors = false,
    errorMessage,
    size = "md",
    variant = "default",
    variants: customVariants = {},
    extendDefault = true,
    classes = {},
    className = "",
    id: providedId,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    errorIcon = <CiWarning />,
    ...rest
}: CheckboxProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const checkboxRef = useRef<HTMLInputElement>(null);
    
    const checkboxId = useId();
    const id = providedId || checkboxId;

    const { getStyles, shouldUseCSS } = useCheckboxVariantStyles(
        variant,
        customVariants,
        {
            checked: checked || indeterminate,
            indeterminate,
            disabled,
            hasErrors,
            focused: isFocused,
            hover: isHovered,
        },
        extendDefault
    );

    // Set indeterminate property on the input element
    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    // CSS classes
    const blockClass = "dialca-checkbox";
    const cssContainerClass = shouldUseCSS ? blockClass : '';
    const cssContainerModifiers = shouldUseCSS ? {
        [`${blockClass}--${variant}`]: variant !== 'default',
        [`${blockClass}--${size}`]: size !== 'md',
        [`${blockClass}--checked`]: (checked || indeterminate) && !hasErrors,
        [`${blockClass}--indeterminate`]: indeterminate && !hasErrors,
        [`${blockClass}--disabled`]: disabled,
        [`${blockClass}--error`]: hasErrors && !checked && !indeterminate,
        [`${blockClass}--error-checked`]: hasErrors && (checked || indeterminate),
        [`${blockClass}--focused`]: isFocused,
        [`${blockClass}--hover`]: isHovered,
    } : {};

    const containerClasses = cn(
        cssContainerClass,
        cssContainerModifiers,
        getStyles("container"),
        classes.container,
        className
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onCheckedChange?.(e.target.checked);
            rest.onChange?.(e);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled) {
            if (e.target === e.currentTarget || !(e.target as HTMLElement).closest("label")) {
                const newChecked = !checked;
                onCheckedChange?.(newChecked);
                if (checkboxRef.current) {
                    checkboxRef.current.checked = newChecked;
                    const evt = new Event('change', { bubbles: true });
                    checkboxRef.current.dispatchEvent(evt);
                }
            }
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(true);
        onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(false);
        onMouseLeave?.(e);
    };

    return (
        <div 
            className={containerClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Checkbox Input */}
            <div 
                onClick={handleClick} 
                className={cn(
                    shouldUseCSS ? `${blockClass}__wrapper` : '',
                    getStyles("wrapper"),
                    classes.wrapper
                )}
            >
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    id={id}
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="dialca-sr-only"
                    {...rest}
                />
                
                {/* Checkbox Visual */}
                <div className={cn(
                    shouldUseCSS ? `${blockClass}__input-container` : '',
                    !shouldUseCSS && getStyles("checkbox"),
                    classes.checkbox
                )}>
                    {/* Background */}
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__background` : '',
                        getStyles("background"),
                        classes.background
                    )} />
                    
                    {/* Icon Container */}
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__icon` : '',
                        getStyles("icon"),
                        classes.icon
                    )}>
                        {variant === "switch" ? (
                            // Switch toggle (empty div, styling via CSS)
                            <div />
                        ) : (
                            // Checkbox icon
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="none"
                                className="w-full h-full"
                            >
                                {indeterminate ? (
                                    // Indeterminate dash
                                    <path
                                        d="M6 12L18 12"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            strokeDasharray: 12,
                                            strokeDashoffset: checked || indeterminate ? 0 : 12,
                                            transition: 'stroke-dashoffset 0.3s ease 0.1s'
                                        }}
                                    />
                                ) : (
                                    // Check mark
                                    <path
                                        d="M4 12L10 18L20 6"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            strokeDasharray: 40,
                                            strokeDashoffset: checked ? 0 : 40,
                                            transition: 'stroke-dashoffset 0.3s ease 0.1s'
                                        }}
                                    />
                                )}
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* Label and Description */}
            {(label || description) && (
                <div className={cn(
                    shouldUseCSS ? `${blockClass}__label-container` : '',
                    !shouldUseCSS && "flex-1 min-w-0"
                )}>
                    {label && (
                        <label
                            htmlFor={id}
                            className={cn(
                                shouldUseCSS ? `${blockClass}__label` : '',
                                getStyles("label"),
                                classes.label
                            )}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p className={cn(
                            shouldUseCSS ? `${blockClass}__description` : '',
                            getStyles("description"),
                            classes.description
                        )}>
                            {description}
                        </p>
                    )}
                    {hasErrors && errorMessage && (
                        <div className={cn(
                            shouldUseCSS ? `${blockClass}__error` : '',
                            getStyles("error"),
                            classes.error
                        )}>
                            <span>{errorIcon}</span>
                            {errorMessage}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

Checkbox.displayName = "Checkbox";