"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Star, Search } from "lucide-react";

// --- Keep your imports here ---
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
import Henikin from "../app/assets/images/spageti.png";
import salad from "../app/assets/images/salad.png";

const dishes = [
    {
        id: 1,
        name: "Especial Kitfo",
        image: KitifoImage,
        description:
            "Finely minced lean beef seasoned with mitmita and niter kibbeh (spiced butter).",
        ingredients: ["Minced Beef", "Mitmita", "Niter Kibbeh", "Ayib Cheese"],
        tags: ["Traditional", "Chef's Choice"],
    },
    {
        id: 2,
        name: "Tibs (Beef or Lamb)",
        image: ShekilaTibis,
        description:
            "Succulent beef or lamb sautéed with onions, rosemary, and jalapeños, served sizzling.",
        ingredients: ["Beef/Lamb", "Rosemary", "Garlic", "Green Chilies"],
        tags: ["Sizzling", "Popular"],
    },
    {
        id: 3,
        name: "Fish Tibs",
        image: Assa,
        description:
            "Fried Tilapia fish cubes sautéed with onions, tomatoes, and spicy berbere.",
        ingredients: ["Tilapia", "Tomato", "Onion", "Berbere"],
        tags: ["Seafood", "Spicy"],
    },
    {
        id: 4,
        name: "Miten Shiro",
        image: Shirowot,
        description:
            "A thick, savory chickpea powder stew cooked with garlic and ginger. A vegan favorite.",
        ingredients: ["Chickpeas", "Garlic", "Ginger", "Injera"],
        tags: ["Vegan", "High Protein"],
    },
    {
        id: 5,
        name: "Veggie Platters",
        image: Ayinet,
        description:
            "A colorful sampler of Gomen, Misir Wat, and various sautéed plant-based delights.",
        ingredients: ["Lentils", "Collard Greens", "Cabbage", "Carrots"],
        tags: ["Healthy", "Vegan"],
    },
    {
        id: 6,
        name: "Spaghetti",
        image: Henikin,
        description:
            "Spaghetti served with traditional Ethiopian style sigo/sauce",
        ingredients: ["Spaghetti", "sigo/sauce"],
        tags: ["Spaghetti", "Imported"],
    },
    {
        id: 7,
        name: "Tomato Salad / Fit Fit",
        image: salad,
        description:
            "Fresh tomato sliced, onion, jalapeño and home made fresh seasoning dressing.",
        ingredients: ["tomato sliced", "onion", "jalapeño"],
        tags: ["Spicy", "National Dish"],
    },
    {
        id: 8,
        name: "Doro Wat",
        image: Dorowot,
        description:
            "The most famous Ethiopian dish. Spicy chicken stew simmered in berbere and served with a boiled egg.",
        ingredients: ["Chicken", "Berbere", "Boiled Egg", "Injera"],
        tags: ["Spicy", "National Dish"],
    },
    {
        id: 9,
        name: "Siga Wat",
        image: Sigawot,
        description:
            "Tender beef cubes slow-cooked in a rich, spicy traditional red onion sauce.",
        ingredients: ["Beef", "Berbere", "Onions", "Spiced Butter"],
        tags: ["Hearty", "Spicy"],
    },
    {
        id: 10,
        name: "Gomen Besiga",
        image: Gomenbesiga,
        description:
            "Collard greens sautéed with tender beef chunks, garlic, and ginger.",
        ingredients: ["Collard Greens", "Beef", "Garlic", "Ginger"],
        tags: ["Traditional"],
    },
    {
        id: 11,
        name: "Key Wat",
        image: HeroImage,
        description:
            "Beef stew cooked with spicy berbere sauce and flavored with garlic and ginger.",
        ingredients: ["Beef", "Berbere", "Injera"],
        tags: ["Spicy"],
    },
    {
        id: 12,
        name: "Traditional Coffee",
        image: Coffee,
        description:
            "Authentic Ethiopian Coffee (Jebena Buna) freshly roasted and served with a smoky aroma.",
        ingredients: ["Fresh Coffee Beans", "Smoky Aroma", "Traditional Pot"],
        tags: ["Drink", "Tradition"],
    },
    {
        id: 13,
        name: "Spaghetti Extra",
        image: Henikin,
        description:
            "The pride of Ethiopia. A crisp, refreshing lager that pairs perfectly with spicy stews.",
        ingredients: ["Ethiopian Malt", "Hops", "Pure Water"],
        tags: ["Alcoholic", "Imported"],
    },
    {
        id: 14,
        name: "Aromatic Tea",
        image: Tea,
        description:
            "Hot tea infused with traditional Ethiopian spices like cinnamon and cloves.",
        ingredients: ["Tea Leaves", "Cinnamon", "Cloves"],
        tags: ["Drink", "Warm"],
    },
];

const BestSellers2 = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Optimized filtering logic
    const filteredDishes = useMemo(() => {
        return dishes.filter(
            (dish) =>
                dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                dish.tags.some((tag) =>
                    tag.toLowerCase().includes(searchTerm.toLowerCase())
                )
        );
    }, [searchTerm]);

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="bg-[#FEF9F2] py-24 overflow-hidden" id="dishes">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={headerVariants}
                    className="text-center max-w-2xl mx-auto mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#333] mb-4">
                        <span className="text-[#00A859] font-serif italic text-2xl block mb-2">
                            Explore
                        </span>
                        Our Full Menu
                    </h2>
                </motion.div>

                {/* Search Bar Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto mb-16 relative"
                >
                    <div className="relative group">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E92348] transition-colors"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search for a dish (e.g., Kitfo, Spicy, Vegan)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white shadow-md border border-gray-100 outline-none focus:ring-2 focus:ring-[#E92348]/20 focus:border-[#E92348] transition-all font-medium text-gray-700"
                        />
                    </div>
                </motion.div>

                {/* Grid Section */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredDishes.length > 0 ? (
                            filteredDishes.map((dish) => (
                                <motion.div
                                    key={dish.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 22,
                                    }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-50 flex flex-col h-full group"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden">
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

                                    {/* Content Container */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-xl font-bold text-[#333]">
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
                                        <p className="text-gray-500 text-xs mb-4 italic line-clamp-2">
                                            &quot;{dish.description}&quot;
                                        </p>
                                        <div className="mt-auto flex flex-wrap gap-1">
                                            {dish.ingredients
                                                .slice(0, 3)
                                                .map((ing) => (
                                                    <span
                                                        key={ing}
                                                        className="bg-gray-50 text-gray-400 px-2 py-0.5 rounded text-[10px] border border-gray-100"
                                                    >
                                                        {ing}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-gray-400"
                            >
                                <p className="text-xl font-medium">
                                    No dishes found matching &quot;{searchTerm}
                                    &quot;
                                </p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="mt-4 text-[#E92348] font-bold hover:underline"
                                >
                                    Clear search
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default BestSellers2;
