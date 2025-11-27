import { useState } from 'react';
import { DropZone } from 'dialca-ui';
import { FaFileImage } from 'react-icons/fa';

export const BasicUsageExample: React.FC = () => {
    const [dragStates, setDragStates] = useState({
        basic: false,
        withFiles: false,
        withError: false
    });
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, basic: true }));
    };
    const handleDragLeave = () => {
        setDragStates(prev => ({ ...prev, basic: false }));
    };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, basic: false }));
        
        const files = Array.from(e.dataTransfer.files);
        console.log('Dropped files:', files);
        alert(`${files.length} file(s) dropped!`);
    };
    const handleClick = () => {
        console.log('DropZone clicked - would open file picker');
        alert('File picker would open here');
    };

    // Handlers for file upload example
    const handleFileUpload = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, withFiles: false }));
        
        const files = Array.from(e.dataTransfer.files);
        setUploadedFiles(prev => [...prev, ...files]);
    };
    const handleFileClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.accept = 'image/*';
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            if (target.files) {
                const files = Array.from(target.files);
                setUploadedFiles(prev => [...prev, ...files]);
            }
        };
        input.click();
    };
    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Basic DropZone
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Simple drag and drop area with default styling and behavior.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.basic}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                />
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        File Upload with Preview
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        DropZone with file preview and management functionality.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.withFiles}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragStates(prev => ({ ...prev, withFiles: true }));
                    }}
                    onDragLeave={() => setDragStates(prev => ({ ...prev, withFiles: false }))}
                    onDrop={handleFileUpload}
                    onClick={handleFileClick}
                    icon={<FaFileImage size={48} />}
                    title="Upload your images"
                    description="PNG, JPG, WEBP up to 5MB each"
                />
                {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                            Uploaded Files ({uploadedFiles.length})
                        </h5>
                        <div className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        <FaFileImage className="text-blue-500" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {file.name}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};