import React from 'react';
import { Scissors, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Scissors size={24} />
            <span className="text-xl font-bold">EmbroideryCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              <a href="#featured" className="text-gray-700 hover:text-black">Collections</a>
              <a href="#craftsmanship" className="text-gray-700 hover:text-black">Craftsmanship</a>
              <a href="#custom" className="text-gray-700 hover:text-black">Custom Orders</a>
            </nav>
            <button
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};