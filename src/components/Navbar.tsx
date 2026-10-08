import React, { useState, useEffect } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag, Phone, MapPin, Utensils, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#24150F]/95 backdrop-blur-md shadow-xl border-b border-[#C9A24A]/25 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#1A0F0A]/90 via-[#24150F]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#C9A24A] shadow-md group-hover:border-[#E5C06E] transition-colors">
              <img
                src="/images/cafe_logo_emblem.jpg"
                alt="The Indian Treats Cafe Emblem"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading font-bold text-lg sm:text-xl tracking-wider text-[#FFFDF8] group-hover:text-[#E5C06E] transition-colors leading-tight">
                THE INDIAN TREATS
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#C9A24A] font-medium uppercase">
                Cafe · Madurai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#E8D7BD] hover:text-[#C9A24A] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A24A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#menu"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border border-[#C9A24A]/40 text-[#E8D7BD] hover:bg-[#C9A24A]/15 hover:border-[#C9A24A] transition-all flex items-center gap-1.5"
            >
              <Utensils className="w-3.5 h-3.5 text-[#C9A24A]" />
              View Menu
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="btn-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 relative shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 text-[#1A0F0A]" />
              <span>Order Now</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A95F35] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#24150F] animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#E8D7BD] hover:text-[#C9A24A] focus:outline-none"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-6 h-6 text-[#C9A24A]" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#A95F35] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#24150F]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8D7BD] hover:text-[#C9A24A] hover:bg-[#352017] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7 text-[#C9A24A]" /> : <Menu className="w-7 h-7 text-[#C9A24A]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-[82%] max-w-sm h-full bg-[#24150F] border-l border-[#C9A24A]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#C9A24A]/20">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/cafe_logo_emblem.jpg"
                    alt="Logo"
                    className="w-10 h-10 rounded-full border border-[#C9A24A]"
                  />
                  <div>
                    <h3 className="font-serif-heading font-bold text-base text-[#FFFDF8]">THE INDIAN TREATS</h3>
                    <p className="text-[10px] tracking-wider text-[#C9A24A] uppercase">Madurai, TN</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-[#E8D7BD] hover:text-white"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6 text-[#C9A24A]" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[#E8D7BD] hover:text-[#C9A24A] hover:translate-x-1 transition-all py-1.5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#C9A24A]/40">✦</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#C9A24A]/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="btn-gold w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 text-[#1A0F0A]" />
                <span>Order Online ({totalItems} items)</span>
              </button>

              <a
                href={`tel:${CAFE_INFO.phoneClean}`}
                className="w-full py-3 rounded-xl border border-[#C9A24A]/40 text-[#E8D7BD] hover:bg-[#C9A24A]/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A24A]" />
                <span>Call {CAFE_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-[#E8D7BD]/70 justify-center pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>S.S. Colony, Madurai · Closes 12 AM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
