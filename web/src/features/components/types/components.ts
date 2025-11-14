import type React from "react";

export interface ComponentExample {
    id: string;
    title: string;
    description?: string;
    code: string;
    codeDisplay?: React.ComponentType;
    component: React.ComponentType;
    showCode?: boolean;
}

export interface ComponentProp {
    name: string;
    type: string;
    required?: boolean;
    default?: string;
    description: string;
}
export interface ComponentAPI {
    props: ComponentProp[];
    events?: ComponentEvent[];
}
export interface ComponentEvent {
    name: string;
    description: string;
    type: string;
}
export interface ComponentType {
    name: string;
    type: string;
    description: string;
    properties?: ComponentTypeProp[];
}
export interface ComponentTypeProp {
    name: string;
    type: string;
    description: string;
}
export interface ComponentData {
    name: string;
    description: string;
    basicUsage: string;
    basicUsageDisplay?: React.ComponentType;
    basicUsageComponent?: React.ComponentType;
    examples: ComponentExample[];
    api: ComponentAPI;
    types?: ComponentType[];
    srcUrl?: string;
    issueUrl?: string;
    playgroundUrl?: string;
    relatedComponents?: string[];
}

export type ComponentTemplateProps = ComponentData;