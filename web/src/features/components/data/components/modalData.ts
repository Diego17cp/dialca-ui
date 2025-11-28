import {
	BasicModalExample,
	BasicModalUsage,
	ModalCustomizationCode,
	ModalCustomizationExample,
	ModalPositionsAnimationsCode,
	ModalPositionsAnimationsExample,
	ModalSizesCode,
	ModalSizesExample,
    ModalVariantsCode,
    ModalVariantsExample,
} from "../../components/Modal";
import type { ComponentData } from "../../types";
import { getIssueComponentPage, getSrcComponentPage } from "../../utils";

const basicUsageCode = `import { Modal, Button } from 'dialca-ui';
import { useState } from 'react';
import { FaCircleExclamation } from 'react-icons/fa6';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Open Modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Confirm Action"
                animation="slide-up"
            >
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <FaCircleExclamation className="text-red-600" size={20} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-900 font-medium">
                                This action cannot be undone
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                Are you sure you want to proceed?
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            variant="danger"
                            onClick={() => {
                                console.log("Confirmed");
                                setIsOpen(false);
                            }}
                        >
                            Yes, confirm
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}`;

const sizesCode = `import { Modal, Button } from 'dialca-ui';
import { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export default function App() {
    const [modalStates, setModalStates] = useState({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        full: false,
        noHeader: false,
    });

    // Custom content component without header
    const CustomContent = ({ onClose }) => (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Custom header with gradient */}
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8 text-white text-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full"
                >
                    <FaTimes size={16} />
                </button>
                <h3 className="text-xl font-bold">Custom Modal</h3>
            </div>
            <div className="p-6">
                <p>Custom content without default header</p>
                <Button onClick={onClose} className="mt-4">
                    <FaCheck className="mr-2" />
                    Done
                </Button>
            </div>
        </div>
    );

    return (
        <div>
            {/* Small Modal */}
            <Modal
                isOpen={modalStates.sm}
                onClose={() => setModalStates(prev => ({ ...prev, sm: false }))}
                title="Small Modal"
                size="sm"
            >
                <p>Perfect for confirmations</p>
            </Modal>

            {/* Medium Modal (default) */}
            <Modal
                size="md"
                title="Medium Modal"
            >
                <p>Default size for most content</p>
            </Modal>

            {/* Large Modal */}
            <Modal
                size="lg"
                title="Large Modal"
            >
                <div className="grid grid-cols-2 gap-4">
                    <div>Left column</div>
                    <div>Right column</div>
                </div>
            </Modal>

            {/* Extra Large Modal */}
            <Modal
                size="xl"
                title="Extra Large Modal"
            >
                <div className="grid grid-cols-3 gap-6">
                    <div>Section 1</div>
                    <div>Section 2</div>
                    <div>Section 3</div>
                </div>
            </Modal>

            {/* Fullscreen Modal */}
            <Modal
                size="full"
                title="Fullscreen Modal"
            >
                <div className="h-full">
                    <p>Takes up entire viewport</p>
                </div>
            </Modal>

            {/* Modal without header */}
            <Modal
                isOpen={modalStates.noHeader}
                onClose={() => setModalStates(prev => ({ ...prev, noHeader: false }))}
                showCloseButton={false}
                size="md"
                closeOnOutsideClick={false}
            >
                <CustomContent onClose={() => setModalStates(prev => ({ ...prev, noHeader: false }))} />
            </Modal>
        </div>
    );
}`;

const positionsAnimationsCode = `import { Modal, Button } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Center position with fade animation (default) */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Center + Fade"
                position="center"
                animation="fade"
            >
                <p>Modal content here</p>
            </Modal>

            {/* Center with slide up animation */}
            <Modal position="center" animation="slide-up">
                <p>Slides up from bottom while staying centered</p>
            </Modal>

            {/* Center with slide down animation */}
            <Modal position="center" animation="slide-down">
                <p>Slides down from top while staying centered</p>
            </Modal>

            {/* Center with zoom animation */}
            <Modal position="center" animation="zoom">
                <p>Zooms in from smaller scale</p>
            </Modal>

            {/* Top position with fade */}
            <Modal position="top" animation="fade">
                <p>Appears at top with fade</p>
            </Modal>

            {/* Top position with slide down */}
            <Modal position="top" animation="slide-down">
                <p>Perfect for notifications sliding down from top</p>
            </Modal>

            {/* Bottom position with fade */}
            <Modal position="bottom" animation="fade">
                <p>Appears at bottom with fade</p>
            </Modal>

            {/* Bottom position with slide up */}
            <Modal position="bottom" animation="slide-up">
                <p>Great for mobile-style bottom sheets</p>
            </Modal>

            {/* No animation */}
            <Modal position="center" animation="none">
                <p>Appears instantly without transition</p>
            </Modal>
        </div>
    );
}`;

const variantsCode = `import { Modal, Button } from 'dialca-ui';
import { useState } from 'react';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Default variant (standard styling) */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Default Modal"
                variant="default"
            >
                <p>Standard modal with clean styling</p>
            </Modal>

            {/* Dark variant (dark theme) */}
            <Modal
                variant="dark"
                title="Dark Modal"
            >
                <p>Dark themed modal for dark mode apps</p>
            </Modal>

            {/* Minimal variant (compact design) */}
            <Modal
                variant="minimal"
                title="Minimal Modal"
            >
                <p>Compact modal with reduced padding</p>
            </Modal>

            {/* Glassmorphism variant (translucent with blur) */}
            <Modal
                variant="glassmorphism"
                title="Glass Modal"
            >
                <p>Glass effect with backdrop blur</p>
            </Modal>
        </div>
    );
}`;

const customizationCode = `import { Modal, Button } from 'dialca-ui';
import { useState } from 'react';
import { FaTimes, FaShieldAlt } from 'react-icons/fa';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Custom classes - extends default styles */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Orange Theme Modal"
                classes={{
                    overlay: 'bg-orange-900/40! backdrop-blur-md!',
                    container: 'border-2! border-orange-200! shadow-orange-500/20!',
                    header: 'bg-gradient-to-r! from-orange-50! to-amber-50!',
                    title: 'text-orange-800! font-bold!',
                    closeButton: 'text-orange-500! hover:bg-orange-100!',
                    content: 'bg-orange-50/30!'
                }}
            >
                <p>Custom orange themed modal</p>
            </Modal>

            {/* Complete redesign with extendDefault=false */}
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                showCloseButton={false}
                variant="security"
                extendDefault={false}
                closeOnOutsideClick={false}
                variants={{
                    security: {
                        normal: {
                            overlay: 'fixed inset-0 z-50 bg-red-900/50 backdrop-blur-sm',
                            container: 'bg-white rounded-2xl shadow-2xl border-red-200',
                            content: 'p-6 bg-white text-gray-800'
                        }
                    }
                }}
            >
                {/* Custom content with inline close button */}
                <div className="relative">
                    <button onClick={handleClose}>
                        <FaTimes />
                    </button>
                    <div>
                        <FaShieldAlt />
                        <h3>Security Alert</h3>
                        <p>Custom security modal content</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}`;

export const modalData: ComponentData = {
	name: "Modal",
	description: "A modal component for displaying content in a dialog box.",
	srcUrl: getSrcComponentPage("Modal"),
	issueUrl: getIssueComponentPage("Modal"),
	playgroundUrl: getIssueComponentPage("Modal"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicModalExample,
	basicUsageDisplay: BasicModalUsage,
	examples: [
		{
			id: "sizes",
			title: "Sizes & Modal without Header",
			description:
				"Different modal sizes and custom modal without default header structure.",
			code: sizesCode,
			component: ModalSizesExample,
			codeDisplay: ModalSizesCode,
		},
		{
			id: "positions-animations",
			title: "Positions & Animations",
			description:
				"Different modal positions and animations.",
			code: positionsAnimationsCode,
			component: ModalPositionsAnimationsExample,
			codeDisplay: ModalPositionsAnimationsCode,
		},
        {
            id: "variants",
            title: "Variants",
            description:
                "Different modal variants for various styles.",
            code: variantsCode,
            component: ModalVariantsExample,
            codeDisplay: ModalVariantsCode,
        },
        {
            id: "customization",
            title: "Customization",
            description: "Demonstrates how to customize the modal with custom classes and variants.",
            code: customizationCode,
            component: ModalCustomizationExample,
            codeDisplay: ModalCustomizationCode,
        }
	],
	api: {
		props: [
			{
				name: "children",
				type: "React.ReactNode",
				description: "The content to be displayed inside the modal.",
				required: true,
			},
			{
				name: "isOpen",
				type: "boolean",
				description: "Determines whether the modal is open or closed.",
				required: true,
			},
			{
				name: "onClose",
				type: "() => void",
				description:
					"Function to be called when the modal is requested to be closed.",
				required: true,
			},
			{
				name: "title",
				type: "string",
				description: "Modal title displayed in the modal header.",
			},
			{
				name: "showCloseButton",
				type: "boolean",
				default: "true",
				description:
					"Determines whether the close button is displayed in the modal header. Set to false and without a title to create a modal without a header.",
			},
			{
				name: "closeOnOutsideClick",
				type: "boolean",
				default: "true",
				description:
					"Determines whether clicking outside the modal will close it.",
			},
			{
				name: "closeOnEscape",
				type: "boolean",
				default: "true",
				description:
					"Determines whether pressing the Escape key will close the modal.",
			},
			{
				name: "preventBodyScroll",
				type: "boolean",
				default: "true",
				description:
					"Determines whether the body scroll is prevented when the modal is open.",
			},
			{
				name: "size",
				type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
				default: "'md'",
				description: "Defines the size of the modal.",
			},
			{
				name: "position",
				type: "'center' | 'top' | 'bottom'",
				default: "'center'",
				description:
					"Defines the vertical position of the modal on the screen.",
			},
			{
				name: "animation",
				type: "'fade' | 'slide-down' | 'slide-up' | 'zoom' | 'none'",
				default: "'fade'",
				description:
					"Defines the animation used when the modal appears and disappears.",
			},
			{
				name: "closeIcon",
				type: "React.ReactNode",
				description: "Custom close icon for the modal close button.",
			},
			{
				name: "overlayProps",
				type: "React.HTMLAttributes<HTMLDivElement>",
				description:
					"Additional props to be passed to the modal overlay element.",
			},
			{
				name: "containerProps",
				type: "React.HTMLAttributes<HTMLDivElement>",
				description:
					"Additional props to be passed to the modal container element.",
			},
			{
				name: "variant",
				type: "string",
				default: "'default'",
				description: "Defines the key variant style of the modal.",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.ModalStates>",
				description:
					"Allows defining custom variant styles for the modal.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				default: "true",
				description:
					"Determines whether to extend the default styles when using custom variants.",
			},
			{
				name: "classes",
				type: "DialcaUI.ModalVariant",
				description:
					"Allows overriding specific class names for different parts of the modal component.",
			},
			{
				name: "className",
				type: "string",
				description:
					"Additional class names to be added to the overlay element.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.ModalStates",
			type: "interface",
			description:
				"Interface for defining style states for Modal component variants.",
			properties: [
				{
					name: "normal",
					type: "DialcaUI.ModalVariant",
					description: "Normal state styles for the modal.",
				},
				{
					name: "open",
					type: "DialcaUI.ModalVariant",
					description: "Styles applied when the modal is open.",
				},
				{
					name: "sm",
					type: "DialcaUI.ModalVariant",
					description: "Styles for small size modal.",
				},
				{
					name: "md",
					type: "DialcaUI.ModalVariant",
					description: "Styles for medium size modal.",
				},
				{
					name: "lg",
					type: "DialcaUI.ModalVariant",
					description: "Styles for large size modal.",
				},
				{
					name: "xl",
					type: "DialcaUI.ModalVariant",
					description: "Styles for extra-large size modal.",
				},
				{
					name: "full",
					type: "DialcaUI.ModalVariant",
					description: "Styles for full-screen modal.",
				},
				{
					name: "center",
					type: "DialcaUI.ModalVariant",
					description: "Styles for vertically centered modal.",
				},
				{
					name: "top",
					type: "DialcaUI.ModalVariant",
					description: "Styles for top-aligned modal.",
				},
				{
					name: "bottom",
					type: "DialcaUI.ModalVariant",
					description: "Styles for bottom-aligned modal.",
				},
				{
					name: "fade",
					type: "DialcaUI.ModalVariant",
					description: "Styles for fade animation.",
				},
				{
					name: "slideUp",
					type: "DialcaUI.ModalVariant",
					description: "Styles for slide-up animation.",
				},
				{
					name: "slideDown",
					type: "DialcaUI.ModalVariant",
					description: "Styles for slide-down animation.",
				},
				{
					name: "zoom",
					type: "DialcaUI.ModalVariant",
					description: "Styles for zoom animation.",
				},
				{
					name: "hasTitle",
					type: "DialcaUI.ModalVariant",
					description: "Styles applied when the modal has a title.",
				},
			],
		},
		{
			name: "DialcaUI.ModalVariant",
			type: "interface",
			description:
				"Interface for defining CSS classes for different parts of the Modal component in a specific variant.",
			properties: [
				{
					name: "overlay",
					type: "string",
					description:
						"CSS class for the modal overlay backdrop element",
				},
				{
					name: "container",
					type: "string",
					description: "CSS class for the modal container element",
				},
				{
					name: "header",
					type: "string",
					description: "CSS class for the modal header element",
				},
				{
					name: "title",
					type: "string",
					description: "CSS class for the modal title element",
				},
				{
					name: "closeButton",
					type: "string",
					description: "CSS class for the modal close button element",
				},
				{
					name: "content",
					type: "string",
					description: "CSS class for the modal content element",
				},
			],
		},
	],
};
