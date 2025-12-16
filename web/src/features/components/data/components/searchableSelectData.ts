import {
	BasicSearchableSelectExample,
	BasicSearchableSelectUsage,
	SearchableSelectCustomizationCode,
	SearchableSelectCustomizationExample,
	SearchableSelectSizesCode,
	SearchableSelectSizesExample,
	SearchableSelectStatesCode,
	SearchableSelectStatesExample,
    SearchableSelectVariantsCode,
    SearchableSelectVariantsExample,
} from "../../components/SearchableSelect";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { SearchableSelect } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');
    const [country, setCountry] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', icon: <FaUser /> },
    ];

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
    ];

    return (
        <div>
            // Basic searchable select
            <SearchableSelect
                label="Select Option"
                options={options}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search options..."
            />

            // With icons and clearable
            <SearchableSelect
                label="Select Country"
                options={countryOptions}
                value={country}
                onChange={(value) => setCountry(value)}
                placeholder="Search countries..."
                isClearable={true}
            />
        </div>
    );
}`;

const statesCode = `import { SearchableSelect } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            // Error state
            <SearchableSelect
                label="Select Category"
                options={categoryOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                hasErrors
                errorMessage="Please select a valid category"
                placeholder="Search categories..."
            />

            // Disabled state
            <SearchableSelect
                label="Disabled Select"
                options={options}
                value=""
                onChange={() => {}}
                disabled
                placeholder="Cannot search..."
            />

            // Required field
            <SearchableSelect
                label="Assign User"
                required
                options={userOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                isClearable
            />

            // Disabled options
            <SearchableSelect
                label="Select Department"
                options={departmentOptions}
                value=""
                onChange={(value) => console.log(value)}
                isClearable
            />
        </div>
    );
}`;

const sizesCode = `import { SearchableSelect } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            // Small size - compact for tight spaces
            <SearchableSelect
                label="Select User"
                options={userOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search users..."
                size="sm"
                isClearable
            />

            // Medium size - default size for most cases
            <SearchableSelect
                label="Select Country"
                options={countryOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search countries..."
                size="md"
                isClearable
            />

            // Large size - prominent for emphasis
            <SearchableSelect
                label="Select Department"
                options={departmentOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search departments..."
                size="lg"
                isClearable
            />
        </div>
    );
}`;

const variantsCode = `import { SearchableSelect } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [selected, setSelected] = useState('');

    return (
        <div>
            // Default variant - standard styling
            <SearchableSelect
                label="Select Country"
                options={countryOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search countries..."
                variant="default"
                isClearable={true}
            />

            // Dark variant - dark theme styling
            <SearchableSelect
                label="Select Category"
                options={categoryOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search categories..."
                variant="dark"
                isClearable={true}
            />

            // Minimal variant - clean bottom border only
            <SearchableSelect
                label="Priority Level"
                options={priorityOptions}
                value={selected}
                onChange={(value) => setSelected(value)}
                placeholder="Search priorities..."
                variant="minimal"
                isClearable={true}
            />
        </div>
    );
}`;

const customizationCode = `import { SearchableSelect } from 'dialca-ui';
import { useState } from 'react';
import { FaTag, FaCog } from 'react-icons/fa';

export default function App() {
    const [classesSelect, setClassesSelect] = useState('');
    const [redesignSelect, setRedesignSelect] = useState('medium');

    const categoryOptions = [
        { value: 'urgent', label: 'Urgent', icon: <FaTag /> },
        { value: 'normal', label: 'Normal Priority', icon: <FaTag /> },
        { value: 'low', label: 'Low Priority', icon: <FaTag /> },
        { value: 'feature', label: 'Feature Request', icon: <FaTag /> },
        { value: 'bug', label: 'Bug Report', icon: <FaTag /> },
    ];

    const priorityOptions = [
        { value: 'low', label: 'Low Priority', icon: <FaCog /> },
        { value: 'medium', label: 'Medium Priority', icon: <FaCog /> },
        { value: 'high', label: 'High Priority', icon: <FaCog /> },
        { value: 'critical', label: 'Critical Priority', icon: <FaCog /> },
    ];

    // Complete redesign variant (extendDefault=false)
    const cardVariant = {
        default: {
            normal: {
                container: 'space-y-3',
                inputWrapper: 'relative bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-200',
                input: 'w-full px-4 py-3 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400',
                inputIcon: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg',
                dropdown: 'mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 max-h-60 overflow-auto',
                option: 'px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-150 flex items-center gap-3',
                optionIcon: 'text-gray-500 flex-shrink-0',
                label: 'block text-sm font-semibold text-gray-700 mb-1',
                noResults: 'px-4 py-6 text-center text-gray-500 italic'
            },
            optionHighlighted: {
                option: 'bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 shadow-sm',
                optionIcon: 'text-blue-500'
            },
            optionSelected: {
                option: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md',
                optionIcon: 'text-white'
            },
            focused: {
                inputWrapper: 'border-blue-300 shadow-xl ring-4 ring-blue-100'
            }
        }
    };

    return (
        <div>
            // Custom classes - extends default styles
            <SearchableSelect
                label="Issue Category"
                options={categoryOptions}
                value={classesSelect}
                onChange={(value) => setClassesSelect(value)}
                classes={{
                    input: 'border-orange-200! focus:border-orange-400! focus:ring-2 focus:ring-orange-400! bg-orange-50! shadow-none! outline-none!',
                    label: 'text-orange-700! font-bold!',
                    dropdown: 'border-orange-200! shadow-lg',
                    option: 'hover:bg-orange-100! border-l-4 border-l-transparent hover:border-l-orange-400'
                }}
                placeholder="Choose category..."
                isClearable
            />

            // Complete redesign with extendDefault=false
            <SearchableSelect
                label="Priority Level"
                options={priorityOptions}
                value={redesignSelect}
                onChange={(value) => setRedesignSelect(value)}
                placeholder="Select priority level..."
                variants={cardVariant}
                extendDefault={false}
                classes={{
                    clearButton: 'absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1'
                }}
                isClearable
                noResultsText="No priority levels available"
            />
        </div>
    );
}`;

export const searchableSelectData: ComponentData = {
	name: "Searchable Select",
	description:
		"A select component with search functionality to easily find options.",
	srcUrl: getSrcComponentPage("SearchableSelect"),
	issueUrl: getIssueComponentPage("SearchableSelect"),
	playgroundUrl: getPlaygroundPage("SearchableSelect"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicSearchableSelectExample,
	basicUsageDisplay: BasicSearchableSelectUsage,
	examples: [
		{
			id: "states",
			title: "States Example",
			description:
				"Different states for the SearchableSelect component including error, disabled, loading, and required states.",
			code: statesCode,
			component: SearchableSelectStatesExample,
			codeDisplay: SearchableSelectStatesCode,
		},
		{
			id: "sizes",
			title: "Sizes Example",
			description:
				"Different sizes for the SearchableSelect component including small, medium, and large sizes.",
			code: sizesCode,
			component: SearchableSelectSizesExample,
            codeDisplay: SearchableSelectSizesCode
		},
        {
            id: "variants",
            title: "Variants Example",
            description: "Available visual variants for the SearchableSelect component including default, dark, and minimal variants.",
            code: variantsCode,
            component: SearchableSelectVariantsExample,
            codeDisplay: SearchableSelectVariantsCode
        },
        {
            id: "customization",
            title: "Customization Example",
            description:
                "How to customize the SearchableSelect component using custom icons, error messages, and styles.",
            code: customizationCode,
            component: SearchableSelectCustomizationExample,
            codeDisplay: SearchableSelectCustomizationCode,
        }
	],
	api: {
		props: [
			{
				name: "options",
				type: "SelectOption[]",
				description: "Array of options to display in the dropdown.",
				required: true,
			},
			{
				name: "value",
				type: "string",
				description:
					"The currently selected value (controlled component).",
			},
			{
				name: "onChange",
				type: "(value: string) => void",
				description:
					"Callback function called when the selected value changes.",
				required: true,
			},
			{
				name: "placeholder",
				type: "string",
				default: "'Search...'",
				description:
					"Placeholder text displayed when no option is selected.",
			},
			{
				name: "label",
				type: "string",
				description:
					"Label for the searchable select component, above the input field.",
			},
			{
				name: "required",
				type: "boolean",
				default: "false",
				description: "Shows a required asterisk (*) if set to true.",
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Disables the searchable select if set to true.",
			},
			{
				name: "isClearable",
				type: "boolean",
				default: "false",
				description:
					"Shows a clear button to clear the selection if set to true.",
			},
			{
				name: "clearIcon",
				type: "React.ReactNode",
				description: "Custom icon for the clear button.",
				default: "Default clear (X) icon",
			},
			{
				name: "hasErrors",
				type: "boolean",
				default: "false",
				description:
					"Applies error styles to the component if set to true.",
			},
			{
				name: "errorMessage",
				type: "string",
				description:
					"Error message to display below the component when hasErrors is true.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				description:
					"Custom icon to display alongside the error message.",
				default: "Default error icon",
			},
			{
				name: "noResultsText",
				type: "string",
				default: "'No results found'",
				description:
					"Text to display when no options match the search query.",
			},
			{
				name: "dropdownIcon",
				type: "React.ReactNode",
				description: "Custom icon for the dropdown indicator.",
				default: "Default dropdown arrow icon",
			},
			{
				name: "rotateIcon",
				type: "boolean",
				default: "true",
				description:
					"Rotates the dropdown icon when the dropdown is open if set to true.",
			},
			{
				name: "size",
				type: "'sm' | 'md' | 'lg'",
				default: "'md'",
				description: "Size of the searchable select component.",
			},
			{
				name: "variant",
				type: "string",
				description:
					"Visual variant of the searchable select component.",
				default: "'default'",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.SearchableSelectStates>",
				description:
					"Custom variants for different states of the component.",
			},
			{
				name: "classes",
				type: "SearchableSelectClasses",
				description: "Custom CSS classes to override default styles.",
			},
			{
				name: "className",
				type: "string",
				description: "Additional CSS class for the container element.",
			},
		],
	},
	types: [
		{
			name: "SelectOption",
			type: `{ value: string; label: string; disabled?: boolean; icon?: React.ReactNode; }`,
			description:
				"Type definition for an option in the Searchable Select component.",
			properties: [
				{
					name: "value",
					type: "string",
					description: "The value of the option.",
				},
				{
					name: "label",
					type: "string",
					description: "The label displayed for the option.",
				},
				{
					name: "disabled",
					type: "boolean",
					description: "Disables the option if set to true.",
				},
				{
					name: "icon",
					type: "React.ReactNode",
					description:
						"Optional icon to display alongside the option label.",
				},
			],
		},
		{
			name: "SearchableSelectClasses",
			type: `interface`,
			description:
				"Type definition for custom CSS classes for the Searchable Select component.",
			properties: [
				{
					name: "container",
					type: "string",
					description:
						"CSS class for the main container wrapper element",
				},
				{
					name: "inputWrapper",
					type: "string",
					description:
						"CSS class for the input wrapper containing the search field and icons",
				},
				{
					name: "input",
					type: "string",
					description: "CSS class for the search input field element",
				},
				{
					name: "inputIcon",
					type: "string",
					description: "CSS class for the dropdown icon element",
				},
				{
					name: "clearButton",
					type: "string",
					description: "CSS class for the clear button element",
				},
				{
					name: "dropdown",
					type: "string",
					description: "CSS class for the dropdown menu element",
				},
				{
					name: "option",
					type: "string",
					description:
						"CSS class for each option item in the dropdown",
				},
				{
					name: "optionIcon",
					type: "string",
					description: "CSS class for the option icon element",
				},
				{
					name: "label",
					type: "string",
					description: "CSS class for the label element",
				},
				{
					name: "noResults",
					type: "string",
					description: "CSS class for the no results text element",
				},
				{
					name: "error",
					type: "string",
					description: "CSS class for the error message element",
				},
			],
		},
		{
			name: "DialcaUI.SearchableSelectStates",
			type: `interface`,
			description:
				"Type definition for different states of the Searchable Select component variants.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.SearchableSelectVariant",
					description:
						"Styles for the normal state of the component.",
				},
				{
					name: "open",
					type: "DialcaUI.SearchableSelectVariant",
					description: "Styles for the open state of the dropdown.",
				},
				{
					name: "closed",
					type: "DialcaUI.SearchableSelectVariant",
					description: "Styles for the closed state of the dropdown.",
				},
				{
					name: "focused",
					type: "DialcaUI.SearchableSelectVariant",
					description: "Styles for the focused state of the input.",
				},
				{
					name: "disabled",
					type: "DialcaUI.SearchableSelectVariant",
					description:
						"Styles for the disabled state of the component.",
				},
				{
					name: "error",
					type: "DialcaUI.SearchableSelectVariant",
					description: "Styles for the error state of the component.",
				},
				{
					name: "hover",
					type: "DialcaUI.SearchableSelectVariant",
					description: "Styles for the hover state of the component.",
				},
				{
					name: "optionSelected",
					type: "DialcaUI.SearchableSelectVariant",
					description:
						"Styles for the selected option in the dropdown.",
				},
				{
					name: "optionDisabled",
					type: "DialcaUI.SearchableSelectVariant",
					description:
						"Styles for the disabled option in the dropdown.",
				},
				{
					name: "optionHighlighted",
					type: "DialcaUI.SearchableSelectVariant",
					description:
						"Styles for the highlighted option in the dropdown.",
				},
			],
		},
		{
			name: "DialcaUI.SearchableSelectVariant",
			type: `interface`,
			description:
				"Style properties for different parts of the searchable select component",
			properties: [
				{
					name: "container",
					type: "string",
					description: "Styling for the main container element",
				},
				{
					name: "inputWrapper",
					type: "string",
					description: "Styling for the input wrapper element",
				},
				{
					name: "input",
					type: "string",
					description: "Styling for the search input field",
				},
				{
					name: "inputIcon",
					type: "string",
					description: "Styling for the dropdown indicator icon",
				},
				{
					name: "dropdown",
					type: "string",
					description: "Styling for the dropdown menu container",
				},
				{
					name: "option",
					type: "string",
					description: "Styling for individual option elements",
				},
				{
					name: "optionIcon",
					type: "string",
					description: "Styling for icons within options",
				},
				{
					name: "noResults",
					type: "string",
					description: "Styling for the no results message",
				},
				{
					name: "label",
					type: "string",
					description: "Styling for the label element",
				},
				{
					name: "error",
					type: "string",
					description: "Styling for error message elements",
				},
			],
		},
	],
	relatedComponents: ["Select"],
};
