import { Navigate, useParams } from "react-router";
import { ComponentTemplate } from "../templates/ComponentTemplate";
import { getComponentDataByName } from "../utils/getComponentByName";

export const Component = () => {
    const { componentName } = useParams<{ componentName: string }>();
    if (!componentName) return <Navigate to="/docs/overview/components" replace />
    const componentData = getComponentDataByName(componentName);
    if (!componentData) return <Navigate to="/docs/overview/components" replace />
    return <ComponentTemplate {...componentData} />
}