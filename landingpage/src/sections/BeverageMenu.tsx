"use client";
import React from "react";
import { Coffee, GlassWater, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const BeverageMenu = () => {
    const hotDrinks = [
        {
            name: "Traditional Ethiopian Coffee",
            price: "$15.00",
            detail: "Bunna Buna: Freshly roasted, served in a traditional Jebena pot.",
        },
        {
            name: "Macchiato",
            price: "$3.00",
            detail: "Double shot espresso with steamed milk foam.",
        },
        {
            name: "Chai Tea Latte",
            price: "$3.00",
            detail: "Spiced tea blend with creamy milk.",
        },
        {
            name: "Mocha",
            price: "$4.00",
            detail: "Rich espresso combined with chocolate and milk.",
        },
    ];

    const coldDrinks = [
        {
            name: "Fresh Avocado Juice",
            price: "$6.00",
            detail: "Creamy, fresh-pressed avocado blend.",
        },
        {
            name: "Papaya & Mango Mix",
            price: "$6.00",
            detail: "A tropical blend of seasonal fresh fruits.",
        },
        {
            name: "Beso",
            price: "$6.00",
            detail: "Traditional roasted barley shake with honey.",
        },
        {
            name: "Sparkling Water",
            price: "$3.00",
            detail: "Refreshing chilled bubbly water.",
        },
    ];

    return (
        <section className="py-16 xs:py-20 bg-[#FDFDFD] min-h-[500px] flex items-center overflow-hidden">
            <div className="container mx-auto px-4 xs:px-6 max-w-5xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[#00A859] font-black text-[10px] xs:text-xs uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                            <span className="w-4 xs:w-6 h-[2px] bg-[#00A859]"></span>
                            Refreshments
                        </h4>
                        <h2 className="text-3xl xs:text-4xl font-black text-gray-900 leading-none">
                            Jebena{" "}
                            <span className="text-[#FF385C]">Drinks</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 text-[10px] xs:text-xs font-bold max-w-[240px] md:text-right leading-relaxed"
                    >
                        Authentic Ethiopian brews and fresh tropical blends
                        crafted daily.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Hot Drinks Column */}
                    <div className="space-y-6 xs:space-y-8">
                        <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-900/5">
                            <Coffee className="text-[#FF385C]" size={20} />
                            <h3 className="font-black text-xs xs:text-sm uppercase tracking-widest text-gray-900">
                                Hot Brews
                            </h3>
                        </div>
                        {hotDrinks.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex justify-between items-start gap-4"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-black text-gray-800 text-sm group-hover:text-[#FF385C] transition-colors uppercase tracking-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-[10px] xs:text-[11px] text-gray-400 font-bold leading-tight max-w-[200px] xs:max-w-[240px]">
                                        {item.detail}
                                    </p>
                                </div>
                                <span className="text-[#00A859] font-black text-sm whitespace-nowrap">
                                    {item.price}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cold Drinks Column */}
                    <div className="space-y-6 xs:space-y-8">
                        <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-900/5">
                            <GlassWater className="text-[#00A859]" size={20} />
                            <h3 className="font-black text-xs xs:text-sm uppercase tracking-widest text-gray-900">
                                Cold Blends
                            </h3>
                        </div>
                        {coldDrinks.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex justify-between items-start gap-4"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-black text-gray-800 text-sm group-hover:text-[#00A859] transition-colors uppercase tracking-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-[10px] xs:text-[11px] text-gray-400 font-bold leading-tight max-w-[200px] xs:max-w-[240px]">
                                        {item.detail}
                                    </p>
                                </div>
                                <span className="text-[#FF385C] font-black text-sm whitespace-nowrap">
                                    {item.price}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Info Footer - Scrollable on small mobile to prevent wrapping */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 bg-white rounded-2xl p-4 border border-gray-100 flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-8 shadow-sm"
                >
                    <div className="flex items-center gap-2">
                        <Leaf size={14} className="text-[#00A859]" />
                        <span className="text-[9px] xs:text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Fresh Ingredients
                        </span>
                    </div>
                    <div className="hidden xs:block w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Coffee size={14} className="text-[#FF385C]" />
                        <span className="text-[9px] xs:text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Traditional Roast
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BeverageMenu;
