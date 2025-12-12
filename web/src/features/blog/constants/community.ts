import { FaGithub, FaNpm } from "react-icons/fa6";
import type { CommunityLink } from "../types";

export const COMMUNITY_LINKS: CommunityLink[] = [
    {
        name: "GitHub",
        description: "Star the repository, report issues, and contribute to the project.",
        url: "https://github.com/dialca/dialca-ui",
        icon: FaGithub,
        stats: "⭐ Star us"
    },
    {
        name: "npm",
        description: "Install and explore the package. Check out versions and documentation.",
        url: "https://www.npmjs.com/package/dialca-ui",
        icon: FaNpm,
        stats: "📦 Latest version"
    }
];