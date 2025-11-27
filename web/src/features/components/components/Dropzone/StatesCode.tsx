export const StatesCode = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ DropZone, Button }"}</span>{" "}
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
            <span className="text-sky-300">{"{ FaFileImage, FaExclamationTriangle, FaBan }"}</span>{" "}
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
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">hasError</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setHasError</span>
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
            <span className="text-gray-500">{"// Validate files"}</span>
            {"\n        "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">hasInvalidFiles</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-gray-300">files</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">some</span>
            <span className="text-purple-400">(</span>
            <span className="text-sky-300">file</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-sky-300">file</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">size</span>{" "}
            <span className="text-gray-400">&gt;</span>{" "}
            <span className="text-purple-600">2000000</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-indigo-400">setHasError</span>
            <span className="text-purple-400">(</span>
            <span className="text-gray-300">hasInvalidFiles</span>
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
            <span className="text-gray-500">{"// Normal State"}</span>
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
            <span className="text-emerald-300">Normal DropZone</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Error State"}</span>
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
            <span className="text-indigo-400">hasErrors</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">hasError</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Invalid file format or size</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">errorIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaExclamationTriangle</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Validation DropZone</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Disabled State"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">DropZone</span>
            {"\n                "}
            <span className="text-indigo-400">isDragging</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">disabled</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">true</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">icon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaBan</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Upload Disabled</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Reset error"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-indigo-400">setHasError</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">)</span>
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">&gt;</span>
            {"\n                "}
            <span className="text-gray-300">Clear Error</span>
            {"\n            "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
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