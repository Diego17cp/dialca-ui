export const CustomizationCode = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ DropZone }"}</span>{" "}
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
            <span className="text-sky-300">{"{ FaUpload, FaCamera }"}</span>{" "}
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
            <span className="text-gray-300">isDragging</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setIsDragging</span>
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
            <span className="text-gray-500">{"// 1. Classes Override - Quick styling"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">DropZone</span>
            {"\n                "}
            <span className="text-indigo-400">isDragging</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">isDragging</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDrop</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Custom Styled DropZone</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">classes</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n                    "}
            <span className="text-sky-300">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'border-orange-300! bg-gradient-to-br! from-orange-50!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-orange-600! drop-shadow-md!'</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-sky-300">title</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-orange-800! font-bold! text-xl!'</span>
            {"\n                "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// 2. Custom Variant - Complete control"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">DropZone</span>
            {"\n                "}
            <span className="text-indigo-400">isDragging</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">isDragging</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">variant</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">neon</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">variants</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"{"}</span>
            {"\n                    "}
            <span className="text-sky-300">neon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                        "}
            <span className="text-sky-300">normal</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                            "}
            <span className="text-sky-300">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'bg-gray-900 border-cyan-400 rounded-xl'</span>
            <span className="text-gray-400">,</span>
            {"\n                            "}
            <span className="text-sky-300">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-cyan-400'</span>
            <span className="text-gray-400">,</span>
            {"\n                            "}
            <span className="text-sky-300">title</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-white font-bold'</span>
            {"\n                        "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                        "}
            <span className="text-sky-300">dragging</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                            "}
            <span className="text-sky-300">container</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'border-purple-400 scale-105'</span>
            <span className="text-gray-400">,</span>
            {"\n                            "}
            <span className="text-sky-300">icon</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">'text-purple-400'</span>
            {"\n                        "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">extendDefault</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDrop</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaUpload</span>{" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">48</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">NEON UPLOAD ZONE</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// 3. Custom Children - Full content control"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">DropZone</span>
            {"\n                "}
            <span className="text-indigo-400">isDragging</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">isDragging</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDrop</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">lg</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">flex items-center justify-between w-full</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                    "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">text-center</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaCamera</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">text-blue-600 text-4xl mb-4</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">h3</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">text-xl font-bold</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                            "}
            <span className="text-gray-300">Drop your media files here</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">h3</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">p</span>{" "}
            <span className="text-indigo-400">className</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">text-gray-600</span>
            <span className="text-gray-400">"</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                            "}
            <span className="text-gray-300">Support for images, videos, and audio</span>
            {"\n                        "}
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
            <span className="text-pink-400">DropZone</span>
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