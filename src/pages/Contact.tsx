import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import GeometricBackground from '@/components/GeometricBackground';
import SEO from '@/components/SEO';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-fivsys-midnight text-white">
      <SEO
        title="Contact Fivsys | Website Development Company Kerala | Get Free Quote"
        description="Contact Kerala's leading web design company for affordable website design, SEO services, and digital marketing. Free consultation for businesses in Kochi, Trivandrum, Calicut."
        keywords="contact fivsys, web design company Kerala, affordable website design Kerala, SEO company Kerala, website development Kerala contact, web developers Kochi, web development Trivandrum"
        schemaType="ContactPage"
      />
      <GeometricBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/30 bg-fivsys-red/10 mb-6">
            <MessageSquare className="w-4 h-4 text-fivsys-red" />
            <span className="text-sm font-semibold text-fivsys-red uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 leading-tight">
            <span className="text-white">Let's Build Something </span>
            <span className="text-fivsys-red">Extraordinary</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. Our team will craft a tailored strategy to grow your business in Kerala and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Contact Information</h2>
                <p className="text-slate-400 leading-relaxed">
                  Reach out through any channel below. We respond within 24 hours on business days, Mon–Sat 9AM–8PM IST.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-fivsys-red/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-fivsys-red" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Our Office</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Olap House, Near Balabadhra Temple<br />
                      Perandoor, Elamakara<br />
                      Ernakulam – 682026, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-fivsys-red/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-fivsys-red" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Phone</div>
                    <a href="tel:+917356137106" className="text-slate-300 hover:text-fivsys-red transition-colors text-sm font-medium">
                      +91 7356137106
                    </a>
                    <p className="text-slate-500 text-xs mt-1">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-fivsys-red/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-fivsys-red" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Email</div>
                    <a href="mailto:teamfivsys@gmail.com" className="text-slate-300 hover:text-fivsys-red transition-colors text-sm font-medium">
                      teamfivsys@gmail.com
                    </a>
                    <p className="text-slate-500 text-xs mt-1">Enterprise Solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-fivsys-red/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-fivsys-red" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Business Hours</div>
                    <p className="text-slate-400 text-sm">Monday – Saturday</p>
                    <p className="text-slate-300 text-sm font-medium">9:00 AM – 8:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="text-sm font-semibold text-white mb-3">Service Areas</div>
                <div className="flex flex-wrap gap-2">
                  {['Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'All India'].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full text-xs font-medium bg-fivsys-red/10 text-fivsys-red border border-fivsys-red/20">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Multi-Step Form */}
            <div className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Start Your Project</h2>
                <p className="text-slate-400 text-sm">Fill in the details below — we'll get back to you within 24 hours.</p>
              </div>
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
