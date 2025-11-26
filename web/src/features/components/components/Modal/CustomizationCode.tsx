export const ModalCustomizationCode = () => {
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
            {"\n"}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ FaTimes, FaShieldAlt }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'react-icons/fa'</span>
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
            <span className="text-gray-500">{"// Custom classes - extends default styles"}</span>
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
            <span className="text-emerald-300">Orange Theme Modal</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n                    "}
            <span className="text-sky-300">overlay</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'bg-orange-900/40! backdrop-blur-md!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'border-2! border-orange-200! shadow-orange-500/20!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">header</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'bg-gradient-to-r! from-orange-50! to-amber-50!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">title</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-orange-800! font-bold!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">closeButton</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-orange-500! hover:bg-orange-100!'</span>
            {"\n                "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Custom orange themed modal</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Complete redesign with extendDefault=false"}</span>
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
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">security</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">closeOnOutsideClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n                    "}
            <span className="text-sky-300">security</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                        "}
            <span className="text-sky-300">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                            "}
            <span className="text-sky-300">overlay</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'fixed inset-0 z-50 bg-red-900/50 backdrop-blur-sm'</span>
            <span className="text-gray-400">,</span>
            {"\n                            "}
            <span className="text-sky-300">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'bg-white rounded-2xl shadow-2xl border-red-200'</span>
            <span className="text-gray-400">,</span>
            {"\n                            "}
            <span className="text-sky-300">content</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'p-6 bg-white text-gray-800'</span>
            {"\n                        "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-500">{"// Custom content with inline close button"}</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">relative</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">button</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleClose</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaTimes</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaShieldAlt</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">h3</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Security Alert</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">h3</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Custom security modal content</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
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