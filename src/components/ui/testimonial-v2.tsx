import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Honzima's editing transformed our brand videos. The attention to detail and creative storytelling elevated our content beyond expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Marketing Director",
  },
  {
    text: "Working with Honzima was seamless. Quick turnarounds, amazing quality, and always open to feedback. A true professional.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Content Creator",
  },
  {
    text: "The cinematic quality Honzima brings to every project is unmatched. Our YouTube channel grew 300% after the rebrand.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Malik",
    role: "YouTuber",
  },
  {
    text: "Honzima understood our vision from day one. The final product exceeded all expectations and resonated with our audience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO, TechStart",
  },
  {
    text: "Fast, creative, and incredibly talented. Honzima delivered viral-worthy content that boosted our engagement significantly.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Social Media Manager",
  },
  {
    text: "The editing style is unique and modern. Honzima knows how to capture attention in the first 3 seconds every time.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Brand Strategist",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

// --- Sub-Components ---
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
            {testimonials.map(({ text, image, name, role }, i) => (
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
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
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
      
      {/* Gradient overlays for smooth fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

// --- Main Testimonials Section ---
const TestimonialV2 = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Testimonials</span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What <span className="text-gradient">Clients</span> Say
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover how I've helped creators and businesses elevate their video content.
          </p>
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
