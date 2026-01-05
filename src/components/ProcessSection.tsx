import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Lightbulb, Scissors, Palette, Send, CheckCircle } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const steps = [
  {
    icon: MessageCircle,
    title: 'Discovery Call',
    description: 'We discuss your vision, goals, and requirements to understand the project scope.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Creative Planning',
    description: 'I develop a creative strategy and storyboard to bring your concept to life.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Scissors,
    title: 'Editing Magic',
    description: 'The raw footage transforms into a polished masterpiece through meticulous editing.',
    color: 'from-primary to-pink-500',
  },
  {
    icon: Palette,
    title: 'Color & Sound',
    description: 'Professional color grading and sound design to enhance the visual experience.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Send,
    title: 'Review & Revise',
    description: 'You review the work and I make revisions until it\'s perfect.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle,
    title: 'Final Delivery',
    description: 'Your finished video is delivered in your preferred format, ready to publish.',
    color: 'from-accent to-pink-500',
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              How I Work
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <BlurText delay={0.1}>My Creative</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Process</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure every project exceeds expectations.
            </p>
          </BlurTextBlock>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card inline-block"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <span className="text-sm font-display font-bold text-muted-foreground">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background items-center justify-center"
                  style={{ background: `linear-gradient(to right, ${step.color.split(' ')[0].replace('from-', '')} , ${step.color.split(' ')[1].replace('to-', '')})` }}
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;