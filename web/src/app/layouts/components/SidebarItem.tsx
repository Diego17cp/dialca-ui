import { useSidebar } from "@/core/hooks/useSidebar";
import type { NavItem } from "./SideBar";
import { HiOutlineChevronRight } from "react-icons/hi";
import { NavLink } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const SidebarItem: React.FC<{ item: NavItem }> = ({ item }) => {
	const [isExpanded, setIsExpanded] = useState(true);
	const { closeSidebar } = useSidebar();

	return (
		<div>
			<button
				className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<span className="font-titles text-lg">{item.title}</span>
				<motion.div
					animate={{ rotate: isExpanded ? 90 : 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					<HiOutlineChevronRight className="size-5" />
				</motion.div>
			</button>

			<AnimatePresence initial={false}>
				{isExpanded && item.children && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: "easeOut",
							opacity: { duration: 0.2 },
						}}
						className="overflow-hidden ml-3 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700"
					>
						{item.children.map((child, index) => (
							<motion.div
								key={index}
								initial={{ x: -10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: index * 0.05, duration: 0.2 }}
							>
								<NavLink
									to={child.href!}
									onClick={() => {
										if (window.innerWidth < 768) closeSidebar();
									}}
									className={({ isActive }) => `
										block py-2 pl-4 pr-3 text-base border-l-2 -ml-px transition-all duration-200 font-body
										${isActive
											? "border-primary text-primary bg-blue-50 dark:bg-blue-950/30 font-medium"
											: "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600"
										}
									`}
								>
									{child.title}
								</NavLink>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
