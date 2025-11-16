export const CustomizationCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Example 1: Extending existing variant</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">extendedVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n  "}
            <span className="text-emerald-300">'premium-card'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-2 border-purple-500 p-6 rounded-xl bg-gradient-to-br from-purple-50"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">checkbox</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-purple-300 shadow-lg"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">background</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"bg-gradient-to-r from-purple-500 to-pink-500"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-lg font-semibold bg-gradient-to-r from-purple-600 bg-clip-text"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">hover</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-purple-400 shadow-xl transform scale-105"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">checkbox</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"border-purple-400 shadow-purple-200"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Usage with extended variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">premium-card</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">extendedVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Premium Features</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">true</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Example 2: Gaming variant with advanced effects</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">customVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n  "}
            <span className="text-emerald-300">'gaming'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">`</span>
            {"\n        "}
            <span className="text-emerald-300">relative flex gap-4 p-4 bg-gradient-to-br from-gray-900 via-green-900 to-black</span>
            {"\n        "}
            <span className="text-emerald-300">rounded-xl border border-green-500/30 cursor-pointer group overflow-hidden</span>
            {"\n        "}
            <span className="text-emerald-300">hover:border-green-400/50 transition-all duration-300</span>
            {"\n      "}
            <span className="text-emerald-300">`</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">wrapper</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"relative z-10"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">checkbox</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">`</span>
            {"\n        "}
            <span className="text-emerald-300">relative w-8 h-8 rounded-lg transition-all duration-300 ease-out</span>
            {"\n        "}
            <span className="text-emerald-300">group-hover:scale-110 group-hover:rotate-3 group-active:scale-95</span>
            {"\n      "}
            <span className="text-emerald-300">`</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">background</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">`</span>
            {"\n        "}
            <span className="text-emerald-300">absolute inset-0 rounded-lg border-2 transition-all duration-300</span>
            {"\n        "}
            <span className="text-emerald-300">bg-gradient-to-br from-gray-800 to-gray-700 border-green-400/50</span>
            {"\n        "}
            <span className="text-emerald-300">shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40</span>
            {"\n      "}
            <span className="text-emerald-300">`</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">`</span>
            {"\n        "}
            <span className="text-emerald-300">text-green-100 font-bold text-lg group-hover:text-white</span>
            {"\n        "}
            <span className="text-emerald-300">drop-shadow-lg uppercase tracking-wider</span>
            {"\n      "}
            <span className="text-emerald-300">`</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">background</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">`</span>
            {"\n        "}
            <span className="text-emerald-300">bg-gradient-to-br from-green-600 via-green-500 to-green-700</span>
            {"\n        "}
            <span className="text-emerald-300">border-green-300 shadow-2xl shadow-green-500/60 animate-pulse</span>
            {"\n      "}
            <span className="text-emerald-300">`</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"scale-100 opacity-100 text-black animate-bounce"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Usage with gaming variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">gaming</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Enable Gaming Mode</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Access the digital realm</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customChecked</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onCheckedChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setCustomChecked</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};