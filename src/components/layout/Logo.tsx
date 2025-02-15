import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
	className?: string;
	isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isScrolled = false }) => {
	return (
		<motion.div
			className={`relative ${className}`}
			whileHover={{ scale: 1.05 }}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<img
				src={isScrolled ? '/logoicon.png' : '/logo.png'}
				alt="LAGOM"
				className="h-8 w-auto transition-all duration-300 hover:opacity-80"
			/>
		</motion.div>

	);
};