import React, { useState, useRef, useEffect } from 'react';
import { Heart, Plus, ShoppingCart, Package } from 'lucide-react';
import { TShirt, Size } from '../types';

interface ProductCardProps {
  product: TShirt;
  addToCart: (product: TShirt, size: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [isWishlist, setIsWishlist] = useState(false);
  
  const sizes: Size[] = ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
  };

  // Determine inventory status color
  const getInventoryStatusColor = () => {
    if (!product.inventory) return 'text-gray-400';
    if (product.inventory <= 10) return 'text-red-500';
    if (product.inventory <= 20) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="group relative product-card-hover">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-20"></div>
        <img
          src={product.image}
          alt={`${product.name} - ${product.colorName}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-blue-500/30 mix-blend-overlay"></div>
        
        <button 
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition-colors"
        >
          <Heart className={`h-5 w-5 ${isWishlist ? 'fill-white text-white' : 'text-gray-300'}`} />
        </button>
        
        {/* Inventory badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center">
          <Package className={`h-3 w-3 mr-1 ${getInventoryStatusColor()}`} />
          <span className={`text-xs font-medium ${getInventoryStatusColor()}`}>
            {product.inventory || 0} in stock
          </span>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-white text-black hover:bg-gray-200 shadow-lg"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-white text-sm font-medium uppercase tracking-wider">{product.name}</h3>
            <p className="mt-1 text-gray-400 text-xs">{product.style} · {product.colorName}</p>
          </div>
          <p className="text-white font-medium">${product.price.toFixed(2)}</p>
        </div>
        
        {/* Size buttons */}
        <div className="mt-3">
          <p className="text-xs text-gray-400 mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-1">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-2 py-1 text-xs font-medium border ${
                  selectedSize === size 
                    ? 'border-pink-500 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-white' 
                    : 'border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Checkout button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-colors"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;