import { Button } from 'dialca-ui';

export const StatesExample: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-col items-center space-y-2">
                <Button>Normal</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Normal</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button loading loadingIcon={<div className='size-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />}>Loading</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Loading</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
                <Button disabled>Disabled</Button>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Disabled</span>
            </div>
        </div>
    );
};