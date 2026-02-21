import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/#process', label: 'Process' },
    { href: '/#community', label: 'Community' },
    { href: '/#testimonials', label: 'Review' },
    { href: '/#pricing', label: 'Pricing' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const TikTokIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.06a8.16 8.16 0 004.77 1.52V7.14a4.85 4.85 0 01-1-.45z" />
    </svg>
  );

  const socials = [
    { icon: () => <Instagram className="w-4 h-4" />, href: 'https://instagram.com/honzimaedits', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@honzimaedits', label: 'TikTok' },
  ];

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              to="/#hero"
              onClick={(e) => handleLinkClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '/#hero')}
              className="font-display font-bold text-3xl inline-block mb-4"
            >
              <span className="text-gradient">Hon</span>
              <span className="text-foreground">zima</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Helping creators and brands stand out through creative edits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
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
          <p className="text-sm text-muted-foreground">
            ©2026 honzima All rights reserved.
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
