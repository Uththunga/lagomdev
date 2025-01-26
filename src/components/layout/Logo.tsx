import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
	className?: string;
	isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isScrolled = false }) => {
	return (
		<motion.svg
			width="40"
			height="40"
			viewBox="0 0 100 100"
			className={`${className} transition-colors duration-300`}
			whileHover={{ scale: 1.05 }}
		>
			{/* Triangle */}
			<motion.path
				d="M50 10 L90 80 L10 80 Z"
				fill="none"
				stroke={isScrolled ? '#578E7E' : '#FFFFFF'}
				strokeWidth="4"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{ duration: 1.5, ease: "easeInOut" }}
			/>
			
			{/* Spiral */}
			<motion.path
				d="M50 45 Q60 45 60 50 T50 55 T40 50 T50 45"
				fill="none"
				stroke={isScrolled ? '#578E7E' : '#FFFFFF'}
				strokeWidth="3"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
			/>
		</motion.svg>
	);
};