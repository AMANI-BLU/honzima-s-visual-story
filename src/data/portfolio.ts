export interface TikTokVideo {
    id: string;
    title: string;
    category?: string;
}

export const tiktokVideos: TikTokVideo[] = [
    { id: '7591553435690978571', title: 'Creative Edit 1', category: 'Creative' },
    { id: '7472405252826778935', title: 'Smooth Transition', category: 'Transitions' },
    { id: '7503946574997785911', title: 'Color Grade Demo', category: 'Color Grading' },
    { id: '7595307565320244536', title: 'Fast-paced Montage', category: 'Montage' },
    { id: '7461234567890123456', title: 'Short Film Teaser', category: 'Cinematic' }, // Expanded content
    { id: '7450123456789012345', title: 'Street Style Edit', category: 'Lifestyle' },
    { id: '7449012345678901234', title: 'Action Sports Cut', category: 'Sports' },
    { id: '7438901234567890123', title: 'Fashion Reel', category: 'Fashion' },
    { id: '7427890123456789012', title: 'Product Showcase', category: 'Commercial' },
];

export const featuredVideos = tiktokVideos.slice(0, 4);
