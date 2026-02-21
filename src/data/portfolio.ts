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
        id: 'G5MspHlAQMA',
        title: 'Short Form Content',
        category: 'ETCL Real Estate',
        description: 'Expertly blending scenes with smooth, dynamic motion effects that maintain energy and flow.'
    },
    {
        id: 'ZJ-Qb9IBgXA',
        title: 'Short Form Content',
        category: 'ETCL Real Estate',
        description: 'Dynamic editing and color grading to showcase real estate properties with impact and clarity.'
    },
];

export const featuredVideos = portfolioVideos;
