import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown, ChevronUp, Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import HieroglyphicDesigner from './components/HieroglyphicDesigner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import ProductManager from './pages/ProductManager';
import ShippingReturns from './pages/ShippingReturns';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import Sustainability from './pages/Sustainability';
import Press from './pages/Press';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import { TShirt, CartItem } from './types';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: TShirt, size: string, quantity: number = 1) => {
    setCart(prevCart => {
      // Check if item already exists in cart with same product and size
      const existingItemIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new item to cart
        return [...prevCart, { product, size, quantity }];
      }
    });
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].quantity = newQuantity;
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar cartItemCount={cartItemCount} setCartOpen={setCartOpen} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProductGrid addToCart={addToCart} />
              <HieroglyphicDesigner addToCart={addToCart} />
            </main>
          } />
          <Route path="/checkout" element={
            <Checkout 
              cart={cart} 
              cartTotal={cartTotal} 
              clearCart={clearCart} 
            />
          } />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/admin/products" element={<ProductManager />} />
          
          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Support Pages */}
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/press" element={<Press />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <Cart 
          isOpen={cartOpen} 
          setIsOpen={setCartOpen} 
          cart={cart} 
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          cartTotal={cartTotal}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;