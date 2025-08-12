import { cn, useLoaderVariantStyles } from "../utils/classNames";

interface LoaderProps {
	// =====================
	// Size props
	// =====================
	size?: number | "sm" | "md" | "lg" | "xl";

	// =====================
	// State props
	// =====================
	hasErrors?: boolean;
	disabled?: boolean;
	success?: boolean;

	// =====================
	// Content props
	// =====================
	text?: string;
	children?: React.ReactNode;
	showText?: boolean;

	// =====================
	// Loader props
	// =====================
	speed?: "slow" | "normal" | "fast";
	direction?: "clockwise" | "counterclockwise";

	// =====================
	// Style props
	// =====================
	variant?: string;
	variants?: Record<string, DialcaUI.LoaderStates>;
	extendDefault?: boolean;
	classes?: {
		container?: string;
		outerRing?: string;
		innerRing?: string;
		content?: string;
	};
}

export const Loader: React.FC<LoaderProps> = ({
	size = "md",
	text,
	children,
	showText = false,
	speed = "normal",
	direction = "clockwise",
	variant = "default",
	variants: customVariants = {},
	extendDefault = true,
	classes = {},
	hasErrors = false,
	disabled = false,
	success = false,
}) => {
	const { getStyles } = useLoaderVariantStyles(
		variant,
		customVariants,
		{ hasErrors, disabled, success },
		extendDefault
	);
	const getSizeClasses = () => {
		if (typeof size === "number") {
			return {
				outer: `w-${size} h-${size}`,
				inner: `w-${Math.max(4, size - 2)} h-${Math.max(4, size - 2)}`,
			};
		}
		const sizeMap = {
			sm: { outer: "w-4 h-4", inner: "w-2 h-2" },
			md: { outer: "w-8 h-8", inner: "w-6 h-6" },
			lg: { outer: "w-12 h-12", inner: "w-10 h-10" },
			xl: { outer: "w-16 h-16", inner: "w-14 h-14" },
		};
		return sizeMap[size] || sizeMap.md;
	};
	const getSpeedClass = () => {
		const speedMap = {
			slow: "animate-spin-slow",
			normal: "animate-spin",
			fast: "animate-spin-fast",
		};
		return speedMap[speed] || speedMap.normal;
	};
	const getDirectionClass = () => {
		return direction === "counterclockwise" ? "animate-reverse" : "";
	};
	const sizeClasses = getSizeClasses();
	if (variant === "dots") {
		return (
			<div className={cn(getStyles("container"), classes?.container)}>
				<div
					className={cn(getStyles("outerRing"), classes?.outerRing)}
				></div>
				<div
					className={cn(
						getStyles("innerRing"),
						"delay-75",
						classes?.innerRing
					)}
					style={{ animationDelay: "75ms" }}
				></div>
				<div
					className={cn(
						getStyles("innerRing"),
						"delay-150",

						classes?.innerRing
					)}
					style={{ animationDelay: "150ms" }}
				></div>
			</div>
		);
	}
	return (
		<div
			className={cn(getStyles("container"), classes.container)}
		>
			{/* Anillo exterior */}
			<div
				className={cn(
					getStyles("outerRing"),
					sizeClasses.outer,
					getSpeedClass(),
					getDirectionClass(),
					classes.outerRing
				)}
			>
				{/* Anillo interior */}
				{variant !== "minimal" && (
					<div
						className={cn(
							getStyles("innerRing"),
							sizeClasses.inner,
							getSpeedClass(),
							getDirectionClass(),
							classes.innerRing
						)}
					/>
				)}
			</div>

			{/* Contenido/Texto */}
			{(showText || text || children) && (
				<div className={cn(getStyles("content"), classes.content)}>
					{children || text}
				</div>
			)}
		</div>
	);
};
