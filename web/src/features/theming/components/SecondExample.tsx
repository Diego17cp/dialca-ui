import { HiOutlineCheckCircle, HiOutlineClipboardDocument } from "react-icons/hi2";

export const SecondExample = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	const codeToCopy = `
    import { Button } from 'dialca-ui';

    const customButtonVariants = {
        brand: {
            container: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200",
            content: "flex items-center space-x-2",
            icon: "w-5 h-5",
            loader: "w-4 h-4 border-2 border-white border-t-transparent animate-spin"
        },
        glass: {
            container: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-lg transition-all duration-300",
            content: "font-medium",
            icon: "w-4 h-4 opacity-80",
            loader: "w-4 h-4 border-2 border-white/50 border-t-white animate-spin"
        }
    };

    export const CustomThemedButtons = () => {
        return (
            <div className="space-x-4">
                <Button 
                    variant="brand" 
                    variants={customButtonVariants}
                >
                    Brand Button
                </Button>
            
                <Button 
                    variant="glass" 
                    variants={customButtonVariants}
                    loading
                >
                    Glass Button
                </Button>
            </div>
        );
    };`;
	return (
		<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-white font-medium">
					Button Custom Variants
				</h3>
				<button
					onClick={() => copyToClipboard(codeToCopy, 301)}
					className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
				>
					{copiedIndex === 301 ? (
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
						{"{ Button }"}
					</span>{" "}
					<span className="text-violet-400">from</span>{" "}
					<span className="text-emerald-300">'dialca-ui'</span>
                    <span className="text-gray-400">;</span>
                    {"\n\n"}
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-purple-400">customButtonVariants</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-sky-300">{"{"}</span>
                    {"\n    "}
                    <span className="text-purple-400">brand</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-violet-300">{"{"}</span>
                    {"\n        "}
                    <span className="text-purple-400">container</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">bg-gradient-to-r! from-purple-600! to-blue-600! hover:from-purple-700! hover:to-blue-700! text-white! font-semibold! py-3! px-6! rounded-xl! shadow-lg! transform! hover:scale-105! transition-all! duration-200!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">content</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">flex! items-center! space-x-2!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">icon</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">w-5! h-5!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">loader</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">w-4! h-4! border-2! border-white! border-t-transparent! animate-spin!</span>
                    <span className="text-gray-400">"</span>
                    {"\n    "}
                    <span className="text-violet-300">{"}"}</span>
                    <span className="text-gray-400">,</span>
                    {"\n    "}
                    <span className="text-purple-400">glass</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-violet-300">{"{"}</span>
                    {"\n        "}
                    <span className="text-purple-400">container</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">bg-white/10! backdrop-blur-md! border! border-white/20! hover:bg-white/20! text-white! rounded-lg! transition-all! duration-300!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">content</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">font-medium!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">icon</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">w-4! h-4! opacity-80!</span>
                    <span className="text-gray-400">",</span>
                    {"\n        "}
                    <span className="text-purple-400">loader</span>
                    <span className="text-gray-400">: "</span>
                    <span className="text-green-200">w-4! h-4! border-2! border-white/50! border-t-white! animate-spin!</span>
                    <span className="text-gray-400">"</span>
                    {"\n    "}
                    <span className="text-violet-300">{"}"}</span>
                    {"\n"}
                    <span className="text-sky-300">{"}"}</span>
                    <span className="text-gray-400">;</span>
                    {"\n\n"}
                    <span className="text-violet-400">export</span>{" "}
                    <span className="text-sky-300">const</span>{" "}
                    <span className="text-indigo-400">CustomThemedButton</span>{" "}
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
                    <span className="text-green-200">space-x-4</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>
                    {"\n                "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">brand</span>
                    <span className="text-gray-300">"</span>
                    {"\n                "}
                    <span className="text-purple-400">variants</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-purple-400">{`{`}</span>
                    <span className="text-gray-200">customButtonVariants</span>
                    <span className="text-purple-400">{`}`}</span>
                    {"\n            "}
                    <span className="text-gray-400">{">"}</span>
                    {"\n                "}
                    <span className="text-gray-200">Brand Button</span>
                    {"\n            "}
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
                    <span className="text-gray-400">{">"}</span>
                    {"\n            "}
                    {"\n            "}
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-pink-400">Button</span>
                    {"\n                "}
                    <span className="text-purple-400">variant</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-gray-300">"</span>
                    <span className="text-green-200">glass</span>
                    <span className="text-gray-300">"</span>
                    {"\n                "}
                    <span className="text-purple-400">variants</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-purple-400">{`{`}</span>
                    <span className="text-gray-200">customButtonVariants</span>
                    <span className="text-purple-400">{`}`}</span>
                    {"\n                "}
                    <span className="text-purple-400">loading</span>
                    {"\n                "}
                    <span className="text-purple-400">extendDefault</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-violet-400">{"{"}</span>
                    <span className="text-purple-300">false</span>
                    <span className="text-violet-400">{"}"}</span>
                    {"\n            "}
                    <span className="text-gray-400">{">"}</span>
                    {"\n                "}
                    <span className="text-gray-200">Glass Button</span>
                    {"\n            "}
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-pink-400">Button</span>
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
