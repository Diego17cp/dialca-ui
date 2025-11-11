import { Header } from "../components/Header";
import { Link } from 'react-router';
import { 
    HiOutlineSparkles, 
    HiOutlineLightBulb,
    HiOutlinePuzzlePiece,
    HiOutlineDevicePhoneMobile,
    HiOutlineCubeTransparent,
    HiOutlineArrowRight,
    HiOutlineBookOpen,
    HiOutlinePlay,
    HiOutlineRocketLaunch
} from 'react-icons/hi2';
import { RxGithubLogo } from 'react-icons/rx';
import {  HiOutlineCode } from 'react-icons/hi';
import { StatsSection } from "@/core/components";

export const Home = () => {
    const features = [
        {
            icon: HiOutlineCode,
            title: "Modern React Components",
            description: "Built with TypeScript, Tailwind CSS and modern React patterns for maximum developer experience."
        },
        {
            icon: HiOutlineDevicePhoneMobile,
            title: "Mobile First & Responsive",
            description: "Every component is designed mobile-first and scales beautifully across all device sizes."
        },
        {
            icon: HiOutlineLightBulb,
            title: "Dark Mode Support",
            description: "Native dark mode support with smooth transitions and consistent design language."
        },
        {
            icon: HiOutlinePuzzlePiece,
            title: "Highly Customizable",
            description: "Flexible theming system and extensive customization options to match your brand."
        },
        {
            icon: HiOutlineRocketLaunch,
            title: "Performance Optimized",
            description: "Tree-shakeable components with minimal bundle size and optimal runtime performance."
        },
        {
            icon: HiOutlineCubeTransparent,
            title: "Accessibility First",
            description: "WCAG compliant components with keyboard navigation and screen reader support."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-300/30 to-blue-500 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
            <Header />            
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
                            <HiOutlineSparkles className="size-4" />
                            <span>First release • 12 Components Available</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-titles font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Build Beautiful
                            <span className="block bg-gradient-to-r from-amber-200 to-stone-600 bg-clip-text text-transparent">
                                React Apps
                            </span>
                            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
                                Faster Than Ever
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-body text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            A comprehensive React component library built with TypeScript, 
                            and modern design principles. Create stunning user interfaces in minutes, not hours.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                            <Link
                                to="/playground"
                                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary hover:from-sky-800 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
                            >
                                <HiOutlinePlay className="size-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Try Playground</span>
                                <HiOutlineArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                            
                            <Link
                                to="/docs/overview/getting-started"
                                className="group inline-flex items-center space-x-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-secondary text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
                            >
                                <HiOutlineBookOpen className="size-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Documentation</span>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center space-x-8 text-gray-500 dark:text-gray-400">
                            <a 
                                href="https://github.com/Diego17cp/dialca-ui" 
                                className="group flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                            >
                                <RxGithubLogo className="size-5 group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-medium">Star on GitHub</span>
                            </a>
                            {/* <span className="hidden sm:block">•</span>
                            <span className="text-sm">MIT License</span> */}
                        </div>
                    </div>
                </div>
            </section>
            <StatsSection />
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white mb-6">
                            Why Choose Dialca UI?
                        </h2>
                        <p className="text-xl font-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Built by developers, for developers. Every component is crafted with attention to detail, 
                            performance, and user experience in mind.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="size-12 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                                    <feature.icon className="size-6 text-secondary dark:text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 bg-gradient-to-r from-primary to-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-titles font-bold text-white mb-6">
                        Ready to Build Amazing UIs?
                    </h2>
                    <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-body">
                        Join developers who are already building faster with Dialca UI.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/docs/overview/getting-started"
                            className="group inline-flex items-center space-x-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
                        >
                            <span>Get Started</span>
                            <HiOutlineArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        
                        <Link
                            to="/docs/components"
                            className="group inline-flex items-center space-x-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 hover:scale-105"
                        >
                            <span>Browse Components</span>
                        </Link>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>Created by</span>
                            <a 
                                href="https://github.com/Diego17cp" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-blue-300 font-medium transition-colors duration-200"
                            >
                                Dialcadev
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://github.com/Diego17cp/dialca-ui" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <RxGithubLogo className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Source Code</span>
                            </a>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-400 text-sm">&copy; 2025 Dialca UI</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};