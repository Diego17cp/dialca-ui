declare global {
	namespace DialcaUI {
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

        type ComponentVariant = InputVariant | TxtAreaVariant | DropZoneVariant | LoaderVariant | SelectVariant | RadioVariant;

        interface BaseStates {
            normal?: ComponentVariant;
            focused?: ComponentVariant;
            disabled?: ComponentVariant;
            error?: ComponentVariant;
        }

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
			// focused?: LoaderVariant;
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
	}
}
export type { DialcaUI };
