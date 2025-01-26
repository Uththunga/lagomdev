import React from 'react';
import { motion } from 'framer-motion';
import { ProductGrid } from '../home/ProductGrid/ProductGrid';
import { Sparkles } from 'lucide-react';

export const ShopSection: React.FC = () => {
  return (
    <section id="shop" className="bg-[#FFFAEC] py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23578E7E' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#578E7E]" />
            <span className="text-sm font-medium text-[#578E7E] tracking-wide uppercase">
              Our Collection
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D3D3D]">
            Premium Tote Bags
          </h2>
          <p className="text-base text-[#3D3D3D]/80 max-w-2xl mx-auto">
            Each piece is meticulously embroidered by our artisans, combining traditional craftsmanship with contemporary design
          </p>
        </motion.div>

        {/* Product Grid */}
        <ProductGrid />
      </div>
    </section>
  );
};