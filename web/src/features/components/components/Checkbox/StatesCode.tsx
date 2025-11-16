export const StatesCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Normal unchecked state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Unchecked state</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">false</span>
            <span className="text-gray-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Checked state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Checked state</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">true</span>
            <span className="text-gray-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Indeterminate state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Indeterminate state</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">indeterminate</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">true</span>
            <span className="text-gray-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Disabled state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Disabled unchecked</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">disabled</span>{" "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">false</span>
            <span className="text-gray-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Disabled + checked state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Disabled checked</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">disabled</span>{" "}
            <span className="text-indigo-400">checked</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Error state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Error unchecked</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">hasErrors</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">true</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Please accept the terms</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">false</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Error + checked state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Error checked</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">hasErrors</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">true</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Custom error message</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-purple-300">true</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Interactive state with handler</span>
            {"\n"}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-purple-300">checked</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-purple-300">setChecked</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-sky-300">(</span>
            <span className="text-purple-400">false</span>
            <span className="text-sky-300">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Checkbox</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Click to toggle</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">checked</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-gray-300">checked</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onCheckedChange</span>
            <span className="text-gray-400">={"{"}</span>
            <span className="text-gray-300">setChecked</span>
            <span className="text-gray-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};