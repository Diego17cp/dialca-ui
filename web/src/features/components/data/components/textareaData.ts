import {
	BasicTxtAreaUsage,
	BasicTxtAreaExample,
	TxtAreaVariantsExample,
	TxtAreaVariantsCode,
	TxtAreaCustomizationExample,
    TxtAreaCustomizationCode,
} from "../../components/TxtArea";
import type { ComponentData } from "../../types";
import { getIssueComponentPage, getPlaygroundPage, getSrcComponentPage } from "../../utils";

const basicUsageCode = `import { TxtArea } from 'dialca-ui';
import { useState } from 'react';
import { FaComment } from 'react-icons/fa6';

export default function App() {
    const [comment, setComment] = useState("");
    const [feedback, setFeedback] = useState("");

    return (
        <div>
            {/* Basic textarea */}
            <TxtArea 
                label="Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comments..."
                icon={<FaComment />}
            />

            {/* Required textarea with character count */}
            <TxtArea 
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                hasCharCount
                charCountType="bottom"
                maxLength={300}
            />

            {/* Textarea with floating circle counter */}
            <TxtArea 
                label="Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                hasCharCount
                charCountType="floating-circle"
                maxLength={500}
                allowResize
            />

            {/* Textarea with error state */}
            <TxtArea 
                label="Required Message"
                value=""
                hasErrors
                errorMessage="This field is required"
                required
            />
        </div>
    );
}`;

const variantsCode = `// Default variant with character counting
<TxtArea 
    label="Standard Comment"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    icon={<FaComment />}
    hasCharCount
    charCountType="bottom"
    maxLength={200}
/>

// Dark variant
<TxtArea 
    label="Dark Feedback"
    value={darkText}
    onChange={(e) => setDarkText(e.target.value)}
    variant="dark"
    icon={<FaComment />}
    hasCharCount
    charCountType="bottom"
    maxLength={250}
/>

// Resizable variant with purple theme
<TxtArea 
    label="Resizable Text Area"
    value={resizableText}
    onChange={(e) => setResizableText(e.target.value)}
    variant="resizable"
    allowResize
    icon={<FaEdit />}
    hasCharCount
    charCountType="floating-circle"
    maxLength={500}
/>

// Minimal variant with underline only
<TxtArea 
    label="Minimal Note"
    value={minimalText}
    onChange={(e) => setMinimalText(e.target.value)}
    variant="minimal"
    icon={<FaComment />}
    hasCharCount
    charCountType="bottom"
    maxLength={200}
/>

// Character count types demonstration
<TxtArea charCountType="top" />       // Above textarea
<TxtArea charCountType="bottom" />    // Below textarea
<TxtArea charCountType="floating-circle" /> // Floating circle`;

const customizationCode = `// Custom Classes Override
<TxtArea 
  label="Custom Styled Textarea"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  placeholder="Custom gradient style..."
  icon={<FaEdit />}
  hasCharCount
  charCountType="bottom"
  maxLength={200}
  classes={{
    textarea: "w-full! bg-gradient-to-r! shadow-lg hover:shadow-xl p-4 from-indigo-50! to-purple-200! hover:border-indigo-400! border-2! border-indigo-300! text-indigo-900! font-medium border-0! focus:outline-none! placeholder:text-indigo-400! pl-10 pr-4 resize-none! min-h-24!",
    label: "absolute! -top-2! left-3! bg-gradient-to-r! from-indigo-50! to-purple-50! px-2! text-indigo-600! font-bold text-sm!",
    icon: "text-indigo-500! text-lg!",
    charCounter: "text-indigo-600! font-mono!"
  }}
/>

// Error styling with neon glow
<TxtArea 
  label="Neon Error Style"
  value="invalid content here that exceeds normal bounds"
  hasErrors
  errorMessage="This textarea glows with error"
  icon={<FaFile />}
  hasCharCount
  charCountType="floating-circle"
  maxLength={150}
  classes={{
    error: "mt-2! text-red-300! font-medium bg-red-900/20! p-2! rounded! border! border-red-500/30! shadow-inner!"
  }}
/>

// Complete custom variant with premium card style
const customVariants = {
  'card': {
    normal: {
      container: "relative w-full bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300",
      textarea: "w-full bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-xl p-4 text-indigo-900 placeholder:text-indigo-400 focus:outline-none focus:border-indigo-400 resize-none min-h-28",
      label: "absolute -top-3 right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg",
      icon: "absolute left-2 top-2 text-indigo-500 text-lg z-10",
      charCounter: "absolute bottom-2 right-4 bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-mono border border-indigo-300"
    },
    focused: {
      container: "relative w-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-400 rounded-2xl p-6 shadow-2xl ring-4 ring-indigo-200 transition-all duration-300",
      label: "absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl scale-110"
    },
    error: {
      container: "relative w-full bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-6 shadow-xl",
      textarea: "w-full bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 text-red-900 placeholder:text-red-400 focus:outline-none focus:border-red-400 resize-none min-h-28",
      label: "bg-gradient-to-r from-red-500 to-pink-500! text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg",
      icon: "text-red-500"
    }
  }
};

// Using custom card variant
<TxtArea 
  label="Custom Message"
  value={customComment}
  onChange={(e) => setCustomComment(e.target.value)}
  placeholder="Write your custom content here..."
  variant="card"
  variants={customVariants}
  icon={<FaEdit />}
  extendDefault={false}
  hasCharCount
  charCountType="floating-circle"
  maxLength={500}
  required
/>

// Custom card with error state
<TxtArea 
  label="Custom Error State"
  value="This content has validation errors"
  hasErrors
  errorMessage="Content validation failed"
  variant="card"
  variants={customVariants}
  icon={<FaFile />}
  extendDefault={false}
  hasCharCount
  charCountType="bottom"
  maxLength={300}
/>`;

export const textareaData: ComponentData = {
	name: "Textarea",
	description: "A multi-line text input field for user input.",
	srcUrl: getSrcComponentPage("TxtArea"),
	issueUrl: getIssueComponentPage("TxtArea"),
	playgroundUrl: getPlaygroundPage("TxtArea"),
	basicUsage: basicUsageCode,
	basicUsageDisplay: BasicTxtAreaUsage,
	basicUsageComponent: BasicTxtAreaExample,
	examples: [
		{
			id: "variants",
			title: "Variants",
			description:
				"Available variants for the Textarea component to suit different design needs.",
			code: variantsCode,
			component: TxtAreaVariantsExample,
			codeDisplay: TxtAreaVariantsCode,
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"How to customize the Textarea component using variants and custom styles.",
			code: customizationCode,
			component: TxtAreaCustomizationExample,
			codeDisplay: TxtAreaCustomizationCode,
		},
	],
	api: {
		props: [
			// Core Props
			{
				name: "label",
				type: "string",
				required: true,
				description: "Label displayed above the text area.",
			},
			{
				name: "value",
				type: "string",
				required: false,
				description: "The current value of the text area.",
			},
			{
				name: "onChange",
				type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
				required: false,
				description: "Callback fired when the text area value changes.",
			},
			{
				name: "placeholder",
				type: "string",
				required: false,
				description:
					"Placeholder text displayed when the text area is empty (Not recommended if label is present).",
			},
			{
				name: "required",
				type: "boolean",
				required: false,
				description:
					"If true, indicates that the text area is required.",
				default: "false",
			},
			{
				name: "disabled",
				type: "boolean",
				required: false,
				description: "If true, disables the text area.",
				default: "false",
			},
			{
				name: "maxLength",
				type: "number",
				required: false,
				description:
					"Maximum number of characters allowed in the text area.",
				default: "500",
			},
			{
				name: "allowResize",
				type: "boolean",
				required: false,
				description:
					"If true, allows the user to resize the text area.",
				default: "false",
			},
			// State Props
			{
				name: "hasErrors",
				type: "boolean",
				required: false,
				description:
					"If true, styles the text area to indicate an error state.",
				default: "false",
			},
			{
				name: "errorMessage",
				type: "string",
				required: false,
				description:
					"Error message displayed below the text area when in error state.",
			},
			{
				name: "isLoading",
				type: "boolean",
				required: false,
				description:
					"If true, shows a loading indicator within the text area.",
				default: "false",
			},
			// Character Limit Props
			{
				name: "hasCharCount",
				type: "boolean",
				required: false,
				description:
					"If true, displays a character count below, within or above the text area.",
				default: "false",
			},
			{
				name: "charCountType",
				type: "'floating-circle' | 'top' | 'bottom'",
				required: false,
				description:
					"Positioning style for the character count display.",
				default: "'floating-circle'",
			},
			// Icon Props
			{
				name: "icon",
				type: "React.ReactNode",
				required: false,
				description: "Custom icon displayed inside the text area.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				required: false,
				description:
					"Custom icon displayed when in error state instead of the default error icon.",
				default: "Default error icon",
			},
			{
				name: "loader",
				type: "React.ReactNode",
				required: false,
				description:
					"Custom loader element displayed when `isLoading` is true.",
			},
			// Styling props
			{
				name: "variant",
				type: "string",
				required: false,
				description:
					"Variant key to apply predefined styles to the text area.",
				default: "default",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.TxtAreaStates>",
				required: false,
				description:
					"Custom variant styles to extend or override default styles.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				required: false,
				description:
					"If true, merges custom variants with the default styles instead of replacing them.",
				default: "true",
			},
			{
				name: "classes",
				type: "DialcaUI.TxtAreaVariant",
				required: false,
				description:
					"Custom CSS classes to override styles for specific parts of the component.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.TxtAreaStates",
			type: "interface",
			description: "Defines the style states for the Textarea component.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.TxtAreaVariant",
					description:
						"Styles for the normal/default state of the textarea.",
				},
				{
					name: "focused",
					type: "DialcaUI.TxtAreaVariant",
					description:
						"Styles for the focused state of the textarea.",
				},
				{
					name: "disabled",
					type: "DialcaUI.TxtAreaVariant",
					description:
						"Styles for the disabled state of the textarea.",
				},
				{
					name: "error",
					type: "DialcaUI.TxtAreaVariant",
					description: "Styles for the error state of the textarea.",
				},
				{
					name: "resizing",
					type: "DialcaUI.TxtAreaVariant",
					description:
						"Styles for the resizing state of the textarea.",
				},
			],
		},
		{
			name: "DialcaUI.TxtAreaVariant",
			type: "interface",
			description:
				"Defines the style properties for a specific variant of the Textarea component.",
			properties: [
				{
					name: "container",
					type: "string",
					description: "CSS classes for the textarea container.",
				},
				{
					name: "textarea",
					type: "string",
					description: "CSS classes for the textarea element itself.",
				},
				{
					name: "label",
					type: "string",
					description: "CSS classes for the label element.",
				},
				{
					name: "icon",
					type: "string",
					description:
						"CSS classes for the icon inside the textarea.",
				},
				{
					name: "charCounter",
					type: "string",
					description:
						"CSS classes for the character counter element.",
				},
				{
					name: "error",
					type: "string",
					description: "CSS classes for the error message element.",
				},
				{
					name: "loader",
					type: "string",
					description: "CSS classes for the loader element.",
				},
			],
		},
	],
};
