import { BasicUsage, BasicCircleCharCounterExample, CustomizationExample, CustomizationCode } from "../../components/CircleCharCounter";
import type { ComponentData } from "../../types";
import {
    getIssueComponentPage,
    getPlaygroundPage,
    getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { CharCounter } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [text, setText] = useState("");

    return (
        <div>
            <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <CharCounter value={text} maxLength={100} />
        </div>
    );
}`;

const customizationCode = `// Different sizes
<CharCounter size={24} value={text} maxLength={50} />
<CharCounter size={48} value={text} maxLength={100} />

// Compact style with custom classes
<CharCounter 
  value={compactText}
  maxLength={50}
  size={24}
  classes={{
    container: "opacity-80! hover:opacity-100! transition-opacity",
    text: "text-xs font-medium"
  }}
/>

// Elegant style with enhanced visuals
<CharCounter 
  value={elegantText}
  maxLength={200}
  size={48}
  classes={{
    container: "drop-shadow-lg! hover:drop-shadow-xl! transition-all duration-300",
    text: "font-bold text-sm text-blue-700! dark:text-blue-300!"
  }}
/>

// Minimal style with border
<CharCounter 
  value={minimalText}
  maxLength={100}
  size={36}
  classes={{
    container: "dark:border-gray-600! bg-white dark:bg-gray-800! shadow-sm",
    text: "text-gray-600! dark:text-gray-300 font-mono text-xs"
  }}
/>

// Gaming/cyberpunk style
<CharCounter 
  value="SYSTEM_READY"
  maxLength={50}
  size={40}
  classes={{
    container: "bg-[rgba(34,197,94,0.3)]! hover:bg-[rgba(34,197,94,0.5)]! transition-all duration-300",
    text: "text-green-400! font-mono! font-bold text-xs! tracking-wider"
  }}
/>`;

export const circleCharCounterData: ComponentData = {
    name: "Circle Char Counter",
    description:
        "A circular character counter component that visually represents the number of characters entered in a text area.",
    srcUrl: getSrcComponentPage("CircleCharCounter"),
    issueUrl: getIssueComponentPage("CircleCharCounter"),
    playgroundUrl: getPlaygroundPage("CircleCharCounter"),
    relatedComponents: ["TextArea"],
    basicUsage: basicUsageCode,
    basicUsageComponent: BasicCircleCharCounterExample,
    basicUsageDisplay: BasicUsage,
    examples: [
        {
            id: "customization",
            title: "Customization",
            description:
                "Demonstrates various customization options for the Circle Char Counter, including different sizes and styles using custom classes.",
            code: customizationCode,
            component: CustomizationExample,
            codeDisplay: CustomizationCode
        }
    ],
    api: {
        props: [
            // Core props
            {
                name: "value",
                type: "string",
                required: true,
                description: "The current text value to count characters from.",
            },
            {
                name: "maxLength",
                type: "number",
                required: true,
                description: "The maximum number of characters allowed.",
            },
            // Styling props
            {
                name: "size",
                type: "number",
                required: false,
                description: "Size of the circular counter in pixels.",
                default: "32",
            },
            {
                name: "classes",
                type: "{ container?: string; text?: string; }",
                required: false,
                description: "Optional custom classes for container and text.",
            }
        ],
    },
};
