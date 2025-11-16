import { Checkbox } from 'dialca-ui';

export const VariantsExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-start justify-center gap-6">
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                    label="Default variant"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Default</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                    variant="minimal"
                    label="Minimal design"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Minimal</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                    variant="card"
                    label="Card style"
                    description="Enhanced container"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Card</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                    variant="switch"
                    label="Toggle switch"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Switch</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                    variant="dark"
                    label="Dark theme"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Dark</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Checkbox 
                    checked={true}
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">No Label</span>
            </div>
        </div>
    );
};