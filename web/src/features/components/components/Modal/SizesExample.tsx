import { useState } from 'react';
import { Modal, Button } from 'dialca-ui';
import { FaUser, FaEdit, FaTrash, FaCog, FaTimes, FaCheck } from 'react-icons/fa';

export const ModalSizesExample: React.FC = () => {
    const [modalStates, setModalStates] = useState({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        full: false,
        noHeader: false,
    });

    const openModal = (size: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [size]: true }));
    };

    const closeModal = (size: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [size]: false }));
    };

    // Componente personalizado para modal sin header
    const CustomModalContent = ({ onClose }: { onClose: () => void }) => (
        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
            {/* Header personalizado */}
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8 text-white text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <FaTimes size={16} />
                </button>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUser size={32} />
                </div>
                <h3 className="text-xl font-bold">User Profile</h3>
                <p className="text-blue-100 text-sm">Manage your account settings</p>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <FaUser className="text-gray-400" />
                    <div>
                        <p className="font-medium text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                        <FaEdit className="text-blue-500" />
                        <span>Edit Profile</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                        <FaCog className="text-gray-500" />
                        <span>Settings</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left text-red-600">
                        <FaTrash className="text-red-500" />
                        <span>Delete Account</span>
                    </button>
                </div>

                <div className="flex gap-3 pt-4">
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                            console.log("Changes saved");
                            onClose();
                        }}
                        className="flex-1"
                    >
                        <FaCheck className="mr-2" size={14} />
                        Save Changes
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onClose}
                        className="flex-1"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* Modal Sizes Demonstration */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Modal Sizes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Different size presets for modals with standard content and headers.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    <Button variant="outline" size="sm" onClick={() => openModal('sm')}>
                        Small Modal
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('md')}>
                        Medium Modal
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('lg')}>
                        Large Modal
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('xl')}>
                        XL Modal
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('full')}>
                        Fullscreen
                    </Button>
                </div>
            </div>

            {/* Custom Modal without Header */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Modal without Header
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Modal with completely custom content, no title and no default close button.
                    </p>
                </div>
                
                <Button variant="primary" onClick={() => openModal('noHeader')}>
                    Open Custom Modal
                </Button>
            </div>

            {/* Small Modal */}
            <Modal
                isOpen={modalStates.sm}
                onClose={() => closeModal('sm')}
                title="Small Modal"
                size="sm"
                animation="slide-up"
            >
                <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                        This is a small modal perfect for simple confirmations or quick actions.
                    </p>
                    <div className="flex gap-2">
                        <Button size="sm" onClick={() => closeModal('sm')}>
                            Got it
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Medium Modal */}
            <Modal
                isOpen={modalStates.md}
                onClose={() => closeModal('md')}
                title="Medium Modal"
                size="md"
                animation="fade"
            >
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is a medium modal, the default size. It's suitable for most content types 
                        including forms and detailed information.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-900 mb-2">Information</h5>
                        <p className="text-blue-700 text-sm">
                            Medium modals provide a good balance between space and focus.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button onClick={() => closeModal('md')}>
                            Close
                        </Button>
                        <Button variant="outline" onClick={() => closeModal('md')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Large Modal */}
            <Modal
                isOpen={modalStates.lg}
                onClose={() => closeModal('lg')}
                title="Large Modal"
                size="lg"
                animation="zoom"
            >
                <div className="space-y-6">
                    <p className="text-gray-600">
                        This is a large modal perfect for complex forms, detailed content, or when you need more space.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <h5 className="font-medium text-gray-900">Left Column</h5>
                            <div className="space-y-2">
                                <div className="p-3 bg-gray-50 rounded">Feature 1</div>
                                <div className="p-3 bg-gray-50 rounded">Feature 2</div>
                                <div className="p-3 bg-gray-50 rounded">Feature 3</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h5 className="font-medium text-gray-900">Right Column</h5>
                            <div className="space-y-2">
                                <div className="p-3 bg-blue-50 rounded">Option A</div>
                                <div className="p-3 bg-blue-50 rounded">Option B</div>
                                <div className="p-3 bg-blue-50 rounded">Option C</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Button variant="outline" onClick={() => closeModal('lg')}>
                            Cancel
                        </Button>
                        <Button onClick={() => closeModal('lg')}>
                            Save Changes
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Extra Large Modal */}
            <Modal
                isOpen={modalStates.xl}
                onClose={() => closeModal('xl')}
                title="Extra Large Modal"
                size="xl"
                animation="slide-down"
            >
                <div className="space-y-6">
                    <p className="text-gray-600">
                        This is an extra large modal suitable for complex interfaces, dashboards, or extensive forms.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <h5 className="font-medium text-gray-900">Section 1</h5>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-blue-500 rounded"></div>
                                            <div>
                                                <p className="font-medium">Item {i}</p>
                                                <p className="text-sm text-gray-500">Description</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h5 className="font-medium text-gray-900">Section 2</h5>
                            <div className="space-y-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-4 bg-green-50 rounded-lg border border-green-200">
                                        <p className="font-medium text-green-900">Success Item {i}</p>
                                        <p className="text-sm text-green-700">This item is working correctly</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h5 className="font-medium text-gray-900">Section 3</h5>
                            <div className="space-y-3">
                                {[1, 2].map(i => (
                                    <div key={i} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                        <p className="font-medium text-yellow-900">Warning Item {i}</p>
                                        <p className="text-sm text-yellow-700">This needs attention</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t">
                        <div className="text-sm text-gray-500">
                            Last updated: 2 minutes ago
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" onClick={() => closeModal('xl')}>
                                Cancel
                            </Button>
                            <Button onClick={() => closeModal('xl')}>
                                Apply Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Fullscreen Modal */}
            <Modal
                isOpen={modalStates.full}
                onClose={() => closeModal('full')}
                title="Fullscreen Modal"
                size="full"
                animation="slide-up"
            >
                <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-600">
                            This is a fullscreen modal that takes up the entire viewport. Perfect for immersive experiences.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-64">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                                    <h6 className="text-lg font-bold mb-2">Card {i}</h6>
                                    <p className="text-blue-100">
                                        This is a sample card in the fullscreen modal to demonstrate space usage.
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h5 className="font-medium text-gray-900 mb-4">Content Area</h5>
                            <p className="text-gray-600 mb-4">
                                Fullscreen modals are excellent for complex workflows, data visualization, 
                                or when you need maximum screen real estate.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 pt-6 border-t mt-6">
                        <Button variant="outline" onClick={() => closeModal('full')}>
                            Cancel
                        </Button>
                        <Button onClick={() => closeModal('full')}>
                            Done
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Custom Modal without Header */}
            <Modal
                isOpen={modalStates.noHeader}
                onClose={() => closeModal('noHeader')}
                showCloseButton={false}
                size="md"
                animation="zoom"
                closeOnOutsideClick={false}
            >
                <CustomModalContent onClose={() => closeModal('noHeader')} />
            </Modal>
        </div>
    );
};