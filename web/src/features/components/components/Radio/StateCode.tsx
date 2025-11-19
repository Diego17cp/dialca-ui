export const RadioStateCode = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ RadioInput }"}</span>{" "}
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
            <span className="text-gray-300">newsletter</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setNewsletter</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">""</span>
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
            <span className="text-gray-500">{"// Error state"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">RadioInput</span>
            {"\n                "}
            <span className="text-indigo-400">name</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">newsletter</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">newsletter</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setNewsletter</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">hasErrors</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">!</span>
            <span className="text-gray-300">newsletter</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Please select an option</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">[</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"yes"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Yes, send me newsletters"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"no"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"No, thank you"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-gray-400">]</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Disabled state"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">RadioInput</span>
            {"\n                "}
            <span className="text-indigo-400">name</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">disabled</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">option1</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">disabled</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">[</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"option1"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Option 1"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"option2"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Option 2"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">disabled</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-600">true</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-gray-400">]</span>
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