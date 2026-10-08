import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { IndianMotif } from './IndianMotif';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Ambience', 'Food', 'Beverages', 'People'];

  const filteredGallery = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#2A1810] overflow-hidden border-t border-[#C9A24A]/15">
      {/* Background Mandala */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            Visual Story
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            CAFE MOMENTS & GALLERY
          </h2>
          <IndianMotif variant="divider" />
          <p className="font-cormorant italic text-xl sm:text-2xl text-[#E8D7BD] mt-1">
            "A Glimpse into Our Warm & Cozy World"
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-[#C9A24A] text-[#1A0F0A] shadow-md scale-105'
                  : 'bg-[#352017] text-[#E8D7BD] border border-[#C9A24A]/20 hover:border-[#C9A24A]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-[#C9A24A]/25 bg-[#1F120D] shadow-lg ${
                index === 0 || index === 2 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className="relative w-full h-64 sm:h-full min-h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24150F]/95 via-[#24150F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A] bg-[#1A0F0A] px-2 py-0.5 rounded-full inline-block mb-1.5 border border-[#C9A24A]/30">
                      {item.category}
                    </span>
                    <h3 className="font-serif-heading font-bold text-base sm:text-lg text-[#FFFDF8]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E8D7BD]/80 line-clamp-2 mt-1 font-light">
                      {item.caption}
                    </p>
                  </div>

                  {/* Centered Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#C9A24A]/90 text-[#1A0F0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/theindiantreatscafe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A24A]/40 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E8D7BD] hover:bg-[#C9A24A]/15 hover:border-[#C9A24A] transition-all"
          >
            <svg className="w-4 h-4 text-[#C9A24A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Follow @theindiantreatscafe on Instagram</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#24150F] border border-[#C9A24A]/40 text-[#FFFDF8] hover:text-[#C9A24A] transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#24150F]/80 border border-[#C9A24A]/30 text-[#FFFDF8] hover:bg-[#C9A24A] hover:text-[#1A0F0A] transition-all z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#24150F]/80 border border-[#C9A24A]/30 text-[#FFFDF8] hover:bg-[#C9A24A] hover:text-[#1A0F0A] transition-all z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A24A]/50 shadow-2xl">
              <img
                src={filteredGallery[selectedImageIndex].image}
                alt={filteredGallery[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Caption Card */}
            <div className="mt-4 text-center max-w-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24A]">
                {filteredGallery[selectedImageIndex].category}
              </span>
              <h4 className="font-serif-heading font-bold text-lg text-[#FFFDF8]">
                {filteredGallery[selectedImageIndex].title}
              </h4>
              <p className="text-xs text-[#E8D7BD]/80 mt-1 font-light">
                {filteredGallery[selectedImageIndex].caption}
              </p>
              <div className="text-[11px] text-[#C9A24A]/60 mt-1">
                {selectedImageIndex + 1} of {filteredGallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
