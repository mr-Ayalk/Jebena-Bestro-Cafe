import React from "react";
import Image from "next/image";
import { Star, Heart, ShoppingCart } from "lucide-react";

/* =======================
   Types
======================= */

interface ProductCardSmallProps {
    name: string;
    price: string;
    oldPrice?: string;
    image: string;
    discount?: string;
    rating: number;
}

/* =======================
   Small Product Card
======================= */

const ProductCardSmall: React.FC<ProductCardSmallProps> = ({
    name,
    price,
    oldPrice,
    image,
    discount,
    rating,
}) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex items-center p-2 gap-4 border border-gray-100 hover:shadow-md transition-all group">
            {/* Image */}
            <div className="relative w-28 h-20 md:w-32 md:h-28 flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {discount && (
                    <span className="absolute top-1.5 left-1.5 bg-[#FFC12B] text-black text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                        ⚡ {discount}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-grow pr-2">
                <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={10}
                                className={
                                    i < rating
                                        ? "fill-[#FFC12B] text-[#FFC12B]"
                                        : "text-gray-200"
                                }
                            />
                        ))}
                    </div>
                    <Heart
                        size={14}
                        className="text-gray-300 hover:text-[#00A859] cursor-pointer transition-colors"
                    />
                </div>

                <h3 className="font-bold text-sm text-gray-900 mb-0.5 uppercase tracking-tight">
                    {name}
                </h3>

                <div className="flex items-center gap-2">
                    <span className="text-[#E31837] font-bold text-sm">
                        {price}
                    </span>
                    {oldPrice && (
                        <span className="text-gray-300 line-through text-[10px]">
                            {oldPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

/* =======================
   Main Component
======================= */

const BestOffer: React.FC = () => {
    return (
        <section className="py-10 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center mb-2 text-center">
                    <span className="text-[#00A859] font-bold text-xs uppercase tracking-[0.3em] mb-2">
                        Special Deals
                    </span>
                    <h2 className="text-4xl font-black text-[#1A1A1A]">
                        Best Offer For You
                    </h2>
                    <div className="w-20 h-1 bg-[#FFC12B] mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between gap-4">
                        <ProductCardSmall
                            name="Special Beyaynetu"
                            price="$20.00"
                            oldPrice="$26.00"
                            discount="-23%"
                            rating={5}
                            image="/images/hero.png"
                        />
                        <ProductCardSmall
                            name="Doro Wat"
                            price="$18.00"
                            rating={4}
                            image="/images/hero.png"
                        />
                        <ProductCardSmall
                            name="Kitfo (Beef Tartare)"
                            price="$11.00"
                            oldPrice="$12.50"
                            discount="-12%"
                            rating={5}
                            image="/images/hero.png"
                        />
                    </div>

                    {/* Center Featured Card - Adjusted to match height */}
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full">
                        <div className="relative flex-grow min-h-[250px]">
                            <Image
                                src="/images/hero.png"
                                alt="Ethiopian Platter"
                                fill
                                className="object-cover"
                            />
                            <span className="absolute top-6 left-6 bg-[#FFC12B] text-black text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                                ⚡ -21% OFF
                            </span>

                            {/* Countdown Over Image */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4">
                                {[
                                    { v: "266", l: "Days" },
                                    { v: "04", l: "Hrs" },
                                    { v: "56", l: "Min" },
                                    { v: "28", l: "Sec" },
                                ].map((time, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/95 backdrop-blur-sm rounded-xl p-2 min-w-[55px] text-center shadow-xl border border-white/20"
                                    >
                                        <div className="text-sm font-black text-[#1a1a1a]">
                                            {time.v}
                                        </div>
                                        <div className="text-[7px] text-gray-500 uppercase font-bold tracking-widest">
                                            {time.l}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="font-black text-2xl text-gray-900 mb-2 leading-tight">
                                Traditional Ethiopian Platter & Tej
                            </h3>
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex flex-col">
                                    <span className="text-[#E31837] font-black text-3xl">
                                        $15.00
                                    </span>
                                    <span className="text-gray-300 line-through text-sm font-bold">
                                        $19.00
                                    </span>
                                </div>
                                <button className="bg-[#00A859] text-white p-4 rounded-2xl hover:bg-[#008c4a] transition-all shadow-lg hover:shadow-[#00A859]/30 active:scale-95">
                                    <ShoppingCart size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-between gap-4">
                        <ProductCardSmall
                            name="Tibs (Sautéed Meat)"
                            price="$18.00"
                            rating={5}
                            image="/images/hero.png"
                        />
                        <ProductCardSmall
                            name="Veggie Firfir"
                            price="$20.00"
                            rating={4}
                            image="/images/hero.png"
                        />
                        <ProductCardSmall
                            name="Ethiopian Coffee"
                            price="$33.00"
                            rating={5}
                            image="/images/hero.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestOffer;
