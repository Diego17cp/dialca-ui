import {
	HiOutlineCheckCircle,
	HiOutlineClipboardDocument,
} from "react-icons/hi2";

export const Imports = ({
	copiedIndex,
	copyToClipboard,
}: {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}) => {
	return (
		<div className="space-y-4">
			<div className="relative">
				<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-white font-medium">
							Method 1: CSS Import
						</h3>
						<button
							onClick={() =>
								copyToClipboard(
									'@import "dialca-ui/styles";',
									10
								)
							}
							className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
						>
							{copiedIndex === 10 ? (
								<HiOutlineCheckCircle className="size-4 text-green-400" />
							) : (
								<HiOutlineClipboardDocument className="size-4" />
							)}
						</button>
					</div>
					<pre className="text-sm font-mono">
						<code>
							<span className="text-purple-400">@import</span>{" "}
							<span className="text-emerald-300">
								"dialca-ui/styles"
							</span>
							<span className="text-gray-400">;</span>
							{"\n"}
							<span className="text-gray-400">/* or */</span>
							{"\n"}
							<span className="text-purple-400">
								@import
							</span>{" "}
							<span className="text-emerald-300">
								"dialca-ui/css"
							</span>
							<span className="text-gray-400">;</span>
						</code>
					</pre>
				</div>
			</div>
			<div className="relative">
				<div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 border border-gray-700">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-white font-medium">
							Method 2: JavaScript Import
						</h3>
						<button
							onClick={() =>
								copyToClipboard(
									'import "dialca-ui/styles";',
									11
								)
							}
							className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
						>
							{copiedIndex === 11 ? (
								<HiOutlineCheckCircle className="size-4 text-green-400" />
							) : (
								<HiOutlineClipboardDocument className="size-4" />
							)}
						</button>
					</div>
					<pre className="text-sm font-mono">
						<code>
							<span className="text-purple-400">import</span>{" "}
							<span className="text-gray-400">"</span>
							<span className="text-emerald-300">
								dialca-ui/styles
							</span>
							<span className="text-gray-400">"</span>
							<span className="text-gray-400">;</span>
							{"\n"}
							<span className="text-gray-400">/* or */</span>
							{"\n"}
							<span className="text-purple-400">import</span>{" "}
							<span className="text-gray-400">"</span>
							<span className="text-emerald-300">
								dialca-ui/css
							</span>
							<span className="text-gray-400">"</span>
							<span className="text-gray-400">;</span>
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
};
