import { useState } from 'react';
import { 
    HiOutlineClipboardDocument, 
    HiOutlineCheckCircle,
    HiOutlineEye,
    HiOutlineCodeBracket
} from 'react-icons/hi2';

interface CodeBlockProps {
    title?: string;
    code: string;
    codeDisplay?: React.ComponentType;
    language: string;
    copyIndex: number;
    copiedIndex: number | null;
    onCopy: (text: string, index: number) => void;
    showHeader?: boolean;
    roundedTop?: boolean;
    preview?: React.ComponentType;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    title,
    code,
    language,
    copyIndex,
    copiedIndex,
    onCopy,
    showHeader = true,
    roundedTop = true,
    codeDisplay: CodeDisplayComponent,
    preview: PreviewComponent
}) => {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>(
        PreviewComponent ? 'preview' : 'code'
    );
    
    const roundingClass = roundedTop ? "rounded-lg" : "rounded-b-lg";
    
    return (
        <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${roundingClass} overflow-hidden`}>
            {showHeader && (
                <div className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                        {PreviewComponent && (
                            <button
                                onClick={() => setActiveTab('preview')}
                                className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'preview'
                                        ? 'bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-600 shadow-sm'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
                                }`}
                            >
                                <HiOutlineEye className="w-4 h-4" />
                                <span>Preview</span>
                            </button>
                        )}
                        <button
                            onClick={() => setActiveTab('code')}
                            className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeTab === 'code'
                                    ? 'bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-600 shadow-sm'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
                            }`}
                        >
                            <HiOutlineCodeBracket className="w-4 h-4" />
                            <span>Code</span>
                        </button>
                    </div>                    
                    {activeTab === 'code' && (
                        <button
                            onClick={() => onCopy(code, copyIndex)}
                            className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-700 dark:bg-gray-900 rounded-lg p-2 border border-gray-500 dark:border-gray-700 cursor-pointer"
                        >
                            {copiedIndex === copyIndex ? (
                                <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                                <HiOutlineClipboardDocument className="w-4 h-4" />
                            )}
                        </button>
                    )}
                    {title && !PreviewComponent && (
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</span>
                    )}
                </div>
            )}
            <div>
                {activeTab === 'preview' && PreviewComponent ? (
                    <div className="p-6 bg-gray-50 dark:bg-gray-800/50 min-h-[120px] flex items-center justify-center">
                        <PreviewComponent />
                    </div>
                ) : (
                    <div className="bg-gray-900 dark:bg-gray-800">
                        <div className="p-4">
                            {CodeDisplayComponent ? (
                                <pre className="font-mono text-sm overflow-x-auto main-scroll">
                                    <CodeDisplayComponent />
                                </pre>
                            ) : (
                                <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                                    <code className={`language-${language}`}>
                                        {code}
                                    </code>
                                </pre>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};