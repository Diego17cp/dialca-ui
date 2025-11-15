import React from 'react';
import { Button } from 'dialca-ui';

export const CustomizationExample: React.FC = () => {
    const extendedVariants = {
        'gradient-primary': {
            normal: {
                container: "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300",
                content: "font-semibold",
                icon: "text-white",
                loader: "border-white/30 border-t-white"
            },
            hover: {
                container: "bg-gradient-to-r from-blue-600 to-purple-700 transform scale-105",
                content: "font-semibold",
                icon: "text-white",
                loader: "border-white/30 border-t-white"
            },
            active: {
                container: "bg-gradient-to-r from-blue-700 to-purple-800 transform scale-95",
                content: "font-semibold",
                icon: "text-white",
                loader: "border-white/30 border-t-white"
            },
            disabled: {
                container: "bg-gray-300 text-gray-500 cursor-not-allowed",
                content: "font-semibold",
                icon: "text-gray-500",
                loader: "border-gray-500/30 border-t-gray-500"
            }
        }
    };

    // Ejemplo 2: Variante completamente custom
    const customVariants = {
        'neon-cyber': {
            normal: {
                container: "bg-black border-2 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono uppercase tracking-wider p-4 rounded-md",
                content: "text-sm font-bold",
                icon: "text-cyan-400",
                loader: "border-cyan-400/30 border-t-cyan-400"
            },
            hover: {
                container: "bg-cyan-400/10 border-cyan-300 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]",
                content: "text-sm font-bold",
                icon: "text-cyan-300",
                loader: "border-cyan-300/30 border-t-cyan-300"
            },
            active: {
                container: "bg-cyan-400/20 border-cyan-200 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.9)]",
                content: "text-sm font-bold",
                icon: "text-cyan-200",
                loader: "border-cyan-200/30 border-t-cyan-200"
            },
            disabled: {
                container: "bg-gray-900 border-gray-600 text-gray-600 shadow-none cursor-not-allowed",
                content: "text-sm font-bold",
                icon: "text-gray-600",
                loader: "border-gray-600/30 border-t-gray-600"
            }
        }
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Extending Existing Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Creating a gradient version of the primary variant with enhanced effects.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="gradient-primary"
                            variants={extendedVariants}
                            size="lg"
                        >
                            Gradient Button
                        </Button>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Extended Primary
                        </span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="gradient-primary"
                            variants={extendedVariants}
                            loading
                        >
                            Loading...
                        </Button>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Loading State
                        </span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="gradient-primary"
                            variants={extendedVariants}
                            disabled
                        >
                            Disabled
                        </Button>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Disabled State
                        </span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Variant from Scratch
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Creating a cyberpunk-themed variant with neon effects and custom styling.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-black rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="neon-cyber"
                            variants={customVariants}
                            extendDefault={false}
                        >
                            Neon Button
                        </Button>
                        <span className="text-xs text-cyan-400 font-medium">
                            Cyber Theme
                        </span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="neon-cyber"
                            variants={customVariants}
                            extendDefault={false}
                            loading
                            loadingText="Hacking..."
                        >
                            Processing...
                        </Button>
                        <span className="text-xs text-cyan-400 font-medium">
                            Loading State
                        </span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Button 
                            variant="neon-cyber"
                            variants={customVariants}
                            extendDefault={false}
                            disabled
                        >
                            Access Denied
                        </Button>
                        <span className="text-xs text-cyan-400 font-medium">
                            Disabled State
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};