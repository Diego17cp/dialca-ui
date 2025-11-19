import { Loader } from 'dialca-ui';

export const LoaderAnimationExample: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Speed */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Speed
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Control the animation speed of the loader.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Loader speed="slow" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Slow</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Loader speed="normal" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Normal</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Loader speed="fast" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Fast</span>
                    </div>
                </div>
            </div>

            {/* Direction */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Direction
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Control the rotation direction of the loader animation.
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                        <Loader direction="clockwise" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Clockwise</span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Loader direction="counterclockwise" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Counterclockwise</span>
                    </div>
                </div>
            </div>
        </div>
    );
};