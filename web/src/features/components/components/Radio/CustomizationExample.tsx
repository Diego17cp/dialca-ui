import { useState } from 'react';
import { RadioInput } from 'dialca-ui';

export const RadioCustomExample: React.FC = () => {
    const [extendedChoice, setExtendedChoice] = useState("");
    const [customChoice, setCustomChoice] = useState("");

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Extended Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Extends default styles with custom colors and sizes.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <RadioInput
                        name="extended"
                        value={extendedChoice}
                        onChange={setExtendedChoice}
                        variant="purple"
                        extendDefault={true}
                        variants={{
                            purple: {
                                normal: {
                                    container: "gap-4!",
                                    radio: "w-6! h-6! border-purple-300! hover:border-purple-500!",
                                    text: "text-purple-700! font-semibold! dark:text-purple-300!",
                                    description: "text-purple-500! dark:text-purple-400!"
                                },
                                checked: {
                                    radio: "border-purple-600! bg-purple-600!",
                                    text: "text-purple-800! dark:text-purple-200!"
                                }
                            }
                        }}
                        options={[
                            { 
                                value: "premium", 
                                label: "Premium Choice", 
                                description: "Enhanced with custom purple styling" 
                            },
                            { 
                                value: "standard", 
                                label: "Standard Choice", 
                                description: "Regular option with purple accent" 
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Complete Custom
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Fully custom design built from scratch with no default styling.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <RadioInput
                        name="custom"
                        value={customChoice}
                        onChange={setCustomChoice}
                        variant="modern"
                        extendDefault={false}
                        variants={{
                            modern: {
                                normal: {
                                    container: "flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer",
                                    radio: "w-5 h-5 border-2 border-blue-300 rounded-full mr-3 relative transition-all",
                                    label: "flex-1",
                                    text: "font-medium text-gray-800",
                                    description: "text-sm text-gray-500 mt-1"
                                },
                                checked: {
                                    container: "border-blue-500 bg-blue-50",
                                    radio: "border-blue-500 bg-blue-500 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all",
                                    text: "text-blue-800 font-semibold"
                                }
                            }
                        }}
                        options={[
                            { 
                                value: "modern1", 
                                label: "Modern Design", 
                                description: "Clean and minimal approach" 
                            },
                            { 
                                value: "modern2", 
                                label: "Contemporary Style", 
                                description: "Fresh and updated look" 
                            }
                        ]}
                        classes={{
                            text: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};