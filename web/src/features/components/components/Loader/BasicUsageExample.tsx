import { Loader } from "dialca-ui";

export const BasicLoaderExample: React.FC = () => {
    return (
        <div className="space-y-8">
            <Loader />
            <Loader text="With text" showText />
        </div>
    )
}