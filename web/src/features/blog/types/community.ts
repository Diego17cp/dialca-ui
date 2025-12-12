import type { IconType } from "react-icons";

export interface CommunityLink {
    name: string;
    description: string;
    url: string;
    icon: IconType;
    stats?: string;
}