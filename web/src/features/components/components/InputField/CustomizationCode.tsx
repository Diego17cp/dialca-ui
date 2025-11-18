export const CustomizationCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Custom classes override</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Custom Styled Input</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">text</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">border-2 border-indigo-300 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50</span>
            <span className="text-gray-400">",</span>
            {"\n    "}
            <span className="text-cyan-600">input</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">text-indigo-900 font-medium</span>
            <span className="text-gray-400">",</span>
            {"\n    "}
            <span className="text-cyan-600">label</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">text-indigo-600 font-bold text-sm</span>
            <span className="text-gray-400">",</span>
            {"\n    "}
            <span className="text-cyan-600">icon</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">text-indigo-500</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Complete custom variants from scratch</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-300">customVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n  "}
            <span className="text-gray-400">'</span>
            <span className="text-green-200">search</span>
            <span className="text-gray-400">':</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">relative w-full border-2 border-blue-200 rounded-full bg-blue-50 p-3</span>
            <span className="text-gray-400">",</span>
            {"\n      "}
            <span className="text-cyan-600">input</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">w-full bg-transparent text-blue-900 focus:outline-none pl-10 pr-4</span>
            <span className="text-gray-400">",</span>
            {"\n      "}
            <span className="text-cyan-600">label</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">absolute -top-2 left-4 bg-blue-50 px-2 text-blue-600 font-medium</span>
            <span className="text-gray-400">",</span>
            {"\n      "}
            <span className="text-cyan-600">icon</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">focused</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">relative w-full border-2 border-blue-500 bg-blue-100 shadow-md ring-2 ring-blue-200 rounded-full p-3</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n  "}
            <span className="text-gray-400">'</span>
            <span className="text-green-200">modern</span>
            <span className="text-gray-400">':</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">relative w-full border-0 border-b-2 border-gray-300 bg-transparent pb-2</span>
            <span className="text-gray-400">",</span>
            {"\n      "}
            <span className="text-cyan-600">input</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">w-full bg-transparent text-gray-900 focus:outline-none pl-8 pr-4 py-2</span>
            <span className="text-gray-400">",</span>
            {"\n      "}
            <span className="text-cyan-600">label</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">absolute -top-4 left-0 text-gray-500 font-light tracking-wide</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">focused</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-cyan-600">container</span>
            <span className="text-gray-400">: "</span>
            <span className="text-green-200">relative w-full border-0 border-b-2 border-purple-600 shadow-[0_2px_0_0_rgb(147,51,234)] pb-2</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Using custom search variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Search Field</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">searchText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setSearchText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">search</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaSearch</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Modern underline style</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Modern Email</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">modernText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setModernText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">type</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">email</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">modern</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEnvelope</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};