import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CAFE_INFO } from '../data/cafeData';
import confetti from 'canvas-confetti';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (dish: MenuItem, quantity?: number) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  sendWhatsAppOrder: (diningType: string, tableOrAddress: string, notes: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('indian_treats_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('indian_treats_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (dish: MenuItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { dish, quantity }];
    });

    // Trigger celebratory micro-confetti
    try {
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.85 },
        colors: ['#C9A24A', '#E5C06E', '#A95F35', '#FFFDF8']
      });
    } catch {
      // ignore
    }
  };

  const removeFromCart = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.dish.id === dishId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);

  const sendWhatsAppOrder = (diningType: string, tableOrAddress: string, notes: string) => {
    if (cart.length === 0) return;

    let message = `*🌟 NEW ORDER - THE INDIAN TREATS CAFE 🌟*\n\n`;
    message += `*Order Type:* ${diningType}\n`;
    if (tableOrAddress) {
      message += `*Details / Table:* ${tableOrAddress}\n`;
    }
    message += `\n*Items Ordered:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.dish.name} x ${item.quantity} = ₹${item.dish.price * item.quantity}\n`;
    });

    message += `\n*Total Amount:* ₹${totalPrice}\n`;
    if (notes) {
      message += `*Special Instructions:* ${notes}\n`;
    }
    message += `\n_Placed via The Indian Treats Cafe Website (Madurai)_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        sendWhatsAppOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
