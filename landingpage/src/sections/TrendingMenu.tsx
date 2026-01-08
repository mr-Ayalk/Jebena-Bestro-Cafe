import React from "react";

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
        <section className="py-20 bg-white" id="menu">
            <div className="container mx-auto px-4 xs:px-6">
                <div className="text-center mb-16">
                    <h4 className="text-[#00A859] font-serif italic text-2xl mb-4">
                        Experience Chamblee&apos;s Finest
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
                        Authentic{" "}
                        <span className="text-[#FF385C]">Ethiopian</span> Menu
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto border border-gray-100 rounded-[3rem] p-8 md:p-16 shadow-[0_10px_50px_rgba(0,0,0,0.03)] bg-[#FCFDFD]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
                        {menuItems.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="font-black text-[#1A1A1A] text-lg uppercase tracking-tight group-hover:text-[#FF385C] transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex-grow mx-4 border-b border-dotted border-gray-300 mb-1 opacity-50"></div>
                                    <span className="text-[#FFB800] font-black text-xl">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Info Branding */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            3654 Clairmont Rd, Chamblee, GA 30341
                        </p>
                        <p className="text-[#00A859] font-black text-lg">
                            (404) 987-4466
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingMenu;
