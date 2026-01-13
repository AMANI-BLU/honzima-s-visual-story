import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Instagram, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { BlurText, BlurTextBlock } from '@/components/ui/blur-text';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@honzima.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'Los Angeles, CA' },
  ];

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <BlurTextBlock delay={0}>
            <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">
              Contact
            </span>
          </BlurTextBlock>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            <BlurText delay={0.1} className="text-foreground">Let's</BlurText>{' '}
            <BlurText delay={0.2} className="text-teal-500">Connect</BlurText>
          </h2>
          <BlurTextBlock delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </BlurTextBlock>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-2"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="glass-card h-full">
              <h3 className="font-display font-bold text-2xl mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind or just want to say hi? Feel free to reach out through any of these channels.
              </p>
              
              {/* Contact info list */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social links */}
              <div>
                <div className="text-sm text-muted-foreground mb-4">Follow me on</div>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;