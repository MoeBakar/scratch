import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last Updated: April 15, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to CMTEE BRAND. These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-300">
              Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">2. Account Registration</h2>
            <p className="text-gray-300">
              To access certain features of our Services, you may need to create an account. When you create an account, you agree to:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password confidential and secure</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or no longer current.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">3. Products and Purchases</h2>
            
            <h3 className="text-lg font-medium text-white mt-4">3.1 Product Information</h3>
            <p className="text-gray-300">
              We strive to display our products and their colors as accurately as possible. However, we cannot guarantee that your computer or mobile device's display will accurately reflect the actual color of the products.
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">3.2 Pricing and Availability</h3>
            <p className="text-gray-300">
              All prices are shown in US dollars and are subject to change without notice. We reserve the right to modify or discontinue any product without notice. We are not liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">3.3 Orders</h3>
            <p className="text-gray-300">
              When you place an order, you offer to purchase the product at the price and quantity indicated. We reserve the right to accept or decline your order for any reason, including product unavailability, errors in pricing or product information, or problems with your account.
            </p>
            
            <h3 className="text-lg font-medium text-white mt-4">3.4 Payment</h3>
            <p className="text-gray-300">
              We accept various payment methods as indicated on our website. By providing payment information, you represent and warrant that you have the legal right to use the payment method and that the information you provide is accurate.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">4. Shipping and Delivery</h2>
            <p className="text-gray-300">
              We ship to the addresses provided by customers. Please ensure your shipping address is correct before completing your purchase. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by carriers, customs, or other factors beyond our control.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">5. Returns and Refunds</h2>
            <p className="text-gray-300">
              Our return and refund policy is detailed in our <Link to="/shipping-returns" className="text-pink-400 hover:text-pink-300">Shipping & Returns</Link> page. By making a purchase, you agree to the terms of this policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">6. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on our Services, including but not limited to text, graphics, logos, images, product designs, and software, is the property of CMTEE BRAND or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-300 mt-4">
              You may not use, reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">7. User Content</h2>
            <p className="text-gray-300">
              By submitting reviews, comments, or other content to our Services, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p className="text-gray-300 mt-4">
              You represent and warrant that you own or control all rights to the content you submit, that the content is accurate, and that its use does not violate these Terms or cause injury to any person or entity.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">8. Prohibited Activities</h2>
            <p className="text-gray-300">
              You agree not to:
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Use our Services for any illegal purpose</li>
              <li>Violate any laws, regulations, or third-party rights</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Attempt to gain unauthorized access to any part of our Services</li>
              <li>Use any robot, spider, or other automated means to access our Services</li>
              <li>Collect or harvest any information from our Services</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any activity that could damage, disable, or overburden our Services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">9. Disclaimer of Warranties</h2>
            <p className="text-gray-300">
              OUR SERVICES AND PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-gray-300 mt-4">
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">10. Limitation of Liability</h2>
            <p className="text-gray-300">
              IN NO EVENT SHALL CMTEE BRAND, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-gray-300 mt-4">
              THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">11. Indemnification</h2>
            <p className="text-gray-300">
              You agree to defend, indemnify, and hold harmless CMTEE BRAND, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms; (iii) your violation of any third party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your content caused damage to a third party.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within New York County, New York.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">13. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify or replace these Terms at any time. The most current version will be posted on our website with the "Last Updated" date. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-white">14. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: legal@cmteebrand.com</p>
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

export default TermsOfService;