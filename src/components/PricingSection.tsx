import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { CircleCheck, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Package",
    price: "1,500 ETB",
    per: "per video",
    length: "Up to 2 minutes",
    features: [
      "Rough Cut",
      "Color Grading",
      "Audio Editing",
      "Smooth Transitions",
      "Background Music",
      "Motion Graphics",
      "Text Animation",
      "Sound Effects",
    ],
    button: { text: "Get Started", url: "#contact" },
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "5,500 ETB",
    per: "per video",
    length: "Up to 10 minutes",
    features: [
      "Everything in Basic",
      "More detailed editing & storytelling flow",
      "Advanced motion graphics usage",
      "Enhanced audio balancing",
      "More transitions & effects",
    ],
    button: { text: "Upgrade Now", url: "#contact" },
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "10,000 ETB",
    per: "per video",
    length: "Up to 20 minutes",
    features: [
      "Everything in Standard",
      "Cinematic color grading",
      "Advanced motion graphics & animations",
      "Professional sound design",
      "Complex cuts (multi-camera / storytelling)",
      "High-quality finishing & polishing",
    ],
    button: { text: "Go Premium", url: "#contact" },
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
      <div className="absolute right-1/4 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
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

              <h3 className="font-display font-bold text-xl mb-1 text-foreground">{plan.name}</h3>
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
                href={plan.button.url}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? 'text-primary-foreground shadow-lg'
                    : 'border border-border/50 text-foreground hover:bg-secondary/50'
                }`}
                style={plan.highlighted ? { background: 'var(--gradient-primary)' } : undefined}
              >
                {plan.button.text}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <BlurTextBlock delay={0.6}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Need something custom?{' '}
              <a href="#contact" className="text-primary hover:underline font-semibold">
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
