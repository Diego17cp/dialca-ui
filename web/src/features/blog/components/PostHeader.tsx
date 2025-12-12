import { HiOutlineClock, HiOutlineCalendar, HiOutlineUser } from 'react-icons/hi2';
import { getRelativeTime } from '../utils';
import { formatDateWithShortWeekday } from '@/shared/utils';

interface PostHeaderProps {
    title: string;
    subTitle: string;
    date: string;
    author?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ 
    title, 
    subTitle, 
    date, 
    author = "DialcaUI Team",
}) => {
    return (
        <header className="space-y-6 mb-12 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="inline-flex items-center gap-2">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <time dateTime={date}>{formatDateWithShortWeekday(date)}</time>
                </div>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <div className="inline-flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4" />
                    <span>{getRelativeTime(date)}</span>
                </div>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <div className="inline-flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    <span>{author}</span>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-titles font-bold text-gray-900 dark:text-white leading-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                    {subTitle}
                </p>
            </div>
        </header>
    );
};