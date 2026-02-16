import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Upload, Wand2, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Drop Your Footage',
    description: 'Upload your raw clips — WeTransfer, Google Drive, Dropbox — whatever works for you.',
    illustration: (
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-md">
          <Upload className="w-6 h-6 text-primary" />
        </div>
        <div className="w-px h-8 bg-primary/30" />
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-lg">📁</span>
        </div>
        <div className="w-px h-8 bg-primary/30" />
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-lg">☁️</span>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'We Do Our Magic',
    description: 'We cut, trim, color-grade, and add engaging transitions.',
    illustration: (
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="px-4 py-2 rounded-lg bg-[hsl(var(--primary)/0.15)] text-primary font-bold text-lg shadow-md">Ae</div>
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shadow-md">
          <Wand2 className="w-6 h-6 text-accent" />
        </div>
        <div className="px-4 py-2 rounded-lg bg-[hsl(var(--primary)/0.15)] text-primary font-bold text-lg shadow-md">Pr</div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Feedback? Easy',
    description: 'Want something changed? We offer smooth revision rounds to make sure everything is perfect.',
    illustration: (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-sm">
            Requested a Revision
          </div>
        </div>
        <div className="px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
          Revision is in progress!
        </div>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Upload & Grow',
    description: 'We deliver your final video in ready-to-upload YouTube format.',
    illustration: (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/90 text-background text-sm font-medium shadow-md">
          <Rocket className="w-4 h-4" />
          Final.mp4
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground italic">Thumbnail.png</span>
          <div className="px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
            Publish
          </div>
        </div>
      </div>
    ),
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            <BlurText delay={0.1} className="text-foreground">My Creative</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Process</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure every project exceeds expectations.
            </p>
          </BlurTextBlock>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 h-full transition-shadow duration-300 hover:shadow-xl">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/80 text-sm font-display font-bold text-muted-foreground mb-4">
                  {step.number}
                </div>

                {/* Illustration area */}
                <div className="min-h-[120px] flex items-center justify-center">
                  {step.illustration}
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
