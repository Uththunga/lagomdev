import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5ECD5]">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=2000"
        alt="Embroidered tote bag"
        className="w-full h-full object-cover opacity-80 mix-blend-multiply"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5ECD5]/60 via-[#F5ECD5]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5ECD5]/20 via-transparent to-[#F5ECD5]/40" />
      
      {/* Animated Pattern Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 mix-blend-overlay"
        style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A76D6D' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
        }}
      />
      </div>
      
      <div className="container-padding relative">
      <div className="max-w-4xl">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-[#8B4513]/10 backdrop-blur-sm text-[#8B4513] rounded-full ring-1 ring-[#8B4513]/20">
            Premium excellence
            </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
            <h1 className="text-5xl md:text-7xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            Premium <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] via-[#654321] to-[#2D2D2D]">
            Embroidered Totes
            </span>
            </h1>
            <p className="text-xl text-[#2D2D2D] max-w-2xl mb-8">
          Discover our collection of premium tote bags, each uniquely embroidered 
          to tell its own story. Made with premium materials and timeless design.
          </p>
        </motion.div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -left-4 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#A76D6D]/30 to-transparent"
        />

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div 
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <ChevronDown className="w-6 h-6 text-[#8B4513] -mb-4" />
            <ChevronDown className="w-6 h-6 text-[#8B4513] -mb-4 opacity-75" />
            <ChevronDown className="w-6 h-6 text-[#8B4513] opacity-50" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
        <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-[#F5ECD5] to-transparent" />
    </section>
  );
};