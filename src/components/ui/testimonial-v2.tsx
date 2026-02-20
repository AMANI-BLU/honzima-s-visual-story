import React from 'react';
import { motion } from "framer-motion";
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Working with Honzima elevated our real estate videos to a whole new level. He understands real estate marketing, not just editing.",
    name: "ETCL Real Estate PLC",
    role: "Real Estate",
  },
  {
    text: "Great work! The edit feels smooth and exactly matches my vision.",
    name: "Chereka Kids",
    role: "Small Business",
  },
  {
    text: "Working with Honzima was a great experience. We will definitely be coming back for more edits.",
    name: "M Y",
    role: "Travel Agency",
  },
  {
    text: "You really understood what I wanted — the video came out better than I expected.",
    name: "Maffis Clothing",
    role: "Small Business",
  },
  {
    text: "Yo this came out way better than I expected, thank you!",
    name: "Alkaba",
    role: "Travel Agency",
  },
  {
    text: "The edit looks so clean, appreciate it!",
    name: "Flipper International School",
    role: "Education",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`relative overflow-hidden h-[600px] ${className || ''}`}>
      <motion.div
        animate={{ y: [0, '-50%'] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map(({ text, name, role }, i) => (
              <motion.div
                key={`${idx}-${i}`}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <p className="text-foreground/90 leading-relaxed mb-4">
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <span className="text-lg font-bold text-primary">{name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

const TestimonialV2 = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> Testimonials
            </span>
          </BlurTextBlock>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4">
            <BlurText delay={0.1}>What</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Clients</BlurText>{' '}
            <BlurText delay={0.3}>Say</BlurText>
          </h2>
          
          <BlurTextBlock delay={0.4}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover how I've helped creators and businesses elevate their video content.
            </p>
          </BlurTextBlock>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} duration={25} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={22} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialV2;
