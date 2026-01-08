"use client";

import React from "react";
import {
    ChevronRight,
    Instagram,
    Facebook,
    Twitter,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative bg-[#FFFAF7] pt-24 pb-12 overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Identity Card */}
                    <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl shadow-[#FF385C]/10 min-h-[400px] relative overflow-hidden group">
                        <div className="relative z-10">
                            {/* FIX: Changed h2 wrapper to a div to prevent nesting h4 inside it */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                                    <Image
                                        src="/images/jebenalogo.png"
                                        alt="Jebena Logo"
                                        fill
                                        className="rounded-full object-cover transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="text-2xl font-black tracking-tighter uppercase">
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
                                        Tuesday – Saturday
                                    </p>
                                    <p className="text-xl font-black tracking-tight text-gray-900">
                                        12:00pm – 11:00pm
                                    </p>
                                    <p className="inline-block mt-2 px-3 py-1 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">
                                        Closed on Sunday
                                    </p>
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
                                        5 star rated on TripAdvisor
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 relative z-10 pt-8">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#E92348] hover:text-white transition-all flex items-center justify-center text-gray-400"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gray-50 rounded-full blur-[80px] group-hover:bg-[#E92348]/5 transition-all duration-700" />
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:pl-8">
                        <h3 className="text-lg font-black mb-10 text-gray-900 flex items-center gap-2">
                            Menu
                            <span className="w-8 h-[2px] bg-[#00A859]"></span>
                        </h3>
                        <ul className="space-y-5">
                            {[
                                "Traditional Kitfo",
                                "Beef & Lamb Tibs",
                                "Miten Shiro",
                                "Veggie Platter",
                                "Hot Brews",
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
                    <div className="lg:col-span-3 lg:pl-8">
                        <h3 className="text-lg font-black mb-10 text-gray-900 flex items-center gap-2">
                            Contact
                            <span className="w-8 h-[2px] bg-[#FF6B35]"></span>
                        </h3>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <MapPin
                                    size={20}
                                    className="text-[#FF6B35] shrink-0"
                                />
                                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                                    3654 Clairmont Rd, <br />
                                    Chamblee, GA 30341
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Phone
                                    size={20}
                                    className="text-[#00A859] shrink-0"
                                />
                                <p className="text-sm font-black text-gray-900">
                                    (404) 987-4466
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Mail
                                    size={20}
                                    className="text-[#E92348] shrink-0"
                                />
                                <p className="text-sm font-bold text-gray-600 break-all">
                                    jebenabistroadl@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-black mb-10 text-gray-900">
                            Newsletter
                        </h3>
                        <p className="text-xs font-bold text-gray-400 mb-6 tracking-wide uppercase">
                            Join our community
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 text-sm font-bold focus:ring-2 focus:ring-[#E92348]/20 shadow-sm outline-none"
                            />
                            <button className="w-full bg-[#E92348] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#E92348] shadow-lg hover:shadow-[#E92348]/30 transition-all active:scale-95">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                            © 2026{" "}
                            <span className="text-gray-900">Jebena Bistro</span>{" "}
                            • All Rights Reserved
                        </p>
                        <div className="flex gap-8">
                            {["Privacy Policy", "Terms", "Accessibility"].map(
                                (link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="text-[10px] font-black text-gray-400 hover:text-[#E92348] transition-colors uppercase tracking-[0.2em]"
                                    >
                                        {link}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
