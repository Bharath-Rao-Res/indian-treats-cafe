import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { MenuItem } from './data/cafeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { FeaturedDish } from './components/FeaturedDish';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationContact } from './components/LocationContact';
import { OrderCTA } from './components/OrderCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FoodDetailModal } from './components/FoodDetailModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#24150F] text-[#F7F0E5] relative pb-16 lg:pb-0">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Menu onSelectDish={(dish) => setSelectedDish(dish)} />
          <FeaturedDish />
          <WhyChooseUs />
          <Gallery />
          <Reviews />
          <LocationContact />
          <OrderCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Cart Drawer */}
        <CartDrawer />

        {/* Food Details Modal */}
        <FoodDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />

        {/* Mobile Sticky Quick Action Bar */}
        <StickyMobileBar />

        {/* Scroll To Top Action */}
        <ScrollToTop />
      </div>
    </CartProvider>
  );
};

export default App;
