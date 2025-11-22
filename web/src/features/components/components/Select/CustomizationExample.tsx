import { useState } from 'react';
import { Select } from 'dialca-ui';
import { FaRocket, FaLock } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';

export const SelectCustomExample: React.FC = () => {
    const [extendedChoice, setExtendedChoice] = useState('');
    const [customChoice, setCustomChoice] = useState('us');

    const countryOptions = [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
    ];

    const securityOptions = [
        { value: 'low', label: 'Low Security', icon: <FaShield /> },
        { value: 'medium', label: 'Medium Security', icon: <FaShield /> },
        { value: 'high', label: 'High Security', icon: <FaShield /> },
        { value: 'maximum', label: 'Maximum Security', icon: <FaLock /> },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Extended Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Extends default styles with custom rocket theme colors and effects.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="🚀 Launch Configuration"
                        value={extendedChoice}
                        options={countryOptions}
                        onChange={(e) => setExtendedChoice(e.target.value)}
                        variant="rocket"
                        extendDefault={true}
                        variants={{
                            rocket: {
                                normal: {
                                    input: "w-full pr-4! bg-gradient-to-r from-orange-100 outline-none! shadow-0! to-red-100! border-2 border-orange-300! rounded-lg! text-orange-800! font-semibold!",
                                    label: "text-amber-900! font-bold! text-lg! bg-gradient-to-r from-orange-200 to-red-200! px-2! py-1! rounded-full! shadow-md!",
                                    menu: "bg-gradient-to-br from-orange-50 to-red-50! border-2 border-orange-300! rounded-lg! shadow-xl shadow-orange-500/30!",
                                    option: "hover:bg-gradient-to-r hover:from-orange-200 hover:to-red-200! text-orange-800! font-medium!",
                                    selectedOption: "bg-gradient-to-r from-orange-300 to-red-300! text-orange-900! font-bold!"
                                },
                                focused: {
                                    container: "border-orange-400! shadow-lg shadow-orange-500/50!",
                                    input: "border-orange-400! ring-4 ring-orange-500/30! shadow-none!",
                                    label: "text-orange-800! scale-105!"
                                },
                                open: {
                                    input: "rounded-b-none! border-b-orange-400!",
                                    menu: "shadow-2xl shadow-orange-500/40!"
                                }
                            }
                        }}
                        placeholder="Select launch destination..."
                        icon={<FaRocket className="text-orange-600" />}
                        required
                        classes={{
                            container: "dark:bg-gradient-to-r dark:from-orange-900/20 dark:to-red-900/20!",
                            label: "dark:text-orange-300!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4 mb-50">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 overflow-x-">
                        Complete Custom
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Fully custom cyberpunk security panel design built from scratch.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="🔒 Security Protocol Level"
                        value={customChoice}
                        options={securityOptions}
                        onChange={(e) => setCustomChoice(e.target.value)}
                        variant="cyberpunk"
                        extendDefault={false}
                        variants={{
                            cyberpunk: {
                                normal: {
                                    container: `
                                        relative flex flex-col gap-4 p-6 
                                        bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
                                        rounded-xl border-2 border-cyan-500/30
                                        
                                        hover:border-cyan-400/60 transition-all duration-300
                                        shadow-lg shadow-cyan-500/20 group font-mono
                                    `,
                                    input: `
                                        relative w-full p-4 bg-gray-800/80 backdrop-blur-sm
                                        border-2 border-cyan-500/50 rounded-xl text-cyan-100 font-mono
                                        cursor-pointer transition-all duration-300 flex items-center
                                        hover:border-cyan-400 hover:bg-gray-700/80 focus:outline-none
                                        focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30
                                        shadow-inner shadow-gray-900/50
                                    `,
                                    label: `
                                        absolute -top-3 left-6 px-3 py-1 z-20 font-mono font-bold text-sm
                                        bg-gradient-to-r from-cyan-400 to-blue-500 text-black 
                                        rounded-full shadow-lg border border-cyan-300/30
                                        transition-all duration-300 drop-shadow-lg
                                    `,
                                    arrow: `
                                        absolute right-8 top-1/2 -translate-y-1/2 z-10
                                        text-cyan-400 transition-all duration-300 pointer-events-none
                                        hover:text-cyan-300 drop-shadow-lg
                                    `,
                                    menu: `
                                        absolute top-full left-0 right-0 mt-2 z-50 font-mono
                                        bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-sm
                                        border-2 border-cyan-400/40 rounded-xl shadow-2xl shadow-cyan-500/30
                                        max-h-60 overflow-y-auto
                                    `,
                                    option: `
                                        flex items-center gap-3 p-4 text-cyan-100 cursor-pointer
                                        transition-all duration-300 border-b border-cyan-500/20 last:border-b-0
                                        hover:bg-cyan-400/20 hover:text-cyan-50 hover:translate-x-2
                                        first:rounded-t-xl last:rounded-b-xl relative overflow-hidden
                                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent
                                        before:via-cyan-400/10 before:to-transparent before:translate-x-[-100%]
                                        hover:before:translate-x-[100%] before:transition-transform before:duration-500
                                        font-mono text-sm tracking-wide
                                    `,
                                    selectedOption: `
                                        bg-gradient-to-r from-cyan-600/50 to-blue-600/50 text-cyan-50
                                        border-l-4 border-cyan-400 font-bold
                                        shadow-lg shadow-cyan-500/20
                                        before:bg-cyan-400/20
                                    `
                                },
                                focused: {
                                    container: `
                                        border-cyan-400/80 shadow-xl shadow-cyan-500/40
                                        before:animate-pulse
                                    `,
                                    input: `
                                        border-cyan-400 bg-gray-700/90 ring-4 ring-cyan-500/30
                                        text-cyan-50
                                    `,
                                    label: `
                                        scale-110 shadow-xl shadow-cyan-500/50
                                        bg-gradient-to-r from-cyan-300 to-blue-400
                                    `,
                                    arrow: `
                                        text-cyan-300 scale-110
                                    `
                                },
                                open: {
                                    input: `
                                        rounded-b-none border-b-cyan-400/80
                                    `,
                                    arrow: `
                                        rotate-180 text-cyan-300 scale-110
                                    `,
                                    menu: `
                                        opacity-100 visible translate-y-0
                                    `
                                },
                                error: {
                                    container: `
                                        border-red-500/50 shadow-red-500/30
                                    `,
                                    input: `
                                        border-red-500/60 focus:border-red-400 focus:ring-red-500/30
                                    `,
                                    label: `
                                        bg-gradient-to-r from-red-500 to-pink-500 text-white
                                    `
                                }
                            }
                        }}
                        placeholder="Select security level..."
                        required
                        classes={{
                            container: "dark:bg-gradient-to-br dark:from-gray-900/50 dark:via-blue-900/30 dark:to-purple-900/50!",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};