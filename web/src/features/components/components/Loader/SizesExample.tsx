import React from 'react';
import { Loader } from 'dialca-ui';

export const LoaderSizesExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
                <Loader size="sm" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Small</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader size="md" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Medium</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader size="lg" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Large</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader size="xl" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Extra Large</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
                <Loader size={20} />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Custom (20)</span>
            </div>
        </div>
    );
};