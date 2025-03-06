import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartItemCount: number;
  setCartOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, setCartOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tighter text-white">CMTEE BRAND</Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-10">
              <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider">
                Home
              </Link>
              <a href="#products" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider">
                Shop
              </a>
              <Link to="/blog" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider">
                Blog
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="p-2 text-gray-300 hover:text-white relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-wider"
          >
            Home
          </Link>
          <a
            href="#products"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-wider"
          >
            Shop
          </a>
          <Link
            to="/blog"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-wider"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-wider"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium uppercase tracking-wider"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;