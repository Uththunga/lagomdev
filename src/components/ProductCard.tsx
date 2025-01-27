import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
        className="group bg-[#F5ECD5] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.button
            className="p-2 bg-[#F5ECD5] rounded-full shadow-lg hover:bg-[#F5ECD5]/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={20} className="text-gray-600" />
          </motion.button>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
            <div className="px-4 py-2 bg-[#F5ECD5]/90 backdrop-blur-sm rounded-full">
            <span className="text-lg font-semibold">${product.price}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <motion.button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className="w-full bg-[#A76D6D] text-[#F5ECD5] px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#6B4F4F] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingBag size={20} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};