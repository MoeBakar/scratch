import React, { useState, useRef } from 'react';
import { Upload, X, Check, Image as ImageIcon } from 'lucide-react';

interface BlogImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  initialImage?: string;
}

const BlogImageUploader: React.FC<BlogImageUploaderProps> = ({ onImageUpload, initialImage }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset states
    setUploadError(null);
    setIsUploading(true);

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File size exceeds 10MB limit");
      setIsUploading(false);
      return;
    }

    // Create a local preview URL
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Convert the file to a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      
      // In a real app, you would upload this to a server
      // For now, we'll use the data URL directly
      setTimeout(() => {
        setIsUploading(false);
        setUploadSuccess(true);
        onImageUpload(dataUrl);
        
        // Reset success state after a delay
        setTimeout(() => {
          setUploadSuccess(false);
        }, 2000);
      }, 1500);
    };
    
    reader.onerror = () => {
      setUploadError("Error reading file");
      setIsUploading(false);
    };
    
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setPreviewUrl(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-1 text-center">
      {previewUrl ? (
        <div className="relative">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-h-48 mx-auto"
          />
          <div className="absolute top-0 right-0 flex space-x-1">
            <button
              type="button"
              onClick={removeImage}
              className="bg-black/70 p-1 rounded-full"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>
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
        <div onClick={triggerFileInput} className="cursor-pointer">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-400">
            <label htmlFor="blog-image-upload" className="relative cursor-pointer bg-black px-3 py-2 rounded-sm font-medium text-pink-500 hover:text-pink-400">
              <span>Upload image</span>
              <input id="blog-image-upload" name="blog-image-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
            </label>
            <p className="pl-1 pt-2">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
      
      {uploadError && (
        <p className="mt-2 text-sm text-red-500">{uploadError}</p>
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

export default BlogImageUploader;