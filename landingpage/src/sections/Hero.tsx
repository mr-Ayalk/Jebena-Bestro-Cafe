import React from "react";
import { Send, Truck } from "lucide-react";
// import banner from "../assets/images/herobanner.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden pt-20">
            {/* Background Image */}

            <div
                className="absolute inset-0 z-0 scale-105"
                style={{
                    backgroundImage: "url(/images/herobanner.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            {/* Light Overlay (important for visibility) */}
            {/* <div className="absolute inset-0 bg-white/70" /> */}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 text-white">
                <div className="max-w-2xl lg:max-w-3xl">
                    <p className="text-sm font-medium mb-4">
                        Starting at <span className="font-bold">$24.00</span>
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
                        The best Food <br />
                        Collection 2026
                    </h1>

                    <div className="mb-10">
                        <span className="text-gray-600 text-lg">
                            Exclusive offer{" "}
                            <span className="text-[#FFC12B] underline">
                                -35% off
                            </span>{" "}
                            this week
                        </span>
                    </div>

                    <div className="mb-12">
                        <button className="bg-[#E92348] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-lg">
                            <Truck size={20} />
                            Order Now
                        </button>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-full p-1.5 flex items-center shadow-2xl">
                        <Send size={18} className="ml-4 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-2 outline-none"
                        />
                        <button className="bg-[#E92348] text-white px-8 py-3 rounded-full font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Promo Circle */}
                <div className="absolute top-1/2 right-10 hidden lg:block -translate-y-1/2">
                    <div className="bg-[#E92348] px-12 py-6 rounded-full rotate-[-5deg] shadow-2xl">
                        <div className="border-2 border-dashed border-white/40 p-4 rounded-full text-white text-center">
                            <span className="text-xs uppercase">Upto</span>
                            <div className="text-4xl font-bold">20%</div>
                            <span className="text-xs uppercase">Discount</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
