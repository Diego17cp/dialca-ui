export const ModalSizesCode = () => {
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
            <span className="text-gray-500">{"// Custom content component without header"}</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-indigo-400">CustomContent</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">(</span>
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-sky-300">onClose</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bg-white rounded-xl shadow-2xl overflow-hidden</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Custom header with gradient"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">button</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-sky-300">onClose</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">absolute top-4 right-4</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                    "}
            <span className="text-gray-300">✕</span>
            {"\n                "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">h3</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">text-xl font-bold text-white</span>
            <span className="text-gray-400">"&gt;</span>
            <span className="text-gray-300">Custom Modal</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">h3</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">p-6</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Custom content without default header</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n    "}
            <span className="text-gray-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Small Modal"}</span>
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
            <span className="text-emerald-300">Small Modal</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">sm</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Small modal content</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Medium Modal (default)"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">md</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Large Modal"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">lg</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Extra Large Modal"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">xl</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Fullscreen Modal"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">full</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Modal without header (no title, no close button)"}</span>
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
            <span className="text-indigo-400">handleClose</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">showCloseButton</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">md</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">CustomContent</span>{" "}
            <span className="text-indigo-400">onClose</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleClose</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
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