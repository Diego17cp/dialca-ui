export const BasicSearchableSelectUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ SearchableSelect }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'dialca-ui'</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ useState }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'react'</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            <span className="text-sky-300">export</span>{" "}
            <span className="text-sky-300">default</span>{" "}
            <span className="text-violet-400">function</span>{" "}
            <span className="text-indigo-400">App</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">selected</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setSelected</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">''</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">options</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-gray-400">[</span>
            {"\n        "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'option1'</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'Option 1'</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n        "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'option2'</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'Option 2'</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaUser</span>{" "}
            <span className="text-gray-400">/&gt;</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n    "}
            <span className="text-gray-400">]</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Basic searchable select"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">SearchableSelect</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Select Option</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">options</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">selected</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setSelected</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Search options...</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// With icons and clearable"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">SearchableSelect</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Select Country</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">countryOptions</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">country</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setCountry</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Search countries...</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">isClearable</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">true</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n    "}
            <span className="text-gray-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
        </code>
    );
};