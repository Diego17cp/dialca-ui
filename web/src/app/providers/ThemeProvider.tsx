import { createContext, useEffect, useState } from "react";

interface Type {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export const ThemeContext = createContext<Type | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme !== null ? JSON.parse(savedTheme) : "light";
    });
    useEffect(() => {
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "theme" && e.newValue !== null) {
                const newTheme = JSON.parse(e.newValue);
                if (newTheme !== theme) setTheme(newTheme);
            }
        }
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [theme]);

    const toggleTheme = () => setTheme((prev : "light" | "dark") => (prev === "light" ? "dark" : "light"));
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}