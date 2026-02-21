
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap, Globe } from 'lucide-react';

const serviceAreas = [
  { city: 'Kochi', desc: 'Web Design, SEO & Apps' },
  { city: 'Trivandrum', desc: 'Web Dev & Digital Marketing' },
  { city: 'Kozhikode', desc: 'SEO & Social Media' },
  { city: 'Thrissur', desc: 'Branding & Web Solutions' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-fivsys-midnight via-fivsys-darkGray/20 to-fivsys-midnight border-t border-white/8 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-5 group">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-fivsys-red transition-colors duration-200">
                fiv<span className="text-fivsys-red">sys</span>
              </span>
            </Link>
            <p className="text-slate-500 mb-5 leading-relaxed text-sm">
              Kerala's premier Glocal digital agency. We build web, app, SEO, and MLM solutions that compete locally and scale globally.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-fivsys-red uppercase tracking-widest">Glocal Excellence</span>
            </div>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={16} />, label: 'Facebook', href: '#' },
                { icon: <Twitter size={16} />, label: 'Twitter', href: '#' },
                { icon: <Instagram size={16} />, label: 'Instagram', href: '#' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-fivsys-red hover:border-fivsys-red/30 hover:bg-fivsys-red/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-4 h-4 text-fivsys-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Services</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'Web Development', href: '/services/web-development' },
                { label: 'App Development', href: '/services/app-development' },
                { label: 'Web Applications', href: '/services/web-app-development' },
                { label: 'MLM Solutions', href: '/services/sales-strategy' },
                { label: 'Digital Marketing & SEO', href: '/services/digital-marketing' },
                { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-fivsys-red transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-fivsys-red/40 rounded-full group-hover:bg-fivsys-red transition-colors duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-4 h-4 text-fivsys-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Company</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-fivsys-red transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-fivsys-red/40 rounded-full group-hover:bg-fivsys-red transition-colors duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-4 h-4 text-fivsys-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Service Areas</h3>
            </div>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.city} className="group">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-fivsys-red/60 mt-0.5 flex-shrink-0 group-hover:text-fivsys-red transition-colors duration-200" />
                    <div>
                      <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-200">{area.city}</div>
                      <div className="text-xs text-slate-600">{area.desc}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/8">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-3.5 h-3.5 text-fivsys-red/60" />
                <span className="text-xs font-semibold text-slate-400">Also Serving</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">Kannur · Kollam · Palakkad · Malappuram · Bangalore · Chennai · Mumbai · Delhi</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Mail className="w-4 h-4 text-fivsys-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-fivsys-red mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                  Olap House, Near Balabadhra Temple, Perandoor, Elamakara, Ernakulam - 682026, Kerala
                </span>
              </li>
              <li>
                <a href="tel:+917356137106" className="flex items-center gap-3 text-slate-500 hover:text-fivsys-red transition-colors duration-200 text-sm group">
                  <Phone className="w-4 h-4 text-fivsys-red flex-shrink-0" />
                  <span>+91 7356137106</span>
                </a>
              </li>
              <li>
                <a href="mailto:teamfivsys@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-fivsys-red transition-colors duration-200 text-sm group">
                  <Mail className="w-4 h-4 text-fivsys-red flex-shrink-0" />
                  <span>teamfivsys@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs text-center md:text-left">
              © {new Date().getFullYear()} fivsys.com — All rights reserved. Kerala's Trusted Glocal Digital Agency. കേരള വെബ്സൈറ്റ് കമ്പനി.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Zap className="w-3.5 h-3.5 text-fivsys-red" />
              <span>Built for Kerala. Scaled for the World.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
