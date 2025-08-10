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

        type ComponentVariant = InputVariant

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
	}
}
export type { DialcaUI };
