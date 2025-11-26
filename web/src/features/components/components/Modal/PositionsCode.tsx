export const ModalPositionsAnimationsCode = () => {
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
            <span className="text-gray-500">{"// Center position with fade animation (default)"}</span>
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
            <span className="text-emerald-300">Center + Fade</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">center</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">fade</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Modal content here</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Center with slide up animation"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">center</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">slide-up</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Center with slide down animation"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">center</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">slide-down</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Center with zoom animation"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">center</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">zoom</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Top position with fade"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">top</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">fade</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Top position with slide down"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">top</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">slide-down</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Bottom position with fade"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">fade</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Bottom position with slide up"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">bottom</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">slide-up</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Modal</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// No animation"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Modal</span>
            {" "}
            <span className="text-indigo-400">position</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">center</span>
            <span className="text-gray-400">"</span>
            {" "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">none</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">...</span>
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