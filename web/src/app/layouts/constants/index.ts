import type { NavItem } from "../components/SideBar";

export const navigation: NavItem[] = [
    {
        title: "Overview",
        children: [
            {
                title: "Getting Started",
                href: "/docs/overview/getting-started",
            },
            { title: "Customization", href: "/docs/overview/customization" },
            { title: "Theming", href: "/docs/overview/theming" },
            { title: "Components", href: "/docs/overview/components" }
        ],
    },
    {
        title: "Components",
        children: [
            { title: "Button", href: "/docs/components/button" },
            { title: "Checkbox", href: "/docs/components/checkbox" },
            { title: "Circle Char Counter", href: "/docs/components/circle-char-counter" },
            { title: "Drop Zone", href: "/docs/components/drop-zone" },
            { title: "Input", href: "/docs/components/input" },
            { title: "Loader", href: "/docs/components/loader" },
            { title: "Modal", href: "/docs/components/modal" },
            { title: "Radio", href: "/docs/components/radio" },
            { title: "Searchable Select", href: "/docs/components/searchable-select" },
            { title: "Select", href: "/docs/components/select" },
            { title: "Switch", href: "/docs/components/switch" },
            { title: "Textarea", href: "/docs/components/textarea" },
        ],
    },
    {
        title: "Layout",
        children: [
            { title: "Container", href: "/docs/layout/container" },
            { title: "Grid", href: "/docs/layout/grid" },
            { title: "Stack", href: "/docs/layout/stack" },
        ],
    },
    {
        title: "Theming",
        children: [
            { title: "Colors", href: "/docs/theming/colors" },
            { title: "Dark Mode", href: "/docs/theming/dark-mode" },
            { title: "Custom Themes", href: "/docs/theming/custom-themes" },
        ],
    },
];