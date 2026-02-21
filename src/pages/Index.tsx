
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight, Code, Smartphone, Globe, BarChart3, Share2, TrendingUp,
  ChevronRight, Zap, Brain, Cpu, Sparkles, Star, Users, Award, Clock,
  MapPin, IndianRupee, Headphones, Target, Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BlogTeaser from '@/components/BlogTeaser';
import KeralaMarketSection from '@/components/KeralaMarketSection';
import LeadForm from '@/components/LeadForm';
import MagneticButton from '@/components/MagneticButton';
import {
  springSlideUp,
  springSlideUpStagger,
  letterRevealContainer,
  letterRevealItem,
  cardHover,
  viewportOptions,
} from '@/lib/animations';

const HEADLINE = 'Architecting Digital Growth for Kerala & The World.';

const services = [
  {
    title: 'AI Web Development',
    description: 'Enterprise-grade websites powered by AI. Leading web design company Kerala with affordable website design for businesses in Kochi, Trivandrum, and Calicut.',
    icon: <Globe className="h-7 w-7 text-fivsys-red" />,
    link: '/services/web-development',
    features: ['AI-Powered Design', 'Smart Analytics', 'Auto-Optimization'],
  },
  {
    title: 'Intelligent App Development',
    description: 'Cross-platform mobile applications with machine learning integration. Trusted app developers in Kerala and across India.',
    icon: <Smartphone className="h-7 w-7 text-fivsys-red" />,
    link: '/services/app-development',
    features: ['ML Integration', 'Cross-Platform', 'Smart UI/UX'],
  },
  {
    title: 'AI-Powered Web Apps',
    description: 'Scalable web applications with advanced backend systems. E-commerce website Kerala specialists with intelligent automation capabilities.',
    icon: <Code className="h-7 w-7 text-fivsys-red" />,
    link: '/services/web-app-development',
    features: ['AI Automation', 'Scalable Architecture', 'Smart Backend'],
  },
  {
    title: 'MLM Solutions',
    description: 'Custom multi-level marketing platforms built for growth and transparency. Robust genealogy trees, commission engines, and payout systems.',
    icon: <Network className="h-7 w-7 text-fivsys-red" />,
    link: '/services/sales-strategy',
    features: ['Genealogy Trees', 'Commission Engine', 'Member Portals'],
  },
  {
    title: 'AI-Driven SEO & Marketing',
    description: 'Expert SEO company Kerala helping businesses achieve top Google rankings. Data-driven digital marketing with predictive analytics.',
    icon: <BarChart3 className="h-7 w-7 text-fivsys-red" />,
    link: '/services/digital-marketing',
    features: ['Predictive Analytics', 'Auto-Optimization', 'ROI Tracking'],
  },
  {
    title: 'Smart Social Media',
    description: 'AI-enhanced social media management. Digital branding Kerala experts with intelligent content creation and audience targeting.',
    icon: <Share2 className="h-7 w-7 text-fivsys-red" />,
    link: '/services/social-media-marketing',
    features: ['AI Content', 'Smart Targeting', 'Engagement Analytics'],
  },
];

const stats = [
  { number: '500+', label: 'Projects Delivered', icon: <Award className="h-5 w-5" /> },
  { number: '98%', label: 'Client Satisfaction', icon: <Star className="h-5 w-5" /> },
  { number: '150+', label: 'Global Clients', icon: <Users className="h-5 w-5" /> },
  { number: '24/7', label: 'AI Support', icon: <Clock className="h-5 w-5" /> },
];

function ParallaxGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const gridX = useTransform(springX, [-1, 1], [-20, 20]);
  const gridY = useTransform(springY, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.height / 2) / (rect.height / 2));
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        <svg
          className="w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </motion.div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-fivsys-red/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-fivsys-midnight text-white overflow-x-hidden">
      <SEO
        title="fivsys | Glocal Digital Agency Kerala | Web Development, SEO & MLM Solutions"
        description="fivsys.com — Kerala's premier Glocal digital agency. Expert web development, AI-powered SEO, MLM solutions and digital marketing in Kochi, Trivandrum, Kozhikode, Thrissur. Trusted globally."
        keywords="website development company in Kerala, web design company Kerala, affordable website design Kerala, e-commerce website Kerala, web developers Kochi, web development Trivandrum, web design Calicut, SEO company Kerala, SEO expert Kerala, digital marketing Kerala, MLM software Kerala, branding agency Kerala, glocal agency Kerala, fivsys"
        schemaType="WebPage"
        faqItems={[
          {
            question: 'Do you work with businesses in Kerala?',
            answer: 'Yes! FIVSYS is a leading website development company in Kerala. We serve businesses across Kochi, Trivandrum (Thiruvananthapuram), Calicut (Kozhikode), Thrissur, and all Kerala districts.',
          },
          {
            question: 'What is the cost of website development in Kerala?',
            answer: 'Our affordable Kerala web design packages start from ₹25,000. E-commerce solutions start from ₹35,000. We are the trusted web developers Kochi and Trivandrum businesses rely on.',
          },
          {
            question: 'Do you provide SEO services in Kerala?',
            answer: 'Yes! We are a trusted SEO company Kerala businesses rely on. Our SEO expert Kerala team helps with Google ranking Kerala-wide through comprehensive digital marketing Kerala strategies.',
          },
          {
            question: 'Do you build MLM software?',
            answer: 'Yes, we build custom MLM platforms with genealogy trees, commission engines, e-wallet integration, and member portals. Kerala and India-focused MLM software development.',
          },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden bg-fivsys-midnight"
        aria-label="Hero section"
      >
        <ParallaxGrid />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', mass: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 backdrop-blur-sm mb-10"
            >
              <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-fivsys-red tracking-widest uppercase">Glocal Digital Agency</span>
              <div className="w-px h-4 bg-fivsys-red/30" />
              <span className="text-sm text-slate-300">Kerala & The World</span>
            </motion.div>

            <div className="mb-6 overflow-hidden">
              <motion.div
                variants={letterRevealContainer}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{ perspective: 800 }}
              >
                {HEADLINE.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterRevealItem}
                    className={char === ' ' ? 'inline-block w-[0.25em]' : `inline-block ${char === 'K' && i > 30 ? 'text-fivsys-red' : ''}`}
                    style={{
                      color: HEADLINE.slice(i, i + 6) === 'Kerala' || HEADLINE.slice(i, i + 5) === 'World' ? '#E11D48' : undefined,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', mass: 0.5, delay: 1.4 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              FIVSYS helps businesses across Kerala and beyond automate, grow, and dominate — with AI-powered web, app, SEO, and MLM solutions crafted for both local and global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', mass: 0.5, delay: 1.6 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { icon: <MapPin className="w-4 h-4 text-fivsys-red" />, text: 'Kochi · Trivandrum · Calicut' },
                { icon: <IndianRupee className="w-4 h-4 text-fivsys-red" />, text: 'Affordable INR Pricing' },
                { icon: <Globe className="w-4 h-4 text-fivsys-red" />, text: 'Global Delivery' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 rounded-full text-sm text-slate-300 backdrop-blur-sm">
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', mass: 0.5, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <MagneticButton strength={0.25}>
                <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto text-base font-semibold shadow-xl shadow-fivsys-red/25 hover:shadow-fivsys-red/40 transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg" className="border border-white/15 hover:border-fivsys-red/50 hover:bg-fivsys-red/5 bg-transparent text-white px-8 py-4 h-auto text-base font-semibold transition-all duration-300">
                <Link to="/#services" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>View Services</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={springSlideUpStagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={springSlideUp} className="text-center group">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 rounded-xl bg-fivsys-red/10 text-fivsys-red border border-fivsys-red/15 group-hover:bg-fivsys-red/20 group-hover:scale-110 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-fivsys-midnight to-fivsys-darkGray/30" aria-label="Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={springSlideUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-16"
          >
            <motion.div variants={springSlideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Cpu className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Our Services</span>
            </motion.div>
            <motion.h2 variants={springSlideUp} className="text-3xl md:text-5xl font-bold mb-5">
              <span className="text-white">Full-Stack Digital Solutions for </span>
              <span className="text-fivsys-red">Kerala & Beyond</span>
            </motion.h2>
            <motion.p variants={springSlideUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              From hyper-local SEO to enterprise web platforms and MLM systems — we build the digital infrastructure your business needs to lead.
            </motion.p>
          </motion.div>

          <motion.div
            variants={springSlideUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={springSlideUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={cardHover}
                  className="h-full"
                >
                  <Card className="h-full bg-slate-900/40 border border-white/10 hover:border-fivsys-red/30 transition-colors duration-300 group backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-fivsys-red/10 group-hover:bg-fivsys-red/20 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-fivsys-red group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <CardTitle className="text-lg text-white group-hover:text-fivsys-red transition-colors duration-200">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400 mb-5 leading-relaxed text-sm">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-1.5 mb-5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                            <div className="w-1.5 h-1.5 bg-fivsys-red rounded-full flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-sm text-fivsys-red hover:text-white font-semibold transition-colors duration-200 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kerala Market Section */}
      <KeralaMarketSection />

      {/* About Section */}
      <motion.section
        id="about"
        variants={springSlideUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-gradient-to-br from-fivsys-midnight to-fivsys-darkGray/20"
        aria-label="About fivsys"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={springSlideUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
                <Brain className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">About Fivsys</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-white">Glocal Thinking. </span>
                <span className="text-fivsys-red">Global Execution.</span>
              </h2>
              <p className="text-slate-400 mb-5 leading-relaxed">
                At Fivsys, we are Kerala's premier Glocal agency — blending deep local market insight with world-class digital execution. We understand the nuances of Kerala's business landscape while delivering solutions that compete on the global stage.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                From Ernakulam to the world, our team of AI specialists, developers, and marketers helps businesses grow beyond their geography without losing their roots.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Zap className="w-5 h-5 text-fivsys-red mx-auto mb-1.5" />, label: 'AI-Powered' },
                  { icon: <Cpu className="w-5 h-5 text-fivsys-red mx-auto mb-1.5" />, label: 'Enterprise-Grade' },
                  { icon: <Sparkles className="w-5 h-5 text-fivsys-red mx-auto mb-1.5" />, label: 'Glocal Strategy' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-colors duration-200">
                    {item.icon}
                    <div className="text-xs font-semibold text-white">{item.label}</div>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto font-semibold">
                <Link to="/about" className="flex items-center gap-2">
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={springSlideUp} className="relative">
              <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-fivsys-red/10 to-fivsys-darkGray/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/5 via-transparent to-blue-900/10" />
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 bg-fivsys-red/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-fivsys-red/20">
                    <Brain className="w-12 h-12 text-fivsys-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Glocal Excellence</h3>
                  <p className="text-slate-400 text-sm">Kerala expertise. World-class delivery.</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Kochi', 'Trivandrum', 'Global'].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-fivsys-red/15 text-fivsys-red border border-fivsys-red/20">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        variants={springSlideUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-fivsys-midnight"
        aria-label="Process"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={springSlideUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Zap className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              <span className="text-white">How We Transform Your </span>
              <span className="text-fivsys-red">Business</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', description: 'Free discovery call to understand your business needs and Kerala market goals.', icon: <Users className="w-6 h-6" /> },
              { step: '02', title: 'Strategy', description: 'Custom Glocal strategy designed for your specific industry, city, and audience.', icon: <Brain className="w-6 h-6" /> },
              { step: '03', title: 'Development', description: 'Building your solution with cutting-edge AI technology and impeccable design.', icon: <Code className="w-6 h-6" /> },
              { step: '04', title: 'Launch & Grow', description: 'Deploy your solution and scale with 24/7 AI-powered support.', icon: <TrendingUp className="w-6 h-6" /> },
            ].map((item, index) => (
              <motion.div key={index} variants={springSlideUp}>
                <Card className="bg-slate-900/30 border border-white/10 hover:border-fivsys-red/30 transition-colors duration-300 group backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="text-fivsys-red/20 text-5xl font-bold mb-4 group-hover:text-fivsys-red/30 transition-colors duration-300">{item.step}</div>
                    <div className="w-11 h-11 bg-fivsys-red/10 rounded-lg flex items-center justify-center mb-4 text-fivsys-red group-hover:bg-fivsys-red/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        variants={springSlideUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-gradient-to-b from-fivsys-midnight to-fivsys-darkGray/20"
        aria-label="Pricing plans"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={springSlideUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <TrendingUp className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Flexible Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              <span className="text-white">Plans That Scale With </span>
              <span className="text-fivsys-red">Your Growth</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Affordable INR pricing for Kerala businesses. All plans include our Glocal excellence guarantee.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹25,000',
                period: 'one-time',
                features: ['Basic Website', 'WhatsApp Integration', '3 Months Support', 'Mobile Responsive', 'SEO Basics'],
                highlight: false,
              },
              {
                name: 'Growth',
                price: '₹50,000',
                period: 'one-time',
                features: ['Advanced Website', 'AI Chatbot', 'WhatsApp Automation', '6 Months Support', 'Advanced SEO', 'Analytics Dashboard'],
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                features: ['Custom Solution', 'Full AI Integration', 'Dedicated Support', 'Unlimited Updates', 'Advanced Analytics', 'Priority Development'],
                highlight: false,
              },
            ].map((plan, index) => (
              <motion.div key={index} variants={springSlideUp}>
                <Card className={`relative h-full ${plan.highlight ? 'border-fivsys-red/50 bg-gradient-to-br from-fivsys-red/8 to-slate-900/60 shadow-2xl shadow-fivsys-red/10' : 'bg-slate-900/30 border-white/10'} backdrop-blur-sm`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-fivsys-red text-white text-xs font-bold rounded-full tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white mb-3">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-fivsys-red">{plan.price}</span>
                      <span className="text-slate-500 text-sm">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <ChevronRight className="w-4 h-4 text-fivsys-red flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${plan.highlight ? 'bg-fivsys-red hover:bg-fivsys-darkRed text-white shadow-lg shadow-fivsys-red/20' : 'bg-white/8 hover:bg-fivsys-red/15 border border-white/15 hover:border-fivsys-red/40 text-white'} transition-all duration-300`}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Fivsys Section */}
      <motion.section
        variants={springSlideUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-fivsys-midnight"
        aria-label="Why choose fivsys"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={springSlideUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Target className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Why Fivsys</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              <span className="text-white">Built for </span>
              <span className="text-fivsys-red">Kerala & Indian Success</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kerala & India Focus', description: 'Solutions optimised for Kerala and Indian customer behaviour from Kochi to Trivandrum to Calicut', icon: <Target className="w-7 h-7" /> },
              { title: 'Affordable INR Pricing', description: 'Transparent ₹ INR pricing. Affordable website design Kerala with no hidden costs.', icon: <IndianRupee className="w-7 h-7" /> },
              { title: 'Kerala SME Expertise', description: 'Deep experience with Kerala businesses — spas, clinics, shops, agencies across all districts.', icon: <Users className="w-7 h-7" /> },
              { title: 'IST Timezone Support', description: 'Available Mon–Sat, 9 AM – 8 PM IST with fast response times for Kerala clients.', icon: <Headphones className="w-7 h-7" /> },
            ].map((item, index) => (
              <motion.div key={index} variants={springSlideUp}>
                <Card className="bg-slate-900/30 border border-white/10 hover:border-fivsys-red/30 transition-all duration-300 group backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-fivsys-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-fivsys-red group-hover:scale-110 group-hover:bg-fivsys-red/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Teaser */}
      <BlogTeaser />

      {/* Multi-Step Lead Form Section */}
      <motion.section
        variants={springSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-gradient-to-b from-fivsys-midnight via-fivsys-darkGray/20 to-fivsys-midnight"
        aria-label="Get a quote"
        id="get-quote"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
                <Zap className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Start Your Project</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Let's Build Something <span className="text-fivsys-red">Extraordinary</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Tell us about your vision. Our Glocal experts will craft a tailored strategy to grow your business in Kerala and beyond.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <MapPin className="w-4 h-4 text-fivsys-red" />, text: 'Serving Kochi, Trivandrum, Kozhikode, Thrissur & All India' },
                  { icon: <Clock className="w-4 h-4 text-fivsys-red" />, text: 'Response within 24 hours — Mon to Sat, 9AM–8PM IST' },
                  { icon: <IndianRupee className="w-4 h-4 text-fivsys-red" />, text: 'Transparent INR pricing, no hidden costs' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        variants={springSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="py-24 bg-gradient-to-r from-fivsys-midnight via-fivsys-darkGray/15 to-fivsys-midnight"
        aria-label="Contact call to action"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-fivsys-red/8 to-fivsys-darkGray/20 border border-fivsys-red/20 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/5 via-transparent to-transparent pointer-events-none" />
            <CardContent className="text-center p-12 md:p-16 relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/15 mb-6">
                <Zap className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Ready to Transform?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Let's Build the </span>
                <span className="text-fivsys-red">Future Together</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Partner with Kerala's most trusted Glocal agency to build AI-powered digital solutions that compete locally and scale globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.2}>
                  <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-10 py-4 h-auto text-base font-semibold shadow-xl shadow-fivsys-red/25">
                    <Link to="/contact" className="flex items-center gap-3">
                      <Brain className="w-5 h-5" />
                      <span>Start Your Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg" className="border border-white/15 hover:border-fivsys-red/40 hover:bg-fivsys-red/5 bg-transparent text-white px-10 py-4 h-auto text-base font-semibold transition-all duration-300">
                  <Link to="/services/web-development" className="flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>View Services</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
