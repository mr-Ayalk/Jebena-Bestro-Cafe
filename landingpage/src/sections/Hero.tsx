"use client";
import React from "react";
import { Send, Truck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Hero: React.FC = () => {
    // Variants for staggered children
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smooth custom ease
        },
    };

    return (
        <section className="relative min-h-screen overflow-hidden pt-20 bg-neutral-900">
            {/* Background Image with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url(/images/herobanner.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Overlay to ensure contrast */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-2xl lg:max-w-4xl">
                    <motion.p
                        variants={itemVariants}
                        className="text-sm font-medium mb-4 tracking-widest"
                    >
                        AUTHENTIC{" "}
                        <span className="font-bold text-[#00A859]">
                            FLAVORS
                        </span>
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
                    >
                        Experience the <br />
                        <span className="text-[#00A859]">Heart </span>of
                        Ethiopia.
                    </motion.h1>

                    <motion.div variants={itemVariants} className="mb-10">
                        <span className="text-gray-100 text-lg md:text-xl">
                            Freshly prepared{" "}
                            <span className="text-[#00A859] underline decoration-2 underline-offset-8">
                                traditional dishes
                            </span>{" "}
                            every day
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-12">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#f13a5b",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#E92348] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold shadow-lg transition-colors"
                        >
                            <Truck size={20} />
                            Order Now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-md bg-white rounded-full p-1.5 flex items-center shadow-2xl"
                    >
                        <Send size={18} className="ml-4 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-2 outline-none text-gray-800 bg-transparent"
                        />
                        <button className="bg-[#E92348] text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-[#c41d3d] transition-colors">
                            Subscribe
                        </button>
                    </motion.div>
                </div>

                {/* Promo Circle - Floating & Entry Animation */}
                <motion.div
                    className="absolute top-1/2 right-10 hidden lg:block -translate-y-1/2"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -5 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1,
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="bg-[#E92348] px-12 py-6 rounded-full shadow-2xl"
                    >
                        <div className="border-2 border-dashed border-white/40 p-4 rounded-full text-white text-center">
                            <span className="text-xs uppercase">MADE</span>
                            <div className="text-4xl font-bold">WITH</div>
                            <span className="text-xs uppercase"> LOVE</span>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
