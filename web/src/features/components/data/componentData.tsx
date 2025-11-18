import type { ComponentData } from "../types";
import {
	buttonData,
	checkboxData,
	inputFieldData,
	circleCharCounterData,
	textareaData,
} from "./components";

export const componentsData: Record<string, ComponentData> = {
	button: buttonData,
	checkbox: checkboxData,
	"circle-char-counter": circleCharCounterData,
	"input-field": inputFieldData,
	textarea: textareaData,
};
