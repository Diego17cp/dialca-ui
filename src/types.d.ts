declare global {
    namespace DialcaUI {
        // ==================
        // Interfaces de Variantes
        // ==================
        interface InputVariant {
            container?: string;
            input?: string;
            label?: string;
            icon?: string;
            button?: string;
            error?: string;
            loader?: string;
        }
        
        interface TxtAreaVariant {
            container?: string
            textarea?: string;
            label?: string;
            icon?: string;
            loader?: string;
            charCounter?: string;
            error?: string;
        }

        interface DropZoneVariant {
            container?: string
            title?: string
            icon?: string
            description?: string
            error?: string
        }

        interface LoaderVariant {
            container?: string;
            outerRing?: string;
            innerRing?: string;
            content?: string;
        }

        interface SelectVariant { 
            container?: string;
            input?: string;
            label?: string;
            icon?: string;
            menu?: string;
            error?: string;
            arrow?: string;
            option?: string;
            selectedOption?: string;
        }

        interface RadioVariant {
            container?: string;
            radio?: string;
            label?: string;
            text?: string;
            description?: string;
            error?: string;
        }

        interface ModalVariant {
            overlay?: string;
            container?: string
            header?: string
            title?: string
            closeButton?: string
            content?: string
        }

        interface ButtonVariant {
            container?: string;
            content?: string;
            icon?: string;
            loader?: string;
        }

        interface CheckboxVariant {
            container?: string;
            wrapper?: string;
            checkbox?: string;
            background?: string;
            icon?: string;
            label?: string;
            error?: string;
            description?: string;
        }

        interface SwitchVariant {
            container?: string;
            wrapper?: string;
            track?: string;
            thumb?: string;
            thumbInner?: string;
            trackOverlay?: string;
            label?: string;
            description?: string;
            error?: string;
        }

        // ==================
        // Tipos base
        // ==================
        type ComponentVariant = InputVariant | TxtAreaVariant | DropZoneVariant | LoaderVariant | SelectVariant | RadioVariant | ModalVariant | ButtonVariant | CheckboxVariant | SwitchVariant;

        interface BaseStates {
            normal?: ComponentVariant;
            focused?: ComponentVariant;
            disabled?: ComponentVariant;
            error?: ComponentVariant;
        }

        // ==================
        // Estados por componente
        // ==================
        interface InputStates extends BaseStates {
            normal?: InputVariant;
            focused?: InputVariant;
            disabled?: InputVariant;
            error?: InputVariant;
        }
        
        interface TxtAreaStates extends BaseStates {
            normal?: TxtAreaVariant;
            focused?: TxtAreaVariant;
            disabled?: TxtAreaVariant;
            error?: TxtAreaVariant;
            resizing?: TxtAreaVariant;
        }

        interface DropZoneStates extends BaseStates {
            normal?: DropZoneVariant;
            focused?: DropZoneVariant;
            disabled?: DropZoneVariant;
            error?: DropZoneVariant;
            dragging?: DropZoneVariant;
        }

        interface LoaderStates extends BaseStates {
            normal?: LoaderVariant;
            disabled?: LoaderVariant;
            error?: LoaderVariant;
            success?: LoaderVariant;
        }

        interface SelectStates extends BaseStates {
            normal?: SelectVariant;
            focused?: SelectVariant;
            disabled?: SelectVariant;
            error?: SelectVariant;
            options?: SelectVariant;
            open?: SelectVariant;
            value?: SelectVariant;
        }

        interface RadioStates extends BaseStates {
            normal?: RadioVariant
            checked?: RadioVariant
            disabled?: RadioVariant
            error?: RadioVariant
            focused?: RadioVariant
        }
        interface ModalStates extends BaseStates {
            normal?: ModalVariant;
            open?: ModalVariant;
            sm?: ModalVariant;
            md?: ModalVariant;
            lg?: ModalVariant;
            xl?: ModalVariant;
            full?: ModalVariant;
            center?: ModalVariant;
            top?: ModalVariant;
            bottom?: ModalVariant;
            fade?: ModalVariant;
            slideUp?: ModalVariant;
            slideDown?: ModalVariant;
            zoom?: ModalVariant;
            hasTitle?: ModalVariant;
        }
        interface ButtonStates extends BaseStates {
            normal?: ButtonVariant;
            focused?: ButtonVariant;
            disabled?: ButtonVariant;
            error?: ButtonVariant;
            hover?: ButtonVariant;
            active?: ButtonVariant;
            loading?: ButtonVariant;
        }
        interface CheckboxStates extends BaseStates {
            normal?: CheckboxVariant;
            checked?: CheckboxVariant;
            indeterminate?: CheckboxVariant;
            disabled?: CheckboxVariant;
            error?: CheckboxVariant;
            focused?: CheckboxVariant;
            hover?: CheckboxVariant;
            errorChecked?: CheckboxVariant;
        }
        interface SwitchStates extends BaseStates {
            normal?: SwitchVariant;
            enabled?: SwitchVariant;
            disabled?: SwitchVariant;
            error?: SwitchVariant;
            focused?: SwitchVariant;
            hover?: SwitchVariant;
            loading?: SwitchVariant;
        }
    }
}

export {};
