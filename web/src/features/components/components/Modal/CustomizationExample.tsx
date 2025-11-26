import { useState } from 'react';
import { Modal, Button } from 'dialca-ui';
import { FaTimes, FaShieldAlt, FaRocket, FaCheckCircle } from 'react-icons/fa';

export const ModalCustomizationExample: React.FC = () => {
    const [modalStates, setModalStates] = useState({
        classes: false,
        customDesign: false,
    });

    const openModal = (key: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [key]: true }));
    };

    const closeModal = (key: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [key]: false }));
    };

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Classes Override
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Override specific parts using the classes prop while keeping default styling.
                    </p>
                </div>
                
                <Button variant="outline" onClick={() => openModal('classes')}>
                    Open Orange-themed Modal
                </Button>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Complete Custom Design
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Complete redesign using extendDefault=false with custom variants.
                    </p>
                </div>
                
                <Button variant="primary" onClick={() => openModal('customDesign')}>
                    Open Security Alert Modal
                </Button>
            </div>
            <Modal
                isOpen={modalStates.classes}
                onClose={() => closeModal('classes')}
                title="Orange Theme Modal"
                size="md"
                animation="slide-up"
                classes={{
                    overlay: 'bg-orange-900/40! backdrop-blur-md!',
                    container: 'border-2! border-orange-200! shadow-xl! shadow-orange-500/20!',
                    header: 'bg-gradient-to-r! from-orange-50! to-amber-50! border-b-2! border-orange-200!',
                    title: 'text-orange-800! font-bold!',
                    closeButton: 'text-orange-500! hover:text-orange-700! hover:bg-orange-100! focus:ring-2! focus:ring-orange-400!',
                    content: 'bg-orange-50/30!'
                }}
            >
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaRocket className="text-orange-600" size={20} />
                        </div>
                        <div>
                            <h5 className="font-medium text-orange-900 mb-1">
                                Custom Orange Theme
                            </h5>
                            <p className="text-orange-700 text-sm">
                                This modal uses custom classes to override specific styling while 
                                maintaining the default structure and behavior.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                        <h6 className="font-medium text-orange-900 mb-2">Customized Elements</h6>
                        <ul className="text-orange-800 text-sm space-y-1">
                            <li>• Orange overlay with blur effect</li>
                            <li>• Gradient header background</li>
                            <li>• Custom border and shadow colors</li>
                            <li>• Orange-themed close button</li>
                        </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                        <Button 
                            onClick={() => closeModal('classes')}
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                            Got it!
                        </Button>
                        <Button 
                            variant="outline" 
                            onClick={() => closeModal('classes')}
                            className="border-orange-300 text-orange-700 hover:bg-orange-50"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalStates.customDesign}
                onClose={() => closeModal('customDesign')}
                showCloseButton={false}
                size="md"
                animation="zoom"
                closeOnOutsideClick={false}
                variant="security"
                extendDefault={false}
                variants={{
                    security: {
                        normal: {
                            overlay: `
                                fixed inset-0 z-50 flex items-center justify-center p-4
                                bg-gradient-to-br from-red-900/50 via-orange-900/40 to-red-900/50
                                backdrop-blur-sm
                            `,
                            container: `
                                relative w-full max-w-md
                                bg-white rounded-2xl shadow-2xl border border-red-200
                                overflow-hidden
                            `,
                            header: `
                                relative bg-gradient-to-r from-red-500 to-orange-500 
                                px-6 py-8 text-center text-white
                            `,
                            title: `
                                text-xl font-bold mb-2
                            `,
                            closeButton: `
                                absolute top-4 right-4 p-2 text-white/80 
                                hover:text-white hover:bg-white/20 rounded-full
                                transition-all duration-200
                            `,
                            content: `
                                p-6 bg-white text-gray-800
                            `
                        }
                    }
                }}
            >
                <div className="space-y-6">
                    <div className="relative bg-gradient-to-r from-red-500 to-orange-500 -m-6 mb-6 px-6 py-8 text-center text-white">
                        <button
                            onClick={() => closeModal('customDesign')}
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-all duration-200"
                            aria-label="Close modal"
                        >
                            <FaTimes size={16} />
                        </button>
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Security Alert</h3>
                        <p className="text-red-100 text-sm">Action Required</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-center">
                            <p className="text-gray-800 font-medium mb-2">
                                Unusual activity detected
                            </p>
                            <p className="text-gray-600 text-sm">
                                We've detected a login attempt from a new device. 
                                Please verify if this was you.
                            </p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                                <div className="text-red-500 mt-0.5">⚠️</div>
                                <div>
                                    <h6 className="font-medium text-red-900 text-sm">Location: Unknown</h6>
                                    <p className="text-red-700 text-xs mt-1">
                                        Device: Chrome on Windows • IP: 192.168.1.***
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    console.log("Login verified");
                                    closeModal('customDesign');
                                }}
                                className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <FaCheckCircle size={16} />
                                Yes, it was me
                            </button>
                            <button
                                onClick={() => {
                                    console.log("Security action triggered");
                                    closeModal('customDesign');
                                }}
                                className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                            >
                                Secure my account
                            </button>
                        </div>

                        <div className="text-center pt-2">
                            <button
                                onClick={() => closeModal('customDesign')}
                                className="text-gray-500 hover:text-gray-700 text-sm underline"
                            >
                                I'll review this later
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};