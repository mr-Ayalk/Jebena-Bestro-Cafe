import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 xs:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Clipped Image Container */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden rotate-[-2deg] shadow-2xl">
              <img 
                src="/family-shopping.jpg" 
                alt="Happy Customer" 
                className="w-full h-full object-cover rotate-[2deg] scale-110"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-gray-50 rounded-[3rem] rotate-[-4deg]" />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-[#00A859] font-serif italic text-2xl mb-4">
              Testimonial
            </h4>
            <h2 className="text-4xl font-black text-[#1A1A1A] mb-8">
              Customer Say About Us
            </h2>
            
            <div className="relative inline-block text-gray-500 italic text-lg leading-relaxed mb-6">
              <Quote className="absolute -left-8 -top-2 text-gray-200" size={40} />
              Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.
            </div>

            <div className="flex justify-center lg:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#00A859" className="text-[#00A859]" />
              ))}
            </div>

            <p className="font-bold text-[#1A1A1A]">
              Customer <span className="text-gray-400 font-normal ml-2">- From Envato</span>
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-8">
              <button className="w-3 h-3 rounded-full border-2 border-[#00A859] p-0.5">
                <div className="w-full h-full bg-[#00A859] rounded-full" />
              </button>
              <button className="w-2 h-2 rounded-full bg-black mt-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;