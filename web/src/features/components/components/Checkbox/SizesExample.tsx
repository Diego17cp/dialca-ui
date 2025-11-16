import { Checkbox } from 'dialca-ui';

export const SizesExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    size="sm"
                    checked={true}
                    label="Small checkbox"
                    description="Compact size"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Small (sm)</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    size="md"
                    checked={true}
                    label="Medium checkbox"
                    description="Default size"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Medium (md)</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    size="lg"
                    checked={true}
                    label="Large checkbox"
                    description="Spacious design"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Large (lg)</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    size="sm"
                    checked={true}
                    label="Compact"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">sm - No description</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    size="lg"
                    checked={true}
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">lg - No label</span>
            </div>
        </div>
    );
};