import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg' : 'bg-brand-black'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="CBD Scrap Car Removal"
              className="h-20 w-20 object-cover rounded-full"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 font-medium text-sm transition-colors duration-300 relative ${isActive(item.href) ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
                    }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-yellow rounded-full" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0475625766" className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors duration-300">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0475 625 766</span>
            </a>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-brand-yellow text-brand-black font-semibold px-6 py-2 rounded-lg hover:bg-brand-light-green transition-colors duration-300"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-black border-t border-brand-dark-gray overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block py-3 text-lg font-medium transition-colors duration-300 border-b border-brand-dark-gray/40 ${isActive(item.href) ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-5 flex flex-col gap-3">
                <a href="tel:0475625766" className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors duration-300 py-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">0475 625 766</span>
                </a>
                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-brand-yellow text-brand-black font-semibold py-3 rounded-lg hover:bg-brand-light-green transition-colors duration-300"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}