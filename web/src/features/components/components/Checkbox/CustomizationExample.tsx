import { useState } from 'react';
import { Checkbox } from 'dialca-ui';

export const CustomizationExample: React.FC = () => {
    const [extendedChecked, setExtendedChecked] = useState(true);
    const [customChecked, setCustomChecked] = useState(false);
    const [customIndeterminate, setCustomIndeterminate] = useState(true);

    const extendedVariants = {
        'premium-card': {
            normal: {
                container: "border-2 border-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
                wrapper: "space-y-2",
                checkbox: "border-purple-300 shadow-lg",
                background: "bg-gradient-to-r from-purple-500 to-pink-500",
                icon: "text-white",
                label: "text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                description: "text-purple-600 dark:text-purple-300 font-medium"
            },
            hover: {
                container: "border-purple-400 shadow-xl transform scale-105 transition-all duration-300",
                checkbox: "border-purple-400 shadow-purple-200",
                background: "bg-gradient-to-r from-purple-600 to-pink-600",
                label: "from-purple-700 to-pink-700"
            },
            checked: {
                checkbox: "border-purple-500 shadow-lg shadow-purple-300",
                background: "bg-gradient-to-r from-purple-500 to-pink-500",
                icon: "text-white scale-110"
            }
        }
    };
    const customVariants = {
        'gaming': {
            normal: {
                container: `
                    relative flex gap-4 p-4 bg-gradient-to-br from-gray-900 via-green-900 to-black 
                    rounded-xl border border-green-500/30 cursor-pointer group overflow-hidden
                    hover:border-green-400/50 transition-all duration-300
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                    before:via-green-500/10 before:to-transparent before:translate-x-[-100%] 
                    hover:before:translate-x-[100%] before:transition-transform before:duration-1000
                `,
                wrapper: "relative z-10",
                checkbox: `
                    relative w-8 h-8 rounded-lg transition-all duration-300 ease-out
                    group-hover:scale-110 group-hover:rotate-3 group-active:scale-95
                `,
                background: `
                    absolute inset-0 rounded-lg border-2 transition-all duration-300
                    bg-gradient-to-br from-gray-800 to-gray-700 border-green-400/50
                    shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40
                    group-hover:shadow-xl
                `,
                icon: `
                    absolute inset-0 m-auto w-5 h-5 text-green-300 transition-all duration-500 ease-out
                    scale-0 opacity-0
                `,
                label: `
                    text-green-100 font-bold text-lg group-hover:text-white transition-colors duration-300
                    drop-shadow-lg uppercase tracking-wider
                `,
                description: `
                    text-green-300/80 text-sm mt-1 group-hover:text-green-200 transition-colors duration-300
                    uppercase tracking-widest
                `,
            },
            checked: {
                background: `
                    bg-gradient-to-br from-green-600 via-green-500 to-green-700 
                    border-green-300 shadow-2xl shadow-green-500/60
                    animate-pulse
                `,
                icon: `
                    scale-100 rotate-0 opacity-100 text-black drop-shadow-xl
                    animate-bounce
                `,
                container: `
                    border-green-400/80 shadow-lg shadow-green-500/30
                `,
            },
            hover: {
                checkbox: "scale-110 rotate-3",
                background: "shadow-2xl shadow-green-500/50",
            },
            indeterminate: {
                background: `
                    bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 
                    border-amber-300 shadow-2xl shadow-amber-500/60
                `,
                icon: `
                    scale-100 opacity-100 text-black
                `,
            }
        }
    };

    return (
        <div className="space-y-10">
\            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Extending Existing Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Creating a premium card style by extending the default variant with gradients and enhanced styling.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-start justify-center gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="max-w-sm">
                        <Checkbox 
                            variant="premium-card"
                            variants={extendedVariants}
                            label="Premium Features"
                            description="Unlock advanced functionality with beautiful gradients"
                            checked={extendedChecked}
                            onCheckedChange={setExtendedChecked}
                            size="lg"
                        />
                    </div>
                    
                    <div className="max-w-sm">
                        <Checkbox 
                            variant="premium-card"
                            variants={extendedVariants}
                            label="Extended Disabled"
                            description="Shows disabled state styling"
                            checked={true}
                            disabled
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Gaming Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Creating a gaming-themed variant with neon effects, animations and cyberpunk styling.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-start justify-center gap-6 p-8 bg-black rounded-lg">
                    <div className="max-w-sm">
                        <Checkbox 
                            variant="gaming"
                            variants={customVariants}
                            label="Enable Gaming Mode"
                            description="Access the digital realm"
                            checked={customChecked}
                            onCheckedChange={setCustomChecked}
                        />
                    </div>
                    
                    <div className="max-w-sm">
                        <Checkbox 
                            variant="gaming"
                            variants={customVariants}
                            label="Quantum State"
                            description="Neither true nor false"
                            indeterminate={customIndeterminate}
                            onCheckedChange={() => {
                                setCustomIndeterminate(false);
                                // Handle the checked state after indeterminate
                            }}
                        />
                    </div>
                    
                    <div className="max-w-sm">
                        <Checkbox 
                            variant="gaming"
                            variants={customVariants}
                            label="System Locked"
                            description="Access denied"
                            checked={true}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};