import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface PressItem {
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  link: string;
  image?: string;
}

const Press: React.FC = () => {
  const pressItems: PressItem[] = [
    {
      title: "CMTEE BRAND Revolutionizes Luxury T-Shirts with Egyptian Cotton",
      publication: "Fashion Forward",
      date: "March 15, 2025",
      excerpt: "The new premium t-shirt brand is making waves with their commitment to quality and sustainability, offering 100% Egyptian cotton shirts that redefine comfort.",
      link: "#",
      image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How CMTEE BRAND is Changing the Sustainable Fashion Game",
      publication: "Eco Style Magazine",
      date: "February 28, 2025",
      excerpt: "With innovative water conservation techniques and ethical manufacturing practices, this emerging brand proves that luxury and sustainability can coexist.",
      link: "#",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Perfect T-Shirt: CMTEE BRAND's Quest for Excellence",
      publication: "Men's Style Today",
      date: "January 12, 2025",
      excerpt: "After testing dozens of premium t-shirts, our editors unanimously agreed that CMTEE BRAND's Egyptian cotton tees offer unparalleled comfort and durability.",
      link: "#",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CMTEE BRAND Launches Innovative Hieroglyphic Customization",
      publication: "Digital Fashion Week",
      date: "December 5, 2024",
      excerpt: "The brand's new online tool allows customers to create personalized t-shirts with their names translated into authentic Egyptian hieroglyphics.",
      link: "#"
    },
    {
      title: "From Startup to Success: The CMTEE BRAND Story",
      publication: "Entrepreneur Spotlight",
      date: "November 18, 2024",
      excerpt: "Founder Alex Morgan shares how a frustration with low-quality t-shirts led to the creation of one of fashion's fastest-growing premium basics brands.",
      link: "#"
    },
    {
      title: "CMTEE BRAND Announces Partnership with Egyptian Cotton Producers",
      publication: "Textile Industry News",
      date: "October 3, 2024",
      excerpt: "The direct partnership aims to ensure fair wages for farmers while maintaining the highest quality standards for the brand's luxury t-shirts.",
      link: "#"
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Press & Media</h1>
        
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-gray-300">
            CMTEE BRAND has been featured in various publications and media outlets. Here's a selection of recent press coverage about our brand, products, and sustainability initiatives.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Featured Press Items (with images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressItems.slice(0, 3).map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="group bg-black/30 border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors"
              >
                {item.image && (
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-gray-400">{item.publication} • {item.date}</p>
                  <h3 className="text-white font-medium mt-2 group-hover:text-pink-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{item.excerpt}</p>
                  <div className="mt-4 flex items-center text-pink-500 text-sm font-medium">
                    Read Article <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Additional Press Items (without images) */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">More Press Coverage</h2>
            
            <div className="divide-y divide-gray-800">
              {pressItems.slice(3).map((item, index) => (
                <a 
                  key={index + 3}
                  href={item.link}
                  className="block py-4 hover:bg-black/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium hover:text-pink-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.publication} • {item.date}</p>
                      <p className="text-gray-300 text-sm mt-2">{item.excerpt}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Press Kit Section */}
          <section className="bg-black/30 p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-4">Press Kit</h2>
            <p className="text-gray-300 mb-6">
              For media inquiries or to request our press kit, please contact our PR team. Our press kit includes high-resolution images, brand assets, and detailed information about our products and sustainability initiatives.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
              >
                Download Press Kit
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium text-white hover:bg-gray-800"
              >
                Contact PR Team
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Press;