"use client";

import React from "react";
import { MoveRight, Utensils } from "lucide-react";
import { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
// Ensure these assets exist
import doroWatImg from "../assets/images/jebenalogo.png";
import meatPlatterImg from "../assets/images/jebenalogo.png";
import veggieImg from "../assets/images/jebenalogo.png";

interface PromoCard {
    title: string;
    subtitle: string;
    badge?: string;
    description?: string;
    bgClass: string;
    image: StaticImageData;
    buttonType: "link" | "button";
}

const cards: PromoCard[] = [
    {
        title: "Traditional Doro Wat",
        subtitle: "Spiced to Perfection",
        badge: "AUTHENTIC SPICES",
        bgClass: "bg-[#1a1a1a]",
        image: doroWatImg,
        buttonType: "link",
    },
    {
        title: "Signature Meat Platter",
        subtitle: "Chef's Special",
        description: "Freshly Prepared Kitfo & Tibs",
        bgClass: "bg-[#ff6b00]",
        image: meatPlatterImg,
        buttonType: "button",
    },
    {
        title: "Vegetarian Combo",
        subtitle: "Healthy & Flavorful",
        badge: "MADE WITH LOVE",
        bgClass: "bg-[#4a0404]",
        image: veggieImg,
        buttonType: "link",
    },
];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Time between each card appearing
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const PromoCards: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 xs:px-6 lg:px-8">
                
                {/* Header Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#00A859] font-serif italic text-2xl mb-4">
                        Experience Chamblee&apos;s Finest
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
                        Taste of Ethiopia
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className={`${card.bgClass} rounded-3xl overflow-hidden relative min-h-[360px] p-8 flex flex-col justify-center shadow-2xl group`}
                        >
                            {/* Content Layer */}
                            <div className="relative z-30 w-full sm:w-3/5">
                                <motion.span 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="text-[#FFC12B] font-bold text-sm uppercase tracking-wider block mb-2"
                                >
                                    {card.subtitle}
                                </motion.span>
                                
                                <h3 className="text-white text-3xl font-bold leading-tight mb-4">
                                    {card.title}
                                </h3>

                                {card.description && (
                                    <p className="text-white/80 text-sm mb-6 font-medium italic leading-relaxed">
                                        {card.description}
                                    </p>
                                )}

                                {card.buttonType === "link" ? (
                                    <button className="flex items-center gap-2 text-white font-bold hover:text-[#FFC12B] transition-colors group/btn">
                                        View Details
                                        <MoveRight
                                            size={18}
                                            className="group-hover/btn:translate-x-2 transition-transform"
                                        />
                                    </button>
                                ) : (
                                    <motion.button 
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#FFC12B] text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg"
                                    >
                                        <Utensils size={18} /> Order Now
                                    </motion.button>
                                )}
                            </div>

                            {/* Badge Animation */}
                            {card.badge && (
                                <motion.div 
                                    initial={{ scale: 0, rotate: 15 }}
                                    whileInView={{ scale: 1, rotate: -12 }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 200, 
                                        delay: 0.6 + index * 0.1 
                                    }}
                                    className="absolute top-6 right-6 border-2 border-dashed border-white/30 rounded-full w-24 h-24 flex items-center justify-center z-10 bg-black/10 backdrop-blur-sm"
                                >
                                    <span className="text-white text-[10px] font-black text-center leading-tight uppercase px-2">
                                        {card.badge}
                                    </span>
                                </motion.div>
                            )}

                            {/* Hover info effect */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-40 text-white text-[10px] font-mono transition-opacity duration-300">
                                3654 Clairmont Rd
                            </div>
                            
                            {/* Subtle Background Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PromoCards;