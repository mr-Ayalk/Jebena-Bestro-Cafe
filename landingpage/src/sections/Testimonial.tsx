"use client";

import React, { useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "The aroma of the roasting coffee beans hit me the moment I walked in. The Doro Wat was perfectly spiced, and the Injera was so fresh. It feels like home.",
        author: "Selamawit K.",
        role: "Food Blogger",
        color: "#00A859", // Green
    },
    {
        id: 2,
        text: "Best Kitfo in the city! The service is incredibly warm, and they treat you like a guest, not just a customer. The coffee ceremony is a must-experience.",
        author: "Dawit T.",
        role: "Regular Guest",
        color: "#E92348", // Red
    },
    {
        id: 3,
        text: "I took my friends here for their first Ethiopian food experience. The Veggie Platter was a rainbow of flavors. Truly the heart of culture here.",
        author: "Marcus J.",
        role: "Local Guide",
        color: "#FFB800", // Gold/Yellow
    },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h4 className="text-[#00A859] font-black uppercase tracking-[0.3em] text-xs mb-4">
                        Features
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Why people choose us?
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Experience the authentic heart of Ethiopia through our
                        traditional spices, hand-rolled injera, and warm
                        hospitality that makes every guest feel like family.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-[#FFFAF7] rounded-[2rem] p-10 border border-white/5 hover:border-white/10 transition-all group"
                        >
                            {/* Floating Quote Icon */}
                            <div
                                className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                                style={{ backgroundColor: "#fff" }}
                            >
                                <Quote
                                    size={20}
                                    style={{ color: item.color }}
                                    fill={item.color}
                                    className="opacity-80"
                                />
                            </div>

                            <div className="text-center mt-4">
                                <p className="text-gray-400 italic leading-relaxed mb-8 text-sm md:text-base">
                                    &quot;{item.text}&quot;
                                </p>

                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill={item.color}
                                            className="border-none"
                                            style={{ color: item.color }}
                                        />
                                    ))}
                                </div>

                                <h5 className="font-black text-lg text-black">
                                    {item.author}
                                </h5>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mt-1">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`transition-all duration-300 rounded-full ${
                                i === activeIndex
                                    ? "w-4 h-4 bg-[#E92348]"
                                    : "w-3 h-3 bg-gray-700 hover:bg-gray-600"
                            } border-4 border-white outline outline-1 outline-gray-800`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
