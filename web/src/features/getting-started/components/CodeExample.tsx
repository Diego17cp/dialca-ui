import {
	HiOutlineCheckCircle,
	HiOutlineClipboardDocument,
} from "react-icons/hi2";

export const CodeExample = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	const codeToCopy = `
    import { InputField, Button } from 'dialca-ui';
    import { useState } from "react";

    export const App = () => {
        const [name, setName] = useState("");
        return (
            <div className="p-8 space-y-4">
                <InputField
                    label="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <Button 
                    variant="primary" 
                    onClick={() => alert(\`Hello, \${name}!\`)}
                >
                    Say Hello
                </Button>
            </div>
        );
    };`;
	return (
		<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-white font-medium">Basic Example</h3>
				<button
					onClick={() => copyToClipboard(codeToCopy, 12)}
					className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
				>
					{copiedIndex === 12 ? (
						<HiOutlineCheckCircle className="sizw-4 text-green-400" />
					) : (
						<HiOutlineClipboardDocument className="size-4" />
					)}
				</button>
			</div>
			<pre className="text-sm font-mono overflow-x-auto">
				<code>
					<span className="text-violet-400">import</span>{" "}
					<span className="text-sky-300">
						{"{ InputField, Button }"}
					</span>{" "}
					<span className="text-violet-400">from</span>{" "}
					<span className="text-emerald-300">'dialca-ui'</span>;{"\n"}
					<span className="text-violet-400">import</span>{" "}
					<span className="text-sky-300">{"{ useState }"}</span>{" "}
					<span className="text-violet-400">from</span>{" "}
					<span className="text-emerald-300">"react"</span>;{"\n\n"}
					<span className="text-sky-300">export</span>{" "}
					<span className="text-violet-400">const</span>{" "}
					<span className="text-indigo-400">App</span>{" "}
					<span className="text-gray-400">=</span>{" "}
					<span className="text-indigo-400">()</span>{" "}
					<span className="text-violet-400">{"=>"}</span>
					<span className="text-indigo-400">{" {"}</span>
					{"\n    "}
					<span className="text-violet-400">const</span>{" "}
					<span className="text-sky-300">[</span>
					<span className="text-violet-300">name</span>
					<span className="text-gray-400">,</span>{" "}
					<span className="text-violet-300">setName</span>
					<span className="text-sky-300">]</span>{" "}
					<span className="text-gray-400">=</span>{" "}
					<span className="text-indigo-400">useState</span>
					<span className="text-sky-300">(</span>
					<span className="text-gray-400">""</span>
					<span className="text-sky-300">)</span>
					<span className="text-gray-400">;</span>
					{"\n    "}
					{"\n    "}
					<span className="text-violet-400">return</span>{" "}
					<span className="text-sky-300">(</span>
					{"\n        "}
					<span className="text-gray-400">{"<"}</span>
					<span className="text-indigo-400">div</span>{" "}
					<span className="text-purple-400">className</span>
					<span className="text-gray-400">="</span>
					<span className="text-green-200">p-8 space-y-4</span>
					<span className="text-gray-400">"</span>
					<span className="text-gray-400">{">"}</span>
					{"\n            "}
					<span className="text-gray-400">{"<"}</span>
					<span className="text-pink-400">InputField</span>{" "}
					{"\n                "}
					<span className="text-purple-400">label</span>
					<span className="text-gray-400">=</span>
					<span className="text-gray-400">"</span>
					<span className="text-green-200">Your Name</span>
					<span className="text-gray-400">"</span>
					{"\n                "}
					<span className="text-purple-400">value</span>
					<span className="text-gray-400">=</span>
					<span className="text-violet-400">{"{"}</span>
					<span className="text-gray-200">name</span>
					<span className="text-violet-400">{"}"}</span>
					{"\n                "}
					<span className="text-purple-400">onChange</span>
					<span className="text-gray-400">=</span>
					<span className="text-violet-400">{"{"}</span>
					<span className="text-sky-400">(</span>
					<span className="text-green-200">e</span>
					<span className="text-sky-400">)</span>{" "}
					<span className="text-purple-400">{"=>"}</span>{" "}
					<span className="text-indigo-400">setName</span>
					<span className="text-sky-300">(</span>
					<span className="text-sky-400">e</span>
					<span className="text-gray-400">.</span>
					<span className="text-gray-200">target</span>
					<span className="text-gray-400">.</span>
					<span className="text-sky-300">value</span>
					<span className="text-sky-300">)</span>
					<span className="text-violet-400">{"}"}</span>
					{"\n            "}
					<span className="text-gray-400">{"/>"}</span>
					{"\n            "}
					<span className="text-gray-400">{"<"}</span>
					<span className="text-pink-400">Button</span>{" "}
					{"\n                "}
					<span className="text-purple-400">variant</span>
					<span className="text-gray-400">=</span>
					<span className="text-gray-300">"</span>
					<span className="text-green-200">primary</span>
					<span className="text-gray-300">"</span>{" "}
					{"\n                "}
					<span className="text-purple-400">onClick</span>
					<span className="text-gray-400">=</span>
					<span className="text-violet-400">{"{"}</span>
					<span className="text-sky-400">(</span>
					<span className="text-sky-400">)</span>{" "}
					<span className="text-purple-400">{"=>"}</span>{" "}
					<span className="text-indigo-400">alert</span>
					<span className="text-sky-300">(</span>
					<span className="text-green-200">{"`Hello, "}</span>
					<span className="text-sky-300">{"${"}</span>
					<span className="text-gray-200">name</span>
					<span className="text-sky-300">{"}"}</span>
					<span className="text-green-200">{"!`"}</span>
					<span className="text-sky-300">)</span>
					<span className="text-violet-400">{"}"}</span>
					{"\n            "}
					<span className="text-gray-400">{">"}</span>
					{"\n                "}
					<span className="text-gray-200">Say Hello</span>
					{"\n            "}
					<span className="text-gray-400">{"</"}</span>
					<span className="text-pink-400">Button</span>
					<span className="text-gray-400">{">"}</span>
					{"\n        "}
					<span className="text-gray-400">{"</"}</span>
					<span className="text-indigo-400">div</span>
					<span className="text-gray-400">{">"}</span>
					{"\n    "} <span className="text-sky-300">)</span>
					<span className="text-gray-400">;</span>
					{"\n"} <span className="text-indigo-400">{"}"}</span>
					<span className="text-gray-400">;</span>
				</code>
			</pre>
		</div>
	);
};
