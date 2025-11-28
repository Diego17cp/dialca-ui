import {
	BasicSwitchExample,
	BasicSwitchUsage,
	SwitchCustomCode,
	SwitchCustomExample,
	SwitchSizesCode,
	SwitchSizesExample,
	SwitchStatesCode,
	SwitchStatesExample,
	SwitchVariantsCode,
	SwitchVariantsExample,
} from "../../components/Switch";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { Switch } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [enabled, setEnabled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
        <div>
            // Basic switch
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
            />

            // Switch with label
            <Switch
                enabled={darkMode}
                onToggle={setDarkMode}
                label="Dark Mode"
            />

            // Switch with description
            <Switch
                enabled={autoSave}
                onToggle={setAutoSave}
                label="Auto Save"
                description="Automatically save your work every few minutes"
            />
        </div>
    );
}`;

const sizesCode = `import { Switch } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            // Small switch
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                size="sm"
                label="Small switch"
            />

            // Medium switch (default)
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                size="md"
                label="Medium switch"
            />

            // Large switch
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                size="lg"
                label="Large switch"
            />
        </div>
    );
}`;

const statesCode = `import { Switch } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            // Error state
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                hasErrors={true}
                errorMessage="This setting requires admin privileges"
                label="Admin Mode"
            />

            // Disabled state
            <Switch
                enabled={false}
                onToggle={() => {}}
                disabled={true}
                label="Disabled Feature"
            />

            // Loading state
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                loading={enabled}
                label="API Integration"
            />

            // Confirmation dialog
            <Switch
                enabled={false}
                onToggle={() => {}}
                confirmationMessage="Are you sure? This action cannot be undone."
                label="Delete All Data"
            />
        </div>
    );
}`;

const variantsCode = `import { Switch } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            // Default variant
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                label="Default Switch"
                description="Standard variant with card styling"
            />

            // Minimal variant
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="minimal"
                label="Minimal Switch"
            />

            // iOS variant
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="ios"
                label="iOS Style Switch"
            />

            // Card variant
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="card"
                label="Card Switch"
            />

            // Toggle variant
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="toggle"
                label="Toggle Switch"
            />
        </div>
    );
}`;

const customizationCode = `import { Switch } from 'dialca-ui';
import { FaRocket, FaLock, FaUnlock } from 'react-icons/fa';

export default function App() {
    return (
        <div>
            // Extended Default - adds rocket styling to existing
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="rocket"
                extendDefault={true}
                variants={{
                    rocket: {
                        normal: {
                            container: "p-4! bg-gradient-to-r from-orange-50! border border-orange-200!",
                            track: "w-14! h-8! bg-gradient-to-r from-orange-200! to-red-200!",
                            thumb: "bg-gradient-to-br from-orange-400! to-red-500! shadow-lg shadow-orange-500/50!"
                            label: "text-orange-800! font-bold!",
                            description: "text-orange-600!"
                        },
                        enabled: {    
                            trackOverlay: "bg-gradient-to-r from-orange-500! to-red-600! border-orange-500!"
                        }
                    }
                }}
                label="🚀 Rocket Mode"
                enabledIcon={<FaRocket />}
            />

            // Complete Custom - cyberpunk design from scratch
            <Switch
                enabled={enabled}
                onToggle={setEnabled}
                variant="cyberpunk"
                extendDefault={false}
                variants={{
                            cyberpunk: {
                                normal: {
                                    container: "
                                        relative flex items-center gap-6 p-6 
                                        bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
                                        rounded-xl border-2 border-cyan-500/30 overflow-hidden
                                        before:absolute before:inset-0 before:bg-gradient-to-r 
                                        before:from-transparent before:via-cyan-400/20 before:to-transparent 
                                        before:translate-x-[-100%] hover:before:translate-x-[100%] 
                                        before:transition-transform before:duration-1000
                                        hover:border-cyan-400/60 transition-all duration-300
                                        shadow-lg shadow-cyan-500/20 group cursor-pointer
                                    ",
                                    wrapper: "relative z-10",
                                    track: "
                                        relative block w-16 h-8 rounded-full transition-all duration-500
                                        bg-gradient-to-r from-gray-700 to-gray-800
                                        border-2 border-cyan-500/50 cursor-pointer
                                        shadow-inner shadow-gray-900/50
                                        group-hover:border-cyan-400 group-hover:shadow-lg
                                        group-hover:shadow-cyan-500/30
                                    ",
                                    thumb: "
                                        absolute top-0.5 left-0.5 w-6 h-6
                                        bg-gradient-to-br from-cyan-400 to-blue-500 
                                        rounded-full shadow-lg transition-all duration-500 ease-out
                                        flex items-center justify-center
                                        border border-cyan-300/50 transform
                                        group-hover:scale-110 group-hover:shadow-xl
                                        group-hover:shadow-cyan-500/50
                                    ",
                                    thumbInner: "hidden",
                                    trackOverlay: "
                                        absolute inset-0 rounded-full transition-all duration-500 z-0
                                        opacity-0 bg-gradient-to-r from-cyan-600 to-blue-600
                                    ",
                                    label: "
                                        text-cyan-100 font-bold text-lg relative z-10
                                        group-hover:text-white transition-colors duration-300
                                        drop-shadow-lg font-mono tracking-wide
                                    ",
                                    description: "
                                        text-cyan-300/80 text-sm mt-1 relative z-10
                                        group-hover:text-cyan-200 transition-colors duration-300
                                        font-mono tracking-wide
                                    "
                                },
                                enabled: {
                                    track: "
                                        bg-gradient-to-r from-cyan-600 to-blue-600
                                        border-cyan-400 shadow-lg shadow-cyan-500/40
                                    ",
                                    thumb: "
                                        translate-x-8 bg-gradient-to-br from-cyan-300 to-blue-400
                                        border-cyan-200 shadow-xl shadow-cyan-500/60
                                        before:absolute before:inset-0 before:bg-white/20 
                                        before:rounded-full before:animate-pulse
                                    ",
                                    trackOverlay: "opacity-100 animate-pulse",
                                    container: "border-cyan-400/80 shadow-xl shadow-cyan-500/40",
                                    label: "text-cyan-50 scale-105",
                                    description: "text-cyan-200"
                                }
                            }
                        }}
                label="🔒 Security Protocol"
                enabledIcon={<FaUnlock />}
                disabledIcon={<FaLock />}
            />
        </div>
    );
}`;

export const switchData: ComponentData = {
	name: "Switch",
	description: "A toggle switch component for binary choices.",
	srcUrl: getSrcComponentPage("Switch"),
	issueUrl: getIssueComponentPage("Switch"),
	playgroundUrl: getPlaygroundPage("Switch"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicSwitchExample,
	basicUsageDisplay: BasicSwitchUsage,
	examples: [
		{
			id: "sizes",
			title: "Switch Sizes",
			description: "Different sizes of the Switch component.",
			code: sizesCode,
			component: SwitchSizesExample,
			codeDisplay: SwitchSizesCode,
		},
		{
			id: "states",
			title: "Switch States",
			description:
				"Demonstration of various states of the Switch component including error, disabled, and loading states.",
			code: statesCode,
			component: SwitchStatesExample,
			codeDisplay: SwitchStatesCode,
		},
		{
			id: "variants",
			title: "Switch Variants",
			description: "Available style variants for the Switch component.",
			code: variantsCode,
			component: SwitchVariantsExample,
			codeDisplay: SwitchVariantsCode,
		},
		{
			id: "customization",
			title: "Customization",
			description:
				"How to customize the Switch component using custom variants and styles.",
			code: customizationCode,
			component: SwitchCustomExample,
			codeDisplay: SwitchCustomCode,
		},
	],
	api: {
		props: [
			{
				name: "enabled",
				type: "boolean",
				default: "false",
				description: "Determines whether the switch is on or off.",
			},
			{
				name: "onToggle",
				type: "(enabled: boolean) => void",
				description:
					"Callback function invoked when the switch is toggled.",
			},
			{
				name: "label",
				type: "string",
				description:
					"Optional label text displayed next to the switch.",
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
				default: "false",
				description:
					"Disables the switch if set to true and prevents user interaction.",
			},
			{
				name: "hasErrors",
				type: "boolean",
				default: "false",
				description:
					"Indicates an error state for the switch, often changing its appearance.",
			},
			{
				name: "errorMessage",
				type: "string",
				description:
					"Optional error message displayed when hasErrors is true.",
			},
			{
				name: "loading",
				type: "boolean",
				default: "false",
				description:
					"Shows a loading state for the switch when set to true.",
			},
			{
				name: "size",
				type: "'sm' | 'md' | 'lg'",
				default: "'md'",
				description: "Specifies the size of the switch.",
			},
			{
				name: "variant",
				type: "string",
				default: "'default'",
				description: "Defines the visual style variant of the switch.",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.SwitchStates>",
				description:
					"Custom style variants for different states of the switch.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				default: "true",
				description:
					"Determines whether to extend the default styles with custom variants.",
			},
			{
				name: "classes",
				type: `DialcaUI.SwitchVariant`,
				description:
					"Custom CSS classes for styling different parts of the switch component.",
			},
			{
				name: "className",
				type: "string",
				description: "Additional CSS class name for the container.",
			},
			{
				name: "enabledIcon",
				type: "React.ReactNode",
				description:
					"Icon displayed when the switch is in the enabled state.",
			},
			{
				name: "disabledIcon",
				type: "React.ReactNode",
				description:
					"Icon displayed when the switch is in the disabled state.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				description:
					"Icon displayed when the switch is in the error state.",
			},
			{
				name: "confirmationMessage",
				type: "string",
				description:
					"Optional confirmation message shown when toggling the switch.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.SwitchStates",
			type: "interface",
			description:
				"Defines the style variants for different states of the Switch component.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the normal state.",
				},
				{
					name: "enabled",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the enabled state.",
				},
				{
					name: "disabled",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the disabled state.",
				},
				{
					name: "error",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the error state.",
				},
				{
					name: "focused",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the focused state.",
				},
				{
					name: "hover",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the hovered state.",
				},
				{
					name: "loading",
					type: "DialcaUI.SwitchVariant",
					description: "Styles for the loading state.",
				},
			],
		},
		{
			name: "DialcaUI.SwitchVariant",
			type: "interface",
			description:
				"Defines the CSS classes for various parts of the Switch component.",
			properties: [
				{
					name: "container",
					type: "string",
					description: "CSS classes for the switch container.",
				},
				{
					name: "wrapper",
					type: "string",
					description: "CSS classes for the switch wrapper.",
				},
				{
					name: "track",
					type: "string",
					description: "CSS classes for the switch track.",
				},
				{
					name: "thumb",
					type: "string",
					description: "CSS classes for the switch thumb.",
				},
				{
					name: "thumbInner",
					type: "string",
					description:
						"CSS classes for the inner part of the switch thumb.",
				},
				{
					name: "trackOverlay",
					type: "string",
					description: "CSS classes for the track overlay.",
				},
				{
					name: "label",
					type: "string",
					description: "CSS classes for the switch label.",
				},
				{
					name: "description",
					type: "string",
					description: "CSS classes for the switch description.",
				},
				{
					name: "error",
					type: "string",
					description: "CSS classes for the switch error message.",
				},
			],
		},
	],
};
