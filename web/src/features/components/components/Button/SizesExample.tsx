import React from 'react';
import { Button } from 'dialca-ui';

export const SizesExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center space-y-2">
                <Button size="sm">Small</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">sm</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button size="md">Medium</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">md (default)</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button size="lg">Large</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">lg</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button size="xl">Extra Large</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">xl</span>
            </div>
        </div>
    );
};