import React, { useState, useEffect } from 'react';
import { TShirt, Size } from '../types';

interface HieroglyphicDesignerProps {
  addToCart: (product: TShirt, size: string, quantity: number) => void;
}

const HieroglyphicDesigner: React.FC<HieroglyphicDesignerProps> = ({ addToCart }) => {
  const [name, setName] = useState('');
  const [translation, setTranslation] = useState('');
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [selectedColor, setSelectedColor] = useState('White');
  
  const sizes: Size[] = ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];
  const colors = ['White', 'Black', 'Sand', 'Sky Blue'];
  
  // Simple mapping of English letters to hieroglyphic symbols
  const hieroglyphMap: Record<string, string> = {
    'a': '𓄿', 'b': '𓃀', 'c': '𓎡', 'd': '𓂧', 'e': '𓇋', 
    'f': '𓆑', 'g': '𓎼', 'h': '𓉔', 'i': '𓇋', 'j': '𓆓',
    'k': '𓎡', 'l': '𓃭', 'm': '𓅓', 'n': '𓈖', 'o': '𓅱',
    'p': '𓊪', 'q': '𓏘', 'r': '𓂋', 's': '𓋴', 't': '𓏏',
    'u': '𓅱', 'v': '𓆑', 'w': '𓅱', 'x': '𓎡𓋴', 'y': '𓇋',
    'z': '𓊃', ' ': ' '
  };

  // Translate text to hieroglyphics
  const translateToHieroglyphics = (text: string): string => {
    let result = '';
    for (let char of text.toLowerCase()) {
      if (hieroglyphMap[char]) {
        result += hieroglyphMap[char];
      }
    }
    return result || '𓆓𓅱𓈖𓇋𓅱𓂋'; // Default if empty
  };

  useEffect(() => {
    setTranslation(translateToHieroglyphics(name));
  }, [name]);

  const handleAddToCart = () => {
    const customProduct: TShirt = {
      id: 999, // Special ID for custom products
      name: "Custom Hieroglyphic Tee",
      color: selectedColor === 'White' ? "#FFFFFF" : "#000000", // Color code based on selection
      colorName: selectedColor,
      price: 69.99, // Higher price for custom design
      image: selectedColor === 'White' 
        ? "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: `Custom hieroglyphic design with your name: ${name}. Premium 100% Egyptian cotton t-shirt with authentic hieroglyphic translation.`,
      style: "Pyramid"
    };
    
    addToCart(customProduct, selectedSize, 1);
  };

  // Get the appropriate t-shirt image based on selected color
  const getTshirtImage = () => {
    switch(selectedColor) {
      case 'White':
        return "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case 'Black':
        return "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case 'Sand':
        return "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case 'Sky Blue':
        return "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
  };

  // Determine text color based on t-shirt color
  const getTextColor = () => {
    return selectedColor === 'Black' ? 'text-white' : 'text-gray-900';
  };

  return (
    <section id="hieroglyphic-designer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-800">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Design Your Name in Hieroglyphics
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-500"></div>
          </div>
          <p className="mt-4 md:mt-0 max-w-2xl text-gray-400">
            Premium custom design with authentic Egyptian hieroglyphics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column - Preview */}
        <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800 flex flex-col items-center">
          <div className="relative aspect-w-1 aspect-h-1 w-full max-w-md overflow-hidden bg-gray-900 mb-8">
            <img
              src={getTshirtImage()}
              alt="Custom Hieroglyphic T-shirt"
              className="h-full w-full object-cover object-center"
            />
            
            {/* Vertical Cartouche with hieroglyphics - positioned lower on shirt */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '180px' }}>
              <div className="flex flex-col items-center">
                {/* Cartouche outline */}
                <div className="w-10 h-auto min-h-[80px] max-h-[100px] rounded-full border-2 border-[#D4AF37] flex flex-col items-center justify-center px-1 py-2 relative shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                  {/* Top curve of cartouche */}
                  <div className="absolute -top-1.5 left-0 right-0 h-3 border-t-2 border-l-2 border-r-2 rounded-t-full border-[#D4AF37]"></div>
                  
                  {/* Bottom base of cartouche */}
                  <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-14 h-1.5 border-b-2 border-[#D4AF37]"></div>
                  
                  {/* Hieroglyphic text - limit to 5 characters max */}
                  <div className={`text-base ${getTextColor()} writing-mode-vertical`}>
                    {translation.split('').slice(0, 5).map((char, index) => (
                      <div key={index} className="my-0.5">{char}</div>
                    ))}
                  </div>
                </div>
                
                {/* Name below cartouche */}
                <div className={`text-xs font-medium ${selectedColor === 'White' ? 'text-gray-800' : 'text-gray-200'} mt-2 text-center`}>
                  {name || 'Your Name'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md">
            <h3 className="text-lg font-medium text-white mb-4">Hieroglyphic Translation Guide</h3>
            <div className="grid grid-cols-6 gap-2 mb-6">
              {Object.entries(hieroglyphMap).slice(0, 24).map(([letter, symbol]) => (
                letter !== ' ' && (
                  <div key={letter} className="bg-gray-800 p-2 text-center rounded">
                    <div className="text-xl text-white">{symbol}</div>
                    <div className="text-xs text-gray-400 uppercase">{letter}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column - Customizer */}
        <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
          <h3 className="text-xl font-medium text-white mb-6">Customize Your Design</h3>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name or Text
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-black border border-gray-700 rounded-none py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <p className="mt-1 text-xs text-gray-400">For best results, keep your text short (5 characters or less).</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Hieroglyphic Translation
              </label>
              <div className="w-full bg-black/50 border border-gray-700 rounded-none py-4 px-4 text-white min-h-[60px] flex items-center justify-center">
                <span className="text-2xl">{translation.slice(0, 5) || '𓆓𓅱𓈖𓇋𓅱'}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                T-Shirt Color
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 text-sm font-medium border ${
                      selectedColor === color 
                        ? 'border-pink-500 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-white' 
                        : 'border-gray-700 text-gray-400 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 text-sm font-medium border ${
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
            
            <div className="pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-medium text-white">$69.99</span>
                  <span className="ml-2 text-sm text-gray-400">(Regular t-shirts: $59.99)</span>
                </div>
                <div className="text-sm text-gray-400">Premium Design</div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                Add to Cart
              </button>
              
              <p className="mt-4 text-sm text-gray-400">
                Each custom hieroglyphic t-shirt is made with premium 100% Egyptian cotton and features your name translated into authentic hieroglyphics. The design is printed using high-quality techniques that ensure durability and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HieroglyphicDesigner;