export const BasicUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ CharCounter }"}</span>{" "}
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
            <span className="text-purple-400">[</span>
            <span className="text-violet-300">text</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-violet-300">setText</span>
            <span className="text-purple-400">{"]"}</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-sky-300">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-gray-500">""</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">textarea</span>{" "}
            {"\n                "}
            <span className="text-violet-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">text</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-violet-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-400">(</span>
            <span className="text-emerald-300">e</span>
            <span className="text-cyan-400">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setText</span>
            <span className="text-cyan-400">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-500">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">value</span>
            <span className="text-cyan-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">CharCounter</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">text</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-violet-400">100</span>
            <span className="text-purple-400">{"}"}</span>{" "}
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