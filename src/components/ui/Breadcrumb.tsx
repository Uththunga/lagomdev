import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight size={16} className="mx-2 text-[#3D3D3D]/40" />}
            {item.href ? (
              <a
              href={item.href}
              className="text-sm font-medium text-[#3D3D3D]/70 hover:text-[#A76D6D]"
              >
              {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-[#3D3D3D]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};