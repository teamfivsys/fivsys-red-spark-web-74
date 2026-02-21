import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Kerala', href: '/#kerala-market' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', mass: 0.5, stiffness: 100, damping: 20, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-fivsys-red transition-colors duration-200 drop-shadow-[0_0_8px_rgba(225,29,72,0.3)]">
                fiv<span className="text-fivsys-red">sys</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-fivsys-red group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <MagneticButton className="ml-4" strength={0.3}>
              <Button
                asChild
                className="bg-fivsys-red hover:bg-fivsys-darkRed text-white font-semibold px-5 py-2 h-auto text-sm border-0 shadow-lg shadow-fivsys-red/20 hover:shadow-fivsys-red/40 transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Get a Quote</span>
                </Link>
              </Button>
            </MagneticButton>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-slate-950/95 backdrop-blur-xl border-t border-white/10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  asChild
                  className="w-full bg-fivsys-red hover:bg-fivsys-darkRed text-white font-semibold"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Get a Quote</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
