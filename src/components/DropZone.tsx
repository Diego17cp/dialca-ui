import { cn, useDropZoneVariantStyles } from "../utils/classNames";

interface Props {
	isDragging: boolean;
	onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
	onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
	onClick: () => void;
	description?: string;
	children?: React.ReactNode;
	icon?: React.ReactNode;
    title?: React.ReactNode;
    hasErrors?: boolean;
    errorMessage?: string;
    errorIcon?: React.ReactNode;
    variant?: string;
    variants?: Record<string, DialcaUI.DropZoneStates>;
    extendDefault?: boolean;
    classes?: {
        container?: string
        error?: string
        icon?: string
        title?: string
        description?: string
    }
}
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
    variant = 'default',
    variants,
    extendDefault,
    classes
}) => {
    const { getStyles } = useDropZoneVariantStyles(
        variant,
        variants,
        { hasErrors, isDragging },
        extendDefault
    )
	return (
        <div>      
            <div
                className={cn(getStyles('container'), classes?.container)}
                onClick={onClick}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                {children || (
                    <>
                        <div className={cn(getStyles('icon'), classes?.icon)}>
                            {errorIcon && hasErrors ? (errorIcon) : (icon)}
                        </div>
                        <p className={cn(getStyles('title'), classes?.title)}>
                            {title}
                        </p>
                        <p className={cn(getStyles('description'), classes?.description)}>
                            {description}
                        </p>
                    </>
                )}
            </div>
            {hasErrors && errorMessage && (
                <div className={cn(getStyles('error'), classes?.error)}>
                    {errorIcon}
                    {errorMessage}
                </div>
            )}
        </div>
	);
};