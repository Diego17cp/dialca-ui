import React, { useState } from 'react';
import { DropZone, Button } from 'dialca-ui';
import { FaFileImage, FaExclamationTriangle, FaBan } from 'react-icons/fa';

export const StatesExample: React.FC = () => {
    const [dragStates, setDragStates] = useState({
        normal: false,
        error: false,
        disabled: false
    });
    const [hasError, setHasError] = useState(false);

    // Normal state handlers
    const handleNormalDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, normal: true }));
    };

    const handleNormalDragLeave = () => {
        setDragStates(prev => ({ ...prev, normal: false }));
    };

    const handleNormalDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, normal: false }));
        
        const files = Array.from(e.dataTransfer.files);
        console.log('Normal drop:', files);
        alert(`${files.length} file(s) uploaded successfully!`);
    };

    const handleNormalClick = () => {
        console.log('Normal dropzone clicked');
        alert('File picker would open');
    };

    // Error state handlers
    const handleErrorDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, error: true }));
    };

    const handleErrorDragLeave = () => {
        setDragStates(prev => ({ ...prev, error: false }));
    };

    const handleErrorDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragStates(prev => ({ ...prev, error: false }));
        
        const files = Array.from(e.dataTransfer.files);
        // Simulate error validation
        const hasInvalidFiles = files.some(file => 
            file.size > 2 * 1024 * 1024 || !file.type.startsWith('image/')
        );
        
        if (hasInvalidFiles) {
            setHasError(true);
            console.log('Error: Invalid files detected');
        } else {
            setHasError(false);
            console.log('Files validated successfully');
            alert('Files uploaded successfully!');
        }
    };

    const handleErrorClick = () => {
        setHasError(false); // Reset error on click
        console.log('Error dropzone clicked - opening file picker');
    };

    // Disabled state handlers (no-op)
    const handleDisabledDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        // Disabled - no visual feedback
    };

    const handleDisabledDragLeave = () => {
        // Disabled - no visual feedback
    };

    const handleDisabledDrop = (e: React.DragEvent) => {
        e.preventDefault();
        // Disabled - no action
    };

    const handleDisabledClick = () => {
        // Disabled - no action
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Normal State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Default interactive state with hover and drag effects.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.normal}
                    onDragOver={handleNormalDragOver}
                    onDragLeave={handleNormalDragLeave}
                    onDrop={handleNormalDrop}
                    onClick={handleNormalClick}
                    icon={<FaFileImage size={40} />}
                    title="Normal DropZone"
                    description="Drag files here or click to upload"
                />
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Error State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Error state with validation message. Try dropping a large file or non-image.
                    </p>
                </div>
                
                <DropZone
                    isDragging={dragStates.error}
                    onDragOver={handleErrorDragOver}
                    onDragLeave={handleErrorDragLeave}
                    onDrop={handleErrorDrop}
                    onClick={handleErrorClick}
                    hasErrors={hasError}
                    errorMessage="Invalid file format or size. Please upload images under 2MB."
                    errorIcon={<FaExclamationTriangle />}
                    icon={<FaFileImage size={40} />}
                    title="Validation DropZone"
                    description="Only images under 2MB are allowed"
                />
                {hasError && (
                    <div className="flex gap-3">
                        <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setHasError(false)}
                        >
                            Clear Error
                        </Button>
                        <Button 
                            size="sm"
                            onClick={() => {
                                setHasError(false);
                                alert('File picker would open');
                            }}
                        >
                            Try Again
                        </Button>
                    </div>
                )}
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Disabled State
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Non-interactive state - no drag & drop or click functionality.
                    </p>
                </div>
                
                <DropZone
                    isDragging={false} // Always false when disabled
                    onDragOver={handleDisabledDragOver}
                    onDragLeave={handleDisabledDragLeave}
                    onDrop={handleDisabledDrop}
                    onClick={handleDisabledClick}
                    disabled={true}
                    icon={<FaBan size={40} />}
                    title="Upload Disabled"
                    description="File upload is currently unavailable"
                />
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        State Comparison
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Side-by-side comparison of all available states.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <DropZone
                        isDragging={false}
                        onDragOver={handleNormalDragOver}
                        onDragLeave={handleNormalDragLeave}
                        onDrop={handleNormalDrop}
                        onClick={handleNormalClick}
                        size="sm"
                        title="Normal"
                        description="Interactive"
                    />                    
                    <DropZone
                        isDragging={false}
                        onDragOver={() => {}}
                        onDragLeave={() => {}}
                        onDrop={() => {}}
                        onClick={() => {}}
                        size="sm"
                        hasErrors={true}
                        errorMessage="Has errors"
                        errorIcon={<FaExclamationTriangle />}
                        title="Error"
                        description="Invalid files"
                    />                    
                    <DropZone
                        isDragging={false}
                        onDragOver={() => {}}
                        onDragLeave={() => {}}
                        onDrop={() => {}}
                        onClick={() => {}}
                        size="sm"
                        disabled={true}
                        icon={<FaBan />}
                        title="Disabled"
                        description="Unavailable"
                    />
                </div>
            </div>
        </div>
    );
};