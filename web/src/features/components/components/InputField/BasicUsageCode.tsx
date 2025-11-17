export const BasicUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ InputField }"}</span>{" "}
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
            <span className="text-sky-300">{"{ FaEnvelope }"}</span>{" "}
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
            <span className="text-purple-300">email</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-purple-300">setEmail</span>
            <span className="text-purple-400">{"]"}</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-sky-300">(</span>
            <span className="text-gray-500">""</span>
            <span className="text-sky-300">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-400">[</span>
            <span className="text-purple-300">password</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-purple-300">setPassword</span>
            <span className="text-purple-400">{"]"}</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-sky-300">(</span>
            <span className="text-gray-500">""</span>
            <span className="text-sky-300">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-purple-400">[</span>
            <span className="text-purple-300">showPassword</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-purple-300">setShowPassword</span>
            <span className="text-purple-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-sky-300">(</span>
            <span className="text-violet-400">false</span>
            <span className="text-sky-300">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-sky-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Basic input without label and icon"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">email</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
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
            {"\n                "}
            <span className="text-indigo-400">placeholder</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Enter your email</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">startIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaEnvelope</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Required input"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Full Name</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">name</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-cyan-500">(</span>
            <span className="text-green-200">e</span>
            <span className="text-cyan-500">)</span>{" "}
            <span className="text-purple-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setName</span>
            <span className="text-cyan-500">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-gray-300">target</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">value</span>
            <span className="text-cyan-500">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">required</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Password input with toggle"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">InputField</span>{" "}
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-green-200">Password</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">password</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
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
            {"\n                "}
            <span className="text-indigo-400">isPassword</span>
            {"\n                "}
            <span className="text-indigo-400">showPassword</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">showPassword</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
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
            {"\n                "}
            <span className="text-indigo-400">required</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>            
            {"\n        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n    "}
            <span className="text-sky-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
        </code>
    );
};