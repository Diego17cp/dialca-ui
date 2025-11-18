import { Navigate, useParams } from "react-router";
import { ComponentTemplate } from "../templates/ComponentTemplate";
import { getComponentDataByName } from "../utils/getComponentByName";
import { useDocTitle } from "@/core/hooks";
import { getComponentTitle } from "../utils";

export const Component = () => {
    const { componentName } = useParams<{ componentName: string }>();
    useDocTitle(getComponentTitle(componentName || ""));
    if (!componentName) return <Navigate to="/docs/overview/components" replace />
    const componentData = getComponentDataByName(componentName);
    if (!componentData) return <Navigate to="/docs/overview/components" replace />
    return <ComponentTemplate {...componentData} />
}