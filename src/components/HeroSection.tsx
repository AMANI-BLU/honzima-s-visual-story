import { motion } from 'framer-motion';
import { Play, ArrowDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/honzima-hero.png';
import { Tiles } from '@/components/ui/tiles';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-16 lg:pt-12">
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

      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 justify-center"
          >
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Creative video editor</span>
            <div className="h-px w-8 bg-primary/60" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] sm:leading-[1.05] mb-6 text-foreground">
            <BlurText delay={0.3} className="block text-foreground justify-center">Crafting Videos</BlurText>
            <BlurText delay={0.5} className="block text-foreground justify-center">That Capture</BlurText>
            <BlurText delay={0.7} className="text-teal-500 justify-center">Attention.</BlurText>
          </h1>

          <BlurTextBlock delay={0.7} className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Helping creators and brands stand out through high-impact creative edits.
          </BlurTextBlock>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative px-10 py-4 rounded-full overflow-hidden font-display font-semibold text-primary-foreground shadow-lg hover:shadow-xl text-center"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="https://t.me/honzima"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-10 py-4 rounded-full border border-border/50 font-display font-semibold text-foreground hover:bg-secondary/50 transition-all duration-300 text-center"
            >
              Get in Touch
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex"
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

