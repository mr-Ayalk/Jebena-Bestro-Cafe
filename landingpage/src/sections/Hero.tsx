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
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
            <div className="absolute inset-0 bg-black/50 z-[1]" />

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-4 xs:px-6 flex flex-col justify-center min-h-[calc(100vh-80px)] py-12 text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-2xl lg:max-w-4xl">
                    <motion.p
                        variants={itemVariants}
                        className="text-xs xs:text-sm font-medium mb-4 tracking-[0.2em] xs:tracking-widest uppercase"
                    >
                        AUTHENTIC{" "}
                        <span className="font-bold text-[#00A859]">
                            FLAVORS
                        </span>
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
                    >
                        Experience the <br className="hidden xs:block" />
                        <span className="text-[#00A859]">Heart </span>of
                        Ethiopia.
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="mb-8 xs:mb-10"
                    >
                        <span className="text-gray-100 text-base xs:text-lg md:text-xl block xs:inline">
                            Freshly prepared{" "}
                            <span className="text-[#00A859] underline decoration-2 underline-offset-8">
                                traditional dishes
                            </span>{" "}
                            every day
                        </span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mb-10 xs:mb-12"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#f13a5b",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full xs:w-fit bg-[#E92348] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg transition-colors"
                        >
                            <Truck size={20} />
                            Order Now
                        </motion.button>
                    </motion.div>

                    {/* Email Subscription Box */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-md bg-white rounded-2xl xs:rounded-full p-1.5 flex flex-col xs:flex-row items-center shadow-2xl gap-2 xs:gap-0"
                    >
                        <div className="flex items-center w-full px-2">
                            <Send
                                size={18}
                                className="ml-2 text-gray-400 hidden xs:block"
                            />
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 xs:py-2 outline-none text-gray-800 bg-transparent text-sm"
                            />
                        </div>
                        <button className="w-full xs:w-auto bg-[#E92348] text-white px-8 py-3 rounded-xl xs:rounded-full font-semibold hover:bg-[#c41d3d] transition-colors text-sm">
                            Subscribe
                        </button>
                    </motion.div>
                </div>

                {/* Promo Circle - Positioned for Large Screens only */}
                <motion.div
                    className="absolute top-1/2 right-4 xl:right-10 hidden xl:block -translate-y-1/2"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -5 }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.1,
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
                        className="bg-[#E92348] px-8 py-6 xl:px-12 xl:py-8 rounded-full shadow-2xl"
                    >
                        <div className="border-2 border-dashed border-white/40 p-4 rounded-full text-white text-center">
                            <span className="text-[10px] xl:text-xs uppercase">
                                MADE
                            </span>
                            <div className="text-2xl xl:text-4xl font-bold">
                                WITH
                            </div>
                            <span className="text-[10px] xl:text-xs uppercase">
                                {" "}
                                LOVE
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
