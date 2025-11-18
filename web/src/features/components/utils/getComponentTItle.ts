export const getComponentTitle = (componentName: string): string => {
    const titleCase = componentName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return `${titleCase} - Components - DialcaUI`;
}