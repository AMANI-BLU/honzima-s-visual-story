import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Film, Clapperboard, Sparkles, Image, Camera, Smartphone, Video, Headphones } from 'lucide-react';

// Tool icons as Lucide components
const tools = [
  { 
    name: 'DaVinci Resolve', 
    icon: Film,
    spotlightColor: 'rgba(249, 115, 22, 0.25)',
    level: 95 
  },
  { 
    name: 'Adobe Premiere Pro', 
    icon: Clapperboard,
    spotlightColor: 'rgba(168, 85, 247, 0.25)',
    level: 90 
  },
  { 
    name: 'After Effects', 
    icon: Sparkles,
    spotlightColor: 'rgba(59, 130, 246, 0.25)',
    level: 85 
  },
  { 
    name: 'Photoshop', 
    icon: Image,
    spotlightColor: 'rgba(6, 182, 212, 0.25)',
    level: 88 
  },
  { 
    name: 'Lightroom', 
    icon: Camera,
    spotlightColor: 'rgba(14, 165, 233, 0.25)',
    level: 92 
  },
  { 
    name: 'CapCut', 
    icon: Smartphone,
    spotlightColor: 'rgba(236, 72, 153, 0.25)',
    level: 95 
  },
  { 
    name: 'Final Cut Pro', 
    icon: Video,
    spotlightColor: 'rgba(156, 163, 175, 0.25)',
    level: 80 
  },
  { 
    name: 'Audition', 
    icon: Headphones,
    spotlightColor: 'rgba(34, 197, 94, 0.25)',
    level: 82 
  },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-1/4 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              My Arsenal
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <BlurText delay={0.1}>Tools I</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Master</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading software and tools I use to bring creative visions to life.
            </p>
          </BlurTextBlock>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard 
                  spotlightColor={tool.spotlightColor}
                  className="h-full hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-sm md:text-base mb-3">{tool.name}</h3>
                    
                    {/* Skill bar */}
                    <div className="w-full relative h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tool.level}%` } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ background: 'var(--gradient-primary)' }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 block">{tool.level}%</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee of additional skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {['Color Grading', 'Motion Graphics', 'Sound Design', 'VFX', 'Transitions', 'Storytelling', 'Compositing', 'Keyframing', 'Audio Mixing', 'Color Correction', 'Speed Ramping', 'Text Animation'].map((skill, i) => (
              <span key={i} className="mx-8 text-2xl md:text-3xl font-display font-bold text-muted/30">
                {skill}
              </span>
            ))}
            {['Color Grading', 'Motion Graphics', 'Sound Design', 'VFX', 'Transitions', 'Storytelling', 'Compositing', 'Keyframing', 'Audio Mixing', 'Color Correction', 'Speed Ramping', 'Text Animation'].map((skill, i) => (
              <span key={`dup-${i}`} className="mx-8 text-2xl md:text-3xl font-display font-bold text-muted/30">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;