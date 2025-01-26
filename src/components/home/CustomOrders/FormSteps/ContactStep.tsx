import React from 'react';
import { Input } from '../../../ui/Input';
import { Textarea } from '../../../ui/Textarea';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CustomOrderFormData } from '../types';

interface ContactStepProps {
  register: UseFormRegister<CustomOrderFormData>;
  errors: FieldErrors<CustomOrderFormData>;
}

export const ContactStep: React.FC<ContactStepProps> = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <Input
        label="Name"
        {...register('name', { 
          required: 'Name is required',
          minLength: { value: 2, message: 'Name must be at least 2 characters' }
        })}
        error={errors.name?.message}
        placeholder="Your name"
      />

      <Input
        label="Email"
        type="email"
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        error={errors.email?.message}
        placeholder="your@email.com"
      />

      <Input
        label="Preferred Timeline"
        {...register('timeline', { required: 'Timeline is required' })}
        placeholder="e.g., Within 2 months"
        error={errors.timeline?.message}
      />

      <Textarea
        label="Special Requirements (Optional)"
        {...register('specialRequirements')}
        placeholder="Any additional requirements or preferences..."
      />
    </div>
  );
};