import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-xl font-bold tracking-tighter text-white">CMTEE BRAND</h2>
            <p className="text-gray-400 text-base">
              Premium 100% Egyptian cotton t-shirts designed for comfort and durability.
              Luxury essentials for your everyday wardrobe.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/#products" className="text-base text-gray-400 hover:text-white">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/new-arrivals" className="text-base text-gray-400 hover:text-white">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/best-sellers" className="text-base text-gray-400 hover:text-white">
                      Best Sellers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/contact" className="text-base text-gray-400 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-400 hover:text-white">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping-returns" className="text-base text-gray-400 hover:text-white">
                      Shipping & Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-400 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/sustainability" className="text-base text-gray-400 hover:text-white">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link to="/press" className="text-base text-gray-400 hover:text-white">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/privacy-policy" className="text-base text-gray-400 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="text-base text-gray-400 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; 2025 CMTEE BRAND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;