import type { ComponentAPI as APIType } from '../types';
import { PropsTable } from '../components/PropsTable';

interface ComponentAPIProps {
    api: APIType;
}

export const ComponentAPI: React.FC<ComponentAPIProps> = ({ api }) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
                API Reference
            </h2>
            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Props
                    </h3>
                    <PropsTable props={api.props} />
                </div>
                {api.events && api.events.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Events
                        </h3>
                        <PropsTable props={api.events} />
                    </div>
                )}
            </div>
        </section>
    );
};