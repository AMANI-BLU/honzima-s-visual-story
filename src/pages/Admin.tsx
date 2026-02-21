import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Save, RotateCcw, Copy, ExternalLink, LayoutGrid, List, Check, AlertCircle } from 'lucide-react';
import { getVideos, saveVideos, resetVideos, PortfolioVideo } from '@/data/portfolio';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';

const Admin = () => {
    const [videos, setVideos] = useState<PortfolioVideo[]>([]);
    const [newVideo, setNewVideo] = useState<Partial<PortfolioVideo>>({
        id: '',
        title: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        setVideos(getVideos());
    }, []);

    const handleAddVideo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newVideo.id || !newVideo.title) {
            toast.error("Video ID and Title are required");
            return;
        }

        const updatedVideos = [...videos, newVideo as PortfolioVideo];
        setVideos(updatedVideos);
        saveVideos(updatedVideos);
        setNewVideo({ id: '', title: '', category: '', description: '' });
        toast.success("Video added to local storage");
    };

    const handleDeleteVideo = (id: string) => {
        const updatedVideos = videos.filter(v => v.id !== id);
        setVideos(updatedVideos);
        saveVideos(updatedVideos);
        toast.success("Video removed from local storage");
    };

    const handleReset = () => {
        if (confirm("Reset to default videos? All local changes will be lost.")) {
            resetVideos();
            setVideos(getVideos());
            toast.info("Restored default videos");
        }
    };

    const exportConfig = () => {
        const config = JSON.stringify(videos, null, 4);
        const code = `export const portfolioVideos: PortfolioVideo[] = ${config};`;
        navigator.clipboard.writeText(code);
        toast.success("Config copied to clipboard! Paste it into portfolio.ts to make it permanent.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container-custom pt-32 pb-20 px-6">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                            Admin <span className="text-teal-500">Dashboard</span>
                        </h1>
                        <p className="text-muted-foreground flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-primary" />
                            Manage your portfolio locally. Changes are saved in your browser.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 hover:bg-secondary/50 transition-colors text-sm font-medium"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset Defaults
                        </button>
                        <button
                            onClick={exportConfig}
                            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-primary-foreground font-display font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                        >
                            <Copy className="w-4 h-4" />
                            Export Config
                        </button>
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Add Video Form */}
                    <section className="lg:col-span-1">
                        <div className="glass-card p-8 sticky top-32">
                            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2 text-foreground">
                                <Plus className="w-5 h-5 text-primary" />
                                Add New Video
                            </h2>
                            <form onSubmit={handleAddVideo} className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                                        YouTube Video ID
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. fXap3dvQmVM"
                                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={newVideo.id}
                                        onChange={(e) => setNewVideo({ ...newVideo, id: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Project Title"
                                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={newVideo.title}
                                        onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Real Estate"
                                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={newVideo.category}
                                        onChange={(e) => setNewVideo({ ...newVideo, category: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                                        Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Brief project overview..."
                                        className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                        value={newVideo.description}
                                        onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-secondary/70 text-foreground font-display font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
                                >
                                    Add to Portfolio
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Video List */}
                    <section className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                                <LayoutGrid className="w-5 h-5 text-primary" />
                                Current Portfolio ({videos.length})
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {videos.map((video, index) => (
                                    <motion.div
                                        key={video.id + index}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="glass-card p-5 group flex items-start gap-4"
                                    >
                                        <div className="w-24 aspect-[9/16] rounded-lg bg-black overflow-hidden flex-shrink-0 relative">
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                                                alt=""
                                                className="w-full h-full object-cover opacity-60"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <ExternalLink className="w-4 h-4 text-white/50" />
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0 py-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{video.category || 'Uncategorized'}</span>
                                                    <h3 className="font-display font-bold text-lg text-foreground line-clamp-1">{video.title}</h3>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteVideo(video.id)}
                                                    className="p-2.5 rounded-lg bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mt-2 font-light">
                                                {video.description || 'No description provided.'}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {videos.length === 0 && (
                                <div className="text-center py-20 glass rounded-3xl border border-dashed border-border/50">
                                    <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground font-medium">Your portfolio is empty.</p>
                                    <p className="text-sm text-muted-foreground/60 mt-1">Add your first video using the form on the left.</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Admin;
