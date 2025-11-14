export const StatesCode = () => {
    return (
        <code>
            <span className="text-gray-500">// Normal state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Normal</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Loading state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">loading</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Loading</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n"}
            
            <span className="text-gray-500">// Disabled state</span>
            {"\n"}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">Button</span>{" "}
            <span className="text-indigo-400">disabled</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-300">Disabled</span>
            <span className="text-gray-400">&lt;/</span>
            <span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
            {"\n\n"}
            
        </code>
    );
};