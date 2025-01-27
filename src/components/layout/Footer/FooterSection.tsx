import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Custom Orders', href: '#' }
    ]
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Artisans', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQs', href: '#' }
    ]
  }
];

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#F5ECD5]">
      <div className="container-padding py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
        <h3 className="text-lg font-semibold mb-4 text-[#3D3D3D]">LAGOM</h3>
        <p className="text-[#3D3D3D]/80 mb-6">
              Crafted with precision, each piece tells a unique story through traditional artistry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#A76D6D]/10 hover:bg-[#A76D6D]/20 transition-colors"
                  aria-label={label}
                >
                    <Icon className="w-5 h-5 text-[#3D3D3D]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-[#3D3D3D]">{section.title}</h4>
                <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#3D3D3D]/80 hover:text-[#A76D6D] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3D3D3D]/10 pt-8 mt-8">
          <p className="text-[#3D3D3D]/60 text-sm text-center">
            2025 LAGOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};