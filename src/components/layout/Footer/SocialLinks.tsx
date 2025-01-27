import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
          <a href="https://instagram.com" className="hover:text-[#A76D6D] transition-colors" aria-label="Instagram">
          <Instagram size={20} />
          </a>
          <a href="https://facebook.com" className="hover:text-[#A76D6D] transition-colors" aria-label="Facebook">
          <Facebook size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-[#A76D6D] transition-colors" aria-label="Twitter">
          <Twitter size={20} />
          </a>
    </div>
  );
};