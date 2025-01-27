import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
	className?: string;
	isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isScrolled = false }) => {
	return (
		<div className="relative">
			<motion.svg
				width="36"
				height="36"
				viewBox="0 0 100 100"
				className={`${className} transition-colors duration-300 hover:opacity-80`}
				whileHover={{ scale: 1.05 }}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				{/* Background Circle */}
				<circle
					cx="50"
					cy="50"
					r="45"
					fill="#F5ECD5"
					className="drop-shadow-sm"
				/>
				
				{/* Triangle */}
				<motion.path
					d="M50 20 L80 75 L20 75 Z"
					fill="none"
					stroke={isScrolled ? '#2D2D2D' : '#2D2D2D'}
					strokeWidth="4"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.5, ease: "easeInOut" }}
				/>
				
				{/* Spiral */}
				<motion.path
					d="M50 45 Q60 45 60 50 T50 55 T40 50 T50 45"
					fill="none"
					stroke={isScrolled ? '#8B4513' : '#8B4513'}
					strokeWidth="3"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
				/>
			</motion.svg>
		</div>
	);
};