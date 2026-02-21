import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { ChevronDown } from 'lucide-react';

import { featuredVideos } from '@/data/portfolio';
import { Link } from 'react-router-dom';

const TikTokEmbed = ({ videoId, className = '' }: { videoId: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, [videoId]);

  return (
    <div ref={containerRef} className={`flex justify-center ${className}`}>
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

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> Portfolio
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4 text-foreground">
            <BlurText delay={0.1} className="text-foreground">Featured</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Works</BlurText>
          </h2>
          <BlurTextBlock delay={0.3} className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best video editing projects across different styles and industries.
          </BlurTextBlock>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <div className="rounded-xl overflow-hidden border border-border/50 bg-card p-2">
                <TikTokEmbed videoId={video.id} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              See All Projects
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
