import React from 'react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';
import { IndianMotif } from './IndianMotif';
import { Star, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#24150F] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            Guest Testimonials
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <IndianMotif variant="divider" />
          
          {/* Google Rating Overview Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#2E1B13] border border-[#C9A24A]/40 shadow-lg mt-2">
            <div className="flex items-center text-[#C9A24A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A24A]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#FFFDF8]">
              {CAFE_INFO.rating}.0 based on {CAFE_INFO.reviewCount} Google reviews
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="card-cafe p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              {/* Top Accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Avatar, Name & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#A95F35] to-[#3B2418] border border-[#C9A24A]/40 flex items-center justify-center font-bold text-sm text-[#FFFDF8] shadow-inner">
                      {review.avatarText}
                    </div>
                    <div>
                      <h4 className="font-serif-heading font-bold text-base text-[#FFFDF8] flex items-center gap-1.5">
                        {review.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24A]" />
                      </h4>
                      <span className="text-[11px] text-[#E8D7BD]/60">{review.date}</span>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#C9A24A]/30 group-hover:text-[#C9A24A]/70 transition-colors" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#C9A24A] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#E8D7BD]/85 italic leading-relaxed font-light mb-5">
                  "{review.review}"
                </p>
              </div>

              {/* Recommended Favorite Dish Badge */}
              {review.favoriteDish && (
                <div className="pt-3 border-t border-[#C9A24A]/15 flex items-center justify-between text-[11px]">
                  <span className="text-[#E8D7BD]/60 uppercase tracking-wider text-[10px]">Loved:</span>
                  <span className="font-semibold text-[#E5C06E] bg-[#24150F] px-2.5 py-0.5 rounded-full border border-[#C9A24A]/25">
                    {review.favoriteDish}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            <span>Read More Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#C9A24A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
