import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { CircleCheck, ArrowRight } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/honzima';

const pricingPlans = [
  {
    id: "shortform",
    name: "SHORT FORM EDITING",
    price: "1,500 ETB",
    per: "per video",
    length: "Up to 1 minute",
    features: [
      "Clean cut & pacing",
      "Hook optimization",
      "Basic color grading",
      "Audio cleanup",
      "Text Animations",
      "Smooth transitions",
      "Background music",
      "Motion graphics",
    ],
    highlighted: false,
  },
  {
    id: "longform-standard",
    name: "LONG FORM – STANDARD",
    price: "5,500 ETB",
    per: "per video",
    length: "Up to 10 minutes",
    features: [
      "Structured storytelling edit",
      "Content flow optimization",
      "Scene trimming & pacing control",
      "Enhanced color correction",
      "Advanced audio balancing",
      "B-roll integration",
      "Lower thirds & branding elements",
      "Moderate motion graphics",
      "YouTube-ready export settings",
    ],
    highlighted: true,
  },
  {
    id: "longform-premium",
    name: "LONG FORM – PREMIUM",
    price: "10,000 ETB",
    per: "per video",
    length: "Up to 20 minutes",
    features: [
      "Full narrative structuring",
      "Multi-camera synchronization",
      "Cinematic color grading",
      "Professional sound design",
      "Advanced motion graphics & animations",
      "Custom intro/outro sequence",
      "Complex transitions & visual effects",
      "Detailed polishing & finishing",
      "Thumbnail frame suggestion",
      "Platform optimization strategy",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> Pricing
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4">
            <BlurText delay={0.1}>Choose Your</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Package</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every project size. Custom quotes available for larger productions.
            </p>
          </BlurTextBlock>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-card p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-primary/50 shadow-xl shadow-primary/10 relative'
                  : 'border-border/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary via-primary/80 to-primary" />
              )}

              <h3 className="font-display font-bold text-lg mb-1 text-foreground">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.per}</p>
              <p className="text-sm text-muted-foreground mt-1">⏱ Length: {plan.length}</p>

              <div className="my-6 h-px bg-border/50" />

              <p className="text-xs font-medium text-muted-foreground mb-4">Includes:</p>
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? 'text-primary-foreground shadow-lg'
                    : 'border border-border/50 text-foreground hover:bg-secondary/50'
                }`}
                style={plan.highlighted ? { background: 'var(--gradient-primary)' } : undefined}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <BlurTextBlock delay={0.6}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Need something custom?{' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                Let's talk about your project
              </a>
            </p>
          </div>
        </BlurTextBlock>
      </div>
    </section>
  );
};

export default PricingSection;
