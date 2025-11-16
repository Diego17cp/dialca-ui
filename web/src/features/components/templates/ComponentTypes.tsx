import type { ComponentType } from '../types';

interface ComponentTypesProps {
    types: ComponentType[];
}

export const ComponentTypes: React.FC<ComponentTypesProps> = ({ types }) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
                Types
            </h2>
            <div className="space-y-8">
                {types.map((type) => (
                    <div key={type.name} className="space-y-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-mono">
                                    {type.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {type.description}
                                </p>
                            </div>
                            <div className="p-4">
                                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-4">
                                    <pre className="font-mono text-sm text-gray-300 overflow-x-auto main-scroll">
                                        <code>
                                            <span className="text-violet-400">interface</span>{" "}
                                            <span className="text-purple-400">{type.name.split('.').pop()}</span>
                                            {type.name.includes('extends') ? (
                                                <>
                                                    {" "}
                                                    <span className="text-violet-400">extends</span>{" "}
                                                    <span className="text-emerald-300">BaseStates</span>
                                                </>
                                            ) : null}
                                            {" "}
                                            <span className="text-indigo-400">{"{"}</span>
                                            {type.properties?.map((prop) => (
                                                <div key={prop.name} className="ml-4">
                                                    {"\n  "}
                                                    <span className="text-green-300">{prop.name}</span>
                                                    <span className="text-pink-300">?</span>
                                                    <span className="text-gray-400">:</span>
                                                    {" "}
                                                    <span className="text-purple-400">{prop.type}</span>
                                                    <span className="text-gray-400">;</span>
                                                    {prop.description && (
                                                        <>
                                                            {" "}
                                                            <span className="text-gray-500">
                                                                // {prop.description}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                            {"\n"}
                                            <span className="text-indigo-400">{"}"}</span>
                                            {"\n\n"}
                                        </code>
                                    </pre>
                                </div>
                                {type.properties && type.properties.length > 0 && (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                                    <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-white">
                                                        Property
                                                    </th>
                                                    <th className="text-left py-2 pr-4 font-semibold text-gray-900 dark:text-white">
                                                        Type
                                                    </th>
                                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">
                                                        Description
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                {type.properties.map((prop) => (
                                                    <tr key={prop.name}>
                                                        <td className="py-3 pr-4 font-mono text-sm text-primary">
                                                            {prop.name}
                                                        </td>
                                                        <td className="py-3 pr-4 font-mono text-sm text-gray-600 dark:text-gray-400">
                                                            {prop.type}
                                                        </td>
                                                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                                                            {prop.description}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};