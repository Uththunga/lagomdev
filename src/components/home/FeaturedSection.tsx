import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Botanical Dreams Tote',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
    price: '$89.99',
    rating: 4.9,
    reviews: 128
  },
  {
    id: 2,
    name: 'Summer Breeze Collection',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    price: '$79.99',
    rating: 4.8,
    reviews: 96
  },
  {
    id: 3,
    name: 'Urban Explorer Tote',
    image: 'https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?auto=format&fit=crop&q=80&w=800',
    price: '$94.99',
    rating: 4.9,
    reviews: 142
  }
];

export const FeaturedSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#F5ECD5]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23578E7E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-6 text-[#578E7E] bg-[#578E7E]/10 rounded-full text-sm font-medium">
            Featured Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3D3D3D]">
            Our Most Loved Designs
          </h2>
          <p className="text-lg text-[#3D3D3D]/80 max-w-2xl mx-auto">
            Discover our most popular tote bags, each one a testament to our commitment
            to quality craftsmanship and timeless design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-[#FFFAEC] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#3D3D3D]">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#578E7E] font-bold text-lg">
                    {product.price}
                  </span>
                  <div className="flex items-center text-[#3D3D3D]/70">
                    <Star className="w-4 h-4 text-[#578E7E] fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                    <span className="ml-1 text-sm">({product.reviews})</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-[#578E7E] text-[#FFFAEC] rounded hover:bg-[#578E7E]/90 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};