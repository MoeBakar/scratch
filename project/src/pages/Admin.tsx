import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Edit, Trash2, Package, Lock, X, Upload, RefreshCw, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { tshirts } from '../data/products';
import { TShirt } from '../types';
import ImageUploader from '../components/ImageUploader';

const Admin: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [products, setProducts] = useState<TShirt[]>(tshirts);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'inventory' | 'products' | 'blog' | 'settings'>('dashboard');
  const [editingInventory, setEditingInventory] = useState<Record<number, number>>({});
  const [lowStockThreshold, setLowStockThreshold] = useState(10);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [showHeroImageInput, setShowHeroImageInput] = useState(false);
  const [showHeroImageUploader, setShowHeroImageUploader] = useState(false);
  
  // Initialize editing inventory with current values
  useEffect(() => {
    const initialInventory: Record<number, number> = {};
    products.forEach(product => {
      initialInventory[product.id] = product.inventory || 0;
    });
    setEditingInventory(initialInventory);
  }, [products]);
  
  const handleLogin = () => {
    if (password === '$MoeBakkar') {
      setAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid password');
    }
  };
  
  const handleInventoryChange = (productId: number, value: string) => {
    const numValue = parseInt(value) || 0;
    setEditingInventory(prev => ({
      ...prev,
      [productId]: numValue
    }));
  };
  
  const saveInventory = () => {
    // Update products with new inventory values
    const updatedProducts = products.map(product => ({
      ...product,
      inventory: editingInventory[product.id] || 0
    }));
    
    setProducts(updatedProducts);
    
    // In a real app, this would save to a database
    alert('Inventory updated successfully!');
  };
  
  const bulkUpdateInventory = (amount: number) => {
    const newInventory = { ...editingInventory };
    
    products.forEach(product => {
      const currentValue = newInventory[product.id] || 0;
      newInventory[product.id] = Math.max(0, currentValue + amount);
    });
    
    setEditingInventory(newInventory);
  };
  
  const updateHeroImage = () => {
    if (heroImageUrl) {
      // In a real app, this would upload to a server
      // For demo purposes, we'll store in sessionStorage
      sessionStorage.setItem('cmteeHeroImage', heroImageUrl);
      alert('Hero image updated successfully!');
      setShowHeroImageInput(false);
      setHeroImageUrl('');
    }
  };
  
  const handleHeroImageUpload = (imageUrl: string) => {
    // Store the uploaded image in sessionStorage
    sessionStorage.setItem('cmteeHeroImage', imageUrl);
    alert('Hero image updated successfully!');
  };
  
  // Calculate total inventory
  const totalInventory = Object.values(editingInventory).reduce((sum, count) => sum + count, 0);
  
  // Count low stock items
  const lowStockCount = Object.values(editingInventory).filter(count => count <= lowStockThreshold).length;
  
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-gray-900 p-8 max-w-md w-full border border-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">CMTEE BRAND</h1>
            <p className="text-gray-400 mt-2">Admin Access</p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              <div className="flex items-center">
                <Lock className="h-4 w-4 mr-1" /> Password
              </div>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter admin password"
            />
            {passwordError && (
              <p className="mt-2 text-sm text-red-500">{passwordError}</p>
            )}
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full py-2 px-4 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
          >
            Login
          </button>
          
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-gray-400 hover:text-white">
              Return to Store
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-white mr-4">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-white">CMTEE BRAND Admin</h1>
            </div>
            <div>
              <button
                onClick={() => setAuthenticated(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap border-b border-gray-800 mb-6">
          <button
            className={`mr-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'dashboard' 
                ? 'text-white border-pink-500' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`mr-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'inventory' 
                ? 'text-white border-pink-500' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            onClick={() => setActiveTab('inventory')}
          >
            Inventory
          </button>
          <button
            className={`mr-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'products' 
                ? 'text-white border-pink-500' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`mr-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'blog' 
                ? 'text-white border-pink-500' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            onClick={() => setActiveTab('blog')}
          >
            Blog
          </button>
          <button
            className={`mr-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'settings' 
                ? 'text-white border-pink-500' 
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {activeTab === 'dashboard' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                <p className="text-gray-400 mt-1">Overview of your store</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">Total Products</h3>
                  <Package className="h-8 w-8 text-pink-500" />
                </div>
                <p className="text-3xl font-bold text-white mt-2">{products.length}</p>
                <p className="text-sm text-gray-400 mt-1">Products in inventory</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">Total Stock</h3>
                  <Package className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-3xl font-bold text-white mt-2">{totalInventory}</p>
                <p className="text-sm text-gray-400 mt-1">Items in inventory</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">Low Stock</h3>
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-3xl font-bold text-white mt-2">{lowStockCount}</p>
                <p className="text-sm text-gray-400 mt-1">Items below threshold ({lowStockThreshold})</p>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 mb-8">
              <h3 className="text-lg font-medium text-white mb-4">Hero Image Management</h3>
              
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => {
                    setShowHeroImageInput(true);
                    setShowHeroImageUploader(false);
                  }}
                  className={`px-4 py-2 border ${showHeroImageInput ? 'border-pink-500 bg-black' : 'border-gray-700'} text-sm font-medium text-white`}
                >
                  Use Image URL
                </button>
                <button
                  onClick={() => {
                    setShowHeroImageUploader(true);
                    setShowHeroImageInput(false);
                  }}
                  className={`px-4 py-2 border ${showHeroImageUploader ? 'border-pink-500 bg-black' : 'border-gray-700'} text-sm font-medium text-white`}
                >
                  Upload Image
                </button>
              </div>
              
              {showHeroImageInput && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="heroImage" className="block text-sm font-medium text-gray-300 mb-2">
                      Hero Image URL
                    </label>
                    <input
                      type="text"
                      id="heroImage"
                      value={heroImageUrl}
                      onChange={(e) => setHeroImageUrl(e.target.value)}
                      placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                      className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={updateHeroImage}
                      className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                      disabled={!heroImageUrl}
                    >
                      <Upload className="h-4 w-4 mr-2 inline-block" /> Update Hero Image
                    </button>
                    <button
                      onClick={() => setShowHeroImageInput(false)}
                      className="px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              {showHeroImageUploader && (
                <div>
                  <ImageUploader onImageUpload={handleHeroImageUpload} />
                  <button
                    onClick={() => setShowHeroImageUploader(false)}
                    className="px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                </div>
              )}
              
              {!showHeroImageInput && !showHeroImageUploader && (
                <button
                  onClick={() => setShowHeroImageUploader(true)}
                  className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                >
                  <Upload className="h-4 w-4 mr-2 inline-block" /> Change Hero Image
                </button>
              )}
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/admin/products"
                  className="bg-black/30 border border-gray-800 p-4 hover:bg-black/50 transition-colors"
                >
                  <h4 className="text-white font-medium">Product Manager</h4>
                  <p className="text-sm text-gray-400 mt-1">Add or edit products</p>
                </Link>
                
                <button
                  onClick={() => setActiveTab('inventory')}
                  className="bg-black/30 border border-gray-800 p-4 hover:bg-black/50 transition-colors text-left"
                >
                  <h4 className="text-white font-medium">Inventory Manager</h4>
                  <p className="text-sm text-gray-400 mt-1">Update stock levels</p>
                </button>
                
                <Link
                  to="/blog"
                  className="bg-black/30 border border-gray-800 p-4 hover:bg-black/50 transition-colors"
                >
                  <h4 className="text-white font-medium">Blog Manager</h4>
                  <p className="text-sm text-gray-400 mt-1">Create and edit blog posts</p>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'inventory' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Inventory Management</h2>
                <p className="text-gray-400 mt-1">Update stock levels for all products</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <div className="flex items-center mr-4">
                  <span className="text-sm text-gray-400 mr-2">Low stock threshold:</span>
                  <input
                    type="number"
                    min="1"
                    value={lowStockThreshold}
                    onChange={(e) => setLowStockThreshold(parseInt(e.target.value) || 10)}
                    className="w-16 bg-black border border-gray-700 rounded-none py-1 px-2 text-white text-center focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>
                
                <button
                  onClick={() => bulkUpdateInventory(-1)}
                  className="p-2 bg-gray-800 text-gray-400 hover:text-white"
                  title="Decrease all by 1"
                >
                  -1
                </button>
                <button
                  onClick={() => bulkUpdateInventory(1)}
                  className="p-2 bg-gray-800 text-gray-400 hover:text-white"
                  title="Increase all by 1"
                >
                  +1
                </button>
                <button
                  onClick={() => bulkUpdateInventory(-5)}
                  className="p-2 bg-gray-800 text-gray-400 hover:text-white"
                  title="Decrease all by 5"
                >
                  -5
                </button>
                <button
                  onClick={() => bulkUpdateInventory(5)}
                  className="p-2 bg-gray-800 text-gray-400 hover:text-white"
                  title="Increase all by 5"
                >
                  +5
                </button>
                <button
                  onClick={() => {
                    const initialInventory: Record<number, number> = {};
                    products.forEach(product => {
                      initialInventory[product.id] = product.inventory || 0;
                    });
                    setEditingInventory(initialInventory);
                  }}
                  className="p-2 bg-gray-800 text-gray-400 hover:text-white"
                  title="Reset changes"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Inventory Table */}
            <div className="bg-gray-900 border border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-800/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 bg-gray-800/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Style</th>
                      <th className="px-6 py-3 bg-gray-800/50 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Color</th>
                      <th className="px-6 py-3 bg-gray-800/50 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Inventory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{product.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.style}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.colorName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <input
                            type="number"
                            min="0"
                            value={editingInventory[product.id] || 0}
                            onChange={(e) => handleInventoryChange(product.id, e.target.value)}
                            className={`w-20 bg-black border text-right py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 ${
                              (editingInventory[product.id] || 0) <= lowStockThreshold 
                                ? 'text-yellow-500 border-yellow-900' 
                                : 'text-white border-gray-700'
                            }`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={saveInventory}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                <Save className="h-5 w-5 mr-2" /> Save Inventory Changes
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'products' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Product Management</h2>
                <p className="text-gray-400 mt-1">Manage your product inventory and details</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Link
                  to="/admin/products"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Product
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Style
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Inventory
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="h-10 w-10 object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">{product.name}</div>
                              <div className="text-xs text-gray-400 truncate max-w-xs">{product.description.substring(0, 50)}...</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {product.style}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div 
                              className="h-4 w-4 rounded-full mr-2" 
                              style={{ backgroundColor: product.color }}
                            ></div>
                            <span className="text-sm text-white">{product.colorName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            (product.inventory || 0) <= 5 ? 'bg-red-900 text-red-200' : 
                            (product.inventory || 0) <= 10 ? 'bg-yellow-900 text-yellow-200' : 
                            'bg-green-900 text-green-200'
                          }`}>
                            {product.inventory || 0} in stock
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link 
                            to={`/admin/products?edit=${product.id}`}
                            className="text-pink-500 hover:text-pink-400 mr-4"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button 
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'blog' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Blog Management</h2>
                <p className="text-gray-400 mt-1">Create and manage your blog posts</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                >
                  <Plus className="h-4 w-4 mr-2" /> New Blog Post
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-8 text-center">
              <h3 className="text-lg font-medium text-white mb-2">Blog Management</h3>
              <p className="text-gray-400 mb-6">You can create and manage blog posts directly from the Blog page</p>
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                Go to Blog Page
              </Link>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Settings</h2>
                <p className="text-gray-400 mt-1">Configure your store settings</p>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6">
              <h3 className="text-lg font-medium text-white mb-6">Store Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Low Stock Threshold
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={lowStockThreshold}
                      onChange={(e) => setLowStockThreshold(parseInt(e.target.value) || 10)}
                      className="w-24 bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                    <span className="ml-2 text-sm text-gray-400">items</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    Products with inventory below this threshold will be marked as low stock.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-medium text-white mb-4">Hero Image Management</h4>
                  
                  <div className="flex space-x-4 mb-4">
                    <button
                      onClick={() => {
                        setShowHeroImageInput(true);
                        setShowHeroImageUploader(false);
                      }}
                      className={`px-4 py-2 border ${showHeroImageInput ? 'border-pink-500 bg-black' : 'border-gray-700'} text-sm font-medium text-white`}
                    >
                      Use Image URL
                    </button>
                    <button
                      onClick={() => {
                        setShowHeroImageUploader(true);
                        setShowHeroImageInput(false);
                      }}
                      className={`px-4 py-2 border ${showHeroImageUploader ? 'border-pink-500 bg-black' : 'border-gray-700'} text-sm font-medium text-white`}
                    >
                      Upload Image
                    </button>
                  </div>
                  
                  {showHeroImageInput && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="heroImageSettings" className="block text-sm font-medium text-gray-300 mb-2">
                          Hero Image URL
                        </label>
                        <input
                          type="text"
                          id="heroImageSettings"
                          value={heroImageUrl}
                          onChange={(e) => setHeroImageUrl(e.target.value)}
                          placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                          className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                      </div>
                      
                      <div className="flex space-x-4">
                        <button
                          onClick={updateHeroImage}
                          className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                          disabled={!heroImageUrl}
                        >
                          <Upload className="h-4 w-4 mr-2 inline-block" /> Update Hero Image
                        </button>
                        <button
                          onClick={() => setShowHeroImageInput(false)}
                          className="px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {showHeroImageUploader && (
                    <div>
                      <ImageUploader onImageUpload={handleHeroImageUpload} />
                      <button
                        onClick={() => setShowHeroImageUploader(false)}
                        className="px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  
                  {!showHeroImageInput && !showHeroImageUploader && (
                    <button
                      onClick={() => setShowHeroImageUploader(true)}
                      className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                    >
                      <Upload className="h-4 w-4 mr-2 inline-block" /> Change Hero Image
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;