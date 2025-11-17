export const VariantsCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Default variant (light theme)</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Email Address</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">email</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setEmail</span>
            <span className="text-cyan-500">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">value</span>
            <span className="text-cyan-500">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEnvelope</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Dark variant with custom styling</span>
            {"\n"}
            
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Dark Email</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">darkText</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setDarkText</span>
            <span className="text-cyan-500">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">value</span>
            <span className="text-cyan-500">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">dark</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEnvelope</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Error state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Username</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">invalid@user</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">hasErrors</span>
            {"\n  "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Username contains invalid characters</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaUser</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Password with toggle</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Password</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">password</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setPassword</span>
            <span className="text-cyan-500">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">value</span>
            <span className="text-cyan-500">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">isPassword</span>
            {"\n  "}
            <span className="text-indigo-400">showPassword</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">showPassword</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">onToggleVisibility</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">()</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setShowPassword</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-300">!</span>
            <span className="text-gray-300">showPassword</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">dark</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">required</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Loading state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Loading State</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Processing...</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">isLoading</span>
            {"\n  "}
            <span className="text-indigo-400">loader</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaSpinner</span>{" "}
            <span className="text-violet-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">animate-spin dark:text-gray-300</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaUser</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Disabled state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n  "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Disabled Field</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Cannot edit this</span>
            <span className="text-gray-400">"</span>
            {"\n  "}
            <span className="text-indigo-400">disabled</span>
            {"\n  "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaLock</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n"}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};