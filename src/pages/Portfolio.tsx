import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { tiktokVideos } from '@/data/portfolio';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokEmbed = ({ videoId }: { videoId: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, [videoId]);

    return (
        <div ref={containerRef} className="flex justify-center w-full min-h-[580px]">
            <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@honzimaedits/video/${videoId}`}
                data-video-id={videoId}
                style={{ maxWidth: '100%', minWidth: '325px' }}
            >
                <section />
            </blockquote>
        </div>
    );
};

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background overflow-x-hidden">
            <Navigation />

            {/* Hero Section for Portfolio */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <Tiles rows={50} cols={30} tileSize="md" className="opacity-40" />
                </div>
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/60 to-background pointer-events-none" />

                <div className="container-custom relative z-10 px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <BlurText as="h1" className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
                            Full Portfolio
                        </BlurText>
                        <BlurTextBlock delay={0.2} className="text-xl text-muted-foreground leading-relaxed">
                            Explore my complete library of video edits, transitions, and cinematic storytelling. Every project is crafted to capture attention and deliver high impact.
                        </BlurTextBlock>
                    </div>
                </div>
            </section>

            {/* Video Grid */}
            <section className="pb-32 relative">
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tiktokVideos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card p-3 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                                    <div className="aspect-[9/16] bg-muted/20 rounded-xl overflow-hidden relative">
                                        <TikTokEmbed videoId={video.id} />
                                    </div>
                                    <div className="mt-4 px-2 pb-2">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-medium text-primary uppercase tracking-wider">{video.category}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{video.title}</h3>
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
