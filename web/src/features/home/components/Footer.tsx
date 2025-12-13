import {
	HiOutlineBookOpen,
	HiOutlinePuzzlePiece,
	HiOutlineSparkles,
} from "react-icons/hi2";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router";
import logo from '@/assets/logo.webp';
import { CgNpm } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="relative bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-700 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/15"></div>
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					<div className="space-y-4">
						<div className="flex items-center space-x-3">
							<div className="size-20 bg-gradient-to-r rounded-lg flex items-center justify-center">
								<img
									src={logo}
									alt="Dialca UI"
									className="object-contain"
								/>
							</div>
							<span className="text-xl font-titles font-bold text-white">
								Dialca UI
							</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed">
							A modern React component library built with
							TypeScript. Create beautiful interfaces
							faster.
						</p>
						<div className="flex items-center space-x-3 pt-2">
							<a
								href="https://github.com/Diego17cp/dialca-ui"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
								aria-label="GitHub Repository"
							>
								<RxGithubLogo className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
							</a>
							<a
								href="https://www.npmjs.com/package/dialca-ui"
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
								aria-label="NPM Package"
							>
								<CgNpm className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
							</a>
						</div>
					</div>
					{/* Documentation Links */}
					<div>
						<h3 className="text-white font-semibold mb-4 flex items-center gap-2">
							<HiOutlineBookOpen className="w-5 h-5 text-primary" />
							Documentation
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									to="/docs/overview/getting-started"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
									Getting Started
								</Link>
							</li>
							<li>
								<Link
									to="/docs/overview/theming"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
									Theming
								</Link>
							</li>
							<li>
								<Link
									to="/docs/overview/customization"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></span>
									Customization
								</Link>
							</li>
						</ul>
					</div>
					{/* Components Links */}
					<div>
						<h3 className="text-white font-semibold mb-4 flex items-center gap-2">
							<HiOutlinePuzzlePiece className="w-5 h-5 text-secondary" />
							Components
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									to="/docs/overview/components"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors"></span>
									All Components
								</Link>
							</li>
							<li>
								<Link
									to="/docs/components/button"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors"></span>
									Button
								</Link>
							</li>
							<li>
								<Link
									to="/docs/components/input"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors"></span>
									Input
								</Link>
							</li>
							<li>
								<Link
									to="/docs/components/modal"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-secondary transition-colors"></span>
									Modal
								</Link>
							</li>
						</ul>
					</div>
                    {/* Resources Links */}
					<div>
						<h3 className="text-white font-semibold mb-4 flex items-center gap-2">
							<HiOutlineSparkles className="w-5 h-5 text-yellow-500" />
							Resources
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									to="/blog"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
									Blog
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/Diego17cp/dialca-ui/releases"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
									Changelog
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Diego17cp/dialca-ui/issues"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
									Report Issue
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Diego17cp/dialca-ui/blob/main/LICENSE"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
								>
									<span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
									MIT License
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
						{/* Creator Info */}
						<div className="flex items-center gap-2 text-gray-400 text-sm">
							<span>Created with</span>
							<span className="text-red-500 animate-pulse">
								<FaHeart />
							</span>
							<span>by</span>
							<a
								href="https://github.com/Diego17cp"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1.5 text-primary hover:text-blue-300 font-medium transition-colors duration-200 group"
							>
								<RxGithubLogo className="w-4 h-4 group-hover:scale-110 transition-transform" />
								Dialcadev
							</a>
						</div>
						{/* Copyright & Version */}
						<div className="flex items-center gap-4 text-gray-400 text-sm">
							<span>&copy; 2025 Dialca UI</span>
							<span className="text-gray-600">•</span>
							<span className="px-2 py-1 bg-gray-800 rounded text-xs font-mono">
								v1.3.0
							</span>
							<span className="text-gray-600">•</span>
							<a
								href="https://github.com/Diego17cp/dialca-ui"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors duration-200"
							>
								Open Source
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
