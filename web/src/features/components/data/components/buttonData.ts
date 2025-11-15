import { BasicButtonExample, BasicUsage, CustomizationCode, CustomizationExample, SizesCode, SizesExample, StatesCode, StatesExample, VariantsCode, VariantsExample } from "../../components/Button";
import { getIssueComponentPage, getPlaygroundPage, getSrcComponentPage } from "../../utils";

const basicUsageCode = `import { Button } from 'dialca-ui';
export default function App() {
    return <Button>Click me</Button>;
}`;

const variantsCode = `// Default variant
<Button>Default</Button>

// Secondary variant
<Button variant="secondary">Secondary</Button>

// Danger variant
<Button variant="danger">Danger</Button>

// Success variant
<Button variant="success">Success</Button>

// Outline variant
<Button variant="outline">Outline</Button>

// Ghost variant
<Button variant="ghost">Ghost</Button>

// Minimal variant
<Button variant="minimal">Minimal</Button>`

const statesCode = `// Normal state
<Button>Normal</Button>

// Loading state
<Button loading>Loading</Button>

// Disabled state
<Button disabled>Disabled</Button>
`;
const sizesCode = `// Small size
<Button size="sm">Small</Button>

// Medium size (default)
<Button size="md">Medium</Button>
// or simply
<Button>Medium</Button>

// Large size
<Button size="lg">Large</Button>

// Extra Large size
<Button size="xl">Extra Large</Button>`;
const customizationCode = `// Example 1: Extending existing variant
const extendedVariants = {
    'gradient-primary': {
        normal: {
            container: "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg",
            content: "font-semibold",
            icon: "text-white",
            loader: "border-white/30 border-t-white"
        },
        hover: {
            container: "bg-gradient-to-r from-blue-600 to-purple-700 transform scale-105",
            content: "font-semibold",
            icon: "text-white",
            loader: "border-white/30 border-t-white"
        }
    }
};

// Usage with extended variant
<Button 
    variant="gradient-primary"
    variants={extendedVariants}
>
    Gradient Button
</Button>

// Example 2: Completely custom variant
const customVariants = {
    'neon-cyber': {
        normal: {
            container: "bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono uppercase tracking-wider p-4 rounded-md",
            content: "text-sm font-bold",
            icon: "text-cyan-400",
            loader: "border-cyan-400/30 border-t-cyan-400"
        },
        hover: {
            container: "bg-cyan-400/10 border-cyan-300 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]",
            content: "text-sm font-bold",
            icon: "text-cyan-300",
            loader: "border-cyan-300/30 border-t-cyan-300"
        }
    }
};

// Usage with custom variant (no defaults)
<Button 
    variant="neon-cyber"
    variants={customVariants}
    extendDefault={false}
>
    Neon Button
</Button>`;

export const buttonData = {
	name: "Button",
	description: "Versatile button component with loading states, icons, and multiple variants for different use cases.",
	basicUsage: basicUsageCode,
	basicUsageDisplay: BasicUsage,
	basicUsageComponent: BasicButtonExample,
	examples: [
		{
			id: "variants",
			title: "Button Variants",
			description: "Available visual variants for the Button Component.",
			code: variantsCode,
			component: VariantsExample,
			codeDisplay: VariantsCode,
		},
		{
			id: "states",
			title: "States",
			description: "Different states the Button component can have.",
			code: statesCode,
			component: StatesExample,
			codeDisplay: StatesCode,
		},
		{
			id: "sizes",
			title: "Button Sizes",
			description: "Available visual variants for the Button Component.",
			code: sizesCode,
			component: SizesExample,
			codeDisplay: SizesCode,
		},
        {
            id: "customization",
            title: "Customizing Button Variants",
            description: "Example of creating and using custom variants for the Button component by extending or overriding default styles.",
            component: CustomizationExample,
            codeDisplay: CustomizationCode,
            code: customizationCode,
        }
	],
	api: {
		props: [
			 // Content props
            {
                name: "children",
                type: "ReactNode",
                required: false,
                description: "Content to display inside the button.",
            },
            {
                name: "text",
                type: "string",
                required: false,
                description: "Button text (alternative to children).",
            },
            // Icon props
            {
                name: "icon",
                type: "ReactNode",
                required: false,
                description: "Icon to display alongside the text.",
            },
            {
                name: "iconPosition",
                type: '"left" | "right"',
                required: false,
                default: '"left"',
                description: "Position of the icon relative to text.",
            },
            // Loading props
            {
                name: "loading",
                type: "boolean",
                required: false,
                default: "false",
                description: "If true, shows loading state with spinner.",
            },
            {
                name: "loadingIcon",
                type: "ReactNode",
                required: false,
                description: "Custom loading icon/spinner.",
            },
            {
                name: "loadingText",
                type: "string",
                required: false,
                description: "Text to show when loading.",
            },
            // Size and variant props
            {
                name: "size",
                type: '"sm" | "md" | "lg" | "xl"',
                required: false,
                default: '"md"',
                description: "Size preset for the button.",
            },
            {
                name: "variant",
                type: "string",
                required: false,
                default: '"default"',
                description: "Button variant/style.",
            },
            // Styling props
            {
                name: "variants",
                type: "Record<string, DialcaUI.ButtonStates>",
                required: false,
                description: "Custom variants for styling.",
            },
            {
                name: "extendDefault",
                type: "boolean",
                required: false,
                default: "true",
                description: "If true, merges custom variants with defaults.",
            },
            {
                name: "classes",
                type: "{ container?: string; content?: string; icon?: string; loader?: string; }",
                required: false,
                description: "Custom classes for styling.",
            },
            {
                name: "className",
                type: "string",
                required: false,
                description: "Additional className for the button.",
            },
            // HTML Button props
            {
                name: "disabled",
                type: "boolean",
                required: false,
                default: "false",
                description: "Disable button interaction.",
            },
            {
                name: "onClick",
                type: "(event: MouseEvent<HTMLButtonElement>) => void",
                required: false,
                description: "Click event handler.",
            },
            {
                name: "onFocus",
                type: "(event: FocusEvent<HTMLButtonElement>) => void",
                required: false,
                description: "Focus event handler.",
            },
            {
                name: "onBlur",
                type: "(event: FocusEvent<HTMLButtonElement>) => void",
                required: false,
                description: "Blur event handler.",
            },
            {
                name: "onMouseEnter",
                type: "(event: MouseEvent<HTMLButtonElement>) => void",
                required: false,
                description: "Mouse enter event handler.",
            },
            {
                name: "onMouseLeave",
                type: "(event: MouseEvent<HTMLButtonElement>) => void",
                required: false,
                description: "Mouse leave event handler.",
            },
            {
                name: "type",
                type: '"button" | "submit" | "reset"',
                required: false,
                default: '"button"',
                description: "Button type attribute.",
            },
		],
	},
    types: [
        {
            name: "DialcaUI.ButtonStates",
            type: "interface",
            description: "Configuration object that defines the styling for different button states. Extends BaseStates with button-specific states.",
            properties: [
                {
                    name: "normal",
                    type: "ButtonVariant",
                    description: "Default/normal button appearance"
                },
                {
                    name: "focused",
                    type: "ButtonVariant",
                    description: "Button appearance when focused (keyboard navigation)"
                },
                {
                    name: "hover",
                    type: "ButtonVariant",
                    description: "Button appearance on mouse hover"
                },
                {
                    name: "active",
                    type: "ButtonVariant",
                    description: "Button appearance when pressed/clicked"
                },
                {
                    name: "disabled",
                    type: "ButtonVariant",
                    description: "Button appearance when disabled"
                },
                {
                    name: "loading",
                    type: "ButtonVariant",
                    description: "Button appearance during loading state"
                },
                {
                    name: "error",
                    type: "ButtonVariant",
                    description: "Button appearance when in error state"
                }
            ]
        },
        {
            name: "DialcaUI.ButtonVariant",
            type: "interface",
            description: "Configuration object for styling different parts of the button component.",
            properties: [
                {
                    name: "container",
                    type: "string",
                    description: "CSS classes for the main button container"
                },
                {
                    name: "content",
                    type: "string",
                    description: "CSS classes for the button content wrapper"
                },
                {
                    name: "icon",
                    type: "string",
                    description: "CSS classes for the button icon"
                },
                {
                    name: "loader",
                    type: "string",
                    description: "CSS classes for the loading spinner"
                }
            ]
        },
        {
            name: "DialcaUI.BaseStates",
            type: "interface",
            description: "Base interface that provides common states for all DialcaUI components.",
            properties: [
                {
                    name: "normal",
                    type: "ComponentVariant",
                    description: "Default state styling"
                },
                {
                    name: "focused",
                    type: "ComponentVariant",
                    description: "Focused state styling"
                },
                {
                    name: "disabled",
                    type: "ComponentVariant",
                    description: "Disabled state styling"
                },
                {
                    name: "error",
                    type: "ComponentVariant",
                    description: "Error state styling"
                }
            ]
        }
    ],
	srcUrl: getSrcComponentPage("Button"),
	issueUrl: getIssueComponentPage("Button"),
	playgroundUrl: getPlaygroundPage("Button"),
};
