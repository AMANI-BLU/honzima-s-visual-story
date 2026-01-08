import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TestimonialCard, type Testimonial } from '@/components/ui/multi-media-testimonial';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const portfolioItems: (Testimonial & { category: string })[] = [
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Travel Vlog Edit",
    content: "Cinematic travel vlog featuring stunning landscapes and smooth transitions. Duration: 3:45",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Cinematic",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Brand Commercial",
    content: "High-energy commercial with dynamic cuts and color grading. Duration: 0:30",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Commercial",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Music Video",
    content: "Stylized music video with creative effects and beat-synced editing. Duration: 4:20",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Music",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Documentary Short",
    content: "Compelling documentary with narrative storytelling and emotional pacing. Duration: 12:00",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Documentary",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Product Showcase",
    content: "Sleek product video with professional lighting and smooth animations. Duration: 1:15",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Commercial",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Social Media Reel",
    content: "Fast-paced social content optimized for engagement. Duration: 0:45",
    thumbnail: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Social",
  },
];

const categories = ['All', 'Cinematic', 'Commercial', 'Music', 'Documentary', 'Social'];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="section-padding relative">
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <BlurTextBlock delay={0} className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            <BlurText delay={0.1} className="text-foreground">Featured</BlurText>{' '}
            <BlurText delay={0.2} className="text-gradient">Works</BlurText>
          </h2>
          <BlurTextBlock delay={0.3} className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best video editing projects across different styles and industries.
          </BlurTextBlock>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-display font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
