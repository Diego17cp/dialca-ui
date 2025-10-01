import { useState, useId, useRef, type InputHTMLAttributes } from "react";
import { cn, useSwitchVariantStyles } from "../utils/classNames";
import { CiWarning } from "react-icons/ci";

/**
 * Props for the {@link Switch} component.
 */
export interface SwitchProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		"size" | "type" | "onToggle"
	> {
	/** Label text for the switch. */
	label?: string;
	/** Description text below the label. */
	description?: string;
	/** If true, shows enabled state. */
	enabled?: boolean;
	/** Callback when enabled state changes. */
	onToggle?: (enabled: boolean) => void;
	/** If true, disables the switch. */
	disabled?: boolean;
	/** If true, shows error state. */
	hasErrors?: boolean;
	/** Error message to display. */
	errorMessage?: string;
	/** If true, shows loading state. */
	loading?: boolean;
	/** Size preset for the switch. */
	size?: "sm" | "md" | "lg";
	/** Switch variant/style. */
	variant?: string;
	/** Custom variants for styling. */
	variants?: Record<string, DialcaUI.SwitchStates>;
	/** If true, merges custom variants with defaults. */
	extendDefault?: boolean;
	/** Custom classes for styling. */
	classes?: {
		container?: string;
		wrapper?: string;
		track?: string;
		thumb?: string;
		thumbInner?: string;
		trackOverlay?: string;
		label?: string;
		description?: string;
		error?: string;
	};
	/** Additional className for the container. */
	className?: string;
	/** Icon to show when enabled. */
	enabledIcon?: React.ReactNode;
	/** Icon to show when disabled. */
	disabledIcon?: React.ReactNode;
	/** Error icon to display. */
	errorIcon?: React.ReactNode;
	/** Mouse enter on wrapper or input. */
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement | HTMLInputElement>;
	/** Mouse leave on wrapper or input. */
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement | HTMLInputElement>;
	/** Confirmation dialog message for critical toggles. */
	confirmationMessage?: string;
}

/**
 * **Switch** renders a customizable toggle switch with various states and animations.
 *
 * - On/Off toggle functionality
 * - Custom variants and styles
 * - Smooth sliding animations
 * - Label and description support
 * - Error states with messages
 * - Loading states
 * - Size variations
 * - Accessibility features
 * - Confirmation dialogs for critical actions
 *
 * @component
 * @example
 * ```tsx
 * <Switch
 *   enabled={isEnabled}
 *   onToggle={setIsEnabled}
 *   label="Enable notifications"
 *   description="Get updates about your account"
 *   variant="default"
 * />
 * ```
 */
export const Switch = ({
	label,
	description,
	enabled = false,
	onToggle,
	disabled = false,
	hasErrors = false,
	errorMessage,
	loading = false,
	size = "md",
	variant = "default",
	variants: customVariants = {},
	extendDefault = true,
	classes = {},
	className = "",
	enabledIcon,
	disabledIcon,
	errorIcon = <CiWarning />,
	confirmationMessage,
	id: providedId,
	onFocus,
	onBlur,
	onMouseEnter,
	onMouseLeave,
	...rest
}: SwitchProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const switchRef = useRef<HTMLInputElement>(null);

	const switchId = useId();
	const id = providedId || switchId;

	const { getStyles } = useSwitchVariantStyles(
		variant,
		customVariants,
		{
			enabled,
			disabled,
			hasErrors,
			focused: isFocused,
			hover: isHovered,
			loading,
		},
		extendDefault
	);

	// Size mappings
	const sizeStyles = {
		sm: {
			track: "w-10 h-5",
			thumb: "w-4 h-4 top-0.5",
			thumbTranslate: "translate-x-5",
			label: "text-sm",
			description: "text-xs",
		},
		md: {
			track: "w-14 h-7",
			thumb: "w-6 h-6 top-0.5",
			thumbTranslate: "translate-x-7",
			label: "text-base",
			description: "text-sm",
		},
		lg: {
			track: "w-16 h-8",
			thumb: "w-7 h-7 top-0.5",
			thumbTranslate: "translate-x-8",
			label: "text-lg",
			description: "text-base",
		},
	};

	const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled || loading) return;

		const newEnabled = e.target.checked;

		// Confirmation dialog for critical actions
		if (confirmationMessage && newEnabled) {
			const confirmed = window.confirm(confirmationMessage);
			if (!confirmed) {
				e.preventDefault();
				if (switchRef.current) {
					switchRef.current.checked = enabled;
				}
				return;
			}
		}

		onToggle?.(newEnabled);
		rest.onChange?.(e);
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

	const renderThumbContent = () => {
		if (loading) {
			return (
				<div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin" />
			);
		}

		if (enabled && enabledIcon) {
			return enabledIcon;
		}

		if (!enabled && disabledIcon) {
			return disabledIcon;
		}

		// For toggle variant, show ON/OFF text
		if (variant === "toggle") {
			return (
				<span className="text-xs font-bold">
					{enabled ? "ON" : "OFF"}
				</span>
			);
		}

		return null;
	};

	return (
		<div
			className={cn(getStyles("container"), classes.container, className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Switch Container */}
			<div className={cn(getStyles("wrapper"), classes.wrapper)}>
				{/* Hidden Input */}
				<input
					ref={switchRef}
					type="checkbox"
					role="switch"
					id={id}
					checked={enabled}
					disabled={disabled || loading}
					onChange={handleToggle}
					onFocus={handleFocus}
					onBlur={handleBlur}
					className="sr-only"
					aria-checked={enabled}
					aria-describedby={
						description ? `${id}-description` : undefined
					}
					{...rest}
				/>

				{/* Track */}
				<label
					htmlFor={id}
					className={cn(
						getStyles("track"),
						"block",
						sizeStyles[size].track,
						classes.track
					)}
				>
					{/* Track Overlay (gradient effect) */}
					<span
						className={cn(
							getStyles("trackOverlay"),
							classes.trackOverlay
						)}
					/>

					{/* Thumb */}
					<span
						className={cn(
							getStyles("thumb"),
							sizeStyles[size].thumb,
							enabled && sizeStyles[size].thumbTranslate,
							classes.thumb,
							"flex items-center justify-center relative"
						)}
					>
						{/* Thumb Inner Circle */}
						<span
							className={cn(
								getStyles("thumbInner"),
								classes.thumbInner
							)}
						/>

						{/* Thumb Content */}
						<span className="relative z-30 flex items-center justify-center">
							{renderThumbContent()}
						</span>
					</span>
				</label>
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
						<p
							id={`${id}-description`}
							className={cn(
								getStyles("description"),
								sizeStyles[size].description,
								classes.description
							)}
						>
							{description}
						</p>
					)}
					{hasErrors && errorMessage && (
						<div
							className={cn(
								getStyles("error"),
								sizeStyles[size].description,
								classes.error
							)}
						>
							<span>{errorIcon}</span>
							{errorMessage}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

Switch.displayName = "Switch";
