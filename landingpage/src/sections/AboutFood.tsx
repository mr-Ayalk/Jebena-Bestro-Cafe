"use client";
import React from "react";
import { UtensilsCrossed, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutFood = () => {
    return (
        <section
            className="py-16 xs:py-20 md:py-24 bg-white overflow-hidden"
            id="about-us"
        >
            <div className="container mx-auto px-4 xs:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-12 items-center">
                    {/* Left Content Side */}
                    <div className="space-y-6 xs:space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[#00A859] font-serif italic text-xl xs:text-2xl mb-2 xs:mb-4">
                                About Us
                            </h4>

                            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                                Where Quality Meets{" "}
                                <br className="hidden xs:block md:hidden lg:block" />
                                Excellent{" "}
                                <span className="text-[#FF385C]">Service.</span>
                            </h2>
                        </motion.div>

                        <p className="text-gray-500 text-sm xs:text-base leading-relaxed max-w-xl">
                            It&apos;s the perfect dining experience where every
                            dish is crafted with fresh, high-quality
                            ingredients. Experience quick and efficient service
                            that ensures your food is served fresh. We
                            prioritize the taste of tradition in every bite.
                        </p>

                        {/* Features Grid - Stacks on mobile, 2 cols on small screens */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xs:gap-8 pt-2">
                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0">
                                    <div className="p-3 rounded-xl bg-orange-50 text-orange-400">
                                        <UtensilsCrossed
                                            size={24}
                                            className="xs:w-[28px] xs:h-[28px]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] text-base xs:text-lg">
                                        Super Quality Food
                                    </h3>
                                    <p className="text-gray-500 text-[11px] xs:text-xs mt-1 leading-snug">
                                        A dedicated team ensuring every recipe
                                        meets our high standards of excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0">
                                    <div className="p-3 rounded-xl bg-orange-50 text-orange-400">
                                        <Star
                                            size={24}
                                            className="xs:w-[28px] xs:h-[28px]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] text-base xs:text-lg">
                                        Well Reputed
                                    </h3>
                                    <p className="text-gray-500 text-[11px] xs:text-xs mt-1 leading-snug">
                                        Known in Chamblee for our authentic
                                        flavors and welcoming atmosphere.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA and Quote - Stacks on mobile */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4 xs:pt-6">
                            <Link href="/about" className="w-full sm:w-auto">
                                <button className="w-full bg-[#FF385C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e63252] transition-all hover:shadow-xl active:scale-95 shadow-md text-sm xs:text-base">
                                    More About Us
                                </button>
                            </Link>

                            <div className="border-l-4 border-[#FFB800] pl-4 py-1">
                                <p className="text-[#FFB800] font-bold text-[10px] xs:text-xs uppercase tracking-widest">
                                    Brendon Garrey
                                </p>
                                <p className="text-[#1A1A1A] font-black text-xs xs:text-sm mt-1 leading-tight max-w-[200px]">
                                    CUSTOMER EXPERIENCE IS OUR HIGHEST PRIORITY.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Side - Appears first on mobile for visual impact */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group order-1 lg:order-2"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] xs:aspect-video lg:aspect-auto">
                            <Image
                                src="/images/herobanner.png"
                                alt="Jebena Restaurant Experience"
                                width={800}
                                height={600}
                                priority
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutFood;
