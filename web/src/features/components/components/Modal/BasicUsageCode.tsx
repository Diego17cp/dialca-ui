export const BasicModalUsage = () => {
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
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setIsOpen</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">true</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-300">Open Modal</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n            "}
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
            <span className="text-emerald-300">Confirm Action</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">md</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">animation</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">slide-up</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">space-y-4</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Are you sure you want to proceed?</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">p</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">flex gap-3</span>
            <span className="text-gray-400">"&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">danger</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">handleConfirm</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                            "}
            <span className="text-gray-300">Confirm</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">outline</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">handleCancel</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                            "}
            <span className="text-gray-300">Cancel</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
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