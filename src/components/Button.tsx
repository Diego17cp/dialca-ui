import { useState, type ReactNode, type ButtonHTMLAttributes } from "react";
import { cn, useButtonVariantStyles } from "../utils/classNames";

/**
 * Props for the {@link Button} component.
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Content to display inside the button. */
    children?: ReactNode;
    /** Button text (alternative to children). */
    text?: string;
    /** Icon to display alongside the text. */
    icon?: ReactNode;
    /** Position of the icon relative to text. */
    iconPosition?: "left" | "right";
    
    /** If true, shows loading state with spinner. */
    loading?: boolean;
    /** Custom loading icon/spinner. */
    loadingIcon?: ReactNode;
    /** Text to show when loading. */
    loadingText?: string;
    
    /** Size preset for the button. */
    size?: "sm" | "md" | "lg" | "xl";
    /** Button variant/style. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.ButtonStates>;
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Custom classes for styling. */
    classes?: {
        container?: string;
        content?: string;
        icon?: string;
        loader?: string;
    };
    /** Additional className for the button. */
    className?: string;
}

/**
 * **Button** renders a customizable button with various states and styles.
 *
 * - Supports variants and custom styles
 * - Loading states with custom spinners
 * - Icon support with positioning
 * - Multiple size options
 * - Hover, focus, and active states
 *
 * @component
 * @example
 * ```tsx
 * <Button
 *   variant="secondary"
 *   size="lg"
 *   icon={<FaUser />}
 *   loading={isSubmitting}
 *   onClick={handleSubmit}
 * >
 *   Submit Form
 * </Button>
 * ```
 */
export const Button = ({
    children,
    text,
    icon,
    iconPosition = "left",
    loading = false,
    loadingIcon,
    loadingText,
    size = "md",
    variant = "default",
    variants: customVariants = {},
    extendDefault = true,
    classes = {},
    className = "",
    disabled,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    ...rest
}: ButtonProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const isDisabled = disabled || loading;
    const content = children || text;
    const showLoadingText = loading && loadingText;
    const finalContent = showLoadingText ? loadingText : content;

    const { shouldUseCSS, getStyles } = useButtonVariantStyles(
        variant,
        customVariants,
        {
            disabled: isDisabled,
            loading,
            focused: isFocused,
            hover: isHovered,
            active: isActive,
        },
        extendDefault
    );

    // CSS classes
    const blockClass = "dialca-button";
    const cssContainerClass = shouldUseCSS ? blockClass : '';
    const cssContainerModifiers = shouldUseCSS ? {
        [`${blockClass}--${variant}`]: variant !== 'default',
        [`${blockClass}--${size}`]: size !== 'md',
        [`${blockClass}--loading`]: loading,
        [`${blockClass}--disabled`]: isDisabled,
    } : {};

    const containerClasses = cn(
        cssContainerClass,
        cssContainerModifiers,
        getStyles("container"),
        classes.container,
        className
    );

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(true);
        onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(false);
        setIsActive(false);
        onMouseLeave?.(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(true);
        onMouseDown?.(e);
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(false);
        onMouseUp?.(e);
    };

    const renderIcon = () => {
        const loaderClass = shouldUseCSS ? `${blockClass}__loader` : '';
        const iconClass = shouldUseCSS ? `${blockClass}__icon` : '';

        if (loading && loadingIcon) {
            return (
                <span className={cn(loaderClass, getStyles("loader"), classes.loader)}>
                    {loadingIcon}
                </span>
            );
        }
        
        if (loading && !loadingIcon) {
            return (
                <div className={cn(
                    loaderClass,
                    // Fallback spinner si no hay CSS
                    !shouldUseCSS && "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                    getStyles("loader"),
                    classes.loader
                )}>
                </div>
            );
        }

        if (icon) {
            return (
                <span className={cn(iconClass, getStyles("icon"), classes.icon)}>
                    {icon}
                </span>
            );
        }

        return null;
    };

    return (
        <button
            className={containerClasses}
            disabled={isDisabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...rest}
        >
            {iconPosition === "left" && renderIcon()}
            
            {finalContent && (
                <span className={cn(
                    shouldUseCSS ? `${blockClass}__content` : '',
                    getStyles("content"), 
                    classes.content
                )}>
                    {finalContent}
                </span>
            )}
            
            {iconPosition === "right" && renderIcon()}
        </button>
    );
};

Button.displayName = "Button";