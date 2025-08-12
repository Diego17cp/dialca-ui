import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaExclamationCircle } from "react-icons/fa";
import { cn, useSelectVariantStyles } from "../utils/classNames";

interface SelectOption {
	value: string;
	label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

interface SelectProps {
	label: string;
	value: string;
	options?: SelectOption[];
	onChange: (e: { target: { value: string } }) => void;
	required?: boolean;
    disabled?: boolean;
	icon?: React.ReactNode;
	className?: string;
	name?: string;
	hasErrors?: boolean;
	onBlur?: () => void;
	errorMessage?: string;
    errorIcon?: React.ReactNode;
    variant?: string
    variants?: Record<string, DialcaUI.SelectStates>;
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
    extendDefault?: boolean;
    maxHeight?: string;
    loadingIcon?: React.ReactNode;
    isLoading?: boolean;
    onFocus?: () => void;
	placeholder?: string;
}

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

    const { getStyles } = useSelectVariantStyles(
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
	const getInputPadding = () => {
		let padding = '';
		if (icon) padding += ' pl-10';
		if (loadingIcon || isLoading) padding += ' pr-12';
		else padding += ' pr-10'; // Espacio para flecha
		return padding;
	};

	return (
		<div>
			<div className={cn(getStyles('container'), classes.container)} ref={selectRef}>
				<div
					className={cn(
						getStyles('input'),
						getInputPadding(),
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
					<div className={`flex-1 ${!selectedOption ? "text-gray-400" : ""}`}>
                        {selectedOption ? (
                            <span className="flex items-center gap-2">
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
						getStyles('label'),
						icon ? "left-[2.5em]" : "left-[1em]",
						classes.label
					)}
				>
					{label}
					{required && <span className="text-red-500 font-black ml-0.5">*</span>}
				</label>
				{icon && (
					<div className={cn(getStyles('icon'), classes.icon)}>
						{icon}
					</div>
				)}
				{isLoading && loadingIcon ? (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin">
                        {loadingIcon}
                    </div>
                ) : (
                    <div className={cn(getStyles('arrow'), classes.arrow)}>
                        <FaChevronDown />
                    </div>
                )}
				{isOpen && !disabled && (
					<div
						className={cn(getStyles('menu'), classes.menu)}
						style={{ maxHeight }}
						role="listbox"
					>
						{options.length > 0 ? (
							options.map((option) => (
								<div
									key={option.value}
									className={cn(
										getStyles('option'),
										value === option.value
											? (classes.selectedOption, getStyles('selectedOption'))
											: "",
										option.disabled && "opacity-50 cursor-not-allowed",
										classes.option
									)}
									onClick={() => !option.disabled && handleSelect(option.value)}
									role="option"
									aria-selected={value === option.value}
								>
									<span className="flex items-center gap-2">
										{option.icon}
										{option.label}
									</span>
								</div>
							))
						) : (
							<div className="px-4 py-3 text-gray-500 text-center">
								No hay opciones disponibles
							</div>
						)}
					</div>
				)}
			</div>
			{hasErrors && errorMessage && (
				<div className={cn(getStyles('error'), classes.error)}>
					{errorIcon || <FaExclamationCircle size={17} />}
					{errorMessage}
				</div>
			)}
		</div>
	);
};