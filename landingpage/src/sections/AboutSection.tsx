"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="relative py-16 xs:py-24 bg-white overflow-hidden font-sans">
            {/* Background Watermark Text - Scaled for mobile */}
            <div className="absolute top-4 left-4 xs:top-10 xs:left-10 text-[60px] xs:text-[100px] lg:text-[180px] font-black text-gray-100 opacity-40 z-0 pointer-events-none tracking-tighter whitespace-nowrap">
                Jebena Bistro
            </div>

            {/* Background Watermark Text "FAST FOOD" - Hidden on mobile, shown on large screens */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[80px] lg:text-[120px] font-black text-gray-50 opacity-40 z-0 pointer-events-none hidden md:flex flex-col leading-none">
                <span>Jebena Bistro</span>
                <span>Jebena Bistro</span>
            </div>

            <div className="container mx-auto px-4 xs:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side: Image Stack */}
                    <div className="relative group">
                        {/* Main Image Container */}
                        <div className="relative rounded-[2rem] xs:rounded-[3rem] overflow-hidden shadow-2xl border-4 xs:border-8 border-white">
                            <Image
                                src="/images/hero.png" // Update with actual path
                                alt="Traditional Ethiopian Food"
                                width={700}
                                height={800}
                                className="w-full h-[400px] xs:h-[500px] lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Inset smaller image (Top Left) - Hidden on very small screens to avoid clutter */}
                            <div className="absolute top-4 left-4 xs:top-6 xs:left-6 w-1/3 aspect-video rounded-xl overflow-hidden border-2 xs:border-4 border-white shadow-lg hidden xs:block">
                                <Image
                                    src="/images/herobanner.png"
                                    alt="Restaurant Interior"
                                    width={200}
                                    height={120}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Yellow Badge (Bottom Right) */}
                            <div className="absolute bottom-0 right-0 bg-[#E92348] p-6 xs:p-8 md:p-12 rounded-tl-[40px] xs:rounded-tl-[60px] max-w-[200px] xs:max-w-[280px]">
                                <h4 className="font-bold text-lg xs:text-xl md:text-2xl text-white leading-tight">
                                    We Cook <br />
                                    Traditional <br />
                                    Ethiopian Food
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#00A859] font-serif italic text-xl xs:text-2xl mb-4"
                        >
                            About Our Food
                        </motion.h4>

                        <h2 className="text-3xl xs:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-6 xs:mb-8">
                            The Best Delicious Food{" "}
                            <br className="hidden xs:block" /> Made From Us...
                        </h2>

                        <p className="text-gray-500 text-base xs:text-lg leading-relaxed mb-8 xs:mb-10 max-w-xl">
                            It&apos;s the perfect dining experience where every
                            dish is crafted with fresh, high-quality
                            ingredients. Experience quick and efficient service
                            that ensures your food is served fresh.
                        </p>

                        {/* Stats Row - Stacks on mobile, Grid on xs+ */}
                        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-4 mb-10 xs:mb-12 border-t border-gray-100 pt-8 xs:pt-10">
                            {[
                                { value: "25k+", label: "Satisfied Clients" },
                                { value: "200+", label: "Daily Dishes" },
                                { value: "250+", label: "Active Clients" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-start xs:items-center text-left xs:text-center"
                                >
                                    <h5 className="text-3xl xs:text-3xl md:text-4xl font-black text-[#E92348] mb-1">
                                        {stat.value}
                                    </h5>
                                    <p className="text-[10px] font-black text-gray-800 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Footer Area */}
                        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-6 xs:gap-8">
                            {/* Chef Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                                    <Image
                                        src="/images/hero.png" // Update with chef image
                                        alt="Chef"
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <p className="italic font-bold text-sm xs:text-base">
                                    JEBENA BISTRO
                                </p>
                            </div>

                            {/* Foundation Tag */}
                            <div className="bg-[#00A859] text-white px-6 xs:px-8 py-2.5 xs:py-3 rounded-full flex items-center gap-2 text-[10px] xs:text-[11px] font-bold tracking-widest uppercase">
                                <span>Since</span>
                                <span className="text-[#FFB800]">
                                    Oct 21, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
