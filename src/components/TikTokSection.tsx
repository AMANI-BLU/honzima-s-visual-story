import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import heroImage from '@/assets/honzima-hero.png';

const tiktokComments = [
  {
    id: 1,
    username: '@creative_studio',
    avatar: '🎨',
    comment: "This editing is INSANE! The transitions are so smooth 🔥🔥",
    likes: '12.4K',
    time: '2d',
    verified: true,
  },
  {
    id: 2,
    username: '@filmmaker_pro',
    avatar: '🎬',
    comment: "Tutorial please!! I need to learn these color grades 😍",
    likes: '8.2K',
    time: '3d',
    verified: false,
  },
  {
    id: 3,
    username: '@content_queen',
    avatar: '👑',
    comment: "Best editor on TikTok no cap 👏",
    likes: '5.7K',
    time: '4d',
    verified: true,
  },
  {
    id: 4,
    username: '@motion_design',
    avatar: '✨',
    comment: "The pacing is perfect! Every beat hits just right",
    likes: '3.1K',
    time: '5d',
    verified: false,
  },
  {
    id: 5,
    username: '@video_vibes',
    avatar: '🎥',
    comment: "How do you make it look so effortless? 🤯",
    likes: '2.9K',
    time: '6d',
    verified: false,
  },
];

const TikTokSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Tiles rows={50} cols={30} tileSize="md" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/80 to-background pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - TikTok mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            {/* Phone frame */}
            <div className="relative max-w-[320px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl" />
              
              <div className="relative bg-foreground dark:bg-background rounded-[2.5rem] p-3 border border-border/50">
                {/* Screen content */}
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-gradient-to-b from-muted to-card">
                  {/* Honzima's photo */}
                  <div className="absolute inset-0">
                    <img
                      src={heroImage}
                      alt="Honzima"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* TikTok UI elements */}
                  <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4">
                    <button className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary fill-primary" />
                      </div>
                      <span className="text-[10px] mt-1 text-white">256K</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] mt-1 text-white">1.2K</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                        <Bookmark className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] mt-1 text-white">45K</span>
                    </button>
                    <button className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center">
                        <Share2 className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] mt-1 text-white">Share</span>
                    </button>
                  </div>
                  
                  {/* Username at bottom */}
                  <div className="absolute left-3 bottom-4 right-16">
                    <p className="font-semibold text-sm text-white">@honzima_edits</p>
                    <p className="text-xs text-white/70 mt-1">Smooth transition tutorial ✨ #editing #videoeditor #fyp</p>
                  </div>
                </div>
              </div>
              
              {/* Dynamic island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground dark:bg-background rounded-full" />
            </div>
          </motion.div>
          
          {/* Right - Comments */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <BlurTextBlock delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 text-sm font-medium text-muted-foreground">
                <span className="text-primary">★</span> Social Proof
              </span>
            </BlurTextBlock>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-4">
              <BlurText delay={0.1}>What the</BlurText>{' '}
              <BlurText delay={0.2} className="text-teal-500">Community</BlurText>{' '}
              <BlurText delay={0.3}>Says</BlurText>
            </h2>
            <BlurTextBlock delay={0.4}>
              <p className="text-muted-foreground mb-8">
                Real comments from my TikTok community. The love keeps me creating!
              </p>
            </BlurTextBlock>
            
            {/* Comments list */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {tiktokComments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{comment.username}</span>
                        {comment.verified && (
                          <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        )}
                        <span className="text-xs text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-sm mt-1 text-muted-foreground">{comment.comment}</p>
                      <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                        <Heart className="w-3 h-3" />
                        <span className="text-xs">{comment.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
