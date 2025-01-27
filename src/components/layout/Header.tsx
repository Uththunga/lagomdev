import React from 'react';
import { Scissors, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <header className="bg-[#2D2D2D] shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Scissors className="text-white" size={24} />
            <span className="text-xl font-bold text-white">EmbroideryCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              <a href="#shop" className="text-white hover:text-[#A76D6D]">Shop</a>
              <a href="#craftsmanship" className="text-white hover:text-[#A76D6D]">Craftsmanship</a>
              <a href="#custom" className="text-white hover:text-[#A76D6D]">Custom Orders</a>
            </nav>
            <button
              onClick={onCartClick}
              className="p-2 text-white hover:bg-[#3D3D3D] rounded-full relative"
            >
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};