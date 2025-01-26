import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export const CustomOrders: React.FC = () => {
  return (
    <section id="custom" className="relative py-24 bg-[#FFFAEC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23578E7E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-padding relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 mb-6 text-[#578E7E] bg-[#578E7E]/10 rounded-full text-sm font-medium">
              Custom Orders
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#3D3D3D]">
              Create Your Perfect Tote
            </h2>
            <p className="text-lg text-[#3D3D3D]/80 max-w-2xl mx-auto">
              Have a unique design in mind? We'll work with you to create a custom tote bag
              that perfectly matches your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#F5ECD5] rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Form Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#3D3D3D]">
                  Tell Us About Your Design
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-[#FFFAEC] border border-[#3D3D3D]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578E7E]/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-[#FFFAEC] border border-[#3D3D3D]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578E7E]/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Design Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-[#FFFAEC] border border-[#3D3D3D]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578E7E]/50"
                      placeholder="Describe your design idea..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#578E7E] text-[#FFFAEC] rounded-lg hover:bg-[#578E7E]/90 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>

              {/* Upload Section */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-full aspect-square rounded-xl border-2 border-dashed border-[#3D3D3D]/20 flex flex-col items-center justify-center p-8 bg-[#FFFAEC]">
                  <Upload className="w-12 h-12 text-[#578E7E] mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-[#3D3D3D]">
                    Upload Your Design
                  </h4>
                  <p className="text-[#3D3D3D]/70 mb-6">
                    Drag and drop your design file here, or click to browse
                  </p>
                  <button className="px-6 py-2 bg-[#578E7E]/10 text-[#578E7E] rounded-lg hover:bg-[#578E7E]/20 transition-colors">
                    Choose File
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};