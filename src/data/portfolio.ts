export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
}

export const portfolioVideos: PortfolioVideo[] = [
    {
        id: 'fXap3dvQmVM',
        title: 'Creative Storytelling',
        category: 'Creative',
        description: 'Crafting compelling narratives through purposeful editing, rhythmic pacing, and emotional depth.'
    },
    {
        id: 'G5MspHlAQMA',
        title: 'Seamless Transitions',
        category: 'Transitions',
        description: 'Expertly blending scenes with smooth, dynamic motion effects that maintain energy and flow.'
    },
];

export const featuredVideos = portfolioVideos; // Showing both as featured since there are only two
