import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, RotateCcw, Clock, CreditCard } from 'lucide-react';

const ShippingReturns: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Shipping & Returns</h1>
        
        <div className="space-y-12">
          {/* Shipping Section */}
          <section>
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Shipping Information</h2>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Shipping Methods & Timeframes</h3>
                <div className="bg-black/30 p-4 border border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-4">
                      <p className="font-medium text-white">Standard Shipping</p>
                      <p className="text-sm text-gray-400">5-7 business days</p>
                      <p className="text-sm text-gray-400">$5.00</p>
                    </div>
                    <div className="border-b md:border-b-0 md:border-r border-gray-700 py-4 md:py-0 md:px-4">
                      <p className="font-medium text-white">Express Shipping</p>
                      <p className="text-sm text-gray-400">2-3 business days</p>
                      <p className="text-sm text-gray-400">$15.00</p>
                    </div>
                    <div className="pt-4 md:pt-0 md:pl-4">
                      <p className="font-medium text-white">Overnight Shipping</p>
                      <p className="text-sm text-gray-400">Next business day</p>
                      <p className="text-sm text-gray-400">$25.00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Free Shipping</h3>
                <p>Orders over $100 qualify for free standard shipping within the continental United States.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">International Shipping</h3>
                <p>We ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs fees, duties, and taxes are the responsibility of the recipient and are not included in the shipping cost.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Order Tracking</h3>
                <p>Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account or contacting our customer service team.</p>
              </div>
            </div>
          </section>
          
          {/* Returns Section */}
          <section>
            <div className="flex items-center mb-4">
              <RotateCcw className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Returns & Exchanges</h2>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Return Policy</h3>
                <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 30 days of delivery for a full refund or exchange.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Return Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
                  <li>Custom hieroglyphic t-shirts are final sale and cannot be returned unless there is a manufacturing defect.</li>
                  <li>Include your order number and reason for return with your package.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How to Return</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Contact our customer service team to initiate a return.</li>
                  <li>Print the return label that will be emailed to you.</li>
                  <li>Package the item(s) securely with all original packaging.</li>
                  <li>Drop off the package at your nearest postal service location.</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Refund Process</h3>
                <p>Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method used for the purchase.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Exchanges</h3>
                <p>If you need a different size or color, please return your original purchase for a refund and place a new order for the desired item. This ensures the fastest processing time.</p>
              </div>
            </div>
          </section>
          
          {/* Additional Information */}
          <section>
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Payment & Security</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed and your information is encrypted using industry-standard SSL technology.</p>
              
              <div className="bg-black/30 p-4 border border-gray-800 flex flex-wrap gap-4 justify-center">
                <div className="text-center px-4">
                  <div className="text-white font-medium mb-1">Visa</div>
                  <div className="text-xs text-gray-400">Credit/Debit</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-white font-medium mb-1">Mastercard</div>
                  <div className="text-xs text-gray-400">Credit/Debit</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-white font-medium mb-1">American Express</div>
                  <div className="text-xs text-gray-400">Credit/Debit</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-white font-medium mb-1">PayPal</div>
                  <div className="text-xs text-gray-400">Online Payment</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-white font-medium mb-1">Apple Pay</div>
                  <div className="text-xs text-gray-400">Mobile Payment</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">If you have any questions about shipping, returns, or exchanges, please don't hesitate to contact our customer service team.</p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;