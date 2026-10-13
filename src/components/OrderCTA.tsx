import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { ShoppingBag, Navigation, Phone } from 'lucide-react';

export const OrderCTA: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section className="relative py-20 lg:py-24 bg-[#1F110B] overflow-hidden">
      {/* Background Image with Dark Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cafe_interior_hero.jpg"
          alt="The Indian Treats Cafe Warm Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24150F]/95 via-[#24150F]/80 to-[#24150F]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <IndianMotif variant="flourish" className="mb-2" />
        
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
          Your Table is Waiting
        </span>

        <h2 className="font-serif-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FFFDF8] uppercase tracking-wide mt-2 mb-3">
          CRAVING SOMETHING <span className="text-gold-gradient">DELICIOUS?</span>
        </h2>

        <IndianMotif variant="divider" />

        <p className="font-cormorant italic text-2xl sm:text-3xl text-[#E8D7BD] mb-4">
          "Come hungry. Leave happy."
        </p>

        <p className="text-xs sm:text-sm md:text-base text-[#E8D7BD]/85 font-light max-w-xl mb-10">
          From loaded cheesy chips to crispy gourmet chicken burgers and sizzling brownies, indulge in Madurai's coziest dining experience today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="btn-gold w-full sm:w-auto px-10 py-4.5 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(201,162,74,0.45)] min-w-[220px] hover:scale-105 transition-all"
          >
            <ShoppingBag className="w-5 h-5 text-[#1A0F0A]" />
            <span>Order Now</span>
          </button>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold w-full sm:w-auto px-10 py-4.5 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 backdrop-blur-md shadow-xl min-w-[220px] hover:scale-105 transition-all"
          >
            <Navigation className="w-5 h-5 text-[#C9A24A]" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </section>
  );
};
