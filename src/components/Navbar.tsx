import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain } from 'lucide-react';
import fivsysLogo from '@/assets/fivsys-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-fivsys-red/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <img 
                src={fivsysLogo} 
                alt="Fivsys - AI-Powered Development & Marketing" 
                className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300 brightness-110 drop-shadow-[0_0_8px_rgba(223,37,49,0.5)]"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/#services" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Services
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/#how-it-works" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                How It Works
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/#pricing" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Pricing
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/#faq" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                FAQ
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Blog
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-fivsys-red transition-colors duration-300 relative group">
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-fivsys-red group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Button
                asChild
                variant="default" 
                className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red text-white ml-4 animate-gentle-glow"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>Get Free Consultation</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-fivsys-red/20 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/98 backdrop-blur-md border-t border-fivsys-red/20">
            <Link 
              to="/#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-fivsys-red/20 hover:text-fivsys-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild
              variant="default" 
              className="w-full mt-2 bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red animate-gentle-glow"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Get Free Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
