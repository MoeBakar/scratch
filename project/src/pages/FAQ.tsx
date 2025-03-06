import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const faqItems: FAQItem[] = [
    {
      question: "What makes your Egyptian cotton t-shirts special?",
      answer: "Our t-shirts are made from 100% authentic Egyptian cotton, known for its exceptional softness, breathability, and durability. Egyptian cotton has longer fibers than regular cotton, resulting in a smoother, more luxurious fabric that gets better with each wash.",
      category: "products"
    },
    {
      question: "How should I care for my Egyptian cotton t-shirt?",
      answer: "For best results, machine wash cold with like colors, use mild detergent, and avoid bleach. Tumble dry on low or lay flat to dry. Iron on low heat if needed. Following these care instructions will help maintain the quality and extend the life of your t-shirt.",
      category: "products"
    },
    {
      question: "Do your t-shirts shrink after washing?",
      answer: "Our t-shirts are pre-shrunk during the manufacturing process to minimize shrinkage. However, like all cotton products, some minor shrinkage (approximately 3-5%) may occur after the first wash. We recommend following the care instructions to maintain the best fit.",
      category: "products"
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a wide range of sizes from M to 5XL to ensure a perfect fit for everyone. Please refer to our size guide for detailed measurements to help you select the right size.",
      category: "products"
    },
    {
      question: "How accurate are the hieroglyphic translations?",
      answer: "Our hieroglyphic translations follow the standard phonetic equivalents used in modern interpretations of ancient Egyptian writing. While not a perfect representation of how ancient Egyptians would have written modern names, they provide an authentic-looking and meaningful translation based on scholarly understanding of hieroglyphics.",
      category: "products"
    },
    {
      question: "How long will it take to receive my order?",
      answer: "Standard shipping typically takes 5-7 business days within the continental US. Express shipping (2-3 business days) and overnight shipping options are also available. International shipping times vary by location. You'll receive tracking information once your order ships.",
      category: "shipping"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customs fees, duties, and taxes are the responsibility of the recipient and are not included in the shipping cost.",
      category: "shipping"
    },
    {
      question: "Can I return my t-shirt if it doesn't fit?",
      answer: "Yes, we accept returns within 30 days of delivery for a full refund or exchange if the items are unworn, unwashed, and in their original condition with all tags attached. Please note that custom hieroglyphic t-shirts are final sale unless there is a manufacturing defect.",
      category: "returns"
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account or contacting our customer service team.",
      category: "shipping"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All payments are securely processed and your information is encrypted using industry-standard SSL technology.",
      category: "payment"
    },
    {
      question: "Are the custom hieroglyphic t-shirts more expensive?",
      answer: "Yes, our custom hieroglyphic t-shirts are priced at $69.99, which is $10 more than our regular t-shirts. This reflects the additional customization and specialized printing process required for these unique designs.",
      category: "payment"
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team by email at support@cmteebrand.com, by phone at +1 (800) 123-4567 during business hours (Monday-Friday, 9am-5pm EST), or by filling out the contact form on our Contact Us page.",
      category: "other"
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'products', name: 'Products' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns' },
    { id: 'payment', name: 'Payment' },
    { id: 'other', name: 'Other' }
  ];
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' 
                    : 'bg-black/30 text-gray-400 hover:text-white border border-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-800 bg-black/30"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-white font-medium">{item.question}</span>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 text-gray-300">
                  <div className="pt-2 border-t border-gray-800">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">If you couldn't find the answer to your question, please don't hesitate to contact our customer service team.</p>
          
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

export default FAQ;