import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, TrendingUp, Star, Users, Award, Globe } from 'lucide-react';
import { springSlideUp, springSlideUpStagger, viewportOptions } from '@/lib/animations';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  { number: 50, suffix: '+', label: 'Clients in Kerala', sublabel: 'Kochi • Trivandrum • Calicut', icon: <Users className="w-6 h-6" /> },
  { number: 3, suffix: '+', label: 'Years Dominating Kerala', sublabel: 'Established digital presence', icon: <Award className="w-6 h-6" /> },
  { number: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Kerala SME satisfaction', icon: <Star className="w-6 h-6" /> },
  { number: 120, suffix: '+', label: 'Top Google Rankings', sublabel: 'Across Kerala cities', icon: <TrendingUp className="w-6 h-6" /> },
];

const cities = [
  { name: 'Kochi', description: 'Commercial hub with 20+ clients', color: 'from-fivsys-red/20 to-transparent' },
  { name: 'Trivandrum', description: 'Capital city, IT corridor specialists', color: 'from-blue-500/20 to-transparent' },
  { name: 'Kozhikode', description: 'Northern Kerala, cultural centre', color: 'from-emerald-500/20 to-transparent' },
  { name: 'Thrissur', description: 'Cultural capital, business hub', color: 'from-amber-500/20 to-transparent' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const KeralaMarketSection = () => {
  return (
    <section id="kerala-market" className="py-24 relative overflow-hidden bg-gradient-to-b from-fivsys-midnight to-fivsys-darkGray/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fivsys-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={springSlideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.div variants={springSlideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fivsys-red/40 bg-fivsys-red/10 mb-6">
            <MapPin className="w-4 h-4 text-fivsys-red" />
            <span className="text-sm font-semibold text-fivsys-red tracking-widest uppercase">Local Dominance</span>
          </motion.div>

          <motion.h2 variants={springSlideUp} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Dominating the </span>
            <span className="text-fivsys-red">Kerala Market</span>
          </motion.h2>

          <motion.p variants={springSlideUp} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From Kochi to Trivandrum, we are Kerala's most trusted digital growth partner — delivering measurable results for local businesses with global ambitions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={springSlideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={springSlideUp}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/40 hover:bg-fivsys-red/5 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-fivsys-red/15 flex items-center justify-center mx-auto mb-4 text-fivsys-red group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={springSlideUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16"
        >
          <motion.div variants={springSlideUp} className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-fivsys-red" />
              <h3 className="text-xl font-bold text-white">Our Kerala Service Areas</h3>
            </div>
            <p className="text-slate-400 text-sm">Hyper-local expertise, global-grade delivery</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                variants={springSlideUp}
                className="group relative p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-fivsys-red/30 transition-all duration-300 overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className="relative flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-fivsys-red mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white text-base mb-1">{city.name}</div>
                    <div className="text-xs text-slate-400">{city.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={springSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative rounded-2xl border border-fivsys-red/20 bg-gradient-to-r from-fivsys-red/5 via-fivsys-red/10 to-fivsys-red/5 p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fivsys-red/10 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fivsys-red/20 border border-fivsys-red/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-fivsys-red animate-pulse" />
              <span className="text-xs font-semibold text-fivsys-red uppercase tracking-widest">Glocal Strategy</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kerala Roots. Global Reach.
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
              We combine deep Kerala market knowledge with world-class digital execution. Your business gets the unfair advantage of local trust and global-quality output.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Malappuram'].map((city) => (
                <span key={city} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 border border-white/10 hover:border-fivsys-red/40 hover:text-white transition-colors duration-200">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeralaMarketSection;
