import { type InputHTMLAttributes, forwardRef } from "react";
import { cn, useInputVariantStyles } from "../utils/classNames";
import { FaEye, FaEyeSlash, FaCircleExclamation } from "react-icons/fa6";

/**
 * Props for the {@link InputField} component.
 *
 * This component is a fully customizable text input supporting:
 * - Variants and custom styles
 * - Password visibility toggling
 * - Error and loading states
 * - Custom icons on either side
 */
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
	/** Label displayed above or inside the input. */
	label: string;

	/** Current value of the input. */
	value?: string | number;

	/** Marks the input as required, showing an asterisk in the label. */
	required?: boolean;

	// ===== State Props =====

	/** If true, the input will display an error state. */
	hasErrors?: boolean;

	/** Text to display below the input when `hasErrors` is true. */
	errorMessage?: string;

	/** If true, shows a loading state. */
	isLoading?: boolean;

	// ===== Password Props =====

	/** If true, input type will be `password` with optional visibility toggle. */
	isPassword?: boolean;

	/** Current visibility state for password mode. */
	showPassword?: boolean;

	/** Callback executed when the visibility toggle button is clicked. */
	onToggleVisibility?: () => void;

	// ===== Custom Content Props =====

	/** Icon element to display inside the input (deprecated, use `startIcon` or `endIcon`). */
	icon?: React.ReactNode;

	/** Loader element to display when `isLoading` is true. */
	loader?: React.ReactNode;

	/** Icon displayed on the left side of the input. */
	startIcon?: React.ReactNode;

	/** Icon displayed on the right side of the input. */
	endIcon?: React.ReactNode;

	/** Icon displayed instead of the default error icon when in error state. */
	errorIcon?: React.ReactNode;

	// ===== Style Props =====

	/** Variant key used to determine styling via `useInputVariantStyles`. */
	variant?: string;

	/** Custom variants to extend or override the default styles. */
	variants?: Record<string, DialcaUI.InputStates>;

	/** If true, merges custom variants with the default ones. */
	extendDefault?: boolean;

	/** Optional classes for overriding styles in specific parts of the component. */
	classes?: {
		container?: string;
		input?: string;
		label?: string;
		icon?: string;
		button?: string;
		error?: string;
		loader?: string;
	};

	/** If true, uses the default password visibility icons when `isPassword` is true. */
	useDefaultIcon?: boolean;

	/** Custom icons for password visibility toggle. */
	passwordIcons?: {
		visible?: React.ReactNode;
		hidden?: React.ReactNode;
	};
}

/**
 * **InputField** is a customizable, accessible input component supporting:
 *
 * - Text and password types with toggle visibility
 * - Loading and error states
 * - Optional icons (left, right, or inside the input)
 * - Style variants and custom class overrides
 *
 * @component
 * @example
 * ```tsx
 * <InputField
 *   label="Email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   hasErrors={!emailValid}
 *   errorMessage="Invalid email address"
 *   startIcon={<MailIcon />}
 * />
 * ```
 *
 * @param props - See {@link InputProps} for a full list of supported props.
 */
export const InputField = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label = "Something cool",
			value = "",
			required = false,
			disabled = false,

			hasErrors = false,
			errorMessage = "",
			isLoading = false,

			isPassword = false,
			showPassword = false,
			passwordIcons,
			onToggleVisibility,
			onChange,

			icon,
			startIcon,
			endIcon,
			loader,
			errorIcon,

			variant = "default",
			variants: customVariants = {},
			extendDefault = true,
			classes = {},
			className = "",
			useDefaultIcon = false,
			...props
		},
		ref
	) => {
		const { getStyles } = useInputVariantStyles(
			variant,
			customVariants,
			{ hasErrors, disabled },
			extendDefault
		);

		const inputType = isPassword
			? showPassword
				? "text"
				: "password"
			: props.type || "text";

		const getRightElement = () => {
			if (isLoading && loader)
				return (
					<div className={cn(getStyles("loader"), classes.loader)}>
						{loader}
					</div>
				);

			if (isPassword && onToggleVisibility) {
				const passwordIcon = showPassword
					? passwordIcons?.visible || <FaEyeSlash size={22} />
					: passwordIcons?.hidden || <FaEye size={22} />;
				return (
					<button
						type="button"
						className={cn(getStyles("button"), classes.button)}
						onClick={onToggleVisibility}
					>
						{passwordIcon}
					</button>
				);
			}

			if (endIcon || icon) {
				const iconElement = endIcon || icon;
				return (
					<div className={cn(getStyles("icon"), classes.icon)}>
						{iconElement}
					</div>
				);
			}

			return null;
		};

		return (
			<div>
				<div className={cn(getStyles("container"), classes.container)}>
					{startIcon && (
						<div className="absolute left-[.8em] top-[45%] -translate-y-1/2 text-gray-500 z-10">
							{startIcon}
						</div>
					)}
					<input
						ref={ref}
						type={inputType}
						className={cn(
							getStyles("input"),
							startIcon ? "pl-12" : undefined,
							endIcon ||
								icon ||
								loader ||
								(isPassword && onToggleVisibility)
								? "pr-12"
								: undefined,
							className,
							classes.input
						)}
						placeholder=" "
						value={value}
						disabled={disabled}
						onChange={onChange}
						{...props}
					/>
					<label
						className={cn(
							getStyles("label"),
							startIcon ? "left-12" : undefined,
							value
								? "-top-0.5 -translate-y-1/2 text-[.85rem] "
								: "",
							classes.label
						)}
					>
						{label}
						{required && (
							<span className="text-red-500 font-black ml-0.5">
								*
							</span>
						)}
					</label>
					{getRightElement()}
				</div>
				{hasErrors && errorMessage && (
					<div className={cn(getStyles("error"), classes.error)}>
						{errorIcon ? (
							<>{errorIcon}</>
						) : (
							<FaCircleExclamation size={17} />
						)}
						{errorMessage}
					</div>
				)}
			</div>
		);
	}
);

InputField.displayName = "InputField";
export default InputField;
