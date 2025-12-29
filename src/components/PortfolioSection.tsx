import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Travel Vlog Edit',
    category: 'Cinematic',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Brand Commercial',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    duration: '0:30',
  },
  {
    id: 3,
    title: 'Music Video',
    category: 'Music',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    duration: '4:20',
  },
  {
    id: 4,
    title: 'Documentary Short',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    duration: '12:00',
  },
  {
    id: 5,
    title: 'Product Showcase',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    duration: '1:15',
  },
  {
    id: 6,
    title: 'Social Media Reel',
    category: 'Social',
    thumbnail: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=600&fit=crop',
    duration: '0:45',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best video editing projects across different styles and industries.
          </p>
        </motion.div>

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
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden glass-card p-0 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Play button */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow">
                    <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                  </div>
                </motion.div>
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
                  {item.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
