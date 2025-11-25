import React, { useState } from "react";
import { SearchableSelect } from "dialca-ui";
import { FaTag, FaCog } from "react-icons/fa";

export const SearchableSelectCustomizationExample: React.FC = () => {
	const [classesSelect, setClassesSelect] = useState("");
	const [redesignSelect, setRedesignSelect] = useState("medium");

	const categoryOptions = [
		{ value: "urgent", label: "Urgent", icon: <FaTag /> },
		{ value: "normal", label: "Normal Priority", icon: <FaTag /> },
		{ value: "low", label: "Low Priority", icon: <FaTag /> },
		{ value: "feature", label: "Feature Request", icon: <FaTag /> },
		{ value: "bug", label: "Bug Report", icon: <FaTag /> },
	];

	const priorityOptions = [
		{ value: "low", label: "Low Priority", icon: <FaCog /> },
		{ value: "medium", label: "Medium Priority", icon: <FaCog /> },
		{ value: "high", label: "High Priority", icon: <FaCog /> },
		{ value: "critical", label: "Critical Priority", icon: <FaCog /> },
	];

	const cardVariant = {
		default: {
			normal: {
				container: "space-y-3",
				inputWrapper:
					"relative bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all duration-200",
				input: "w-full px-4 py-3 bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400",
				inputIcon:
					"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg",
				dropdown:
					"mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 max-h-60 overflow-auto",
				option: "px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-150 flex items-center gap-3",
				optionIcon: "text-gray-500 flex-shrink-0",
				label: "block text-sm font-semibold text-gray-700 mb-1",
				noResults: "px-4 py-6 text-center text-gray-500 italic",
			},
			optionHighlighted: {
				option: "bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 shadow-sm",
				optionIcon: "text-blue-500",
			},
			optionSelected: {
				option: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md",
				optionIcon: "text-white",
			},
			focused: {
				inputWrapper: "border-blue-300 shadow-xl ring-4 ring-blue-100",
			},
		},
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Custom Classes Override
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Using the classes prop to override specific element
						styles while extending defaults.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<SearchableSelect
						label="Issue Category"
						options={categoryOptions}
						value={classesSelect}
						onChange={(value) => setClassesSelect(value)}
						placeholder="Choose category..."
						classes={{
							input: "border-orange-200! focus:border-orange-400! focus:ring-2 focus:ring-orange-400! bg-orange-50! shadow-none! outline-none!",
							label: "text-orange-700! font-bold!",
							dropdown: "border-orange-200! shadow-lg",
							option: "hover:bg-orange-100! border-l-4 border-l-transparent hover:border-l-orange-400",
						}}
						isClearable
						noResultsText="Category not found"
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Complete Redesign
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Full custom design without extending default styles -
						card-like appearance with gradients.
					</p>
				</div>

				<div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
					<SearchableSelect
						label="Priority Level"
						options={priorityOptions}
						value={redesignSelect}
						onChange={(value) => setRedesignSelect(value)}
						placeholder="Select priority level..."
						variants={cardVariant}
						extendDefault={false}
						isClearable={true}
						noResultsText="No priority levels available"
						classes={{
							clearButton:
								"absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
