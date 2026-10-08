import React from 'react';
import { WHY_CHOOSE_US } from '../data/cafeData';
import { IndianMotif } from './IndianMotif';
import { UtensilsCrossed, Coffee, HeartHandshake, IndianRupee } from 'lucide-react';

const iconLookup: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7 text-[#C9A24A]" />,
  Coffee: <Coffee className="w-7 h-7 text-[#C9A24A]" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-[#C9A24A]" />,
  IndianRupee: <IndianRupee className="w-7 h-7 text-[#C9A24A]" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#24150F] overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            The Indian Treats Experience
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            WHY CHOOSE US
          </h2>
          <IndianMotif variant="divider" />
          <p className="text-sm sm:text-base text-[#E8D7BD]/80 max-w-xl mx-auto font-light">
            We combine authentic hospitality, culinary passion, and a cozy warm ambiance to make every dining moment unforgettable.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="card-cafe p-7 sm:p-8 flex flex-col items-center text-center relative group overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Highlight Tag */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A]/90 bg-[#24150F] px-2.5 py-1 rounded-full border border-[#C9A24A]/25 mb-5">
                {item.highlight}
              </span>

              {/* Icon Holder */}
              <div className="w-16 h-16 rounded-2xl bg-[#3E261B] border border-[#C9A24A]/30 flex items-center justify-center mb-5 group-hover:border-[#E5C06E] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,162,74,0.2)] transition-all duration-300">
                {iconLookup[item.icon]}
              </div>

              {/* Title */}
              <h3 className="font-serif-heading font-bold text-xl text-[#FFFDF8] mb-3 group-hover:text-[#E5C06E] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#E8D7BD]/80 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
