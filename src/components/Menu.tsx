import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MenuItem, CAFE_INFO } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { IndianMotif } from './IndianMotif';
import { Plus, Check, Search, Sparkles, Flame, Eye, ShoppingBag, Utensils } from 'lucide-react';

interface MenuProps {
  onSelectDish: (dish: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const { addToCart, setIsCartOpen } = useCart();

  const categories = ['All', 'Burgers', 'Chicken', 'Pasta', 'Snacks', 'Beverages', 'Desserts'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      const matchesCategory = activeCategory === 'All' || dish.category === activeCategory;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiet =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && dish.isVeg) ||
        (dietaryFilter === 'non-veg' && !dish.isVeg);

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  const handleAddToCart = (e: React.MouseEvent, dish: MenuItem) => {
    e.stopPropagation();
    addToCart(dish);
    setAddedItemIds((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="relative py-20 lg:py-28 bg-[#24150F] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 opacity-10 pointer-events-none">
        <IndianMotif variant="mandala-circle" className="w-full h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <IndianMotif variant="flourish" className="mb-2" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#C9A24A] uppercase block">
            Crafted With Passion
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#FFFDF8] mt-2">
            OUR SPECIALS
          </h2>
          <IndianMotif variant="divider" />
          <p className="font-cormorant italic text-xl sm:text-2xl text-[#E8D7BD] mt-1">
            "Something Delicious For Everyone"
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#2D1A12]/80 p-3 sm:p-4 rounded-2xl border border-[#C9A24A]/25 backdrop-blur-md">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#C9A24A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burgers, pasta, shakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1F120D] border border-[#C9A24A]/20 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-[#F7F0E5] placeholder-[#E8D7BD]/40 focus:outline-none focus:border-[#C9A24A] transition-colors"
            />
          </div>

          {/* Veg / Non-Veg Toggle Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-center">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#C9A24A] text-[#1A0F0A]'
                  : 'bg-[#3A2218] text-[#E8D7BD] hover:bg-[#4A2D1F]'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#22c55e] text-white'
                  : 'bg-[#3A2218] text-[#E8D7BD] hover:bg-[#4A2D1F]'
              }`}
            >
              <div className="veg-indicator"><div className="veg-indicator-dot" /></div>
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#ef4444] text-white'
                  : 'bg-[#3A2218] text-[#E8D7BD] hover:bg-[#4A2D1F]'
              }`}
            >
              <div className="non-veg-indicator"><div className="non-veg-indicator-dot" /></div>
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Tabs (Horizontally Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A24A] to-[#E5C06E] text-[#1A0F0A] border-[#E5C06E] shadow-lg scale-105'
                  : 'bg-[#2E1B13] text-[#E8D7BD] border-[#C9A24A]/20 hover:border-[#C9A24A]/50 hover:bg-[#382218]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#2E1B13] rounded-2xl border border-[#C9A24A]/20">
            <Utensils className="w-12 h-12 text-[#C9A24A]/40 mx-auto mb-3" />
            <h3 className="font-serif-heading text-lg text-[#FFFDF8]">No dishes found</h3>
            <p className="text-xs text-[#E8D7BD]/60 mt-1">Try searching for something else or reset filters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#C9A24A]/20 text-[#C9A24A] text-xs font-semibold hover:bg-[#C9A24A]/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="card-cafe overflow-hidden flex flex-col justify-between group cursor-pointer border border-[#C9A24A]/20 relative"
              >
                {/* Dish Top Image */}
                <div className="relative h-56 overflow-hidden bg-[#1E110A]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24150F] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {/* Veg / Non-veg symbol */}
                    <div className="bg-[#1A0F0A]/85 p-1 rounded-md border border-white/10 backdrop-blur-sm">
                      {dish.isVeg ? (
                        <div className="veg-indicator"><div className="veg-indicator-dot" /></div>
                      ) : (
                        <div className="non-veg-indicator"><div className="non-veg-indicator-dot" /></div>
                      )}
                    </div>

                    {dish.isSignature && (
                      <span className="bg-[#C9A24A] text-[#1A0F0A] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Signature
                      </span>
                    )}

                    {dish.isBestseller && !dish.isSignature && (
                      <span className="bg-[#A95F35] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-[#1A0F0A]/80 text-[#E8D7BD] text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#C9A24A]/30">
                    {dish.category}
                  </div>

                  {/* Quick View Floating Hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1A0F0A]/85 text-[#E5C06E] text-xs px-2.5 py-1 rounded-full border border-[#C9A24A]/40 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Details</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#FFFDF8] group-hover:text-[#E5C06E] transition-colors leading-snug mb-2">
                      {dish.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E8D7BD]/75 line-clamp-2 leading-relaxed mb-4 font-light">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-[#C9A24A]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#E8D7BD]/60 block">Price</span>
                      <span className="font-serif-heading font-bold text-xl sm:text-2xl text-gold-gradient">
                        ₹{dish.price}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(e, dish)}
                      className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95 ${
                        addedItemIds[dish.id]
                          ? 'bg-[#22c55e] text-white scale-105'
                          : 'btn-gold'
                      }`}
                    >
                      {addedItemIds[dish.id] ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
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
            ))}
          </div>
        )}

        {/* View Full Menu Action CTA Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#352017] via-[#43291D] to-[#352017] p-8 sm:p-10 rounded-3xl border border-[#C9A24A]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A24A] mb-1">
              Complete Cafe Catalog
            </span>
            <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#FFFDF8] mb-3">
              Looking for our Full Menu & Combos?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8D7BD]/80 mb-8 max-w-lg">
              We also serve gourmet sandwiches, refreshing iced coffees, and seasonal specials. WhatsApp us or visit our counter in Madurai to explore the full cafe experience!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=Hello%20The%20Indian%20Treats%20Cafe,%20please%20send%20me%20your%20full%20menu%20and%20today's%20specials!`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full sm:w-auto px-9 py-4 sm:px-10 sm:py-4.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5 text-[#1A0F0A]" />
                <span>View Full Menu on WhatsApp</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="btn-outline-gold w-full sm:w-auto px-8 py-4 sm:px-9 sm:py-4.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider hover:scale-105"
              >
                Checkout Current Order
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
