import { Outlet } from "react-router";
import { Header } from "./components/Header";

export const WebLayout = () => (
	<div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-300/30 to-blue-500 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30">
        <Header />
        <Outlet />
    </div>
);
