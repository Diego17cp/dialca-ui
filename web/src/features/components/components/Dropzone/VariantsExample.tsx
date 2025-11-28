import React, { useState } from 'react';
import { DropZone } from 'dialca-ui';
import { FaFileImage, FaFolderOpen, FaCamera, FaVideo } from 'react-icons/fa';
import { FaCloudArrowUp } from 'react-icons/fa6';

export const VariantsExample: React.FC = () => {
    const [dragStates, setDragStates] = useState({
        default: false,
        dark: false,
        minimal: false,
        compact: false,
        bordered: false,
        customGreen: false,
        customPurple: false
    });

    // Generic drag handlers
    const createDragHandlers = (key: keyof typeof dragStates) => ({
        onDragOver: (e: React.DragEvent) => {
            e.preventDefault();
            setDragStates(prev => ({ ...prev, [key]: true }));
        },
        onDragLeave: () => {
            setDragStates(prev => ({ ...prev, [key]: false }));
        },
        onDrop: (e: React.DragEvent) => {
            e.preventDefault();
            setDragStates(prev => ({ ...prev, [key]: false }));
            const files = Array.from(e.dataTransfer.files);
            console.log(`${key} variant:`, files);
            alert(`${files.length} file(s) dropped in ${key} variant!`);
        },
        onClick: () => {
            console.log(`${key} variant clicked`);
            alert(`${key} variant clicked - file picker would open`);
        }
    });

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Built-in Variants
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pre-defined style variants available out of the box.
                    </p>
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Default Variant
                    </h5>
                    <DropZone
                        isDragging={dragStates.default}
                        variant="default"
                        icon={<FaCloudArrowUp size={32} />}
                        title="Default Style"
                        description="Standard dropzone with default blue theme"
                        {...createDragHandlers('default')}
                    />
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Dark Variant
                    </h5>
                    <DropZone
                        isDragging={dragStates.dark}
                        variant="dark"
                        icon={<FaFileImage size={32} />}
                        title="Dark Mode Style"
                        description="Dark theme variant with muted colors"
                        {...createDragHandlers('dark')}
                    />
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Minimal Variant
                    </h5>
                    <DropZone
                        isDragging={dragStates.minimal}
                        variant="minimal"
                        icon={<FaFolderOpen size={28} />}
                        title="Minimal Design"
                        description="Clean and simple appearance"
                        {...createDragHandlers('minimal')}
                    />
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Compact Variant
                    </h5>
                    <DropZone
                        isDragging={dragStates.compact}
                        variant="compact"
                        icon={<FaCamera size={24} />}
                        title="Compact Layout"
                        description="Horizontal layout for tight spaces"
                        {...createDragHandlers('compact')}
                    />
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Bordered Variant
                    </h5>
                    <DropZone
                        isDragging={dragStates.bordered}
                        variant="bordered"
                        icon={<FaVideo size={32} />}
                        title="Bordered Style"
                        description="Solid border instead of dashed"
                        {...createDragHandlers('bordered')}
                    />
                </div>
            </div>
        </div>
    );
};