import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Plus, Video, Image, X, Edit, Trash2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  video?: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "The History of Egyptian Cotton",
      content: "Egyptian cotton has been renowned for centuries as the world's finest cotton. Its superior qualities come from the unique climate and soil conditions of the Nile River Valley, where it has been cultivated since the early 1800s...",
      author: "Alex Morgan",
      date: "April 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: 2,
      title: "How to Care for Your Egyptian Cotton T-shirts",
      content: "To ensure your premium Egyptian cotton t-shirts maintain their exceptional quality and longevity, follow these care instructions: Always wash in cold water with mild detergent, avoid bleach, and tumble dry on low heat or lay flat to dry...",
      author: "Sarah Chen",
      date: "April 10, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Behind the Scenes: Our Manufacturing Process",
      content: "Take a look behind the scenes at our ethical manufacturing facilities where our premium Egyptian cotton t-shirts are crafted with meticulous attention to detail...",
      author: "David Patel",
      date: "April 5, 2025",
      readTime: "6 min read",
      video: "https://example.com/videos/manufacturing-process.mp4",
      image: "https://images.unsplash.com/photo-1581955957646-b8c389935f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    author: 'Admin',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '3 min read'
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };
  
  const handleAddPost = () => {
    if (!newPost.title || !newPost.content) {
      alert('Please fill in the title and content fields');
      return;
    }
    
    const newId = Math.max(...posts.map(p => p.id)) + 1;
    const postToAdd: BlogPost = {
      id: newId,
      title: newPost.title || '',
      content: newPost.content || '',
      author: newPost.author || 'Admin',
      date: newPost.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: newPost.readTime || '3 min read',
      image: imagePreview || undefined,
      video: videoPreview || undefined
    };
    
    setPosts([postToAdd, ...posts]);
    setNewPost({
      title: '',
      content: '',
      author: 'Admin',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '3 min read'
    });
    setImageFile(null);
    setVideoFile(null);
    setImagePreview(null);
    setVideoPreview(null);
    setShowAddForm(false);
  };
  
  const handleDeletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold text-white">CMTEE Blog</h1>
        </div>
        
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
        >
          <Plus className="h-4 w-4 mr-2" /> New Post
        </button>
      </div>
      
      {showAddForm && (
        <div className="bg-gray-900 p-6 mb-12 border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-6">Create New Blog Post</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                Title*
              </label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                placeholder="Enter post title"
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                Content*
              </label>
              <textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                rows={6}
                className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                placeholder="Write your blog post content here..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={newPost.author}
                  onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                  className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label htmlFor="readTime" className="block text-sm font-medium text-gray-300 mb-1">
                  Read Time
                </label>
                <input
                  type="text"
                  id="readTime"
                  value={newPost.readTime}
                  onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                  className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Featured Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-700 relative">
                  {imagePreview ? (
                    <div className="w-full relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="max-h-48 mx-auto"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                        }}
                        className="absolute top-0 right-0 bg-black/70 p-1 rounded-full"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Image className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-400">
                        <label htmlFor="image-upload" className="relative cursor-pointer bg-black px-3 py-2 rounded-sm font-medium text-pink-500 hover:text-pink-400">
                          <span>Upload image</span>
                          <input id="image-upload" name="image-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                        </label>
                        <p className="pl-1 pt-2">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Video
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-700 relative">
                  {videoPreview ? (
                    <div className="w-full relative">
                      <video 
                        src={videoPreview} 
                        controls 
                        className="max-h-48 mx-auto"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setVideoFile(null);
                          setVideoPreview(null);
                        }}
                        className="absolute top-0 right-0 bg-black/70 p-1 rounded-full"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Video className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-400">
                        <label htmlFor="video-upload" className="relative cursor-pointer bg-black px-3 py-2 rounded-sm font-medium text-pink-500 hover:text-pink-400">
                          <span>Upload video</span>
                          <input id="video-upload" name="video-upload" type="file" className="sr-only" onChange={handleVideoChange} accept="video/*" />
                        </label>
                        <p className="pl-1 pt-2">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">MP4, WebM up to 100MB</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddPost}
                className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                Publish Post
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Featured Post */}
      {posts.find(post => post.featured) && (
        <div className="mb-12">
          {posts.filter(post => post.featured).map(post => (
            <div key={post.id} className="relative">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <span className="bg-pink-500 text-white px-2 py-1 text-xs font-bold uppercase tracking-wider mr-3">
                    Featured
                  </span>
                  <span className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{post.title}</h2>
                <p className="text-gray-300 mb-6 max-w-3xl line-clamp-3">{post.content}</p>
                
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:from-pink-600 hover:to-blue-600">
                    Read More
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="px-4 py-3 border border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.filter(post => !post.featured).map(post => (
          <div key={post.id} className="bg-gray-900/50 border border-gray-800 overflow-hidden group">
            <div className="relative aspect-w-16 aspect-h-9">
              {post.video ? (
                <video 
                  src={post.video} 
                  controls 
                  className="w-full h-full object-cover"
                />
              ) : post.image ? (
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">CMTEE BRAND</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <span className="flex items-center mr-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center mr-3">
                  <User className="h-3 w-3 mr-1" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>
              
              <div className="flex justify-between items-center">
                <button className="text-pink-500 font-medium hover:text-pink-400 flex items-center">
                  Read More
                </button>
                
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;