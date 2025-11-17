import React, { useState } from 'react';
import { InputField } from 'dialca-ui';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaSpinner } from 'react-icons/fa6';

export const VariantsExample: React.FC = () => {
    const [defaultText, setDefaultText] = useState("Default styling");
    const [darkText, setDarkText] = useState("Dark theme input");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Default Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        The standard light theme styling with clean borders and focus states.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-800/50 rounded-lg border">
                    <InputField
                        label="Email Address"
                        value={defaultText}
                        onChange={(e) => setDefaultText(e.target.value)}
                        placeholder="Enter your email"
                        type="email"
                        startIcon={<FaEnvelope />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                        />
                    
                    <InputField
                        label="Phone Number"
                        value=""
                        type="tel"
                        required
                        startIcon={<FaPhone />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                    
                    <InputField
                        label="Username"
                        value="invalid@user"
                        hasErrors
                        errorMessage="Username contains invalid characters"
                        startIcon={<FaUser />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                    
                    <InputField
                        label="Disabled Field"
                        value="Cannot edit this"
                        disabled
                        startIcon={<FaLock />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Dark Variant
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Dark theme styling with darker backgrounds and lighter text colors.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 rounded-lg border border-gray-700">
                    <InputField
                        label="Dark Email"
                        value={darkText}
                        onChange={(e) => setDarkText(e.target.value)}
                        placeholder="Enter your email"
                        type="email"
                        variant="dark"
                        startIcon={<FaEnvelope />}
                    />
                    
                    <InputField
                        label="Dark Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isPassword
                        showPassword={showPassword}
                        onToggleVisibility={() => setShowPassword(!showPassword)}
                        variant="dark"
                        required
                    />
                    
                    <InputField
                        label="Dark Error State"
                        value="error@example"
                        hasErrors
                        errorMessage="Invalid email format"
                        variant="dark"
                        startIcon={<FaEnvelope />}
                    />
                    
                    <InputField
                        label="Dark Disabled"
                        value="Disabled in dark mode"
                        disabled
                        variant="dark"
                        startIcon={<FaLock />}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Different States
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Demonstration of various input states including loading, error, and disabled states.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white dark:bg-gray-800/50 rounded-lg">
                    <InputField
                        label="Loading State"
                        value="Processing..."
                        isLoading
                        loader={<FaSpinner className="animate-spin dark:text-gray-300" />}
                        startIcon={<FaUser />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                    
                    <InputField
                        label="Required Field"
                        value=""
                        required
                        startIcon={<FaEnvelope />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                    
                    <InputField
                        label="With End Icon"
                        value="Custom icon placement"
                        endIcon={<FaLock />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                    
                    <InputField
                        label="Both Icons"
                        value="Start and end icons"
                        startIcon={<FaUser />}
                        endIcon={<FaLock />}
                        classes={{
                            label: "dark:bg-gray-800!",
                            input: "dark:text-white! dark:border-gray-700!"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};