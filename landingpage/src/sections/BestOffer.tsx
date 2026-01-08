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
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex items-center p-2 gap-4 border border-gray-100 hover:shadow-md transition-shadow">
            {/* Image */}
            <div className="relative w-32 h-24 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="128px"
                    className="object-cover rounded-xl"
                />

                {discount && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        ⚡ {discount}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-grow py-2">
                <div className="flex justify-between items-start">
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={10}
                                className={
                                    i < rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                }
                            />
                        ))}
                        <span className="text-[10px] text-gray-400 ml-1">
                            ({rating})
                        </span>
                    </div>

                    <Heart
                        size={14}
                        className="text-gray-300 cursor-pointer hover:text-red-500"
                    />
                </div>

                <h3 className="font-bold text-sm text-gray-800 mb-1">{name}</h3>

                <div className="flex items-center gap-2">
                    <span className="text-[#FF385C] font-bold text-sm">
                        {price}
                    </span>

                    {oldPrice && (
                        <span className="text-gray-300 line-through text-xs">
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 xs:px-6">
                <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12">
                    Best Offer For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <ProductCardSmall
                            name="PASTA"
                            price="$20.00"
                            oldPrice="$26.00"
                            discount="-23%"
                            rating={1}
                            image="/images/hero.png"
                        />

                        <ProductCardSmall
                            name="Butter Chicken"
                            price="$18.00"
                            rating={0}
                            image="/images/hero.png"
                        />

                        <ProductCardSmall
                            name="Biryani"
                            price="$11.00"
                            oldPrice="$12.50"
                            discount="-12%"
                            rating={0}
                            image="/images/hero.png"
                        />
                    </div>

                    {/* Center Featured Card */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col relative group">
                        <div className="relative h-[400px]">
                            <Image
                                src="/images/hero.png"
                                alt="Featured Offer"
                                fill
                                priority
                                className="object-cover"
                            />

                            <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                                ⚡ -21%
                            </span>

                            <Heart
                                size={20}
                                className="absolute top-4 right-4 text-white/80 hover:text-red-500 cursor-pointer"
                            />

                            {/* Countdown */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {[
                                    { v: "266", l: "Days" },
                                    { v: "04", l: "Hours" },
                                    { v: "56", l: "Mins" },
                                    { v: "28", l: "Secs" },
                                ].map((time, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg p-2 min-w-[50px] text-center shadow-md"
                                    >
                                        <div className="text-lg font-black leading-none">
                                            {time.v}
                                        </div>
                                        <div className="text-[8px] text-gray-400 uppercase font-bold">
                                            {time.l}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-gray-300"
                                    />
                                ))}
                                <span className="text-xs text-gray-400 ml-1">
                                    (0)
                                </span>
                            </div>

                            <h3 className="font-bold text-xl text-gray-800 mb-4">
                                BBQ. Chicken & Pork
                            </h3>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#FF385C] font-black text-2xl">
                                        $15.00
                                    </span>
                                    <span className="text-gray-300 line-through text-lg">
                                        $19.00
                                    </span>
                                </div>

                                <button className="bg-gray-100 p-3 rounded-full hover:bg-[#FF385C] hover:text-white transition-colors">
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <ProductCardSmall
                            name="Nuggets Recipe"
                            price="$18.00"
                            rating={0}
                            image="/images/hero.png"
                        />

                        <ProductCardSmall
                            name="Burgers"
                            price="$20.00"
                            rating={0}
                            image="/images/hero.png"
                        />

                        <ProductCardSmall
                            name="Seekh Kebab"
                            price="$33.00"
                            rating={0}
                            image="/images/hero.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestOffer;
