import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CAFE_INFO } from '../data/cafeData';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, UtensilsCrossed, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems, isCartOpen, setIsCartOpen, sendWhatsAppOrder } = useCart();
  
  const [diningType, setDiningType] = useState<'Dine-in' | 'Takeaway' | 'Delivery'>('Dine-in');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isCartOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsAppOrder(diningType, tableOrAddress, specialNotes);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end transition-opacity duration-300"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="w-full max-w-md bg-[#24150F] h-full shadow-2xl flex flex-col justify-between border-l border-[#C9A24A]/30 overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#C9A24A]/20 bg-[#2A1810] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C9A24A]/20 flex items-center justify-center text-[#C9A24A]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading font-bold text-lg text-[#FFFDF8]">Your Order</h3>
              <p className="text-[11px] text-[#E8D7BD]/70">{totalItems} items selected</p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-[#E8D7BD] hover:text-[#FFFDF8] hover:bg-[#3E261B] transition-colors"
            aria-label="Close Cart"
          >
            <X className="w-6 h-6 text-[#C9A24A]" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#352017] border border-[#C9A24A]/30 flex items-center justify-center mb-4 text-[#C9A24A]/60">
                <UtensilsCrossed className="w-8 h-8" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#FFFDF8]">Your Cart is Empty</h4>
              <p className="text-xs text-[#E8D7BD]/70 max-w-xs mt-1 mb-6">
                Explore our delicious burgers, chicken specials, pastas & milkshakes to place your order!
              </p>
              <a
                href="#menu"
                onClick={() => setIsCartOpen(false)}
                className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Browse Menu
              </a>
            </div>
          ) : (
            <>
              {/* Item Rows */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-3.5 rounded-xl bg-[#2E1B13] border border-[#C9A24A]/20 flex items-center gap-3.5 justify-between"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-[#C9A24A]/30"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <div className={item.dish.isVeg ? 'veg-indicator' : 'non-veg-indicator'}>
                          <div className={item.dish.isVeg ? 'veg-indicator-dot' : 'non-veg-indicator-dot'} />
                        </div>
                        <h5 className="font-serif-heading font-bold text-sm text-[#FFFDF8] truncate">
                          {item.dish.name}
                        </h5>
                      </div>
                      <div className="text-xs text-[#E5C06E] font-semibold">
                        ₹{item.dish.price} x {item.quantity} = <span className="text-[#FFFDF8]">₹{item.dish.price * item.quantity}</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#1A0F0A] rounded-lg border border-[#C9A24A]/30 p-1">
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="p-1 text-[#E8D7BD] hover:text-[#C9A24A]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#FFFDF8] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="p-1 text-[#E8D7BD] hover:text-[#C9A24A]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-md transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options Form */}
              <div className="pt-4 border-t border-[#C9A24A]/20 space-y-4">
                
                {/* Dining Type Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] block mb-2">
                    Dining Preference:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Dine-in', 'Takeaway', 'Delivery'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDiningType(type)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                          diningType === type
                            ? 'bg-[#C9A24A] text-[#1A0F0A] border-[#E5C06E]'
                            : 'bg-[#1E110A] text-[#E8D7BD] border-[#C9A24A]/20 hover:border-[#C9A24A]/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table No or Delivery Address */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] block mb-1">
                    {diningType === 'Dine-in' ? 'Table Number (if seated):' : 'Delivery Address / Pickup Time:'}
                  </label>
                  <input
                    type="text"
                    placeholder={diningType === 'Dine-in' ? 'e.g. Table 4' : 'e.g. SS Colony 2nd St / 8:00 PM'}
                    value={tableOrAddress}
                    onChange={(e) => setTableOrAddress(e.target.value)}
                    className="w-full bg-[#1A0F0A] border border-[#C9A24A]/25 rounded-xl px-3.5 py-2 text-xs text-[#FFFDF8] focus:outline-none focus:border-[#C9A24A]"
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C9A24A] block mb-1">
                    Special Cooking Notes (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Extra spicy, less ice, extra sauce"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full bg-[#1A0F0A] border border-[#C9A24A]/25 rounded-xl px-3.5 py-2 text-xs text-[#FFFDF8] focus:outline-none focus:border-[#C9A24A]"
                  />
                </div>

              </div>
            </>
          )}
        </div>

        {/* Footer Bill & WhatsApp Checkout Button */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#2A1810] border-t border-[#C9A24A]/20">
            <div className="flex items-center justify-between mb-3 text-sm">
              <span className="text-[#E8D7BD]/80">Estimated Total:</span>
              <span className="font-serif-heading font-bold text-2xl text-gold-gradient">
                ₹{totalPrice}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="px-3 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-950/30 text-xs font-semibold"
                title="Clear Cart"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleSubmitOrder}
                className="btn-gold flex-1 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <Send className="w-4 h-4 text-[#1A0F0A]" />
                <span>Place Order via WhatsApp</span>
              </button>
            </div>

            <p className="text-[10px] text-center text-[#E8D7BD]/60 mt-2.5">
              Directly sends your order details to The Indian Treats Cafe WhatsApp: {CAFE_INFO.phone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
