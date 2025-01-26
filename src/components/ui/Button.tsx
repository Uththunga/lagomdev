import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all',
        {
          'bg-[#578E7E] text-[#FFFAEC] hover:bg-[#578E7E]/90': variant === 'primary',
          'bg-[#F5ECD5] text-[#3D3D3D] hover:bg-[#F5ECD5]/90': variant === 'secondary',
          'border border-[#FFFAEC]/20 text-[#FFFAEC] hover:bg-[#FFFAEC]/10': variant === 'outline',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          'px-8 py-4 text-lg': size === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};