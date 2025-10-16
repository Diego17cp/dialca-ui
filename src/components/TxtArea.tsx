import { useEffect, useRef, useState, type TextareaHTMLAttributes } from "react";
import { useTxtAreaVariantStyles } from "../hooks";
import { cn } from "../utils";
import { FaExclamationCircle } from "react-icons/fa";
import { CharCounter } from "./CircleCharCounter";

/**
 * Props for the {@link TxtArea} component.
 *
 * This component renders a customizable textarea input.
 * - Supports variants and custom styles
 * - Displays error messages and icons
 * - Handles character counting and resizing
 */
export interface TxtAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value"> {
    /** Label for the textarea. */
    label: string;
    /** Current value of the textarea. */
    value?: string;
    /** If true, marks the field as required. */
    required?: boolean;
    /** If true, displays error state. */
    hasErrors?: boolean;
    /** Error message to display. */
    errorMessage?: string;
    /** If true, shows loading state. */
    isLoading?: boolean;
    /** If true, enables character counter. */
    hasCharCount?: boolean;
    /** Type of character counter display. */
    charCountType?: 'floating-circle' | 'top' | 'bottom';
    /** Maximum allowed characters. */
    maxLength?: number;
    /** If true, allows resizing the textarea. */
    allowResize?: boolean;
    /** Icon to display inside the textarea. */
    icon?: React.ReactNode;
    /** Loader to display when loading. */
    loader?: React.ReactNode;
    /** Custom icon for error state. */
    errorIcon?: React.ReactNode;
    /** Variant key for custom styles. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.TxtAreaStates>;
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Custom classes for styling. */
    classes?: {
        container?: string;
        textarea?: string;
        label?: string;
        icon?: string;
        loader?: string;
        charCounter?: string;
        error?: string;
    };
}

/**
 * **TxtArea** renders a customizable textarea input.
 *
 * - Supports variants and custom styles
 * - Displays error messages and icons
 * - Handles character counting and resizing
 *
 * @component
 * @example
 * ```tsx
 * <TxtArea
 *   label="Comments"
 *   value={comment}
 *   onChange={(e) => setComment(e.target.value)}
 *   required
 *   hasCharCount
 *   charCountType="top"
 *   maxLength={300}
 *   icon={<FaExclamationCircle />}
 *   hasErrors={!comment}
 *   errorMessage="This field is required"
 * />
 * ```
 */
export const TxtArea = ({
    // ==================
    // Basic Props
    // ==================
    label,
    value = "",
    required = false,
    disabled = false,

    // ==================
    // State Props
    // ==================
    hasErrors = false,
    errorMessage = "",
    isLoading = false,

    // ==================
    // TextArea Specific Props
    // ==================
    hasCharCount = false,
    charCountType = "floating-circle",
    maxLength = 500,
    allowResize = false, 

    // ==================
    // Custom Props
    // ==================
    icon,
    loader,
    errorIcon,

    // ==================
    // Style Props
    // ==================
    variant = "default",
    variants: customVariants = {},
    extendDefault = true,
    classes = {},
    className = "",
    onChange,
    ...props
}: TxtAreaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [showFloatingCounter, setShowFloatingCounter] = useState(false);

    const { getStyles, shouldUseCSS } = useTxtAreaVariantStyles(
        variant,
        customVariants,
        { hasErrors, disabled, resizing: allowResize },
        extendDefault
    );

    // Detect multiple lines for floating counter
    useEffect(() => {
        if (!hasCharCount || charCountType !== 'floating-circle') return;

        const textarea = textareaRef.current;
        if (!textarea) return;

        const checkLines = () => {
            if (!value || value.trim() === '') {
                setShowFloatingCounter(false);
                return;
            }
            const computedStyle = getComputedStyle(textarea);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const height = textarea.scrollHeight;
            const paddingTop = parseFloat(computedStyle.paddingTop);
            const paddingBottom = parseFloat(computedStyle.paddingBottom);

            const contentHeight = height - paddingTop - paddingBottom;
            const lines = Math.round(contentHeight / lineHeight);        
            setShowFloatingCounter(lines > 1);
        };

        checkLines();
        textarea.addEventListener('input', checkLines);
        return () => textarea.removeEventListener('input', checkLines);
    }, [hasCharCount, charCountType, value]);

    const currentLength = value?.length || 0;
    const percentage = (currentLength / maxLength) * 100;

    const getCounterColor = () => {
        if (percentage >= 90) return 'dialca-textarea__counter--danger';
        if (percentage >= 75) return 'dialca-textarea__counter--warning';
        return 'dialca-textarea__counter--normal';
    };

    // BEM classes
    const blockClass = "dialca-textarea";
    const bemContainerClass = shouldUseCSS ? blockClass : '';
    const bemContainerModifiers = shouldUseCSS ? {
        [`${blockClass}--${variant}`]: variant !== 'default',
        [`${blockClass}--error`]: hasErrors,
        [`${blockClass}--disabled`]: disabled,
        [`${blockClass}--has-value`]: Boolean(value),
        [`${blockClass}--loading`]: Boolean(isLoading && loader),
        [`${blockClass}--has-icon`]: Boolean(icon) && !isLoading,
        [`${blockClass}--has-floating-counter`]: hasCharCount && charCountType === 'floating-circle' && showFloatingCounter,
    } : {};

    const containerClasses = cn(
        bemContainerClass,
        bemContainerModifiers,
        getStyles("container"),
        classes.container,
    );

    return (
        <div>
            {/* Top Counter */}
            {hasCharCount && charCountType === 'top' && (
                <div className={cn(
                    shouldUseCSS ? `${blockClass}__counter--top` : '',
                    shouldUseCSS ? getCounterColor() : (percentage >= 90 ? 'text-red-500' : percentage >= 75 ? 'text-yellow-500' : 'text-gray-500')
                )}>
                    {currentLength}/{maxLength}
                </div>
            )}

            <div className={containerClasses}>
                <textarea
                    ref={textareaRef}
                    className={cn(
                        shouldUseCSS ? `${blockClass}__field` : ``,
                        getStyles("textarea"),
                        className,
                        classes.textarea
                    )}
                    placeholder=" "
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    style={{ overflowY: "auto", resize: allowResize || variant === "resizable" ? 'vertical' : 'none' }}
                    maxLength={maxLength}
                    {...props}
                />
                
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
                            shouldUseCSS ? `${blockClass}__required` : ''
                        )}>
                            *
                        </span>
                    )}
                </label>

                {/* Circular Floating Counter */}
                {hasCharCount && charCountType === 'floating-circle' && showFloatingCounter && (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__char-counter` : '',
                        getStyles("charCounter"), 
                        classes.charCounter
                    )}>
                        <CharCounter
                            maxLength={maxLength}
                            value={value}
                            size={32}
                        />
                    </div>
                )}

                {/* Loader */}
                {isLoading && loader && (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__loader` : '',
                        getStyles("loader"), 
                        classes.loader
                    )}>
                        {loader}
                    </div>
                )}

                {/* Icon */}
                {icon && !isLoading && (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__icon` : '',
                        getStyles("icon"), 
                        classes.icon
                    )}>
                        {icon}
                    </div>
                )}
            </div>

            {/* Bottom Counter */}
            {hasCharCount && charCountType === 'bottom' && (
                <div className={cn(
                    shouldUseCSS ? `${blockClass}__counter--bottom` : 'text-xs text-right mt-1',
                    shouldUseCSS ? getCounterColor() : (percentage >= 90 ? 'text-red-500' : percentage >= 75 ? 'text-yellow-500' : 'text-gray-500')
                )}>
                    {currentLength}/{maxLength}
                </div>
            )}

            {/* Error message */}
            {hasErrors && errorMessage && (
                <div className={cn(
                    shouldUseCSS ? `${blockClass} ${blockClass}__error` : '',
                    getStyles("error"), 
                    classes.error
                )}>
                    {errorIcon ? (
                        <>{errorIcon}</>
                    ) : (
                        <FaExclamationCircle size={17} />
                    )}
                    {errorMessage}
                </div>
            )}
        </div>
    );
};
