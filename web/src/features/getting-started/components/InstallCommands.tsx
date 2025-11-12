import { useState } from "react";
import {
	HiOutlineClipboardDocument,
	HiOutlineCheckCircle,
	HiOutlineCommandLine,
} from "react-icons/hi2";
import { installCommands } from "../constants";

interface InstallCommandsProps {
	copiedIndex: number | null;
	copyToClipboard: (text: string, index: number) => void;
}

export const InstallCommands: React.FC<InstallCommandsProps> = ({
	copiedIndex,
	copyToClipboard,
}) => {
	const [selectedManager, setSelectedManager] = useState<
		"npm" | "yarn" | "pnpm" | "bun"
	>("npm");

	const currentCommand = installCommands.find(
		(cmd) => cmd.manager === selectedManager
	);
	const copyIndex = 100;

	return (
		<div className="bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
			<div className="bg-gray-800 dark:bg-gray-700 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
				<div className="flex items-center space-x-3 gap-4">
					<HiOutlineCommandLine className="size-6 text-green-400" />
					<div className="flex space-x-1">
						{installCommands.map((cmd) => (
							<button
								key={cmd.manager}
								onClick={() =>
									setSelectedManager(
										cmd.manager as
											| "npm"
											| "yarn"
											| "pnpm"
											| "bun"
									)
								}
								className={`
                                    relative px-3 py-1.5 text-xs font-medium rounded-t transition-all duration-200
                                    ${
										selectedManager === cmd.manager
											? "bg-gray-600 dark:bg-gray-500 text-white"
											: "bg-gray-700 dark:bg-gray-600 text-gray-400 hover:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
									}
                                `}
							>
								{cmd.manager}
								{selectedManager === cmd.manager && (
									<div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"></div>
								)}
							</button>
						))}
					</div>
				</div>
				<button
					onClick={() =>
						copyToClipboard(
							currentCommand?.command || "",
							copyIndex
						)
					}
					className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
					title="Copy to clipboard"
				>
					{copiedIndex === copyIndex ? (
						<HiOutlineCheckCircle className="size-4 text-green-400" />
					) : (
						<HiOutlineClipboardDocument className="size-4" />
					)}
				</button>
			</div>
			<div className="p-4">
				<div className="font-mono text-sm">
					<span className="text-gray-500">$ </span>
					<span className="text-purple-400">
						{currentCommand?.command.split(" ")[0]}{" "}
						{currentCommand?.command.split(" ")[1]}
					</span>{" "}
					<span className="text-gray-200">
						{currentCommand?.command.split(" ").slice(2).join(" ")}
					</span>
				</div>
			</div>
		</div>
	);
};
