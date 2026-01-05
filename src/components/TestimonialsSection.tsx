import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Content Creator',
    avatar: '👩‍💼',
    content: "Honzima transformed my raw footage into a cinematic masterpiece. The attention to detail and creative vision exceeded all my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Brand Manager',
    avatar: '👨‍💻',
    content: "Working with Honzima was a game-changer for our brand. The video content increased our engagement by 300%. Professional, creative, and delivers on time.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'YouTuber',
    avatar: '🎬',
    content: "I've worked with many editors, but Honzima stands out. The unique style and quick turnaround make every project a breeze. My subscribers love the new look!",
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Business Owner',
    avatar: '👔',
    content: "Our promotional video looked absolutely stunning. Honzima understood our vision perfectly and delivered beyond expectations. Will definitely work together again!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute left-1/3 top-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              Testimonials
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <BlurText delay={0.1}>Client</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Love</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what clients say about working with me.
            </p>
          </BlurTextBlock>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card h-full relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;