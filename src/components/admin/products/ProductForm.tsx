import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Textarea } from '../../ui/Textarea';
import { ImageUpload } from '../shared/ImageUpload';
import { Tooltip } from '../../ui/Tooltip';
import { Info } from 'lucide-react';

interface ProductFormData {
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  lowStockThreshold: number;
}

interface ProductFormProps {
  onClose: () => void;
  initialData?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => Promise<void>;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onClose,
  initialData,
  onSubmit
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProductFormData>({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#F5ECD5] p-6 rounded-lg shadow">
      <div className="space-y-4">
        <Input
          label="Product Name"
          {...register('name', { 
            required: 'Product name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters' }
          })}
          error={errors.name?.message}
          placeholder="Floral Garden Shoulder Bag"
        />
        
        <div className="flex gap-4">
          <Input
            label="Price"
            type="number"
            step="0.01"
            {...register('price', { 
              required: 'Price is required',
              min: { value: 0, message: 'Price must be positive' }
            })}
            error={errors.price?.message}
            placeholder="249.99"
          />
          
          <Input
            label={
              <div className="flex items-center gap-2">
                Stock
                <Tooltip content="Current available quantity" className="text-[#3D3D3D]">
                  <Info size={16} className="text-[#A76D6D]/70" />
                </Tooltip>
              </div>
            }
            type="number"
            {...register('stock', { 
              required: 'Stock is required',
              min: { value: 0, message: 'Stock must be positive' }
            })}
            error={errors.stock?.message}
            placeholder="10"
          />
        </div>
        
        <Input
          label={
            <div className="flex items-center gap-2">
              Low Stock Threshold
              <Tooltip content="You'll be notified when stock falls below this number">
                <Info size={16} className="text-gray-400" />
              </Tooltip>
            </div>
          }
          type="number"
          {...register('lowStockThreshold', { 
            required: 'Threshold is required',
            min: { value: 1, message: 'Threshold must be at least 1' }
          })}
          error={errors.lowStockThreshold?.message}
          placeholder="5"
        />
        
        <Textarea
          label="Description"
          {...register('description', { 
            required: 'Description is required',
            minLength: { value: 20, message: 'Description must be at least 20 characters' }
          })}
          error={errors.description?.message}
          placeholder="Hand-embroidered floral patterns on premium leather..."
        />
        
        <ImageUpload
          label="Product Images"
          onChange={(urls) => console.log(urls)}
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Product'}
        </Button>
      </div>
    </form>
  );
};