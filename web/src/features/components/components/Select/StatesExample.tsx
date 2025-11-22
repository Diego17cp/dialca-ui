import React, { useState } from 'react';
import { Select } from 'dialca-ui';
import { FaUser, FaCog, FaSpinner, FaGlobe } from 'react-icons/fa';

export const SelectStatesExample: React.FC = () => {
    const [errorSelect, setErrorSelect] = useState('');
    const [loadingSelect, setLoadingSelect] = useState('');
    const [requiredSelect, setRequiredSelect] = useState('');

    const categoryOptions = [
        { value: 'work', label: 'Work' },
        { value: 'personal', label: 'Personal' },
        { value: 'urgent', label: 'Urgent' },
    ];

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
        { value: 'fr', label: 'France', icon: <FaGlobe /> },
    ];

    const priorityOptions = [
        { value: 'low', label: 'Low Priority' },
        { value: 'medium', label: 'Medium Priority' },
        { value: 'high', label: 'High Priority', disabled: true },
        { value: 'critical', label: 'Critical', disabled: true },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Error State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Select component displaying validation errors.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Select Category"
                        value={errorSelect}
                        options={categoryOptions}
                        onChange={(e) => setErrorSelect(e.target.value)}
                        hasErrors={true}
                        errorMessage="Please select a valid category from the list"
                        icon={<FaUser />}
                        placeholder="Choose category..."
                        required
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Select component in disabled state (non-interactive).
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-4">
                    <Select
                        label="Disabled Empty"
                        value=""
                        options={categoryOptions}
                        onChange={() => {}}
                        disabled={true}
                        placeholder="Cannot select..."
                        icon={<FaCog />}
                    />
                    
                    <Select
                        label="Disabled with Value"
                        value="work"
                        options={categoryOptions}
                        onChange={() => {}}
                        disabled={true}
                        icon={<FaCog />}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Loading State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Select with loading spinner during async operations.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Loading Countries"
                        value={loadingSelect}
                        options={countryOptions}
                        onChange={(e) => setLoadingSelect(e.target.value)}
                        isLoading={true}
                        loadingIcon={<FaSpinner className="animate-spin" />}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Required Field
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Required select with asterisk indicator.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Priority Level"
                        value={requiredSelect}
                        options={priorityOptions}
                        onChange={(e) => setRequiredSelect(e.target.value)}
                        required={true}
                        icon={<FaCog />}
                    />
                </div>
            </div>
            <div className="space-y-4 mb-50">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled Options
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Select with some options disabled.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <Select
                        label="Priority (Some Disabled)"
                        value=""
                        options={priorityOptions}
                        onChange={(e) => console.log('Selected:', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};