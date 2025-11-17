import { useState } from 'react';
import { InputField } from 'dialca-ui';
import { FaEnvelope, FaUser } from 'react-icons/fa6';

export const BasicInputFieldExample: React.FC = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="space-y-6 max-w-md mx-auto">
            {/* Basic input */}
            <InputField
                label=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                type="email"
                icon={<FaEnvelope />}
                classes={{
                    label: "bg-gray-50! dark:bg-gray-900!",
                    input: "dark:bg-gray-900! dark:text-white! dark:border-gray-700!",
                }}
            />

            {/* Required input */}
            <InputField
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                startIcon={<FaUser />}
                classes={{
                    label: "bg-gray-50! dark:bg-gray-900!",
                    input: "dark:bg-gray-900! dark:text-white! dark:border-gray-700!",
                }}
            />

            {/* Password input */}
            <InputField
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isPassword
                showPassword={showPassword}
                onToggleVisibility={() => setShowPassword(!showPassword)}
                required
                classes={{
                    label: "bg-gray-50! dark:bg-gray-900!",
                    input: "dark:bg-gray-900! dark:text-white! dark:border-gray-700!",
                }}
            />

        </div>
    );
};