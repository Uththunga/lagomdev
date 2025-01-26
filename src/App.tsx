import React from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Hero } from './components/home/Hero/Hero';
import { ShopSection } from './components/shop/ShopSection';
import { AboutSection } from './components/about/AboutSection';
import { CustomOrders } from './components/home/CustomOrders/CustomOrders';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ShopSection />
          <AboutSection />
          <CustomOrders />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}