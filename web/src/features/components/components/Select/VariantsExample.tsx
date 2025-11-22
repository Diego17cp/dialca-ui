import { useState } from 'react';
import { Select } from 'dialca-ui';
import { FaGlobe, FaCog, FaUser } from 'react-icons/fa';

export const SelectVariantsExample: React.FC = () => {
    const [defaultSelect, setDefaultSelect] = useState('');
    const [darkSelect, setDarkSelect] = useState('work');
    const [minimalSelect, setMinimalSelect] = useState('');

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
        { value: 'de', label: 'Germany', icon: <FaGlobe /> },
        { value: 'fr', label: 'France', icon: <FaGlobe /> },
    ];

    const categoryOptions = [
        { value: 'work', label: 'Work' },
        { value: 'personal', label: 'Personal' },
        { value: 'urgent', label: 'Urgent' },
        { value: 'education', label: 'Education' },
    ];

    const priorityOptions = [
        { value: 'low', label: 'Low Priority' },
        { value: 'medium', label: 'Medium Priority' },
        { value: 'high', label: 'High Priority' },
        { value: 'critical', label: 'Critical' },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard select with white background and border styling.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Select Country"
                        value={defaultSelect}
                        options={countryOptions}
                        onChange={(e) => setDefaultSelect(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Dark
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Dark theme select with dark background and light text.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Select Category"
                        value={darkSelect}
                        options={categoryOptions}
                        onChange={(e) => setDarkSelect(e.target.value)}
                        variant="dark"
                        icon={<FaCog />}
                        required
                    />
                </div>
            </div>
            <div className="space-y-4 mb-50">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Minimal
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Clean minimal design with bottom border only and transparent background.
                    </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Priority Level"
                        value={minimalSelect}
                        options={priorityOptions}
                        onChange={(e) => setMinimalSelect(e.target.value)}
                        variant="minimal"
                        icon={<FaUser />}
                        required
                    />
                </div>
            </div>
        </div>
    );
};