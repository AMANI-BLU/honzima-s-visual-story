import { motion } from 'framer-motion';
import { Play, ArrowDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/honzima-hero.png';
import { Tiles } from '@/components/ui/tiles';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Interactive Tiles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles 
          rows={50} 
          cols={30} 
          tileSize="md" 
          className="opacity-40"
          tileClassName="hover:!bg-primary/80"
        />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/60 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center px-20">
        {/* Left Content */}
<motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Professional Video Editor</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6 text-foreground">
            <BlurText delay={0.3} className="block text-foreground">Hi, I'm</BlurText>
            <BlurText delay={0.5} className="text-teal-500">Honzima</BlurText>
          </h1>
          
          <BlurTextBlock delay={0.7} className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 font-light">
            Helping creators and brands stand out through creative edits.
          </BlurTextBlock>
          
          <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative px-8 py-4 rounded-full overflow-hidden font-display font-semibold text-primary-foreground shadow-lg hover:shadow-xl"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
          <motion.a
              href="https://t.me/honzima"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-4 rounded-full border border-border/50 font-display font-semibold text-foreground hover:bg-secondary/50 transition-all duration-300 text-center"
            >
              Get in Touch
            </motion.a>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '3+', label: 'Years Exp' },
              { value: '1M+', label: 'Views' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[2/4] max-w-md mx-auto">
            {/* Three concentric circle lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[110%] h-[110%] rounded-full border-2 border-primary/30"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[125%] h-[125%] rounded-full border border-primary/20"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[140%] h-[140%] rounded-full border border-accent/20"
              />
            </div>
            
            {/* Main image - no box */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Honzima - Video Editor"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass-card px-4 py-3 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available for Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
