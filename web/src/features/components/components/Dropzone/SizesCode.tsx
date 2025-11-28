export const SizesCode = () => {
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
            <span className="text-sky-300">{"{ FaFileImage, FaCloudArrowUp, FaFolderOpen }"}</span>{" "}
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
            <span className="text-violet-400">const</span>{" "}
            <span className="text-indigo-400">handleDrop</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-purple-400">)</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n        "}
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">preventDefault</span>
            <span className="text-purple-400">()</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">files</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">Array</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">from</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">e</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">dataTransfer</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">files</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-indigo-400">console</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">log</span>
            <span className="text-purple-400">(</span>
            <span className="text-gray-300">files</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Small size - compact for tight spaces"}</span>
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
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">sm</span>
            <span className="text-gray-400">"</span>
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
            <span className="text-pink-400">FaFileImage</span>{" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">24</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Quick Upload</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">JPG, PNG only</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Medium size - default standard size"}</span>
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
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">md</span>
            <span className="text-gray-400">"</span>
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
            <span className="text-pink-400">FaCloudArrowUp</span>{" "}
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">32</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Upload your files</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Multiple formats supported</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Large size - for bulk uploads"}</span>
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
            <span className="text-indigo-400">size</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">lg</span>
            <span className="text-gray-400">"</span>
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
            <span className="text-pink-400">FaFolderOpen</span>{" "}
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
            <span className="text-emerald-300">Bulk File Upload</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Drop multiple files or folders here</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
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