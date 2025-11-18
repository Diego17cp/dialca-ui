export const TxtAreaVariantsCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Default variant with character counting</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n    "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Standard Comment</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">comment</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
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
            {"\n    "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaComment</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n    "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">200</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Dark variant</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n    "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Dark Feedback</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">darkText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setDarkText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">dark</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaComment</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n    "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">250</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Resizable variant with purple theme</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n    "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Resizable Text Area</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">resizableText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setResizableText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">resizable</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">allowResize</span>
            {"\n    "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEdit</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n    "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">floating-circle</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">500</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Minimal variant with underline only</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            {"\n    "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Minimal Note</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">minimalText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-gray-300">setMinimalText</span>
            <span className="text-purple-400">(</span>
            <span className="text-cyan-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-200">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-300">value</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">minimal</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaComment</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n    "}
            <span className="text-indigo-400">hasCharCount</span>
            {"\n    "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {"\n    "}
            <span className="text-indigo-400">maxLength</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">200</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Character count types demonstration</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">top</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-gray-500">       {"// Above textarea"}</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-gray-500">    {"// Below textarea"}</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">TxtArea</span>{" "}
            <span className="text-indigo-400">charCountType</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">floating-circle</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-gray-500"> {"// Floating circle"}</span>
        </code>
    );
};