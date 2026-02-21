import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { ChevronDown } from 'lucide-react';

import { featuredVideos } from '@/data/portfolio';
import { Link } from 'react-router-dom';

const YouTubeEmbed = ({ videoId, className = '' }: { videoId: string; className?: string }) => {
  return (
    <div className={`relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-muted/20 border border-white/5 ${className}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm p-4 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 transform-gpu group-hover:-translate-y-2">
                <YouTubeEmbed videoId={video.id} />
                <div className="mt-5 px-1 pb-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{video.category}</span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-2 group-hover:text-primary transition-colors">{video.title}</h3>
                </div>
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
