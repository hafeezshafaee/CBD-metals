import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  { label: 'Cash For Cars', href: '/services' },
  { label: 'Car Wrecking', href: '/services' },
  { label: 'Free Car Removal', href: '/services' },
  { label: 'Cash For Trucks', href: '/services' },
  { label: 'Cash For 4x4s', href: '/services' },
  { label: 'Car Recycling', href: '/services' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-brand-dark-gray">
          {/* Column 1 - About */}
          <ScrollReveal direction="up" className="sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
                  <span className="text-brand-black font-bold text-xl">C</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg leading-tight block">
                  CDB Scrap Car Removal
                  </span>
                  <span className="text-brand-yellow font-bold text-lg leading-tight block">
                    Removal
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Perth's leading scrap car removal company offering top cash for unwanted 
                vehicles. Free towing, instant payment, same-day service across 
                all Perth suburbs.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: '#f2f047' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-brand-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-black transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2 - Quick Links */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-brand-yellow transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 3 - Services */}
          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.href}
                      className="text-gray-400 text-sm hover:text-brand-yellow transition-colors duration-300"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 4 - Contact */}
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:0475625766"
                    className="text-gray-400 text-sm hover:text-brand-yellow transition-colors duration-300"
                  >
                    0475 625 766
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@cbdscrapcarremoval.com.au"
                    className="text-gray-400 text-sm hover:text-brand-yellow transition-colors duration-300"
                  >
                    info@cbdscrapcarremoval.com.au
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    Perth Western Australia
                  </span>
                </li>
              </ul>

              {/* Hours */}
              <div className="mt-6 pt-6 border-t border-brand-dark-gray">
                <p className="text-gray-500 text-sm mb-2">Business Hours</p>
                <p className="text-white text-sm">
                  Mon - Sat: 7:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CDB Scrap Car Removal. All Rights Reserved.
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#f2f047' }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-brand-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-black transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
