import React from "react";

const menuItems = [
    {
        name: "CHICAGO DEEP PIZZA",
        price: "$22.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "CHINESE PASTA",
        price: "$34.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago Burger King.",
        price: "$26.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago Chicken Wings.",
        price: "$39.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago French Fries.",
        price: "$28.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago Deep Pasta.",
        price: "$34.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago Beef Jerky.",
        price: "$39.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
    {
        name: "Chicago Salad Recipes.",
        price: "$26.00",
        desc: "Its the perfect dining experience where Experience quick and efficient",
    },
];

const TrendingMenu = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 xs:px-6">
                <div className="text-center mb-12">
                    <h4 className="text-[#00A859] font-bold text-xs uppercase tracking-widest mb-2">
                        About Our Food
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A]">
                        Trending Food Menu
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                        {menuItems.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-black text-[#1A1A1A] text-lg uppercase group-hover:text-[#FF385C] transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-[#FFB800] font-bold text-xl ml-4">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                {/* Dotted separator for all but last items in their respective columns */}
                                <div className="border-b-2 border-dotted border-gray-200" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingMenu;
