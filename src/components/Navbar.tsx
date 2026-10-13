import React, { useState, useEffect } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag, Phone, MapPin } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center min-h-[44px]">
          {/* Desktop Navigation Links - Perfectly Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-[#E8D7BD] hover:text-[#C9A24A] transition-colors duration-200 relative py-1 px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A24A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Cart Trigger (Right Aligned Floating) */}
          <div className="hidden lg:flex items-center absolute right-4 sm:right-6 lg:right-8">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#2E1B13]/80 border border-[#C9A24A]/30 text-[#E8D7BD] hover:text-[#FFFDF8] hover:border-[#C9A24A] hover:bg-[#3E261B] transition-all cursor-pointer shadow-md"
              aria-label="View Cart"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#C9A24A]" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#A95F35] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#24150F] animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8D7BD] hover:text-[#C9A24A] hover:bg-[#352017] focus:outline-none transition-colors flex items-center gap-2"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C9A24A]" /> : <Menu className="w-6 h-6 text-[#C9A24A]" />}
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E8D7BD]">Menu</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#E8D7BD] hover:text-[#C9A24A] focus:outline-none flex items-center gap-1.5"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#C9A24A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E8D7BD]">Cart</span>
              {totalItems > 0 && (
                <span className="bg-[#A95F35] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#24150F]">
                  {totalItems}
                </span>
              )}
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
