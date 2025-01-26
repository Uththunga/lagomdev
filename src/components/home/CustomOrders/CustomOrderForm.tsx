import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Upload } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Textarea } from '../../ui/Textarea';
import { CustomOrderFormData } from './types';

export const CustomOrderForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<CustomOrderFormData>();

  const designImage = watch('designImage');

  // Handle image preview
  React.useEffect(() => {
    if (designImage?.[0]) {
      const file = designImage[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [designImage]);

  const onSubmit = async (data: CustomOrderFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
        >
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Your custom order request has been received. We'll contact you within 24-48 hours to discuss the details and bring your vision to life.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" size="lg">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Your Design
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {previewUrl ? (
                <div className="mb-4">
                  <img
                    src={previewUrl}
                    alt="Design preview"
                    className="mx-auto max-h-64 rounded-lg object-contain"
                  />
                </div>
              ) : (
                <Upload
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
              <div className="mt-4 flex flex-col items-center text-sm leading-6 text-gray-600">
                <label
                  htmlFor="design-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>{previewUrl ? 'Change design' : 'Upload a design'}</span>
                  <input
                    id="design-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    {...register('designImage', {
                      required: 'Please upload your design image'
                    })}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          {errors.designImage && (
            <p className="mt-2 text-sm text-red-500">{errors.designImage.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
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
          />
        </div>

        <div className="mb-6">
          <Textarea
            label="Design Details & Requirements"
            placeholder="Tell us about your design and any specific requirements (size, colors, placement, etc.)..."
            rows={4}
            {...register('designDetails', {
              required: 'Please provide details about your design requirements',
              minLength: {
                value: 20,
                message: 'Please provide more details (minimum 20 characters)'
              }
            })}
            error={errors.designDetails?.message}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="flex items-center space-x-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="w-4 h-4 mr-2" />
              </motion.span>
              <span>Sending...</span>
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Submit Request
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};