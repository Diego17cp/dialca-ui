import React, { useState } from 'react';
import { SearchableSelect } from 'dialca-ui';
import { FaUser, FaGlobe, FaBuilding } from 'react-icons/fa';

export const SearchableSelectSizesExample: React.FC = () => {
    const [smallSelect, setSmallSelect] = useState('');
    const [mediumSelect, setMediumSelect] = useState('ca');
    const [largeSelect, setLargeSelect] = useState('');

    const userOptions = [
        { value: 'john', label: 'John Doe', icon: <FaUser /> },
        { value: 'jane', label: 'Jane Smith', icon: <FaUser /> },
        { value: 'mike', label: 'Mike Johnson', icon: <FaUser /> },
        { value: 'sarah', label: 'Sarah Wilson', icon: <FaUser /> },
        { value: 'david', label: 'David Brown', icon: <FaUser /> },
        { value: 'emma', label: 'Emma Davis', icon: <FaUser /> },
    ];

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
        { value: 'de', label: 'Germany', icon: <FaGlobe /> },
        { value: 'fr', label: 'France', icon: <FaGlobe /> },
        { value: 'it', label: 'Italy', icon: <FaGlobe /> },
        { value: 'es', label: 'Spain', icon: <FaGlobe /> },
        { value: 'jp', label: 'Japan', icon: <FaGlobe /> },
    ];

    const departmentOptions = [
        { value: 'engineering', label: 'Engineering Department', icon: <FaBuilding /> },
        { value: 'marketing', label: 'Marketing Department', icon: <FaBuilding /> },
        { value: 'sales', label: 'Sales Department', icon: <FaBuilding /> },
        { value: 'hr', label: 'Human Resources', icon: <FaBuilding /> },
        { value: 'finance', label: 'Finance Department', icon: <FaBuilding /> },
        { value: 'operations', label: 'Operations Department', icon: <FaBuilding /> },
    ];

    const classes = {
		label: "dark:text-gray-300!",
		input: "dark:bg-gray-800! dark:text-white! dark:border-gray-700! dark:hover:border-gray-600!",
		dropdown: "dark:bg-gray-800! dark:border-gray-700!",
		option: "dark:text-gray-300! dark:hover:bg-gray-700!",
        clearButton: "dark:text-gray-400! dark:hover:text-white!",
	};

    return (
        <div className="space-y-8 w-full">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Small Size (sm)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Compact searchable select for tight spaces and dense layouts.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="max-w-sm">
                        <SearchableSelect
                            label="Select User"
                            options={userOptions}
                            value={smallSelect}
                            onChange={(value) => setSmallSelect(value)}
                            placeholder="Search users..."
                            size="sm"
                            isClearable={true}
                            noResultsText="User not found"
                            classes={classes}
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Medium Size (md) - Default
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard size searchable select for most use cases.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="max-w-md">
                        <SearchableSelect
                            label="Select Country"
                            options={countryOptions}
                            value={mediumSelect}
                            onChange={(value) => setMediumSelect(value)}
                            placeholder="Search countries..."
                            size="md"
                            isClearable
                            noResultsText="Country not found"
                            classes={classes}
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Large Size (lg)
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Prominent searchable select for emphasis and better accessibility.
                    </p>
                </div>
                
                <div className="p-4 mb-50 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="max-w-lg">
                        <SearchableSelect
                            label="Select Department"
                            options={departmentOptions}
                            value={largeSelect}
                            onChange={(value) => setLargeSelect(value)}
                            placeholder="Search departments..."
                            size="lg"
                            isClearable
                            noResultsText="Department not found"
                            classes={classes}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};