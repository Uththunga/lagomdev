import React from 'react';
import { motion } from 'framer-motion';
import { CustomOrderForm } from './CustomOrderForm';

export const CustomOrders: React.FC = () => {
  return (
    <section id="custom" className="relative py-12 sm:py-16 md:py-24 bg-[#FFFAEC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23578E7E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-padding relative px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 py-1 mb-4 sm:mb-6 text-[#578E7E] bg-[#578E7E]/10 rounded-full text-sm font-medium">
              Custom Orders
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#3D3D3D]">
              Create Your Perfect Tote
            </h2>
            <p className="text-base sm:text-lg text-[#3D3D3D]/80 max-w-2xl mx-auto">
              Have a unique design in mind? We'll work with you to create a custom tote bag
              that perfectly matches your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#F5ECD5] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm"
          >
            <div className="max-w-3xl mx-auto">
              <CustomOrderForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
