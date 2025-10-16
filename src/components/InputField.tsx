import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";
import { useInputVariantStyles } from "../hooks";
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
		const { getStyles, shouldUseCSS } = useInputVariantStyles(
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
		
		const blockClass = "dialca-input"
		const hasValue = Boolean(value && value.toString().trim())
		const hasStartIcon = Boolean(startIcon)
		const hasEndContent = Boolean(endIcon || icon || loader || (isPassword && onToggleVisibility))
		
		// Get variant styles from customization hook
		const variantContainer = getStyles("container");
		const variantInput = getStyles("input");
		const variantLabel = getStyles("label");
		const variantButton = getStyles("button");
		const variantIcon = getStyles("icon");
		const variantLoader = getStyles("loader");
		const variantError = getStyles("error");

		// Default classes for each part of the component
		const containerModifiers = shouldUseCSS ? {
			[`${blockClass}--error`]: hasErrors,
			[`${blockClass}--disabled`]: disabled,
			[`${blockClass}--has-value`]: hasValue,
			[`${blockClass}--has-start-icon`]: hasStartIcon,
			[`${blockClass}--has-end-content`]: hasEndContent,
			[`${blockClass}--${variant}`]: variant !== "default",
		} : {}
		const containerClasses = cn(
			shouldUseCSS ? blockClass : "",
			containerModifiers,
			variantContainer,
			classes.container
		)

		const getRightElement = () => {
			const loaderClass = shouldUseCSS ? `${blockClass}__loader` : '';
            const buttonClass = shouldUseCSS ? `${blockClass}__button` : '';
            const iconClass = shouldUseCSS ? `${blockClass}__icon` : '';
			if (isLoading && loader)
				return (
					<div className={cn(loaderClass, variantLoader, classes.loader)}>
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
						className={cn(buttonClass, variantButton, classes.button)}
						onClick={onToggleVisibility}
					>
						{passwordIcon}
					</button>
				);
			}

			if (endIcon || icon) {
				const iconElement = endIcon || icon;
				return (
					<div className={cn(iconClass, variantIcon, classes.icon)}>
						{iconElement}
					</div>
				);
			}

			return null;
		};

		return (
			<div>
				<div className={cn(containerClasses)}>
					{startIcon && (
						<div className={cn(
                            shouldUseCSS ? `${blockClass}__start-icon` : '',
                            variantIcon
                        )}>
							{startIcon}
						</div>
					)}
					<input
						ref={ref}
						type={inputType}
						className={cn(shouldUseCSS ? `${blockClass}__field` : "", variantInput, className, classes.input)}
						placeholder=" "
						value={value}
						disabled={disabled}
						onChange={onChange}
						{...props}
					/>
					<label className={cn(shouldUseCSS ? `${blockClass}__label` : "", variantLabel, classes.label)}>
						{label}
						{required && (
							<span className={shouldUseCSS ? `${blockClass}__required` : ""}>
								*
							</span>
						)}
					</label>
					{getRightElement()}
				</div>
				{hasErrors && errorMessage && (
					<div className={cn(shouldUseCSS ? `${blockClass}__error` : "", variantError, classes.error)}>
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
