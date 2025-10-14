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
 *   classes={{
 *     container: "shadow-md!",
 *     text: "tracking-wide!",
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
	classes,
}) => {
	const currentLength = value.length;
	const charsLeft = maxLength - currentLength;
	const percent = Math.min((currentLength / maxLength) * 100, 100);

	// Color state for warning/danger
	let stateClass = "";
	if (percent >= 90) stateClass = "dialca-char-counter--danger";
	else if (percent >= 75) stateClass = "dialca-char-counter--warning";

	const showNumber = percent >= 75;
	const radius = size / 2 - 4;
	const circumference = 2 * Math.PI * radius;
	const progress = (percent / 100) * circumference;

	return (
		<div
			className={`dialca-char-counter ${stateClass} ${classes?.container || "" }`}
			style={{ "--char-size": `${size}px` } as React.CSSProperties}
		>
			<svg
				className="dialca-char-counter__svg"
				width={size}
				height={size}
			>
				<circle
					className="dialca-char-counter__circle-bg"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={3}
				/>
				<circle
					className="dialca-char-counter__circle-progress"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeWidth={3}
					strokeDasharray={circumference}
					strokeDashoffset={circumference - progress}
					style={{ transition: "stroke-dashoffset 0.2s" }}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
			</svg>
			<span
				className={`dialca-char-counter__text ${classes?.text || ""}`}
			>
				{showNumber ? charsLeft : ""}
			</span>
		</div>
	);
};
