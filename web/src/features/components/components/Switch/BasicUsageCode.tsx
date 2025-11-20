export const BasicSwitchUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ Switch }"}</span>{" "}
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
            <span className="text-gray-300">enabled</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setEnabled</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">darkMode</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setDarkMode</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
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
            <span className="text-gray-500">{"// Basic switch"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Switch</span>
            {"\n                "}
            <span className="text-indigo-400">enabled</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">enabled</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onToggle</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setEnabled</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Switch with label"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Switch</span>
            {"\n                "}
            <span className="text-indigo-400">enabled</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">darkMode</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onToggle</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setDarkMode</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Dark Mode</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Switch with description"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Switch</span>
            {"\n                "}
            <span className="text-indigo-400">enabled</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">autoSave</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onToggle</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setAutoSave</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Auto Save</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Automatically save your work every few minutes</span>
            <span className="text-gray-400">"</span>
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