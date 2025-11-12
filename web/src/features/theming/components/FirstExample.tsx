import { HiOutlineCheckCircle, HiOutlineClipboardDocument } from "react-icons/hi2";

export const FirstExample = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	const codeToCopy = `
    import { Button, Switch, Modal } from 'dialca-ui';

    export const VariantExamples = () => {
        return (
            <div className="space-y-4">
                {/* Built-in variants */}
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="danger">Danger Button</Button>
            
                {/* Custom variant names */}
                <Button variant="brand">Brand Button</Button>
                <Button variant="glass">Glass Button</Button>
            
                <Switch variant="premium" />
                <Modal variant="floating" isOpen={true}>
                    Custom themed modal
                </Modal>
            </div>
        );
    };`;
	return (
		<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-white font-medium">
                    Variant Examples
				</h3>
				<button
					onClick={() => copyToClipboard(codeToCopy, 300)}
					className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
				>
					{copiedIndex === 300 ? (
						<HiOutlineCheckCircle className="size-4 text-green-400" />
					) : (
						<HiOutlineClipboardDocument className="size-4" />
					)}
				</button>
			</div>
			<pre className="text-sm font-mono overflow-x-auto main-scroll">
				<code>
                    <span className="text-violet-400">import</span>{" "}
					<span className="text-sky-300">
						{"{ Button, Switch, Modal }"}
					</span>{" "}
					<span className="text-violet-400">from</span>{" "}
					<span className="text-emerald-300">'dialca-ui'</span>
                    <span className="text-gray-400">;</span>
                    {"\n\n"}
                    <span className="text-violet-400">export</span>{" "}
                    <span className="text-sky-300">const</span>{" "}
                    <span className="text-indigo-400">VariantExamples</span>{" "}
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
                    <span className="text-gray-400">{"{/* Built-in variants */}"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">primary</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    <span className="text-gray-200">Primary Button</span>
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">secondary</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    <span className="text-gray-200">Secondary Button</span>
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">danger</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    <span className="text-gray-200">Danger Button</span>
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    {"\n            "}
                    <span className="text-gray-400">{"{/* Custom variant names */}"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">brand</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    <span className="text-gray-200">Brand Button</span>
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">glass</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    <span className="text-gray-200">Glass Button</span>
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Switch</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">premium</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400"> {"/>"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Modal</span>{" "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">floating</span>
                    <span className="text-gray-300">"</span>{" "}
                    <span className="text-purple-400">isOpen</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-violet-400">{"{"}</span>
                    <span className="text-gray-300">{"true"}</span>
                    <span className="text-violet-400">{"}"}</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n               "}
                    <span className="text-gray-200">Custom themed modal</span>
                    {"\n            "}
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Modal</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n        "}
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-indigo-400">div</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n    "}
                    <span className="text-sky-400">)</span>
                    {"\n"}
                    <span className="text-indigo-400">{"}"}</span>
                    <span className="text-gray-400">;</span>
                    {"\n"}
                    {"\n"}
                </code>
			</pre>
		</div>
	);
};
