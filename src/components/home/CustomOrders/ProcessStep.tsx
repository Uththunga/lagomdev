import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-[#A76D6D]/10 rounded-full flex items-center justify-center mb-4">
        <Icon size={32} className="text-[#A76D6D]" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#3D3D3D]">{title}</h3>
      <p className="text-[#3D3D3D]/70">{description}</p>
    </div>
  );
};