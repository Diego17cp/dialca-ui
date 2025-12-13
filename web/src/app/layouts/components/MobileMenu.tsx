import { AiOutlineBug } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { RxGithubLogo } from "react-icons/rx";
import { NavLink } from "react-router";

interface Props {
    isMobileMenuOpen: boolean;
    closeMobileMenu: () => void;
    navigationItems: {
        name: string;
        href: string;
        description: string;
        icon: React.ReactNode;
    }[];
}

export const MobileMenu = ({ isMobileMenuOpen, closeMobileMenu, navigationItems } : Props) => {
	return (
		<div
			className={`fixed top-20 left-0 right-0 bottom-0 z-40 lg:hidden bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-out ${
				isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className="h-full overflow-y-auto main-scroll">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
					<nav className="space-y-2">
						<h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-4">
							Navigation
						</h3>
						{navigationItems.map((item, index) => (
							<NavLink
								key={item.name}
								to={item.href}
								onClick={closeMobileMenu}
								className={({ isActive }) =>
									`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
										isActive
											? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary"
											: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
									}`
								}
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<span className="text-3xl">{item.icon}</span>
								<div className="flex-1">
									<div className="text-lg font-semibold">
										{item.name}
									</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										{item.description}
									</div>
								</div>
								<svg
									className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</NavLink>
						))}
					</nav>
					<div className="border-t border-gray-200 dark:border-gray-800"></div>
					<div className="space-y-2">
						<h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-4">
							Community
						</h3>
						<a
							href="https://github.com/Diego17cp/dialca-ui"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 group"
						>
							<div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
								<RxGithubLogo className="size-6" />
							</div>
							<div className="flex-1">
								<div className="text-lg font-semibold">
									GitHub Repository
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Star and contribute
								</div>
							</div>
							<svg
								className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
						<a
							href="https://github.com/Diego17cp/dialca-ui/issues/new"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 group"
						>
							<div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
								<AiOutlineBug className="size-6 text-red-600 dark:text-red-400" />
							</div>
							<div className="flex-1">
								<div className="text-lg font-semibold">
									Report an Issue
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Help us improve
								</div>
							</div>
                            <LuSquareArrowOutUpRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
						</a>
						<a
							href="https://github.com/Diego17cp"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 group"
						>
							<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
								<HiOutlineMail className="size-6 text-blue-600 dark:text-blue-400" />
							</div>
							<div className="flex-1">
								<div className="text-lg font-semibold">
									Contact Developer
								</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">
									Get in touch
								</div>
							</div>
                            <LuSquareArrowOutUpRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
						</a>
					</div>
					<div className="pt-8 pb-4 text-center space-y-4">
						<div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<span>Made with</span>
							<span className="text-red-500">❤️</span>
							<span>by</span>
							<a
								href="https://github.com/Diego17cp"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary dark:text-secondary font-medium hover:underline"
							>
								Dialcadev
							</a>
						</div>
						<div className="text-xs text-gray-400 dark:text-gray-500">
							Version 1.3.0 • MIT License
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
