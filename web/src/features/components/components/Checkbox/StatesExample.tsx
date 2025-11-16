import { useState } from 'react';
import { Checkbox } from 'dialca-ui';

export const StatesExample: React.FC = () => {
    const [dynamicChecked, setDynamicChecked] = useState(false);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    Basic States
                </h4>
                <div className="flex flex-wrap items-start justify-center gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Unchecked state"
                            checked={false}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Normal</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Checked state"
                            checked={true}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Checked</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Indeterminate state"
                            indeterminate={true}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Indeterminate</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Disabled unchecked"
                            disabled={true}
                            checked={false}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Disabled</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Disabled checked"
                            disabled={true}
                            checked={true}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Disabled + Checked</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    Error States
                </h4>
                <div className="flex flex-wrap items-start justify-center gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Error unchecked"
                            description="This field is required"
                            hasErrors={true}
                            errorMessage="Please accept the terms"
                            checked={false}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Error</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Error checked"
                            description="Still showing error"
                            hasErrors={true}
                            errorMessage="Custom error message"
                            checked={true}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Error + Checked</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Error indeterminate"
                            hasErrors={true}
                            errorMessage="Invalid selection"
                            indeterminate={true}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Error + Indeterminate</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    Interactive State
                </h4>
                <div className="flex flex-wrap items-start justify-center gap-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Checkbox 
                            label="Click to toggle"
                            description="Fully interactive checkbox"
                            checked={dynamicChecked}
                            onCheckedChange={setDynamicChecked}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Interactive ({dynamicChecked ? 'Checked' : 'Unchecked'})
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};