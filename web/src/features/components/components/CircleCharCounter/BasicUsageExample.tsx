import { useState } from 'react';
import { CharCounter } from 'dialca-ui';

export const BasicCircleCharCounterExample: React.FC = () => {
    const [text, setText] = useState("Hello world!");
    
    return (
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div className="flex-1">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something here..."
                    className="w-full p-3 border rounded-md resize-none dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                    rows={3}
                />
            </div>
            <CharCounter 
                value={text} 
                maxLength={100} 
            />
        </div>
    );
};