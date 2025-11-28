import React, { useState } from 'react';
import { DropZone } from 'dialca-ui';
import { FaFileImage, FaFolderOpen } from 'react-icons/fa';
import { FaCloudArrowUp } from 'react-icons/fa6';

export const SizesExample: React.FC = () => {
    const [dragStates, setDragStates] = useState({
        small: false,
        medium: false,
        large: false,
        customSmall: false,
        customMedium: false,
        customLarge: false
    });

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
            console.log(`${key} dropzone:`, files);
            alert(`${files.length} file(s) dropped in ${key} DropZone!`);
        },
        onClick: () => {
            console.log(`${key} dropzone clicked`);
            alert(`${key} DropZone clicked - file picker would open`);
        }
    });

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default Sizes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Three built-in sizes: small, medium (default), and large with standard content.
                    </p>
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Small Size (sm)
                    </h5>
                    <DropZone
                        isDragging={dragStates.small}
                        size="sm"
                        {...createDragHandlers('small')}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Compact size perfect for inline uploads or tight spaces.
                    </p>
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Medium Size (md) - Default
                    </h5>
                    <DropZone
                        isDragging={dragStates.medium}
                        size="md"
                        {...createDragHandlers('medium')}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Standard size suitable for most upload scenarios.
                    </p>
                </div>
                <div className="space-y-3">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                        Large Size (lg)
                    </h5>
                    <DropZone
                        isDragging={dragStates.large}
                        size="lg"
                        {...createDragHandlers('large')}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Larger size ideal for prominent upload areas or multiple files.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Content with Sizes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Same sizes with custom icons, titles and descriptions to show how content scales.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                            Small - Quick Upload
                        </h5>
                        <DropZone
                            isDragging={dragStates.customSmall}
                            size="sm"
                            icon={<FaFileImage size={24} />}
                            title="Quick Upload"
                            description="JPG, PNG only"
                            classes={{
                                container: "rounded-full!"
                            }}
                            {...createDragHandlers('customSmall')}
                        />
                    </div>
                    <div className="space-y-3">
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                            Medium - Standard Upload
                        </h5>
                        <DropZone
                            isDragging={dragStates.customMedium}
                            size="md"
                            icon={<FaCloudArrowUp size={32} />}
                            title="Upload your files"
                            description="Multiple formats supported"
                            {...createDragHandlers('customMedium')}
                        />
                    </div>
                    <div className="space-y-3">
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                            Large - Bulk Upload
                        </h5>
                        <DropZone
                            isDragging={dragStates.customLarge}
                            size="lg"
                            icon={<FaFolderOpen size={48} />}
                            title="Bulk File Upload"
                            description="Drop multiple files or folders here"
                            {...createDragHandlers('customLarge')}
                        />
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Size Comparison
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Side-by-side comparison to visualize the size differences.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-end gap-4 overflow-x-auto pb-4">
                        <div className="flex-shrink-0 text-center space-y-2">
                            <DropZone
                                isDragging={false}
                                size="sm"
                                icon={<FaFileImage size={20} />}
                                title="SM"
                                description="Small"
                                onDragOver={(e) => e.preventDefault()}
                                onDragLeave={() => {}}
                                onDrop={(e) => e.preventDefault()}
                                onClick={() => {}}
                            />
                            <span className="text-xs text-gray-500">Small</span>
                        </div>
                        <div className="flex-shrink-0 text-center space-y-2">
                            <DropZone
                                isDragging={false}
                                size="md"
                                icon={<FaCloudArrowUp size={28} />}
                                title="MD"
                                description="Medium"
                                onDragOver={(e) => e.preventDefault()}
                                onDragLeave={() => {}}
                                onDrop={(e) => e.preventDefault()}
                                onClick={() => {}}
                            />
                            <span className="text-xs text-gray-500">Medium (Default)</span>
                        </div>
                        <div className="flex-shrink-0 text-center space-y-2">
                            <DropZone
                                isDragging={false}
                                size="lg"
                                icon={<FaFolderOpen size={36} />}
                                title="LG"
                                description="Large"
                                onDragOver={(e) => e.preventDefault()}
                                onDragLeave={() => {}}
                                onDrop={(e) => e.preventDefault()}
                                onClick={() => {}}
                            />
                            <span className="text-xs text-gray-500">Large</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};