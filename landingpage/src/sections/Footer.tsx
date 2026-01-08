import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-[#FEF9F2] pt-20 pb-10 overflow-hidden">
            {/* Decorative Background Illustrations - Swapped for context-aware subtle decors */}
            <div className="absolute left-0 bottom-12 opacity-10 pointer-events-none hidden lg:block">
                <Image
                    src="/images/coffee-pot-decor.png" // Suggesting an Ethiopian coffee pot (Jebena) illustration
                    alt="decor"
                    width={200}
                    height={200}
                />
            </div>

            <div className="absolute right-0 bottom-12 opacity-10 pointer-events-none hidden lg:block">
                <Image
                    src="/images/spice-decor.png" // Suggesting a spice or grain illustration
                    alt="decor"
                    width={200}
                    height={200}
                />
            </div>

            <div className="container mx-auto px-4 xs:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Card - Matches the pinkish card in UI */}
                    <div className="bg-[#FF385C] rounded-[2rem] p-10 text-white flex flex-col justify-between min-h-[340px] shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="  rounded-full">
                                    <Image
                                        src="/images/jebenalogo.png"
                                        alt="Jebena Bestro"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                </div>
                                <span className="text-2xl font-black tracking-tight">
                                    Jebena
                                    <span className="text-black"> Bestro</span>
                                </span>
                            </div>

                            <div className="space-y-4 text-sm font-bold leading-relaxed">
                                <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
                                <p className="underline decoration-white underline-offset-8">
                                    Closed on Sunday
                                </p>
                            </div>
                        </div>

                        <p className="text-[11px] font-black tracking-widest uppercase opacity-90 relative z-10">
                            5 star rated on TripAdvisor
                        </p>

                        {/* Subtle inner glow for the card */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                    </div>

                    {/* About Links */}
                    <div className="lg:pl-10">
                        <h3 className="text-xl font-black mb-8 relative inline-block text-[#1A1A1A]">
                            About
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#FFB800]" />
                        </h3>
                        <ul className="space-y-5">
                            {[
                                "Fredoka One",
                                "Special Dish",
                                "Reservation",
                                "Contact",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-all text-sm font-bold group"
                                >
                                    <ChevronRight
                                        size={16}
                                        className="text-gray-300 group-hover:text-[#FF385C] transform group-hover:translate-x-1 transition-transform"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Links */}
                    <div>
                        <h3 className="text-xl font-black mb-8 relative inline-block text-[#1A1A1A]">
                            Menu
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#FFB800]" />
                        </h3>
                        <ul className="space-y-5">
                            {[
                                "Steaks",
                                "Burgers",
                                "Coctails",
                                "Bar B Q",
                                "Desserts",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-gray-500 hover:text-[#FF385C] cursor-pointer transition-all text-sm font-bold group"
                                >
                                    <ChevronRight
                                        size={16}
                                        className="text-gray-300 group-hover:text-[#FF385C] transform group-hover:translate-x-1 transition-transform"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-black mb-8 relative inline-block text-[#1A1A1A]">
                            Newsletter
                            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#FFB800]" />
                        </h3>
                        <p className="text-gray-500 text-sm font-bold mb-8 leading-relaxed">
                            Get recent news and updates.
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-6 py-5 rounded-2xl border-none bg-gray-50 text-sm font-bold focus:ring-2 focus:ring-[#FF385C]/20 shadow-inner"
                            />
                            <button className="bg-[#FF385C] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#e63252] transition-all shadow-xl shadow-[#FF385C]/20 active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with the Yellow Line */}
                <div className="mt-24 pt-10 border-t-[6px] border-[#FFB800] flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-sm font-black text-gray-400 tracking-tight">
                        <span className="text-[#FF385C]">
                            © 2026 Jebena Bestro
                        </span>{" "}
                        <span className="mx-2 text-gray-300">|</span> All Right
                        Reserved
                    </p>

                    <div className="flex gap-10">
                        {["Facebook", "Instagram", "Tiktok"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-[11px] font-black text-[#1A1A1A] hover:text-[#FF385C] transition-colors uppercase tracking-[0.2em]"
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
