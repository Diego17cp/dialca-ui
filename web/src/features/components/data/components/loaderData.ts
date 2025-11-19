import {
	BasicLoaderExample,
	BasicLoaderUsage,
	LoaderAnimationCode,
	LoaderAnimationExample,
	LoaderCustomizationCode,
	LoaderCustomizationExample,
	LoaderSizesCode,
	LoaderSizesExample,
	LoaderStatesCode,
	LoaderStatesExample,
	LoaderVariantsCode,
	LoaderVariantsExample,
} from "../../components/Loader";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { Loader } from 'dialca-ui';

export default function App() {
    return (
        <div>
            // Basic loader
            <Loader />

            // With text
            <Loader text="Loading..." showText />
        </div>
    );
}`;

const variantsCode = `// Default spinning loader
<Loader />

// Dots bouncing animation
<Loader variant="dots" />

// Pulse animation
<Loader variant="pulse" />

// Minimal single ring
<Loader variant="minimal" />

// Dark theme
<Loader variant="dark" />`;

const sizesCode = `// Small size (1rem)
<Loader size="sm" />

// Medium size (2rem) - default
<Loader size="md" />

// Large size (3rem)
<Loader size="lg" />

// Extra large size (4rem)
<Loader size="xl" />

// Custom numeric size
<Loader size={20} />`;

const statesCode = `// Normal state
<Loader text="Loading..." showText />

// Error state
<Loader hasErrors text="Error occurred" showText />

// Success state
<Loader success text="Completed!" showText />

// Disabled state
<Loader disabled text="Disabled" showText />`;

const animationCode = `// Speed options
<Loader speed="slow" />
<Loader speed="normal" />
<Loader speed="fast" />

// Direction options
<Loader direction="clockwise" />
<Loader direction="counterclockwise" />`;

const customizationCode = `// Custom Classes Override
<Loader 
  text="Custom Loader"
  showText
  classes={{
    outerRing: "border-purple-500! border-4! w-12! h-12!",
    innerRing: "border-pink-400! border-2!",
    content: "text-purple-600! font-bold!"
  }}
/>

// Complete custom variant from scratch
const customVariants = {
  'neon': {
    normal: {
      container: "flex flex-col items-center gap-3",
      outerRing: "w-10 h-10 border-2 border-cyan-400 rounded-full animate-spin bg-cyan-400/10 shadow-lg shadow-cyan-400/50",
      innerRing: "w-6 h-6 border-2 border-cyan-300 rounded-full animate-spin",
      content: "text-cyan-400 font-mono text-sm"
    }
  }
};

// Using custom variant with extendDefault={false}
<Loader 
  variant="neon"
  extendDefault={false}
  text="Neon Glow"
  showText
  variants={customVariants}
/>`;

export const loaderData: ComponentData = {
	name: "Loader",
	description: "A visual indicator to show that content is loading.",
	srcUrl: getSrcComponentPage("Loader"),
	issueUrl: getIssueComponentPage("Loader"),
	playgroundUrl: getPlaygroundPage("Loader"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicLoaderExample,
	basicUsageDisplay: BasicLoaderUsage,
	examples: [
		{
			id: "variants",
			title: "Variants",
			description: "Available visual variants for the Loader component.",
			code: variantsCode,
			component: LoaderVariantsExample,
			codeDisplay: LoaderVariantsCode,
		},
		{
			id: "sizes",
			title: "Sizes",
			description:
				"Set the size of the loader using predefined sizes or custom pixel values.",
			code: sizesCode,
			component: LoaderSizesExample,
			codeDisplay: LoaderSizesCode,
		},
		{
			id: "states",
			title: "States",
			description:
				"Demonstration of different states like normal, disabled, and error for the Loader component.",
			code: statesCode,
			component: LoaderStatesExample,
			codeDisplay: LoaderStatesCode,
		},
		{
			id: "animation",
			title: "Animation",
			description:
				"Control the speed and direction of the loader animation.",
			code: animationCode,
			component: LoaderAnimationExample,
			codeDisplay: LoaderAnimationCode,
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"Learn how to customize the Loader component using custom classes and variants.",
			code: customizationCode,
			component: LoaderCustomizationExample,
			codeDisplay: LoaderCustomizationCode,
		}
	],
	api: {
		props: [
			// Size props
			{
				name: "size",
				type: "'sm' | 'md' | 'lg' | number",
				default: "'md'",
				description:
					"Sets the size of the loader. Can be a predefined size or a custom number in pixels.",
			},
			// State props
			{
				name: "hasErrors",
				type: "boolean",
				default: "false",
				description:
					"Applies error styles to the loader when set to true.",
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description:
					"Applies disabled styles to the loader when set to true.",
			},
			// Content props
			{
				name: "text",
				type: "string",
				description: "Optional text to display below the loader.",
			},
			{
				name: "showText",
				type: "boolean",
				default: "false",
				description:
					"Determines whether to display the text below the loader.",
			},
			{
				name: "children",
				type: "React.ReactNode",
				description:
					"Custom content to display below the loader, overrides the `text` prop.",
			},
			// Loader props
			{
				name: "speed",
				type: "'slow' | 'normal' | 'fast'",
				default: "'normal'",
				description: "Controls the speed of the loader animation.",
			},
			{
				name: "direction",
				type: "'clockwise' | 'counterclockwise'",
				default: "'clockwise'",
				description: "Sets the direction of the loader animation.",
			},
			// Style props
			{
				name: "variant",
				type: "string",
				description:
					"Applies predefined styles based on the variant key.",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.LoaderStates>",
				description:
					"Custom variant styles to override or extend default styles.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				default: "true",
				description:
					"Determines whether to extend default styles with custom variants.",
			},
			{
				name: "classes",
				type: "{ container?: string; outerRing?: string; innerRing?: string; content?: string; }",
				description:
					"Allows adding extra classes to specific loader elements for custom styling.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.LoaderStates",
			description: "Defines the style states for the Loader component.",
			type: "interface",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.LoaderVariant",
					description: "Styles for the normal/default state.",
				},
				{
					name: "disabled",
					type: "DialcaUI.LoaderVariant",
					description: "Styles for the disabled state.",
				},
				{
					name: "error",
					type: "DialcaUI.LoaderVariant",
					description: "Styles for the error state.",
				},
				{
					name: "success",
					type: "DialcaUI.LoaderVariant",
					description: "Styles for the success state.",
				},
			],
		},
		{
			name: "DialcaUI.LoaderVariant",
			description:
				"Defines the style properties for different parts of the Loader component.",
			type: "interface",
			properties: [
				{
					name: "container",
					type: "string",
					description: "Classes for the loader container.",
				},
				{
					name: "outerRing",
					type: "string",
					description: "Classes for the outer ring of the loader.",
				},
				{
					name: "innerRing",
					type: "string",
					description: "Classes for the inner ring of the loader.",
				},
				{
					name: "content",
					type: "string",
					description: "Classes for the content area of the loader.",
				},
			],
		},
	],
};
