import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-[#3D3D3D]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-3 sm:px-4 py-2.5 bg-[#FFFAEC] border border-[#3D3D3D]/10 rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-[#578E7E]/50",
            "text-base placeholder:text-[#3D3D3D]/40",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';