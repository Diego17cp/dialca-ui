import { Outlet, useLocation } from "react-router";
import { Header } from "./components/Header";

export const WebLayout = () => {
    const location = useLocation();
    const isDocsPage = location.pathname.startsWith('/docs');

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-300/30 to-blue-500 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
            <Header />
            <div className={`h-[calc(100vh-5rem)] ${isDocsPage ? 'overflow-hidden' : 'overflow-y-auto main-scroll'}`}>
                <Outlet />
            </div>
        </div>
    );
};
