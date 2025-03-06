import React from 'react';
import { X, Plus, Minus, ArrowRight, Package } from 'lucide-react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cart: CartItem[];
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  cartTotal: number;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  setIsOpen, 
  cart, 
  removeFromCart, 
  updateQuantity,
  cartTotal 
}) => {
  return (
    <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 overflow-hidden`}>
        <div className={`absolute inset-0 bg-black bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)}></div>
        
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className={`w-screen max-w-md transform transition ease-in-out duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col bg-black border-l border-gray-800">
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-white uppercase tracking-wider">Shopping cart</h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button
                      type="button"
                      className="-m-2 p-2 text-gray-400 hover:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-400">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-800">
                        {cart.map((item, index) => (
                          <li key={`${item.product.id}-${item.size}-${index}`} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-800 overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-white">
                                  <h3 className="text-sm uppercase tracking-wider">{item.product.name}</h3>
                                  <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-400">{item.product.colorName}</p>
                                <p className="mt-1 text-sm text-gray-400">Style: {item.product.style}</p>
                                <p className="mt-1 text-sm text-gray-400">Size: {item.size}</p>
                                
                                {/* Inventory status */}
                                {item.product.inventory !== undefined && (
                                  <p className="mt-1 text-xs flex items-center">
                                    <Package className="h-3 w-3 mr-1 text-gray-400" />
                                    <span className={`${
                                      item.product.inventory <= 5 ? 'text-red-500' : 
                                      item.product.inventory <= 10 ? 'text-yellow-500' : 
                                      'text-green-500'
                                    }`}>
                                      {item.product.inventory} in stock
                                    </span>
                                  </p>
                                )}
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center border border-gray-800">
                                  <button 
                                    className="p-1 text-gray-400 hover:text-white"
                                    onClick={() => updateQuantity(index, item.quantity - 1)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="mx-2 text-gray-400 text-xs">Qty {item.quantity}</span>
                                  <button 
                                    className="p-1 text-gray-400 hover:text-white"
                                    onClick={() => updateQuantity(index, item.quantity + 1)}
                                    disabled={item.product.inventory !== undefined && item.quantity >= item.product.inventory}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-gray-400 hover:text-white text-xs"
                                    onClick={() => removeFromCart(index)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-800 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-white">
                  <p>Subtotal</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-400">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <Link
                    to="/checkout"
                    className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-black bg-white hover:bg-gray-200 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-400">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="text-white font-medium hover:text-gray-300 inline-flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Continue Shopping <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;