export const BasicTxtAreaUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ TxtArea }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'dialca-ui'</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ useState }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'react'</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ FaComment }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'react-icons/fa6'</span>
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
            <span className="text-gray-300">comment</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setComment</span>
            <span className="text-purple-400">{"]"}</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-sky-300">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">""</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-400">[</span>
            <span className="text-gray-300">feedback</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setFeedback</span>
            <span className="text-purple-400">{"]"}</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-sky-300">useState</span>
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
            <span className="text-gray-500">{"// Basic textarea"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Comments</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">comment</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setComment</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Enter your comments...</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaComment</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Required textarea with character count"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Description</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">description</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setDescription</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">required</span>
            {"\n                "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n                "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">300</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Textarea with floating circle counter"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Feedback</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">feedback</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setFeedback</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n                "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">floating-circle</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">500</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">allowResize</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Textarea with error state"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Required Message</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300"></span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">hasErrors</span>
            {"\n                "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">This field is required</span>
            <span className="text-gray-400">"</span>
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