import { cn, useDropZoneVariantStyles } from "../utils/classNames";

/**
 * Props for the DropZone component.
 * Represents the configuration and behavior for a file drag-and-drop area.
 */
interface Props {
    /** Whether files are currently being dragged over the drop zone. */
    isDragging: boolean;
    /** Event handler triggered when a file is dragged over the drop zone. */
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    /** Event handler triggered when a dragged file leaves the drop zone. */
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    /** Event handler triggered when files are dropped into the drop zone. */
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    /** Callback triggered when the drop zone is clicked (e.g., to open file picker). */
    onClick: () => void;
    /** Optional text description shown below the title. */
    description?: string;
    /** Optional custom children elements to replace the default content. */
    children?: React.ReactNode;
    /** Optional icon element to display in the drop zone. */
    icon?: React.ReactNode;
    /** Optional title text or element displayed in the drop zone. */
    title?: React.ReactNode;
    /** Whether the drop zone should display an error state. */
    hasErrors?: boolean;
    /** Optional error message to display when `hasErrors` is true. */
    errorMessage?: string;
    /** Optional icon to display when an error occurs. */
    errorIcon?: React.ReactNode;
    /** Variant key to determine styling via `variants`. */
    variant?: string;
    /** Object mapping variant names to style definitions. */
    variants?: Record<string, DialcaUI.DropZoneStates>;
    /** Whether to extend the default styles instead of replacing them. */
    extendDefault?: boolean;
    /** Optional additional class names for specific sub-elements. */
    classes?: {
        container?: string;
        error?: string;
        icon?: string;
        title?: string;
        description?: string;
    };
}

/**
 * DropZone Component
 *
 * Provides a file drag-and-drop area with customizable content, styles, and variants.
 * Supports drag-and-drop events, click-to-upload, error states, and flexible styling.
 *
 * @component
 * @example
 * ```tsx
 * <DropZone
 *   isDragging={false}
 *   onDragOver={(e) => e.preventDefault()}
 *   onDragLeave={() => console.log("Left")}
 *   onDrop={(e) => console.log(e.dataTransfer.files)}
 *   onClick={() => console.log("Clicked")}
 *   description="Upload images up to 5MB"
 * />
 * ```
 *
 * @param props - See {@link Props} for a full list of supported props.
 */
export const DropZone: React.FC<Props> = ({
    isDragging,
    onDragOver,
    onDragLeave,
    onDrop,
    onClick,
    description = "Formatos soportados: JPG, PNG, WEBP. Máximo 5MB por imagen",
    children,
    icon = "fa-cloud-arrow-up",
    title = (
        <>
            Arrastra y suelta tus archivos aquí o{" "}
            <span className="text-[#085691]">
                haz click para buscar
            </span>
        </>
    ),
    errorIcon,
    errorMessage,
    hasErrors = false,
    variant = "default",
    variants,
    extendDefault,
    classes
}) => {
    const { getStyles } = useDropZoneVariantStyles(
        variant,
        variants,
        { hasErrors, isDragging },
        extendDefault
    );

    return (
        <div>
            <div
                className={cn(getStyles("container"), classes?.container)}
                onClick={onClick}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                {children || (
                    <>
                        <div className={cn(getStyles("icon"), classes?.icon)}>
                            {errorIcon && hasErrors ? errorIcon : icon}
                        </div>
                        <p className={cn(getStyles("title"), classes?.title)}>
                            {title}
                        </p>
                        <p className={cn(getStyles("description"), classes?.description)}>
                            {description}
                        </p>
                    </>
                )}
            </div>
            {hasErrors && errorMessage && (
                <div className={cn(getStyles("error"), classes?.error)}>
                    {errorIcon}
                    {errorMessage}
                </div>
            )}
        </div>
    );
};
