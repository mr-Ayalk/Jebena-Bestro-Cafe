import React from "react";
import { MoveRight, Utensils } from "lucide-react";
import { StaticImageData } from "next/image";
// Ensure these assets exist or replace with your relevant Ethiopian food images
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
        bgClass: "bg-[#1a1a1a]", // Black background for a premium look
        image: doroWatImg,
        buttonType: "link",
    },
    {
        title: "Signature Meat Platter",
        subtitle: "Chef's Special",
        description: "Freshly Prepared Kitfo & Tibs",
        bgClass: "bg-[#ff6b00]", // Vibrant orange matching Ethiopian warmth
        image: meatPlatterImg,
        buttonType: "button",
    },
    {
        title: "Vegetarian Combo",
        subtitle: "Healthy & Flavorful",
        badge: "MADE WITH LOVE",
        bgClass: "bg-[#4a0404]", // Deep maroon reflecting traditional Berbere
        image: veggieImg,
        buttonType: "link",
    },
];

const PromoCards = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 xs:px-6 lg:px-8">
                {/* Header for the Section */}
                <div className="text-center mb-12">
                    <h4 className="text-[#00A859] font-serif  italic text-2xl mb-4">
                        Experience Chamblee&apos;s Finest
                    </h4>
                    <h2 className="text-4xl font-black text-[#1A1A1A] uppercase">
                        Taste of Ethiopia
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`${card.bgClass} rounded-2xl overflow-hidden relative min-h-[340px] p-8 flex flex-col justify-center group transition-transform duration-300 hover:-translate-y-2 shadow-xl`}
                        >
                            {/* Content Layer */}
                            <div className="relative z-30 w-full sm:w-3/5">
                                <span className="text-[#FFC12B] font-bold text-sm uppercase tracking-wider block mb-2">
                                    {card.subtitle}
                                </span>
                                <h3 className="text-white text-3xl font-bold leading-tight mb-4">
                                    {card.title}
                                </h3>

                                {card.description && (
                                    <p className="text-white/80 text-sm mb-4 font-medium italic">
                                        {card.description}
                                    </p>
                                )}

                                {card.buttonType === "link" ? (
                                    <button className="flex items-center gap-2 text-white font-bold hover:text-[#FFC12B] transition-colors group/btn">
                                        View Details
                                        <MoveRight
                                            size={18}
                                            className="group-hover/btn:translate-x-1 transition-transform"
                                        />
                                    </button>
                                ) : (
                                    <button className="bg-[#FFC12B] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg active:scale-95">
                                        <Utensils size={18} /> Order Now
                                    </button>
                                )}
                            </div>

                            {/* Decorative Badge (Replaces Discount Circles) */}
                            {card.badge && (
                                <div className="absolute top-6 right-6 border-2 border-dashed border-white/30 rounded-full w-24 h-24 flex items-center justify-center -rotate-12 z-10 bg-black/10 backdrop-blur-sm">
                                    <span className="text-white text-[10px] font-black text-center leading-tight uppercase px-2">
                                        {card.badge}
                                    </span>
                                </div>
                            )}

                            {/* Background Contact Info (Subtle Brand Reinforcement) */}
                            <div className="absolute bottom-4 right-6 opacity-10 text-white text-[10px] font-mono hidden group-hover:block transition-opacity">
                                3654 Clairmont Rd
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoCards;
