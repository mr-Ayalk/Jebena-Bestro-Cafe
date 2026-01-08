"use client";

import React from "react";
import {
    ChevronRight,
    Instagram,
    Facebook,
    Twitter,
    MapPin,
    Phone,
   
    ArrowUp,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#FFFAF7] pt-16 md:pt-24 pb-8 overflow-hidden font-sans">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
                    {/* Brand Identity Card */}
                    <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-[#FF385C]/5 min-h-[350px] md:min-h-[400px] relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                    <Image
                                        src="/images/jebenalogo.png"
                                        alt="Jebena Logo"
                                        fill
                                        className="rounded-full object-cover transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                                    <span className="text-[#E92348]">
                                        Jebena
                                    </span>{" "}
                                    <span className="text-black">Bistro</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-3 text-[#00A859]">
                                        Opening Hours
                                    </h4>
                                    <p className="text-sm font-bold text-gray-800">
                                        Tuesday – Sunday
                                    </p>
                                    <p className="text-xl font-black tracking-tight text-gray-900">
                                        11:00 AM - 10:00 PM
                                    </p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        Closed on Monday
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex text-[#FFB800]">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-xs">
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-black tracking-widest uppercase text-[#00A859]">
                                        5 star rated
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 relative z-10 pt-8">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#E92348] hover:text-white transition-all flex items-center justify-center text-gray-400 shadow-sm"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gray-50 rounded-full blur-[80px] group-hover:bg-[#E92348]/5 transition-all duration-700" />
                    </div>

                    {/* Quick Links Group */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-8">
                        {/* Menu Links */}
                        <div>
                            <h3 className="text-sm font-black mb-8 text-gray-900 flex items-center gap-2 uppercase tracking-widest">
                                Menu
                                <span className="w-6 h-[2px] bg-[#00A859]"></span>
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Traditional Kitfo",
                                    "Beef & Lamb Tibs",
                                    "Miten Shiro",
                                    "Veggie Platter",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 text-gray-500 hover:text-[#E92348] cursor-pointer transition-all text-sm font-bold group"
                                    >
                                        <ChevronRight
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-[#E92348]"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-sm font-black mb-8 text-gray-900 flex items-center gap-2 uppercase tracking-widest">
                                Contact
                                <span className="w-6 h-[2px] bg-[#FF6B35]"></span>
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-3">
                                    <MapPin
                                        size={18}
                                        className="text-[#FF6B35] shrink-0"
                                    />
                                    <p className="text-xs font-bold text-gray-600 leading-relaxed">
                                        3654 Clairmont Rd, <br /> Chamblee, GA
                                        30341
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <Phone
                                        size={18}
                                        className="text-[#00A859] shrink-0"
                                    />
                                    <p className="text-xs font-black text-gray-900">
                                        (404) 987-4466
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/50 border border-gray-100 p-6 rounded-[2rem]">
                            <h3 className="text-sm font-black mb-4 text-gray-900 uppercase tracking-widest">
                                Newsletter
                            </h3>
                            <p className="text-[10px] font-bold text-gray-400 mb-6 uppercase">
                                Get the latest offers
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 text-xs font-bold focus:ring-2 focus:ring-[#E92348]/20 outline-none"
                                />
                                <button className="w-full bg-[#FF385C] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E92348] transition-all shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        © 2026{" "}
                        <span className="text-gray-900">Jebena Bistro</span> •
                        All Rights Reserved
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-[#E92348] hover:shadow-md transition-all"
                    >
                        <ArrowUp size={16} />
                    </button>

                    <div className="flex gap-6">
                        {["Privacy", "Terms"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-[9px] font-black text-gray-400 hover:text-[#E92348] transition-colors uppercase tracking-[0.2em]"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
