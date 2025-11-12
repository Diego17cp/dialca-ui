import { useState } from "react";
import { Link } from "react-router";
import {
	HiOutlinePaintBrush,
	HiOutlineCodeBracket,
	HiOutlineCog6Tooth,
	HiOutlineSparkles,
	HiOutlineArrowRight,
} from "react-icons/hi2";
import {
	HiOutlineCode,
	HiOutlineColorSwatch,
	HiOutlineVariable,
} from "react-icons/hi";
import { FirstExample } from "../components/FirstExample";
import { SecondExample } from "../components/SecondExample";
import { ThirdExample } from "../components/ThirdExample";
import { FourthExample } from "../components/FourthExample";

export const Customization = () => {
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const copyToClipboard = (text: string, index: number) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	const customizationMethods = [
		{
			icon: HiOutlineColorSwatch,
			title: "Variant System",
			description: "Built-in variants for different component styles",
			color: "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
		},
		{
			icon: HiOutlineCodeBracket,
			title: "Class Overrides",
			description: "Override default styles with custom CSS classes",
			color: "from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30",
		},
		{
			icon: HiOutlineCog6Tooth,
			title: "Custom Hooks",
			description: "Use variant hooks to create custom styling logic",
			color: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
		},
	];
	return (
		<div className="min-h-full">
			<div className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
						<HiOutlinePaintBrush className="w-8 h-8 text-primary" />
					</div>
					<h1 className="text-4xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white">
						Customization
					</h1>
				</div>
				<p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
					DialcaUI provides multiple ways to customize components to
					match your design system. From built-in variants to complete
					style overrides, you have full control over the appearance.
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-6 mb-12">
				{customizationMethods.map((method, index) => (
					<div
						key={index}
						className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
					>
						<div
							className={`p-3 bg-gradient-to-r ${method.color} rounded-xl mb-4 w-fit`}
						>
							<method.icon className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
							{method.title}
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							{method.description}
						</p>
					</div>
				))}
			</div>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
						<HiOutlineColorSwatch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Using Built-in Variants
					</h2>
				</div>

				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Every DialcaUI component comes with predefined variants for
					common use cases:
				</p>
				<FirstExample
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
				<div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6">
					<div className="flex items-start space-x-3">
						<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
							<HiOutlineSparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
						</div>
						<div>
							<h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
								Available Variants
							</h3>
							<p className="text-blue-800 dark:text-blue-200 text-sm">
								Most components support:{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									primary
								</code>
								,{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									secondary
								</code>
								,{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									dark
								</code>
								,{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									outline
								</code>
								,{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									ghost
								</code>
								, and{" "}
								<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
									danger
								</code>{" "}
								variants.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg">
						<HiOutlineCodeBracket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Class Overrides
					</h2>
				</div>

				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Override default styles by passing custom CSS classes to the{" "}
					<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
						className
					</code>{" "}
                    or {" "}
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
						classes
					</code>{" "}
					prop:
				</p>
				<SecondExample
                    copiedIndex={copiedIndex}
                    copyToClipboard={copyToClipboard}
                />
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
						<HiOutlineVariable className="w-6 h-6 text-green-600 dark:text-green-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Variant Hooks System
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					DialcaUI uses a hybrid system that automatically chooses between CSS and Tailwind classes. 
                    Use variant hooks to create custom components with full control over styling:
				</p>
				<ThirdExample
                    copiedIndex={copiedIndex}
                    copyToClipboard={copyToClipboard}
                />

			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg">
						<HiOutlineCode className="w-6 h-6 text-amber-600 dark:text-amber-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						CSS Customization
					</h2>
				</div>

				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Override component styles by importing individual CSS files
					and modifying CSS custom properties:
				</p>

				<FourthExample
                    copiedIndex={copiedIndex}
                    copyToClipboard={copyToClipboard}
                />
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
					Explore Component APIs
				</h2>

				<div className="grid md:grid-cols-2 gap-6">
					<Link
						to="/docs/overview/components"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Component Documentation
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							See detailed customization options for each
							component with live examples.
						</p>
					</Link>

					<Link
						to="/docs/advanced/theming"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Advanced Customization
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Learn about creating custom variants and extending
							the component system.
						</p>
					</Link>
				</div>
			</section>
		</div>
	);
};
