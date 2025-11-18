import React, { useState } from "react";
import { TxtArea } from "dialca-ui";
import { FaEdit, FaFile } from "react-icons/fa";

export const TxtAreaCustomizationExample: React.FC = () => {
	const [searchText, setSearchText] = useState("");
	const [customComment, setCustomComment] = useState("");

	const customVariants = {
		card: {
			normal: {
				container:
					"relative w-full bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300",
				textarea:
					"w-full bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-xl p-4 text-indigo-900 placeholder:text-indigo-400 focus:outline-none focus:border-indigo-400 resize-none min-h-28",
				label: "absolute -top-3 right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg",
				icon: "absolute left-2 top-2 text-indigo-500 text-lg z-10",
				charCounter:
					"absolute bottom-2 right-4 bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-mono border border-indigo-300",
				error: "mt-2 text-indigo-700 text-xs flex items-center gap-2 font-medium",
				loader: "absolute right-4 top-4 text-indigo-500",
			},
			focused: {
				container:
					"relative w-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-400 rounded-2xl p-6 shadow-2xl ring-4 ring-indigo-200 transition-all duration-300",
				textarea:
					"w-full bg-white backdrop-blur-sm border-2 border-indigo-300 rounded-xl p-4 text-indigo-900 focus:outline-none resize-none min-h-28",
				label: "absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-xl scale-110",
			},
			error: {
				container:
					"relative w-full bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-6 shadow-xl",
				textarea:
					"w-full bg-white/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 text-red-900 placeholder:text-red-400 focus:outline-none focus:border-red-400 resize-none min-h-28",
				label: "bg-gradient-to-r from-red-500 to-pink-500! text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg",
				error: "mt-2 text-red-700 text-xs font-medium",
                icon: "text-red-500"
			},
		},
	};

	return (
		<div className="space-y-10">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Custom Classes Override
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Override specific parts of the component using custom
						CSS classes with complete control.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<TxtArea
						label="Custom Styled Textarea"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						placeholder="Custom gradient style..."
						icon={<FaEdit />}
						hasCharCount
						charCountType="bottom"
						maxLength={200}
						classes={{
							textarea: "w-full! bg-gradient-to-r! shadow-lg hover:shadow-xl p-4 from-indigo-50! to-purple-200! hover:border-indigo-400!  border-2! border-indigo-300! text-indigo-900! font-medium border-0! focus:outline-none! placeholder:text-indigo-400! pl-10 pr-4 resize-none! min-h-24!",
							label: "absolute! -top-2! left-3! bg-gradient-to-r! from-indigo-50! to-purple-50! px-2! text-indigo-600! font-bold text-sm!",
							icon: "text-indigo-500! text-lg!",
							charCounter: "text-indigo-600! font-mono!",
						}}
					/>

					<TxtArea
						label="Neon Error Style"
						value="invalid content here that exceeds normal bounds"
						hasErrors
						errorMessage="This textarea glows with error"
						icon={<FaFile />}
						hasCharCount
						charCountType="floating-circle"
						maxLength={150}
						classes={{
							error: "mt-2! text-red-300! font-medium bg-red-900/20! p-2! rounded! border! border-red-500/30! shadow-inner!",
						}}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Complete Custom Variants
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Fully custom variants built from scratch with no default
						styling inheritance.
					</p>
				</div>

				<div className="space-y-6">
					<div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-gradient-to-br dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
						<h5 className="text-md font-medium text-indigo-800 dark:text-indigo-300 mb-3">
							Card Variant - Premium Style
						</h5>
						<div className="grid grid-cols-1 gap-4">
							<TxtArea
								label="Custom Message"
								value={customComment}
								onChange={(e) =>
									setCustomComment(e.target.value)
								}
								placeholder="Write your custom content here..."
								variant="card"
								variants={customVariants}
								icon={<FaEdit />}
								extendDefault={false}
								hasCharCount
								charCountType="floating-circle"
								maxLength={500}
								required
							/>

							<TxtArea
								label="Custom Error State"
								value="This content has validation errors"
								hasErrors
								errorMessage="Content validation failed"
								variant="card"
								variants={customVariants}
								icon={<FaFile />}
								extendDefault={false}
								hasCharCount
								charCountType="bottom"
								maxLength={300}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
