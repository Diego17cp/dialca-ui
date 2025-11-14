import React from 'react';
import { Button } from 'dialca-ui';

export const VariantsExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-col items-center space-y-2">
                <Button>Default</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Default</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button variant="secondary">Secondary</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Secondary</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button variant="danger">Danger</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Danger</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button variant="success">Success</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Success</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
                <Button variant="outline">Outline</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Outline</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button variant="ghost">Ghost</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Ghost</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button variant="minimal">Minimal</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Minimal</span>
            </div>
        </div>
    );
};