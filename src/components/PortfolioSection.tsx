import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TestimonialCard, type Testimonial } from '@/components/ui/multi-media-testimonial';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import { ChevronDown } from 'lucide-react';

const portfolioItems: Testimonial[] = [
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Travel Vlog Edit",
    content: "Cinematic travel vlog featuring stunning landscapes and smooth transitions. Duration: 3:45",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Brand Commercial",
    content: "High-energy commercial with dynamic cuts and color grading. Duration: 0:30",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Music Video",
    content: "Stylized music video with creative effects and beat-synced editing. Duration: 4:20",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Documentary Short",
    content: "Compelling documentary with narrative storytelling and emotional pacing. Duration: 12:00",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Product Showcase",
    content: "Sleek product video with professional lighting and smooth animations. Duration: 1:15",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Social Media Reel",
    content: "Fast-paced social content optimized for engagement. Duration: 0:45",
    thumbnail: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Fitness Brand Promo",
    content: "Dynamic fitness brand video with motivational pacing and bold transitions. Duration: 1:30",
    thumbnail: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Wedding Highlight",
    content: "Elegant wedding highlight reel with cinematic color grading. Duration: 5:00",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Tech Review",
    content: "Clean tech review edit with engaging graphics and smooth b-roll integration. Duration: 8:00",
    thumbnail: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    name: "Honzima",
    designation: "Video Editor",
    title: "Event Recap",
    content: "Energetic event highlight reel with crowd shots and speaker moments. Duration: 2:30",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c6ab43?w=800&h=600&fit=crop",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section id="portfolio" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <BlurTextBlock delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
              <span className="text-primary">★</span> Portfolio
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4 text-foreground">
            <BlurText delay={0.1} className="text-foreground">Featured</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Works</BlurText>
          </h2>
          <BlurTextBlock delay={0.3} className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best video editing projects across different styles and industries.
          </BlurTextBlock>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
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

        {!showAll && (
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border/50 font-display font-semibold text-foreground hover:bg-secondary/50 transition-all duration-300"
            >
              Show More
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
