import type { ComponentExample } from '../types';
import { CodeBlock } from '../components/CodeBlock';
import { useState } from 'react';

interface ComponentExamplesProps {
    examples: ComponentExample[];
}

export const ComponentExamples: React.FC<ComponentExamplesProps> = ({ examples }) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
                Examples
            </h2>
            
            <div className="space-y-8">
                {examples.map((example, index) => (
                    <div key={example.id} className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {example.title}
                            </h3>
                            {example.description && (
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-body mb-4">
                                    {example.description}
                                </p>
                            )}
                        </div>
                        {/* Code */}
                        <CodeBlock
                            code={example.code}
                            language="tsx"
                            copyIndex={200 + index}
                            copiedIndex={copiedIndex}
                            onCopy={copyToClipboard}
                            showHeader={true}
                            roundedTop={false}
                            preview={example.component}
                            codeDisplay={example.codeDisplay}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};