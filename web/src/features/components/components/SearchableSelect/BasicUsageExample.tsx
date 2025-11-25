import { useState } from "react";
import { SearchableSelect } from "dialca-ui";
import { FaUser, FaGlobe } from "react-icons/fa";

export const BasicSearchableSelectExample: React.FC = () => {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedUser, setSelectedUser] = useState("john");
	const [selectedCity, setSelectedCity] = useState("");

	const countryOptions = [
		{ value: "us", label: "United States", icon: <FaGlobe /> },
		{ value: "ca", label: "Canada", icon: <FaGlobe /> },
		{ value: "uk", label: "United Kingdom", icon: <FaGlobe /> },
		{ value: "de", label: "Germany", icon: <FaGlobe /> },
		{ value: "fr", label: "France", icon: <FaGlobe /> },
		{ value: "it", label: "Italy", icon: <FaGlobe /> },
		{ value: "es", label: "Spain", icon: <FaGlobe /> },
		{ value: "jp", label: "Japan", icon: <FaGlobe /> },
		{ value: "au", label: "Australia", icon: <FaGlobe /> },
	];

	const userOptions = [
		{ value: "john", label: "John Doe", icon: <FaUser /> },
		{ value: "jane", label: "Jane Smith", icon: <FaUser /> },
		{ value: "mike", label: "Mike Johnson", icon: <FaUser /> },
	];

	const cityOptions = [
		{ value: "ny", label: "New York" },
		{ value: "la", label: "Los Angeles" },
		{ value: "chicago", label: "Chicago" },
		{ value: "houston", label: "Houston" },
		{ value: "phoenix", label: "Phoenix" },
		{ value: "philadelphia", label: "Philadelphia" },
		{ value: "san_antonio", label: "San Antonio" },
		{ value: "san_diego", label: "San Diego" },
		{ value: "dallas", label: "Dallas" },
		{ value: "san_jose", label: "San Jose" },
	];

	const classes = {
		label: "dark:text-gray-300!",
		input: "dark:bg-gray-800! dark:text-white! dark:border-gray-700! dark:hover:border-gray-600!",
		dropdown: "dark:bg-gray-800! dark:border-gray-700!",
		option: "dark:text-gray-300! dark:hover:bg-gray-700!",
        clearButton: "dark:text-gray-400! dark:hover:text-white!",
	};

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Basic Searchable Select
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Simple searchable dropdown with filtering capabilities.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<SearchableSelect
						label="Select City"
						options={cityOptions}
						value={selectedCity}
						onChange={(value) => setSelectedCity(value)}
						placeholder="Search for a city..."
						noResultsText="No cities found"
						classes={classes}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						With Icons & Clearable
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Searchable select with option icons and clear
						functionality.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<SearchableSelect
						label="Select Country"
						options={countryOptions}
						value={selectedCountry}
						onChange={(value) => setSelectedCountry(value)}
						placeholder="Search countries..."
						isClearable={true}
						noResultsText="No countries found"
                        classes={classes}
					/>
				</div>
			</div>
			<div className="space-y-4 mb-40">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Pre-selected Value
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Searchable select with a pre-selected value and user
						list.
					</p>
				</div>
				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<SearchableSelect
						label="Assign User"
						options={userOptions}
						value={selectedUser}
						onChange={(value) => setSelectedUser(value)}
						placeholder="Search users..."
						isClearable={true}
						noResultsText="User not found"
                        classes={classes}
					/>
				</div>
			</div>
		</div>
	);
};
