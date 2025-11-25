import { useState } from 'react';
import { SearchableSelect } from 'dialca-ui';
import { FaUser, FaGlobe, FaBuilding } from 'react-icons/fa';

export const SearchableSelectStatesExample: React.FC = () => {
    const [errorSelect, setErrorSelect] = useState('');
    const [requiredSelect, setRequiredSelect] = useState('');

    const categoryOptions = [
        { value: 'work', label: 'Work Category' },
        { value: 'personal', label: 'Personal Category' },
        { value: 'urgent', label: 'Urgent Category' },
        { value: 'education', label: 'Education Category' },
    ];

    const countryOptions = [
        { value: 'us', label: 'United States', icon: <FaGlobe /> },
        { value: 'ca', label: 'Canada', icon: <FaGlobe /> },
        { value: 'uk', label: 'United Kingdom', icon: <FaGlobe /> },
        { value: 'de', label: 'Germany', icon: <FaGlobe /> },
        { value: 'fr', label: 'France', icon: <FaGlobe /> },
        { value: 'it', label: 'Italy', icon: <FaGlobe /> },
    ];

    const departmentOptions = [
        { value: 'engineering', label: 'Engineering Department', icon: <FaBuilding /> },
        { value: 'marketing', label: 'Marketing Department', icon: <FaBuilding /> },
        { value: 'sales', label: 'Sales Department', icon: <FaBuilding /> },
        { value: 'hr', label: 'Human Resources', disabled: true, icon: <FaBuilding /> },
        { value: 'finance', label: 'Finance Department', disabled: true, icon: <FaBuilding /> },
    ];

    const userOptions = [
        { value: 'john', label: 'John Doe', icon: <FaUser /> },
        { value: 'jane', label: 'Jane Smith', icon: <FaUser /> },
        { value: 'mike', label: 'Mike Johnson', icon: <FaUser /> },
        { value: 'sarah', label: 'Sarah Wilson', icon: <FaUser /> },
    ];
    const classes = {
		label: "dark:text-gray-300!",
		input: "dark:bg-gray-800! dark:text-white! dark:border-gray-700! dark:hover:border-gray-600!",
		dropdown: "dark:bg-gray-800! dark:border-gray-700!",
		option: "dark:text-gray-300! dark:hover:bg-gray-700!",
        clearButton: "dark:text-gray-400! dark:hover:text-white!",
	};

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Error State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        SearchableSelect component displaying validation errors.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <SearchableSelect
                        label="Select Category"
                        options={categoryOptions}
                        value={errorSelect}
                        onChange={(value) => setErrorSelect(value)}
                        hasErrors
                        errorMessage="Please select a valid category from the available options"
                        placeholder="Search categories..."
                        noResultsText="No categories found"
                        classes={classes}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        SearchableSelect component in disabled state (non-interactive).
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg space-y-4">
                    <SearchableSelect
                        label="Disabled Empty"
                        options={categoryOptions}
                        value=""
                        onChange={() => {}}
                        disabled={true}
                        placeholder="Cannot search..."
                        noResultsText="No results"
                        classes={classes}
                    />
                    
                    <SearchableSelect
                        label="Disabled with Value"
                        options={countryOptions}
                        value="us"
                        onChange={() => {}}
                        disabled={true}
                        placeholder="Search countries..."
                        noResultsText="No countries found"
                        classes={classes}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Required Field
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        SearchableSelect marked as required with clearable functionality.
                    </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <SearchableSelect
                        label="Assign User"
                        // required
                        options={userOptions}
                        value={requiredSelect}
                        onChange={(value) => setRequiredSelect(value)}
                        placeholder="Search and select user..."
                        isClearable={true}
                        noResultsText="User not found"
                        classes={classes}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled Options
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        SearchableSelect with some options disabled.
                    </p>
                </div>
                
                <div className="p-4 mb-50 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <SearchableSelect
                        label="Select Department"
                        options={departmentOptions}
                        value=""
                        onChange={(value) => console.log('Selected department:', value)}
                        placeholder="Search departments..."
                        isClearable={true}
                        noResultsText="No departments found"
                        classes={classes}
                    />
                </div>
            </div>
        </div>
    );
};