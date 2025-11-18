import { useState } from "react";
import { Link } from "react-router";
import {
	HiOutlinePaintBrush,
	HiOutlineSwatch,
	HiOutlineSparkles,
	HiOutlineArrowRight,
	HiOutlineCog6Tooth,
	HiOutlineCodeBracket,
	HiOutlineExclamationTriangle,
	HiOutlineXCircle,
	HiOutlineCheckCircle,
	HiOutlineBeaker,
} from "react-icons/hi2";
import { FirstExample } from "../components/FirstExample";
import { SecondExample } from "../components/SecondExample";
import { ThirdExample } from "../components/ThirdExample";
import { useDocTitle } from "@/core/hooks";
import { pageTitles } from "@/core/constants";

export const Theming = () => {
	useDocTitle(pageTitles.THEMING)
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const copyToClipboard = (text: string, index: number) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	const themingFeatures = [
		{
			icon: HiOutlineSwatch,
			title: "Variant System",
			description:
				"Use the 'variant' prop to apply predefined or custom themes",
			color: "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
		},
		{
			icon: HiOutlineCodeBracket,
			title: "Variants Object",
			description:
				"Pass a 'variants' object to completely customize component styles",
			color: "from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30",
		},
		{
			icon: HiOutlineCog6Tooth,
			title: "CSS Extensions",
			description:
				"Extend components with custom CSS following BEM methodology",
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
						Theming System
					</h1>
				</div>
				<p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
					DialcaUI provides a flexible theming system using variants
					and customizable style objects. Create themes with Tailwind
					classes, custom CSS, or hybrid approaches for complete
					design control.
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-6 mb-12">
				{themingFeatures.map((feature, index) => (
					<div
						key={index}
						className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200"
					>
						<div
							className={`p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-4 w-fit`}
						>
							<feature.icon className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
							{feature.title}
						</h3>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							{feature.description}
						</p>
					</div>
				))}
			</div>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
						<HiOutlineSwatch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Using the Variant Prop
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					The simplest way to theme components is using predefined
					variants or creating custom ones:
				</p>
				<FirstExample
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg">
						<HiOutlineCodeBracket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Variants Object System
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					For complete customization, use the{" "}
					<code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
						variants
					</code>{" "}
					prop to define all component aspects:
				</p>
				<div className="space-y-6">
					<SecondExample
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
									Extend Default Styles
								</h3>
								<p className="text-blue-800 dark:text-blue-200 text-sm">
									The{" "}
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										extendDefault
									</code>{" "}
									prop allows you to build upon the existing
									default styles of DialcaUI components. Set
									it to{" "}
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										false
									</code>{" "}
									to completely override and replace the
									default styles with your custom definitions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
						<HiOutlineCog6Tooth className="w-6 h-6 text-green-600 dark:text-green-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						CSS Extension Method
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Extend components with custom CSS following BEM methodology
					for specific variant styles:
				</p>
				<ThirdExample
					copiedIndex={copiedIndex}
					copyToClipboard={copyToClipboard}
				/>
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
					Implementation Guide
				</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
							Component Structure
						</h3>
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
							<pre className="text-sm font-mono overflow-x-auto main-scroll text-gray-800 dark:text-gray-200">
								<code>
									<span>
										// Each component part can be styled
										depending on the component API
									</span>
									{`\n\n`}
									<span>{"const variants = {"}</span>
									{`\n    `}
									<span>myTheme</span>
									<span>: </span>
									<span>{"{"}</span>
									{`\n        `}
									<span>container</span>
									<span>: </span>
									<span>"..."</span>
									<span>, </span>
									{`\n        `}
									<span>content</span>
									<span>: </span>
									<span>"..."</span>
									<span>, </span>
									{`\n        `}
									<span>icon</span>
									<span>: </span>
									<span>"..."</span>
									<span>, </span>
									{`\n        `}
									<span>loader</span>
									<span>: </span>
									<span>"..."</span>
									{`\n    `}
									<span>{"}"}</span>
									{`\n`}
									<span>{"};"}</span>
								</code>
							</pre>
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Every component exposes its internal structure for
							complete customization.
						</p>
					</div>

					<div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
							BEM CSS Structure
						</h3>
						<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
							<pre className="text-sm font-mono overflow-x-auto main-scroll text-gray-800 dark:text-gray-200">
								<code>
									<span>/* Example CSS Extension */</span>
									{`\n\n`}
									<span>
										{".dialca-component--variant {}"}
									</span>
									{`\n`}
									<span>
										{".dialca-component__element {}"}
									</span>
									{`\n`}
									<span>
										{
											".dialca-component--variant .dialca-component__element {}"
										}
									</span>
								</code>
							</pre>
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Follow BEM methodology for CSS extensions to
							maintain consistency.
						</p>
					</div>
				</div>
			</section>
			<section className="mb-12">
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
					Important Considerations
				</h2>
				<div className="space-y-6">
					<div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-6">
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mt-1">
								<HiOutlineExclamationTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
							</div>
							<div>
								<h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
									CSS Import Order Matters
								</h3>
								<p className="text-amber-800 dark:text-amber-200 text-sm mb-3">
									When using CSS extensions, the order of
									imports is crucial for proper style
									override:
								</p>
								<div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-3 mb-3">
                                    <pre className="text-sm font-mono text-amber-900 dark:text-amber-100">
                                        <code>
                                            <span>// Correct order</span>
                                            {`\n`}
                                            <span>import 'dialca-ui/styles/dialca-ui.css';  // Base styles first</span>
                                            {`\n`}
                                            <span>import './my-custom-themes.css';          // Custom styles second</span>
                                        </code>
                                    </pre>
								</div>
								<p className="text-amber-800 dark:text-amber-200 text-sm">
									Importing your custom CSS after DialcaUI's
									base styles ensures your customizations take
									precedence.
								</p>
							</div>
						</div>
					</div>
					<div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-xl p-6">
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mt-1">
								<HiOutlineXCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
							</div>
							<div>
								<h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
									Theming Limitations
								</h3>
								<p className="text-red-800 dark:text-red-200 text-sm mb-3">
									While DialcaUI's theming system is flexible,
									there are some limitations to be aware of:
								</p>
								<ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
										<span>
											<strong>HTML Structure:</strong> You
											cannot modify the component's
											internal HTML structure, only the
											styling
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
										<span>
											<strong>
												JavaScript Behavior:
											</strong>{" "}
											Theming only affects visual
											appearance, not component
											functionality or logic
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
										<span>
											<strong>Internal States:</strong>{" "}
											You can only style exposed states
											and elements, not private component
											internals
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 rounded-xl p-6">
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mt-1">
								<HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
							</div>
							<div>
								<h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
									CSS Specificity Tips
								</h3>
								<p className="text-green-800 dark:text-green-200 text-sm mb-3">
									To ensure your custom styles override
									DialcaUI defaults effectively:
								</p>
								<ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
										<span>
											Use the exact BEM class names:{" "}
											<code className="bg-green-200 dark:bg-green-900 px-1 rounded">
												.dialca-component--your-variant
											</code>
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
										<span>
											Target nested elements:{" "}
											<code className="bg-green-200 dark:bg-green-900 px-1 rounded">
												.dialca-button--custom
												.dialca-button__content
											</code>
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
										<span>
											Avoid{" "}
											<code className="bg-green-200 dark:bg-green-900 px-1 rounded">
												!important
											</code>{" "}
											- proper specificity should be
											enough
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6">
						<div className="flex items-start space-x-3">
							<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
								<HiOutlineBeaker className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							</div>
							<div>
								<h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
									Testing Your Themes
								</h3>
								<p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
									Always test your custom themes across
									different states and scenarios:
								</p>
								<div className="grid grid-cols-2 gap-4 text-blue-800 dark:text-blue-200 text-sm">
									<ul className="space-y-1">
										<li>• Hover states</li>
										<li>• Focus states</li>
										<li>• Active states</li>
										<li>• Disabled states</li>
									</ul>
									<ul className="space-y-1">
										<li>• Loading states</li>
										<li>• Error states</li>
										<li>• Dark mode compatibility</li>
										<li>• Responsive behavior</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Next Steps */}
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
								Component APIs
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Explore each component's structure and available
							theming options.
						</p>
					</Link>

					<Link
						to="/docs/overview/customization"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Advanced Customization
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Learn about using hooks and advanced customization
							techniques.
						</p>
					</Link>
				</div>
			</section>

			<section className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-xl p-6">
				<div className="flex items-start space-x-3">
					<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mt-1">
						<HiOutlineSparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
					</div>
					<div>
						<h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
							Theming Best Practices
						</h3>
						<ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									Use the{" "}
									<code className="bg-blue-200 dark:bg-blue-900 px-1 rounded">
										variants
									</code>{" "}
									prop for complete theme systems
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									Use CSS extensions for simple variant
									additions following BEM methodology
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									Mix Tailwind classes and custom CSS for
									optimal flexibility
								</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
								<span>
									Test your variants across all component
									states (hover, focus, disabled, etc.)
								</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};
