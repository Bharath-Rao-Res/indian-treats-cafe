import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { MapPin, Star, Utensils, ShoppingBag, Clock, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Image with Slow Ambient Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/cafe_interior_hero.jpg"
          alt="The Indian Treats Cafe Interior in Madurai"
          className="w-full h-full object-cover object-center animate-slow-zoom brightness-[0.78] scale-105"
        />
        {/* Layered Rich Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24150F] via-[#24150F]/70 to-[#1A0F0A]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#24150F]/40 to-[#24150F]/90" />
      </div>

      {/* Decorative Background Mandalas */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 opacity-15 pointer-events-none hidden md:block">
        <IndianMotif variant="mandala-circle" className="w-full h-full animate-spin [animation-duration:120s]" />
      </div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 opacity-15 pointer-events-none hidden md:block">
        <IndianMotif variant="mandala-circle" className="w-full h-full animate-spin [animation-duration:120s]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Location Indicator Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B2418]/80 border border-[#C9A24A]/40 text-[#E8D7BD] text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6 backdrop-blur-sm animate-float">
          <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
          <span>Madurai, Tamil Nadu</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse ml-1" />
          <span className="text-[11px] text-[#C9A24A] font-semibold">Open Now</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-tight text-[#FFFDF8] drop-shadow-2xl">
          THE INDIAN TREATS <span className="text-gold-gradient block sm:inline">CAFE</span>
        </h1>

        {/* Indian Motif Divider */}
        <IndianMotif variant="divider" className="my-3 sm:my-4" />

        {/* Subheading */}
        <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-[#E8D7BD] tracking-wide font-normal max-w-2xl mb-4">
          "Where Every Bite Feels Like Home"
        </p>

        {/* Supporting Description */}
        <p className="font-sans-body text-sm sm:text-base md:text-lg text-[#F7F0E5]/85 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-2">
          Delicious food, refreshing drinks and a cozy ambience — crafted for unforgettable flavors and cherished moments in the heart of Madurai.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-10">
          <a
            href="#menu"
            className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl group"
          >
            <Utensils className="w-4 h-4 text-[#1A0F0A] group-hover:rotate-12 transition-transform" />
            <span>Explore Our Menu</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="btn-outline-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <ShoppingBag className="w-4 h-4 text-[#C9A24A]" />
            <span>Order Online</span>
          </button>
        </div>

        {/* Highlights Bar Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl w-full">
          <div className="glass-panel px-4 py-3 rounded-2xl flex items-center justify-center gap-2.5 text-left border border-[#C9A24A]/20">
            <div className="w-8 h-8 rounded-full bg-[#C9A24A]/15 flex items-center justify-center flex-shrink-0 text-[#C9A24A]">
              <Star className="w-4 h-4 fill-[#C9A24A]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#FFFDF8]">5.0 ★ Google Rating</div>
              <div className="text-[11px] text-[#E8D7BD]/70">49+ Verified Reviews</div>
            </div>
          </div>

          <div className="glass-panel px-4 py-3 rounded-2xl flex items-center justify-center gap-2.5 text-left border border-[#C9A24A]/20">
            <div className="w-8 h-8 rounded-full bg-[#A95F35]/20 flex items-center justify-center flex-shrink-0 text-[#E5C06E]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#FFFDF8]">Open Daily</div>
              <div className="text-[11px] text-[#E8D7BD]/70">11:00 AM – 12:00 AM</div>
            </div>
          </div>

          <div className="glass-panel px-4 py-3 rounded-2xl col-span-2 md:col-span-1 flex items-center justify-center gap-2.5 text-left border border-[#C9A24A]/20">
            <div className="w-8 h-8 rounded-full bg-[#C9A24A]/15 flex items-center justify-center flex-shrink-0 text-[#C9A24A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#FFFDF8]">₹200 – ₹400</div>
              <div className="text-[11px] text-[#E8D7BD]/70">Pocket-friendly gourmet</div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#about"
          className="mt-12 text-[#C9A24A]/70 hover:text-[#C9A24A] transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
