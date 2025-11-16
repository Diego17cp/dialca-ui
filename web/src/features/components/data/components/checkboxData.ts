import {
	BasicCheckboxExample,
	BasicUsage,
	CustomizationCode,
	CustomizationExample,
	SizesCode,
	SizesExample,
	StatesCode,
	StatesExample,
	VariantsCode,
	VariantsExample,
} from "../../components/Checkbox";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { Checkbox } from 'dialca-ui';
export default function App() {
    return (
        <Checkbox label="Accept Terms and Conditions" />
    );
}
`;
const variantsCode = `// Default variant
<Checkbox label="Default variant" checked />

// Minimal variant
<Checkbox variant="minimal" label="Minimal design" checked />

// Card variant
<Checkbox 
    variant="card"
    label="Card style"
    description="Enhanced container"
    checked
/>

// Switch variant
<Checkbox variant="switch" label="Toggle switch" checked />

// Dark variant
<Checkbox variant="dark" label="Dark theme" checked />

// Without label
<Checkbox checked />`;

const sizesCode = `// Small size
<Checkbox 
  size="sm"
  label="Small checkbox"
  description="Compact size"
  checked
/>

// Medium size (default)
<Checkbox 
  size="md"
  label="Medium checkbox"
  description="Default size"
  checked
/>
// or simply
<Checkbox label="Medium checkbox" checked />

// Large size
<Checkbox 
  size="lg"
  label="Large checkbox"
  description="Spacious design"
  checked
/>

// Compact without description
<Checkbox size="sm" label="Compact" checked />

// Large without label
<Checkbox size="lg" checked />`;

const statesCode = `// Normal unchecked state
<Checkbox label="Unchecked state" checked={false} />

// Checked state
<Checkbox label="Checked state" checked={true} />

// Indeterminate state
<Checkbox label="Indeterminate state" indeterminate={true} />

// Disabled state
<Checkbox label="Disabled unchecked" disabled checked={false} />

// Disabled + checked state
<Checkbox label="Disabled checked" disabled checked />

// Error state
<Checkbox 
  label="Error unchecked"
  hasErrors={true}
  errorMessage="Please accept the terms"
  checked={false}
/>

// Error + checked state
<Checkbox 
  label="Error checked"
  hasErrors={true}
  errorMessage="Custom error message"
  checked={true}
/>

// Interactive state with handler
const [checked, setChecked] = useState(false);

<Checkbox 
  label="Click to toggle"
  checked={checked}
  onCheckedChange={setChecked}
/>`;

const customizationCode = `// Example 1: Extending existing variant
const extendedVariants = {
  'premium-card': {
    normal: {
      container: "border-2 border-purple-500 p-6 rounded-xl bg-gradient-to-br from-purple-50",
      checkbox: "border-purple-300 shadow-lg",
      background: "bg-gradient-to-r from-purple-500 to-pink-500",
      label: "text-lg font-semibold bg-gradient-to-r from-purple-600 bg-clip-text",
    },
    hover: {
      container: "border-purple-400 shadow-xl transform scale-105",
      checkbox: "border-purple-400 shadow-purple-200",
    }
  }
};

// Usage with extended variant
<Checkbox 
  variant="premium-card"
  variants={extendedVariants}
  label="Premium Features"
  checked={true}
/>

// Example 2: Gaming variant with advanced effects
const customVariants = {
  'gaming': {
    normal: {
      container: \`
        relative flex gap-4 p-4 bg-gradient-to-br from-gray-900 via-green-900 to-black
        rounded-xl border border-green-500/30 cursor-pointer group overflow-hidden
        hover:border-green-400/50 transition-all duration-300
      \`,
      wrapper: "relative z-10",
      checkbox: \`
        relative w-8 h-8 rounded-lg transition-all duration-300 ease-out
        group-hover:scale-110 group-hover:rotate-3 group-active:scale-95
      \`,
      background: \`
        absolute inset-0 rounded-lg border-2 transition-all duration-300
        bg-gradient-to-br from-gray-800 to-gray-700 border-green-400/50
        shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40
      \`,
      label: \`
        text-green-100 font-bold text-lg group-hover:text-white
        drop-shadow-lg uppercase tracking-wider
      \`
    },
    checked: {
      background: \`
        bg-gradient-to-br from-green-600 via-green-500 to-green-700
        border-green-300 shadow-2xl shadow-green-500/60 animate-pulse
      \`,
      icon: "scale-100 opacity-100 text-black animate-bounce"
    }
  }
};

// Usage with gaming variant
<Checkbox 
  variant="gaming"
  variants={customVariants}
  label="Enable Gaming Mode"
  description="Access the digital realm"
  checked={customChecked}
  onCheckedChange={setCustomChecked}
/>`;

export const checkboxData: ComponentData = {
	name: "Checkbox",
	description:
		"A checkbox allows users to select one or more options from a set.",
	basicUsage: basicUsageCode,
	basicUsageDisplay: BasicUsage,
	basicUsageComponent: BasicCheckboxExample,
	srcUrl: getSrcComponentPage("Checkbox"),
	issueUrl: getIssueComponentPage("Checkbox"),
	playgroundUrl: getPlaygroundPage("Checkbox"),
	examples: [
		{
			id: "variants",
			title: "Variants",
			description:
				"Demonstrates different visual variants of the Checkbox component.",
			code: variantsCode,
			component: VariantsExample,
			codeDisplay: VariantsCode,
		},
		{
			id: "sizes",
			title: "Sizes",
			description:
				"Available sizes for the Checkbox component with different content combinations.",
			code: sizesCode,
			component: SizesExample,
			codeDisplay: SizesCode,
		},
		{
			id: "states",
			title: "States",
			description:
				"Shows various states of the Checkbox component including checked, indeterminate, disabled, and error states.",
			code: statesCode,
			component: StatesExample,
			codeDisplay: StatesCode,
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"Demonstrates how to customize the Checkbox component with different styles and behaviors.",
			code: customizationCode,
			component: CustomizationExample,
			codeDisplay: CustomizationCode,
		}
	],
	api: {
		props: [
			// Content props
			{
				name: "label",
				type: "string",
				required: false,
				description: "The label text displayed next to the checkbox.",
			},
			{
				name: "description",
				type: "string",
				required: false,
				description:
					"Additional descriptive text displayed below the label.",
			},
			// State props
			{
				name: "checked",
				type: "boolean",
				required: false,
				description: "Determines whether the checkbox is checked.",
				default: "false",
			},
			{
				name: "onCheckedChange",
				description:
					"Callback function invoked when the checked state changes.",
				type: "(checked: boolean) => void",
				required: false,
			},
			{
				name: "indeterminate",
				type: "boolean",
				required: false,
				description: "Sets the checkbox to an indeterminate state.",
				default: "false",
			},
			{
				name: "disabled",
				type: "boolean",
				required: false,
				description: "Disables the checkbox if set to true.",
				default: "false",
			},
			// Error handling
			{
				name: "hasErrors",
				type: "boolean",
				required: false,
				description:
					"Indicates whether the checkbox is in an error state.",
				default: "false",
			},
			{
				name: "errorMessage",
				type: "string",
				required: false,
				description:
					"The error message displayed when the checkbox has errors.",
			},
			{
				name: "errorIcon",
				type: "ReactNode",
				required: false,
				description:
					"Custom icon to display alongside the error message.",
				default: "Default error icon",
			},
			// Styling props
			{
				name: "size",
				type: "sm | md | lg",
				required: false,
				description: "Specifies the size of the checkbox.",
				default: "md",
			},
			{
				name: "variant",
				type: "string",
				required: false,
				description:
					"Defines the visual style variant of the checkbox.",
				default: "default",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.CheckboxStates>",
				required: false,
				description:
					"Custom variants for different visual styles of the checkbox.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				required: false,
				description: "If true, merges custom variants with defaults.",
				default: "true",
			},
			{
				name: "classes",
				type: "DialcaUI.CheckboxVariant",
				required: false,
				description:
					"Custom CSS classes for different parts of the checkbox component.",
			},
			{
				name: "className",
				type: "string",
				required: false,
				description:
					"Additional CSS classes to apply to the checkbox container.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.CheckboxStates",
			type: "interface",
			description:
				"Configuration object that defines styles for different states of the Checkbox component. Extends BaseStates with specific styles for Checkbox.",
			properties: [
				{
					name: "normal",
					type: "CheckboxVariant",
					description: "Default/normal checkbox appearance.",
				},
				{
					name: "focused",
					type: "CheckboxVariant",
					description:
						"Checkbox appearance when focused (keyboard navigation)",
				},
				{
					name: "hover",
					type: "CheckboxVariant",
					description: "Checkbox appearance on mouse hover",
				},
				{
					name: "active",
					type: "CheckboxVariant",
					description: "Checkbox appearance when pressed/clicked",
				},
				{
					name: "disabled",
					type: "CheckboxVariant",
					description: "Checkbox appearance when disabled",
				},
				{
					name: "checked",
					type: "CheckboxVariant",
					description: "Checkbox appearance when checked",
				},
				{
					name: "indeterminate",
					type: "CheckboxVariant",
					description:
						"Checkbox appearance when in indeterminate state",
				},
				{
					name: "error",
					type: "CheckboxVariant",
					description: "Checkbox appearance when in error state",
				},
			],
		},
		{
			name: "DialcaUI.CheckboxVariant",
			type: "interface",
			description:
				"Defines CSS classes for different parts of the Checkbox component.",
			properties: [
				{
					name: "container",
					type: "string",
					description:
						"CSS classes for the main container of the checkbox.",
				},
				{
					name: "wrapper",
					type: "string",
					description:
						"CSS classes for the wrapper around the checkbox input and visual box.",
				},
				{
					name: "checkbox",
					type: "string",
					description:
						"CSS classes for the checkbox visual box. This is the box that users click to check/uncheck.",
				},
				{
					name: "background",
					type: "string",
					description:
						"CSS classes for the background of the checkbox visual box.",
				},
				{
					name: "icon",
					type: "string",
					description:
						"CSS classes for the checkmark or indeterminate icon inside the checkbox box.",
				},
				{
					name: "label",
					type: "string",
					description:
						"CSS classes for the label text displayed next to the checkbox.",
				},
				{
					name: "description",
					type: "string",
					description:
						"CSS classes for the descriptive text displayed below the label.",
				},
				{
					name: "error",
					type: "string",
					description: "CSS classes for the error message text.",
				},
			],
		},
	],
};
