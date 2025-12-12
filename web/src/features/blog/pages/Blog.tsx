import { useState } from "react";
import { Link } from "react-router";
import {
	HiOutlineNewspaper,
	HiOutlineClock,
	HiOutlineTag,
	HiOutlineArrowRight,
} from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BLOG_POSTS } from "../constants";
import { LatestPost, BlogPostCard, CommunitySection } from "../components";
import { useDocTitle } from "@/core/hooks";
import { pageTitles } from "@/core/constants";

const POSTS_PER_PAGE = 5;

export const Blog = () => {
	useDocTitle(pageTitles.BLOG);

	const [currentPage, setCurrentPage] = useState(1);

	const latestPost = BLOG_POSTS[BLOG_POSTS.length - 1];
	const remainingPosts = BLOG_POSTS.slice(0, BLOG_POSTS.length - 1);
	const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);

	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;
	const currentPosts = remainingPosts.slice(startIndex, endIndex);

	const handlePrevPage = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleNextPage = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-full">
			<div className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
						<HiOutlineNewspaper className="w-8 h-8 text-primary" />
					</div>
					<h1 className="text-4xl md:text-5xl font-titles font-bold text-gray-900 dark:text-white">
						Blog
					</h1>
				</div>
				<p className="text-xl font-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
					Stay up to date with the latest news, releases, and updates
					from DialcaUI. Discover technical insights, best practices,
					and community highlights.
				</p>
			</div>
			<section className="mb-12">
				<div className="flex items-center space-x-3 mb-6">
					<div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
						<HiOutlineClock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
					</div>
					<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
						Latest Update
					</h2>
				</div>
				<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
					Check out our most recent post with all the latest news and
					features:
				</p>
				<LatestPost post={latestPost} />
			</section>
			{remainingPosts.length > 0 && (
				<>
					<section className="mb-12">
						<div className="flex items-center space-x-3 mb-6">
							<div className="p-2 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg">
								<HiOutlineTag className="w-6 h-6 text-purple-600 dark:text-purple-400" />
							</div>
							<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
								Recent Posts
							</h2>
						</div>
						<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
							Explore more updates, tutorials, and insights from
							the DialcaUI team:
						</p>
						<div className="space-y-8">
							<div className="flex flex-wrap justify-center gap-6">
								{currentPosts.map((post) => (
									<div
										key={post.slug}
										className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
									>
										<BlogPostCard post={post} />
									</div>
								))}
							</div>
							{totalPages > 1 && (
								<div className="flex items-center justify-center gap-4 pt-6">
									<button
										onClick={handlePrevPage}
										disabled={currentPage === 1}
										className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
									>
										<FaChevronLeft size={12} />
										Previous
									</button>
									<div className="flex items-center gap-2">
										{Array.from(
											{ length: totalPages },
											(_, i) => i + 1
										).map((page) => (
											<button
												key={page}
												onClick={() => {
													setCurrentPage(page);
													window.scrollTo({
														top: 0,
														behavior: "smooth",
													});
												}}
												className={`w-10 h-10 rounded-lg font-medium transition-colors ${
													currentPage === page
														? "bg-primary text-white"
														: "border border-gray-200 cursor-pointer dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
												}`}
											>
												{page}
											</button>
										))}
									</div>
									<button
										onClick={handleNextPage}
										disabled={currentPage === totalPages}
										className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
									>
										Next
										<FaChevronRight size={12} />
									</button>
								</div>
							)}
						</div>
					</section>
				</>
			)}
			<CommunitySection />
			<section className="mb-12">
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white mb-8">
					Explore More
				</h2>

				<div className="grid md:grid-cols-2 gap-6">
					<Link
						to="/docs/overview/getting-started"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Getting Started
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							New to DialcaUI? Start here to learn how to install
							and use the library.
						</p>
					</Link>

					<Link
						to="/docs/overview/components"
						className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 dark:hover:border-secondary/50 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
					>
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Browse Components
							</h3>
							<HiOutlineArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-200" />
						</div>
						<p className="text-gray-600 dark:text-gray-300 text-sm">
							Explore all available components with live examples
							and documentation.
						</p>
					</Link>
				</div>
			</section>
		</div>
	);
};
