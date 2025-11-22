import React, { useState } from "react";
import { Select } from "dialca-ui";
import { FaGlobe } from "react-icons/fa";

export const BasicSelectExample: React.FC = () => {
	const [country, setCountry] = useState("");
	const [category, setCategory] = useState("");

	const countryOptions = [
		{ value: "us", label: "United States" },
		{ value: "ca", label: "Canada" },
		{ value: "uk", label: "United Kingdom" },
		{ value: "de", label: "Germany" },
		{ value: "fr", label: "France" },
	];

	const categoryOptions = [
		{ value: "work", label: "Work" },
		{ value: "personal", label: "Personal" },
		{ value: "urgent", label: "Urgent" },
	];

	const dark = {
		input: "dark:bg-gray-800! dark:border-gray-600! dark:text-gray-200!",
		label: "dark:bg-gray-800!",
		menu: "dark:bg-gray-800/90! dark:backdrop-blur-md! dark:border-gray-600!",
		option: "dark:text-gray-200! dark:hover:bg-gray-700/50!",
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Basic Select
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Simple dropdown select with options.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<Select
						label="Select Category"
						value={category}
						options={categoryOptions}
						onChange={(e) => setCategory(e.target.value)}
						classes={dark}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Select with Icon
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Select component with icon and option icons.
					</p>
				</div>
				<div className="p-4 mb-50 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<Select
						label="Select Country"
						value={country}
						options={countryOptions}
						onChange={(e) => setCountry(e.target.value)}
						icon={<FaGlobe />}
						required
                        classes={dark}
					/>
				</div>
			</div>
		</div>
	);
};
