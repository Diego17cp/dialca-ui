import { useEffect, useState } from "react";
import axios from "axios";

interface GitHubStats {
    stars: number;
    forks: number;
    contributors: number;
    loading: boolean;
    error: string | null;
}
interface NPMStats {
    downloads: number;
    loading: boolean;
    error: string | null;
}

export const useGitHubStats = (repo: string = "Diego17cp/dialca-ui") => {
    const [stats, setStats] = useState<GitHubStats>({
        stars: 0,
        forks: 0,
        contributors: 0,
        loading: true,
        error: null,
    });
    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                const response = await axios.get(`https://api.github.com/repos/${repo}`);
                if (response.status !== 200) throw new Error("Failed to fetch GitHub stats");
                const contributorsResponse = await axios.get(`https://api.github.com/repos/${repo}/contributors`);
                if (contributorsResponse.status !== 200) throw new Error("Failed to fetch GitHub contributors");
                setStats({
                    stars: response.data.stargazers_count,
                    forks: response.data.forks_count,
                    contributors: contributorsResponse.data.length,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setStats(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error.message : "An unknown error occurred",
                }));
            }
        }
        fetchGitHubStats();
    }, [repo]);
    return stats;
}
export const useNPMStats = (packageName: string = "dialca-ui") => {
    const [stats, setStats] = useState<NPMStats>({
        downloads: 0,
        loading: true,
        error: null,
    });
    useEffect(() => {
        const fetchNPMStats = async () => {
            try {
                const response = await axios.get(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
                if (response.status !== 200) throw new Error("Failed to fetch NPM stats");
                setStats({
                    downloads: response.data.downloads || 0,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                setStats(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error.message : "An unknown error occurred",
                }));
            }
        }
        fetchNPMStats();
    }, [packageName]);
    return stats;
}