import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setShowVideo(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const closeVideo = () => {
    setShowVideo(false);
    setIsPlaying(false);
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    setVideoUrl(null);
    setVideoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col lg:flex-row items-start">
              <div className="vertical-text text-gray-500 text-sm font-medium tracking-widest hidden lg:block mr-8">
                PREMIUM EGYPTIAN COTTON COLLECTION
              </div>
              
              <div className="flex-1">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">CMTEE BRAND</span>
                  <span className="block text-gray-400 mt-2">LUXURY ESSENTIALS</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                  Experience the luxury of 100% Egyptian cotton, 
                  offering unparalleled softness, breathability, and durability.
                </p>
                <div className="mt-8 flex items-center">
                  <a
                    href="#products"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    SHOP NOW
                  </a>
                  <a
                    href="/blog"
                    className="ml-6 inline-flex items-center text-base font-medium text-white hover:text-gray-300"
                  >
                    EXPLORE <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hero-image-overlap">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
          {showVideo && videoUrl ? (
            <div className="absolute inset-0 bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                className="absolute inset-0 h-full w-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  onClick={togglePlay}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white" />
                  )}
                </button>
                <button 
                  onClick={closeVideo}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          ) : (
            <>
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="CMTEE BRAND Premium T-shirts"
              />
              
              <div className="absolute top-1/4 -left-12 w-48 h-48 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-1/3 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="absolute bottom-10 right-10 bg-black/80 p-4 backdrop-blur-sm">
                <p className="text-white text-sm font-medium">100% EGYPTIAN COTTON</p>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <label className="cursor-pointer bg-black/50 backdrop-blur-sm p-4 rounded-full hover:bg-black/70 transition-colors">
                  <Play className="h-8 w-8 text-white" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="video/*"
                    onChange={handleVideoUpload}
                  />
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;