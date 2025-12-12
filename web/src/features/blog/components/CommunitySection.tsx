import React from "react";
import { COMMUNITY_LINKS } from "../constants";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const CommunitySection: React.FC = () => {
	return (
		<section className="mb-12">
			<div className="flex items-center space-x-3 mb-6">
				<div className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
					<HiOutlineUserGroup className="w-6 h-6 text-green-600 dark:text-green-400" />
				</div>
				<h2 className="text-2xl font-titles font-bold text-gray-900 dark:text-white">
					Join the Community
				</h2>
			</div>
			<p className="text-gray-600 dark:text-gray-300 mb-6 font-body">
				Connect with us, contribute to the project, and stay updated
				with the latest releases:
			</p>
			<div className="grid md:grid-cols-2 gap-6">
				{COMMUNITY_LINKS.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:border-secondary hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<div className="relative flex items-start gap-6">
							<div className="flex-shrink-0 text-gray-700 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-primary transition-colors">
								<link.icon size={40} />
							</div>
							<div className="flex-1 space-y-3">
								<h3 className="text-2xl font-titles font-bold text-gray-900 dark:text-white group-hover:text-secondary dark:group-hover:text-primary transition-colors">
									{link.name}
								</h3>
								<p className="text-gray-600 font-body text-lg dark:text-gray-400">
									{link.description}
								</p>
								{link.stats && (
									<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
										{link.stats}
									</div>
								)}
							</div>
						</div>
						<div className="absolute top-8 right-8 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
							<MdOutlineKeyboardArrowRight size={30} />
						</div>
					</a>
				))}
			</div>
		</section>
	);
};
