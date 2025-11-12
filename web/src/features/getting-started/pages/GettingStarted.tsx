import { useState } from "react";
import { Link } from "react-router";
import {
	HiOutlineRocketLaunch,
	HiOutlineCommandLine,
	HiOutlineCodeBracket,
	HiOutlineSparkles,
	HiOutlineArrowRight,
} from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";
import { CodeExample } from "../components/CodeExample";
import { Imports } from "../components/Imports";
import { InstallCommands } from "../components/InstallCommands";
import { features } from "../constants";

export const GettingStarted = () => {
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const copyToClipboard = (text: string, index: number) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	return (
		<div className="min-h-full">
			<div className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
						<HiOutlineRocketLaunch className="size-8 text-primary" />
					</div>
					<h1 className="text-4xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white">
						Getting Started
					</h1>
				</div>
				<p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
					DialcaUI is a modern React component library designed to
					help developers create attractive and accessible interfaces
					quickly. Get up and running in just a few minutes.
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-6 mb-12">
				{features.map((feature, index) => (
					<div
						key={index}
						className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
					>
						<div className="flex items-center space-x-3 mb-3">
							<feature.icon className="size-6 text-primary" />
							<h3 className="font-semibold text-gray-900 dark:text-white">
								{feature.title}
							</h3>
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							{feature.description}
						</p>
					</div>
				))}
			</div>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
						<HiOutlineCommandLine className="size-6 text-green-600 dark:text-green-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Installation
					</h2>
				</div>

				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Install DialcaUI using your preferred package manager:
				</p>

				<InstallCommands
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
						<HiOutlineCode className="size-6 text-blue-600 dark:text-blue-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Setup Styles
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Import the styles in your main CSS or TSX / JSX file to
					enable component styling:
				</p>
				<Imports
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
						<HiOutlineCodeBracket className="size-6 text-purple-600 dark:text-purple-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Your First Component
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Start using DialcaUI components in your React application:
				</p>
				<CodeExample
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
					Next Steps
				</h2>

				<div className="grid md:grid-cols-2 gap-6">
					<Link
						to="/docs/overview/components"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Browse Components
							</h3>
							<HiOutlineArrowRight className="size-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Explore all available components with live examples
							and API documentation.
						</p>
					</Link>

					<Link
						to="/docs/overview/customization"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Customization Guide
							</h3>
							<HiOutlineArrowRight className="size-5 text-secondary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Learn how to customize components with variants and
							class overrides.
						</p>
					</Link>
				</div>
			</section>
			<section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-6">
				<div className="flex items-start space-x-3">
					<div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mt-1">
						<HiOutlineSparkles className="size-5 text-amber-600 dark:text-amber-400" />
					</div>
					<div>
						<h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
							Important Notes
						</h3>
						<ul className="space-y-2 text-amber-800 dark:text-amber-200 text-sm">
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 size-1.5 bg-amber-500 rounded-full flex-shrink-0"></span>
								<span>
									Some components require additional setup.
									Check individual component documentation for
									details.
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};
