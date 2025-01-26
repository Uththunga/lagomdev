import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface MobileMenuProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Custom Orders', href: '#custom' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "p-2 transition-colors",
          isScrolled ? "text-[#578E7E]" : "text-white"
        )}
        >
        <Menu size={24} />
        </button>

        {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5ECD5] backdrop-blur-md">
          <div className="h-full flex flex-col">
          <div className="h-20 flex items-center justify-end px-4">
            <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#578E7E]"
            >
            <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#578E7E] hover:text-[#578E7E]/80 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};