import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Tool icons as simple components
const tools = [
  { 
    name: 'DaVinci Resolve', 
    icon: '🎬',
    color: 'from-orange-500/20 to-red-500/20',
    level: 95 
  },
  { 
    name: 'Adobe Premiere Pro', 
    icon: '🎞️',
    color: 'from-purple-500/20 to-blue-500/20',
    level: 90 
  },
  { 
    name: 'After Effects', 
    icon: '✨',
    color: 'from-blue-500/20 to-purple-500/20',
    level: 85 
  },
  { 
    name: 'Photoshop', 
    icon: '🖼️',
    color: 'from-blue-400/20 to-cyan-400/20',
    level: 88 
  },
  { 
    name: 'Lightroom', 
    icon: '📷',
    color: 'from-sky-500/20 to-blue-500/20',
    level: 92 
  },
  { 
    name: 'CapCut', 
    icon: '📱',
    color: 'from-pink-500/20 to-rose-500/20',
    level: 95 
  },
  { 
    name: 'Final Cut Pro', 
    icon: '🎥',
    color: 'from-gray-400/20 to-gray-600/20',
    level: 80 
  },
  { 
    name: 'Audition', 
    icon: '🎧',
    color: 'from-green-500/20 to-teal-500/20',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            My Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Tools I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-leading software and tools I use to bring creative visions to life.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className={`glass-card h-full bg-gradient-to-br ${tool.color} hover:border-primary/50 transition-all duration-300`}>
                <div className="text-4xl md:text-5xl mb-4">{tool.icon}</div>
                <h3 className="font-display font-semibold text-sm md:text-base mb-3">{tool.name}</h3>
                
                {/* Skill bar */}
                <div className="relative h-1.5 bg-secondary rounded-full overflow-hidden">
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
            </motion.div>
          ))}
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
