import { Link } from 'react-router';
import { 
    HiOutlinePuzzlePiece, 
    HiOutlineArrowRight,
    HiOutlineSparkles 
} from 'react-icons/hi2';
import { componentsList } from '../constants/components';
import { PiPuzzlePieceDuotone } from 'react-icons/pi';
import { useDocTitle } from '@/core/hooks';
import { pageTitles } from '@/core/constants';

export const ComponentsList = () => {
    useDocTitle(pageTitles.COMPONENTS_LIST);
    const newComponentsCount = componentsList.filter(component => component.isNew).length;
    const totalComponents = componentsList.length;

    return (
        <div className="min-h-full">
            <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
                        <HiOutlinePuzzlePiece className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white">
                        Components
                    </h1>
                </div>
                <p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">
                    Explore our collection of {totalComponents} reusable UI components. 
                    Each component is designed with accessibility, customization, and developer experience in mind.
                </p>
                
                {newComponentsCount > 0 && (
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                            <HiOutlineSparkles className="w-4 h-4" />
                            <span className="font-medium">
                                {newComponentsCount} new component{newComponentsCount > 1 ? 's' : ''} added
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <section className="mb-12">
                <div className="grid gap-4 md:gap-6">
                    {componentsList.map((component, index) => (
                        <Link
                            key={index}
                            to={component.url}
                            className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 dark:group-hover:from-primary/30 dark:group-hover:to-secondary/30 transition-all duration-200">
                                            <PiPuzzlePieceDuotone className='text-3xl text-primary' />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <div className="flex items-center space-x-3 mb-1">
                                            <h3 className="text-lg font-semibold font-titles text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">
                                                {component.name}
                                            </h3>
                                            {component.isNew && (
                                                <div className="flex items-center space-x-1.5">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                                                        New
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-base text-gray-600 dark:text-gray-400 font-body">
                                            {component.description}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex-shrink-0 ml-4">
                                    <HiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Ready to get started?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm font-body">
                            Install DialcaUI and start building beautiful interfaces with our component library.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            to="/docs/overview/getting-started"
                            className="inline-flex items-center px-4 py-2 bg-primary hover:bg-secondary text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/docs/overview/customization"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            Customization
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};