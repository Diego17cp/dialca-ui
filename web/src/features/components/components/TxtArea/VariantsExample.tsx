import React, { useState } from 'react';
import { TxtArea } from 'dialca-ui';
import { FaComment, FaFile, FaSpinner } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

export const TxtAreaVariantsExample: React.FC = () => {
    const [defaultText, setDefaultText] = useState("This is the default variant with standard styling");
    const [darkText, setDarkText] = useState("Dark theme textarea with contrasted colors");
    const [resizableText, setResizableText] = useState("This textarea can be resized vertically. Try dragging the bottom-right corner to resize it!");
    const [minimalText, setMinimalText] = useState("Minimal underline style without borders");
    const [loadingText] = useState("Processing your request...");

    return (
        <div className="space-y-10">
            {/* Default Variant */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Standard light theme styling with clean borders, floating labels, and character counting.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-800/50 rounded-lg border">
                    <TxtArea
                        label="Standard Comment"
                        value={defaultText}
                        onChange={(e) => setDefaultText(e.target.value)}
                        placeholder="Enter your comment..."
                        icon={<FaComment />}
                        hasCharCount
                        charCountType="bottom"
                        maxLength={200}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                    
                    <TxtArea
                        label="Required Description"
                        value=""
                        placeholder="Describe your project..."
                        required
                        icon={<FaEdit />}
                        hasCharCount
                        charCountType="floating-circle"
                        maxLength={300}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                    
                    <TxtArea
                        label="Error State"
                        value="Invalid content here"
                        hasErrors
                        errorMessage="Content contains inappropriate language"
                        icon={<FaFile />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                    
                    <TxtArea
                        label="Disabled Field"
                        value="This field cannot be edited"
                        disabled
                        icon={<FaFile />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! disabled:opacity-50! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Dark Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Dark theme styling with darker backgrounds, lighter text colors, and adjusted scrollbars.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 rounded-lg border border-gray-700">
                    <TxtArea
                        label="Dark Feedback"
                        value={darkText}
                        onChange={(e) => setDarkText(e.target.value)}
                        placeholder="Share your feedback..."
                        variant="dark"
                        icon={<FaComment />}
                        hasCharCount
                        charCountType="bottom"
                        maxLength={250}
                    />
                    
                    <TxtArea
                        label="Dark Required"
                        value=""
                        placeholder="Enter required information..."
                        variant="dark"
                        required
                        icon={<FaEdit />}
                        hasCharCount
                        charCountType="floating-circle"
                        maxLength={400}
                    />
                    
                    <TxtArea
                        label="Dark Error State"
                        value="Error content"
                        hasErrors
                        errorMessage="Field validation failed"
                        variant="dark"
                        icon={<FaFile />}
                    />
                    
                    <TxtArea
                        label="Dark Loading"
                        value={loadingText}
                        variant="dark"
                        isLoading
                        loader={<FaSpinner className="animate-spin dark:text-white" />}
                        icon={<FaComment />}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Resizable Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Purple-themed variant that allows vertical resizing with increased height limits.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                    <TxtArea
                        label="Resizable Text Area"
                        value={resizableText}
                        onChange={(e) => setResizableText(e.target.value)}
                        placeholder="This textarea can be resized vertically..."
                        variant="resizable"
                        allowResize
                        icon={<FaEdit />}
                        hasCharCount
                        charCountType="floating-circle"
                        maxLength={500}
                    />
                    
                    <TxtArea
                        label="Resizable with Error"
                        value="Too much content that exceeds normal limits"
                        hasErrors
                        errorMessage="Content exceeds recommended length"
                        variant="resizable"
                        allowResize
                        icon={<FaFile />}
                        hasCharCount
                        charCountType="bottom"
                        maxLength={300}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Minimal Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Clean underline-only styling without borders, perfect for modern minimal designs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
                    <TxtArea
                        label="Minimal Note"
                        value={minimalText}
                        onChange={(e) => setMinimalText(e.target.value)}
                        placeholder="Write a note..."
                        variant="minimal"
                        icon={<FaComment />}
                        hasCharCount
                        charCountType="bottom"
                        maxLength={200}
                        classes={{
                            textarea: "dark:text-gray-300!"
                        }}
                    />
                    
                    <TxtArea
                        label="Minimal Required"
                        value=""
                        placeholder="Enter required details..."
                        variant="minimal"
                        required
                        icon={<FaEdit />}
                        hasCharCount
                        charCountType="floating-circle"
                        maxLength={250}
                    />
                    
                    <TxtArea
                        label="Minimal Error"
                        value="Invalid input"
                        hasErrors
                        errorMessage="Please provide valid information"
                        variant="minimal"
                        icon={<FaFile />}
                        classes={{
                            textarea: "dark:text-gray-300!"
                        }}
                    />
                    
                    <TxtArea
                        label="Minimal Disabled"
                        value="Cannot edit this minimal textarea"
                        disabled
                        variant="minimal"
                        icon={<FaFile />}
                    />
                </div>
            </div>

            {/* Different States */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Character Count Types
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Demonstration of different character counting positions and warning states.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white dark:bg-gray-800/50 rounded-lg">
                    <TxtArea
                        label="Top Counter"
                        value="Character count shown above"
                        hasCharCount
                        charCountType="top"
                        maxLength={100}
                        icon={<FaComment />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                    
                    <TxtArea
                        label="Bottom Counter"
                        value="Character count shown below with warning colors when approaching limit"
                        hasCharCount
                        charCountType="bottom"
                        maxLength={120}
                        icon={<FaEdit />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                    
                    <TxtArea
                        label="Floating Circle Counter"
                        value="Floating circular character counter that appears on multi-line content"
                        hasCharCount
                        charCountType="floating-circle"
                        maxLength={150}
                        icon={<FaFile />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            textarea: "dark:bg-gray-800! dark:text-gray-300! dark:border-gray-600!",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};