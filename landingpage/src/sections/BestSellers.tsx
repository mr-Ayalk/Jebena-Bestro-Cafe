"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import HeroImage from "../app/assets/images/hero.png";
import KitifoImage from "../app/assets/images/kitifo.png";
import ShekilaTibis from "../app/assets/images/shekilatibis.png";
import Sigawot from "../app/assets/images/sigawot.png";
import Dorowot from "../app/assets/images/dorowot.png";
import Shirowot from "../app/assets/images/shirowot.png";
import Ayinet from "../app/assets/images/ayinet.png";
import Gomenbesiga from "../app/assets/images/gomenbesiga.png";
import Coffee from "../app/assets/images/coffee.png";
import Assa from "../app/assets/images/assa1.png";
import Tea from "../app/assets/images/tea.png";
import Henikin from "../app/assets/images/habeshbear.png";
const dishes = [
    {
        id: 1,
        name: "Doro Wat",
        image: Dorowot,
        description:
            "The most famous Ethiopian dish. Spicy chicken stew simmered in berbere and served with a boiled egg.",
        ingredients: ["Chicken", "Berbere", "Boiled Egg", "Injera"],
        tags: ["Spicy", "National Dish"],
    },
    {
        id: 2,
        name: "Kitfo Special",
        image: KitifoImage,
        description:
            "Finely minced lean beef seasoned with mitmita and niter kibbeh (spiced butter).",
        ingredients: ["Minced Beef", "Mitmita", "Niter Kibbeh", "Ayib Cheese"],
        tags: ["Traditional", "Chef's Choice"],
    },
    {
        id: 3,
        name: "Shekila Tibs",
        image: ShekilaTibis,
        description:
            "Succulent beef or lamb sautéed with onions, rosemary, and jalapeños, served sizzling.",
        ingredients: ["Beef/Lamb", "Rosemary", "Garlic", "Green Chilies"],
        tags: ["Sizzling", "Popular"],
    },
    {
        id: 4,
        name: "Siga Wat",
        image: Sigawot,
        description:
            "Tender beef cubes slow-cooked in a rich, spicy traditional red onion sauce.",
        ingredients: ["Beef", "Berbere", "Onions", "Spiced Butter"],
        tags: ["Hearty", "Spicy"],
    },
    {
        id: 5,
        name: "Miten Shiro",
        image: Shirowot,
        description:
            "A thick, savory chickpea powder stew cooked with garlic and ginger. A vegan favorite.",
        ingredients: ["Chickpeas", "Garlic", "Ginger", "Injera"],
        tags: ["Vegan", "High Protein"],
    },
    {
        id: 6,
        name: "Veggie Combo",
        image: Ayinet,
        description:
            "A colorful sampler of Gomen, Misir Wat, and various sautéed plant-based delights.",
        ingredients: ["Lentils", "Collard Greens", "Cabbage", "Carrots"],
        tags: ["Healthy", "Vegan"],
    },
    {
        id: 7,
        name: "Gomen Besiga",
        image: Gomenbesiga,
        description:
            "Collard greens sautéed with tender beef chunks, garlic, and ginger.",
        ingredients: ["Collard Greens", "Beef", "Garlic", "Ginger"],
        tags: ["Traditional"],
    },
    {
        id: 8,
        name: "Assa Tibs",
        image: Assa,
        description:
            "Fried Tilapia fish cubes sautéed with onions, tomatoes, and spicy berbere.",
        ingredients: ["Tilapia", "Tomato", "Onion", "Berbere"],
        tags: ["Seafood", "Spicy"],
    },
    {
        id: 9,
        name: "Key Wat",
        image: HeroImage,
        description:
            "Beef stew cooked with spicy berbere sauce and flavored with garlic and ginger.",
        ingredients: ["Beef", "Berbere", "Injera"],
        tags: ["Spicy"],
    },

    {
        id: 10,
        name: "Traditional Coffee",
        image: Coffee,
        description:
            "Authentic Ethiopian Coffee (Jebena Buna) freshly roasted and served with a smoky aroma.",
        ingredients: ["Fresh Coffee Beans", "Smoky Aroma", "Traditional Pot"],
        tags: ["Drink", "Tradition"],
    },
    {
        id: 11,
        name: "Habesha Beer",
        image: Henikin,
        description:
            "The pride of Ethiopia. A crisp, refreshing lager that pairs perfectly with spicy stews.",
        ingredients: ["Ethiopian Malt", "Hops", "Pure Water"],
        tags: ["Alcoholic", "Imported"],
    },

    {
        id: 12,
        name: "Aromatic Tea",
        image: Tea,
        description:
            "Hot tea infused with traditional Ethiopian spices like cinnamon and cloves.",
        ingredients: ["Tea Leaves", "Cinnamon", "Cloves"],
        tags: ["Drink", "Warm"],
    },
];

const BestSellers = () => {
    const [showAll, setShowAll] = useState(false);

    // Logic to show either 8 or all items
    const visibleDishes = showAll ? dishes : dishes.slice(0, 8);

    return (
        <section className="bg-[#FEF9F2] py-20 overflow-hidden" id="dishes">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#333] mb-4">
                        <h4 className="text-[#00A859] font-serif  italic text-2xl mb-4">
                            Explore
                        </h4>
                        Our Best Dishes
                    </h2>
                    <p className="text-[#666] font-sans leading-relaxed">
                        Experience the authentic soul of Ethiopia. Each dish is
                        prepared using traditional techniques and spices sourced
                        directly from the Ethiopian highlands.
                    </p>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleDishes.map((dish, idx) => (
                            <motion.div
                                key={dish.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    transition: { duration: 0.2 },
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.05,
                                }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[30px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full"
                            >
                                {/* Dish Image */}
                                <div className="relative aspect-square w-full group">
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                        {dish.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[9px] font-bold uppercase text-[#E92348]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Dish Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold font-poppins text-[#333]">
                                            {dish.name}
                                        </h3>
                                        <div className="flex items-center text-yellow-400">
                                            <Star
                                                size={14}
                                                className="fill-current"
                                            />
                                            <span className="ml-1 text-xs text-gray-500 font-bold">
                                                5.0
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2 italic">
                                        &quot;{dish.description}&quot;
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-1">
                                            {dish.ingredients
                                                .slice(0, 3)
                                                .map((ing) => (
                                                    <span
                                                        key={ing}
                                                        className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded-md text-[10px] font-medium border border-gray-100"
                                                    >
                                                        {ing}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Toggle Button Container */}
                <div className="flex justify-center mt-12">
                    <motion.button
                        layout
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 bg-[#F54748] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d43d3e] transition-all shadow-lg hover:shadow-red-200"
                    >
                        {showAll ? (
                            <>
                                See Less <ChevronUp size={20} />
                            </>
                        ) : (
                            <>
                                See More Dishes <ChevronDown size={20} />
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
