import { useParams, Link } from "react-router";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { getBlogPostBySlug, getPostTitle } from "../utils";
import { useDocTitle } from "@/core/hooks";
import { PostNotFound } from "../components/PostNotFound";
import { PostHeader } from "../components/PostHeader";
import { PostContent } from "../components/PostContent";
import { BLOG_POSTS } from "../constants";

export const Post = () => {
	const { postSlug } = useParams<{ postSlug: string }>();
	const post = getBlogPostBySlug(postSlug || "");

	useDocTitle(post ? getPostTitle(post.title) : "Post Not Found | DialcaUI Blog");

	if (!post) return <PostNotFound />;

	const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
	const prevPost =
		currentIndex < BLOG_POSTS.length - 1
			? BLOG_POSTS[currentIndex + 1]
			: null;
	const nextPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;

	return (
		<div className="min-h-full">
			<div className="mb-8">
				<Link
					to="/blog"
					className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
				>
					<HiOutlineArrowLeft className="w-5 h-5" />
					Back to Blog
				</Link>
			</div>
			<PostHeader
				title={post.title}
				subTitle={post.subTitle}
				date={post.date}
				author={post.author}
			/>
			{/* {post.imgUrl && (
                <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                    <img 
                        src={post.imgUrl} 
                        alt={post.title}
                        className="w-full h-auto object-cover"
                    />
                </div>
            )} */}
			<PostContent
				introduction={post.introduction}
				content={post.content}
			/>
			{(prevPost || nextPost) && (
				<nav className="grid md:grid-cols-2 gap-6 mt-2 pt-10 border-t border-gray-200 dark:border-gray-800 mb-12">
					{prevPost ? (
						<Link
							to={`/blog/post/${prevPost.slug}`}
							className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
						>
							<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
								<HiOutlineArrowLeft className="w-4 h-4" />
								<span>Previous Post</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
								{prevPost.title}
							</h3>
						</Link>
					) : (
						<div></div>
					)}
					{nextPost && (
						<Link
							to={`/blog/post/${nextPost.slug}`}
							className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg text-right"
						>
							<div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
								<span>Next Post</span>
								<HiOutlineArrowRight className="w-4 h-4" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
								{nextPost.title}
							</h3>
						</Link>
					)}
				</nav>
			)}
			<div className="text-center py-8">
				<Link
					to="/blog"
					className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-secondary transition-colors"
				>
					<HiOutlineArrowLeft className="w-5 h-5" />
					View All Posts
				</Link>
			</div>
		</div>
	);
};
