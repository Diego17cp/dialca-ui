export const CustomizationCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Example 1: Extending existing variant</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-300">extendedVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-sky-300">{"{"}</span>
            {"\n  "}
            <span className="text-green-200">'gradient-primary'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-violet-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-sky-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"bg-gradient-to-r from-blue-500 to-purple-600 text-white"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-cyan-600">content</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"font-semibold"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-sky-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-violet-400">hover</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-sky-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"bg-gradient-to-r from-blue-600 to-purple-700 transform scale-105"</span>
            {"\n    "}
            <span className="text-sky-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-sky-300">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Usage with extended variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">gradient-primary</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-purple-400">={"{"}</span>
            <span className="text-gray-300">extendedVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">&gt;</span>
            {"\n  "}
            <span className="text-gray-300">Gradient Button</span>
            {"\n"}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Example 2: Completely custom variant</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-300">customVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-sky-300">{"{"}</span>
            {"\n  "}
            <span className="text-green-200">'neon-cyber'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-violet-400">{"{"}</span>
            {"\n    "}
            <span className="text-violet-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-sky-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] p-4 rounded-md"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-cyan-600">content</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"text-sm font-bold uppercase tracking-wider"</span>
            {"\n    "}
            <span className="text-sky-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-violet-400">hover</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-sky-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-green-200">"bg-cyan-400/10 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]"</span>
            {"\n    "}
            <span className="text-sky-400">{"}"}</span>
            {"\n  "}
            <span className="text-violet-400">{"}"}</span>
            {"\n"}
            <span className="text-sky-300">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Usage with custom variant (no defaults)</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">neon-cyber</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-purple-400">={"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-purple-400">={"{"}</span>
            <span className="text-violet-400">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">&gt;</span>
            {"\n  "}
            <span className="text-gray-300">Neon Button</span>
            {"\n"}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n"}
        </code>
    );
};