import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { MapPin, Phone, Clock, Copy, Check, Navigation, ShoppingBag, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { setIsCartOpen } = useCart();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    try {
      confetti({
        particleCount: 20,
        spread: 35,
        origin: { y: 0.8 },
        colors: ['#C9A24A', '#E5C06E', '#A95F35']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#2A1810] overflow-hidden border-t border-[#C9A24A]/15">
      {/* Decorative Mandala Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            Find Our Cafe
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            VISIT US
          </h2>
          <IndianMotif variant="divider" />
          <p className="text-sm sm:text-base text-[#E8D7BD]/80 max-w-xl mx-auto font-light">
            Conveniently located in S.S. Colony, Madurai. Drop by for a cup of coffee, juicy burgers, or cozy evening chats!
          </p>
        </div>

        {/* Two-Column Grid: Contact Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Timing, Phone & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="card-cafe p-6 sm:p-7 relative group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3E261B] border border-[#C9A24A]/30 flex items-center justify-center flex-shrink-0 text-[#C9A24A]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A] block mb-1">
                    Cafe Address
                  </span>
                  <p className="font-serif-heading text-sm sm:text-base text-[#FFFDF8] leading-relaxed mb-3">
                    Shop No 1 & 2, Theni Road, S.S. Colony 4th Street,<br />
                    Opp. Devaki Speciality Hospital & Scan,<br />
                    <span className="font-bold text-[#E5C06E]">Madurai, Tamil Nadu 625016</span>
                  </p>

                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#24150F] border border-[#C9A24A]/30 text-xs font-semibold text-[#E8D7BD] hover:text-[#FFFDF8] hover:border-[#C9A24A] transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                        <span className="text-[#22c55e]">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#C9A24A]" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone & Timings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="card-cafe p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3E261B] border border-[#C9A24A]/30 flex items-center justify-center flex-shrink-0 text-[#C9A24A]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A] block mb-0.5">
                    Call Us Direct
                  </span>
                  <a
                    href={`tel:${CAFE_INFO.phoneClean}`}
                    className="font-serif-heading font-bold text-base text-[#FFFDF8] hover:text-[#C9A24A] transition-colors block"
                  >
                    {CAFE_INFO.phone}
                  </a>
                  <span className="text-[10px] text-[#E8D7BD]/60">Quick Table / Takeaway</span>
                </div>
              </div>

              {/* Timing Card */}
              <div className="card-cafe p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3E261B] border border-[#C9A24A]/30 flex items-center justify-center flex-shrink-0 text-[#E5C06E]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A] block mb-0.5">
                    Cafe Hours
                  </span>
                  <div className="font-serif-heading font-bold text-base text-[#FFFDF8]">
                    Open Daily
                  </div>
                  <span className="text-[10px] text-[#22c55e] font-semibold block">
                    Closes around 12:00 AM
                  </span>
                </div>
              </div>

            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#1A0F0A]" />
                <span>Directions</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phoneClean}`}
                className="btn-outline-gold py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C9A24A]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="py-3.5 px-5 rounded-xl bg-[#A95F35] hover:bg-[#B86B3E] text-[#FFFDF8] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[360px] sm:h-full min-h-[360px] rounded-2xl overflow-hidden border-2 border-[#C9A24A]/30 shadow-2xl bg-[#1E110A]">
              
              {/* Map Embed iframe with location */}
              <iframe
                title="The Indian Treats Cafe Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0768019448835!2d78.09848527581177!3d9.927658974274944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58254c7d0d5%3A0xb0dfbb8f51ef3a06!2sTheni%20Main%20Rd%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Card on Map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs glass-panel p-4 rounded-xl border border-[#C9A24A]/40 shadow-xl">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="font-serif-heading font-bold text-sm text-[#FFFDF8]">
                    THE INDIAN TREATS CAFE
                  </span>
                </div>
                <p className="text-[11px] text-[#E8D7BD]/80 leading-snug">
                  Opp. Devaki Speciality Hospital & Scan, SS Colony, Madurai.
                </p>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-[11px] font-bold text-[#C9A24A] hover:text-[#E5C06E] flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
