import React from 'react';
import { Product } from '../../../types';
import { useCart } from '../../../context/CartContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm" />
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            h-full w-full object-cover transition-all duration-500 
            group-hover:scale-105
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className="w-full bg-[#578E7E] text-[#FFFAEC] py-2 rounded-md flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-medium text-[#3D3D3D] mb-1 truncate">{product.name}</h3>
        <p className="text-[#578E7E] font-medium">{formatCurrency(product.price)}</p>
      </div>
    </motion.div>
  );
};