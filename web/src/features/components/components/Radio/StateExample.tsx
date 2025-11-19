import { RadioInput } from "dialca-ui";
import { useState } from "react";

export const RadioStateExample = () => {
    const [newsletter, setNewsletter] = useState("");
	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Error State
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Radio input displaying error message when validation
						fails.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<RadioInput
						name="newsletter"
						value={newsletter}
						onChange={setNewsletter}
						hasErrors={!newsletter}
						errorMessage="Please select an option"
						options={[
							{ value: "yes", label: "Yes, send me newsletters" },
							{ value: "no", label: "No, thank you" },
						]}
						variant="error"
						variants={{
							error: {
								error: {
									text: "dark:text-red-400!",
								},
							},
						}}
						classes={{
							text: "dark:text-gray-300!",
							error: "dark:text-red-400!",
						}}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Disabled State
					</h4>
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
						Radio inputs in disabled state, not interactive.
					</p>
				</div>

				<div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
					<RadioInput
						name="disabled"
						value="option1"
						onChange={() => {}}
						disabled
						options={[
							{ value: "option1", label: "Option 1" },
							{
								value: "option2",
								label: "Option 2",
								disabled: true,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
};
