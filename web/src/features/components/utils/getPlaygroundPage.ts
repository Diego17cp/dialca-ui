const URL = import.meta.env.VITE_DOMAIN || "http://localhost:5173";
export const getPlaygroundPage = (componentName: string) => {
    return `${URL}/docs/playground#${componentName}`;
}