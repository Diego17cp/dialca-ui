import { useState } from 'react';
import { Modal, Button } from 'dialca-ui';

export const ModalPositionsAnimationsExample: React.FC = () => {
    const [modalStates, setModalStates] = useState({
        centerFade: false,
        centerSlideUp: false,
        centerSlideDown: false,
        centerZoom: false,
        topFade: false,
        topSlideDown: false,
        bottomFade: false,
        bottomSlideUp: false,
        noAnimation: false,
    });

    const openModal = (key: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [key]: true }));
    };

    const closeModal = (key: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [key]: false }));
    };

    return (
        <div className="space-y-8">
            {/* Center Position with Different Animations */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Center Position with Animations
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Modals centered on screen with different animation types.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Button variant="outline" size="sm" onClick={() => openModal('centerFade')}>
                        Fade
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('centerSlideUp')}>
                        Slide Up
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('centerSlideDown')}>
                        Slide Down
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('centerZoom')}>
                        Zoom
                    </Button>
                </div>
            </div>

            {/* Top Position */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Top Position
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Modals positioned at the top of the viewport.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" onClick={() => openModal('topFade')}>
                        Top + Fade
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('topSlideDown')}>
                        Top + Slide Down
                    </Button>
                </div>
            </div>

            {/* Bottom Position */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Bottom Position
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Modals positioned at the bottom of the viewport.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" onClick={() => openModal('bottomFade')}>
                        Bottom + Fade
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openModal('bottomSlideUp')}>
                        Bottom + Slide Up
                    </Button>
                </div>
            </div>

            {/* No Animation */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        No Animation
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Modal that appears instantly without any animation.
                    </p>
                </div>
                
                <Button variant="outline" size="sm" onClick={() => openModal('noAnimation')}>
                    No Animation
                </Button>
            </div>

            {/* Center Position Modals */}
            <Modal
                isOpen={modalStates.centerFade}
                onClose={() => closeModal('centerFade')}
                title="Center + Fade Animation"
                position="center"
                animation="fade"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal uses fade animation and is centered on the screen.
                </p>
            </Modal>

            <Modal
                isOpen={modalStates.centerSlideUp}
                onClose={() => closeModal('centerSlideUp')}
                title="Center + Slide Up"
                position="center"
                animation="slide-up"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal slides up from the bottom while staying centered.
                </p>
            </Modal>

            <Modal
                isOpen={modalStates.centerSlideDown}
                onClose={() => closeModal('centerSlideDown')}
                title="Center + Slide Down"
                position="center"
                animation="slide-down"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal slides down from the top while staying centered.
                </p>
            </Modal>

            <Modal
                isOpen={modalStates.centerZoom}
                onClose={() => closeModal('centerZoom')}
                title="Center + Zoom"
                position="center"
                animation="zoom"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal zooms in from a smaller scale at the center.
                </p>
            </Modal>

            {/* Top Position Modals */}
            <Modal
                isOpen={modalStates.topFade}
                onClose={() => closeModal('topFade')}
                title="Top + Fade"
                position="top"
                animation="fade"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal appears at the top of the screen with fade animation.
                </p>
            </Modal>

            <Modal
                isOpen={modalStates.topSlideDown}
                onClose={() => closeModal('topSlideDown')}
                title="Top + Slide Down"
                position="top"
                animation="slide-down"
                size="sm"
            >
                <p className="text-gray-600">
                    Perfect for notifications or alerts that slide down from the top.
                </p>
            </Modal>

            {/* Bottom Position Modals */}
            <Modal
                isOpen={modalStates.bottomFade}
                onClose={() => closeModal('bottomFade')}
                title="Bottom + Fade"
                position="bottom"
                animation="fade"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal appears at the bottom with a simple fade effect.
                </p>
            </Modal>

            <Modal
                isOpen={modalStates.bottomSlideUp}
                onClose={() => closeModal('bottomSlideUp')}
                title="Bottom + Slide Up"
                position="bottom"
                animation="slide-up"
                size="sm"
            >
                <p className="text-gray-600">
                    Great for mobile-style bottom sheets that slide up.
                </p>
            </Modal>

            {/* No Animation Modal */}
            <Modal
                isOpen={modalStates.noAnimation}
                onClose={() => closeModal('noAnimation')}
                title="Instant Modal"
                position="center"
                animation="none"
                size="sm"
            >
                <p className="text-gray-600">
                    This modal appears instantly without any transition animation.
                </p>
            </Modal>
        </div>
    );
};