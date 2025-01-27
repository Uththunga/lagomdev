import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProductForm } from './ProductForm';
import { ProductList } from './ProductList';
import { Button } from '../../ui/Button';
import { AdminLayout } from '../layout/AdminLayout';

export const ProductManager: React.FC = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      // Handle product creation/update
      console.log('Submitting:', data);
      setIsAddingProduct(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <AdminLayout
      title="Products"
      breadcrumbs={[
        { label: 'Dashboard', href: '/admin' },
        { label: 'Products' }
      ]}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#3D3D3D]/60">
              Manage your product inventory, prices, and details
            </p>
          </div>
          <Button onClick={() => setIsAddingProduct(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
        
        {isAddingProduct && (
          <ProductForm 
            onClose={() => setIsAddingProduct(false)}
            onSubmit={handleSubmit}
          />
        )}
        
        <ProductList />
      </div>
    </AdminLayout>
  );
};