import React from 'react';
import { Input } from '../../../ui/Input';
import { Textarea } from '../../../ui/Textarea';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CustomOrderFormData } from '../types';

interface BagDetailsStepProps {
  register: UseFormRegister<CustomOrderFormData>;
  errors: FieldErrors<CustomOrderFormData>;
}

export const BagDetailsStep: React.FC<BagDetailsStepProps> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Premium Tote Bag Specifications</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Dimensions: 16"H x 14"W x 4"D</li>
          <li>• Premium canvas material</li>
          <li>• Interior zip pocket</li>
          <li>• Magnetic closure</li>
          <li>• Reinforced handles</li>
        </ul>
      </div>

      <Input
        label="Color Preference"
        placeholder="e.g., Navy blue, Natural canvas"
        {...register('colorPreference', { required: 'Color preference is required' })}
        error={errors.colorPreference?.message}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Embroidery Style Inspiration
        </label>
        <div className="grid grid-cols-2 gap-4">
          {['Floral', 'Nature', 'Geometric', 'Asian-inspired'].map((style) => (
            <label
              key={style}
              className={`
                relative border rounded-lg p-4 cursor-pointer transition-all
                hover:border-black
                ${errors.designStyle ? 'border-red-300' : 'border-gray-200'}
                [&:has(input:checked)]:border-black [&:has(input:checked)]:bg-gray-50
              `}
            >
              <input
                type="radio"
                {...register('designStyle', { required: 'Please select a design style' })}
                value={style.toLowerCase()}
                className="sr-only peer"
              />
              <span className="block text-sm font-medium">{style}</span>
            </label>
          ))}
        </div>
        {errors.designStyle && (
          <p className="mt-1 text-sm text-red-600">{errors.designStyle.message}</p>
        )}
      </div>

      <Textarea
        label="Custom Design Details"
        placeholder="Describe your desired embroidery pattern, motifs, and any specific elements you'd like to include..."
        {...register('designIdea', {
          required: 'Design details are required',
          minLength: { value: 20, message: 'Please provide more details (min 20 characters)' }
        })}
        error={errors.designIdea?.message}
      />
    </div>
  );
};