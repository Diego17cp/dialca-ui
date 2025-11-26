import { useState } from 'react';
import { Modal, Button } from 'dialca-ui';
import { FaMoon, FaSun, FaEye, FaGem } from 'react-icons/fa';

export const ModalVariantsExample: React.FC = () => {
    const [modalStates, setModalStates] = useState({
        default: false,
        dark: false,
        minimal: false,
        glassmorphism: false,
    });

    const openModal = (variant: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [variant]: true }));
    };

    const closeModal = (variant: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [variant]: false }));
    };

    return (
        <div className="space-y-8">
            {/* Variant Buttons */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Modal Variants
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Different visual styles and themes available for the modal component.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button 
                        variant="outline" 
                        onClick={() => openModal('default')}
                        className="flex items-center justify-center gap-2"
                    >
                        <FaSun size={16} />
                        Default
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={() => openModal('dark')}
                        className="flex items-center justify-center gap-2"
                    >
                        <FaMoon size={16} />
                        Dark
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={() => openModal('minimal')}
                        className="flex items-center justify-center gap-2"
                    >
                        <FaEye size={16} />
                        Minimal
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={() => openModal('glassmorphism')}
                        className="flex items-center justify-center gap-2"
                    >
                        <FaGem size={16} />
                        Glass
                    </Button>
                </div>
            </div>

            {/* Default Variant Modal */}
            <Modal
                isOpen={modalStates.default}
                onClose={() => closeModal('default')}
                title="Default Modal"
                variant="default"
                size="md"
                animation="fade"
            >
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is the default modal variant with standard styling, clean borders, 
                        and subtle shadows for a professional look.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h5 className="font-medium text-blue-900 mb-2">Features</h5>
                        <ul className="text-blue-800 text-sm space-y-1">
                            <li>• Clean white background</li>
                            <li>• Subtle drop shadow</li>
                            <li>• Standard border radius</li>
                            <li>• Professional appearance</li>
                        </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                        <Button onClick={() => closeModal('default')}>
                            Close
                        </Button>
                        <Button variant="outline" onClick={() => closeModal('default')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Dark Variant Modal */}
            <Modal
                isOpen={modalStates.dark}
                onClose={() => closeModal('dark')}
                title="Dark Modal"
                variant="dark"
                size="md"
                animation="slide-up"
            >
                <div className="space-y-4">
                    <p className="text-gray-300">
                        This is the dark variant modal with dark theme styling, perfect for 
                        dark mode applications or night-time usage.
                    </p>
                    
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                        <h5 className="font-medium text-gray-100 mb-2">Dark Theme Features</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Dark background colors</li>
                            <li>• Light text for contrast</li>
                            <li>• Darker overlay backdrop</li>
                            <li>• Eye-friendly for low light</li>
                        </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                        <Button onClick={() => closeModal('dark')}>
                            Close
                        </Button>
                        <Button variant="outline" onClick={() => closeModal('dark')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Minimal Variant Modal */}
            <Modal
                isOpen={modalStates.minimal}
                onClose={() => closeModal('minimal')}
                title="Minimal Modal"
                variant="minimal"
                size="md"
                animation="zoom"
            >
                <div className="space-y-3">
                    <p className="text-gray-600">
                        This minimal variant features reduced padding, smaller shadows, and 
                        a more compact design for clean, space-efficient interfaces.
                    </p>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded p-3">
                        <h5 className="font-medium text-gray-900 mb-1">Minimal Design</h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Reduced padding and spacing</li>
                            <li>• Lighter shadows</li>
                            <li>• Smaller header and title</li>
                            <li>• Compact and efficient</li>
                        </ul>
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                        <Button size="sm" onClick={() => closeModal('minimal')}>
                            Close
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => closeModal('minimal')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Glassmorphism Variant Modal */}
            <Modal
                isOpen={modalStates.glassmorphism}
                onClose={() => closeModal('glassmorphism')}
                title="Glassmorphism Modal"
                variant="glassmorphism"
                size="md"
                animation="slide-down"
            >
                <div className="space-y-4">
                    <p className="text-gray-700">
                        This glassmorphism variant features a translucent background with 
                        backdrop blur effects for a modern, elegant glass-like appearance.
                    </p>
                    
                    <div className="bg-white/30 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                        <h5 className="font-medium text-gray-900 mb-2">Glass Effects</h5>
                        <ul className="text-gray-800 text-sm space-y-1">
                            <li>• Translucent background</li>
                            <li>• Backdrop blur effects</li>
                            <li>• Subtle border highlights</li>
                            <li>• Modern glass aesthetic</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-white/20">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Glassmorphism effects work best with colorful 
                            or dynamic backgrounds behind the modal.
                        </p>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                        <Button onClick={() => closeModal('glassmorphism')}>
                            Close
                        </Button>
                        <Button variant="outline" onClick={() => closeModal('glassmorphism')}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};