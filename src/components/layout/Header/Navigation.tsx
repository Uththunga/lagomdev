import React from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Custom Orders', href: '#custom' },
];

export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className={`text-sm transition-colors ${
                isScrolled 
                  ? 'text-gray-600 hover:text-black' 
                  : 'text-white/90 hover:text-white'
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