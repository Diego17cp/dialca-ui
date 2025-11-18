export const TxtAreaCustomizationCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Custom Classes Override</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom Styled Textarea</span>
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
            <span className="text-gray-300">setSearchText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom gradient style...</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEdit</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n  "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">200</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-blue-400">textarea</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"w-full! bg-gradient-to-r! shadow-lg hover:shadow-xl p-4 from-indigo-50! to-purple-200! hover:border-indigo-400! border-2! border-indigo-300! text-indigo-900! font-medium border-0! focus:outline-none! placeholder:text-indigo-400! pl-10 pr-4 resize-none! min-h-24!"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"absolute! -top-2! left-3! bg-gradient-to-r! from-indigo-50! to-purple-50! px-2! text-indigo-600! font-bold text-sm!"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-blue-400">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-indigo-500! text-lg!"</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-blue-400">charCounter</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-indigo-600! font-mono!"</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Error styling with neon glow</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Neon Error Style</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">invalid content here that exceeds normal bounds</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">hasErrors</span>
            {"\n  "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">This textarea glows with error</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaFile</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n  "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">floating-circle</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">150</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-blue-400">error</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"mt-2! text-red-300! font-medium bg-red-900/20! p-2! rounded! border! border-red-500/30! shadow-inner!"</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Complete custom variant with premium card style</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">customVariants</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n  "}
            <span className="text-emerald-300">'card'</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-indigo-400">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"relative w-full bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">textarea</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"w-full bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-xl p-4 text-indigo-900 placeholder:text-indigo-400 focus:outline-none focus:border-indigo-400 resize-none min-h-28"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"absolute -top-3 right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"absolute left-2 top-2 text-indigo-500 text-lg z-10"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">charCounter</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"absolute bottom-2 right-4 bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-mono border border-indigo-300"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">focused</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"relative w-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-400 rounded-2xl p-6 shadow-2xl ring-4 ring-indigo-200 transition-all duration-300"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl scale-110"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-indigo-400">error</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n      "}
            <span className="text-blue-400">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"relative w-full bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-6 shadow-xl"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">textarea</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"w-full bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 text-red-900 placeholder:text-red-400 focus:outline-none focus:border-red-400 resize-none min-h-28"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"bg-gradient-to-r from-red-500 to-pink-500! text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg"</span>
            <span className="text-gray-400">,</span>
            {"\n      "}
            <span className="text-blue-400">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"text-red-500"</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Using custom card variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom Message</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customComment</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setCustomComment</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Write your custom content here...</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">card</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEdit</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n  "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">floating-circle</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">500</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">required</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Custom card with error state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom Error State</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">This content has validation errors</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">hasErrors</span>
            {"\n  "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Content validation failed</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">card</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">customVariants</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaFile</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n  "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">300</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};