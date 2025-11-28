import {
	BasicRadioExample,
	BasicRadioUsage,
	RadioCustomCode,
	RadioCustomExample,
	RadioStateCode,
	RadioStateExample,
    RadioVariantsCode,
    RadioVariantsExample,
} from "../../components/Radio";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { RadioInput } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [gender, setGender] = useState("");
    const [plan, setPlan] = useState("");
    const [terms, setTerms] = useState("");

    return (
        <div>
            // Basic radio group
            <RadioInput
                name="gender"
                value={gender}
                onChange={setGender}
                options={[
                    { value: "M", label: "Male" },
                    { value: "F", label: "Female" },
                    { value: "O", label: "Other" }
                ]}
            />

            // Radio with descriptions
            <RadioInput
                name="plan"
                value={plan}
                onChange={setPlan}
                options={[
                    {
                        value: "basic",
                        label: "Basic Plan",
                        description: "$9.99/month - Essential features"
                    },
                    {
                        value: "pro",
                        label: "Pro Plan",
                        description: "$19.99/month - Advanced features"
                    }
                ]}
            />

            // Single radio mode
            <RadioInput
                name="terms"
                value={terms}
                onChange={setTerms}
                label="I accept the terms and conditions"
                description="By checking this box you agree to our privacy policy"
            />
        </div>
    );
}`;

const statesCode = `import { RadioInput } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [newsletter, setNewsletter] = useState("");

    return (
        <div>
            // Error state
            <RadioInput
                name="newsletter"
                value={newsletter}
                onChange={setNewsletter}
                hasErrors={!newsletter}
                errorMessage="Please select an option"
                options={[
                    { value: "yes", label: "Yes, send me newsletters" },
                    { value: "no", label: "No, thank you" }
                ]}
            />

            // Disabled state
            <RadioInput
                name="disabled"
                value="option1"
                onChange={() => {}}
                disabled
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2", disabled: true }
                ]}
            />
        </div>
    );
}`;

const variantsCode = `import { RadioInput } from 'dialca-ui';

export default function App() {
    return (
        <div>
            // Default variant
            <RadioInput
                name="default"
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" }
                ]}
            />

            // Card variant with descriptions
            <RadioInput
                name="card"
                variant="card"
                options={[
                    {
                        value: "starter",
                        label: "Starter Plan",
                        description: "Perfect for individuals"
                    },
                    {
                        value: "professional",
                        label: "Professional Plan",
                        description: "Best for teams"
                    }
                ]}
            />

            // Minimal variant
            <RadioInput
                name="minimal"
                variant="minimal"
                options={[
                    { value: "small", label: "Small" },
                    { value: "medium", label: "Medium" }
                ]}
            />

            // Dark variant
            <RadioInput
                name="dark"
                variant="dark"
                options={[
                    {
                        value: "theme1",
                        label: "Dark Theme",
                        description: "Professional appearance"
                    }
                ]}
            />
        </div>
    );
}`;

const customizationCode = `import { RadioInput } from 'dialca-ui';

export default function App() {
    return (
        <div>
            // Extended Default - adds purple styling to existing
            <RadioInput
                name="extended"
                variant="purple"
                extendDefault={true}
                variants={{
                    purple: {
                        normal: {
                            container: "gap-4!",
                            radio: "w-6! h-6! border-purple-300!",
                            text: "text-purple-700! font-semibold!",
                            description: "text-purple-500!"
                        },
                        checked: {
                            radio: "border-purple-600! bg-purple-600!"
                        }
                    }
                }}
                options={[...]}
            />

            // Complete Custom - built from scratch
            <RadioInput
                name="custom"
                variant="modern"
                extendDefault={false}
                variants={{
                    modern: {
                        normal: {
                            container: "flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer",
                            radio: "w-5 h-5 border-2 rounded-full mr-3",
                            text: "font-medium text-gray-800",
                            description: "text-sm text-gray-500 mt-1"
                        },
                        checked: {
                            container: "border-blue-500 bg-blue-50",
                            radio: "border-blue-500 bg-blue-500 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all"
                        }
                    }
                }}
                options={[...]}
            />
        </div>
    );
}`;

export const radioData: ComponentData = {
	name: "Radio",
	description: "A radio button allows users to select one option from a set.",
	srcUrl: getSrcComponentPage("RadioInput"),
	issueUrl: getIssueComponentPage("Radio"),
	playgroundUrl: getPlaygroundPage("Radio"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicRadioExample,
	basicUsageDisplay: BasicRadioUsage,
	examples: [
		{
			id: "states",
			title: "Radio States",
			description:
				"Demonstrates radio inputs in error and disabled states.",
			code: statesCode,
			component: RadioStateExample,
            codeDisplay: RadioStateCode
		},
        {
            id: "variants",
            title: "Radio Variants",
            description: "Available style variants for the RadioInput component.",
            code: variantsCode,
            component: RadioVariantsExample,
            codeDisplay: RadioVariantsCode
        },
        {
            id: "customization",
            title: "Radio Customization",
            description:
                "Shows how to customize radio inputs using variants and custom styles.",
            code: customizationCode,
            component: RadioCustomExample,
            codeDisplay: RadioCustomCode
        }
	],
	api: {
		props: [
			{
				name: "name",
				type: "string",
				required: true,
				description:
					"The name attribute for the radio group. Used to group radio buttons together.",
			},
			{
				name: "value",
				type: "string",
				description: "The currently selected value.",
			},
			{
				name: "onChange",
				type: "(value: string) => void",
				description:
					"Callback function called when the selected value changes.",
			},
			{
				name: "options",
				type: "RadioOption[]",
				description:
					"Array of radio options. If not provided, a single radio input is rendered.",
			},
			{
				name: "label",
				type: "string",
				description:
					"Label for single radio mode (when options are not provided).",
			},
			{
				name: "description",
				type: "string",
				description:
					"Description for single radio mode (when options are not provided).",
			},
			{
				name: "hasErrors",
				type: "boolean",
				default: "false",
				description:
					"If true, displays the radio input(s) in an error state.",
			},
			{
				name: "errorMessage",
				type: "string",
				description: "Error message to display when in error state.",
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "If true, disables all radio inputs in the group.",
			},
			{
				name: "variant",
				type: "string",
				description: "Variant key to apply custom styles.",
				default: "'default'",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.RadioStates>",
				description: "Custom variants for styling the radio input(s).",
			},
			{
				name: "extendDefault",
				type: "boolean",
				default: "'true'",
				description:
					"If true, merges custom variants with default styles.",
			},
			{
				name: "classes",
				type: "DialcaUI.RadioVariant",
				description:
					"Custom classes for styling different parts of the radio input(s).",
			},
			{
				name: "className",
				type: "string",
				description: "Additional className for the container element.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				description: "Custom icon to display in the error state.",
			},
		],
	},
	types: [
		{
			name: "RadioOption",
			type: "interface",
			description:
				"Configuration option for each radio button in the group.",
			properties: [
				{
					name: "value",
					type: "string",
					description: "The value associated with the radio option.",
				},
				{
					name: "label",
					type: "string",
					description:
						"The label text displayed next to the radio button.",
				},
				{
					name: "description",
					type: "string",
					description:
						"Optional description text displayed below the label.",
				},
				{
					name: "disabled",
					type: "boolean",
					description:
						"If true, disables this specific radio option.",
				},
			],
		},
		{
			name: "DialcaUI.RadioStates",
			type: "interface",
			description:
				"Interface defining style variants for different states of the RadioInput component.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.RadioVariant",
					description: "Styles applied in the normal state.",
				},
				{
					name: "checked",
					type: "DialcaUI.RadioVariant",
					description:
						"Styles applied when the radio option is checked.",
				},
				{
					name: "disabled",
					type: "DialcaUI.RadioVariant",
					description:
						"Styles applied when the radio option is disabled.",
				},
				{
					name: "error",
					type: "DialcaUI.RadioVariant",
					description:
						"Styles applied when the radio option is in an error state.",
				},
				{
					name: "focused",
					type: "DialcaUI.RadioVariant",
					description:
						"Styles applied when the radio option is focused.",
				},
			],
		},
		{
			name: "DialcaUI.RadioVariant",
			type: "interface",
			description:
				"Interface defining customizable style properties for the RadioInput component.",
			properties: [
				{
					name: "container",
					type: "string",
					description: "Class for the container element.",
				},
				{
					name: "radio",
					type: "string",
					description: "Class for the radio input element.",
				},
				{
					name: "label",
					type: "string",
					description: "Class for the label element.",
				},
				{
					name: "text",
					type: "string",
					description: "Class for the text element.",
				},
				{
					name: "description",
					type: "string",
					description: "Class for the description element.",
				},
				{
					name: "error",
					type: "string",
					description: "Class for the error message element.",
				},
			],
		},
	],
};
