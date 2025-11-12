import {
	HiOutlineClipboardDocument,
	HiOutlineCheckCircle,
} from "react-icons/hi2";

interface ThirdExampleProps {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}

export const ThirdExample: React.FC<ThirdExampleProps> = ({
	copiedIndex,
	copyToClipboard,
}) => {
	const codeToCopy = `
    import { useButtonVariantStyles, cn } from 'dialca-ui';

    export const CustomButton = ({ 
        variant = "default", 
        size = "md",
        customVariants = {},
        children,
        className,
        disabled,
        loading,
        ...props 
    }) => {
        const [isHovered, setIsHovered] = useState(false);
        const { shouldUseCSS, getStyles } = useButtonVariantStyles(
            variant,
            customVariants,
            { disabled, loading, hover: isHovered },
            true // extendDefault
        );
    
        const containerClasses = cn(
            shouldUseCSS ? "dialca-button" : "", // CSS base class
            shouldUseCSS && variant !== 'default' ? \`dialca-button--\${variant}\` : "",
            shouldUseCSS && size !== 'md' ? \`dialca-button--\${size}\` : "",
            getStyles("container"), // Tailwind or additional CSS classes
            className
        );

        return (
            <button 
                className={containerClasses}
                disabled={disabled || loading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                <span className={cn(
                    shouldUseCSS ? "dialca-button__content" : "",
                    getStyles("content")
                )}>
                    {children}
                </span>
            </button>
        );
    };`;
	return (
		<div className="space-y-4">
			<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-medium">
						Using Variant Hooks (Advanced)
					</h3>
					<button
						onClick={() => copyToClipboard(codeToCopy, 202)}
						className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					>
						{copiedIndex === 202 ? (
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
							{"{ useButtonVariantStyles, cn }"}
						</span>{" "}
						<span className="text-violet-400">from</span>{" "}
						<span className="text-emerald-300">'dialca-ui'</span>;
						{"\n\n"}
						<span className="text-violet-400">export</span>{" "}
						<span className="text-sky-300">const</span>{" "}
						<span className="text-indigo-400">CustomButton</span>{" "}
						<span className="text-gray-400">=</span>{" "}
						<span className="text-indigo-400">(</span>
						<span className="text-sky-300">{"{"} </span>
						{"\n    "}
						<span className="text-indigo-400">variant</span>
						<span className="text-gray-400"> = </span>
						<span className="text-gray-300">"</span>
						<span className="text-green-200">default</span>
						<span className="text-gray-300">"</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-indigo-400">size</span>
						<span className="text-gray-400"> = </span>
						<span className="text-gray-300">"</span>
						<span className="text-green-200">md</span>
						<span className="text-gray-300">"</span>
						<span className="text-gray-400">,</span>
						{"\n    "}
						<span className="text-indigo-400">customVariants</span>
						<span className="text-gray-400"> = </span>
						<span className="text-gray-300">{"{}"}</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-indigo-400">children</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-indigo-400">className</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-indigo-400">disabled</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-indigo-400">loading</span>
						<span className="text-gray-400">, </span>
						{"\n    "}
						<span className="text-pink-400">...</span>
						<span className="text-gray-200">props</span>
						<span className="text-sky-300">{"}"}</span>
						<span className="text-indigo-400">)</span>{" "}
						<span className="text-violet-400">{"=>"}</span>
						<span className="text-indigo-400">{" {"}</span>
						{"\n    "}
						<span className="text-violet-400">const</span>{" "}
						<span className="text-sky-300">[</span>
						<span className="text-purple-400">isHovered</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">setIsHovered</span>
						<span className="text-sky-300">]</span>{" "}
						<span className="text-gray-400">=</span>{" "}
						<span className="text-indigo-400">useState</span>
						<span className="text-indigo-400">(</span>
						<span className="text-violet-400">false</span>
						<span className="text-indigo-400">);</span>
						{"\n    "}
						{"\n    "}
						<span className="text-violet-400">const</span>{" "}
						<span className="text-sky-300">{"{"}</span>{" "}
						<span className="text-purple-400">shouldUseCSS</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">getStyles</span>{" "}
						<span className="text-sky-300">{"}"}</span>{" "}
						<span className="text-gray-400">=</span>{" "}
						<span className="text-indigo-400">
							useButtonVariantStyles
						</span>
						<span className="text-indigo-400">(</span>
						{"\n        "}
						<span className="text-gray-300">variant</span>
						<span className="text-gray-400">, </span>
						{"\n        "}
						<span className="text-gray-300">customVariants</span>
						<span className="text-gray-400">, </span>
						{"\n        "}
						<span className="text-violet-400">{"{"} </span>
						<span className="text-gray-300">disabled</span>
						<span className="text-gray-400">, </span>
						<span className="text-gray-300">loading</span>
						<span className="text-gray-400">, </span>
						<span className="text-purple-400">hover</span>
						<span className="text-gray-400">: </span>
						<span className="text-gray-300">isHovered</span>
						<span className="text-violet-400">{"}"}</span>
						<span className="text-gray-400">, </span>
						{"\n        "}
						<span className="text-gray-300">true</span>
						{"\n    "}
						<span className="text-indigo-400">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						{"\n    "}
						<span className="text-violet-400">const</span>{" "}
						<span className="text-purple-400">
							containerClasses
						</span>
						<span className="text-gray-400"> = </span>
						<span className="text-indigo-400">cn</span>
						<span className="text-sky-300">(</span>
						{"\n        "}
						<span className="text-gray-300">shouldUseCSS</span>{" "}
						<span className="text-purple-400">?</span>{" "}
						<span className="text-gray-300">"</span>
						<span className="text-green-200">dialca-button</span>
						<span className="text-gray-300">"</span>{" "}
						<span className="text-gray-400">:</span>{" "}
						<span className="text-gray-300">""</span>
						<span className="text-gray-400">, </span>
						{"\n        "}
						<span className="text-gray-300">shouldUseCSS</span>{" "}
						<span className="text-purple-400">&amp;&amp;</span>{" "}
						<span className="text-gray-300">variant</span>{" "}
						<span className="text-gray-400">!== </span>
						<span className="text-gray-300">'</span>
						<span className="text-green-200">default</span>
						<span className="text-gray-300">'</span>{" "}
						<span className="text-purple-400">?</span>{" "}
						<span className="text-green-200">
							{"`dialca-button--"}
						</span>
						<span className="text-sky-300">{"${variant}"}</span>
						<span className="text-gray-300">`</span>{" "}
						<span className="text-gray-400">:</span>{" "}
						<span className="text-gray-300">""</span>
						<span className="text-gray-400">, </span>
						{"\n        "}
						<span className="text-indigo-400">getStyles</span>
						<span className="text-purple-400">(</span>
						<span className="text-gray-300">"</span>
						<span className="text-green-200">container</span>
						<span className="text-gray-300">"</span>
						<span className="text-purple-400">)</span>
						<span className="text-gray-400">, </span>
						<span className="text-gray-400">
							// Dynamic classes
						</span>
						{"\n        "}
						<span className="text-gray-300">className</span>
						{"\n    "}
						<span className="text-sky-300">)</span>
						<span className="text-gray-400">;</span>
						{"\n    "}
						{"\n    "}
						<span className="text-violet-400">return</span>{" "}
						<span className="text-indigo-400">(</span>
						{"\n        "}
                        <span className="text-gray-400">&lt;</span>
						<span className="text-indigo-400">
							button
						</span>{" "}
                        {"\n            "}
                        <span className="text-purple-400">className</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{`{`}</span>
                        <span className="text-gray-300">containerClasses</span>
                        <span className="text-violet-400">{`}`}</span>
                        {"\n            "}
                        <span className="text-purple-400">disabled</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{`{`}</span>
                        <span className="text-gray-300">disabled</span>{" "}
                        <span className="text-violet-400">||</span>{" "}
                        <span className="text-gray-300">loading</span>
                        <span className="text-violet-400">{`}`}</span>
                        {"\n            "}
                        <span className="text-purple-400">onMouseEnter</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{`{`}</span>
                        <span className="text-sky-300">()</span>{" "}
                        <span className="text-violet-400">=&gt; </span>
                        <span className="text-indigo-400">setIsHovered</span>
                        <span className="text-purple-400">(</span>
                        <span className="text-violet-400">true</span>
                        <span className="text-purple-400">)</span>
                        <span className="text-violet-400">{`}`}</span>
                        {"\n            "}
                        <span className="text-purple-400">onMouseLeave</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{`{`}</span>
                        <span className="text-sky-300">()</span>{" "}
                        <span className="text-violet-400">=&gt; </span>
                        <span className="text-indigo-400">setIsHovered</span>
                        <span className="text-purple-400">(</span>
                        <span className="text-violet-400">false</span>
                        <span className="text-purple-400">)</span>
                        <span className="text-violet-400">{`}`}</span>
                        {"\n            "}
                        <span className="text-purple-400">{`{`}</span>
                        <span className="text-pink-300">...</span>
                        <span className="text-gray-200">props</span>
                        <span className="text-purple-400">{`}`}</span>
                        {"\n        "}
                        <span className="text-gray-400">&gt;</span>
                        {"\n            "}
                        <span className="text-gray-400">&lt;</span>
                        <span className="text-indigo-400">span</span>{" "}
                        <span className="text-purple-400">className</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-violet-400">{`{`}</span>
                        <span className="text-indigo-400">cn</span>
                        <span className="text-purple-400">(</span>
                        {"\n                "}
                        <span className="text-gray-300">shouldUseCSS</span>{" "}
                        <span className="text-purple-400">?</span>{" "}
                        <span className="text-gray-300">"</span>
                        <span className="text-green-200">dialca-button__content</span>
                        <span className="text-gray-300">"</span>{" "}
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-gray-300">""</span>
                        <span className="text-gray-400">, </span>
                        {"\n                "}
                        <span className="text-indigo-400">getStyles</span>
                        <span className="text-purple-400">(</span>
                        <span className="text-gray-300">"</span>
                        <span className="text-green-200">content</span>
                        <span className="text-gray-300">"</span>
                        <span className="text-purple-400">)</span>
                        {"\n            "}
                        <span className="text-purple-400">)</span>
                        <span className="text-violet-400">{`}`}</span>
                        <span className="text-gray-400">{">"}</span>
                        {"\n                "}
                        <span className="text-lime-500">{"{"}</span>
                        <span className="text-gray-300">children</span>
                        <span className="text-lime-500">{"}"}</span>
                        {"\n            "}
                        <span className="text-gray-400">&lt;/</span>
                        <span className="text-indigo-400">span</span>
                        <span className="text-gray-400">&gt;</span>
                        {"\n        "}
                        <span className="text-gray-400">&lt;/</span>
                        <span className="text-indigo-400">button</span>
                        <span className="text-gray-400">&gt;</span>
                        {"\n    "}
                        <span className="text-indigo-400">)</span>
                        <span className="text-gray-400">;</span>
                        {"\n"}
                        {"\n"}
					</code>
				</pre>
			</div>

			<div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6">
				<div className="flex items-start space-x-3">
					<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
						<HiOutlineClipboardDocument className="w-5 h-5 text-blue-600 dark:text-blue-400" />
					</div>
					<div>
						<h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
							How it Works
						</h3>
						<ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										shouldUseCSS
									</code>{" "}
									determines if CSS classes or Tailwind should
									be used
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										getStyles("container")
									</code>{" "}
									returns dynamic classes based on state and
									variants
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									Pass{" "}
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										customVariants
									</code>{" "}
									to override or extend default styling
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
