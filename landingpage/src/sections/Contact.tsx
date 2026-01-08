"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form logic here
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section
            className="bg-neutral-50 py-16 md:py-24 overflow-hidden"
            id="contact"
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Contact Information */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="space-y-10 md:space-y-12"
                    >
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight mb-4">
                                Contact Information
                            </h2>
                            <p className="text-neutral-500 max-w-md">
                                Have questions about our traditional Ethiopian
                                cuisine or want to book a private event? Reach
                                out to us.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Address",
                                    content:
                                        "3654 Clairmont Rd, Chamblee, GA 30341",
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    content: "+1 (404) 987-4466",
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: "jebenabistro@gmail.com",
                                },
                                {
                                    icon: Clock,
                                    title: "Opening Hours",
                                    content: "Tue-Sun: 11:00 AM - 10:00 PM",
                                },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    className="flex gap-5 group"
                                >
                                    <div className="bg-[#FF385C] p-3 rounded-2xl h-fit text-white shadow-lg shadow-rose-100 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base text-neutral-900 mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            variants={fadeInUp}
                            className="rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200 border-4 border-white aspect-video md:aspect-auto"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                                alt="Location Map"
                                className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-neutral-200 border border-neutral-100 relative"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                            Send us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-5 py-4 rounded-2xl border border-neutral-100 outline-none focus:ring-4 focus:ring-rose-50 focus:border-[#FF385C] transition-all bg-neutral-50 text-sm font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-5 py-4 rounded-2xl border border-neutral-100 outline-none focus:ring-4 focus:ring-rose-50 focus:border-[#FF385C] transition-all bg-neutral-50 text-sm font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">
                                    Subject
                                </label>
                                <select className="w-full px-5 py-4 rounded-2xl border border-neutral-100 outline-none focus:ring-4 focus:ring-rose-50 focus:border-[#FF385C] transition-all bg-neutral-50 text-sm font-medium appearance-none">
                                    <option>Table Reservation</option>
                                    <option>General Inquiry</option>
                                    <option>Catering Request</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-5 py-4 rounded-2xl border border-neutral-100 outline-none focus:ring-4 focus:ring-rose-50 focus:border-[#FF385C] transition-all bg-neutral-50 text-sm font-medium resize-none"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                disabled={isSubmitted}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl transition-all ${
                                    isSubmitted
                                        ? "bg-green-500 text-white shadow-green-100"
                                        : "bg-[#FF385C] text-white shadow-neutral-200 hover:bg-[#FF385C] hover:shadow-rose-100"
                                }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle size={18} /> Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} /> Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
