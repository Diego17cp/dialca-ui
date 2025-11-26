import type { ComponentData } from "../types";
import {
	buttonData,
	checkboxData,
	inputFieldData,
	circleCharCounterData,
	textareaData,
	loaderData,
	modalData,
	radioData,
	switchData,
	selectData,
	searchableSelectData,
} from "./components";

export const componentsData: Record<string, ComponentData> = {
	button: buttonData,
	checkbox: checkboxData,
	"circle-char-counter": circleCharCounterData,
	"input-field": inputFieldData,
	loader: loaderData,
	modal: modalData,
	radio: radioData,
	"searchable-select": searchableSelectData,
	select: selectData,
	switch: switchData,
	textarea: textareaData,
};
