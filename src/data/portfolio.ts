export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
}

export const portfolioVideos: PortfolioVideo[] = [
    {
        id: 'fXap3dvQmVM',
        title: 'Short Form Content',
        category: 'ETCL Real Estate',
        description: 'Crafting compelling narratives through purposeful editing, rhythmic pacing, and emotional depth.'
    },
    {
        id: 'ZJ-Qb9IBgXA',
        title: 'Short Form Content',
        category: 'honzima',
        description: 'Dynamic editing and color grading to showcase real estate properties with impact and clarity.'
    },
];

export const featuredVideos = portfolioVideos;
