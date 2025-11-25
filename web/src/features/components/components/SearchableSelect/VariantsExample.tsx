import React, { useState } from 'react';
import { SearchableSelect } from 'dialca-ui';
import { FaGlobe, FaCog, FaUser } from 'react-icons/fa';

export const SearchableSelectVariantsExample: React.FC = () => {
    const [defaultSelect, setDefaultSelect] = useState('');
    const [darkSelect, setDarkSelect] = useState('work');
    const [minimalSelect, setMinimalSelect] = useState('');

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
        { value: 'de', label: 'Germany', icon: <FaGlobe /> },
        { value: 'fr', label: 'France', icon: <FaGlobe /> },
        { value: 'it', label: 'Italy', icon: <FaGlobe /> },
        { value: 'jp', label: 'Japan', icon: <FaGlobe /> },
        { value: 'au', label: 'Australia', icon: <FaGlobe /> },
    ];

    const categoryOptions = [
        { value: 'work', label: 'Work Category', icon: <FaCog /> },
        { value: 'personal', label: 'Personal Category', icon: <FaCog /> },
        { value: 'urgent', label: 'Urgent Category', icon: <FaCog /> },
        { value: 'education', label: 'Education Category', icon: <FaCog /> },
        { value: 'finance', label: 'Finance Category', icon: <FaCog /> },
        { value: 'health', label: 'Health Category', icon: <FaCog /> },
    ];

    const priorityOptions = [
        { value: 'low', label: 'Low Priority', icon: <FaUser /> },
        { value: 'medium', label: 'Medium Priority', icon: <FaUser /> },
        { value: 'high', label: 'High Priority', icon: <FaUser /> },
        { value: 'critical', label: 'Critical Priority', icon: <FaUser /> },
        { value: 'urgent', label: 'Urgent Priority', icon: <FaUser /> },
    ];
    
    const classes = {
		label: "dark:text-gray-300!"
	};

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard searchable select with white background and border styling.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <SearchableSelect
                        label="Select Country"
                        options={countryOptions}
                        value={defaultSelect}
                        onChange={(value) => setDefaultSelect(value)}
                        placeholder="Search countries..."
                        isClearable
                        noResultsText="No countries found"
                        classes={classes}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Dark Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Dark theme searchable select with dark background and light text.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-900 rounded-lg">
                    <SearchableSelect
                        label="Select Category"
                        options={categoryOptions}
                        value={darkSelect}
                        onChange={(value) => setDarkSelect(value)}
                        placeholder="Search categories..."
                        variant="dark"
                        isClearable
                        noResultsText="No categories found"
                    />
                </div>
            </div>
            <div className="space-y-4 mb-50">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Minimal Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Clean minimal design with bottom border only and transparent background.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <SearchableSelect
                        label="Priority Level"
                        options={priorityOptions}
                        value={minimalSelect}
                        onChange={(value) => setMinimalSelect(value)}
                        placeholder="Search priorities..."
                        variant="minimal"
                        isClearable
                        noResultsText="No priorities found"
                        classes={classes}
                    />
                </div>
            </div>
        </div>
    );
};