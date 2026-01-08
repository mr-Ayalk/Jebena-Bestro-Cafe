"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-neutral-50 py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-black text-neutral-900 uppercase">
              Contact Information
            </motion.h2>

            <div className="space-y-8">
              {/* Address */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#FF385C] p-3 rounded-lg h-fit text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900">Address</h4>
                  <p className="text-neutral-600">3654 Clairmont Rd, Chamblee, GA 30341</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#FF385C] p-3 rounded-lg h-fit text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900">Phone</h4>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                  <p className="text-neutral-600">+1 (555) 987-6543</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#FF385C] p-3 rounded-lg h-fit text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900">Email</h4>
                  <p className="text-neutral-600">info@ethiopianflavors.com</p>
                  <p className="text-neutral-600">reservations@ethiopianflavors.com</p>
                </div>
              </motion.div>

              {/* Opening Hours */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="bg-[#FF385C] p-3 rounded-lg h-fit text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-neutral-900">Opening Hours</h4>
                  <p className="text-neutral-600">Mon - Fri: 11:00 AM - 10:00 PM</p>
                  <p className="text-neutral-600">Sat - Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder Image */}
            <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Location Map" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-neutral-100"
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Name *</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-neutral-200 outline-none focus:border-[#FF6B00] transition-colors bg-neutral-50" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Email *</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-neutral-200 outline-none focus:border-[#FF6B00] transition-colors bg-neutral-50" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl border border-neutral-200 outline-none focus:border-[#FF6B00] transition-colors bg-neutral-50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Subject *</label>
                <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 outline-none focus:border-[#FF6B00] transition-colors bg-neutral-50 appearance-none">
                  <option>Reservation</option>
                  <option>Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Message *</label>
                <textarea rows={4} placeholder="Tell us what's on your mind..." className="w-full px-4 py-3 rounded-xl border border-neutral-200 outline-none focus:border-[#FF6B00] transition-colors bg-neutral-50 resize-none" required></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FF385C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-200 hover:bg-[#e66000] transition-colors"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;