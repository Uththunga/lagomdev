import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface ArtisticBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const ArtisticBadge: React.FC<ArtisticBadgeProps> = ({ children, className }) => {
  return (
    <motion.span 
      className={cn(
        "relative inline-block px-4 py-2",
        "before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-sm before:rounded-full",
        "after:absolute after:inset-0 after:border after:border-white/20 after:rounded-full after:scale-[1.02]",
        "text-white text-sm tracking-wide",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};