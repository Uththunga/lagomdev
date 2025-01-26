import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface ImageUploadProps {
  label: string;
  onChange: (urls: string[]) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ label, onChange }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Handle image upload logic here
    // For now, we'll just create object URLs
    const urls = Array.from(files).map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...urls]);
    onChange([...images, ...urls]);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-4">
        {images.map((url, index) => (
          <div key={index} className="relative">
            <img src={url} alt="" className="w-24 h-24 object-cover rounded" />
            <button
              onClick={() => {
                setImages(images.filter((_, i) => i !== index));
                onChange(images.filter((_, i) => i !== index));
              }}
              className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        <label className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-400">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          <Upload className="w-6 h-6 text-gray-400" />
        </label>
      </div>
    </div>
  );
};