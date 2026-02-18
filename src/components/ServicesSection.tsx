import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { MonitorPlay, Flag, Subtitles, Sparkles, MousePointerClick, Layers, PackageCheck, TrendingUp } from 'lucide-react';
import { Tiles } from '@/components/ui/tiles';

const services = [
  {
    title: 'Short Form Edits',
    description: 'We turn raw clips into high-retention, caption-packed vertical videos that pop on Reels, Shorts, and TikTok. Great for content repurposing and explosive growth.',
    tags: [
      { icon: MonitorPlay, label: 'Snappy Pacing' },
      { icon: Flag, label: 'Viral-Ready' },
      { icon: Subtitles, label: 'Subtitled' },
    ],
    colSpan: 'md:col-span-3',
  },
  {
    title: 'Long Form Edits',
    description: 'From vlogs to deep dives, we trim the fluff, tighten the pacing.',
    tags: [
      { icon: Sparkles, label: 'Retention-Driven' },
    ],
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Website Development',
    description: 'Custom websites built to showcase your brand and convert visitors into fans.',
    tags: [
      { icon: MousePointerClick, label: 'Modern Design' },
    ],
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Content Repurposing Package',
    description: 'One video, 10 pieces of content — cut into Shorts, Reels, quote cards, and teasers. Perfect for creators who want to stay visible everywhere.',
    tags: [
      { icon: Layers, label: 'Multi-Platform' },
      { icon: PackageCheck, label: 'Batch Delivery' },
      { icon: TrendingUp, label: 'Quick' },
    ],
    colSpan: 'md:col-span-3',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> Services
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4 text-foreground">
            <BlurText delay={0.1} className="text-foreground">Services I</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Offer</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I craft engaging edits that keep your viewer hooked.
            </p>
          </BlurTextBlock>
        </div>

        <div className="grid md:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className={`group ${service.colSpan}`}
            >
              <div className="h-full rounded-2xl bg-foreground/95 dark:bg-card p-6 md:p-8 flex flex-col justify-between min-h-[260px] border border-border/10">
                <div>
                  <h3 className="font-display font-bold text-xl mb-3 text-background dark:text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-background/60 dark:text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-background/20 dark:border-border/50 text-xs font-medium text-background/70 dark:text-muted-foreground"
                    >
                      <tag.icon className="w-3.5 h-3.5 text-primary" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
