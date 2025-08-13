import { cn, useLoaderVariantStyles } from "../utils/classNames";

/**
 * Loader component for displaying various loading animations.
 *
 * This component supports multiple sizes, states, speeds, directions, and styles.
 * It can be customized with variants and conditional styling based on error, disabled, or success states.
 */
interface LoaderProps {
	// =====================
	// Size props
	// =====================
	/** Size of the loader (numeric in Tailwind units or preset: 'sm', 'md', 'lg', 'xl'). */
	size?: number | "sm" | "md" | "lg" | "xl";

	// =====================
	// State props
	// =====================
	/** If true, applies error styles. */
	hasErrors?: boolean;
	/** If true, applies disabled styles. */
	disabled?: boolean;
	/** If true, applies success styles. */
	success?: boolean;

	// =====================
	// Content props
	// =====================
	/** Optional text to display next to or below the loader. */
	text?: string;
	/** React children, overrides the `text` prop if provided. */
	children?: React.ReactNode;
	/** Whether to display the `text` or `children`. */
	showText?: boolean;

	// =====================
	// Loader props
	// =====================
	/** Animation speed of the loader. */
	speed?: "slow" | "normal" | "fast";
	/** Rotation direction of the loader. */
	direction?: "clockwise" | "counterclockwise";

	// =====================
	// Style props
	// =====================
	/** Variant key for applying styles from `variants`. */
	variant?: string;
	/** Object containing custom variant styles. */
	variants?: Record<string, DialcaUI.LoaderStates>;
	/** Whether to extend the default styles with the provided variants. */
	extendDefault?: boolean;
	/** Optional extra classes for styling specific loader elements. */
	classes?: {
		container?: string;
		outerRing?: string;
		innerRing?: string;
		content?: string;
	};
}
/**
 * Loader component
 *
 * A flexible and customizable loading spinner component that supports
 * multiple sizes, speeds, directions, and visual variants.
 * 
 * @component
 * @example
 * // Basic usage
 * <Loader />
 *
 * @example
 * // With custom text and fast speed
 * <Loader text="Loading..." speed="fast" />
 *
 * @example
 * // With custom size and direction
 * <Loader size="lg" direction="counterclockwise" />
 *
 * @param props - See {@link LoaderProps} for a full list of supported props.
 */
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
	// Hook for retrieving variant-based styles
	const { getStyles } = useLoaderVariantStyles(
		variant,
		customVariants,
		{ hasErrors, disabled, success },
		extendDefault
	);

	/**
	 * Returns the size classes for the loader rings.
	 */
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

	/**
	 * Returns the Tailwind animation speed class.
	 */
	const getSpeedClass = () => {
		const speedMap = {
			slow: "animate-spin-slow",
			normal: "animate-spin",
			fast: "animate-spin-fast",
		};
		return speedMap[speed] || speedMap.normal;
	};

	/**
	 * Returns the animation direction class.
	 */
	const getDirectionClass = () => {
		return direction === "counterclockwise" ? "animate-reverse" : "";
	};

	const sizeClasses = getSizeClasses();

	// Special "dots" variant loader
	if (variant === "dots") {
		return (
			<div className={cn(getStyles("container"), classes?.container)}>
				<div
					className={cn(getStyles("outerRing"), classes?.outerRing)}
				/>
				<div
					className={cn(
						getStyles("innerRing"),
						"delay-75",
						classes?.innerRing
					)}
					style={{ animationDelay: "75ms" }}
				/>
				<div
					className={cn(
						getStyles("innerRing"),
						"delay-150",
						classes?.innerRing
					)}
					style={{ animationDelay: "150ms" }}
				/>
			</div>
		);
	}

	// Default loader (spinning rings)
	return (
		<div className={cn(getStyles("container"), classes.container)}>
			{/* Outer Ring */}
			<div
				className={cn(
					getStyles("outerRing"),
					sizeClasses.outer,
					getSpeedClass(),
					getDirectionClass(),
					classes.outerRing
				)}
			>
				{/* Inner Ring */}
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

			{/* Loader Text/Content */}
			{(showText || text || children) && (
				<div className={cn(getStyles("content"), classes.content)}>
					{children || text}
				</div>
			)}
		</div>
	);
};
