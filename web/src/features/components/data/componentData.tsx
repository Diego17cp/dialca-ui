import type { ComponentData } from "../types";
import {
	buttonData,
	checkboxData,
	inputFieldData,
	circleCharCounterData,
	textareaData,
	loaderData,
	radioData,
	switchData,
	selectData,
} from "./components";

export const componentsData: Record<string, ComponentData> = {
	button: buttonData,
	checkbox: checkboxData,
	"circle-char-counter": circleCharCounterData,
	"input-field": inputFieldData,
	loader: loaderData,
	radio: radioData,
	select: selectData,
	switch: switchData,
	textarea: textareaData,
};
