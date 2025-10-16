import { useEffect, useRef, useState, type ReactNode } from "react";
import { useModalVariantStyles } from "../hooks";
import { cn } from "../utils";
import { FaTimes } from "react-icons/fa";

/**
 * Props for the {@link Modal} component.
 */
export interface ModalProps {
    /** Content to display inside the modal. */
    children: ReactNode;
    /** If true, the modal is visible. */
    isOpen: boolean;
    /** Callback when the modal should close. */
    onClose: () => void;
    
    /** Modal title (optional). */
    title?: string;
    /** If true, shows close button in header. */
    showCloseButton?: boolean;
    /** If true, clicking outside closes the modal. */
    closeOnOutsideClick?: boolean;
    /** If true, pressing Escape closes the modal. */
    closeOnEscape?: boolean;
    /** If true, prevents body scroll when open. */
    preventBodyScroll?: boolean;
    
    /** Size preset for the modal. */
    size?: "sm" | "md" | "lg" | "xl" | "full";
    /** Position preset for the modal. */
    position?: "center" | "top" | "bottom";
    /** Animation preset. */
    animation?: "fade" | "slide-up" | "slide-down" | "zoom" | "none";
    
    /** Variant key for custom styles. */
    variant?: string;
    /** Custom variants for styling. */
    variants?: Record<string, DialcaUI.ModalStates>;
    /** If true, merges custom variants with defaults. */
    extendDefault?: boolean;
    /** Custom classes for styling. */
    classes?: {
        overlay?: string;
        container?: string;
        header?: string;
        title?: string;
        closeButton?: string;
        content?: string;
    };
    /** Additional className for the overlay. */
    className?: string;
    
    /** Custom close icon. */
    closeIcon?: ReactNode;
    /** Additional props for the overlay div. */
    overlayProps?: React.HTMLAttributes<HTMLDivElement>;
    /** Additional props for the container div. */
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 * **Modal** renders a customizable modal dialog.
 *
 * - Supports variants and custom styles
 * - Handles keyboard navigation (Escape)
 * - Manages body scroll and focus trap
 * - Multiple size and animation options
 *
 * @component
 * @example
 * ```tsx
 * <Modal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   title="Confirmar acción"
 *   size="md"
 *   animation="slideUp"
 * >
 *   <p>¿Estás seguro de que quieres continuar?</p>
 *   <div className="flex gap-2 mt-4">
 *     <button onClick={handleConfirm}>Confirmar</button>
 *     <button onClick={() => setShowModal(false)}>Cancelar</button>
 *   </div>
 * </Modal>
 * ```
 */
export const Modal = ({
    children,
    isOpen,
    onClose,
    title,
    showCloseButton = true,
    closeOnOutsideClick = true,
    closeOnEscape = true,
    preventBodyScroll = true,
    size = "md",
    position = "center",
    animation = "fade",
    variant = "default",
    variants: customVariants = {},
    extendDefault = true,
    classes = {},
    className = "",
    closeIcon,
    overlayProps = {},
    containerProps = {},
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const { getStyles, shouldUseCSS } = useModalVariantStyles(
        variant,
        customVariants,
        {
            open: isVisible && !isAnimating, 
            size,
            position,
            animation,
            hasTitle: !!title,
        },
        extendDefault
    );

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsAnimating(true);
            
            const openTimer = setTimeout(() => {
                setIsAnimating(false);
            }, 50);
            
            return () => clearTimeout(openTimer);
        } else if (isVisible) {
            setIsAnimating(true);
            
            const closeTimer = setTimeout(() => {
                setIsVisible(false);
                setIsAnimating(false);
            }, 300); 
            
            return () => clearTimeout(closeTimer);
        }
    }, [isOpen, isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        // Store previously focused element
        previousFocusRef.current = document.activeElement as HTMLElement;

        // Focus management
        const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements?.[0] as HTMLElement;
        const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

        // Focus first element (solo cuando la animación termine)
        const focusTimer = setTimeout(() => {
            if (!isAnimating) {
                firstElement?.focus();
            }
        }, isAnimating ? 100 : 0);

        // Keyboard handlers
        const handleKeyDown = (e: KeyboardEvent) => {
            // Escape key
            if (e.key === "Escape" && closeOnEscape) {
                e.preventDefault();
                onClose();
                return;
            }

            // Tab trap (solo si no está animando)
            if (e.key === "Tab" && !isAnimating && focusableElements && focusableElements.length > 0) {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement?.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement?.focus();
                    }
                }
            }
        };

        // Outside click handler
        const handleClickOutside = (e: MouseEvent) => {
            if (
                closeOnOutsideClick &&
                !isAnimating &&
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                onClose();
            }
        };

        // Add listeners
        document.addEventListener("keydown", handleKeyDown);
        if (closeOnOutsideClick) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Prevent body scroll
        if (preventBodyScroll) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            
            return () => {
                document.body.style.overflow = originalOverflow;
                document.removeEventListener("keydown", handleKeyDown);
                document.removeEventListener("mousedown", handleClickOutside);
                clearTimeout(focusTimer);
                
                // Restore focus
                previousFocusRef.current?.focus();
            };
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
            clearTimeout(focusTimer);
            
            // Restore focus
            previousFocusRef.current?.focus();
        };
    }, [isVisible, isAnimating, onClose, closeOnEscape, closeOnOutsideClick, preventBodyScroll]);

    if (!isVisible) return null;

    // CSS classes
    const blockClass = "dialca-modal";
    const cssOverlayClass = shouldUseCSS ? `${blockClass}__overlay` : '';
    const cssOverlayModifiers = shouldUseCSS ? {
        [`${blockClass}--${variant}`]: variant !== 'default',
        [`${blockClass}--${size}`]: size !== 'md',
        [`${blockClass}--${position}`]: position !== 'center',
        [`${blockClass}--${animation}`]: animation !== 'fade',
        [`${blockClass}--open`]: !isAnimating && isOpen,
        [`${blockClass}--has-title`]: !!title,
    } : {};

    const overlayClasses = cn(
        blockClass,
        cssOverlayClass,
        cssOverlayModifiers,
        shouldUseCSS ? '' : `${!isAnimating && isOpen ? 'opacity-100' : 'opacity-0'}`,
        getStyles("overlay"),
        classes.overlay,
        className
    );

    const containerClasses = cn(
        shouldUseCSS ? `${blockClass}__container` : `${!isAnimating && isOpen ? 'opacity-100 scale-100' : 'scale-95 translate-y-4'} ${!isAnimating && isOpen ? 'opacity-100 scale-100' : 'scale-95 translate-y-4'}
            ${animation === 'slide-up' && (isAnimating && isOpen) ? 'translate-y-4! opacity-0!' : ''}
            ${animation === 'slide-down' && (isAnimating && isOpen) ? '-translate-y-4! opacity-0!' : ''}
            ${animation === 'zoom' && (isAnimating && isOpen) ? 'scale-95! opacity-0!' : ''}`,
        getStyles("container"),
        classes.container
    );

    return (
        <div
            className={overlayClasses}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            {...overlayProps}
        >
            <div
                ref={modalRef}
                className={containerClasses}
                {...containerProps}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className={cn(
                        shouldUseCSS ? `${blockClass}__header` : '',
                        getStyles("header"), 
                        classes.header
                    )}>
                        {title && (
                            <h2
                                id="modal-title"
                                className={cn(
                                    shouldUseCSS ? `${blockClass}__title` : '',
                                    getStyles("title"), 
                                    classes.title
                                )}
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                type="button"
                                onClick={onClose}
                                className={cn(
                                    shouldUseCSS ? `${blockClass}__close-button` : '',
                                    getStyles("closeButton"), 
                                    classes.closeButton
                                )}
                                aria-label="Cerrar modal"
                            >
                                {closeIcon || <FaTimes />}
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className={cn(
                    shouldUseCSS ? `${blockClass}__content` : '',
                    title && (shouldUseCSS ? '' : ''),
                    getStyles("content"), 
                    classes.content
                )}>
                    {children}
                </div>
            </div>
        </div>
    );
};

Modal.displayName = "Modal";
