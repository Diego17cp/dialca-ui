import { useState } from 'react';
import { Switch } from 'dialca-ui';

export const BasicSwitchExample: React.FC = () => {
    const [notifications, setNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Basic Switch
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Simple on/off toggle switch.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={notifications}
                        onToggle={setNotifications}
                        classes={{
                            container: "dark:bg-gray-700/50!",
                            label: "dark:text-gray-300!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Switch with Label
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch component with descriptive label text.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={darkMode}
                        onToggle={setDarkMode}
                        label="Dark Mode"
                        classes={{
                            container: "dark:bg-gray-700/50!",
                            label: "dark:text-gray-300!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Switch with Description
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch with both label and description for better context.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={autoSave}
                        onToggle={setAutoSave}
                        label="Auto Save"
                        description="Automatically save your work every few minutes"
                        classes={{
                            container: "dark:bg-gray-700/50!",
                            label: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};