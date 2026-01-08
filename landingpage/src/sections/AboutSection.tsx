import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="relative py-20 bg-white overflow-hidden font-sans">
            {/* Background Watermark Text "TAASTE" */}
            <div className="absolute top-10 left-10 text-[180px] font-black text-gray-100 opacity-40 z-0 pointer-events-none tracking-tighter">
                Jebena Bestro
            </div>

            {/* Background Watermark Text "FAST FOOD" */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[120px] font-black text-gray-50 opacity-40 z-0 pointer-events-none flex flex-col leading-none">
                <span>Jebena Bestro</span>
                <span>Jebena Bestro</span>
            </div>

            <div className="container  mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Images */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                            <Image
                                src="/images/hero.png" // Update with your actual image path
                                alt="Traditional Ethiopian Food"
                                width={700}
                                height={800}
                                className="w-full object-cover"
                            />

                            {/* Inset smaller image (Top Left) */}
                            <div className="absolute top-6 left-6 w-1/3 aspect-video rounded-xl overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/images/herobanner.png"
                                    alt="Restaurant Interior"
                                    width={200}
                                    height={120}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Green Badge (Bottom Right) */}
                            <div className="absolute bottom-0 right-0 bg-[#FFB800] p-8 md:p-12 rounded-tl-[60px] max-w-[280px]">
                                <h4 className="font-bold text-xl md:text-2xl text-white leading-tight">
                                    We Cook <br />
                                    Traditional <br />
                                    Ethiopean Food
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col">
                        <h4 className="text-[#00A859] font-serif  italic text-2xl mb-4">
                            About Our Food
                        </h4>

                        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-8">
                            The Best Delicious Food <br /> Made From Us...
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
                            It&apos;s the perfect dining experience where every
                            dish is crafted with fresh, high-quality dining
                            experience. Experience quick and efficient service
                            that ensures your food is served fresh.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mb-12 border-t border-gray-100 pt-10">
                            {[
                                { value: "250+", label: "Satisfied Clients" },
                                { value: "153+", label: "Food Categories" },
                                { value: "25+", label: "Award Win" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                    <h5 className="text-4xl font-black text-[#FFB800] mb-1">
                                        {stat.value}
                                    </h5>
                                    <p className="text-[10px] font-black text-gray-800 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Footer Area */}
                        <div className="flex flex-wrap items-center gap-8">
                            {/* Author/Chef Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                                    <Image
                                        src="/images/hero.png"
                                        alt="Chef"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <Image
                                    src="/images/hero.png"
                                    alt="Signature"
                                    width={100}
                                    height={40}
                                    className="grayscale opacity-80"
                                />
                            </div>

                            {/* Foundation Tag */}
                            <div className="bg-[#00A859] text-white px-8 py-3 rounded-full flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
                                <span>Foundation, Since</span>
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
