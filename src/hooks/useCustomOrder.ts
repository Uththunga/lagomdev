import { useState } from 'react';
import { CustomOrderFormData } from '../components/home/CustomOrders/types';

export const useCustomOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitCustomOrder = async (data: CustomOrderFormData) => {
    setIsSubmitting(true);
    try {
      // Here we would typically make an API call to submit the order
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Custom order submitted:', data);
      return { success: true };
    } catch (error) {
      console.error('Error submitting custom order:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitCustomOrder,
    isSubmitting
  };
};