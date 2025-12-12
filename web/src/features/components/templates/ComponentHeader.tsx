import { useState } from 'react';
import { 
    HiOutlineCube,
    HiOutlineCodeBracket,
    HiOutlineExclamationTriangle,
    // HiOutlinePlay,
    HiOutlineArrowTopRightOnSquare
} from 'react-icons/hi2';
import { CodeBlock } from '../components/CodeBlock';

interface ComponentHeaderProps {
    name: string;
    description: string;
    basicUsage: string;
    srcUrl?: string;
    issueUrl?: string;
    playgroundUrl?: string;
    basicUsageComponent?: React.ComponentType;
    basicUsageDisplay?: React.ComponentType;
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
    name,
    description,
    basicUsage,
    srcUrl,
    issueUrl,
    playgroundUrl,
    basicUsageComponent,
    basicUsageDisplay
}) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="mb-12">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
                    <HiOutlineCube className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white">
                    {name}
                </h1>
            </div>
            <p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-6">
                {description}
            </p>
            {(srcUrl || issueUrl || playgroundUrl) && (
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    {srcUrl && (
                        <a
                            href={srcUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <HiOutlineCodeBracket className="w-4 h-4" />
                            <span>View Source</span>
                            <HiOutlineArrowTopRightOnSquare className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        </a>
                    )}
                    
                    {issueUrl && (
                        <a
                            href={issueUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-amber-500/50 dark:hover:border-amber-500/50 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <HiOutlineExclamationTriangle className="w-4 h-4" />
                            <span>Report Issue</span>
                            <HiOutlineArrowTopRightOnSquare className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        </a>
                    )}
{/*                     
                    {playgroundUrl && (
                        <a
                            href={playgroundUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <HiOutlinePlay className="w-4 h-4" />
                            <span>Playground</span>
                            <HiOutlineArrowTopRightOnSquare className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        </a>
                    )} */}
                </div>
            )}
            <div className="grid gap-6 mb-8">
                <CodeBlock
                    code={basicUsage}
                    language="tsx"
                    copyIndex={100}
                    copiedIndex={copiedIndex}
                    onCopy={copyToClipboard}
                    preview={basicUsageComponent}
                    codeDisplay={basicUsageDisplay}
                />
            </div>
        </div>
    );
};
