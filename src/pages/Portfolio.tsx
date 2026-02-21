import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getVideos, PortfolioVideo } from '@/data/portfolio';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
    return (
        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-muted/20 border border-white/5">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&controls=0&showinfo=0`}
                title="YouTube Shorts"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl" />
        </div>
    );
};

const Portfolio = () => {
    const [videos, setVideos] = useState<PortfolioVideo[]>([]);

    useEffect(() => {
        setVideos(getVideos());
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <Navigation />

            {/* Hero Section for Portfolio */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <Tiles rows={30} cols={20} tileSize="lg" className="opacity-40" />
                </div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/60 to-background pointer-events-none" />

                <div className="container-custom relative z-10 px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
                            <BlurText delay={0.1}>My Recent Edits</BlurText>{' '}
                            <BlurText delay={0.3} className="text-teal-500 italic">in Action</BlurText>
                        </h1>
                        <BlurTextBlock delay={0.2} className="text-xl text-muted-foreground leading-relaxed">
                            Explore my latest video edits, transitions, and cinematic storytelling.
                        </BlurTextBlock>
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="pb-32 relative">
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id + index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm p-5 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-colors duration-500 transform-gpu group-hover:-translate-y-2">
                                    <YouTubeEmbed videoId={video.id} />
                                    <div className="mt-6 px-1 pb-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{video.category}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-3xl text-foreground group-hover:text-primary transition-colors">{video.title}</h3>
                                        {video.description && (
                                            <p className="text-muted-foreground mt-3 text-lg leading-relaxed">{video.description}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Portfolio;
