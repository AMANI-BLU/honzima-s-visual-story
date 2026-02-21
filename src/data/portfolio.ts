export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
}

const STORAGE_KEY = 'honzima_portfolio_videos';

export const portfolioVideos: PortfolioVideo[] = [
    {
        id: 'fXap3dvQmVM',
        title: 'Short Form Content',
        category: 'ETCL Real Estate',
        description: 'Crafting compelling narratives through purposeful editing, rhythmic pacing, and emotional depth.'
    },
    {
        id: 'G5MspHlAQMA',
        title: 'Short Form Content',
        category: 'ETCL Real Estate',
        description: 'Expertly blending scenes with smooth, dynamic motion effects that maintain energy and flow.'
    },
    {
        id: 'ZJ-Qb9IBgXA',
        title: 'Short Form Content',
        category: 'honzima',
        description: 'Dynamic editing and color grading to showcase real estate properties with impact and clarity.'
    },
];

export const getVideos = (): PortfolioVideo[] => {
    if (typeof window === 'undefined') return portfolioVideos;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : portfolioVideos;
};

export const saveVideos = (videos: PortfolioVideo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
};

export const resetVideos = () => {
    localStorage.removeItem(STORAGE_KEY);
};

export const featuredVideos = getVideos();
