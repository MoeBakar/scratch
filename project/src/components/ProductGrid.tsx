import React, { useState } from 'react';
import { tshirts } from '../data/products';
import ProductCard from './ProductCard';
import { TShirt, TShirtStyle } from '../types';
import { Package } from 'lucide-react';

interface ProductGridProps {
  addToCart: (product: TShirt, size: string, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<TShirtStyle | null>(null);
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = tshirts.filter(tshirt => {
    let matches = true;
    
    if (selectedColor) {
      matches = matches && tshirt.colorName === selectedColor;
    }
    
    if (selectedStyle) {
      matches = matches && tshirt.style === selectedStyle;
    }
    
    if (showInStock) {
      matches = matches && (tshirt.inventory && tshirt.inventory > 0);
    }
    
    return matches;
  });

  const uniqueColors = Array.from(new Set(tshirts.map(tshirt => tshirt.colorName)));
  const uniqueStyles: TShirtStyle[] = ["Crew Neck", "V-Neck", "Pyramid"];
  
  // Calculate total inventory
  const totalInventory = tshirts.reduce((sum, tshirt) => sum + (tshirt.inventory || 0), 0);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Premium Collection
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Package className="h-5 w-5 text-gray-400 mr-2" />
            <p className="text-gray-400">
              <span className="font-medium text-white">{totalInventory}</span> items in stock
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gray-900/50 p-6 backdrop-blur-sm border border-gray-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-3">Style</h3>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${
                  selectedStyle === null 
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' 
                    : 'bg-transparent text-gray-300 border border-gray-700'
                }`}
                onClick={() => setSelectedStyle(null)}
              >
                All Styles
              </button>
              {uniqueStyles.map(style => (
                <button
                  key={style}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${
                    selectedStyle === style 
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' 
                      : 'bg-transparent text-gray-300 border border-gray-700'
                  }`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-3">Color</h3>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${
                  selectedColor === null 
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' 
                    : 'bg-transparent text-gray-300 border border-gray-700'
                }`}
                onClick={() => setSelectedColor(null)}
              >
                Choose Color
              </button>
              {uniqueColors.map(color => (
                <button
                  key={color}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${
                    selectedColor === color 
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' 
                      : 'bg-transparent text-gray-300 border border-gray-700'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showInStock}
                onChange={() => setShowInStock(!showInStock)}
                className="sr-only"
              />
              <span className={`w-10 h-5 ${showInStock ? 'bg-pink-500' : 'bg-gray-700'} rounded-full transition-colors duration-200 flex items-center`}>
                <span className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${showInStock ? 'translate-x-5' : 'translate-x-1'}`}></span>
              </span>
              <span className="ml-2 text-sm text-gray-300">Show in-stock only</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((tshirt) => (
            <div key={tshirt.id} className="neon-frame">
              <ProductCard product={tshirt} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-400 text-lg">No products match your current filters.</p>
            <button
              onClick={() => {
                setSelectedColor(null);
                setSelectedStyle(null);
                setShowInStock(false);
              }}
              className="mt-4 px-6 py-2 border border-gray-700 text-white hover:bg-gray-800"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;