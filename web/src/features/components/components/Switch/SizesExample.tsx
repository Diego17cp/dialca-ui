import { useState } from 'react';
import { Switch } from 'dialca-ui';

export const SwitchSizesExample: React.FC = () => {
    const [smallEnabled, setSmallEnabled] = useState(false);
    const [mediumEnabled, setMediumEnabled] = useState(true);
    const [largeEnabled, setLargeEnabled] = useState(false);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Small (sm)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Compact switch for tight spaces or inline usage.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={smallEnabled}
                        onToggle={setSmallEnabled}
                        size="sm"
                        label="Small switch"
                        description="Compact size for minimal space"
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
                        Medium (md) - Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard switch size for most use cases.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={mediumEnabled}
                        onToggle={setMediumEnabled}
                        size="md"
                        label="Medium switch"
                        description="Default size for general usage"
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
                        Large (lg)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Larger switch for emphasis or accessibility.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={largeEnabled}
                        onToggle={setLargeEnabled}
                        size="lg"
                        label="Large switch"
                        description="Bigger size for better visibility"
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