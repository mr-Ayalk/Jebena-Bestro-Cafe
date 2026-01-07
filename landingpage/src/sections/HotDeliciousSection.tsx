"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import pizzaimage from "../assets/images/jebenalogo.png";
type Category = "Chicken Fry" | "Pizza" | "Burger" | "Deserts";

interface FoodItem {
    id: number;
    name: string;
    description: string;
    image: string | StaticImageData;
    category: Category;
}

const foodData: FoodItem[] = [
    {
        id: 1,
        name: "Chicago Deep Pizza.",
        description:
            "Its the perfect dining experience where Experience quick and efficient",
        image: pizzaimage,
        category: "Pizza",
    },
    {
        id: 2,
        name: "FAST FOOD COMBO",
        description:
            "Its the perfect dining experience where Experience quick and efficient",
        image: pizzaimage,
        category: "Chicken Fry",
    },
    {
        id: 3,
        name: "FAST FOOD COMBO",
        description:
            "Its the perfect dining experience where Experience quick and efficient",
        image: pizzaimage,
        category: "Chicken Fry",
    },
    {
        id: 4,
        name: "FAST FOOD COMBO",
        description:
            "Its the perfect dining experience where Experience quick and efficient",
        image: pizzaimage,
        category: "Chicken Fry",
    },

    // Add more items for Burgers and Deserts...
];
const HotDeliciousSection = () => {
    const [activeCategory, setActiveCategory] =
        useState<Category>("Chicken Fry");

    const categories: Category[] = [
        "Chicken Fry",
        "Pizza",
        "Burger",
        "Deserts",
    ];

    // Filter items based on selected category
    const filteredItems = foodData.filter(
        (item) => item.category === activeCategory
    );

    return (
        <section className="py-20 bg-[#F9F9F9]">
            <div className="container mx-auto text-center">
                <span className="text-[#00A859] font-bold text-sm uppercase tracking-widest block mb-2">
                    About Our Food
                </span>
                <h2 className="text-4xl font-black text-gray-900 mb-10 font-poppins">
                    Hot Delicious Item
                </h2>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                                activeCategory === cat
                                    ? "bg-[#FFC12B] text-black shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Display Filtered Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center"
                        >
                            <div className="relative w-48 h-48 mb-6 transition-transform duration-500 group-hover:scale-110  overflow-hidden shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotDeliciousSection;
