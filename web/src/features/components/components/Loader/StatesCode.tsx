export const LoaderStatesCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Normal state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Loading...</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">showText</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Error state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            <span className="text-indigo-400">hasErrors</span>{" "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Error occurred</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">showText</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Success state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            <span className="text-indigo-400">success</span>{" "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Completed!</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">showText</span>{" "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n"}
            <span className="text-gray-500">// Disabled state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Loader</span>{" "}
            <span className="text-indigo-400">disabled</span>{" "}
            <span className="text-indigo-400">text</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">Disabled</span>
            <span className="text-gray-400">"</span>{" "}
            <span className="text-indigo-400">showText</span>{" "}
            <span className="text-gray-400">/&gt;</span>
        </code>
    );
};