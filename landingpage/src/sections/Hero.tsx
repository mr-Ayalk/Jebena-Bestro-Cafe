"use client";
import React from "react";
import { Send, Truck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Hero: React.FC = () => {
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
        <section className="relative h-screen  w-full overflow-hidden pt-28">
            {/* Background Image - Forced to cover full screen height */}
            <motion.div
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 h-full w-full"
                style={{
                    backgroundImage: "url(/images/herobanner.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />

            {/* Darker Overlay for better readability on mobile */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />

            {/* Content Container */}
            <motion.div
                className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl">
                    <motion.p
                        variants={itemVariants}
                        className="text-[10px] xs:text-xs font-bold mb-4 tracking-[0.3em] uppercase text-[#00A859]"
                    >
                        AUTHENTIC <span className="text-white">FLAVORS</span>
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6"
                    >
                        Experience the <br className="hidden xs:block" />
                        <span className="text-[#00A859]">Heart </span>of
                        Ethiopia.
                    </motion.h1>

                    <motion.div variants={itemVariants} className="mb-8">
                        <p className="text-gray-200 text-base md:text-xl max-w-lg leading-relaxed">
                            Freshly prepared{" "}
                            <span className="text-[#00A859] font-semibold underline decoration-2 underline-offset-8">
                                traditional dishes
                            </span>{" "}
                            every day
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-fit bg-[#E92348] text-white px-10 py-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-xl transition-all"
                        >
                            <Truck size={20} />
                            Order Now
                        </motion.button>
                    </motion.div>

                    {/* Improved Subscription Box for Mobile */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-md"
                    >
                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex flex-col sm:flex-row gap-2">
                            <div className="flex items-center flex-1 px-3 py-2">
                                <Send size={18} className="text-gray-300" />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 outline-none bg-transparent text-white text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <button className="w-full sm:w-auto bg-[#E92348] hover:bg-[#c41d3d] text-white px-8 py-3 rounded-xl font-bold transition-all text-sm shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Promo Circle - Now hidden on small screens to avoid overlap */}
                <motion.div
                    className="absolute top-1/2 right-10 hidden xl:block -translate-y-1/2"
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
                        className="bg-[#E92348] px-12 py-8 rounded-full shadow-2xl"
                    >
                        <div className="border-2 border-dashed border-white/40 p-4 rounded-full text-white text-center">
                            <span className="text-xs uppercase tracking-widest">
                                MADE
                            </span>
                            <div className="text-4xl font-black">WITH</div>
                            <span className="text-xs uppercase tracking-widest">
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
;
