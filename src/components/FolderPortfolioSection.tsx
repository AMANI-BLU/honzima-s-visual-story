import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedFolder, type Project } from '@/components/ui/3d-folder';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const portfolioData = [
  {
    title: "Short Films",
    gradient: "linear-gradient(135deg, hsl(180 100% 20%), hsl(180 100% 30%))",
    projects: [
      { id: "sf1", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800", title: "Urban Story" },
      { id: "sf2", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", title: "Night Vision" },
      { id: "sf3", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800", title: "Morning Light" },
      { id: "sf4", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800", title: "Documentary Cut" },
    ] as Project[]
  },
  {
    title: "Music Videos",
    gradient: "linear-gradient(135deg, hsl(280 80% 40%), hsl(320 80% 50%))",
    projects: [
      { id: "mv1", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800", title: "Rhythm Flow" },
      { id: "mv2", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", title: "Beat Drop" },
      { id: "mv3", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800", title: "Neon Dreams" },
    ] as Project[]
  },
  {
    title: "Commercials",
    gradient: "linear-gradient(135deg, hsl(40 100% 50%), hsl(20 100% 50%))",
    projects: [
      { id: "c1", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800", title: "Brand Story" },
      { id: "c2", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", title: "Product Launch" },
      { id: "c3", image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80&w=800", title: "Social Ad" },
      { id: "c4", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800", title: "Corporate Vision" },
      { id: "c5", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800", title: "Event Promo" },
    ] as Project[]
  },
  {
    title: "Social Content",
    gradient: "linear-gradient(135deg, hsl(200 100% 45%), hsl(220 100% 55%))",
    projects: [
      { id: "sc1", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", title: "TikTok Series" },
      { id: "sc2", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", title: "Reels Package" },
      { id: "sc3", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", title: "YouTube Shorts" },
    ] as Project[]
  },
  {
    title: "Vlogs",
    gradient: "linear-gradient(135deg, hsl(340 80% 50%), hsl(360 80% 55%))",
    projects: [
      { id: "v1", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", title: "Travel Diary" },
      { id: "v2", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", title: "Behind Scenes" },
      { id: "v3", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800", title: "Day in Life" },
    ] as Project[]
  },
  {
    title: "Tutorials",
    gradient: "linear-gradient(135deg, hsl(140 70% 35%), hsl(160 70% 45%))",
    projects: [
      { id: "t1", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", title: "Editing Basics" },
      { id: "t2", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=800", title: "Color Grade" },
      { id: "t3", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800", title: "Sound Design" },
    ] as Project[]
  }
];

const FolderPortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="folder-portfolio"
      className="section-padding bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BlurText className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Project Gallery
          </BlurText>
          <BlurTextBlock className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" delay={0.2}>
            Explore my work organized by category. Hover over folders to preview projects.
          </BlurTextBlock>
        </motion.div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 place-items-center">
          {portfolioData.map((folder, index) => (
            <motion.div
              key={folder.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <AnimatedFolder
                title={folder.title}
                projects={folder.projects}
                gradient={folder.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FolderPortfolioSection;
