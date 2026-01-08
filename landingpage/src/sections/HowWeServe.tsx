"use client";

import React from "react";
import { Utensils, Truck, MousePointerClick } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "CHOOSE FOOD",
        description:
            "Browse our authentic Ethiopian menu and select your favorite traditional dishes.",
        icon: <MousePointerClick className="w-6 h-6" />,
        isActive: false,
    },
    {
        id: 2,
        title: "Cooking With Care",
        description:
            "Our chefs prepare your meal with hand-blended spices and fresh ingredients.",
        icon: <Utensils className="w-6 h-6" />,
        isActive: true,
    },
    {
        id: 3,
        title: "QUICKLY DELIVERY",
        description:
            "Experience efficient service ensuring your food arrives hot and fresh.",
        icon: <Truck className="w-6 h-6" />,
        isActive: false,
    },
];

const HowWeServe = () => {
    return (
        <section className="py-20 bg-[#FEF9F2] overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#00A859] font-serif italic text-2xl mb-4"
                    >
                        Food Processing
                    </motion.h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
                        How We Serve You?
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Desktop Horizontal Line */}
                    <div
                        className="hidden lg:block absolute top-1/2 left-[15%] w-[70%] h-[2px] bg-dashed-line -translate-y-1/2 z-0 opacity-20"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #00A859 50%, transparent 50%)",
                            backgroundSize: "20px 1px",
                        }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon / Circle */}
                                <div
                                    className={`
                                    relative w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all duration-500
                                    ${
                                        step.isActive
                                            ? "bg-[#00A859] text-white shadow-2xl shadow-[#00A859]/30 scale-110"
                                            : "bg-white text-[#00A859] border border-gray-100 shadow-sm"
                                    }
                                `}
                                >
                                    {step.icon}

                                    {/* Step Number Badge */}
                                    <span
                                        className={`
                                        absolute -top-1 -right-1 w-7 h-7 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#FEF9F2]
                                        ${
                                            step.isActive
                                                ? "bg-[#FF385C] text-white"
                                                : "bg-gray-200 text-gray-500"
                                        }
                                    `}
                                    >
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`
                                    w-full max-w-sm px-6 py-10 rounded-[2rem] transition-all duration-300
                                    ${
                                        step.isActive
                                            ? "bg-white shadow-xl lg:-translate-y-4"
                                            : "bg-transparent"
                                    }
                                `}
                                >
                                    <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#1A1A1A]">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Mobile Vertical Connector Line (only show between items) */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden h-12 w-[2px] bg-gradient-to-b from-[#00A859]/40 to-transparent mt-4" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeServe;
