import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
	className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
	return (
		<motion.div
			className={`relative ${className}`}
			whileHover={{ 
				scale: 1.05,
				filter: 'brightness(1.1)',
				transition: { duration: 0.3, ease: 'easeOut' }
			}}
			initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
			animate={{ 
				opacity: 1, 
				scale: 1, 
				rotate: 0,
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 15
				}
			}}
		>
			<img
				src="/lagomdev/logo.svg"
				alt="Logo"
				className="h-6 w-auto transition-all duration-300 hover:opacity-90 logo-animation"
				style={{
					filter: 'drop-shadow(0px 2px 4px rgba(45, 45, 45, 0.1))',
					WebkitFilter: 'drop-shadow(0px 2px 4px rgba(45, 45, 45, 0.1))'
				}}
			/>
		</motion.div>
	);
};