import React from "react";
import { UtensilsCrossed, Star } from "lucide-react";
import Image from "next/image";
const AboutFood = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 xs:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content Side */}
                    <div className="space-y-6">
                        <h4 className="text-[#FF385C] font-semibold text-sm tracking-wide uppercase">
                            About Our Food
                        </h4>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                            Where Quality Meet{" "}
                            <br className="hidden md:block" />
                            Excellent{" "}
                            <span className="text-[#FF385C]">Service.</span>
                        </h2>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                            Its the perfect dining experience where every dish
                            is crafted with fresh, high-quality Experience quick
                            and efficient service that ensures your food is
                            served fresh Its the dining experience where every
                            dish is crafted with fresh, high-quality ingredients
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="p-3 rounded-lg bg-orange-50 text-orange-400">
                                        <UtensilsCrossed size={28} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] text-lg">
                                        Super Quality Food
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 leading-snug">
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="p-3 rounded-lg bg-orange-50 text-orange-400">
                                        <Star size={28} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] text-lg">
                                        Well Reputation
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 leading-snug">
                                        A team of dreamers and doers building
                                        unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA and Quote */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
                            <button className="bg-[#FF385C] text-white px-8 py-4 rounded-md font-bold hover:bg-[#e63252] transition-colors shadow-lg">
                                More About Us
                            </button>

                            <div className="border-l-2 border-orange-400 pl-4">
                                <p className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                                    Brendon Garrey
                                </p>
                                <p className="text-[#1A1A1A] font-extrabold text-sm mt-1">
                                    CUSTOMER&apos;S EXPERIENCE IS OUR HIGHEST
                                    PRIORITY.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="relative group">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/herobanner.png"
                                alt="Delicious Burgers"
                                width={800}
                                height={600}
                                priority
                                className="w-full h-auto object-cover"
                            />

                            {/* Since 1985 Badge */}
                            <div className="absolute bottom-10 right-10 bg-[#00A859] text-white px-6 py-2 rounded-md transform -rotate-12 shadow-lg font-bold text-xl">
                                Since /1985
                            </div>
                        </div>

                        {/* Background Decorative Element (optional) */}
                        <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-gray-100 rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFood;
