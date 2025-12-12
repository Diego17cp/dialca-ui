import { 
    HiOutlineRocketLaunch, 
    HiOutlineExclamationTriangle, 
    HiOutlineSparkles,
    HiOutlineLightBulb,
    HiOutlineArrowPath,
    HiOutlineCheckCircle
} from 'react-icons/hi2';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { CiWarning } from 'react-icons/ci';
import { ImInfo } from 'react-icons/im';

export const DUI130Post = () => {
    return (
        <div className="space-y-12">
            <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full">
                    <HiOutlineRocketLaunch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                        Version 1.3.0
                    </span>
                </div>
                <h2 className="text-4xl font-titles md:text-5xl font-bold text-gray-900 dark:text-white">
                    Complete Architectural Overhaul
                </h2>
                <p className="text-xl font-body text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Transitioning from Tailwind-dependent to a pure CSS library with zero external dependencies
                </p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 dark:border-red-400 rounded-r-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <HiOutlineExclamationTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            Breaking Changes
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            This version represents a complete architectural overhaul. Please review the migration guide carefully before updating.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl text-primary">
                                    <ImInfo />
                                </span>
                                <div>
                                    <p className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                        Good News for Existing Users
                                    </p>
                                    <p className="text-sm text-blue-800 dark:text-blue-200">
                                        While the internal architecture has changed significantly, <strong>the public API remains backward compatible</strong>. 
                                        Your existing component usage stays the same - just update the CSS import and you're good to go!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span><strong>CSS Architecture Migration:</strong> Complete migration from Tailwind CSS to pure CSS with BEM methodology</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span><strong>Zero Dependencies:</strong> Removed all Tailwind CSS dependencies - library now works without any CSS framework</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span><strong>New Hook System:</strong> Completely redesigned variant system with smart CSS/Custom detection</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span><strong>Bundle Structure:</strong> Restructured build output for better tree-shaking and performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span><strong>Internal API Changes:</strong> Some internal APIs have changed, but the <strong>public API remains backward compatible</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
                        <HiOutlineSparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        New Features
                    </h3>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <FaCss3Alt className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Pure CSS with BEM Methodology
                        </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Zero CSS Dependencies</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">No more Tailwind CSS required - works in any project</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">BEM Class Structure</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Clean, semantic CSS classes (e.g., .dialca-button, .dialca-button--success)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">CSS Variables</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Customizable design tokens for easy theming</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Production Ready</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Optimized CSS bundle for best performance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <HiOutlineLightBulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Smart Variant System
                        </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Automatic Detection</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Hooks automatically detect when to use CSS vs custom variants</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Backward Compatible</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Existing custom variant API still works</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Performance Optimized</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Zero overhead when using built-in variants</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <HiOutlineCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">Flexible</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Extend defaults or create completely custom styling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg">
                        <HiOutlineArrowPath className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Architecture Changes
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
                                Before (v1.2.x)
                            </span>
                        </div>
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 border border-gray-700">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                                <code>{`// Required Tailwind CSS + 
// complex variant processing
import 'tailwindcss/base';
import 'tailwindcss/components'; 
import 'tailwindcss/utilities';
import { Button } from 'dialca-ui';

// Bundle: ~600KB+ (with Tailwind)`}</code>
                            </pre>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <span className="text-red-600 dark:text-red-400 text-xl">
                                <CiWarning />
                            </span>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Heavy dependencies and large bundle size
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                                After (v1.3.0)
                            </span>
                        </div>
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 border border-green-500/50">
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                                <code>{`// Pure CSS - no external 
// dependencies
import 'dialca-ui/css';
import { Button } from 'dialca-ui';

// Bundle: Optimized & minimal!`}</code>
                            </pre>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <span className="text-green-600 dark:text-green-400 text-xl">
                                <HiOutlineCheckCircle />
                            </span>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Zero dependencies, optimized bundle
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                        <FaReact className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Component Updates
                    </h3>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <HiOutlineCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                All 12 Components Migrated
                            </span>
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            Every component has been successfully migrated to the new pure CSS architecture
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <FaReact className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            <span className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                                No tailwindcss as peer dependency, JUST REACT
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};