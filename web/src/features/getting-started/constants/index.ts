import {
	HiOutlineRocketLaunch,
	HiOutlineCubeTransparent,
	HiOutlineSparkles,
} from "react-icons/hi2";

const installCommands = [
	{ manager: "npm", command: "npm install dialca-ui" },
	{ manager: "yarn", command: "yarn add dialca-ui" },
	{ manager: "pnpm", command: "pnpm add dialca-ui" },
	{ manager: "bun", command: "bun add dialca-ui" },
];

const features = [
	{
		icon: HiOutlineRocketLaunch,
		title: "Ready to Use",
		description: "Pre-built components with minimal setup required",
	},
	{
		icon: HiOutlineCubeTransparent,
		title: "TypeScript Support",
		description: "Full TypeScript support with proper type definitions",
	},
	{
		icon: HiOutlineSparkles,
		title: "Customizable",
		description:
			"Flexible styling system with variants and class overrides",
	},
];

export { installCommands, features };