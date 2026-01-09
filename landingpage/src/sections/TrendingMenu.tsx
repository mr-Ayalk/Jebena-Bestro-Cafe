"use client";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
    {
        name: "Especial Kitfo",
        price: "$18.00",
        desc: "Specially made kitfo, minced beef with our homemade butter, mitmita, and fresh seasoning. Served with house cottage cheese, gomen, and seasoning.",
    },
    {
        name: "Tibs (Beef or Lamb)",
        price: "$17.00",
        desc: "Sliced beef or lamb, pan fried in oil, garlic, onion, tomato and jalapenos. Served derek, lega, or awaze style with a side of Injera or bread.",
    },
    {
        name: "Fish Tibs",
        price: "$18.00",
        desc: "Tilapia fish tibs with fresh onion, tomato, garlic and jalapeño or fish dulet mild spicy. Served with Injera or bread.",
    },
    {
        name: "Miten Shiro",
        price: "$16.00",
        desc: "Tasty stew made from powdered chickpeas, fresh onions, garlic, and our house seasoning.",
    },
    {
        name: "Veggie Platters",
        price: "$17.00",
        desc: "A healthy and vibrant variety of different kinds of traditional Ethiopian vegetables served with Injera.",
    },
    {
        name: "Spaghetti",
        price: "$14.00",
        desc: "Spaghetti served with traditional Ethiopian style sigo/sauce. Add fish or meat for $4.00.",
    },
    {
        name: "Traditional Ethiopian Coffee",
        price: "$15.00",
        desc: "Bunna Buna: Freshly roasted Ethiopian Coffee; served in a traditional coffee pot called 'Jebena'.",
    },
    {
        name: "Tomato Salad / Fit Fit",
        price: "$8.00",
        desc: "Fresh tomato sliced, onion, jalapeño and home made fresh seasoning dressing.",
    },
];

const TrendingMenu = () => {
    return (
        <section className="py-16 xs:py-24 bg-white" id="menu">
            <div className="container mx-auto px-4 xs:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 xs:mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#00A859] font-serif italic text-xl xs:text-2xl mb-3 xs:mb-4"
                    >
                        Experience Chamblee&apos;s Finest
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl xs:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight "
                    >
                        Authentic{" "}
                        <span className="text-[#E92348]">Ethiopian</span> Menu
                    </motion.h2>
                </div>

                {/* Menu Board */}
                <div className="max-w-6xl mx-auto border border-gray-100 rounded-[2rem] xs:rounded-[3rem] p-6 xs:p-10 md:p-16 shadow-[0_10px_50px_rgba(0,0,0,0.03)] bg-[#FCFDFD]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-10 xs:gap-y-12">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group cursor-default"
                            >
                                <div className="flex flex-col xs:flex-row justify-between items-start xs:items-baseline mb-2 xs:mb-3 gap-1 xs:gap-0">
                                    <h3 className="font-black text-[#1A1A1A] text-base xs:text-lg uppercase tracking-tight group-hover:text-[#E92348] transition-colors">
                                        {item.name}
                                    </h3>

                                    {/* Dotted Line - Hidden on very small screens if title is long */}
                                    <div className="hidden xs:block flex-grow mx-4 border-b border-dotted border-gray-300 mb-1 opacity-50"></div>

                                    <span className="text-[#E92348] font-black text-lg xs:text-xl">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-xs xs:text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Info Branding */}
                    <div className="mt-12 xs:mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-[10px] xs:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                Visit Us
                            </p>
                            <p className="text-gray-800 font-bold text-sm">
                                3654 Clairmont Rd, Chamblee, GA 30341
                            </p>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-[10px] xs:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                Call for Pickup
                            </p>
                            <a
                                href="tel:4049874466"
                                className="text-[#00A859] font-black text-xl hover:text-[#008c4a] transition-colors"
                            >
                                (404) 987-4466
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingMenu;
