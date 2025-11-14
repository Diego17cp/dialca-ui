import type { ComponentProp } from '../types';

interface PropsTableProps {
    props: ComponentProp[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Name
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Type
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Default
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Required
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((prop) => (
                        <tr 
                            key={prop.name} 
                            className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                            <td className="py-3 px-4">
                                <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-primary">
                                    {prop.name}
                                </code>
                            </td>
                            <td className="py-3 px-4">
                                <code className="text-sm text-gray-600 dark:text-gray-400">
                                    {prop.type}
                                </code>
                            </td>
                            <td className="py-3 px-4">
                                {prop.default ? (
                                    <code className="text-sm text-gray-600 dark:text-gray-400">
                                        {prop.default}
                                    </code>
                                ) : (
                                    <span className="text-gray-400">—</span>
                                )}
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    prop.required 
                                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                                }`}>
                                    {prop.required ? 'Required' : 'Optional'}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">
                                {prop.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};