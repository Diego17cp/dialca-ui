import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import type { BlogPost } from '../types';
import { formatDateWithShortWeekday } from '@/shared/utils';

interface LatestPostProps {
    post: BlogPost;
}

export const LatestPost: React.FC<LatestPostProps> = ({ post }) => {
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full overflow-hidden bg-gray-900">
                    <img 
                        src={post.imgUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-8 flex flex-col justify-around">
                    <div>
                        <div className="inline-flex items-center gap-2 text-sm text-secondary dark:text-primary font-medium mb-4">
                            <span className="w-2 h-2 rounded-full bg-secondary dark:bg-primary animate-pulse"></span>
                            {formatDateWithShortWeekday(post.date)}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-titles font-bold text-gray-900 dark:text-white mb-4 group-hover:text-secondary dark:group-hover:text-primary transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-lg font-body text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                            {post.cardDescription}
                        </p>
                    </div>
                    <Link 
                        to={`/blog/post/${post.slug}`}
                        className="inline-flex items-center gap-2 text-secondary dark:text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                        Read more
                        <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
};