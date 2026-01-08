"use client";

import React, { useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        text: "The aroma of the roasting coffee beans hit me the moment I walked in. The Doro Wat was perfectly spiced, and the Injera was so fresh. It feels like home.",
        author: "Selamawit K.",
        role: "Food Blogger",
        color: "#00A859",
    },
    {
        id: 2,
        text: "Best Kitfo in the city! The service is incredibly warm, and they treat you like a guest, not just a customer. The coffee ceremony is a must-experience.",
        author: "Dawit T.",
        role: "Regular Guest",
        color: "#E92348",
    },
    {
        id: 3,
        text: "I took my friends here for their first Ethiopian food experience. The Veggie Platter was a rainbow of flavors. Truly the heart of culture here.",
        author: "Marcus J.",
        role: "Local Guide",
        color: "#FFB800",
    },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            className="py-16 md:py-24 bg-white text-black overflow-hidden"
            id="testimonials"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#00A859] font-serif italic text-xl md:text-2xl mb-2"
                    >
                        Guest Experiences
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black mb-6 leading-tight"
                    >
                        Why people choose us?
                    </motion.h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed px-4">
                        Experience the authentic heart of Ethiopia through our
                        traditional spices, hand-rolled injera, and warm
                        hospitality that makes every guest feel like family.
                    </p>
                </div>

                {/* Cards Grid / Mobile Carousel */}
                <div className="relative mb-12">
                    {/* On Desktop (md+): Show 3 columns
                        On Mobile: Show only the active index with a fade transition
                    */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <TestimonialCard
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="md:hidden flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <TestimonialCard
                                    item={testimonials[activeIndex]}
                                    index={activeIndex}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots - Functional for both mobile and desktop focus */}
                <div className="flex justify-center gap-4">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`transition-all duration-500 rounded-full h-2 ${
                                i === activeIndex
                                    ? "w-8 bg-[#E92348]"
                                    : "w-2 bg-gray-200 hover:bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Extracted Card Component for cleaner code
const TestimonialCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative bg-[#FFFAF7] rounded-[2.5rem] p-8 md:p-10 border border-orange-50/50 shadow-sm hover:shadow-xl transition-all duration-500 group"
    >
        {/* Floating Quote Icon */}
        <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300"
            style={{ backgroundColor: "#fff" }}
        >
            <Quote
                size={22}
                style={{ color: item.color }}
                fill={item.color}
                className="opacity-70"
            />
        </div>

        <div className="text-center mt-4">
            <p className="text-gray-600 italic leading-relaxed mb-8 text-sm md:text-base min-h-[80px]">
                &quot;{item.text}&quot;
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        fill={item.color}
                        style={{ color: item.color }}
                        className="border-none"
                    />
                ))}
            </div>

            <h5 className="font-black text-lg text-neutral-900">
                {item.author}
            </h5>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-2">
                {item.role}
            </p>
        </div>
    </motion.div>
);

export default Testimonial;
