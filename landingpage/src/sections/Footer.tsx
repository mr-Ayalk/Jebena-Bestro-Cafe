import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-[#F8F9FA] pt-20 pb-10 overflow-hidden">
            {/* Decorative Background Illustrations */}
            <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none hidden lg:block">
                <Image
                    src="/pizza-illustration.png"
                    alt="decor"
                    width={256}
                    height={256}
                />
            </div>

            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none hidden lg:block">
                <Image
                    src="/burger-illustration.png"
                    alt="decor"
                    width={256}
                    height={256}
                />
            </div>

            <div className="container mx-auto px-4 xs:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Card */}
                    <div className="bg-[#FF385C] rounded-3xl p-8 text-white flex flex-col justify-between min-h-[300px] shadow-xl">
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <Image
                                    src="/logo-white.png"
                                    alt="TasteNest"
                                    width={32}
                                    height={32}
                                />
                                <span className="text-xl font-bold">
                                    TasteNest
                                </span>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
                                <p className="underline decoration-white underline-offset-4">
                                    Closed on Sunday
                                </p>
                            </div>
                        </div>

                        <p className="text-xs font-semibold tracking-wider">
                            5 star rated on TripAdvisor
                        </p>
                    </div>

                    {/* About Links */}
                    <div className="lg:pl-10">
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            About
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400" />
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Fredoka One",
                                "Special Dish",
                                "Reservation",
                                "Contact",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-gray-600 hover:text-[#FF385C] cursor-pointer transition-colors text-sm font-medium"
                                >
                                    <ChevronRight
                                        size={14}
                                        className="text-gray-400"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Menu
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400" />
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Steaks",
                                "Burgers",
                                "Coctails",
                                "Bar B Q",
                                "Desserts",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-gray-600 hover:text-[#FF385C] cursor-pointer transition-colors text-sm font-medium"
                                >
                                    <ChevronRight
                                        size={14}
                                        className="text-gray-400"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 relative inline-block">
                            Newsletter
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-yellow-400" />
                        </h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Get recent news and updates.
                        </p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 shadow-sm"
                            />
                            <button className="bg-[#FF385C] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#e63252] transition-all shadow-lg active:scale-95 border-b-4 border-black/10">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t-4 border-yellow-400 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm font-bold text-gray-800">
                        <span className="text-[#FF385C]">
                            © 2026 Jebena Bestro
                        </span>{" "}
                        | All Right Reserved
                    </p>

                    <div className="flex gap-12">
                        {["Facebook", "Instagram", "Tiktok"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-sm font-black hover:text-[#FF385C] transition-colors uppercase tracking-widest"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
