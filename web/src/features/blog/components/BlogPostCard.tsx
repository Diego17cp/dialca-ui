import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import type { BlogPost } from '../types';
import { formatDateWithShortWeekday } from '@/shared/utils';

interface BlogPostCardProps {
    post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    return (
        <article className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-secondary hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={post.imgUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>                
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900 dark:text-white">
                    {formatDateWithShortWeekday(post.date)}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl truncate font-titles font-bold text-gray-900 dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-body mb-4 line-clamp-2">
                    {post.cardDescription}
                </p>
                <Link 
                    to={`/blog/post/${post.slug}`}
                    className="inline-flex items-center gap-2 text-secondary dark:text-primary font-medium text-sm hover:gap-3 transition-all group/link"
                >
                    Read more
                    <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </article>
    );
};