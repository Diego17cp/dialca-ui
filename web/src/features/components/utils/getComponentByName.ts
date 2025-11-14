import type { ComponentData } from '../types';
import { componentsData } from '../data/componentData';

export const getComponentDataByName = (componentName: string): ComponentData | null => {
    return componentsData[componentName] || null;
};