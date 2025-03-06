import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2, Package } from 'lucide-react';
import { tshirts } from '../data/products';
import { TShirt, TShirtStyle } from '../types';
import ImageUploader from '../components/ImageUploader';

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<TShirt[]>(tshirts);
  const [editingProduct, setEditingProduct] = useState<TShirt | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newProduct, setNewProduct] = useState<Partial<TShirt>>({
    name: '',
    color: '#000000',
    colorName: '',
    price: 49.99,
    image: '',
    description: '',
    style: 'Crew Neck',
    inventory: 20
  });

  const handleImageUpload = (imageUrl: string, productId?: number) => {
    if (productId) {
      // Update existing product
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === productId ? { ...product, image: imageUrl } : product
        )
      );
    } else {
      // Update new product form
      setNewProduct(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.colorName || !newProduct.image) {
      alert('Please fill in all required fields and upload an image');
      return;
    }

    const newId = Math.max(...products.map(p => p.id)) + 1;
    const productToAdd: TShirt = {
      id: newId,
      name: newProduct.name || '',
      color: newProduct.color || '#000000',
      colorName: newProduct.colorName || '',
      price: newProduct.price || 49.99,
      image: newProduct.image || '',
      description: newProduct.description || '',
      style: (newProduct.style as TShirtStyle) || 'Crew Neck',
      inventory: newProduct.inventory || 0
    };

    setProducts([...products, productToAdd]);
    setNewProduct({
      name: '',
      color: '#000000',
      colorName: '',
      price: 49.99,
      image: '',
      description: '',
      style: 'Crew Neck',
      inventory: 20
    });
    setShowAddForm(false);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleUpdateInventory = (id: number, newInventory: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === id ? { ...product, inventory: newInventory } : product
      )
    );
  };

  const styles: TShirtStyle[] = ['Crew Neck', 'V-Neck', 'Pyramid'];

  // Calculate total inventory
  const totalInventory = products.reduce((sum, product) => sum + (product.inventory || 0), 0);

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to store
            </Link>
            <h1 className="text-2xl font-bold text-white">Product Manager</h1>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 flex items-center bg-gray-900 px-3 py-1 rounded-sm">
              <Package className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-300">Total Inventory: <span className="font-medium text-white">{totalInventory}</span></span>
            </div>
            
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Product
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="bg-gray-900 p-6 mb-8 border border-gray-800">
            <h2 className="text-lg font-medium text-white mb-4">Add New Product</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Product Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="colorName" className="block text-sm font-medium text-gray-300 mb-1">
                    Color Name*
                  </label>
                  <input
                    type="text"
                    id="colorName"
                    value={newProduct.colorName}
                    onChange={(e) => setNewProduct({...newProduct, colorName: e.target.value})}
                    className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="color" className="block text-sm font-medium text-gray-300 mb-1">
                    Color (Hex)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="color"
                      id="color"
                      value={newProduct.color}
                      onChange={(e) => setNewProduct({...newProduct, color: e.target.value})}
                      className="h-10 w-10 border-0 p-0 mr-2"
                    />
                    <input
                      type="text"
                      value={newProduct.color}
                      onChange={(e) => setNewProduct({...newProduct, color: e.target.value})}
                      className="flex-1 bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                      step="0.01"
                      min="0"
                      className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inventory" className="block text-sm font-medium text-gray-300 mb-1">
                      Inventory
                    </label>
                    <input
                      type="number"
                      id="inventory"
                      value={newProduct.inventory}
                      onChange={(e) => setNewProduct({...newProduct, inventory: parseInt(e.target.value)})}
                      min="0"
                      className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <ImageUploader onImageUpload={(url) => handleImageUpload(url)} />
                
                <div className="mb-4">
                  <label htmlFor="style" className="block text-sm font-medium text-gray-300 mb-1">
                    Style
                  </label>
                  <select
                    id="style"
                    value={newProduct.style}
                    onChange={(e) => setNewProduct({...newProduct, style: e.target.value as TShirtStyle})}
                    className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                  >
                    {styles.map(style => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    rows={3}
                    className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowAddForm(false)}
                className="mr-4 px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                Add Product
              </button>
            </div>
          </div>
        )}

        <div className="bg-gray-900 p-6 border border-gray-800">
          <h2 className="text-lg font-medium text-white mb-4">Product List</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Style
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
                      <div className="h-16 w-16 bg-gray-800 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2">
                        <ImageUploader 
                          onImageUpload={(url) => handleImageUpload(url, product.id)} 
                          productId={product.id}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{product.name}</div>
                      <div className="text-xs text-gray-400 mt-1 line-clamp-2">{product.description}</div>
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
                      {product.style}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="number"
                          min="0"
                          value={product.inventory || 0}
                          onChange={(e) => handleUpdateInventory(product.id, parseInt(e.target.value))}
                          className="w-16 bg-black border border-gray-700 rounded-none py-1 px-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                        <span className={`ml-2 text-xs font-medium ${
                          (product.inventory || 0) <= 5 ? 'text-red-500' : 
                          (product.inventory || 0) <= 10 ? 'text-yellow-500' : 
                          'text-green-500'
                        }`}>
                          {(product.inventory || 0) <= 5 ? 'Low' : 
                           (product.inventory || 0) <= 10 ? 'Medium' : 
                           'Good'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-gray-400 hover:text-white mr-3"
                        onClick={() => setEditingProduct(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => handleDeleteProduct(product.id)}
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
    </div>
  );
};

export default ProductManager;