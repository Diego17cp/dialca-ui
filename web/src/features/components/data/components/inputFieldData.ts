import {
	BasicUsage,
	BasicInputFieldExample,
	VariantsCode,
	VariantsExample,
	CustomizationExample,
	CustomizationCode,
} from "../../components/InputField";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { InputField } from 'dialca-ui';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa6';

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            {/* Basic input with icon */}
            <InputField 
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                startIcon={<FaEnvelope />}
            />

            {/* Required input */}
            <InputField 
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            {/* Password input with toggle */}
            <InputField 
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isPassword
                showPassword={showPassword}
                onToggleVisibility={() => setShowPassword(!showPassword)}
                required
            />
        </div>
    );
}`;

const variantsCode = `// Default variant (light theme)
<InputField 
  label="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  startIcon={<FaEnvelope />}
/>

<InputField 
  label="Dark Email"
  value={darkText}
  onChange={(e) => setDarkText(e.target.value)}
  variant="dark"
  startIcon={<FaEnvelope />}
/>

// Error state
<InputField 
  label="Username"
  value="invalid@user"
  hasErrors
  errorMessage="Username contains invalid characters"
  startIcon={<FaUser />}
/>

// Password with toggle
<InputField 
  label="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  isPassword
  showPassword={showPassword}
  onToggleVisibility={() => setShowPassword(!showPassword)}
  variant="dark"
  required
/>

// Loading state
<InputField 
  label="Loading State"
  value="Processing..."
  isLoading
  startIcon={<FaUser />}
/>

// Disabled state
<InputField 
  label="Disabled Field"
  value="Cannot edit this"
  disabled
  startIcon={<FaLock />}
/>`;

const customizationCode = `// Custom classes override
<InputField 
  label="Custom Styled Input"
  value={text}
  onChange={(e) => setText(e.target.value)}
  classes={{
    container: "border-2 border-indigo-300 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50",
    input: "text-indigo-900 font-medium",
    label: "text-indigo-600 font-bold text-sm",
    icon: "text-indigo-500"
  }}
/>

// Custom variants definition
const customVariants = {
  'search': {
    normal: {
      container: "relative w-full border-2 border-blue-200 rounded-full bg-blue-50 p-3",
      input: "w-full bg-transparent text-blue-900 focus:outline-none pl-10 pr-4",
      label: "absolute -top-2 left-4 bg-blue-50 px-2 text-blue-600 font-medium",
      icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
    },
    focused: {
      container: "relative w-full border-2 border-blue-500 bg-blue-100 shadow-md ring-2 ring-blue-200 rounded-full p-3"
    }
  },
  'modern': {
    normal: {
      container: "relative w-full border-0 border-b-2 border-gray-300 bg-transparent pb-2",
      input: "w-full bg-transparent text-gray-900 focus:outline-none pl-8 pr-4 py-2",
      label: "absolute -top-4 left-0 text-gray-500 font-light tracking-wide"
    },
    focused: {
      container: "relative w-full border-0 border-b-2 border-purple-600 shadow-[0_2px_0_0_rgb(147,51,234)] pb-2"
    }
  }
};

// Using custom search variant
<InputField 
  label="Search Field"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  variant="search"
  variants={customVariants}
  startIcon={<FaSearch />}
/>

// Modern underline style
<InputField 
  label="Modern Email"
  value={modernText}
  onChange={(e) => setModernText(e.target.value)}
  type="email"
  variant="modern"
  variants={customVariants}
  startIcon={<FaEnvelope />}
/>`;

export const inputFieldData: ComponentData = {
	name: "Input Field",
	description:
		"A customizable input field component with support for icons, error messages, and various styles.",
	srcUrl: getSrcComponentPage("InputField"),
	issueUrl: getIssueComponentPage("InputField"),
	playgroundUrl: getPlaygroundPage("InputField"),
	basicUsage: basicUsageCode,
	basicUsageDisplay: BasicUsage,
	basicUsageComponent: BasicInputFieldExample,
	examples: [
		{
			id: "variants",
			title: "Variants & States",
			description:
				"Explore different style variants and states of the Input Field component, including default, outlined, and dark modes, as well as loading and error states.",
			code: variantsCode,
			component: VariantsExample,
			codeDisplay: VariantsCode
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"Learn how to customize the Input Field component with custom icons, loaders, and error indicators to fit your application's design needs.",
			code: customizationCode,
			component: CustomizationExample,
			codeDisplay: CustomizationCode
		}
	],
	api: {
		props: [
			// Core Props
			{
				name: "label",
				type: "string",
				required: true,
				description: "Label displayed above the input field.",
				default: "Something cool",
			},
			{
				name: "value",
				type: "string",
				required: false,
				description: "The current value of the input field.",
			},
			{
				name: "onChange",
				type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
				required: false,
				description: "Callback fired when the input value changes.",
			},
			{
				name: "placeholder",
				type: "string",
				required: false,
				description: "Placeholder text displayed when the input is empty (Not recommended if label is present).",
			},
			{
				name: "type",
				type: "string",
				required: false,
				description: "The HTML input type attribute (e.g., 'text', 'email', 'password').",
				default: "text",
			}, 
			{
				name: "required",
				type: "boolean",
				required: false,
				description: "If true, indicates that the input is required.",
				default: "false",
			},
			{
				name: "disabled",
				type: "boolean",
				required: false,
				description: "If true, disables the input field.",
				default: "false",
			},
			// State Props
			{
				name: "hasErrors",
				type: "boolean",
				required: false,
				description: "If true, styles the input to indicate an error state.",
				default: "false",
			},
			{
				name: "errorMessage",
				type: "string",
				required: false,
				description: "Error message displayed below the input when in error state.",
			},
			{
				name: "isLoading",
				type: "boolean",
				required: false,
				description: "If true, shows a loading indicator within the input.",
				default: "false",
			},
			// Password Props
			{
				name: "isPassword",
				type: "boolean",
				required: false,
				description: "If true, the input behaves as a password field with visibility toggle.",
				default: "false",
			},
			{
				name: "showPassword",
				type: "boolean",
				required: false,
				description: "Controls the visibility of the password when `isPassword` is true.",
			},
			{
				name: "onToggleVisibility",
				type: "() => void",
				required: false,
				description: "Callback fired when the password visibility toggle is clicked.",
			},
			// Icon Props
			{
				name: "startIcon",
				type: "React.ReactNode",
				required: false,
				description: "Icon displayed at the start (left side) of the input field.",
			},
			{
				name: "endIcon",
				type: "React.ReactNode",
				required: false,
				description: "Icon displayed at the end (right side) of the input field.",
			},
			{
				name: "icon",
				type: "React.ReactNode",
				required: false,
				description: "Deprecated: Use `startIcon` or `endIcon` instead. Icon displayed inside the input field.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				required: false,
				description: "Custom icon displayed when in error state instead of the default error icon.",
				default: "Default error icon",
			},
			{
				name: "loader",
				type: "React.ReactNode",
				required: false,
				description: "Custom loader element displayed when `isLoading` is true.",
			},
			// Styling props
			{
				name: "variant",
				type: "string",
				required: false,
				description: "Variant key to apply predefined styles to the input field.",
				default: "default",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.InputStates>",
				required: false,
				description: "Custom variant styles to extend or override default styles.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				required: false,
				description: "If true, merges custom variants with the default styles instead of replacing them.",
				default: "true",
			},
			{
				name: "classes",
				type: "{ container?: string; input?: string; label?: string; icon?: string; button?: string; error?: string; loader?: string }",
				required: false,
				description: "Custom CSS classes to override styles for specific parts of the component.",
			}
		],
	},
	types: [
		{
			name: "DialcaUI.InputStates",
			type: "type",
			description: "Type defining different states for Input Field variants.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.InputVariant",
					description: "Styles for the normal/default state.",
				},
				{
					name: "focused",
					type: "DialcaUI.InputVariant",
					description: "Styles for the focused state.",
				},
				{
					name: "disabled",
					type: "DialcaUI.InputVariant",
					description: "Styles for the disabled state.",
				},
				{
					name: "error",
					type: "DialcaUI.InputVariant",
					description: "Styles for the error state.",
				}
			]
		},
		{
			name: "DialcaUI.InputVariant",
			type: "interface",
			description: "Interface for defining custom style variants for the Input Field component.",
			properties: [
				{
					name: "container",
					type: "string",
					description: "Styles for the input container.",
				},
				{
					name: "input",
					type: "string",
					description: "Styles for the input element.",
				},
				{
					name: "label",
					type: "string",
					description: "Styles for the input label.",
				},
				{
					name: "icon",
					type: "string",
					description: "Styles for the icons within the input.",
				},
				{
					name: "button",
					type: "string",
					description: "Styles for the password visibility toggle button.",
				},
				{
					name: "error",
					type: "string",
					description: "Styles for the error message.",
				},
				{
					name: "loader",
					type: "string",
					description: "Styles for the loader element.",
				}
			]
		},
	],
};
