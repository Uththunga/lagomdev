import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Yarn, Ruler } from 'lucide-react';

const craftSteps = [
  {
    icon: Yarn,
    title: 'Premium Materials',
    description: 'We carefully select high-quality fabrics and threads that ensure durability and beauty.'
  },
  {
    icon: Scissors,
    title: 'Hand Embroidery',
    description: 'Each design is meticulously embroidered by hand, creating unique and intricate patterns.'
  },
  {
    icon: Ruler,
    title: 'Quality Control',
    description: 'Every piece undergoes thorough inspection to meet our high standards of craftsmanship.'
  }
];

export const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-24 bg-[#F5ECD5] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A76D6D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <span className="inline-block px-4 py-1 mb-6 text-[#A76D6D] bg-[#A76D6D]/10 rounded-full text-sm font-medium">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3D3D3D]">
            Crafted with Excellence
          </h2>
          <p className="text-lg text-[#3D3D3D]/80 max-w-2xl mx-auto">
            Every tote bag is a testament to our dedication to quality and craftsmanship,
            created through a meticulous process that honors traditional techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {craftSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#FFFAEC] rounded-lg p-8 text-center shadow-sm"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#A76D6D]/10">
                <step.icon className="w-8 h-8 text-[#A76D6D]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">
                {step.title}
              </h3>
              <p className="text-[#3D3D3D]/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#A76D6D]/20" />
            {[
              'Design Consultation',
              'Material Selection',
              'Pattern Creation',
              'Hand Embroidery',
              'Quality Check',
              'Final Details'
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 mb-8 ${
                  index % 2 === 0 ? 'justify-end md:pr-32' : 'flex-row-reverse md:pl-32'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-[#A76D6D] relative">
                  <div className="absolute inset-0 rounded-full bg-[#A76D6D] animate-ping opacity-20" />
                </div>
                <div className={`bg-[#FFFAEC] p-4 rounded-lg shadow-sm ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <span className="text-[#3D3D3D] font-medium">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};