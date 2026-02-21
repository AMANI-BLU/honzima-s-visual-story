export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
}

export const portfolioVideos: PortfolioVideo[] = [
    { id: 'fXap3dvQmVM', title: 'Creative Storytelling', category: 'Creative' },
    { id: 'G5MspHlAQMA', title: 'Seamless Transitions', category: 'Transitions' },
];

export const featuredVideos = portfolioVideos; // Showing both as featured since there are only two
