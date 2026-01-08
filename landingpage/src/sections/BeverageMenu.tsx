import React from "react";
import { Coffee, GlassWater, Leaf } from "lucide-react";

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
        <section className="py-12 bg-[#FDFDFD] min-h-[500px] flex items-center overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h4 className="text-[#00A859] font-black text-xs uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-[#00A859]"></span>
                            Refreshments
                        </h4>
                        <h2 className="text-3xl font-black text-gray-900">
                            Jebena{" "}
                            <span className="text-[#FF6B35]">Drinks</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-xs font-bold max-w-[200px] md:text-right leading-relaxed">
                        Authentic Ethiopian brews and fresh tropical blends.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Hot Drinks Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-900/5">
                            <Coffee className="text-[#FF6B35]" size={20} />
                            <h3 className="font-black text-sm uppercase tracking-widest text-gray-900">
                                Hot Brews
                            </h3>
                        </div>
                        {hotDrinks.map((item, i) => (
                            <div
                                key={i}
                                className="group flex justify-between items-start"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-black text-gray-800 text-sm group-hover:text-[#FF6B35] transition-colors uppercase tracking-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-[11px] text-gray-400 font-bold leading-tight max-w-[240px]">
                                        {item.detail}
                                    </p>
                                </div>
                                <span className="text-[#00A859] font-black text-sm">
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Cold Drinks Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b-2 border-gray-900/5">
                            <GlassWater className="text-[#00A859]" size={20} />
                            <h3 className="font-black text-sm uppercase tracking-widest text-gray-900">
                                Cold Blends
                            </h3>
                        </div>
                        {coldDrinks.map((item, i) => (
                            <div
                                key={i}
                                className="group flex justify-between items-start"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-black text-gray-800 text-sm group-hover:text-[#00A859] transition-colors uppercase tracking-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-[11px] text-gray-400 font-bold leading-tight max-w-[240px]">
                                        {item.detail}
                                    </p>
                                </div>
                                <span className="text-[#FF6B35] font-black text-sm">
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Footer */}
                <div className="mt-12 bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-center gap-8 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Leaf size={14} className="text-[#00A859]" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Fresh Ingredients
                        </span>
                    </div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Coffee size={14} className="text-[#FF6B35]" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Traditional Roast
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeverageMenu;
