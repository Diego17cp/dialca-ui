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
            { title: "Input", href: "/docs/components/input" },
            { title: "Modal", href: "/docs/components/modal" },
            { title: "Card", href: "/docs/components/card" },
            { title: "Badge", href: "/docs/components/badge" },
            { title: "Avatar", href: "/docs/components/avatar" },
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