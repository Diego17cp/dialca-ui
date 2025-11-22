export const BasicSelectUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ Select }"}</span>{" "}
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
            <span className="text-emerald-300">'Option 2'</span>{" "}
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
            <span className="text-gray-500">{"// Basic select"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Select</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Select Category</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">selected</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">options</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-600">(</span>
            <span className="text-green-300">e</span>
            <span className="text-cyan-600">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setSelected</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-300">.target.</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Choose a category...</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Select with icon"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Select</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Select Country</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">country</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">countryOptions</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-600">(</span>
            <span className="text-green-300">e</span>
            <span className="text-cyan-600">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setCountry</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-300">.target.</span>
            <span className="text-sky-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaGlobe</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">required</span>
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