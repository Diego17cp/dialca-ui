import { type InputHTMLAttributes, forwardRef } from "react";
import { cn, useInputVariantStyles } from "../utils/classNames";
// import { MainLoader } from "../loaders/MainLoader";
import { FaEye, FaEyeSlash, FaCircleExclamation } from "react-icons/fa6";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
	// ==================
	// Basic Props
	// ==================
	label: string;
	value?: string | number;
	required?: boolean;

	// ==================
	// State Props
	// ==================
	hasErrors?: boolean;
	errorMessage?: string;
	isLoading?: boolean;

	// ==================
	// Password Props
	// ==================
	isPassword?: boolean;
	showPassword?: boolean;
	onToggleVisibility?: () => void;

	// ==================
	// Custom Props
	// ==================
	icon?: React.ReactNode;
	loader?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	errorIcon?: React.ReactNode;

	// ==================
	// Style Props
	// ==================
	variant?: string;
	variants?: Record<string, DialcaUI.InputStates>;
	extendDefault?: boolean;
	classes?: {
		container?: string;
		input?: string;
		label?: string;
		icon?: string;
		button?: string;
		error?: string;
		loader?: string;
	};
	useDefaultIcon?: boolean;
	passwordIcons?: {
		visible: React.ReactNode;
		hidden: React.ReactNode;
	};
}
export const InputField = forwardRef<HTMLInputElement, InputProps>(({
	// ==================
	// Basic Props
	// ==================
	label = 'Something cool',
	value = "",
	required = false,
	disabled = false,

	// ==================
	// State Props
	// ==================
	hasErrors = false,
	errorMessage = "", // Mensaje de error por defecto
	isLoading = false,

	// ==================
	// Password Props
	// ==================
	isPassword = false,
	showPassword = false,
	passwordIcons,
	onToggleVisibility,
	onChange,

	// ==================
	// Icon Props
	// ==================
	icon,
	startIcon,
	endIcon,
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
	useDefaultIcon = false,
	...props
}, ref) => {
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
				? passwordIcons?.visible || <FaEyeSlash size={20} />
				: passwordIcons?.hidden || <FaEye size={20} />;
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
		<>
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
						className,
						classes.input
					)}
					placeholder=" "
					value={value}
					disabled={disabled}
					{...props}
				/>
				<label
					className={cn(
						getStyles("label"),
						startIcon ? "left-12" : undefined,
						classes.label
					)}
				>
					{label}
					{required && (
						<span className="text-red-500 font-black ml-0.5">*</span>
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
		</>
	);
});
InputField.displayName = "InputField";
export default InputField;
