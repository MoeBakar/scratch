import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { ArrowLeft, Check } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  cartTotal: number;
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, cartTotal, clearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'address', 
      'city', 'state', 'zipCode', 'country',
      'cardName', 'cardNumber', 'expDate', 'cvv'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Card number validation (simple check for 16 digits)
    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    // Expiration date validation (MM/YY format)
    if (formData.expDate && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expDate)) {
      newErrors.expDate = 'Please use MM/YY format';
    }
    
    // CVV validation (3 or 4 digits)
    if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Process order
      clearCart();
      navigate('/order-confirmation');
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'cmtee50') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoApplied(false);
      setPromoError('Invalid promo code');
    }
  };

  // Calculate discount and final total
  const discount = promoApplied ? cartTotal * 0.5 : 0;
  const shippingCost = 5.00;
  const taxRate = 0.07;
  const subtotalAfterDiscount = cartTotal - discount;
  const taxAmount = subtotalAfterDiscount * taxRate;
  const finalTotal = subtotalAfterDiscount + shippingCost + taxAmount;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Your cart is empty</h1>
          <p className="mt-4 text-lg text-gray-400">Add some items to your cart before checking out.</p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to shopping
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left column - Form */}
          <div className="md:w-2/3">
            <div className="bg-gray-900 p-6 backdrop-blur-sm mb-6">
              <h2 className="text-lg font-medium text-white uppercase tracking-wider mb-4">Contact Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`mt-1 block w-full bg-black border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`mt-1 block w-full bg-black border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                      aria-invalid={errors.lastName ? 'true' : 'false'}
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-white uppercase tracking-wider mb-4">Shipping Information</h2>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                        Street address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.address ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.address ? 'true' : 'false'}
                      />
                      {errors.address && (
                        <p className="mt-2 text-sm text-red-500">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.city ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.city ? 'true' : 'false'}
                      />
                      {errors.city && (
                        <p className="mt-2 text-sm text-red-500">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-300">
                        State / Province
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.state ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.state ? 'true' : 'false'}
                      />
                      {errors.state && (
                        <p className="mt-2 text-sm text-red-500">{errors.state}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-300">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.zipCode ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.zipCode ? 'true' : 'false'}
                      />
                      {errors.zipCode && (
                        <p className="mt-2 text-sm text-red-500">{errors.zipCode}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-300">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-black border border-gray-700 rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-white uppercase tracking-wider mb-4">Payment Information</h2>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-300">
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.cardName ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.cardName ? 'true' : 'false'}
                      />
                      {errors.cardName && (
                        <p className="mt-2 text-sm text-red-500">{errors.cardName}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">
                        Card number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className={`mt-1 block w-full bg-black border ${errors.cardNumber ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.cardNumber ? 'true' : 'false'}
                      />
                      {errors.cardNumber && (
                        <p className="mt-2 text-sm text-red-500">{errors.cardNumber}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="expDate" className="block text-sm font-medium text-gray-300">
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="text"
                        id="expDate"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className={`mt-1 block w-full bg-black border ${errors.expDate ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.expDate ? 'true' : 'false'}
                      />
                      {errors.expDate && (
                        <p className="mt-2 text-sm text-red-500">{errors.expDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-black border ${errors.cvv ? 'border-red-500' : 'border-gray-700'} rounded-none shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm`}
                        aria-invalid={errors.cvv ? 'true' : 'false'}
                      />
                      {errors.cvv && (
                        <p className="mt-2 text-sm text-red-500">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white mr-4"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="md:w-1/3">
            <div className="bg-gray-900 p-6 backdrop-blur-sm sticky top-20">
              <h2 className="text-lg font-medium text-white uppercase tracking-wider mb-4">Order Summary</h2>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-800">
                  {cart.map((item, index) => (
                    <li key={`${item.product.id}-${item.size}-${index}`} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16 border border-gray-800 overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between text-sm font-medium text-white">
                          <h3 className="uppercase tracking-wider">{item.product.name}</h3>
                          <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">{item.product.colorName}</p>
                        <p className="mt-1 text-sm text-gray-400">Style: {item.product.style}</p>
                        <p className="mt-1 text-sm text-gray-400">Size: {item.size} (Qty: {item.quantity})</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promo Code Section */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center">
                  <label htmlFor="promo-code" className="block text-sm font-medium text-gray-300 mr-2">
                    Promo Code:
                  </label>
                  <div className="flex-1 flex">
                    <input
                      type="text"
                      id="promo-code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      placeholder="Enter code"
                      className="flex-1 bg-black border border-gray-700 rounded-none py-1 px-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                    {!promoApplied ? (
                      <button
                        type="button"
                        onClick={applyPromoCode}
                        className="ml-2 px-3 py-1 border border-transparent text-sm font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setPromoApplied(false);
                          setPromoCode('');
                        }}
                        className="ml-2 px-3 py-1 border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
                {promoError && (
                  <p className="mt-2 text-sm text-red-500">{promoError}</p>
                )}
                {promoApplied && (
                  <div className="mt-2 flex items-center text-green-500 text-sm">
                    <Check className="h-4 w-4 mr-1" /> 50% discount applied!
                  </div>
                )}
              </div>

              <div className="border-t border-gray-800 pt-4 mt-6">
                <div className="flex justify-between text-sm">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="font-medium text-white">${cartTotal.toFixed(2)}</p>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-sm mt-2">
                    <p className="text-green-500">Discount (50%)</p>
                    <p className="font-medium text-green-500">-${discount.toFixed(2)}</p>
                  </div>
                )}
                
                <div className="flex justify-between text-sm mt-2">
                  <p className="text-gray-400">Shipping</p>
                  <p className="font-medium text-white">${shippingCost.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <p className="text-gray-400">Tax</p>
                  <p className="font-medium text-white">${taxAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-white mt-4 pt-4 border-t border-gray-800">
                  <p>Total</p>
                  <p>${finalTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;