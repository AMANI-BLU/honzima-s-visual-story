import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Upload, MessageSquare, Rocket, Send } from 'lucide-react';
import { Tiles } from '@/components/ui/tiles';

const steps = [
  {
    number: '01',
    title: 'Send Your Files',
    description: 'Upload your raw videos via WeTransfer, Google Drive, Telegram — whatever is easiest for you.',
    illustration: (
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-md">
          <Upload className="w-6 h-6 text-primary" />
        </div>
        <div className="w-px h-8 bg-primary/30" />
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <Send className="w-5 h-5 text-primary" />
        </div>
        <div className="w-px h-8 bg-primary/30" />
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H1.2c0 1.55.4 3.1 1.2 4.5l4.2 9.35z" fill="#0066DA"/>
            <path d="M43.65 25.15L29.9 1.35C28.55 2.15 27.4 3.25 26.6 4.65L1.2 48.65c-.8 1.4-1.2 2.95-1.2 4.5h26.3l17.35-28z" fill="#00AC47"/>
            <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H60.95l5.85 11.3 6.75 12.5z" fill="#EA4335"/>
            <path d="M43.65 25.15L57.4 1.35C56.05.55 54.5 0 52.85 0H34.45c-1.65 0-3.2.55-4.55 1.35l13.75 23.8z" fill="#00832D"/>
            <path d="M60.95 48.65h-33.4l-13.75 23.8c1.35.8 2.9 1.35 4.55 1.35h51.8c1.65 0 3.2-.55 4.55-1.35L60.95 48.65z" fill="#2684FC"/>
            <path d="M73.4 26.6L60.65 4.65c-.8-1.4-1.95-2.5-3.3-3.3L43.6 25.15l17.35 23.5h26.25c0-1.55-.4-3.1-1.2-4.5L73.4 26.6z" fill="#FFBA00"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Edit & Deliver',
    description: 'I cut, trim, color grade, and add smooth, engaging effects to bring your video to life.',
    illustration: (
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="px-4 py-2 rounded-lg bg-[#00005b] text-[#9999ff] font-bold text-lg shadow-md">Ae</div>
        <div className="px-4 py-2 rounded-lg bg-[#00005b] text-[#9999ff] font-bold text-lg shadow-md">Pr</div>
        <div className="px-4 py-2 rounded-lg bg-[#1a1a2e] text-[#a855f7] font-bold text-lg shadow-md">Da</div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Need Any Changes?',
    description: 'Want adjustments? No worries. I offer smooth revision rounds until everything looks perfect.',
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
    title: 'Ready to Post',
    description: 'You receive your final video in a ready-to-upload format for YouTube, TikTok, or Reels.',
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
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> How I Work
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4 text-foreground">
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
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/80 text-sm font-display font-bold text-muted-foreground mb-4">
                  {step.number}
                </div>
                <div className="min-h-[120px] flex items-center justify-center">
                  {step.illustration}
                </div>
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
