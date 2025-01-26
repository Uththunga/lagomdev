import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1628149455678-16f37bc392f4?auto=format&fit=crop&q=80&w=2000"
          alt="Embroidered bag collection"
          className="w-full h-full object-cover opacity-40 transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      
      <div className="relative min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Artisanal<br />Embroidered<br />Bags
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in-delay">
              Where traditional craftsmanship meets contemporary design, creating timeless pieces that tell your story.
            </p>
            <div className="space-x-4 animate-fade-in-delay-2">
              <a
                href="#featured"
                className="group bg-white text-black px-8 py-4 rounded-full inline-flex items-center gap-2 font-semibold hover:bg-gray-100 transition-all"
              >
                Explore Collection
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};