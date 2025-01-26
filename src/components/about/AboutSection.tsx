import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Crafted with Excellence',
    description: 'Each piece is carefully made by our skilled artisans with attention to detail.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Sustainable Materials',
    description: 'We use eco-friendly materials to ensure our products are kind to the environment.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Unique Designs',
    description: 'Every tote bag features unique embroidery patterns inspired by nature and art.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#3D3D3D] py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFAEC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-[#578E7E] bg-[#578E7E]/10 rounded-full text-sm font-medium">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFFAEC]">
            Crafting Beauty with Purpose
          </h2>
          <p className="text-lg text-[#F5ECD5] max-w-2xl mx-auto">
            We believe in creating beautiful, functional pieces that tell a story. 
            Our commitment to quality craftsmanship and sustainable practices sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F5ECD5]/10 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-[#578E7E] text-[#FFFAEC]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFFAEC]">
                {feature.title}
              </h3>
              <p className="text-[#F5ECD5]/90">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
            { number: '500+', label: 'Unique Designs' },
            { number: '50+', label: 'Artisans' },
            { number: '1000+', label: 'Happy Customers' },
            { number: '100%', label: 'Premium Quality' }
            ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#F5ECD5] to-[#578E7E] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-[#F5ECD5]/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};