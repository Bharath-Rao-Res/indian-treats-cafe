import React, { useState, useEffect, useRef } from 'react';
import { CAFE_STATS, OCCASIONS, CAFE_INFO } from '../data/cafeData';
import { IndianMotif } from './IndianMotif';
import { Users, Home, Heart, Sunset, Clock, Sparkles, CheckCircle2, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-4 h-4 text-[#C9A24A]" />,
  Home: <Home className="w-4 h-4 text-[#C9A24A]" />,
  Heart: <Heart className="w-4 h-4 text-[#C9A24A]" />,
  Sunset: <Sunset className="w-4 h-4 text-[#C9A24A]" />,
  Clock: <Clock className="w-4 h-4 text-[#C9A24A]" />,
  Sparkles: <Sparkles className="w-4 h-4 text-[#C9A24A]" />
};

export const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#2A1810] overflow-hidden border-t border-[#C9A24A]/15"
    >
      {/* Decorative Subtle Background */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 opacity-10 pointer-events-none">
        <IndianMotif variant="mandala-circle" className="w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            About Our Sanctuary
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            OUR STORY
          </h2>
          <IndianMotif variant="divider" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Showcase with Golden Frame Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Glow & Offset Border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A24A]/35 rounded-3xl -z-0 transform -rotate-1 hidden sm:block" />
              
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24A]/30 group">
                <img
                  src="/images/cafe_about_ambience.jpg"
                  alt="Cozy Ambience inside The Indian Treats Cafe Madurai"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24150F]/90 via-transparent to-transparent" />
                
                {/* Embedded Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-panel border border-[#C9A24A]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A24A]/20 flex items-center justify-center text-[#E5C06E]">
                      <Award className="w-5 h-5 text-[#C9A24A]" />
                    </div>
                    <div>
                      <h4 className="font-serif-heading font-semibold text-sm text-[#FFFDF8]">Cozy Indian Ambience</h4>
                      <p className="text-[11px] text-[#E8D7BD]/80">Designed for memorable conversations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#C9A24A] uppercase tracking-wider bg-[#3B2418] px-2.5 py-1 rounded-full border border-[#C9A24A]/30">
                    Madurai
                  </span>
                </div>
              </div>

              {/* Floating Mini Decorative Seal */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#24150F] border-2 border-[#C9A24A] p-1.5 shadow-2xl hidden md:block animate-float">
                <img
                  src="/images/cafe_logo_emblem.jpg"
                  alt="Emblem Seal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Story Text & Occasions */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24A] mb-2 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A24A]" />
              Welcome to Madurai's Hidden Gem
            </span>

            <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#FFFDF8] leading-snug mb-5">
              Where Flavors Warm Your Soul and Every Visit Feels Like Home.
            </h3>

            <p className="text-sm sm:text-base text-[#E8D7BD]/90 font-light leading-relaxed mb-6">
              Welcome to <strong className="text-[#FFFDF8] font-medium">The Indian Treats Cafe</strong> — a cozy sanctuary nestled in S.S. Colony, Madurai, where handcrafted culinary treats meet a peaceful, warm atmosphere. 
            </p>

            <p className="text-sm sm:text-base text-[#E8D7BD]/80 font-light leading-relaxed mb-8">
              Whether you are savoring our famous juicy chicken burgers, enjoying aromatic fresh pasta, or unwinding with a thick Belgian chocolate milkshake under our warm glowing lamps, we believe good food is best shared with good company.
            </p>

            {/* Suitable For Tags */}
            <div className="mb-10 w-full">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] mb-3.5 text-center lg:text-left">
                The Perfect Destination For:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {OCCASIONS.map((occ) => (
                  <div
                    key={occ.name}
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-xl bg-[#352017]/80 border border-[#C9A24A]/20 text-xs text-[#E8D7BD] hover:border-[#C9A24A]/50 hover:bg-[#3E261B] transition-colors"
                  >
                    {iconMap[occ.icon]}
                    <span className="font-medium">{occ.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Feature Ticks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 border-t border-[#C9A24A]/15 w-full">
              <div className="flex items-center gap-2 text-xs text-[#FFFDF8]">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                <span>Hygienic & Fresh Kitchen</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FFFDF8]">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                <span>Comfortable Seating</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FFFDF8]">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                <span>Free High-Speed Wi-Fi</span>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Statistics Counter Strip */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#C9A24A]/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CAFE_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="card-cafe p-6 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="font-serif-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gold-gradient mb-1.5">
                  {stat.prefix || ''}
                  {inView ? stat.value : 0}
                  {stat.suffix || ''}
                </div>
                <div className="text-sm font-semibold text-[#FFFDF8] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#E8D7BD]/70 font-light">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
