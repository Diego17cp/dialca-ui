export const LoaderCustomizationCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Custom Classes Override</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom Loader</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">showText</span>
            {"\n  "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-blue-400">outerRing</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-t-purple-500! border-4! w-12! h-12!"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-blue-400">innerRing</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-t-pink-400! border-2!"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-blue-400">content</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-purple-600! font-bold!"</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Complete custom variant from scratch</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">customVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n  "}
            <span className="text-emerald-300">'neon'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"flex flex-col items-center gap-3"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">outerRing</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"w-10 h-10 border-2 border-cyan-400 rounded-full animate-spin bg-cyan-400/10 shadow-md shadow-cyan-400/50"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">innerRing</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"w-2 h-2 border-2 border-cyan-300 rounded-full animate-spin"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">content</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-cyan-400 font-mono text-sm"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Using custom variant with extendDefault={false}</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">neon</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Neon Glow</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">showText</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};