import React, { useEffect, useRef, useState } from "react";
import { cn, useSearchableSelectVariantStyles } from "../utils/classNames";
import { IoChevronDown } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";

interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
	icon?: React.ReactNode;
}

export interface SearchableSelectProps {
	/** Array of options to display */
	options: SelectOption[];
	/** Currently selected value (controlled) */
	value?: string;
	/** Callback when selection changes */
	onChange: (value: string) => void;
	/** Placeholder text for the input */
	placeholder?: string;
	/** Label text above the select */
	label?: string;
	/** If true, the select is disabled */
	disabled?: boolean;
	/** If true, allows clearing the selection */
	isClearable?: boolean;
	/** Icon to clear the current selection */
	clearIcon?: React.ReactNode;
	/** If true, shows error state */
	hasErrors?: boolean;
	/** Error message to display */
	errorMessage?: string;
	/** Error icon component */
	errorIcon?: React.ReactNode;
	/** Variant style */
	variant?: string;
	/** Custom variants */
	variants?: Record<string, DialcaUI.SearchableSelectStates>;
	/** If true, extends default variant */
	extendDefault?: boolean;
	/** Custom classes for elements */
	classes?: {
		container?: string;
		inputWrapper?: string;
		input?: string;
		inputIcon?: string;
        clearButton?: string;
		dropdown?: string;
		option?: string;
		optionIcon?: string;
		noResults?: string;
		label?: string;
		error?: string;
	};
	/** Additional className for container */
	className?: string;
	/** Text to show when no results found */
	noResultsText?: string;
	/** Icon for the dropdown indicator */
	dropdownIcon?: React.ReactNode;
	/** If true, rotates the dropdown icon */
	rotateIcon?: boolean;
	/** Size of the select */
	size?: "sm" | "md" | "lg";
}

/**
 * **SearchableSelect** - A searchable dropdown select component
 *
 * - Filterable options via text input
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Custom variants and styling
 * - Error states and labels
 * - Disabled options support
 * - Icons support
 *
 * @component
 * @example
 * ```tsx
 * <SearchableSelect
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 *   placeholder="Search..."
 *   label="Select an option"
 * />
 * ```
 */
export const SearchableSelect = ({
	options = [],
	value,
	onChange,
	placeholder = "Search...",
	label,
	disabled = false,
	hasErrors = false,
	errorMessage,
	errorIcon = <CiWarning />,
	variant = "default",
	variants: customVariants = {},
	extendDefault = true,
	classes = {},
	className = "",
	noResultsText = "No results found",
	dropdownIcon = <IoChevronDown />,
	size = "md",
	isClearable = false,
	clearIcon = <FaRegCircleXmark />,
	rotateIcon = true,
}: SearchableSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [highlighted, setHighlighted] = useState<number>(-1);
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const rootRef = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const { getStyles } = useSearchableSelectVariantStyles(
		variant,
		customVariants,
		{
			isOpen,
			isFocused,
			disabled,
			hasErrors,
			hover: isHovered,
		},
		extendDefault
	);

	// Size mappings
	const sizeStyles = {
		sm: {
			input: "px-3 py-1.5 pr-8 text-xs",
			option: "px-3 py-1.5 text-xs",
			label: "text-xs",
			icon: "text-sm",
		},
		md: {
			input: "px-4 py-2.5 pr-10 text-sm",
			option: "px-4 py-2.5 text-sm",
			label: "text-sm",
			icon: "text-base",
		},
		lg: {
			input: "px-5 py-3 pr-12 text-base",
			option: "px-5 py-3 text-base",
			label: "text-base",
			icon: "text-lg",
		},
	};

	// Update query when value changes
	useEffect(() => {
		if (value == null) {
			setQuery("");
			return;
		}
		const sel = options.find((o) => o.value === value);
		setQuery(sel ? sel.label : "");
	}, [value, options]);

	// Close on outside click
	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (!rootRef.current) return;
			if (!rootRef.current.contains(e.target as Node)) {
				setIsOpen(false);
				setHighlighted(-1);
			}
		};
		document.addEventListener("mousedown", onDocClick);
		return () => document.removeEventListener("mousedown", onDocClick);
	}, []);

	// Scroll highlighted option into view
	useEffect(() => {
		if (!isOpen || highlighted < 0) return;
		const optionEl = dropdownRef.current?.children[highlighted] as HTMLElement;
		if (optionEl) {
			optionEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
		}
	}, [highlighted, isOpen]);

	const filterOptions = (q?: string) => {
		if (!q) return options;
		return options.filter((option) =>
			option.label.toLowerCase().includes(q.toLowerCase())
		);
	};

	const visibleOptions = filterOptions(query);

	const openList = () => {
		if (!isOpen && !disabled) {
			setIsOpen(true);
			setHighlighted(visibleOptions.length ? 0 : -1);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value;
		setQuery(v);
		setIsOpen(true);
		setHighlighted(0);
	};

	const handleSelect = (opt: SelectOption) => {
		if (opt.disabled || disabled) return;
		onChange(opt.value);
		setQuery(opt.label);
		setIsOpen(false);
		setHighlighted(-1);
		inputRef.current?.focus();
	};

	const handleClearSelection = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (disabled) return;
		setQuery("");
		onChange("");
		inputRef.current?.focus();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (disabled) return;

		if (e.key === "ArrowDown") {
			e.preventDefault();
			if (!isOpen) {
				openList();
				return;
			}
			setHighlighted((prev) => {
				const next = prev + 1;
				return next >= visibleOptions.length ? 0 : next;
			});
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (!isOpen) {
				openList();
				return;
			}
			setHighlighted((prev) => {
				const next = prev - 1;
				return next < 0 ? Math.max(0, visibleOptions.length - 1) : next;
			});
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (
				isOpen &&
				highlighted >= 0 &&
				highlighted < visibleOptions.length
			) {
				const opt = visibleOptions[highlighted];
				if (opt) handleSelect(opt);
			}
		} else if (e.key === "Escape") {
			setIsOpen(false);
			setHighlighted(-1);
			inputRef.current?.blur();
		}
	};

	return (
		<div
			ref={rootRef}
			className={cn(getStyles("container"), classes.container, className)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Label */}
			{label && (
				<label
					className={cn(
						getStyles("label"),
						sizeStyles[size].label,
						classes.label
					)}
				>
					{label}
				</label>
			)}

			{/* Input Wrapper */}
			<div
				className={cn(getStyles("inputWrapper"), classes.inputWrapper)}
			>
				{/* Input */}
				<input
					ref={inputRef}
					type="text"
					className={cn(
						getStyles("input"),
						sizeStyles[size].input,
						classes.input
					)}
					placeholder={placeholder}
					value={query}
					onChange={handleInputChange}
					onFocus={() => {
						setIsFocused(true);
						openList();
					}}
					onBlur={() => setIsFocused(false)}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
					aria-controls="searchable-select-list"
					role="combobox"
					autoComplete="off"
				/>
				{/* Clear Selection Icon */}
				{isClearable && !disabled && (query || value) ? (
					<button
						type="button"
						onClick={handleClearSelection}
						disabled={disabled}
						className={cn(
							"absolute right-3 top-1/2 -translate-y-1/2",
							"text-gray-400 hover:text-gray-600 transition-colors duration-200",
							"cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
							"focus:outline-none focus:text-gray-700",
							sizeStyles[size].icon,
							classes.clearButton
						)}
						aria-label="Clear selection"
					>
						{clearIcon}
					</button>
				) : (
                    // Dropdown Icon
					<span
						className={cn(
							getStyles("inputIcon"),
							sizeStyles[size].icon,
							rotateIcon && isOpen && "rotate-180",
							classes.inputIcon
						)}
					>
						{dropdownIcon}
					</span>
				)}
			</div>

			{/* Dropdown */}
			{isOpen && (
				<div
					ref={dropdownRef}
					id="searchable-select-list"
					role="listbox"
					aria-label="Options"
					className={cn(getStyles("dropdown"), classes.dropdown)}
				>
					{visibleOptions.length === 0 && (
						<div
							className={cn(
								getStyles("noResults"),
								classes.noResults
							)}
						>
							{noResultsText}
						</div>
					)}

					{visibleOptions.map((opt, idx) => {
						const isHighlighted = idx === highlighted;
						const isSelected = value === opt.value;

						// Get option-specific styles
						const { getStyles: getOptionStyles } =
							useSearchableSelectVariantStyles(
								variant,
								customVariants,
								{
									optionSelected: isSelected,
									optionHighlighted:
										isHighlighted && !isSelected,
									optionDisabled: opt.disabled ? true : false,
								},
								extendDefault
							);

						return (
							<div
								key={opt.value}
								role="option"
								aria-selected={isSelected}
								onClick={() => handleSelect(opt)}
								onMouseEnter={() => setHighlighted(idx)}
								className={cn(
									getOptionStyles("option"),
									sizeStyles[size].option,
									classes.option
								)}
							>
								{opt.icon && (
									<span
										className={cn(
											getOptionStyles("optionIcon"),
											sizeStyles[size].icon,
											classes.optionIcon
										)}
									>
										{opt.icon}
									</span>
								)}
								<span className="truncate">{opt.label}</span>
							</div>
						);
					})}
				</div>
			)}

			{/* Error Message */}
			{hasErrors && errorMessage && (
				<div className={cn(getStyles("error"), classes.error)}>
					{errorIcon}
					{errorMessage}
				</div>
			)}
		</div>
	);
};

SearchableSelect.displayName = "SearchableSelect";
