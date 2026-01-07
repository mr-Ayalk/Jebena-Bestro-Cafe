import React from "react";
import { ArrowRight, ShoppingCart } from "lucide-react";

const promoData = [
    {
        title: "Delicious & Hot Pizza",
        subtitle: "Crispy, Every Bite Taste",
        offer: "UP TO SAVE 50% OFF",
        bg: "bg-[#121212]",
        textColor: "text-white",
        image: "/pizza-promo.png", // Replace with your image
        type: "link",
    },
    {
        title: "French Fry",
        subtitle: "Today Delicious",
        desc: "This Weekend Only",
        bg: "bg-[#E35E14]",
        textColor: "text-white",
        image: "/fries-promo.png", // Replace with your image
        type: "button",
    },
    {
        title: "Chiken & French Fry",
        subtitle: "Crispy, Every Bite Taste",
        offer: "HOT DEAL",
        bg: "bg-[#4D0606]",
        textColor: "text-white",
        image: "/chicken-promo.png", // Replace with your image
        type: "link",
    },
];

const PromoGrid = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {promoData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${item.bg} rounded-2xl p-8 relative overflow-hidden min-h-[300px] flex flex-col justify-center group shadow-xl`}
                        >
                            <div className="relative z-10 w-2/3">
                                <span className="text-[#FFC12B] font-bold text-sm uppercase mb-2 block font-poppins">
                                    {item.subtitle}
                                </span>
                                <h3
                                    className={`${item.textColor} text-3xl font-bold mb-4 leading-tight`}
                                >
                                    {item.title}
                                </h3>

                                {item.desc && (
                                    <p className="text-white/80 italic text-sm mb-4">
                                        {item.desc}
                                    </p>
                                )}

                                {item.type === "link" ? (
                                    <button className="flex items-center gap-2 text-white font-bold hover:text-[#FFC12B] transition-colors">
                                        Order Now <ArrowRight size={18} />
                                    </button>
                                ) : (
                                    <button className="bg-[#FFC12B] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-all transform active:scale-95">
                                        <ShoppingCart size={18} /> Order Now
                                    </button>
                                )}
                            </div>

                            {/* Offer Badge Overlay */}
                            {item.offer && (
                                <div className="absolute top-6 right-6 border-2 border-dashed border-white/20 rounded-full w-24 h-24 flex items-center justify-center rotate-12">
                                    <span className="text-white text-[10px] font-bold text-center leading-tight px-2">
                                        {item.offer}
                                    </span>
                                </div>
                            )}

                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute right-[-10%] bottom-[-5%] w-1/2 h-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoGrid;
