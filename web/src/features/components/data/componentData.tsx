import type { ComponentData } from '../types';
import { buttonData, checkboxData, inputFieldData } from './components';
import { circleCharCounterData } from './components/circleCharCounterData';


export const componentsData: Record<string, ComponentData> = {
    'button': buttonData,
    'checkbox': checkboxData,
    'circle-char-counter': circleCharCounterData,
    'input-field': inputFieldData
};