import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">About CMTEE BRAND</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                CMTEE BRAND was founded in 2023 with a simple mission: to create the perfect t-shirt using the world's finest cotton. Our journey began when our founder, after years of frustration with low-quality t-shirts that lost their shape and comfort after just a few washes, decided to create something better.
              </p>
              <p className="text-gray-300 mt-4">
                Drawing inspiration from ancient Egyptian craftsmanship and their mastery of cotton cultivation, we set out to create a modern t-shirt with the luxurious feel of authentic Egyptian cotton. After months of research, design, and testing, CMTEE BRAND was born.
              </p>
              <p className="text-gray-300 mt-4">
                Today, we're proud to offer premium Egyptian cotton t-shirts that combine timeless style with unparalleled comfort and durability. Each t-shirt is crafted with attention to detail and a commitment to quality that honors the ancient tradition of Egyptian cotton.
              </p>
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 bg-black/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Egyptian cotton field" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-black/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="T-shirt manufacturing" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Our Materials</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Egyptian cotton is renowned worldwide for its exceptional quality. Grown in the fertile Nile River Valley, it produces fibers that are longer, stronger, and finer than regular cotton. These extra-long staple fibers create a fabric that is:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li>Incredibly soft and smooth to the touch</li>
                <li>Highly breathable, keeping you cool in any weather</li>
                <li>Exceptionally durable, maintaining its quality wash after wash</li>
                <li>Resistant to pilling and fading</li>
                <li>Hypoallergenic and ideal for sensitive skin</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We source our cotton directly from certified Egyptian cotton producers who maintain the highest standards of quality and ethical farming practices. Every batch is carefully inspected to ensure it meets our exacting standards before being transformed into the luxurious t-shirts you know and love.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Our Commitment</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                At CMTEE BRAND, we believe that quality should never be compromised. We're committed to:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li><strong>Quality:</strong> Using only the finest materials and craftsmanship in every product we create.</li>
                <li><strong>Sustainability:</strong> Implementing eco-friendly practices throughout our supply chain to minimize our environmental impact.</li>
                <li><strong>Ethical Production:</strong> Ensuring fair wages and safe working conditions for everyone involved in creating our products.</li>
                <li><strong>Customer Satisfaction:</strong> Providing exceptional service and standing behind everything we sell.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We're not just selling t-shirts; we're offering an experience of luxury, comfort, and style that we believe everyone deserves.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-black/30 p-4 border border-gray-800">
                <div className="aspect-w-1 aspect-h-1 bg-gray-800 mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="CEO portrait" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-white font-medium">Alex Morgan</h3>
                <p className="text-gray-400 text-sm">Founder & CEO</p>
              </div>
              
              <div className="bg-black/30 p-4 border border-gray-800">
                <div className="aspect-w-1 aspect-h-1 bg-gray-800 mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Designer portrait" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-white font-medium">Sarah Chen</h3>
                <p className="text-gray-400 text-sm">Lead Designer</p>
              </div>
              
              <div className="bg-black/30 p-4 border border-gray-800">
                <div className="aspect-w-1 aspect-h-1 bg-gray-800 mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Production Manager portrait" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-white font-medium">David Patel</h3>
                <p className="text-gray-400 text-sm">Production Manager</p>
              </div>
            </div>
          </section>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <h3 className="text-lg font-medium text-white mb-4">Join the CMTEE Family</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the luxury of Egyptian cotton and discover why our customers call our t-shirts the most comfortable they've ever worn.
            </p>
            
            <Link 
              to="/#products" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;