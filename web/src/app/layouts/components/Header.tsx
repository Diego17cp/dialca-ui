import logo from '@/assets/logo.webp';
import darkLogo from '@/assets/dark-logo.webp';
import { useTheme } from '@/core/hooks/useTheme';
import { RxGithubLogo, RxMoon, RxSun } from 'react-icons/rx';
import { Link, NavLink } from 'react-router';
import { TbMenuDeep } from 'react-icons/tb';
import { HiOutlineSparkles } from 'react-icons/hi2';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const navigationItems = [
        { 
            name: 'Docs', 
            href: '/docs/overview/getting-started',
            description: 'Documentation & guides'
        },
        { 
            name: 'Components', 
            href: '/docs/overview/components',
            description: 'Browse components'
        },
        { 
            name: 'Playground', 
            href: '/playground',
            description: 'Try components live'
        },
        { 
            name: 'Blog', 
            href: '/blog',
            description: 'Latest updates'
        },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/80 dark:bg-gray-900/95 dark:border-gray-700/80 shadow-sm transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-3 transition-transform duration-200"
                        >
                            <div className="relative">
                                <img 
                                    src={theme === 'dark' ? logo : darkLogo} 
                                    alt="Dialca UI" 
                                    className="h-20 md:h-auto w-30 transition-all duration-300 group-hover:brightness-110 object-contain"
                                />
                            </div>
                            <div className="md:flex flex-col hidden">
                                <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    Dialca UI
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                                    React Components
                                </span>
                            </div>
                        </Link>
                    </div>
                    <nav className="hidden lg:flex items-center">
                        <div className="flex items-center space-x-1 bg-gray-50/80 dark:bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
                            {navigationItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    title={item.description}
                                    className={({ isActive }) => `group relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:shadow-sm
                                        ${isActive ? 'bg-gradient-to-tr from-blue-400/10 to-primary/50 shadow-sm' : 'bg-transparent'}
                                    `}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                    <div className="flex items-center space-x-3">
                        <a
                            href="https://github.com/Diego17cp/dialca-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
                            aria-label="GitHub Repository"
                        >
                            <RxGithubLogo className="size-6 group-hover:scale-110 transition-transform duration-200" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="group relative p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            <div className="relative">
                                {theme === 'light' ? (
                                    <RxMoon className="size-6 text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
                                ) : (
                                    <RxSun className="size-6 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
                                )}
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                        </button>
                        <Link
                            to="/playground"
                            className="hidden md:flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary hover:from-sky-800 hover:to-blue-800 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                        >
                            <HiOutlineSparkles className="size-4 group-hover:rotate-12 transition-transform duration-200" />
                            <span>Try Now</span>
                        </Link>
                        <button
                            className="lg:hidden group relative p-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                            aria-label="Open menu"
                        >
                            <TbMenuDeep className="size-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
        </header>
    );
};