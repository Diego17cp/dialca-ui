import React from 'react';
import { Loader } from 'dialca-ui';

export const LoaderStatesExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
                <Loader text="Loading..." showText />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Normal</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader hasErrors text="Error occurred" showText />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Error</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader success text="Completed!" showText />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Success</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader disabled text="Disabled" showText />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Disabled</span>
            </div>
        </div>
    );
};