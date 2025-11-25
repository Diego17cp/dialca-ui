export const SearchableSelectCustomizationCode = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ SearchableSelect }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'dialca-ui'</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            <span className="text-gray-500">{"// Custom classes - extends default styles"}</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">SearchableSelect</span>
            {"\n    "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Issue Category</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">categoryOptions</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n        "}
            <span className="text-gray-300">input</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'border-orange-200! focus:border-orange-400! focus:ring-2 focus:ring-orange-400! bg-orange-50! shadow-none! outline-none!'</span>
            <span className="text-gray-400">,</span>
            {"\n        "}
            <span className="text-gray-300">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-orange-700! font-bold!'</span>
            <span className="text-gray-400">,</span>
            {"\n        "}
            <span className="text-gray-300">option</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'hover:bg-orange-100! border-l-4 border-l-transparent hover:border-l-orange-400'</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Choose category...</span>
            <span className="text-gray-400">"</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">{"// Complete redesign with extendDefault=false"}</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">cardVariant</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-gray-300">default</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n        "}
            <span className="text-gray-300">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n            "}
            <span className="text-gray-300">inputWrapper</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'relative bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-200'</span>
            <span className="text-gray-400">,</span>
            {"\n            "}
            <span className="text-gray-300">input</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'w-full px-4 py-3 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400'</span>
            <span className="text-gray-400">,</span>
            {"\n            "}
            <span className="text-gray-300">dropdown</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 max-h-60 overflow-auto'</span>
            <span className="text-gray-400">,</span>
            {"\n            "}
            <span className="text-gray-300">option</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-150 flex items-center gap-3'</span>
            {"\n        "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n        "}
            <span className="text-gray-300">optionSelected</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n            "}
            <span className="text-gray-300">option</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'</span>
            {"\n        "}
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">SearchableSelect</span>
            {"\n    "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">cardVariant</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Select priority level...</span>
            <span className="text-gray-400">"</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n"}
        </code>
    );
};