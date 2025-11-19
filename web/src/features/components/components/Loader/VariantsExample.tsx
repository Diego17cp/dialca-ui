import { Loader } from 'dialca-ui';

export const LoaderVariantsExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <div className="flex flex-col items-center space-y-2">
                <Loader />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Default</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader variant="dots" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Dots</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader variant="pulse" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pulse</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Loader variant="minimal" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Minimal</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
                <Loader variant="dark" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Dark</span>
            </div>
        </div>
    );
};