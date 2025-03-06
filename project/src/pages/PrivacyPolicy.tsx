import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last Updated: April 15, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p className="text-gray-300">
              CMTEE BRAND ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or make a purchase from us (collectively, the "Services").
            </p>
            <p className="text-gray-300">
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
            <p className="text-gray-300">
              We collect several types of information from and about users of our Services, including:
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">2.1 Personal Information</h3>
            <p className="text-gray-300">
              Personal information is data that can be used to identify you individually. We may collect the following personal information:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Postal address</li>
              <li>Phone number</li>
              <li>Payment information (credit card numbers, billing address)</li>
              <li>Account login credentials</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mt-4">2.2 Non-Personal Information</h3>
            <p className="text-gray-300">
              We also collect non-personal information that does not directly identify you, including:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Usage data (pages visited, time spent on pages, etc.)</li>
              <li>Referring website</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">3. How We Collect Information</h2>
            <p className="text-gray-300">
              We collect information in the following ways:
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">3.1 Direct Collection</h3>
            <p className="text-gray-300">
              We collect information directly from you when you:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in surveys or promotions</li>
              <li>Post reviews or comments</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mt-4">3.2 Automated Collection</h3>
            <p className="text-gray-300">
              We automatically collect certain information when you visit, use, or navigate our Services. This information does not reveal your specific identity but may include device and usage information. We use the following technologies for automated data collection:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li><strong>Cookies:</strong> Small data files stored on your device that help us improve our Services and your experience.</li>
              <li><strong>Log Files:</strong> Track actions occurring on the Services and collect data including IP address, browser type, and pages visited.</li>
              <li><strong>Web Beacons:</strong> Small electronic files that help us understand how users interact with our Services.</li>
              <li><strong>Pixels:</strong> Tiny graphics with a unique identifier that track online movements of users.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">4. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Processing and fulfilling orders</li>
              <li>Creating and managing your account</li>
              <li>Providing customer support</li>
              <li>Sending transactional emails (order confirmations, shipping updates)</li>
              <li>Sending marketing communications (if you've opted in)</li>
              <li>Improving our website and products</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Detecting and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">5. Disclosure of Your Information</h2>
            <p className="text-gray-300">
              We may share your information in the following situations:
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">5.1 Third-Party Service Providers</h3>
            <p className="text-gray-300">
              We may share your information with third-party vendors, service providers, and other business partners who perform services on our behalf, such as:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Payment processors</li>
              <li>Shipping and fulfillment companies</li>
              <li>Customer service providers</li>
              <li>Marketing and analytics services</li>
              <li>Email service providers</li>
            </ul>
            
            <h3 className="text-lg font-medium text-white mt-4">5.2 Legal Requirements</h3>
            <p className="text-gray-300">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court order, government request).
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">5.3 Business Transfers</h3>
            <p className="text-gray-300">
              If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">5.4 With Your Consent</h3>
            <p className="text-gray-300">
              We may disclose your information for any other purpose with your consent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">6. Your Privacy Rights</h2>
            <p className="text-gray-300">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">7. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">8. Children's Privacy</h2>
            <p className="text-gray-300">
              Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">9. Changes to Our Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: privacy@cmteebrand.com</p>
              <p>Phone: +1 (800) 123-4567</p>
              <p>
                Address: 123 Cotton Way<br />
                Suite 456<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;