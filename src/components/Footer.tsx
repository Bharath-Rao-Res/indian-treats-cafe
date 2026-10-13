import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { IndianMotif } from './IndianMotif';
import { MapPin, Phone, Clock, Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1A0D07] text-[#E8D7BD] border-t border-[#C9A24A]/25 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Branding Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-[#C9A24A]/20 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A24A] shadow-lg flex-shrink-0 mx-auto sm:mx-0">
              <img
                src="/images/cafe_logo_emblem.jpg"
                alt="The Indian Treats Cafe Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif-heading font-extrabold text-xl sm:text-2xl text-[#FFFDF8] tracking-wider">
                THE INDIAN TREATS CAFE
              </h3>
              <p className="font-cormorant italic text-sm text-[#C9A24A]">
                "Good Food. Good Mood. Great Memories."
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={CAFE_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#2E1B13] border border-[#C9A24A]/30 flex items-center justify-center text-[#E8D7BD] hover:text-[#1A0F0A] hover:bg-[#C9A24A] transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href={CAFE_INFO.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#2E1B13] border border-[#C9A24A]/30 flex items-center justify-center text-[#E8D7BD] hover:text-[#1A0F0A] hover:bg-[#C9A24A] transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={CAFE_INFO.socials.google}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#2E1B13] border border-[#C9A24A]/30 flex items-center justify-center text-[#E8D7BD] hover:text-[#1A0F0A] hover:bg-[#C9A24A] transition-all"
              aria-label="Google Maps"
            >
              <Compass className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 text-center md:text-left">
          
          {/* Col 1: About Blurb */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24A] mb-4">
              Our Philosophy
            </h4>
            <p className="text-xs sm:text-sm text-[#E8D7BD]/80 font-light leading-relaxed mb-4">
              Inspired by the rich warmth of Indian heritage and the relaxed charm of modern cafe culture. Savor artisan burgers, specialty drinks, and sweet treats in Madurai.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#E5C06E]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span>Rated 5.0 ★ by food lovers in Madurai</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24A] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#C9A24A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A24A] transition-colors">Our Story & Ambience</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C9A24A] transition-colors">Special Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A24A] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C9A24A] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A24A] transition-colors">Location & Timings</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24A] mb-4">
              Visit & Connect
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#E8D7BD]/90">
              <div className="flex items-start justify-center md:justify-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24A] flex-shrink-0 mt-0.5" />
                <span>
                  Shop No 1 & 2, Theni Road, S.S. Colony 4th Street, Opp. Devaki Speciality Hospital & Scan, Madurai 625016
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24A] flex-shrink-0" />
                <a href={`tel:${CAFE_INFO.phoneClean}`} className="hover:text-[#C9A24A] font-semibold text-[#FFFDF8]">
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A24A] flex-shrink-0" />
                <span>Open Daily · Closes around 12:00 AM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-[#C9A24A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D7BD]/60">
          <p>© 2026 The Indian Treats Cafe. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#A95F35] fill-[#A95F35]" />
            <span>for Madurai food lovers</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
