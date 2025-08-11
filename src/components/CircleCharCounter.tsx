import React from "react";

interface CharCounterConfig {
	strokeColor?: {
		progress: string;
		error: string;
		warning: string;
		background: string;
	};
	textColor?: {
		progress: string;
		error: string;
		warning: string;
	};
	fontSize?: string;
}

interface CharCounterProps {
	maxLength: number;
	value: string;
	size?: number;
	config?: CharCounterConfig;
	classes?: {
		container?: string;
		text?: string;
	};
}

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

	const getProgressColor = () => {
		if (percent >= 90) return config.strokeColor?.error;
		if (percent >= 75) return config.strokeColor?.warning;
		return config.strokeColor?.progress;
	};
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
		text: `absolute inset-0 flex items-center justify-center font-bold ${config.fontSize} pointer-events-none select-none ${getTextColor()}`,
	};

	return (
		<div
			className={`${baseClasses.container} ${classes?.container}`}
			// Apply style if the tw version doesn't allow size class
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
