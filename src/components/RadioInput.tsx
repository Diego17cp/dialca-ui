import { forwardRef, type InputHTMLAttributes } from "react";
import { cn, useRadioVariantStyles } from "../utils/classNames";
import { FaExclamationCircle } from "react-icons/fa";

/**
 * Option for a radio input group.
 */
interface RadioOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}

/**
 * Props for the {@link RadioInput} component.
 *
 * This component renders a group of radio buttons or a single radio input.
 * - Supports custom variants and styles
 * - Displays error messages and icons
 * - Handles disabled and checked states
 *
 */
export interface RadioInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
    /** Name for the radio group. */
    name: string;
    /** Current selected value. */
    value?: string;
    /** Callback when selection changes. */
    onChange?: (value: string) => void;

    /** Array of radio options. If omitted, renders a single radio input. */
    options?: RadioOption[];

    /** Label for single radio mode. */
    label?: string;
    /** Description for single radio mode. */
    description?: string;

    /** If true, displays error state. */
    hasErrors?: boolean;
    /** Error message to display. */
    errorMessage?: string;
    /** Disables all radio inputs. */
    disabled?: boolean;

    /** Variant key for custom styles. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.RadioStates>;
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Custom classes for styling. */
    classes?: {
        container?: string;
        radio?: string;
        label?: string;
        text?: string;
        description?: string;
        error?: string;
    };
    /** Additional className for the container. */
    className?: string;

    /** Custom icon for error state. */
    errorIcon?: React.ReactNode;
}

/**
 * **RadioInput** renders a group of radio buttons or a single radio input.
 *
 * - Supports variants and custom styles
 * - Displays error messages and icons
 * - Handles disabled and checked states
 * 
 * @component
 * @example
 * ```tsx
 * <RadioInput
 *   name="plan"
 *   value={selectedPlan}
 *   onChange={setSelectedPlan}
 *   options={[
 *     { value: "basic", label: "Basic" },
 *     { value: "pro", label: "Pro" }
 *   ]}
 *   hasErrors={!selectedPlan}
 *   errorMessage="Please select a plan"
 * />
 * ```
 *
 * @param props - See {@link RadioInputProps} for all supported props.
 */
export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
    (
        {
            name,
            value = "",
            onChange,
            options,
            label,
            description,
            hasErrors = false,
            errorMessage = "",
            disabled = false,
            variant = "default",
            variants: customVariants = {},
            extendDefault = true,
            classes = {},
            className = "",
            errorIcon,
            ...props
        },
        ref
    ) => {
        const isSingleMode = !options && label;
        const radioOptions = isSingleMode
            ? [{ value: "single", label: label!, description, disabled: false }]
            : options || [];
        const { getStyles } = useRadioVariantStyles(
            variant,
            customVariants,
            {
                checked: false,
                disabled,
                hasErrors,
                focused: false
            },
            extendDefault
        );

        const handleChange = (optionValue: string) => {
            if (disabled) return;
            if (isSingleMode) {
                const newValue = value === optionValue ? "" : optionValue;
                onChange?.(newValue);
            } else {
                onChange?.(optionValue);
            }
        };

        return (
            <>
                <div className="space-y-3">
                    {radioOptions.map((option, index) => {
                        const isChecked = value === option.value;
                        const isDisabled = disabled || option.disabled;
                        const radioId = `${name}-${option.value}-${index}`;

                        const { getStyles: getRadioStyles } = useRadioVariantStyles(
                            variant,
                            customVariants,
                            {
                                checked: isChecked,
                                disabled: !!isDisabled,
                                hasErrors,
                                focused: false
                            },
                            extendDefault
                        );

                        return (
                            <label
                                key={option.value}
                                htmlFor={radioId}
                                className={cn(
                                    getRadioStyles("container"),
                                    classes.container,
                                    className
                                )}
                            >
                                <input
                                    ref={index === 0 ? ref : undefined}
                                    type="radio"
                                    id={radioId}
                                    name={name}
                                    value={option.value}
                                    checked={isChecked}
                                    disabled={isDisabled}
                                    onChange={() => handleChange(option.value)}
                                    className={cn(
                                        getRadioStyles("radio"),
                                        classes.radio
                                    )}
                                    {...props}
                                />

                                <div className={cn(getRadioStyles("label"), classes.label)}>
                                    <span className={cn(getRadioStyles("text"), classes.text)}>
                                        {option.label}
                                    </span>
                                    {option.description && (
                                        <div className={cn(getRadioStyles("description"), classes.description)}>
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                            </label>
                        );
                    })}
                </div>
                {hasErrors && errorMessage && (
                    <div className={cn(getStyles("error"), classes.error)}>
                        {errorIcon || <FaExclamationCircle size={17} />}
                        {errorMessage}
                    </div>
                )}
            </>
        );
    }
);

RadioInput.displayName = "RadioInput";
