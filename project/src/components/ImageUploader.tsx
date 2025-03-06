import React, { useState, useRef } from 'react';
import { Upload, X, Check, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  productId?: number;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, productId }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Create a local preview URL
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      onImageUpload(objectUrl);
      
      // Reset success state after a delay
      setTimeout(() => {
        setUploadSuccess(false);
      }, 2000);
    }, 1500);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-white">
          {productId ? `Product #${productId} Image` : 'Upload Product Image'}
        </h3>
        {previewUrl && (
          <button 
            onClick={removeImage}
            className="text-xs text-gray-400 hover:text-white flex items-center"
          >
            <X className="h-3 w-3 mr-1" /> Remove
          </button>
        )}
      </div>

      {previewUrl ? (
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-900 rounded-md">
          <img 
            src={previewUrl} 
            alt="Product preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2">
            {isUploading ? (
              <div className="bg-black/70 text-white text-xs py-1 px-2 rounded-sm backdrop-blur-sm">
                Uploading...
              </div>
            ) : uploadSuccess ? (
              <div className="bg-green-500/90 text-white text-xs py-1 px-2 rounded-sm backdrop-blur-sm flex items-center">
                <Check className="h-3 w-3 mr-1" /> Uploaded
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <button
          onClick={triggerFileInput}
          className="w-full h-40 border-2 border-dashed border-gray-700 rounded-md flex flex-col items-center justify-center hover:border-gray-500 transition-colors"
        >
          <ImageIcon className="h-10 w-10 text-gray-500 mb-2" />
          <span className="text-sm text-gray-400">Click to upload image</span>
          <span className="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 5MB</span>
        </button>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;