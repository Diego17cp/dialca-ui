import { useState } from 'react';
import { Switch } from 'dialca-ui';

export const SwitchVariantsExample: React.FC = () => {
    const [defaultSwitch, setDefaultSwitch] = useState(false);
    const [minimalSwitch, setMinimalSwitch] = useState(true);
    const [iosSwitch, setIosSwitch] = useState(false);
    const [cardSwitch, setCardSwitch] = useState(true);
    const [toggleSwitch, setToggleSwitch] = useState(false);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard switch with card background and gradient effects.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={defaultSwitch}
                        onToggle={setDefaultSwitch}
                        label="Default Switch"
                        description="Standard variant with card styling and smooth animations"
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
                        Minimal
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Clean inline switch without background container.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={minimalSwitch}
                        onToggle={setMinimalSwitch}
                        variant="minimal"
                        label="Minimal Switch"
                        description="Clean design without card background"
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
                        iOS
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Switch styled to match iOS design patterns.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={iosSwitch}
                        onToggle={setIosSwitch}
                        variant="ios"
                        label="iOS Style Switch"
                        description="Apple-inspired design with green accent"
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
                        Card
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Full-width card layout with border and background effects.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={cardSwitch}
                        onToggle={setCardSwitch}
                        variant="card"
                        label="Card Switch"
                        description="Full-width card design with hover effects"
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
                        Toggle
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Square toggle with ON/OFF text labels.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Switch
                        enabled={toggleSwitch}
                        onToggle={setToggleSwitch}
                        variant="toggle"
                        label="Toggle Switch"
                        description="Square design with ON/OFF text indicators"
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