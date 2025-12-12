import { Link } from 'react-router';
import { HiOutlineExclamationTriangle, HiOutlineArrowLeft, HiOutlineHome } from 'react-icons/hi2';

export const PostNotFound = () => {
    return (
        <div className="min-h-[75vh] flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full">
                        <HiOutlineExclamationTriangle className="w-16 h-16 text-red-600 dark:text-red-400" />
                    </div>
                </div>
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-titles font-bold text-gray-900 dark:text-white">
                        Post Not Found
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-body">
                        Sorry, we couldn't find the blog post you're looking for. It may have been moved or deleted.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                    >
                        <HiOutlineArrowLeft className="w-5 h-5" />
                        Back to Blog
                    </Link>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                        <HiOutlineHome className="w-5 h-5" />
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};