import { HiOutlineSparkles, HiOutlineDocumentText } from 'react-icons/hi2';

interface PostContentProps {
    introduction: string;
    content: React.ReactNode;
}

export const PostContent: React.FC<PostContentProps> = ({ introduction, content }) => {
    return (
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
                        <HiOutlineSparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white m-0">
                        Introduction
                    </h2>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <p className="text-gray-700 dark:text-gray-300 font-body leading-relaxed m-0">
                        {introduction}
                    </p>
                </div>
            </section>
            <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-gray-50 dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">
                        Content
                    </span>
                </div>
            </div>
            <section className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg">
                        <HiOutlineDocumentText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white m-0">
                        Details
                    </h2>
                </div>
                <div className="space-y-6">
                    {content ? (
                        <div>{content}</div>
                    ) : (
                        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
                            <p className="text-gray-500 dark:text-gray-400 italic m-0">
                                Content coming soon...
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </article>
    );
};