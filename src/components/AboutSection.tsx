import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Zap, Heart } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Award, title: 'Quality First', desc: 'Every frame matters' },
    { icon: Clock, title: 'Fast Delivery', desc: 'On-time, every time' },
    { icon: Zap, title: 'Creative Edge', desc: 'Unique visual style' },
    { icon: Heart, title: 'Passion Driven', desc: 'Love what I do' },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card aspect-square flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-gradient mb-2">3+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 cursor-pointer"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <p className="font-display font-semibold text-primary-foreground text-lg">
                    "Creativity is intelligence having fun"
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card aspect-[4/3] cursor-pointer"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-display font-bold text-gradient mb-2">1M+</div>
                      <div className="text-muted-foreground text-sm">Views</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card aspect-square flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-gradient-accent mb-2">50+</div>
                    <div className="text-muted-foreground text-sm">Projects Done</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BlurTextBlock delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
                <span className="text-primary">★</span> About Me
              </span>
            </BlurTextBlock>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4 text-foreground">
              <BlurText delay={0.1} className="text-foreground">Crafting Visual Stories That</BlurText>{' '}
              <BlurText delay={0.3} className="text-teal-500">Resonate</BlurText>
            </h2>
            <BlurTextBlock delay={0.4} className="text-muted-foreground text-lg leading-relaxed mb-6">
              I partner with creators and brands to turn ideas into engaging, high-quality videos. 
              Results-focused, fast delivery, reliable quality.
            </BlurTextBlock>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
