import { supabase } from '@/lib/supabase';

export interface PortfolioVideo {
    id: string;
    title: string;
    category?: string;
    description?: string;
    created_at?: string;
}

export const getVideos = async (): Promise<PortfolioVideo[]> => {
    console.log('Fetching videos from Supabase...');
    const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Supabase fetch error:', error);
        return [];
    }
    console.log('Fetched videos:', data?.length || 0);
    return data || [];
};

export const saveVideo = async (video: PortfolioVideo) => {
    console.log('Saving video to Supabase:', video);
    const { error } = await supabase
        .from('videos')
        .upsert(video);

    if (error) {
        console.error('Supabase save error:', error);
        throw error;
    }
    console.log('Video saved successfully');
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
