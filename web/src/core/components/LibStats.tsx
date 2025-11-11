import { useGitHubStats, useNPMStats } from '../hooks/useStats';
import { formatNumber } from '@/shared/utils';

export const StatsSection = () => {
    const { stars, contributors, loading: githubLoading, error: githubError } = useGitHubStats();
    const { downloads, loading: npmLoading, error: npmError } = useNPMStats();

    const stats = [
        { 
            label: "Components", 
            value: "12+",
            loading: false 
        },
        { 
            label: "Downloads", 
            value: formatNumber(downloads) + "+",
            loading: npmLoading,
            error: npmError
        },
        { 
            label: "Contributors", 
            value: contributors + "+",
            loading: githubLoading,
            error: githubError
        },
        { 
            label: "GitHub Stars", 
            value: formatNumber(stars) + "+",
            loading: githubLoading,
            error: githubError
        }
    ];

    return (
        <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-y border-gray-200/50 dark:border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 font-body">
                                {stat.loading ? (
                                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-10 w-16 mx-auto rounded"></div>
                                ) : stat.error ? (
                                    <span className="text-red-500">--</span>
                                ) : (
                                    stat.value
                                )}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};