"use client";

import React from "react";
import {
    MapPin,
    Phone,
    ArrowRight,
    Navigation,
    ChevronDown,
} from "lucide-react";


const ReservationSection = () => {
    return (
        <section
            className="py-16 md:py-24 relative w-full bg-[#FDFDFD] flex items-center justify-center font-sans"
            id="reservations"
        >
            <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
                {/* Unified Container */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">
                    {/* LEFT: Booking Form */}
                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between order-2 lg:order-1">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-[3px] bg-[#00A859] rounded-full"></span>
                                <h4 className="text-[#00A859] font-serif italic text-xl md:text-2xl">
                                    Reservations
                                </h4>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 md:mb-10">
                                Book Your{" "}
                                <span className="text-[#FF385C]">
                                    Experience
                                </span>
                            </h2>

                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                                <div className="space-y-1.5 group">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#FF385C]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold placeholder:text-gray-300 placeholder:font-normal"
                                    />
                                </div>

                                <div className="space-y-1.5 group relative">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#FF385C]">
                                        Guests
                                    </label>
                                    <select className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                                        <option>2 People</option>
                                        <option>4 People</option>
                                        <option>6+ People</option>
                                    </select>
                                    <ChevronDown
                                        size={14}
                                        className="absolute right-0 bottom-3 text-gray-400 pointer-events-none"
                                    />
                                </div>

                                <div className="space-y-1.5 group">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#FF385C]">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold uppercase"
                                    />
                                </div>

                                <div className="space-y-1.5 group">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#FF385C]">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                            </form>
                        </div>

                        <button className="w-full mt-10 md:mt-12 bg-[#FF385C] text-white py-4 md:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#e03150] shadow-lg shadow-red-100 transition-all group active:scale-[0.98]">
                            Confirm Table
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>

                    {/* RIGHT: Info & Map Overlay */}
                    <div className="lg:col-span-5 bg-neutral-50 flex flex-col order-1 lg:order-2 min-h-[300px] lg:min-h-full">
                        <div className="p-8 lg:p-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#FF385C]">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">
                                        Location
                                    </p>
                                    <p className="text-sm font-bold text-gray-800 leading-tight">
                                        3654 Clairmont Rd,{" "}
                                        <br className="hidden sm:block" />{" "}
                                        Chamblee, GA 30341
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-[#00A859]">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">
                                        Direct Line
                                    </p>
                                    <p className="text-sm font-black text-gray-800">
                                        (404) 987-4466
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Area */}
                        <div className="flex-grow relative group overflow-hidden border-t border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.210432326759!2d-84.3101689!3d33.8842491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50912f207604f%3A0x6b1580252b46768a!2s3654%20Clairmont%20Rd%2C%20Chamblee%2C%20GA%2030341!5e0!3m2!1sen!2sus!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: "grayscale(0.2) contrast(1.1)",
                                }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="min-h-[200px]"
                            ></iframe>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-xl flex items-center gap-2 hover:bg-neutral-50 transition-colors"
                            >
                                <Navigation
                                    size={12}
                                    className="text-[#FF385C]"
                                />
                                Open Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationSection;
