import React from 'react';
import { MENU_ITEMS, CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { Sparkles, ShoppingBag, Clock, Flame, CheckCircle } from 'lucide-react';

export const FeaturedDish: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const signatureDish = MENU_ITEMS[0]; // The Indian Treats Signature Platter

  const handleOrderSpecial = () => {
    addToCart(signatureDish, 1);
    setIsCartOpen(true);
  };

  return (
    <section id="specials" className="relative py-20 lg:py-28 bg-[#1F110B] overflow-hidden border-y border-[#C9A24A]/20">
      {/* Decorative Indian jaali motif backdrop */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-25 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 opacity-10 pointer-events-none">
        <IndianMotif variant="mandala-circle" className="w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large striking food photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Gold outer border ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#C9A24A]/30 to-[#A95F35]/20 rounded-3xl blur-md -z-0" />
              
              {/* Image Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#C9A24A]/40 shadow-2xl group">
                <img
                  src="/images/featured_special_dish.jpg"
                  alt="The Indian Treats Special Platter"
                  className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Special Stamp */}
                <div className="absolute top-4 left-4 bg-[#24150F]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A24A] flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4 text-[#C9A24A]" />
                  <span className="text-xs font-bold text-[#FFFDF8] uppercase tracking-wider">Chef's Masterpiece</span>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#1F110B] via-[#1F110B]/60 to-transparent flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#E8D7BD]">
                    <Clock className="w-4 h-4 text-[#C9A24A]" />
                    <span>Prep: 15-18 mins</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#E5C06E] font-semibold">
                    <Flame className="w-4 h-4 text-[#A95F35]" />
                    <span>Medium Spiced</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Copy, Ingredients & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A24A] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A24A]" />
              Signature Highlight
            </div>

            <h2 className="font-serif-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] tracking-wide uppercase leading-tight mb-2">
              THE INDIAN TREATS <span className="text-gold-gradient block sm:inline">SPECIAL</span>
            </h2>

            <p className="font-cormorant italic text-xl sm:text-2xl text-[#E8D7BD] font-normal mb-4">
              "Made Fresh. Served With Love."
            </p>

            <IndianMotif variant="divider" className="justify-start my-2" />

            <p className="text-sm sm:text-base text-[#E8D7BD]/85 leading-relaxed font-light mb-6">
              Our most celebrated creation in Madurai: A lavish platter of succulent, freshly marinated spiced golden chicken, fried to crunchy perfection and paired with hot roasted garlic potato wedges and a trio of house-crafted gourmet dips.
            </p>

            {/* Ingredients Breakdown */}
            <div className="mb-8 bg-[#2A1810]/70 p-4 sm:p-5 rounded-2xl border border-[#C9A24A]/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] mb-3">
                Signature Platter Includes:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E8D7BD]">
                {signatureDish.ingredients?.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A24A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and Order Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E8D7BD]/60 block">Signature Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-heading font-bold text-3xl sm:text-4xl text-gold-gradient">
                    ₹{signatureDish.price}
                  </span>
                  <span className="text-xs text-[#E8D7BD]/60">/ Platter</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleOrderSpecial}
                  className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4 text-[#1A0F0A]" />
                  <span>Order This Special</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
