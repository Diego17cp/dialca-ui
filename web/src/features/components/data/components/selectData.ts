import {
	BasicSelectExample,
	BasicSelectUsage,
	SelectCustomCode,
	SelectCustomExample,
	SelectStatesCode,
	SelectStatesExample,
	SelectVariantsCode,
	SelectVariantsExample,
} from "../../components/Select";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { Select } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');
    const [country, setCountry] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
    ];

    return (
        <div>
            // Basic select
            <Select
                label="Select Category"
                value={selected}
                options={options}
                onChange={(e) => setSelected(e.target.value)}
            />

            // Select with icon
            <Select
                label="Select Country"
                value={country}
                options={countryOptions}
                onChange={(e) => setCountry(e.target.value)}
                icon={<FaGlobe />}
                required
            />
        </div>
    );
}`;

const statesCode = `import { Select } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            // Error state
            <Select
                label="Select Category"
                value={selected}
                options={options}
                onChange={(e) => setSelected(e.target.value)}
                hasErrors={true}
                errorMessage="Please select a valid category"
                required
            />

            // Disabled state
            <Select
                label="Disabled Select"
                value=""
                options={options}
                onChange={() => {}}
                disabled={true}
            />

            // Loading state
            <Select
                label="Loading Select"
                value={selected}
                options={options}
                onChange={(e) => setSelected(e.target.value)}
                isLoading={true}
                loadingIcon={<FaSpinner className="animate-spin" />}
            />

            // Required field
            <Select
                label="Priority Level"
                value={selected}
                options={priorityOptions}
                onChange={(e) => setSelected(e.target.value)}
                required={true}
            />
        </div>
    );
}`;

const variantsCode = `import { Select } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            // Default variant
            <Select
                label="Select Country"
                value={selected}
                options={countryOptions}
                onChange={(e) => setSelected(e.target.value)}
                icon={<FaGlobe />}
                required
            />

            // Dark variant
            <Select
                label="Select Category"
                value={selected}
                options={categoryOptions}
                onChange={(e) => setSelected(e.target.value)}
                variant="dark"
                icon={<FaCog />}
            />

            // Minimal variant
            <Select
                label="Priority Level"
                value={selected}
                options={priorityOptions}
                onChange={(e) => setSelected(e.target.value)}
                variant="minimal"
                icon={<FaUser />}
            />
        </div>
    );
}`;

const customizationCode = `import { Select } from 'dialca-ui';
import { FaRocket, FaShield } from 'react-icons/fa';

export default function App() {
    return (
        <div>
            // Extended Default - adds rocket styling to existing
            <Select
                label="🚀 Launch Configuration"
                value={selected}
                options={countryOptions}
                onChange={(e) => setSelected(e.target.value)}
                variant="rocket"
                extendDefault={true}
                variants={{
                    rocket: {
                        normal: {
                            input: "w-full pr-4! bg-gradient-to-r from-orange-100 outline-none! shadow-0! to-red-100! border-2 border-orange-300! rounded-lg! text-orange-800! font-semibold!",
                            label: "text-amber-900! font-bold! text-lg! bg-gradient-to-r from-orange-200 to-red-200! px-2! py-1! rounded-full! shadow-md!",
                            menu: "bg-gradient-to-br from-orange-50 to-red-50! border-2 border-orange-300! rounded-lg! shadow-xl shadow-orange-500/30!",
                            option: "hover:bg-gradient-to-r hover:from-orange-200 hover:to-red-200! text-orange-800! font-medium!",
                            selectedOption: "bg-gradient-to-r from-orange-300 to-red-300! text-orange-900! font-bold!"
                        },
                        focused: {
                            container: "border-orange-400! shadow-lg shadow-orange-500/50!",
                            input: "border-orange-400! ring-4 ring-orange-500/30! shadow-none!",
                            label: "text-orange-800! scale-105!"
                        },
                        open: {
                            input: "rounded-b-none! border-b-orange-400!",
                            menu: "shadow-2xl shadow-orange-500/40!"
                        }
                    }
                }}
                icon={<FaRocket />}
                required
            />

            // Complete Custom - cyberpunk security panel from scratch
            <Select
                label="🔒 Security Protocol Level"
                value={selected}
                options={securityOptions}
                onChange={(e) => setSelected(e.target.value)}
                variant="cyberpunk"
                extendDefault={false}
                variants={{
                    cyberpunk: {
                        normal: {
                            container: "
                                relative flex flex-col gap-4 p-6 
                                bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
                                rounded-xl border-2 border-cyan-500/30
                                
                                hover:border-cyan-400/60 transition-all duration-300
                                shadow-lg shadow-cyan-500/20 group font-mono
                            ",
                            input: "
                                relative w-full p-4 bg-gray-800/80 backdrop-blur-sm
                                border-2 border-cyan-500/50 rounded-xl text-cyan-100 font-mono
                                cursor-pointer transition-all duration-300 flex items-center
                                hover:border-cyan-400 hover:bg-gray-700/80 focus:outline-none
                                focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30
                                shadow-inner shadow-gray-900/50
                            ",
                            label: "
                                absolute -top-3 left-6 px-3 py-1 z-20 font-mono font-bold text-sm
                                bg-gradient-to-r from-cyan-400 to-blue-500 text-black 
                                rounded-full shadow-lg border border-cyan-300/30
                                transition-all duration-300 drop-shadow-lg
                            ",
                            arrow: "
                                absolute right-8 top-1/2 -translate-y-1/2 z-10
                                text-cyan-400 transition-all duration-300 pointer-events-none
                                hover:text-cyan-300 drop-shadow-lg
                            ",
                            menu: "
                                absolute top-full left-0 right-0 mt-2 z-50 font-mono
                                bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-sm
                                border-2 border-cyan-400/40 rounded-xl shadow-2xl shadow-cyan-500/30
                                max-h-60 overflow-y-auto
                            ",
                            option: "
                                flex items-center gap-3 p-4 text-cyan-100 cursor-pointer
                                transition-all duration-300 border-b border-cyan-500/20 last:border-b-0
                                hover:bg-cyan-400/20 hover:text-cyan-50 hover:translate-x-2
                                first:rounded-t-xl last:rounded-b-xl relative overflow-hidden
                                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent
                                before:via-cyan-400/10 before:to-transparent before:translate-x-[-100%]
                                hover:before:translate-x-[100%] before:transition-transform before:duration-500
                                font-mono text-sm tracking-wide
                            ",
                            selectedOption: "
                                bg-gradient-to-r from-cyan-600/50 to-blue-600/50 text-cyan-50
                                border-l-4 border-cyan-400 font-bold
                                shadow-lg shadow-cyan-500/20
                                before:bg-cyan-400/20
                            "
                        },
                        focused: {
                            container: "
                                border-cyan-400/80 shadow-xl shadow-cyan-500/40
                                before:animate-pulse
                            ",
                            input: "
                                border-cyan-400 bg-gray-700/90 ring-4 ring-cyan-500/30
                                text-cyan-50
                            ",
                            label: "
                                scale-110 shadow-xl shadow-cyan-500/50
                                bg-gradient-to-r from-cyan-300 to-blue-400
                            ",
                            arrow: "
                                text-cyan-300 scale-110
                            "
                        },
                        open: {
                            input: "
                                rounded-b-none border-b-cyan-400/80
                            ",
                            arrow: "
                                rotate-180 text-cyan-300 scale-110
                            ",
                            menu: "
                                opacity-100 visible translate-y-0
                            "
                        },
                        error: {
                            container: "
                                border-red-500/50 shadow-red-500/30
                            ",
                            input: "
                                border-red-500/60 focus:border-red-400 focus:ring-red-500/30
                            ",
                            label: "
                                bg-gradient-to-r from-red-500 to-pink-500 text-white
                            "
                        }
                    }
                }}
                icon={<FaShield />}
                required
            />
        </div>
    );
}`;

export const selectData: ComponentData = {
	name: "Select",
	description:
		"A customizable dropdown select component for choosing options from a list.",
	srcUrl: getSrcComponentPage("Select"),
	issueUrl: getIssueComponentPage("Select"),
	playgroundUrl: getPlaygroundPage("Select"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicSelectExample,
	basicUsageDisplay: BasicSelectUsage,
	examples: [
		{
			id: "states",
			title: "Select States",
			description:
				"Demonstrates the different states of the Select component including normal, disabled, and error states.",
			code: statesCode,
			component: SelectStatesExample,
			codeDisplay: SelectStatesCode,
		},
		{
			id: "variants",
			title: "Select Variants",
			description: "Available style variants for the Select component.",
			code: variantsCode,
			component: SelectVariantsExample,
			codeDisplay: SelectVariantsCode,
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"Shows how to customize the Select component using custom classes and style variants and do mad things.",
			code: customizationCode,
			component: SelectCustomExample,
			codeDisplay: SelectCustomCode,
		},
	],
	api: {
		props: [
			{
				name: "label",
				type: "string",
				required: true,
				description: "The label for the select component.",
			},
			{
				name: "value",
				type: "string",
				required: true,
				description: "The currently selected value.",
			},
			{
				name: "options",
				type: "SelectOption[]",
				default: "[]",
				description:
					"An array of options to choose from with value, label, and optional icon and disabled state.",
			},
			{
				name: "onChange",
				type: "(e: {  target: { value: string } }) => void",
				required: true,
				description:
					"Callback function triggered when the selected value changes.",
			},
			{
				name: "placeholder",
				type: "string",
				description:
					"Placeholder text displayed when no option is selected, use without label to avoid overlap.",
			},
			{
				name: "required",
				type: "boolean",
				default: "false",
				description: "Marks the select as required in forms.",
			},
			{
				name: "disabled",
				type: "boolean",
				description: "Disables the select component.",
				default: "false",
			},
			{
				name: "icon",
				type: "React.ReactNode",
				description:
					"Optional icon displayed within the select component, use it without options icon.",
			},
			{
				name: "hasErrors",
				type: "boolean",
				description: "Indicates if the select has validation errors.",
				default: "false",
			},
			{
				name: "errorMessage",
				type: "string",
				description: "Error message displayed when hasErrors is true.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				description:
					"Custom icon displayed alongside the error message.",
				default: "A standard error icon.",
			},
			{
				name: "isLoading",
				type: "boolean",
				description:
					"Displays a loading state for the select component, needs loadingIcon to show the loading indicator.",
				default: "false",
			},
			{
				name: "loadingIcon",
				type: "React.ReactNode",
				description: "Custom icon displayed during the loading state.",
			},
			{
				name: "name",
				type: "string",
				description:
					"Name attribute for the select element, useful for forms.",
			},
			{
				name: "maxHeight",
				type: "string",
				description:
					"Sets the maximum height of the options dropdown (e.g., '8rem', '200px').",
				default: "'15rem'",
			},
			{
				name: "className",
				type: "string",
				description:
					"Custom CSS classes to apply to the select component container.",
			},
			{
				name: "classes",
				type: "DialcaUI.SelectVariant",
				description:
					"Custom classes for different parts of the select component for advanced styling.",
			},
			{
				name: "variant",
				type: "string",
				default: "'default'",
				description: "Key to apply style variants defined.",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.SelectStates>",
				description: "Custom style variants for the select component.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				description:
					"Whether to extend the default styles when using custom variants.",
				default: "true",
			},
			{
				name: "onFocus",
				type: "() => void",
				required: false,
				description:
					"Callback function called when the select gains focus.",
			},
			{
				name: "onBlur",
				type: "() => void",
				required: false,
				description:
					"Callback function called when the select loses focus.",
			},
		],
	},
	types: [
		{
			name: "SelectOption",
			type: "interface",
			description:
				"Defines the structure of an option in the Select component.",
			properties: [
				{
					name: "value",
					type: "string",
					description: "The value of the option.",
				},
				{
					name: "label",
					type: "string",
					description: "The display label of the option.",
				},
				{
					name: "icon",
					type: "React.ReactNode",
					description:
						"Optional icon to display alongside the option label.",
				},
				{
					name: "disabled",
					type: "boolean",
					description: "Indicates if the option is disabled.",
				},
			],
		},
		{
			name: "DialcaUI.SelectStates",
			type: "interface",
			description:
				"Defines the customizable style states for the Select component.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the normal state.",
				},
				{
					name: "focused",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the focused state.",
				},
				{
					name: "disabled",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the disabled state.",
				},
				{
					name: "error",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the error state.",
				},
				{
					name: "options",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the options dropdown.",
				},
				{
					name: "open",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the open state of the select.",
				},
				{
					name: "value",
					type: "DialcaUI.SelectVariant",
					description: "Styles for the selected value display.",
				},
			],
		},
		{
			name: "DialcaUI.SelectVariant",
			type: "interface",
			description:
				"Defines the style properties for different parts of the Select component.",
			properties: [
				{
					name: "container",
					type: "string",
					description:
						"Styles for the container element of the select.",
				},
				{
					name: "input",
					type: "string",
					description: "Styles for the select input element.",
				},
				{
					name: "label",
					type: "string",
					description: "Styles for the label element of the select.",
				},
				{
					name: "icon",
					type: "string",
					description: "Styles for the icon element of the select.",
				},
				{
					name: "menu",
					type: "string",
					description: "Styles for the options dropdown.",
				},
				{
					name: "arrow",
					type: "string",
					description: "Styles for the arrow element of the select.",
				},
				{
					name: "error",
					type: "string",
					description: "Styles for the error message element.",
				},
				{
					name: "option",
					type: "string",
					description: "Styles for each option in the dropdown.",
				},
				{
					name: "selectedOption",
					type: "string",
					description:
						"Styles for the selected option in the dropdown.",
				},
			],
		},
	],
};
