import React, { useState } from 'react';
import { InputField } from 'dialca-ui';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

export const CustomizationExample: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [modernText, setModernText] = useState("");
    const [outlinedText, setOutlinedText] = useState("");
    const [customPassword, setCustomPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Custom variants with full styling
    const customVariants = {
        'search': {
            normal: {
                container: "relative w-full border-2 border-blue-200 rounded-full bg-blue-50 hover:border-blue-300 transition-colors duration-200 p-3",
                input: "w-full bg-transparent text-blue-900 placeholder:text-blue-400 focus:outline-none pl-10 pr-4",
                label: "absolute -top-2 left-4 bg-blue-50 px-2 text-blue-600 font-medium text-sm",
                icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg",
                button: "absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 cursor-pointer",
                error: "mt-1 text-blue-600 text-xs",
                loader: "absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
            },
            focused: {
                container: "relative w-full border-2 border-blue-500 bg-blue-100 shadow-md ring-2 ring-blue-200 rounded-full transition-all duration-200 p-3",
                label: "absolute -top-2 left-4 bg-blue-100 px-2 text-blue-700 font-medium text-sm",
            },
            error: {
                container: "relative w-full border-2 border-red-400 hover:border-red-500 bg-red-50 rounded-full p-3",
                input: "w-full bg-transparent text-red-900 placeholder:text-red-400 focus:outline-none pl-10 pr-4",
                label: "absolute -top-2 left-4 bg-red-50 px-2 text-red-600 font-medium text-sm",
                error: "mt-1 text-red-600 text-xs font-medium flex items-center gap-2",
                icon: "text-red-400"
            }
        },
        'modern': {
            normal: {
                container: "relative w-full border-0 border-b-2 border-gray-300 bg-transparent hover:border-purple-400 transition-all duration-300 pb-2",
                input: "w-full bg-transparent text-purple-500 placeholder:text-gray-400 focus:outline-none pl-8 pr-4 py-2",
                label: "absolute -top-4 left-0 text-gray-500 font-light tracking-wide text-sm transition-all duration-200",
                icon: "absolute left-0 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg",
                button: "absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 cursor-pointer",
                error: "mt-1 text-purple-600 text-xs",
                loader: "absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-400"
            },
            focused: {
                container: "relative w-full border-0 border-b-2 border-purple-600 shadow-[0_2px_0_0_rgb(147,51,234)] bg-transparent transition-all duration-300 pb-2",
                label: "absolute -top-4 left-0 text-purple-600 font-medium tracking-wide text-sm",
            },
            error: {
                container: "relative w-full border-0 border-b-2 border-red-500 bg-transparent pb-2",
                input: "w-full bg-transparent text-red-900 placeholder:text-red-400 focus:outline-none pl-8 pr-4 py-2",
                label: "absolute -top-4 left-0 text-red-500 font-light tracking-wide text-sm",
                error: "mt-1 text-red-500 text-xs"
            }
        },
        'outlined': {
            normal: {
                container: "relative w-full border-2 border-emerald-300 rounded-lg bg-white hover:border-emerald-400 transition-all duration-200 shadow-sm hover:shadow-md p-4",
                input: "w-full bg-transparent text-emerald-900 placeholder:text-emerald-400 focus:outline-none pl-8 pr-4",
                label: "absolute -top-3 left-3 bg-white px-2 text-emerald-600 font-semibold text-sm",
                icon: "absolute left-2 top-1/2 transform -translate-y-1/2 text-emerald-500 text-lg",
                button: "absolute right-2 top-1/2 transform -translate-y-1/2 text-emerald-500 hover:text-emerald-700 cursor-pointer",
                error: "mt-1 text-emerald-700 text-xs",
                loader: "absolute right-2 top-1/2 transform -translate-y-1/2 text-emerald-500"
            },
            focused: {
                container: "relative w-full border-2 border-emerald-600 shadow-lg shadow-emerald-100 scale-[1.02] rounded-lg bg-white transition-all duration-200 p-4",
                label: "absolute -top-3 left-3 bg-white px-2 text-emerald-700 font-semibold text-sm",
            },
            error: {
                container: "relative w-full border-2 border-red-400 shadow-lg shadow-red-100 rounded-lg bg-white p-4",
                input: "w-full bg-transparent text-red-900 placeholder:text-red-400 focus:outline-none pl-8 pr-4",
                label: "absolute -top-3 left-3 bg-white px-2 text-red-600 font-semibold text-sm",
                error: "mt-1 text-red-600 text-xs font-medium"
            },
            disabled: {
                container: "relative w-full border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed p-4",
                input: "w-full bg-transparent text-gray-400 cursor-not-allowed pl-8 pr-4",
                label: "absolute -top-3 left-3 bg-gray-50 px-2 text-gray-400 font-semibold text-sm",
                icon: "absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
            }
        }
    };

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Classes Override
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Override specific parts of the component using custom CSS classes.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <InputField
                        label="Custom Styled Input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        endIcon={<FaSearch />}
                        classes={{
                            container: "border-2! border-indigo-300! rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-indigo-400!",
                            input: "text-indigo-900! font-medium border-0!",
                            label: "text-indigo-600! font-bold text-sm bg-indigo-50!",
                            icon: "text-indigo-500!"
                        }}
                    />
                    
                    <InputField
                        label="Error with Custom Style"
                        value="invalid@input"
                        hasErrors
                        errorMessage="This input has custom error styling"
                        startIcon={<FaUser />}
                        classes={{
                            container: "border-2! border-red-300! rounded-lg bg-red-50",
                            input: "text-red-900! border-0!",
                            label: "text-red-600! font-semibold bg-red-50!",
                            error: "text-red-700! font-medium bg-red-100! p-2 rounded mt-2",
                            icon: "text-red-500!"
                        }}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Custom Style Variants
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Create complete custom variants with different visual styles for all states.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h5 className="text-md font-medium text-blue-800 dark:text-blue-300 mb-3">Search Variant</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Search Field"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Type to search..."
                                variant="search"
                                extendDefault={false}
                                variants={customVariants}
                                startIcon={<FaSearch />}
                                />
                            
                            <InputField
                                label="Search with Error"
                                value="invalid search"
                                extendDefault={false}
                                hasErrors
                                errorMessage="Search term is invalid"
                                variant="search"
                                variants={customVariants}
                                startIcon={<FaSearch />}
                            />
                        </div>
                    </div>
                    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h5 className="text-md font-medium text-purple-800 dark:text-purple-300 mb-3">Modern Variant</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Modern Email"
                                value={modernText}
                                onChange={(e) => setModernText(e.target.value)}
                                type="email"
                                variant="modern"
                                variants={customVariants}
                                extendDefault={false}
                                startIcon={<FaEnvelope />}
                            />
                            
                            <InputField
                                label="Modern Password"
                                value={customPassword}
                                onChange={(e) => setCustomPassword(e.target.value)}
                                isPassword
                                showPassword={showPassword}
                                onToggleVisibility={() => setShowPassword(!showPassword)}
                                variant="modern"
                                variants={customVariants}
                                extendDefault={false}
                                required
                            />
                        </div>
                    </div>
                    <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <h5 className="text-md font-medium text-emerald-800 dark:text-emerald-300 mb-3">Outlined Variant</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Outlined Input"
                                value={outlinedText}
                                onChange={(e) => setOutlinedText(e.target.value)}
                                variant="outlined"
                                variants={customVariants}
                                startIcon={<FaUser />}
                                extendDefault={false}
                                required
                            />
                            
                            <InputField
                                label="Outlined Disabled"
                                value="Cannot edit this field"
                                disabled
                                variant="outlined"
                                variants={customVariants}
                                startIcon={<FaLock />}
                                extendDefault={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};