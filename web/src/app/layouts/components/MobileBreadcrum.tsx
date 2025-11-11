import { useSidebar } from '@/core/hooks/useSidebar';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useLocation } from 'react-router';

export const MobileBreadcrumb = () => {
    const { toggleSidebar } = useSidebar();
    const location = useLocation();

    const generateBreadcrumb = (pathname: string) => {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length >= 3) {
            const category = segments[1];
            const page = segments[2].replace(/-/g, ' ');
            return `${category.charAt(0).toUpperCase() + category.slice(1)} / ${page.charAt(0).toUpperCase() + page.slice(1)}`;
        }
        return 'Documentation';
    };

    return (
        <div className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between px-4 py-3">
                <button
                    onClick={toggleSidebar}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                >
                    <HiOutlineBars3 className="size-6" />
                    <span className="text-sm font-medium">
                        {generateBreadcrumb(location.pathname)}
                    </span>
                </button>
            </div>
        </div>
    );
};