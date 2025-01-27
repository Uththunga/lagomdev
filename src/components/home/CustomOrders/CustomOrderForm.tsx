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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
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
          <Textarea
            label="Design Details & Requirements"
            placeholder="Tell us about your design and any specific requirements..."
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

        <div>
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
            Upload Your Design
          </label>
            <div className="relative h-[300px] rounded-lg border-2 border-dashed border-[#3D3D3D]/20 bg-[#FFFAEC] hover:border-[#A76D6D]/50 transition-colors">
            <input
              id="design-upload"
              type="file"
              className="sr-only"
              accept="image/*"
              {...register('designImage', {
                required: 'Please upload your design image'
              })}
            />
            <label
              htmlFor="design-upload"
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer p-4"
            >
              {previewUrl ? (
                <div className="w-full h-full flex flex-col items-center">
                  <img
                    src={previewUrl}
                    alt="Design preview"
                    className="max-h-[200px] rounded-lg object-contain mb-2"
                  />
                    <p className="text-sm text-[#A76D6D] font-medium">Click to change design</p>
                </div>
              ) : (
                <>
                    <Upload className="w-8 h-8 text-[#A76D6D] mb-2" />
                  <p className="text-sm font-medium text-[#3D3D3D] mb-1">
                    Drag and drop or click to upload
                  </p>
                  <p className="text-xs text-[#3D3D3D]/60">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </>
              )}
            </label>
          </div>
          {errors.designImage && (
            <p className="mt-2 text-sm text-red-500">{errors.designImage.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-8">
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