export interface BlogPost {
    title: string;
    subTitle: string;
    slug: string;
    date: string;
    cardDescription: string;
    introduction: string;
    content: React.ReactNode;
    imgUrl: string;
    author?: string;
}