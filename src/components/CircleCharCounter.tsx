import React from "react";

/**
 * Configuration options for customizing the appearance of the CharCounter component.
 */
interface CharCounterConfig {
	strokeColor?: {
		/** Color for the progress stroke */
		progress: string;
		/** Color for the stroke when exceeding the limit */
		error: string;
		/** Color for the stroke when close to the limit */
		warning: string;
		/** Color for the background stroke */
		background: string;
	};
	textColor?: {
		/** Text color for progress state */
		progress: string;
		/** Text color for error state */
		error: string;
		/** Text color for warning state */
		warning: string;
	};
	/** Font size for the counter text (Tailwind class) */
	fontSize?: string;
}

/**
 * Props for the {@link CharCounter} component.
 */
interface CharCounterProps {
	/** Maximum number of characters allowed */
	maxLength: number;
	/** Current text value */
	value: string;
	/** Size of the circular counter in pixels (default: `32`) */
	size?: number;
	/** Custom configuration for colors and font size */
	config?: CharCounterConfig;
	/** Optional custom classes for container and text */
	classes?: {
		container?: string;
		text?: string;
	};
}

/**
 * A circular character counter component with customizable colors, size, and styles.
 *
 * Displays the number of characters remaining when nearing the limit
 * and changes colors based on the percentage of the limit reached.
 *
 * @component
 * @example
 * ```tsx
 * <CharCounter
 *   value={text}
 *   maxLength={100}
 *   size={40}
 *   config={{
 *     strokeColor: {
 *       progress: "stroke-green-400",
 *       error: "stroke-red-500",
 *       warning: "stroke-yellow-400",
 *       background: "stroke-gray-200",
 *     },
 *     textColor: {
 *       progress: "text-green-500",
 *       error: "text-red-500",
 *       warning: "text-yellow-500",
 *     },
 *     fontSize: "text-sm",
 *   }}
 *   classes={{
 *     container: "shadow-md",
 *     text: "tracking-wide",
 *   }}
 * />
 * ```
 *
 * @param props - See {@link CharCounterProps} for a full list of supported props.
 */
export const CharCounter: React.FC<CharCounterProps> = ({
	value = "",
	maxLength,
	size = 32,
	config = {
		strokeColor: {
			progress: "stroke-blue-300",
			error: "stroke-red-500",
			warning: "stroke-yellow-400",
			background: "stroke-gray-300",
		},
		textColor: {
			progress: "text-gray-500",
			error: "text-red-500",
			warning: "text-yellow-400",
		},
		fontSize: "text-xs",
	},
	classes,
}) => {
	const currentLength = value.length;
	const charsLeft = maxLength - currentLength;
	const percent = Math.min((currentLength / maxLength) * 100, 100);

	/** Returns the stroke color based on the percentage of the limit reached. */
	const getProgressColor = () => {
		if (percent >= 90) return config.strokeColor?.error;
		if (percent >= 75) return config.strokeColor?.warning;
		return config.strokeColor?.progress;
	};

	/** Returns the text color based on the percentage of the limit reached. */
	const getTextColor = () => {
		if (percent >= 90) return config.textColor?.error;
		if (percent >= 75) return config.textColor?.warning;
		return config.textColor?.progress;
	};

	const showNumber = percent >= 75;
	const radius = size / 2 - 4;
	const circumference = 2 * Math.PI * radius;
	const progress = (percent / 100) * circumference;

	const baseClasses = {
		container: `relative size-${size} flex items-center justify-center bg-white rounded-full`,
		text: `absolute inset-0 flex items-center justify-center font-bold ${
			config.fontSize
		} pointer-events-none select-none ${getTextColor()}`,
	};

	return (
		<div
			className={`${baseClasses.container} ${classes?.container}`}
			style={{ width: size, height: size }}
		>
			<svg width={size} height={size}>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
					stroke="currentColor"
					strokeWidth={3}
					className={config.strokeColor?.background}
				/>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
					strokeLinecap="round"
					strokeWidth={3}
					className={getProgressColor()}
					strokeDasharray={circumference}
					strokeDashoffset={circumference - progress}
					style={{ transition: "stroke-dashoffset 0.2s" }}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
			</svg>
			<span className={`${baseClasses.text} ${classes?.text}`}>
				{showNumber ? charsLeft : ""}
			</span>
		</div>
	);
};
