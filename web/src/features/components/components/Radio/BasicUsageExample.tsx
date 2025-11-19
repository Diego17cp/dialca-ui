import { useState } from "react";
import { RadioInput } from "dialca-ui";

export const BasicRadioExample: React.FC = () => {
	const [gender, setGender] = useState("");
	const [plan, setPlan] = useState("");
	const [terms, setTerms] = useState("");

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Basic Radio Group
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Simple radio button group with multiple options.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<RadioInput
						name="gender"
						value={gender}
						onChange={setGender}
						options={[
							{ value: "M", label: "Male" },
							{ value: "F", label: "Female" },
							{ value: "O", label: "Other" },
						]}
						classes={{
							text: "dark:text-gray-300!",
						}}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Radio with Descriptions
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Radio buttons with additional description text for each
						option.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<RadioInput
						name="plan"
						value={plan}
						onChange={setPlan}
						options={[
							{
								value: "basic",
								label: "Basic Plan",
								description: "$9.99/month - Essential features",
							},
							{
								value: "pro",
								label: "Pro Plan",
								description: "$19.99/month - Advanced features",
							},
							{
								value: "enterprise",
								label: "Enterprise",
								description: "Custom pricing - Full access",
							},
						]}
						classes={{
							text: "dark:text-gray-300!",
							description: "dark:text-gray-400!",
						}}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Single Radio Mode
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Single radio button for acceptance or agreement
						scenarios.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<RadioInput
						name="terms"
						value={terms}
						onChange={setTerms}
						label="I accept the terms and conditions"
						description="By checking this box you agree to our privacy policy"
						classes={{
							text: "dark:text-gray-300!",
							description: "dark:text-gray-400!",
						}}
					/>
				</div>
			</div>
		</div>
	);
};
