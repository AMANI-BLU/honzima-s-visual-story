import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { PricingCards } from '@/components/ui/pricing-cards';

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for short-form content and social media edits",
    monthlyPrice: "$99",
    yearlyPrice: "$79",
    features: [
      { text: "Up to 1 minute video" },
      { text: "Basic color correction" },
      { text: "2 revision rounds" },
      { text: "Social media formats" },
      { text: "48-hour delivery" },
    ],
    button: {
      text: "Get Started",
      url: "#contact",
    },
  },
  {
    id: "pro",
    name: "Professional",
    description: "Ideal for YouTube videos, vlogs, and promos",
    monthlyPrice: "$299",
    yearlyPrice: "$249",
    features: [
      { text: "Up to 10 minutes video" },
      { text: "Advanced color grading" },
      { text: "Motion graphics included" },
      { text: "Sound design" },
      { text: "3 revision rounds" },
      { text: "5-day delivery" },
    ],
    button: {
      text: "Upgrade Now",
      url: "#contact",
    },
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "For cinematic projects and high-end production",
    monthlyPrice: "$599",
    yearlyPrice: "$499",
    features: [
      { text: "Up to 30 minutes video" },
      { text: "Cinematic color grading" },
      { text: "Advanced VFX & motion" },
      { text: "Custom sound design" },
      { text: "Unlimited revisions" },
      { text: "RAW project files" },
    ],
    button: {
      text: "Go Premium",
      url: "#contact",
    },
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="relative overflow-hidden">
      <div className="absolute right-1/4 bottom-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              Pricing
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <BlurText delay={0.1}>Choose Your</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Package</BlurText>
          </h2>
        </div>

        <PricingCards 
          heading=""
          description="Transparent pricing for every project size. Custom quotes available for larger productions."
          plans={pricingPlans}
        />
        
        {/* Custom quote */}
        <BlurTextBlock delay={0.6}>
          <div className="text-center mt-8">
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