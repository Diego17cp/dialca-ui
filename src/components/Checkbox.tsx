import { useState, useId, useRef, useEffect, type InputHTMLAttributes, type MouseEventHandler } from "react";
import { cn, useCheckboxVariantStyles } from "../utils/classNames";
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

    const { getStyles } = useCheckboxVariantStyles(
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

    // Size mappings
    const sizeStyles = {
        sm: {
            checkbox: "w-5 h-5",
            icon: "w-3 h-3",
            label: "text-sm",
            description: "text-xs"
        },
        md: {
            checkbox: "w-7 h-7", 
            icon: "w-4 h-4",
            label: "text-base",
            description: "text-sm"
        },
        lg: {
            checkbox: "w-8 h-8",
            icon: "w-5 h-5",
            label: "text-lg",
            description: "text-base"
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onCheckedChange?.(e.target.checked);
            rest.onChange?.(e);
        }
    };
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        if (!disabled) {
            if (e.target === e.currentTarget || !(e.target as HTMLElement).closest("label")) {
                const newChecked = !checked;
                onCheckedChange?.(newChecked)
                if (checkboxRef.current) {
                    checkboxRef.current.checked = newChecked;
                    const evt = new Event('change', { bubbles: true });
                    checkboxRef.current.dispatchEvent(evt);
                }
            }
        }
    }

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
            className={cn(getStyles("container"),  
                classes.container,
                className
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Checkbox Input */}
            <div onClick={handleClick} className={cn(
                getStyles("wrapper"),
                classes.wrapper
            )}>
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    id={id}
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="sr-only"
                    {...rest}
                />
                
                {/* Checkbox Visual */}
                <div className={cn(
                    getStyles("checkbox"),
                    sizeStyles[size].checkbox,
                    classes.checkbox
                )}>
                    {/* Background */}
                    <div className={cn(
                        getStyles("background"),
                        classes.background
                    )} />
                    
                    {/* Icon Container */}
                    <div className={cn(
                        getStyles("icon"),
                        sizeStyles[size].icon,
                        classes.icon
                    )}>
                        {variant === "switch" ? (
                            // Switch toggle
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
                                            strokeDashoffset: checked ? 0 : 12,
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
                <div className="flex-1 min-w-0">
                    {label && (
                        <label
                            htmlFor={id}
                            className={cn(
                                getStyles("label"),
                                sizeStyles[size].label,
                                classes.label
                            )}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p className={cn(
                            getStyles("description"),
                            sizeStyles[size].description,
                            classes.description
                        )}>
                            {description}
                        </p>
                    )}
                    {hasErrors && errorMessage && (
                        <div className={cn(
                            getStyles("error"),
                            sizeStyles[size].description,
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