import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { MiniCart } from './MiniCart';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ? 'bg-[#F5ECD5]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-padding">
      <div className="h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Logo isScrolled={isScrolled} />

        <div className="relative overflow-hidden">
            <span className={`text-xl font-light tracking-wide transition-all duration-500 ${
            isScrolled ? 'text-[#578E7E]' : 'text-white'
            }`}>
            LAGOM
            </span>
          <motion.div 
          className={`absolute bottom-0 left-0 h-px w-full transform transition-transform duration-500 ${
            isScrolled ? 'bg-[#578E7E]/20 scale-x-0' : 'bg-white/30 scale-x-100'
          }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
          
          <Navigation isScrolled={isScrolled} />
          <div className="flex items-center gap-6">
            <MiniCart isScrolled={isScrolled} />
            <MobileMenu isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};