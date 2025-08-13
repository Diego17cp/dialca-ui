import { useEffect, useRef, useState, type TextareaHTMLAttributes } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { CharCounter } from "./CircleCharCounter";
import { cn, useTxtAreaVariantStyles } from "../utils/classNames";

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

    const { getStyles } = useTxtAreaVariantStyles(
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

    const getRightPadding = () => {
        if (isLoading && loader) return "pr-12";
        if (icon) return "pr-12";
        if (hasCharCount && charCountType === 'floating-circle' && showFloatingCounter) return "pr-16";
        return "";
    };

    const currentLength = value?.length || 0;
    const percentage = (currentLength / maxLength) * 100;

    const getCounterColor = () => {
        if (percentage >= 90) return 'text-red-500';
        if (percentage >= 75) return 'text-yellow-500';
        return 'text-gray-500';
    };

    return (
        <div>
            {/* Top Counter */}
            {hasCharCount && charCountType === 'top' && (
                <div className={`text-sm text-right mb-1 ${getCounterColor()}`}>
                    {currentLength}/{maxLength}
                </div>
            )}

            <div className={cn(getStyles("container"), classes.container)}>
                <textarea
                    ref={textareaRef}
                    className={cn(
                        getStyles("textarea"),
                        getRightPadding(),
                        className,
                        classes.textarea
                    )}
                    placeholder=" "
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    style={{ overflowY: "auto" }}
                    maxLength={maxLength}
                    {...props}
                />
                <label
                    className={cn(
                        getStyles("label"),
                        value ? "-top-0.5 -translate-y-1/2 text-[.85rem]" : "",
                        classes.label
                    )}
                >
                    {label}
                    {required && (
                        <span className="text-red-500 font-black ml-0.5">*</span>
                    )}
                </label>
                {/* Circular Floating Counter */}
                {hasCharCount && charCountType === 'floating-circle' && showFloatingCounter && (
                    <div className={cn(getStyles("charCounter"), classes.charCounter)}>
                        <CharCounter
                            maxLength={maxLength}
                            value={value}
                            size={32}
                        />
                    </div>
                )}
                {/* Loader */}
                {isLoading && loader && (
                    <div className={cn(getStyles("loader"), classes.loader)}>
                        {loader}
                    </div>
                )}
                {/* Icon */}
                {icon && !isLoading && (
                    <div className={cn(getStyles("icon"), classes.icon)}>
                        {icon}
                    </div>
                )}
            </div>

            {/* Bottom Counter */}
            {hasCharCount && charCountType === 'bottom' && (
                <div className={`text-xs text-right mt-1 ${getCounterColor()}`}>
                    {currentLength}/{maxLength}
                </div>
            )}

            {/* Error message */}
            {hasErrors && errorMessage && (
                <div className={cn(getStyles("error"), classes.error)}>
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
