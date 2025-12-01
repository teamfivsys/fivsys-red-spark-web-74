
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, BarChart3, Share2, TrendingUp, ChevronRight, Zap, Brain, Cpu, Sparkles, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricBackground from '@/components/GeometricBackground';
import SEO from '@/components/SEO';

const services = [
  {
    title: "AI Web Development",
    description: "Enterprise-grade websites powered by artificial intelligence with advanced user experience and conversion optimization.",
    icon: <Globe className="h-8 w-8 text-fivsys-red" />,
    link: "/services/web-development",
    features: ["AI-Powered Design", "Smart Analytics", "Auto-Optimization"]
  },
  {
    title: "Intelligent App Development",
    description: "Cross-platform mobile applications with machine learning integration and intelligent user interfaces.",
    icon: <Smartphone className="h-8 w-8 text-fivsys-red" />,
    link: "/services/app-development",
    features: ["ML Integration", "Cross-Platform", "Smart UI/UX"]
  },
  {
    title: "AI-Powered Web Apps",
    description: "Scalable web applications with advanced backend systems and intelligent automation capabilities.",
    icon: <Code className="h-8 w-8 text-fivsys-red" />,
    link: "/services/web-app-development",
    features: ["AI Automation", "Scalable Architecture", "Smart Backend"]
  },
  {
    title: "AI-Driven Marketing",
    description: "Data-driven digital marketing strategies with predictive analytics and automated campaign optimization.",
    icon: <BarChart3 className="h-8 w-8 text-fivsys-red" />,
    link: "/services/digital-marketing",
    features: ["Predictive Analytics", "Auto-Optimization", "ROI Tracking"]
  },
  {
    title: "Smart Social Media",
    description: "AI-enhanced social media management with intelligent content creation and audience targeting.",
    icon: <Share2 className="h-8 w-8 text-fivsys-red" />,
    link: "/services/social-media-marketing",
    features: ["AI Content", "Smart Targeting", "Engagement Analytics"]
  },
  {
    title: "AI Sales Strategy",
    description: "Intelligent sales automation with predictive lead scoring and conversion optimization systems.",
    icon: <TrendingUp className="h-8 w-8 text-fivsys-red" />,
    link: "/services/sales-strategy",
    features: ["Lead Scoring", "Sales Automation", "Conversion AI"]
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: <Award className="h-6 w-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
  { number: "150+", label: "Global Clients", icon: <Users className="h-6 w-6" /> },
  { number: "24/7", label: "AI Support", icon: <Clock className="h-6 w-6" /> }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="fivsys | AI-Powered Development & Marketing Solutions"
        description="Transform your Indian business with fivsys AI-powered website development, WhatsApp automation, chatbots, and digital marketing services in Bangalore."
        keywords="AI development India, website development Bangalore, WhatsApp automation, AI chatbots, app development India, web applications, digital marketing services, automation for Indian businesses"
        schemaType="WebPage"
        faqItems={[
          {
            question: "What is AI-powered website development?",
            answer: "We build websites enhanced with artificial intelligence features like chatbots, automated customer service, smart analytics, and personalized user experiences that adapt to your customers' needs."
          },
          {
            question: "How does WhatsApp automation help my business?",
            answer: "WhatsApp automation handles customer queries 24/7, sends appointment reminders, processes orders, and manages bookings automatically - saving you time while improving customer satisfaction."
          },
          {
            question: "What businesses benefit most from your services?",
            answer: "Indian small to medium businesses like spas, salons, clinics, local shops, service providers, and agencies see the most impact. Any business wanting to automate and grow digitally benefits."
          },
          {
            question: "How long does it take to build a website?",
            answer: "Basic websites take 2-3 weeks, while complex AI-powered solutions take 4-8 weeks. We provide regular updates and can adjust timelines based on your launch requirements."
          },
          {
            question: "Do you provide support after launch?",
            answer: "Yes! All our plans include support periods (3-6 months). We offer 24/7 AI-powered monitoring and quick response times for any issues or updates you need."
          },
          {
            question: "Can I upgrade my plan later?",
            answer: "Absolutely! Start with our Starter plan and upgrade anytime as your business grows. We make the transition seamless with no disruption to your operations."
          }
        ]}
      />
      <GeometricBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 backdrop-blur-sm mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fivsys-red rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-fivsys-red">AI EXCELLENCE</span>
              </div>
              <div className="w-px h-4 bg-fivsys-red/30"></div>
              <span className="text-sm text-gray-300">Powered by Advanced Intelligence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Future-Ready</span>
              <span className="block bg-gradient-to-r from-fivsys-red via-white to-fivsys-red bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with enterprise-grade artificial intelligence.
              <span className="block mt-2 text-fivsys-red font-semibold">
                Experience the power of intelligent automation.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto text-lg font-semibold">
                <Link to="/contact" className="flex items-center gap-3">
                  <Brain className="w-5 h-5" />
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/20 hover:border-fivsys-red hover:bg-fivsys-red/10 px-8 py-4 h-auto text-lg font-semibold">
                <Link to="/services/web-development" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Explore Services</span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 rounded-lg bg-fivsys-red/20 text-fivsys-red">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Cpu className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">AI-POWERED SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Intelligent Solutions for </span>
              <span className="text-fivsys-red">Modern Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-driven services designed to accelerate growth and optimize performance across all business verticals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-fivsys-red/20 group-hover:bg-fivsys-red/30 transition-colors">
                      {service.icon}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-fivsys-red group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-fivsys-red transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-fivsys-red rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-fivsys-red hover:text-white font-semibold transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-black to-fivsys-darkGray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
                <Brain className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red">ABOUT FIVSYS</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                <span className="text-white">Pioneering the </span>
                <span className="text-fivsys-red">AI Revolution</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Fivsys, we combine cutting-edge artificial intelligence with exceptional design thinking to create digital experiences that drive unprecedented business growth.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team of AI specialists and creative technologists delivers enterprise-grade solutions that don't just meet expectations—they redefine what's possible in the digital landscape.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Zap className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">AI-Powered</div>
                </div>
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Cpu className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Enterprise-Grade</div>
                </div>
                <div className="text-center p-4 rounded-lg border border-white/10">
                  <Sparkles className="w-6 h-6 text-fivsys-red mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Future-Ready</div>
                </div>
              </div>

              <Button asChild className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-8 py-4 h-auto text-lg font-semibold">
                <Link to="/about" className="flex items-center gap-3">
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl border border-white/20 bg-gradient-to-br from-fivsys-red/20 to-fivsys-darkGray/40 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-fivsys-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-12 h-12 text-fivsys-red" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-fivsys-red rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Excellence</h3>
                  <p className="text-gray-300">Transforming ideas into intelligent solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Zap className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">OUR PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">How We Transform Your </span>
              <span className="text-fivsys-red">Business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From consultation to launch, we make AI adoption seamless for Indian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free discovery call to understand your business needs and goals.", icon: <Users className="w-6 h-6" /> },
              { step: "02", title: "Strategy", description: "Custom AI strategy designed for your specific industry and market.", icon: <Brain className="w-6 h-6" /> },
              { step: "03", title: "Development", description: "Building your solution with cutting-edge AI technology and design.", icon: <Code className="w-6 h-6" /> },
              { step: "04", title: "Launch & Support", description: "Deploy your solution and ongoing 24/7 AI-powered support.", icon: <Zap className="w-6 h-6" /> }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all">
                <CardContent className="p-6">
                  <div className="text-fivsys-red/30 text-5xl font-bold mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-fivsys-red/20 rounded-lg flex items-center justify-center mb-4 text-fivsys-red">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-fivsys-darkGray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <TrendingUp className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">FLEXIBLE PRICING</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Plans That Scale With </span>
              <span className="text-fivsys-red">Your Growth</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business size and goals. All plans include our AI excellence guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Starter", 
                price: "₹25,000", 
                period: "one-time",
                features: ["Basic Website", "WhatsApp Integration", "3 Months Support", "Mobile Responsive", "SEO Basics"],
                highlight: false
              },
              { 
                name: "Growth", 
                price: "₹50,000", 
                period: "one-time",
                features: ["Advanced Website", "AI Chatbot", "WhatsApp Automation", "6 Months Support", "Advanced SEO", "Analytics Dashboard"],
                highlight: true
              },
              { 
                name: "Enterprise", 
                price: "Custom", 
                period: "pricing",
                features: ["Custom Solution", "Full AI Integration", "Dedicated Support", "Unlimited Updates", "Advanced Analytics", "Priority Development"],
                highlight: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.highlight ? 'border-fivsys-red/50 bg-gradient-to-br from-fivsys-red/10 to-black' : 'bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10'}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-fivsys-red text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-fivsys-red">{plan.price}</span>
                    <span className="text-gray-400 text-sm">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-fivsys-red flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.highlight ? 'bg-fivsys-red hover:bg-fivsys-darkRed' : 'bg-white/10 hover:bg-fivsys-red/20 border border-white/20'}`}>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-br from-black to-fivsys-darkGray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Sparkles className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Perfect for Indian </span>
              <span className="text-fivsys-red">Businesses</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Spas & Salons", description: "Automated booking, WhatsApp reminders, customer management", icon: <Sparkles className="w-8 h-8" /> },
              { title: "Clinics & Doctors", description: "Appointment scheduling, patient communication, AI assistance", icon: <Users className="w-8 h-8" /> },
              { title: "Local Shops", description: "Online presence, inventory updates, customer engagement", icon: <Globe className="w-8 h-8" /> },
              { title: "Agencies", description: "Lead capture, client portals, automated workflows", icon: <TrendingUp className="w-8 h-8" /> }
            ].map((useCase, index) => (
              <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10 hover:border-fivsys-red/50 transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-fivsys-red/20 rounded-full flex items-center justify-center mx-auto mb-4 text-fivsys-red group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
              <Brain className="w-4 h-4 text-fivsys-red" />
              <span className="text-sm font-semibold text-fivsys-red">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Frequently Asked </span>
              <span className="text-fivsys-red">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is AI-powered website development?",
                answer: "We build websites enhanced with artificial intelligence features like chatbots, automated customer service, smart analytics, and personalized user experiences that adapt to your customers' needs."
              },
              {
                question: "How does WhatsApp automation help my business?",
                answer: "WhatsApp automation handles customer queries 24/7, sends appointment reminders, processes orders, and manages bookings automatically - saving you time while improving customer satisfaction."
              },
              {
                question: "What businesses benefit most from your services?",
                answer: "Indian small to medium businesses like spas, salons, clinics, local shops, service providers, and agencies see the most impact. Any business wanting to automate and grow digitally benefits."
              },
              {
                question: "How long does it take to build a website?",
                answer: "Basic websites take 2-3 weeks, while complex AI-powered solutions take 4-8 weeks. We provide regular updates and can adjust timelines based on your launch requirements."
              },
              {
                question: "Do you provide support after launch?",
                answer: "Yes! All our plans include support periods (3-6 months). We offer 24/7 AI-powered monitoring and quick response times for any issues or updates you need."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! Start with our Starter plan and upgrade anytime as your business grows. We make the transition seamless with no disruption to your operations."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-fivsys-darkGray/50 to-black border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-fivsys-red flex-shrink-0 mt-1" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black via-fivsys-darkGray/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-fivsys-red/10 to-fivsys-darkGray/20 border-fivsys-red/30 backdrop-blur-sm">
            <CardContent className="text-center p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/20 mb-6">
                <Zap className="w-4 h-4 text-fivsys-red" />
                <span className="text-sm font-semibold text-fivsys-red">READY TO TRANSFORM?</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Let's Build the </span>
                <span className="text-fivsys-red">Future Together</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Partner with us to create revolutionary AI-powered solutions that drive exponential growth and position your business at the forefront of digital innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-fivsys-red hover:bg-fivsys-darkRed text-white px-10 py-4 h-auto text-lg font-semibold">
                  <Link to="/contact" className="flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/20 hover:border-fivsys-red hover:bg-fivsys-red/10 px-10 py-4 h-auto text-lg font-semibold">
                  <Link to="/services/web-development" className="flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    <span>View Services</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
