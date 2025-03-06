import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this would send the form data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        orderNumber: '',
        subject: '',
        message: ''
      });
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Get in Touch</h3>
                <p className="text-gray-300">We're here to help with any questions or concerns you may have about our products or services.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-pink-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a href="mailto:support@cmteebrand.com" className="text-gray-300 hover:text-white">
                      support@cmteebrand.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-pink-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Phone</p>
                    <a href="tel:+18001234567" className="text-gray-300 hover:text-white">
                      +1 (800) 123-4567
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-pink-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Address</p>
                    <p className="text-gray-300">
                      123 Cotton Way<br />
                      Suite 456<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-black/30 p-8 border border-gray-800 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium text-white hover:bg-gray-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-300 mb-1">
                    Order Number (if applicable)
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-black border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Return/Exchange">Return/Exchange</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Shipping Question">Shipping Question</option>
                    <option value="Website Feedback">Website Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-none py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;