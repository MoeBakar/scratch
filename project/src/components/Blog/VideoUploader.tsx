import React, { useState, useRef } from 'react';
import { Upload, X, Check, Video } from 'lucide-react';

interface BlogVideoUploaderProps {
  onVideoUpload: (videoUrl: string) => void;
  initialVideo?: string;
}

const BlogVideoUploader: React.FC<BlogVideoUploaderProps> = ({ onVideoUpload, initialVideo }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialVideo || null);
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

    // Check file size (limit to 100MB)
    if (file.size > 100 * 1024 * 1024) {
      setUploadError("File size exceeds 100MB limit");
      setIsUploading(false);
      return;
    }

    // Create a local preview URL
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // In a real app, you would upload this to a server
    // For now, we'll use the object URL directly
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      onVideoUpload(objectUrl);
      
      // Reset success state after a delay
      setTimeout(() => {
        setUploadSuccess(false);
      }, 2000);
    }, 1500);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeVideo = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
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
          <video 
            src={previewUrl} 
            controls 
            className="max-h-48 mx-auto"
          />
          <div className="absolute top-0 right-0 flex space-x-1">
            <button
              type="button"
              onClick={removeVideo}
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
          <Video className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-400">
            <label htmlFor="blog-video-upload" className="relative cursor-pointer bg-black px-3 py-2 rounded-sm font-medium text-pink-500 hover:text-pink-400">
              <span>Upload video</span>
              <input id="blog-video-upload" name="blog-video-upload" type="file" className="sr-only" onChange={handleFileChange} accept="video/*" />
            </label>
            <p className="pl-1 pt-2">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">MP4, WebM up to 100MB</p>
        </div>
      )}
      
      {uploadError && (
        <p className="mt-2 text-sm text-red-500">{uploadError}</p>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />
    </div>
  );
};

export default BlogVideoUploader;