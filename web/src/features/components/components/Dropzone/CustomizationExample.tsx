import React, { useState } from 'react';
import { DropZone } from 'dialca-ui';
import { FaFileImage, FaUpload, FaCamera, FaVideo, FaMusic } from 'react-icons/fa';
import { FaCloudArrowUp } from 'react-icons/fa6';

export const CustomizationExample: React.FC = () => {
    const [dragStates, setDragStates] = useState({
        classOverride: false,
        fullCustom: false,
        customChildren: false
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
            console.log(`${key} customization:`, files);
            alert(`${files.length} file(s) dropped in ${key} customization!`);
        },
        onClick: () => {
            console.log(`${key} customization clicked`);
            alert(`${key} customization clicked - file picker would open`);
        }
    });

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Classes Override Customization
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Override specific element classes while keeping the base functionality.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.classOverride}
                    {...createDragHandlers('classOverride')}
                    icon={<FaCloudArrowUp size={40} />}
                    title="Custom Styled DropZone"
                    description="Classes override example with custom styling"
                    classes={{
                        container: `
                            border-4! border-dashed! border-orange-300! bg-gradient-to-br! from-orange-50! to-yellow-50!
                            hover:border-orange-400! hover:from-orange-100! hover:to-yellow-100!
                            transition-all duration-300 rounded-2xl! shadow-lg!
                        `,
                        icon: 'text-orange-600! drop-shadow-md!',
                        title: 'text-orange-800! font-bold! text-xl! tracking-wide!',
                        description: 'text-orange-600! text-base! font-medium!'
                    }}
                />
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Full Custom Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete custom styling without extending default styles using variants.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.fullCustom}
                    {...createDragHandlers('fullCustom')}
                    variant="neon"
                    variants={{
                        neon: {
                            normal: {
                                container: `
                                    relative p-12 
                                    bg-gray-900 border-2 border-cyan-400 
                                    rounded-xl cursor-pointer 
                                    transition-all duration-300
                                    before:absolute before:inset-0 before:bg-gradient-to-r 
                                    before:from-cyan-400/10 before:to-purple-400/10 
                                    before:rounded-xl before:opacity-0 
                                    hover:before:opacity-100
                                    hover:shadow-lg hover:shadow-cyan-400/25
                                `,
                                icon: `
                                    text-cyan-400 mb-4 
                                    drop-shadow-[0_0_8px_rgb(34,211,238)]
                                    transition-all duration-300
                                `,
                                title: `
                                    text-white font-bold text-2xl mb-2
                                    bg-gradient-to-r from-cyan-400 to-purple-400 
                                    bg-clip-text text-transparent
                                `,
                                description: `
                                    text-gray-300 text-lg
                                `
                            },
                            dragging: {
                                container: `
                                    bg-gray-800 border-purple-400 
                                    shadow-xl shadow-purple-400/30
                                    scale-105 before:opacity-100
                                `,
                                icon: `
                                    text-purple-400 scale-110
                                    drop-shadow-[0_0_12px_rgb(168,85,247)]
                                `,
                                title: `
                                    from-purple-400 to-cyan-400
                                `,
                                description: `
                                    text-gray-200
                                `
                            }
                        }
                    }}
                    extendDefault={false}
                    icon={<FaUpload size={48} />}
                    title="NEON UPLOAD ZONE"
                    description="Drag files into the future"
                />
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Children Content
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Replace default content with completely custom children elements.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.customChildren}
                    {...createDragHandlers('customChildren')}
                    size="lg"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl mx-auto p-6 space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="flex-1 grid grid-cols-3 gap-4 lg:gap-6">
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FaFileImage className="text-blue-600 text-xl" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Images</p>
                                <p className="text-xs text-gray-500">JPG, PNG, WEBP</p>
                            </div>
                            
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaVideo className="text-green-600 text-xl" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Videos</p>
                                <p className="text-xs text-gray-500">MP4, MOV, AVI</p>
                            </div>
                            
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                                    <FaMusic className="text-purple-600 text-xl" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Audio</p>
                                <p className="text-xs text-gray-500">MP3, WAV, OGG</p>
                            </div>
                        </div>                        
                        <div className="hidden lg:block w-px h-20 bg-gray-200"></div>
                        <div className="lg:hidden w-20 h-px bg-gray-200"></div>
                        <div className="flex-1 text-center space-y-4">
                            <div className={`
                                mx-auto w-20 h-20 rounded-full flex items-center justify-center
                                transition-all duration-300
                                ${dragStates.customChildren 
                                    ? 'bg-blue-600 shadow-lg shadow-blue-200 scale-110' 
                                    : 'bg-blue-100 hover:bg-blue-200'
                                }
                            `}>
                                <FaCamera className={`
                                    text-3xl transition-colors duration-300
                                    ${dragStates.customChildren ? 'text-white' : 'text-blue-600'}
                                `} />
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Drop your media files here
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Support for images, videos, and audio files
                                </p>
                                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Or browse files
                                </button>
                            </div>
                        </div>
                    </div>
                </DropZone>
            </div>
        </div>
    );
};