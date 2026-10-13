import React, { useState } from 'react';
import { MenuItem } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Check, Clock, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

interface FoodDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ dish, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  if (!dish) return null;

  const handleAdd = () => {
    addToCart(dish, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#24150F] rounded-3xl border-2 border-[#C9A24A]/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1E110A]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24150F] via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#1A0F0A]/80 border border-[#C9A24A]/40 text-[#FFFDF8] hover:text-[#C9A24A] transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Veg/Non-veg and category badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="bg-[#1A0F0A]/90 p-1.5 rounded-lg border border-white/15 backdrop-blur-sm">
              {dish.isVeg ? (
                <div className="veg-indicator"><div className="veg-indicator-dot" /></div>
              ) : (
                <div className="non-veg-indicator"><div className="non-veg-indicator-dot" /></div>
              )}
            </div>

            <span className="bg-[#1A0F0A]/90 text-[#C9A24A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C9A24A]/30">
              {dish.category}
            </span>
          </div>

          {/* Bottom title info */}
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="font-serif-heading font-bold text-2xl text-[#FFFDF8]">
              {dish.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-xs sm:text-sm text-[#E8D7BD]/90 font-light leading-relaxed mb-5">
            {dish.description}
          </p>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 mb-5 text-xs text-[#E8D7BD]/80">
            {dish.prepTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C9A24A]" />
                <span>Prep: {dish.prepTime}</span>
              </div>
            )}
            {dish.spicyLevel && (
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#A95F35]" />
                <span>Spice: {dish.spicyLevel === 1 ? 'Mild' : dish.spicyLevel === 2 ? 'Medium' : 'Extra Hot'}</span>
              </div>
            )}
          </div>

          {/* Ingredients list */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="mb-6 bg-[#2E1B13] p-4 rounded-2xl border border-[#C9A24A]/20">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C9A24A] mb-2.5">
                Fresh Ingredients & Crafting:
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-[#E8D7BD]/85">
                {dish.ingredients.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A]" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action Bar */}
          <div className="pt-4 border-t border-[#C9A24A]/20 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#E8D7BD]/60 block">Price</span>
              <span className="font-serif-heading font-bold text-2xl text-gold-gradient">
                ₹{dish.price * quantity}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center bg-[#1E110A] rounded-xl border border-[#C9A24A]/30 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-[#E8D7BD] hover:text-[#C9A24A]"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-[#FFFDF8] min-w-[24px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-[#E8D7BD] hover:text-[#C9A24A]"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all ${
                  added ? 'bg-[#22c55e] text-white' : 'btn-gold'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-[#1A0F0A]" />
                    <span>Add to Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
