import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';
import { Tiles } from '@/components/ui/tiles';
import heroImage from '@/assets/honzima-hero.png';
import avatar1 from '@/assets/testimonial-1.jpg';
import avatar2 from '@/assets/testimonial-2.jpg';
import avatar3 from '@/assets/testimonial-3.jpg';
import avatar4 from '@/assets/testimonial-4.jpg';
import avatar5 from '@/assets/testimonial-5.jpg';

const tiktokComments = [
  {
    id: 1,
    username: '@Jarzone',
    comment: "This edit got no mercy 👏",
    likes: '84',
    time: '2d',
    avatar: avatar5,
  },
  {
    id: 2,
    username: '@Natnael content creator',
    comment: "This edit is insanely clean 🔥",
    likes: '62',
    time: '3d',
    avatar: avatar2,
  },
  {
    id: 3,
    username: '@Ayat siraj',
    comment: "Loved your content HONZIMA",
    likes: '45',
    time: '4d',
    avatar: avatar3,
  },
  {
    id: 4,
    username: '@Rediet',
    comment: "Why are your videos so satisfying to watch 😄😘",
    likes: '91',
    time: '5d',
    avatar: avatar4,
  },
  {
    id: 5,
    username: '@Huka Garse',
    comment: "This is clean Son 👏🔥",
    likes: '73',
    time: '6d',
    avatar: avatar1,
  },
];

const TikTokEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <iframe
        src={`https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1&autoplay=1&loop=0&controls=0&progress_bar=0`}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clip-board-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
};

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

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - TikTok mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative max-w-[320px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl" />

              <div className="relative bg-foreground dark:bg-background rounded-[2.5rem] p-3 border border-border/50">
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black">
                  <TikTokEmbed videoId="7595307565320244536" />
                </div>
              </div>

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
                    {comment.avatar ? (
                      <img src={comment.avatar} alt={comment.username} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{comment.username.charAt(1).toUpperCase()}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{comment.username}</span>
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
