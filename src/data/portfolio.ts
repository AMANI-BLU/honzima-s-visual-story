export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
}

export const portfolioVideos: PortfolioVideo[] = [
    {
        id: 'ZJ-Qb9IBgXA',
        title: 'Short Form Content',
        category: 'honzima',
        description: 'Dynamic editing and color grading to showcase real estate properties with impact and clarity.'
    },
];

export const featuredVideos = portfolioVideos;
