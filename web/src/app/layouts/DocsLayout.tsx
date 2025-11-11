import { Outlet } from 'react-router';
import { SidebarProvider, } from '../providers/SidebarProvider';
import { Sidebar, MobileBreadcrumb } from './components';

export const DocsLayout = () => {
    return (
        <SidebarProvider>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0">
                    <MobileBreadcrumb />
                    <div className="flex-1 overflow-y-auto">
                        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
};
