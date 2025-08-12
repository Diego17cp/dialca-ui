import { forwardRef, type InputHTMLAttributes } from "react";
import { cn, useRadioVariantStyles } from "../utils/classNames";
import { FaExclamationCircle } from "react-icons/fa";

interface RadioOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}

export interface RadioInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> {
    // ==================
    // Basic Props
    // ==================
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    
    // ==================
    // Options Props
    // ==================
    options?: RadioOption[];
    
    // ==================
    // Single Radio Props (legacy support)
    // ==================
    label?: string;
    description?: string;
    
    // ==================
    // State Props
    // ==================
    hasErrors?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    
    // ==================
    // Style Props
    // ==================
    variant?: string;
    variants?: Record<string, DialcaUI.RadioStates>;
    extendDefault?: boolean;
    classes?: {
        container?: string;
        radio?: string;
        label?: string;
        text?: string;
        description?: string;
        error?: string;
    };
    className?: string;
    
    // ==================
    // Custom Props
    // ==================
    errorIcon?: React.ReactNode;
}

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
    (
        {
            // ==================
            // Basic Props
            // ==================
            name,
            value = "",
            onChange,
            
            // ==================
            // Options Props
            // ==================
            options,
            
            // ==================
            // Single Radio Props
            // ==================
            label,
            description,
            
            // ==================
            // State Props
            // ==================
            hasErrors = false,
            errorMessage = "",
            disabled = false,
            
            // ==================
            // Style Props
            // ==================
            variant = "default",
            variants: customVariants = {},
            extendDefault = true,
            classes = {},
            className = "",
            
            // ==================
            // Custom Props
            // ==================
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
