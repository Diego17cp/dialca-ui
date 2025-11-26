export const ModalVariantsCode = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ Modal, Button }"}</span>{" "}
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
            <span className="text-gray-300">isOpen</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setIsOpen</span>
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
            <span className="text-gray-500">{"// Default variant (standard styling)"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {"\n                "}
            <span className="text-indigo-400">isOpen</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">isOpen</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onClose</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setIsOpen</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Default Modal</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">default</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Standard modal with clean styling</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Dark variant (dark theme)"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {"\n                "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">dark</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Dark Modal</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Dark themed modal for dark mode apps</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Minimal variant (compact design)"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {"\n                "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">minimal</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Minimal Modal</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Compact modal with reduced padding</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Glassmorphism variant (translucent with blur)"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {"\n                "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">glassmorphism</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Glass Modal</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Glass effect with backdrop blur</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
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