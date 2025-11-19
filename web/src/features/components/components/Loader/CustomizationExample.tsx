import React from 'react';
import { Loader } from 'dialca-ui';

export const LoaderCustomizationExample: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Classes Override
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Override specific parts using custom CSS classes.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Loader
                            text="Custom Loader"
                            showText
                            classes={{
                                outerRing: "border-t-purple-500! border-4! w-12! h-12!",
                                innerRing: "border-t-pink-400! border-2!",
                                content: "text-purple-600! font-bold!"
                            }}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Custom Classes</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Complete Custom Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Fully custom variant built from scratch with no default styling.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Loader
                            variant="neon"
                            extendDefault={false}
                            text="Neon Glow"
                            showText
                            variants={{
                                neon: {
                                    normal: {
                                        container: "flex flex-col items-center gap-3",
                                        outerRing: "w-10 h-10 border-2 border-cyan-400 rounded-full animate-spin bg-cyan-400/10 shadow-md shadow-cyan-400/50",
                                        innerRing: "w-2 h-2 border-2 border-cyan-300 rounded-full animate-spin",
                                        content: "text-cyan-400 font-mono text-sm"
                                    }
                                }
                            }}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Custom Variant</span>
                    </div>
                </div>
            </div>
        </div>
    );
};