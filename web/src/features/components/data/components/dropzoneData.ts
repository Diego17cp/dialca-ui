import {
	BasicUsageCode,
	BasicUsageExample,
	CustomizationCode,
	CustomizationExample,
	SizesCode,
	SizesExample,
	StatesCode,
	StatesExample,
	VariantsCode,
	VariantsExample,
} from "../../components/Dropzone";
import type { ComponentData } from "../../types";
import {
	getIssueComponentPage,
	getPlaygroundPage,
	getSrcComponentPage,
} from "../../utils";

const basicUsageCode = `import { DropZone } from 'dialca-ui';
import { useState } from 'react';
import { FaFileImage, FaExclamationTriangle } from 'react-icons/fa';

export default function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleClick = () => {
        // Open file picker
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.click();
    };

    return (
        <div>
            {/* Basic DropZone */}
            <DropZone
                isDragging={isDragging}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
            />

            {/* Custom DropZone with icons and validation */}
            <DropZone
                isDragging={isDragging}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
                icon={<FaFileImage size={48} />}
                title="Upload your images"
                description="PNG, JPG, WEBP up to 5MB each"
                hasErrors={false}
                errorMessage="Invalid file format"
                errorIcon={<FaExclamationTriangle />}
            />
        </div>
    );
}`;

const statesCode = `import { DropZone, Button } from 'dialca-ui';
import { useState } from 'react';
import { FaFileImage, FaExclamationTriangle, FaBan } from 'react-icons/fa';

export default function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        // Validate files
        const hasInvalidFiles = files.some(file => file.size > 2000000);
        setHasError(hasInvalidFiles);
    };

    return (
        <div>
            {/* Normal State */}
            <DropZone
                isDragging={isDragging}
                onDrop={handleDrop}
                title="Normal DropZone"
            />

            {/* Error State */}
            <DropZone
                isDragging={isDragging}
                onDrop={handleDrop}
                hasErrors={hasError}
                errorMessage="Invalid file format or size"
                errorIcon={<FaExclamationTriangle />}
                title="Validation DropZone"
            />

            {/* Disabled State */}
            <DropZone
                isDragging={false}
                onDrop={() => {}}
                disabled={true}
                icon={<FaBan />}
                title="Upload Disabled"
            />

            {/* Reset error */}
            <Button onClick={() => setHasError(false)}>
                Clear Error
            </Button>
        </div>
    );
}`;

const sizesCode = `import { DropZone } from 'dialca-ui';
import { useState } from 'react';
import { FaFileImage, FaCloudArrowUp, FaFolderOpen } from 'react-icons/fa';

export default function App() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        console.log(files);
    };

    return (
        <div>
            {/* Small size - compact for tight spaces */}
            <DropZone
                isDragging={isDragging}
                size="sm"
                onDrop={handleDrop}
                icon={<FaFileImage size={24} />}
                title="Quick Upload"
                description="JPG, PNG only"
            />

            {/* Medium size - default standard size */}
            <DropZone
                isDragging={isDragging}
                size="md"
                onDrop={handleDrop}
                icon={<FaCloudArrowUp size={32} />}
                title="Upload your files"
                description="Multiple formats supported"
            />

            {/* Large size - for bulk uploads */}
            <DropZone
                isDragging={isDragging}
                size="lg"
                onDrop={handleDrop}
                icon={<FaFolderOpen size={48} />}
                title="Bulk File Upload"
                description="Drop multiple files or folders here"
            />
        </div>
    );
}`;

const variantsCode = `import { DropZone } from 'dialca-ui';
import { useState } from 'react';
import { FaFileImage, FaCloudArrowUp, FaCamera } from 'react-icons/fa';

export default function App() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        console.log('Files dropped');
    };

    return (
        <div>
            {/* Default variant - standard blue theme */}
            <DropZone
                isDragging={isDragging}
                variant="default"
                onDrop={handleDrop}
                title="Default Style"
            />

            {/* Dark variant - dark theme */}
            <DropZone
                isDragging={isDragging}
                variant="dark"
                onDrop={handleDrop}
                title="Dark Mode Style"
            />

            {/* Minimal variant - clean design */}
            <DropZone
                isDragging={isDragging}
                variant="minimal"
                onDrop={handleDrop}
                title="Minimal Design"
            />

            {/* Compact variant - horizontal layout */}
            <DropZone
                isDragging={isDragging}
                variant="compact"
                onDrop={handleDrop}
                title="Compact Layout"
            />

            {/* Bordered variant - with border */}
            <DropZone
                isDragging={isDragging}
                variant="bordered"
                onDrop={handleDrop}
                title="Bordered Style"
            />
        </div>
    );
}`;

const customizationCode = `import { DropZone } from 'dialca-ui';
import { useState } from 'react';
import { FaUpload, FaCamera } from 'react-icons/fa';

export default function App() {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div>
            {/* 1. Classes Override - Quick styling */}
            <DropZone
                isDragging={isDragging}
                onDrop={handleDrop}
                title="Custom Styled DropZone"
                classes={{
                    container: 'border-orange-300 bg-gradient-to-br from-orange-50',
                    icon: 'text-orange-600 drop-shadow-md',
                    title: 'text-orange-800 font-bold text-xl'
                }}
            />

            {/* 2. Custom Variant - Complete control */}
            <DropZone
                isDragging={isDragging}
                variant="neon"
                variants={{
                    neon: {
                        normal: {
                            container: 'bg-gray-900 border-cyan-400 rounded-xl',
                            icon: 'text-cyan-400',
                            title: 'text-white font-bold'
                        },
                        dragging: {
                            container: 'border-purple-400 scale-105',
                            icon: 'text-purple-400'
                        }
                    }
                }}
                extendDefault={false}
                onDrop={handleDrop}
                icon={<FaUpload size={48} />}
                title="NEON UPLOAD ZONE"
            />

            {/* 3. Custom Children - Full content control */}
            <DropZone
                isDragging={isDragging}
                onDrop={handleDrop}
                size="lg"
            >
                <div className="flex items-center justify-between w-full">
                    <div className="text-center">
                        <FaCamera className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-bold">
                            Drop your media files here
                        </h3>
                        <p className="text-gray-600">
                            Support for images, videos, and audio
                        </p>
                    </div>
                </div>
            </DropZone>
        </div>
    );
}`;

export const dropzoneData: ComponentData = {
	name: "Drop Zone",
	description:
		"A component that allows users to drag and drop files for upload.",
	srcUrl: getSrcComponentPage("DropZone"),
	issueUrl: getIssueComponentPage("DropZone"),
	playgroundUrl: getPlaygroundPage("DropZone"),
	basicUsage: basicUsageCode,
	basicUsageComponent: BasicUsageExample,
	basicUsageDisplay: BasicUsageCode,
	examples: [
		{
			id: "states",
			title: "States Example",
			description:
				"Demonstrates various states of the DropZone component including default, error, and disabled states.",
			code: statesCode,
			component: StatesExample,
			codeDisplay: StatesCode,
		},
		{
			id: "sizes",
			title: "Sizes Example",
			description:
				"Shows the DropZone component in different sizes: small, medium, and large.",
			code: sizesCode,
			component: SizesExample,
			codeDisplay: SizesCode,
		},
		{
			id: "variants",
			title: "Variants Example",
			description:
				"Available variants for the DropZone component with custom styles for different states.",
			code: variantsCode,
			component: VariantsExample,
			codeDisplay: VariantsCode,
		},
		{
			id: "customization",
			title: "Customization Example",
			description:
				"Demonstrates how to customize the DropZone component using custom icons, titles, descriptions, and styles.",
			code: customizationCode,
			component: CustomizationExample,
            codeDisplay: CustomizationCode,
		},
	],
	api: {
		props: [
			{
				name: "isDragging",
				type: "boolean",
				required: true,
				default: "false",
				description:
					"Indicates whether a file is currently being dragged over the drop zone.",
			},
			{
				name: "onDragOver",
				type: "(e: React.DragEvent<HTMLDivElement>) => void",
				required: true,
				description:
					"Callback fired when a file is dragged over the drop zone.",
			},
			{
				name: "onDragLeave",
				type: "(e: React.DragEvent<HTMLDivElement>) => void",
				required: true,
				description:
					"Callback fired when a file is dragged out of the drop zone.",
			},
			{
				name: "onDrop",
				type: "(e: React.DragEvent<HTMLDivElement>) => void",
				required: true,
				description:
					"Callback fired when a file is dropped onto the drop zone.",
			},
			{
				name: "onClick",
				type: "() => void",
				required: true,
				description: "Callback fired when the drop zone is clicked.",
			},
			{
				name: "title",
				type: "React.ReactNode",
				description:
					"Optional title text or element displayed in the drop zone.",
				default: "'Drag & Drop your files here or click to upload'",
			},
			{
				name: "description",
				type: "string",
				description:
					"Optional text description displayed below the title.",
				default:
					"'Supported Formats: PNG, JPG, WEBP. Max size: 5MB each.'",
			},
			{
				name: "icon",
				type: "React.ReactNode",
				description:
					"Optional icon element to display in the drop zone.",
				default: "A default upload icon.",
			},
			{
				name: "children",
				type: "React.ReactNode",
				description:
					"Optional custom children elements to replace the default content (title, description & icon).",
			},
			{
				name: "hasErrors",
				type: "boolean",
				default: "false",
				description:
					"Whether the drop zone should display an error state.",
			},
			{
				name: "errorMessage",
				type: "string",
				description:
					"Optional error message to display when `hasErrors` is true.",
			},
			{
				name: "errorIcon",
				type: "React.ReactNode",
				description:
					"Optional icon to display when an error occurs, rendering alongside the error message and replacing the default icon.",
			},
			{
				name: "disabled",
				type: "boolean",
				default: "false",
				description: "Whether the dropzone is disabled.",
			},
			{
				name: "size",
				type: "'sm' | 'md' | 'lg'",
				default: "'md'",
				description: "Size of the dropzone.",
			},
			{
				name: "variant",
				type: "string",
				description: "Variant key to determine styling via `variants`.",
				default: "'default'",
			},
			{
				name: "variants",
				type: "Record<string, DialcaUI.DropZoneStates>",
				description:
					"Object mapping variant names to style definitions.",
			},
			{
				name: "extendDefault",
				type: "boolean",
				default: "true",
				description:
					"Whether to extend the default styles instead of replacing them.",
			},
			{
				name: "classes",
				type: "DialcaUI.DropzoneVariant",
				description:
					"Optional additional class names for specific sub-elements.",
			},
			{
				name: "className",
				type: "string",
				description: "Additional className for the main container.",
			},
		],
	},
	types: [
		{
			name: "DialcaUI.DropZoneStates",
			type: "interface",
			description:
				"Interface defining style properties for different DropZone states.",
			properties: [
				{
					name: "normal",
					type: "DropzoneVariant",
					description: "Styles for the normal state of the DropZone.",
				},
				{
					name: "dragging",
					type: "DropzoneVariant",
					description:
						"Styles for the dragging state of the DropZone.",
				},
				{
					name: "disabled",
					type: "DropzoneVariant",
					description:
						"Styles for the disabled state of the DropZone.",
				},
				{
					name: "error",
					type: "DropzoneVariant",
					description: "Styles for the error state of the DropZone.",
				},
				{
					name: "focused",
					type: "DropzoneVariant",
					description:
						"Styles for the focused state of the DropZone.",
				},
			],
		},
		{
			name: "DialcaUI.DropzoneVariant",
			type: "interface",
			description:
				"Interface defining style properties for a DropZone variant.",
			properties: [
				{
					name: "container",
					type: "string",
					description: "CSS class for the main drop zone container.",
				},
				{
					name: "icon",
					type: "string",
					description: "CSS class for the icon element.",
				},
				{
					name: "title",
					type: "string",
					description: "CSS class for the title element.",
				},
				{
					name: "description",
					type: "string",
					description: "CSS class for the description element.",
				},
				{
					name: "error",
					type: "string",
					description: "CSS class for the error message container.",
				},
			],
		},
	],
};
