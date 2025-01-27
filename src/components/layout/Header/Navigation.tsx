import React from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Custom Orders', href: '#custom' },
];


export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6">
      {navItems.map((item) => (
        <li key={item.label}>
        <a 
          href={item.href}
          className={`text-sm font-medium transition-colors py-1 ${
          isScrolled 
          ? 'text-[#2D2D2D] hover:text-[#8B4513]' 
          : 'text-[#2D2D2D] hover:text-[#8B4513]'
          }`}
        >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};