import { useLoaderVariantStyles } from "../hooks";
import { cn } from "../utils";

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
	const { getStyles, shouldUseCSS } = useLoaderVariantStyles(
		variant,
		customVariants,
		{ hasErrors, disabled, success },
		extendDefault
	);
	const blockClass = "dialca-loader";
	const cssContainerClass = shouldUseCSS ? blockClass : "";
	const cssContainerModifiers = shouldUseCSS
		? {
				[`${blockClass}--${variant}`]: variant !== "default",
				[`${blockClass}--${size}`]: typeof size === "string",
				[`${blockClass}--error`]: hasErrors,
				[`${blockClass}--disabled`]: disabled,
				[`${blockClass}--success`]: success,
		}
		: {};
	const universalClasses = {
		[`${blockClass}--${speed}`]: speed !== "normal",
		[`${blockClass}--${direction}`]: direction !== "clockwise",
	};
	const containerClass = cn(
		cssContainerClass,
		cssContainerModifiers,
		universalClasses,
		getStyles("container"),
		classes?.container
	);

	/**
	 * Returns the size classes for the loader rings.
	 */
	const getSizeClasses = () => {
		if (typeof size === "number" && !shouldUseCSS) {
			return {
				outerRing: `w-${size} h-${size}`,
				innerRing: `w-${Math.max(4, size - 2)} h-${Math.max(
					4,
					size - 2
				)}`,
			};
		}
		return { outerRing: "", innerRing: "" };
	};
	const customSizeStyles = getSizeClasses();

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
			<div className={containerClass}>
				<div
					className={cn(
						shouldUseCSS ? `${blockClass}__outer-ring` : "",
						getStyles("outerRing"),
						customSizeStyles.outerRing,
						classes.outerRing
					)}
				/>
				<div
					className={cn(
						shouldUseCSS ? `${blockClass}__inner-ring` : "",
						getStyles("innerRing"),
						customSizeStyles.innerRing,
						classes.innerRing
					)}
				/>
				<div
					className={cn(
						shouldUseCSS ? `${blockClass}__third-dot` : "",
						// Fallback classes for fully custom
						!shouldUseCSS &&
							"w-3 h-3 bg-current rounded-full animate-bounce"
					)}
				/>
			</div>
		);
	}

	// Default loader (spinning rings)
	return (
		<div className={containerClass}>
			{/* Outer Ring */}
			<div
				className={cn(
					shouldUseCSS ? `${blockClass}__outer-ring` : "",
					getStyles("outerRing"),
					customSizeStyles.outerRing,
					classes.outerRing
				)}
			>
				{/* Inner Ring */}
				{variant !== "minimal" && (
					<div
						className={cn(
							shouldUseCSS ? `${blockClass}__inner-ring` : "",
							getStyles("innerRing"),
							customSizeStyles.innerRing,
							classes.innerRing
						)}
					/>
				)}
			</div>

			{/* Loader Text/Content */}
			{(showText || text || children) && (
				<div
					className={cn(
						shouldUseCSS ? `${blockClass}__content` : "",
						getStyles("content"),
						classes.content
					)}
				>
					{children || text}
				</div>
			)}
		</div>
	);
};
