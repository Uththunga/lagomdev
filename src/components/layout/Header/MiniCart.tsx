import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { formatCurrency } from '../../../utils/formatCurrency';

interface MiniCartProps {
  isScrolled: boolean;
}

export const MiniCart: React.FC<MiniCartProps> = ({ isScrolled }) => {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={cartRef}>
        <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 transition-colors ${
          isScrolled ? 'text-[#578E7E] hover:text-[#578E7E]/80' : 'text-white/90 hover:text-white'
        }`}
        >
        <ShoppingBag size={20} />
        <span className="text-sm">Cart ({state.items.length})</span>
        </button>

        {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
          <div className="absolute right-0 top-full mt-4 w-80 bg-[#F5ECD5] rounded-2xl shadow-xl z-50 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-[#578E7E]">Shopping Cart</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#578E7E]/60 hover:text-[#578E7E] transition-colors"
            >
              <X size={18} />
            </button>
            </div>
            
            {state.items.length === 0 ? (
            <p className="text-[#578E7E]/70 text-sm">Your cart is empty</p>
            ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-auto">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-[#578E7E]">{item.name}</h4>
                  <p className="text-sm text-[#578E7E]/70">
                  {item.quantity} × {formatCurrency(item.price)}
                  </p>
                </div>
                </div>
              ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#578E7E]/10">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-[#578E7E]">Total</span>
                <span className="text-[#578E7E]">{formatCurrency(state.total)}</span>
              </div>
              <button className="w-full bg-[#578E7E] text-white py-3 rounded-full hover:bg-[#578E7E]/90 transition-colors">
                Checkout
              </button>
              </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};