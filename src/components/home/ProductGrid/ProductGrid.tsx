import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../../../data/products';
import { motion } from 'framer-motion';

export const ProductGrid: React.FC = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
};