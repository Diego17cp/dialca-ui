import { useSidebar } from "@/core/hooks/useSidebar";
import { SidebarItem } from "./SidebarItem";
import { navigation } from "../constants";

export interface NavItem {
    title: string;
    href?: string;
    children?: NavItem[];
}

export const Sidebar = () => {
    const { isOpen, closeSidebar } = useSidebar();

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-600/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={closeSidebar}
                />
            )}
            <aside className={`
                fixed lg:static top-20 lg:top-0 left-0 z-50 w-80 h-[calc(100vh-5rem)] lg:h-full
                bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl 
                border-r border-gray-200 dark:border-gray-700 
                flex flex-col
                transform transition-transform duration-300 ease-in-out lg:transform-none
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0
            `}>
                <div className="flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-700">
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="w-full px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 ease-out dark:text-white"
                    />
                </div>
                <div className="flex-1 overflow-y-auto main-scroll">
                    <nav className="p-6 space-y-2">
                        {navigation.map((item, index) => (
                            <SidebarItem key={index} item={item} />
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};
