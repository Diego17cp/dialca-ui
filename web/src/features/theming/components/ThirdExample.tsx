import {
	HiOutlineCheckCircle,
	HiOutlineClipboardDocument,
} from "react-icons/hi2";

export const ThirdExample = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	const codeToCopy = `
    import { Button, Modal, Switch } from 'dialca-ui';
    import 'dialca-ui/styles/dialca-ui.css';
    import './custom-themes.css';

    export const CSSExtendedComponents = () => {
        return (
            <div className="space-y-4">
                {/* Just use the variant name - no variants prop needed */}
                <Button variant="glassmorphism">
                    Glassmorphism Button
                </Button>
            
                <Modal variant="minimal" isOpen={true}>
                    Modal Content
                </Modal>
            
                <Switch variant="ios" label="iOS Style Switch" />
            </div>
        );
    };`;

	const cssVariablesToCopy = `
    /* custom-themes.css */

    /* Custom Button Variants */
    .dialca-button--glassmorphism {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    }

    .dialca-button--glassmorphism:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }

    .dialca-button--glassmorphism .dialca-button__content {
        color: white;
        font-weight: 600;
    }

    /* Custom Modal Variants */
    .dialca-modal--minimal {
        border: none;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .dialca-modal--minimal .dialca-modal__header {
        border-bottom: none;
        padding-bottom: 0;
    }

    .dialca-modal--minimal .dialca-modal__body {
        padding-top: 1rem;
    }

    /* Custom Switch Variants */
    .dialca-switch--ios {
        --dialca-switch-track-width: 3.5rem;
        --dialca-switch-track-height: 2rem;
        --dialca-switch-thumb-size: 1.75rem;
    }

    .dialca-switch--ios .dialca-switch__track {
        background: #e5e7eb;
        border-radius: 1rem;
    }

    .dialca-switch--ios .dialca-switch__track:checked {
        background: #34d399;
    }

    .dialca-switch--ios .dialca-switch__thumb {
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }`;

	return (
		<div className="space-y-4">
			<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-medium">
						Custom CSS Extensions
					</h3>
					<button
						onClick={() => copyToClipboard(cssVariablesToCopy, 302)}
						className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					>
						{copiedIndex === 302 ? (
							<HiOutlineCheckCircle className="size-4 text-green-400" />
						) : (
							<HiOutlineClipboardDocument className="size-4" />
						)}
					</button>
				</div>
				<pre className="text-sm font-mono overflow-x-auto main-scroll">
					<code>
						<span className="text-sky-300">.</span>
						<span className="text-blue-100">
							dialca-button--glassmorphism
						</span>{" "}
						<span className="text-indigo-400">{"{"}</span>
						{"\n    "}
						<span className="text-indigo-400">background</span>
						<span className="text-gray-400">: </span>
						<span className="text-sky-300">rgba(</span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0.1</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">backdrop-filter</span>
						<span className="text-gray-400">: </span>
						<span className="text-sky-300">blur(</span>
						<span className="text-purple-400">10</span>
						<span className="text-pink-400">px</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">border</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">1</span>
						<span className="text-pink-400">px</span>{" "}
						<span className="text-purple-400">solid</span>{" "}
						<span className="text-sky-300">rgba(</span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0.2</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">box-shadow</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">0</span>{" "}
						<span className="text-purple-400">8</span>
						<span className="text-pink-400">px</span>{" "}
						<span className="text-purple-400">32</span>
						<span className="text-pink-400">px</span>{" "}
						<span className="text-purple-400">0</span>{" "}
						<span className="text-sky-300">rgba(</span>
						<span className="text-purple-400">31</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">38</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">135</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0.37</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-indigo-400">{"}"}</span>
						{"\n"}
						{"\n"}
						<span className="text-gray-400">.</span>
						<span className="text-blue-100">
							dialca-button--glassmorphism
						</span>
						<span className="text-sky-300">:</span>
						<span className="text-purple-400">hover</span>{" "}
						<span className="text-indigo-400">{"{"}</span>
						{"\n    "}
						<span className="text-indigo-400">background</span>
						<span className="text-gray-400">: </span>
						<span className="text-sky-300">rgba(</span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">255</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0.2</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">transform</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">translateY(</span>
						<span className="text-purple-400">-2</span>
						<span className="text-purple-400">px)</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-indigo-400">{"}"}</span>
						{"\n"}
						{"\n"}
						<span className="text-gray-400">.</span>
						<span className="text-blue-100">
							dialca-button--glassmorphism
						</span>{" "}
						<span className="text-sky-300">.</span>
						<span className="text-blue-100">
							dialca-button__content
						</span>{" "}
						<span className="text-indigo-400">{"{"}</span>
						{"\n    "}
						<span className="text-indigo-400">color</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">white</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">font-weight</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">600</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-indigo-400">{"}"}</span>
						{"\n"}
						{"\n"}
						<span className="text-gray-400">
							/* Custom Modal Variants */
						</span>
						{"\n"}
						<span className="text-sky-300">.</span>
						<span className="text-blue-100">
							dialca-modal--minimal
						</span>{" "}
						<span className="text-indigo-400">{"{"}</span>
						{"\n    "}
						<span className="text-indigo-400">border</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">none</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-indigo-400">box-shadow</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">0</span>{" "}
						<span className="text-purple-400">20</span>
						<span className="text-pink-400">px</span>{" "}
						<span className="text-purple-400">25</span>
						<span className="text-pink-400">px</span>{" "}
						<span className="text-purple-400">-5</span>{" "}
						<span className="text-pink-400">px</span>{" "}
						<span className="text-sky-300">rgba(</span>
						<span className="text-purple-400">0</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">0.1</span>
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-indigo-400">{"}"}</span>
						{"\n"}
						{"\n"}
						<span className="text-gray-400">
							/* Custom Switch Variants */
						</span>
						{"\n"}
						<span className="text-sky-300">.</span>
						<span className="text-blue-100">
							dialca-switch--ios
						</span>{" "}
						<span className="text-indigo-400">{"{"}</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-switch-track-width
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">3.5</span>
						<span className="text-pink-400">rem</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-switch-track-height
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">2</span>
						<span className="text-pink-400">rem</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						<span className="text-gray-200">
							--dialca-switch-thumb-size
						</span>
						<span className="text-gray-400">: </span>
						<span className="text-purple-400">1.75</span>
						<span className="text-pink-400">rem</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-indigo-400">{"}"}</span>
						{"\n"}
						{"\n"}
					</code>
				</pre>
			</div>
			<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-medium">
						Using CSS Extensions
					</h3>
					<button
						onClick={() => copyToClipboard(codeToCopy, 303)}
						className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					>
						{copiedIndex === 303 ? (
							<HiOutlineCheckCircle className="size-4 text-green-400" />
						) : (
							<HiOutlineClipboardDocument className="size-4" />
						)}
					</button>
				</div>
				<pre className="text-sm font-mono overflow-x-auto main-scroll">
					<code>
                        <span className="text-gray-400">{"{/* The order of imports matters for CSS extensions, ensure the base CSS is imported before the custom CSS */}"}</span>
                        {"\n"}
						<span className="text-violet-400">import</span>{" "}
						<span className="text-sky-300">
							{"{ Button, Modal, Switch }"}
						</span>{" "}
						<span className="text-violet-400">from</span>{" "}
						<span className="text-emerald-300">'dialca-ui'</span>
						<span className="text-gray-400">;</span>
						{"\n"}
						<span className="text-violet-400">import</span>{" "}
                        <span className="text-emerald-300">{"'dialca-ui/styles/dialca-ui.css'"}</span>
                        <span className="text-gray-400">;</span>
                        {"\n"}
						<span className="text-violet-400">import</span>{" "}
						<span className="text-emerald-300">
							'./custom-themes.css'
						</span>
						<span className="text-gray-400">;</span>
						{"\n\n"}
						<span className="text-violet-400">export</span>{" "}
						<span className="text-sky-300">const</span>{" "}
						<span className="text-indigo-400">
							CSSExtendedComponents
						</span>{" "}
						<span className="text-gray-400">=</span>{" "}
						<span className="text-indigo-400">()</span>{" "}
						<span className="text-violet-400">{"=>"}</span>
						<span className="text-indigo-400">{" {"}</span>
						{"\n    "}
						<span className="text-violet-400">return</span>{" "}
						<span className="text-sky-300">(</span>
						{"\n        "}
						<span className="text-gray-400">{"<"}</span>
						<span className="text-indigo-400">{"div"}</span>{" "}
						<span className="text-violet-400">className</span>
						<span className="text-gray-400">=</span>
						<span className="text-gray-300">"</span>
						<span className="text-green-200">space-y-4</span>
						<span className="text-gray-300">"</span>
						<span className="text-gray-400">{">"}</span>
						{"\n            "}
                        <span className="text-gray-400">{"{/* Just use the variant name - no variants prop needed */}"}</span>
                        {"\n            "}
						<span className="text-gray-400">{"<"}</span>
						<span className="text-pink-400">Button</span>{" "}
                        <span className="text-violet-400">variant</span>
                        <span className="text-gray-400">="</span>
                        <span className="text-green-200">glassmorphism</span>
                        <span className="text-gray-400">"</span>
                        <span className="text-gray-400">{">"}</span>
                        {"\n                "}
                        <span className="text-gray-300">Glassmorphism Button</span>
                        {"\n            "}
                        <span className="text-gray-400">{"</"}</span>
                        <span className="text-pink-400">Button</span>
                        <span className="text-gray-400">{">"}</span>
                        {"\n        "}
                        {"\n            "}
                        <span className="text-gray-400">{"<"}</span>
                        <span className="text-pink-400">Modal</span>{" "}
                        <span className="text-violet-400">variant</span>
                        <span className="text-gray-400">="</span>
                        <span className="text-green-200">minimal</span>
                        <span className="text-gray-400">"</span>{" "}
                        <span className="text-violet-400">isOpen</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{"{"}</span>
                        <span className="text-purple-300">{"true"}</span>
                        <span className="text-violet-400">{"}"}</span>
                        {" "}
                        <span className="text-gray-400">{">"}</span>
                        {"\n                "}
                        <span className="text-gray-300">Modal Content</span>
                        {"\n            "}
                        <span className="text-gray-400">{"</"}</span>
                        <span className="text-pink-400">Modal</span>
                        <span className="text-gray-400">{">"}</span>
                        {"\n        "}
                        {"\n            "}
                        <span className="text-gray-400">{"<"}</span>
                        <span className="text-pink-400">Switch</span>{" "}
                        <span className="text-violet-400">variant</span>
                        <span className="text-gray-400">="</span>
                        <span className="text-green-200">ios</span>
                        <span className="text-gray-400">"</span>{" "}
                        <span className="text-violet-400">label</span>
                        <span className="text-gray-400">="</span>
                        <span className="text-green-200">iOS Style Switch</span>
                        <span className="text-gray-400">"</span>
                        <span className="text-gray-400">{" />"}</span>
                        {"\n        "}
                        <span className="text-gray-400">{"</"}</span>
                        <span className="text-indigo-400">div</span>
                        <span className="text-gray-400">{">"}</span>
                        {"\n    "}
                        <span className="text-sky-300">)</span>
                        <span className="text-gray-400">;</span>
                        {"\n"}
                        <span className="text-indigo-400">{"}"}</span>
                        <span className="text-gray-400">;</span>
                        {"\n"}
					</code>
				</pre>
			</div>
		</div>
	);
};
