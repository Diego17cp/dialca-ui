import { useState } from 'react';
import { RadioInput } from 'dialca-ui';

export const RadioVariantsExample: React.FC = () => {
    const [defaultChoice, setDefaultChoice] = useState("");
    const [cardChoice, setCardChoice] = useState("");
    const [minimalChoice, setMinimalChoice] = useState("");
    const [darkChoice, setDarkChoice] = useState("");

    return (
        <div className="space-y-8">
            {/* Default Variant */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard radio buttons with default styling.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <RadioInput
                        name="default"
                        value={defaultChoice}
                        onChange={setDefaultChoice}
                        options={[
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                            { value: "option3", label: "Option 3" }
                        ]}
                        classes={{
                            text: "dark:text-gray-300!",
                        }}
                    />
                </div>
            </div>

            {/* Card Variant */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Card
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Radio buttons with card-style container and borders.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <RadioInput
                        name="card"
                        value={cardChoice}
                        onChange={setCardChoice}
                        variant="card"
                        options={[
                            { 
                                value: "starter", 
                                label: "Starter Plan", 
                                description: "Perfect for individuals getting started" 
                            },
                            { 
                                value: "professional", 
                                label: "Professional Plan", 
                                description: "Best for growing teams and businesses" 
                            },
                            { 
                                value: "enterprise", 
                                label: "Enterprise Plan", 
                                description: "Advanced features for large organizations" 
                            }
                        ]}
                        classes={{
                            text: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Minimal
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Compact radio buttons with smaller size and reduced spacing.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <RadioInput
                        name="minimal"
                        value={minimalChoice}
                        onChange={setMinimalChoice}
                        variant="minimal"
                        options={[
                            { value: "small", label: "Small" },
                            { value: "medium", label: "Medium" },
                            { value: "large", label: "Large" },
                            { value: "extra-large", label: "Extra Large" }
                        ]}
                        classes={{
                            text: "dark:text-gray-300!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Dark
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Radio buttons with dark theme colors and styling.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                    <RadioInput
                        name="dark"
                        value={darkChoice}
                        onChange={setDarkChoice}
                        variant="dark"
                        options={[
                            { 
                                value: "theme1", 
                                label: "Dark Theme", 
                                description: "Professional dark appearance" 
                            },
                            { 
                                value: "theme2", 
                                label: "Midnight Theme", 
                                description: "Deep dark with contrast highlights" 
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};