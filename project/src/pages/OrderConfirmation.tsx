import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-gray-900 p-10 backdrop-blur-sm">
          <div className="text-center">
            <CheckCircle className="h-20 w-20 text-white mx-auto" />
            <h1 className="mt-4 text-3xl font-extrabold text-white">Thank you for your order!</h1>
            <p className="mt-2 text-lg text-gray-400">
              Your order has been placed and is being processed.
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              Order #{orderNumber}
            </p>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-10">
            <h2 className="text-lg font-medium text-white uppercase tracking-wider">Order details</h2>

            <div className="mt-4 bg-black/50 p-6">
              <p className="text-sm text-gray-400">
                We've sent a confirmation email to your email address with all the details of your order.
                You will receive another email when your order ships.
              </p>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">Estimated delivery</h3>
                <p className="mt-1 text-sm text-gray-400">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-10">
            <h2 className="text-lg font-medium text-white uppercase tracking-wider">Customer support</h2>
            <div className="mt-4 text-sm text-gray-400">
              <p>
                If you have any questions about your order, please contact our customer support team:
              </p>
              <p className="mt-2">
                <span className="font-medium text-white">Email:</span> support@cmteebrand.com
              </p>
              <p className="mt-1">
                <span className="font-medium text-white">Phone:</span> +1 (800) 123-4567
              </p>
              <p className="mt-1">
                <span className="font-medium text-white">Hours:</span> Monday-Friday, 9am-5pm EST
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Continue Shopping <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;