import { useState } from 'react';
import { Switch } from 'dialca-ui';
import { FaRocket, FaLock, FaUnlock } from 'react-icons/fa';

export const SwitchCustomExample: React.FC = () => {
    const [extendedChoice, setExtendedChoice] = useState(false);
    const [customChoice, setCustomChoice] = useState(true);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Extended Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Extends default styles with custom colors and effects.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={extendedChoice}
                        onToggle={setExtendedChoice}
                        variant="rocket"
                        extendDefault={true}
                        variants={{
                            rocket: {
                                normal: {
                                    container: "p-4! bg-gradient-to-r from-orange-50 to-red-50! border border-orange-200!",
                                    track: "w-14! h-8! bg-gradient-to-r from-orange-200 to-red-200! border-2 border-orange-300!",
                                    thumb: "w-6! h-6! bg-gradient-to-br from-orange-400 to-red-500! shadow-lg shadow-orange-500/50!",
                                    label: "text-orange-800! font-bold!",
                                    description: "text-orange-600!"
                                },
                                enabled: {
                                    container: "bg-gradient-to-r from-orange-100 to-red-100! border-orange-400!",
                                    trackOverlay: "bg-gradient-to-r! from-orange-500! to-red-600! border-orange-500!",
                                },
                                focused: {
                                    track: "ring-2! ring-orange-400/50! ring-offset-2! outline-none!"
                                }
                            }
                        }}
                        label="🚀 Rocket Mode"
                        description="Enhanced with custom orange rocket styling"
                        enabledIcon={<FaRocket className="text-white text-xs" />}
                        classes={{
                            label: "dark:text-orange-300!",
                            description: "dark:text-orange-400!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Complete Custom
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Fully custom cyberpunk design built from scratch.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={customChoice}
                        onToggle={setCustomChoice}
                        variant="cyberpunk"
                        extendDefault={false}
                        variants={{
                            cyberpunk: {
                                normal: {
                                    container: `
                                        relative flex items-center gap-6 p-6 
                                        bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
                                        rounded-xl border-2 border-cyan-500/30 overflow-hidden
                                        before:absolute before:inset-0 before:bg-gradient-to-r 
                                        before:from-transparent before:via-cyan-400/20 before:to-transparent 
                                        before:translate-x-[-100%] hover:before:translate-x-[100%] 
                                        before:transition-transform before:duration-1000
                                        hover:border-cyan-400/60 transition-all duration-300
                                        shadow-lg shadow-cyan-500/20 group cursor-pointer
                                    `,
                                    wrapper: "relative z-10",
                                    track: `
                                        relative block w-16 h-8 rounded-full transition-all duration-500
                                        bg-gradient-to-r from-gray-700 to-gray-800
                                        border-2 border-cyan-500/50 cursor-pointer
                                        shadow-inner shadow-gray-900/50
                                        group-hover:border-cyan-400 group-hover:shadow-lg
                                        group-hover:shadow-cyan-500/30
                                    `,
                                    thumb: `
                                        absolute top-0.5 left-0.5 w-6 h-6
                                        bg-gradient-to-br from-cyan-400 to-blue-500 
                                        rounded-full shadow-lg transition-all duration-500 ease-out
                                        flex items-center justify-center
                                        border border-cyan-300/50 transform
                                        group-hover:scale-110 group-hover:shadow-xl
                                        group-hover:shadow-cyan-500/50
                                    `,
                                    thumbInner: "hidden",
                                    trackOverlay: `
                                        absolute inset-0 rounded-full transition-all duration-500 z-0
                                        opacity-0 bg-gradient-to-r from-cyan-600 to-blue-600
                                    `,
                                    label: `
                                        text-cyan-100 font-bold text-lg relative z-10
                                        group-hover:text-white transition-colors duration-300
                                        drop-shadow-lg font-mono tracking-wide
                                    `,
                                    description: `
                                        text-cyan-300/80 text-sm mt-1 relative z-10
                                        group-hover:text-cyan-200 transition-colors duration-300
                                        font-mono tracking-wide
                                    `
                                },
                                enabled: {
                                    track: `
                                        bg-gradient-to-r from-cyan-600 to-blue-600
                                        border-cyan-400 shadow-lg shadow-cyan-500/40
                                    `,
                                    thumb: `
                                        translate-x-8 bg-gradient-to-br from-cyan-300 to-blue-400
                                        border-cyan-200 shadow-xl shadow-cyan-500/60
                                        before:absolute before:inset-0 before:bg-white/20 
                                        before:rounded-full before:animate-pulse
                                    `,
                                    trackOverlay: `
                                        opacity-100 animate-pulse
                                    `,
                                    container: `
                                        border-cyan-400/80 shadow-xl shadow-cyan-500/40
                                    `,
                                    label: `
                                        text-cyan-50 scale-105
                                    `,
                                    description: `
                                        text-cyan-200
                                    `
                                }
                            }
                        }}
                        label="🔒 Security Protocol"
                        description="Cyberpunk enhanced neural interface"
                        enabledIcon={<FaUnlock className="text-cyan-100 text-xs drop-shadow-lg" />}
                        disabledIcon={<FaLock className="text-cyan-300 text-xs drop-shadow-lg" />}
                        classes={{
                            label: "dark:text-cyan-200!",
                            description: "dark:text-cyan-300!",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};