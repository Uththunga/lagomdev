import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface MobileMenuProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Shop', href: '#shop' },
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
          "p-1.5 transition-colors",
          isScrolled ? "text-[#2D2D2D]" : "text-[#2D2D2D]"
        )}
        >
        <Menu size={20} />
        </button>

        {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5ECD5] backdrop-blur-md">
          <div className="h-full flex flex-col">
            <div className="h-16 flex items-center justify-end px-4">
            <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-[#2D2D2D]"
            >
            <X size={20} />
            </button>
          </div>

          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#2D2D2D] hover:text-[#8B4513] transition-colors"
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