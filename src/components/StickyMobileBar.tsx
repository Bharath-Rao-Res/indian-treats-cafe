import React from 'react';
import { useCart } from '../context/CartContext';
import { CAFE_INFO } from '../data/cafeData';
import { Phone, Utensils, ShoppingBag } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1F110B]/95 backdrop-blur-lg border-t border-[#C9A24A]/30 px-4 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Call Button */}
        <a
          href={`tel:${CAFE_INFO.phoneClean}`}
          className="flex-1 py-3 px-3 rounded-xl bg-[#2E1B13] border border-[#C9A24A]/30 text-[#E8D7BD] hover:text-[#FFFDF8] flex items-center justify-center gap-1.5 text-xs font-bold transition-all"
        >
          <Phone className="w-4 h-4 text-[#C9A24A]" />
          <span>Call Cafe</span>
        </a>

        {/* Menu Jump */}
        <a
          href="#menu"
          className="flex-1 py-3 px-3 rounded-xl bg-[#2E1B13] border border-[#C9A24A]/30 text-[#E8D7BD] hover:text-[#FFFDF8] flex items-center justify-center gap-1.5 text-xs font-bold transition-all"
        >
          <Utensils className="w-4 h-4 text-[#C9A24A]" />
          <span>Menu</span>
        </a>

        {/* Order / Cart Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="btn-gold flex-[1.4] py-3 px-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg relative"
        >
          <ShoppingBag className="w-4 h-4 text-[#1A0F0A]" />
          <span>Order {totalItems > 0 ? `(${totalItems})` : ''}</span>
          {totalItems > 0 && (
            <span className="w-2.5 h-2.5 rounded-full bg-[#A95F35] absolute top-1.5 right-1.5 animate-ping" />
          )}
        </button>

      </div>
    </div>
  );
};
