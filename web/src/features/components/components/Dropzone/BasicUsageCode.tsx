export const BasicUsageCode = () => {
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
            <span className="text-sky-300">{"{ FaFileImage, FaExclamationTriangle }"}</span>{" "}
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
            <span className="text-gray-300">files</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setFiles</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">([])</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-indigo-400">handleDragOver</span>{" "}
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
            <span className="text-indigo-400">setIsDragging</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">true</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-indigo-400">handleDragLeave</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n        "}
            <span className="text-indigo-400">setIsDragging</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
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
            <span className="text-indigo-400">setIsDragging</span>
            <span className="text-purple-400">(</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">droppedFiles</span>{" "}
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
            <span className="text-indigo-400">setFiles</span>
            <span className="text-purple-400">(</span>
            <span className="text-gray-300">droppedFiles</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-indigo-400">handleClick</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-400">()</span>{" "}
            <span className="text-violet-400">=&gt;</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n        "}
            <span className="text-gray-500">{"// Open file picker"}</span>
            {"\n        "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-300">input</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">document</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">createElement</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">'input'</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-gray-300">input</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">type</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-emerald-300">'file'</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-gray-300">input</span>
            <span className="text-gray-400">.</span>
            <span className="text-sky-300">multiple</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-purple-600">true</span>
            <span className="text-gray-400">;</span>
            {"\n        "}
            <span className="text-gray-300">input</span>
            <span className="text-gray-400">.</span>
            <span className="text-indigo-400">click</span>
            <span className="text-purple-400">()</span>
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
            <span className="text-gray-500">{"// Basic DropZone"}</span>
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
            <span className="text-indigo-400">onDragOver</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDragOver</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDragLeave</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDragLeave</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDrop</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleClick</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Custom DropZone with icons and validation"}</span>
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
            <span className="text-indigo-400">onDragOver</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDragOver</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDragLeave</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDragLeave</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onDrop</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleDrop</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onClick</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-indigo-400">handleClick</span>
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
            <span className="text-purple-600">48</span>
            <span className="text-purple-400">{"}"}</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">title</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Upload your images</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">PNG, JPG, WEBP up to 5MB each</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">hasErrors</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-purple-600">false</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">errorMessage</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Invalid file format</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">errorIcon</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">FaExclamationTriangle</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            <span className="text-purple-400">{"}"}</span>
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