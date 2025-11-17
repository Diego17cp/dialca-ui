import React, { useState } from 'react';
import { CharCounter } from 'dialca-ui';

export const CustomizationExample: React.FC = () => {
    const [compactText, setCompactText] = useState("Short text");
    const [elegantText, setElegantText] = useState("This is a longer message to demonstrate the elegant styling with more visual impact.");
    const [minimalText, setMinimalText] = useState("Clean and minimal design approach");

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Different Sizes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Various sizes for different use cases and space constraints.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8">
                    <div className="flex flex-col items-center space-y-2">
                        <CharCounter 
                            value="Sample text"
                            maxLength={50}
                            size={24}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Small (24px)</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <CharCounter 
                            value="Sample text"
                            maxLength={50}
                            size={32}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Default (32px)</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <CharCounter 
                            value="Sample text"
                            maxLength={50}
                            size={48}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Large (48px)</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <CharCounter 
                            value="Sample text"
                            maxLength={50}
                            size={64}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Extra Large (64px)</span>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Styling Examples
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Different styling approaches for various design systems and use cases.
                    </p>
                </div>                
                <div className="space-y-3">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300">Compact Style</h5>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={compactText}
                                onChange={(e) => setCompactText(e.target.value)}
                                placeholder="Enter a short message..."
                                className="w-full p-2 text-sm border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <CharCounter 
                            value={compactText}
                            maxLength={50}
                            size={24}
                            classes={{
                                container: "opacity-80! hover:opacity-100! transition-opacity",
                                text: "text-xs font-medium"
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300">Elegant Style</h5>
                    <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex-1">
                            <textarea
                                value={elegantText}
                                onChange={(e) => setElegantText(e.target.value)}
                                placeholder="Write your elegant message here..."
                                className="w-full p-4 border border-blue-200 rounded-lg resize-none dark:bg-gray-900 dark:text-white dark:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows={3}
                            />
                        </div>
                        <CharCounter 
                            value={elegantText}
                            maxLength={200}
                            size={48}
                            classes={{
                                container: "drop-shadow-lg! hover:drop-shadow-xl! transition-all duration-300",
                                text: "font-bold text-sm text-blue-700! dark:text-blue-300!"
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300">Minimal Style</h5>
                    <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg dark:text-white">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={minimalText}
                                onChange={(e) => setMinimalText(e.target.value)}
                                placeholder="Clean and simple..."
                                className="w-full p-3 border-0 border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
                            />
                        </div>
                        <CharCounter 
                            value={minimalText}
                            maxLength={100}
                            size={36}
                            classes={{
                                container: "dark:border-gray-600! bg-white dark:bg-gray-800! shadow-sm",
                                text: "text-gray-600! dark:text-gray-300 font-mono text-xs"
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300">Gaming Style</h5>
                    <div className="flex items-start gap-4 p-4 bg-black rounded-lg border border-green-500/30">
                        <div className="flex-1">
                            <input
                                type="text"
                                value="SYSTEM_READY"
                                readOnly
                                className="w-full p-3 bg-gray-900 border border-green-500/50 rounded-md text-green-400 font-mono text-sm focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <CharCounter 
                            value="SYSTEM_READY"
                            maxLength={50}
                            size={40}
                            classes={{
                                container: "bg-[rgba(34,197,94,0.3)]! hover:bg-[rgba(34,197,94,0.5)]! transition-all duration-300",
                                text: "text-green-400! font-mono! font-bold text-xs! tracking-wider"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};