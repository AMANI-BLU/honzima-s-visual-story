import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const packages = [
  {
    id: 1,
    name: 'Starter',
    icon: Zap,
    price: '$99',
    period: 'per video',
    description: 'Perfect for short-form content and social media edits.',
    features: [
      'Up to 1 minute video',
      'Basic color correction',
      '2 revision rounds',
      'Social media formats',
      '48-hour delivery',
    ],
    popular: false,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    name: 'Professional',
    icon: Crown,
    price: '$299',
    period: 'per video',
    description: 'Ideal for YouTube videos, vlogs, and promotional content.',
    features: [
      'Up to 10 minutes video',
      'Advanced color grading',
      'Motion graphics',
      'Sound design included',
      '3 revision rounds',
      'All export formats',
      '5-day delivery',
    ],
    popular: true,
    gradient: 'from-primary/30 to-pink-500/30',
  },
  {
    id: 3,
    name: 'Premium',
    icon: Rocket,
    price: '$599',
    period: 'per video',
    description: 'For cinematic projects and high-end production value.',
    features: [
      'Up to 30 minutes video',
      'Cinematic color grading',
      'Advanced VFX & motion',
      'Custom sound design',
      'Unlimited revisions',
      'RAW project files',
      'Priority support',
      '7-day delivery',
    ],
    popular: false,
    gradient: 'from-accent/20 to-purple-500/20',
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute right-1/4 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              Pricing
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <BlurText delay={0.1}>Choose Your</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Package</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every project size. Custom quotes available for larger productions.
            </p>
          </BlurTextBlock>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-display font-bold text-primary-foreground" style={{ background: 'var(--gradient-primary)' }}>
                  Most Popular
                </div>
              )}
              
              <div className={`glass-card h-full bg-gradient-to-br ${pkg.gradient} ${pkg.popular ? 'border-primary/50' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.popular ? 'bg-primary' : 'bg-secondary'}`}>
                    <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-primary-foreground' : 'text-foreground'}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{pkg.name}</h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-display font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? 'bg-primary' : 'bg-secondary'}`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? 'text-primary-foreground' : 'text-foreground'}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-display font-semibold transition-all ${
                    pkg.popular
                      ? 'text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  style={pkg.popular ? { background: 'var(--gradient-primary)' } : {}}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom quote */}
        <BlurTextBlock delay={0.6}>
          <div className="text-center mt-12">
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