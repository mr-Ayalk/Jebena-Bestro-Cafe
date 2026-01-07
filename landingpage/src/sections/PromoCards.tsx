import React from "react";
import { MoveRight, ShoppingCart } from "lucide-react";
// UPDATED IMPORT PATH:
import pizzaimage from "../assets/images/jebenalogo.png";

const cards = [
    {
        title: "Delicious & Hot Pizza",
        subtitle: "Crispy, Every Bite Taste",
        badge: "UP TO SAVE 50% OFF",
        bgClass: "bg-[#1a1a1a]",
        image: pizzaimage,
        buttonType: "link",
    },
    {
        title: "French Fry",
        subtitle: "Today Delicious",
        description: "This Weekend Only",
        bgClass: "bg-[#ff6b00]",
        image: pizzaimage,
        buttonType: "button",
    },
    {
        title: "Chiken & French Fry",
        subtitle: "Crispy, Every Bite Taste",
        badge: "HOT DEAL",
        bgClass: "bg-[#4a0404]",
        image: pizzaimage,
        buttonType: "link",
    },
];

const PromoCards = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container">
                {/* Responsive Grid: 1 col on mobile, 3 cols on desktop (lg: 1024px) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`${card.bgClass} rounded-2xl overflow-hidden relative min-h-[320px] p-8 flex flex-col justify-center group transition-transform duration-300 hover:-translate-y-1 shadow-md`}
                        >
                            {/* Content Layer */}
                            <div className="relative z-10 w-3/5">
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
                                    <button className="flex items-center gap-2 text-white font-bold hover:text-[#FFC12B] transition-colors">
                                        Order Now <MoveRight size={18} />
                                    </button>
                                ) : (
                                    <button className="bg-[#FFC12B] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-all">
                                        <ShoppingCart size={18} /> Order Now
                                    </button>
                                )}
                            </div>

                            {/* Decorative Badge */}
                            {card.badge && (
                                <div className="absolute top-6 right-6 border-2 border-dashed border-white/30 rounded-full w-20 h-20 flex items-center justify-center rotate-12">
                                    <span className="text-white text-[10px] font-bold text-center leading-tight">
                                        {card.badge}
                                    </span>
                                </div>
                            )}

                            {/* Updated Product Image Container */}
                            <div className="absolute right-[-20px] bottom-[-20px] w-2/3 h-full z-20 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-contain object-right-bottom"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoCards;
