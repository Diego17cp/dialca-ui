import {
	HiOutlineCheckCircle,
	HiOutlineClipboardDocument,
} from "react-icons/hi2";

export const FourthExample = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	const codeToCopy = `
    /* Import only the components you need */
    @import 'dialca-ui/styles/components/button.css';
    @import 'dialca-ui/styles/components/input-field.css';
    @import 'dialca-ui/styles/components/modal.css';`;

	const cssVariablesToCopy = `
    :root {
        /* Override primary colors */
        --dialca-primary: #your-primary-color;
        --dialca-secondary: #your-secondary-color;
        /* Override component-specific variables */
        --dialca-button-border-radius: 12px;
        --dialca-input-border-radius: 8px;
    }`;

	return (
		<div className="space-y-4">
			<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-medium">
						Import Individual Components
					</h3>
					<button
						onClick={() => copyToClipboard(codeToCopy, 203)}
						className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					>
						{copiedIndex === 203 ? (
							<HiOutlineCheckCircle className="size-4 text-green-400" />
						) : (
							<HiOutlineClipboardDocument className="size-4" />
						)}
					</button>
				</div>
				<pre className="text-sm font-mono overflow-x-auto main-scroll">
					<code>
						<span className="text-gray-400">
							/* Import only the components you need */
						</span>
						{`\n`}
						<span className="text-purple-400">@import</span>
						<span className="text-gray-400">'</span>{" "}
						<span className="text-green-200">
							dialca-ui/styles/components/button.css
						</span>
						<span className="text-gray-400">';</span>
						{`\n`}
						<span className="text-purple-400">@import</span>
						<span className="text-gray-400">'</span>{" "}
						<span className="text-green-200">
							dialca-ui/styles/components/input-field.css
						</span>
						<span className="text-gray-400">';</span>
						{`\n`}
						<span className="text-purple-400">@import</span>
						<span className="text-gray-400">'</span>{" "}
						<span className="text-green-200">
							dialca-ui/styles/components/modal.css
						</span>
						<span className="text-gray-400">';</span>
						{"\n"}
						{"\n"}
					</code>
				</pre>
			</div>

			<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-medium">
						Override CSS Custom Properties
					</h3>
					<button
						onClick={() => copyToClipboard(cssVariablesToCopy, 204)}
						className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					>
						{copiedIndex === 204 ? (
							<HiOutlineCheckCircle className="size-4 text-green-400" />
						) : (
							<HiOutlineClipboardDocument className="size-4" />
						)}
					</button>
				</div>
				<pre className="text-sm font-mono overflow-x-auto main-scroll">
					<code>
						<span className="text-sky-300">:</span>
						<span className="text-purple-300">root</span>{" "}
						<span className="text-sky-400">{"{"}</span>
                        {"\n    "}
						<span className="text-gray-400">
							/* Override primary colors */
						</span>
						{"\n    "}
						<span className="text-gray-200">--dialca-primary</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-300">
							#your-primary-color
						</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-secondary
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-300">
							#your-secondary-color
						</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-gray-400">
							/* Override component-specific variables */
						</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-button-border-radius
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-300">12px</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-input-border-radius
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-300">8px</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-sky-400">{"}"}</span>
						{"\n"}
						{"\n"}
					</code>
				</pre>
			</div>
		</div>
	);
};
