import React from "react";

const AboutSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image with Overlay Text and Badge */}
                <div className="relative">
                    <div className="absolute -top-10 -left-10 text-[100px] font-black text-gray-100 opacity-50 z-0 select-none">
                        FAST FOOD
                    </div>
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="./images/herobanner.png"
                            alt="Melting Cheese Pizza"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#FFC12B] p-6 md:p-10 rounded-tl-3xl shadow-xl max-w-[260px] z-20">
                        <h4 className="font-bold text-xl md:text-2xl leading-tight text-gray-900 font-poppins">
                            We Cook Sandwiches For You
                        </h4>
                    </div>
                </div>

                {/* Right: Content & Stats */}
                <div className="flex flex-col">
                    <span className="text-[#00A859] font-bold text-sm uppercase tracking-widest mb-4">
                        About Our Food
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6 font-poppins">
                        The Best Delicious Food <br /> Made From Us...
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                        It&apos;s the perfect dining experience where every dish
                        is crafted with fresh, high-quality dining experience.
                        Experience quick and efficient service that ensures your
                        food is served fresh. Its the where every dining
                        experience where every dish is crafted with fresh,
                        high-quality ingredients.
                    </p>

                    <hr className="border-gray-100 mb-8" />

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="relative group">
                            <span className="absolute -top-4 -left-2 text-6xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">
                                S
                            </span>
                            <div className="relative z-10">
                                <h5 className="text-3xl font-bold text-[#FFC12B]">
                                    250+
                                </h5>
                                <p className="text-[10px] font-bold uppercase tracking-tighter">
                                    Satisfied Clients
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <span className="absolute -top-4 -left-2 text-6xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">
                                T
                            </span>
                            <div className="relative z-10">
                                <h5 className="text-3xl font-bold text-[#FFC12B]">
                                    153+
                                </h5>
                                <p className="text-[10px] font-bold uppercase tracking-tighter">
                                    Total Food Categories
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <span className="absolute -top-4 -left-2 text-6xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">
                                A
                            </span>
                            <div className="relative z-10">
                                <h5 className="text-3xl font-bold text-[#FFC12B]">
                                    25+
                                </h5>
                                <p className="text-[10px] font-bold uppercase tracking-tighter">
                                    Award Win
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signature and Founder Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shadow-md">
                                <img
                                    src="./images/herobanner.png"
                                    alt="Chef"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <img
                                src="./images/herobanner.png"
                                alt="Signature"
                                className="h-8 opacity-70"
                            />
                        </div>
                        <div className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                            Foundation, Since{" "}
                            <span className="text-[#FFC12B]">
                                21st Oct, 2019
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
