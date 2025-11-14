import { Link } from 'react-router';
import { HiOutlineArrowRight } from 'react-icons/hi2';

interface RelatedComponentsProps {
    components: string[];
}

export const RelatedComponents: React.FC<RelatedComponentsProps> = ({ components }) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
                Related Components
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map((componentName) => (
                    <Link
                        key={componentName}
                        to={`/docs/components/${componentName.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {componentName}
                            </span>
                            <HiOutlineArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};