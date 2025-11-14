export const BasicUsage = () => {
	return (
		<code>
			<span className="text-violet-400">import</span>{" "}
			<span className="text-sky-300">{"{ Button }"}</span>{" "}
			<span className="text-violet-400">from</span>{" "}
			<span className="text-emerald-300">'dialca-ui'</span>
			<span className="text-gray-400">;</span>
			{"\n\n"}
			<span className="text-sky-300">export</span>{" "}
			<span className="text-sky-300">default</span>{" "}
			<span className="text-violet-400">function</span>{" "}
			<span className="text-indigo-400">{"App () {"}</span>
			{"\n    "}
			<span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">&lt;</span>
			<span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
			<span className="text-gray-300">Click me</span>
            <span className="text-gray-400">&lt;/</span>
			<span className="text-pink-400">Button</span>
            <span className="text-gray-400">&gt;</span>
		</code>
	);
};
