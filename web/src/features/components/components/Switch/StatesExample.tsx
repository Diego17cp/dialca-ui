import React, { useState } from 'react';
import { Switch } from 'dialca-ui';

export const SwitchStatesExample: React.FC = () => {
    const [errorSwitch, setErrorSwitch] = useState(false);
    const [loadingSwitch, setLoadingSwitch] = useState(false);

    const handleLoadingToggle = (enabled: boolean) => {
        if (enabled) {
            setTimeout(() => {
                setLoadingSwitch(false);
            }, 2000);
        }
        setLoadingSwitch(enabled);
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Error State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch component displaying validation errors.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-4">
                    <Switch
                        enabled={errorSwitch}
                        onToggle={setErrorSwitch}
                        hasErrors={true}
                        errorMessage="This setting requires administrator privileges"
                        label="Admin Mode"
                        description="Enable advanced administrative features"
                        classes={{
                            error: "dark:text-red-400!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch component in disabled state (non-interactive).
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-4">
                    <Switch
                        enabled={false}
                        onToggle={() => {}}
                        disabled={true}
                        label="Disabled Feature"
                        description="This feature is not available in your current plan"
                        classes={{
                            label: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                    
                    <Switch
                        enabled={true}
                        onToggle={() => {}}
                        disabled={true}
                        label="Disabled but Enabled"
                        description="Shows how a disabled switch looks when it's in enabled state"
                        classes={{
                            label: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Loading State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch with loading spinner during async operations.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={loadingSwitch}
                        onToggle={handleLoadingToggle}
                        loading={loadingSwitch}
                        label="API Integration"
                        description="Toggle will show loading spinner for 2 seconds when enabled"
                        classes={{
                            container: "dark:bg-gray-700/50!",
                            label: "dark:text-gray-300!",
                            description: "dark:text-gray-400!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Confirmation Dialog
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch that shows confirmation dialog for critical actions.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={false}
                        onToggle={() => {}}
                        confirmationMessage="Are you sure you want to delete all user data? This action cannot be undone."
                        label="Delete All Data"
                        description="This will permanently remove all user information"
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