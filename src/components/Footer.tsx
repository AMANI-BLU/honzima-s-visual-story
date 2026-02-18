import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  const TikTokIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.06a8.16 8.16 0 004.77 1.52V7.14a4.85 4.85 0 01-1-.45z"/>
    </svg>
  );

  const InstagramIcon = () => <Instagram className="w-4 h-4" />;

  const socials = [
    { icon: InstagramIcon, href: 'https://instagram.com/honzimaedits', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@honzimaedits', label: 'TikTok' },
  ];

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display font-bold text-3xl inline-block mb-4">
              <span className="text-gradient">Hon</span>
              <span className="text-foreground">zima</span>
            </a>
            <p className="text-muted-foreground max-w-xs">
              Helping creators and brands stand out through creative edits.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Let's work together on your next project.
            </p>
            <motion.a
              href="https://t.me/honzima"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2.5 rounded-xl font-semibold text-sm text-primary-foreground"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} <span className="text-foreground font-semibold">Honzima</span>. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
