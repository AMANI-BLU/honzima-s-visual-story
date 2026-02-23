import { supabase } from '@/lib/supabase';

export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
    created_at?: string;
}

export const getVideos = async (): Promise<PortfolioVideo[]> => {
    const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
    return data || [];
};

export const saveVideo = async (video: PortfolioVideo) => {
    const { error } = await supabase
        .from('videos')
        .upsert(video);

    if (error) {
        console.error('Error saving video:', error);
        throw error;
    }
};

export const deleteVideo = async (id: string) => {
    const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting video:', error);
        throw error;
    }
};
