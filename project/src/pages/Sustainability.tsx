import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Recycle, Droplet, Wind } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>
      
      <div className="bg-gray-900/50 p-8 backdrop-blur-sm border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-8">Our Sustainability Commitment</h1>
        
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-gray-300">
            At CMTEE BRAND, sustainability isn't just a buzzword—it's a core value that guides everything we do. We believe that luxury and environmental responsibility can and should go hand in hand. Our commitment to sustainability spans our entire operation, from the cotton fields to your closet.
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 bg-black/30 overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Sustainable cotton farming" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <section>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Sustainable Farming</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                We partner exclusively with Egyptian cotton farms that practice sustainable agriculture. These farms:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li>Use water-efficient irrigation systems to minimize water usage</li>
                <li>Implement crop rotation to maintain soil health</li>
                <li>Reduce or eliminate the use of harmful pesticides and fertilizers</li>
                <li>Preserve local biodiversity and ecosystems</li>
                <li>Provide fair wages and safe working conditions for farmers</li>
              </ul>
              <p className="text-gray-300 mt-4">
                By supporting sustainable farming practices, we ensure that the environmental impact of our cotton production is minimized while maintaining the exceptional quality that Egyptian cotton is known for.
              </p>
            </div>
          </section>
          
          <section>
            <div className="flex items-center mb-4">
              <Droplet className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Water Conservation</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Cotton production traditionally requires significant water resources. We're committed to reducing our water footprint through:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li>Partnering with farms that use drip irrigation and other water-saving technologies</li>
                <li>Implementing water recycling systems in our manufacturing facilities</li>
                <li>Using eco-friendly dyeing processes that require less water</li>
                <li>Regularly auditing our water usage and setting ambitious reduction targets</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Our water conservation efforts have resulted in a 40% reduction in water usage compared to conventional cotton t-shirt production.
              </p>
            </div>
          </section>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <section>
            <div className="flex items-center mb-4">
              <Recycle className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Responsible Manufacturing</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Our commitment to sustainability extends to every aspect of our manufacturing process:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li>Energy-efficient facilities powered by renewable energy where possible</li>
                <li>Zero-waste initiatives that recycle or repurpose fabric scraps and other materials</li>
                <li>Eco-friendly packaging made from recycled and biodegradable materials</li>
                <li>Reduced carbon footprint through optimized shipping and logistics</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We're constantly innovating and improving our manufacturing processes to reduce our environmental impact while maintaining the highest quality standards.
              </p>
            </div>
          </section>
          
          <section>
            <div className="flex items-center mb-4">
              <Wind className="h-6 w-6 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold text-white">Carbon Neutrality</h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                We recognize the urgent need to address climate change. Our carbon neutrality strategy includes:
              </p>
              <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
                <li>Measuring and tracking our carbon footprint across all operations</li>
                <li>Implementing energy efficiency measures throughout our supply chain</li>
                <li>Investing in renewable energy projects</li>
                <li>Supporting verified carbon offset projects that benefit communities and ecosystems</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We're proud to be on track to achieve carbon neutrality by 2026, with a 30% reduction in emissions already achieved since our founding.
              </p>
            </div>
          </section>
        </div>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Our Certifications</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">GOTS Certified</p>
              <p className="text-xs text-gray-400 mt-1">Global Organic Textile Standard</p>
            </div>
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">Fair Trade</p>
              <p className="text-xs text-gray-400 mt-1">Ethical Trading Initiative</p>
            </div>
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">OEKO-TEX®</p>
              <p className="text-xs text-gray-400 mt-1">Standard 100</p>
            </div>
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">Carbon Trust</p>
              <p className="text-xs text-gray-400 mt-1">Carbon Reduction</p>
            </div>
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">BCI Member</p>
              <p className="text-xs text-gray-400 mt-1">Better Cotton Initiative</p>
            </div>
            <div className="bg-black/30 p-4 border border-gray-800 text-center">
              <p className="text-white font-medium">Bluesign®</p>
              <p className="text-xs text-gray-400 mt-1">System Partner</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Our Future Goals</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              While we're proud of our sustainability achievements so far, we recognize that this is an ongoing journey. Our future sustainability goals include:
            </p>
            <ul className="text-gray-300 mt-4 list-disc pl-5 space-y-2">
              <li>Achieving 100% renewable energy usage across all operations by 2027</li>
              <li>Implementing a comprehensive take-back program for recycling old t-shirts by 2026</li>
              <li>Developing innovative, bio-based alternatives to conventional dyes and treatments</li>
              <li>Expanding our community support programs in cotton-growing regions</li>
              <li>Achieving complete supply chain transparency through blockchain technology</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We believe that true sustainability requires continuous improvement and innovation. We're committed to pushing the boundaries of what's possible in sustainable fashion.
            </p>
          </div>
        </section>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <h3 className="text-lg font-medium text-white mb-4">Join Us in Making a Difference</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            When you choose CMTEE BRAND, you're not just getting a premium Egyptian cotton t-shirt—you're supporting a more sustainable future for fashion. Together, we can prove that luxury and sustainability can go hand in hand.
          </p>
          
          <Link 
            to="/#products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600"
          >
            Shop Sustainable
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;