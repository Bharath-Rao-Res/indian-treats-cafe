import React from 'react';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { MapPin, Utensils, ShoppingBag, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Location Indicator Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B2418]/80 border border-[#C9A24A]/40 text-[#E8D7BD] text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6 backdrop-blur-sm animate-float mx-auto">
          <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
          <span>Madurai, Tamil Nadu</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block animate-pulse ml-1" />
          <span className="text-[11px] text-[#C9A24A] font-semibold">Open Now</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide uppercase leading-tight sm:leading-tight text-[#FFFDF8] drop-shadow-2xl text-center max-w-4xl mx-auto">
          THE INDIAN TREATS <span className="text-gold-gradient block sm:inline">CAFE</span>
        </h1>

        {/* Indian Motif Divider */}
        <IndianMotif variant="divider" className="my-3 sm:my-4 mx-auto justify-center" />

        {/* Subheading */}
        <p className="font-cormorant italic text-xl sm:text-3xl md:text-4xl text-[#E8D7BD] tracking-wide font-normal max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow-md text-center px-2">
          "Where Every Bite Feels Like Home"
        </p>

        {/* Action Buttons - Generous, Prominent & Clickable */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center mb-12 sm:mb-16 mx-auto px-4 sm:px-0">
          <a
            href="#menu"
            className="btn-gold w-full sm:w-auto max-w-[320px] sm:max-w-none px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(201,162,74,0.45)] group sm:min-w-[270px] transition-transform duration-300 hover:scale-105"
          >
            <Utensils className="w-5 h-5 text-[#1A0F0A] group-hover:rotate-12 transition-transform" />
            <span>Explore Our Menu</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="btn-outline-gold w-full sm:w-auto max-w-[320px] sm:max-w-none px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 backdrop-blur-md shadow-xl sm:min-w-[270px] transition-transform duration-300 hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5 text-[#C9A24A]" />
            <span>Order Online</span>
          </button>
        </div>

        {/* Subtle Scroll Indicator */}
        <a
          href="#about"
          className="text-[#C9A24A]/80 hover:text-[#C9A24A] transition-colors flex flex-col items-center gap-1 group py-2"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] tracking-widest uppercase font-semibold text-[#E8D7BD]/80">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A24A]" />
        </a>

      </div>
    </section>
  );
};
