import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Zap, Heart } from 'lucide-react';

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
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-gradient mb-2">5+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <p className="font-display font-semibold text-primary-foreground text-lg">
                    "Creativity is intelligence having fun"
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card aspect-[4/3]"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center animate-pulse-glow">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-5xl font-display font-bold text-gradient-accent mb-2">50+</div>
                    <div className="text-muted-foreground text-sm">Projects Done</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Crafting Visual Stories That{' '}
              <span className="text-gradient">Resonate</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Honzima, a passionate video editor with over 5 years of experience in creating 
              compelling visual content. From short-form TikTok videos to cinematic long-form 
              content, I bring stories to life through meticulous editing and creative vision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My expertise spans across color grading, motion graphics, sound design, and 
              storytelling. I believe every project deserves a unique approach that captures 
              its essence and connects with the audience on an emotional level.
            </p>
            
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
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
