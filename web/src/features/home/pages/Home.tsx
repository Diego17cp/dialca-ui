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
import { useDocTitle } from '@/core/hooks';
import { pageTitles } from '@/core/constants';
import { BiCheck } from 'react-icons/bi';
import { Footer } from '../components/Footer';

export const Home = () => {
    useDocTitle(pageTitles.HOME);
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
        <>
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
                                to="/docs/overview/getting-started"
                                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary hover:from-sky-800 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
                            >
                                <HiOutlinePlay className="size-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Install now</span>
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
            <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <div className="absolute inset-0 opacity-30 dark:opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-secondary p-1">
                            <div className="h-2"></div>
                        </div>
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <HiOutlineSparkles className="size-4" />
                                    <span>Start Building Today</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white mb-6">
                                    Ready to Build Amazing UIs?
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-body">
                                    Join developers who are already building faster with Dialca UI.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        12+
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Components
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        TypeScript
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        MIT
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Open Source
                                    </div>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <BiCheck className='text-green-600 dark:text-green-400 text-2xl' />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                            Zero Configuration
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Install and start using immediately
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <BiCheck className='text-blue-600 dark:text-blue-400 text-2xl' />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                            Fully Documented
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Comprehensive guides and examples
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                        <BiCheck className='text-purple-600 dark:text-purple-400 text-2xl' />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                            Active Development
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Regular updates and improvements
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link
                                    to="/docs/overview/getting-started"
                                    className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary hover:from-blue-700 hover:to-sky-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-105"
                                >
                                    <span>Get Started</span>
                                    <HiOutlineArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                                
                                <Link
                                    to="/docs/components"
                                    className="group inline-flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-secondary text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
                                >
                                    <HiOutlinePuzzlePiece className="size-5 group-hover:scale-110 transition-transform duration-200" />
                                    <span>Browse Components</span>
                                </Link>
                            </div>
                            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <RxGithubLogo className="w-5 h-5" />
                                        <span>Open Source on GitHub</span>
                                    </div>
                                    <span className="hidden md:block">•</span>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineBookOpen className="w-5 h-5" />
                                        <span>MIT License</span>
                                    </div>
                                    <span className="hidden md:block">•</span>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineSparkles className="w-5 h-5" />
                                        <span>Production Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};