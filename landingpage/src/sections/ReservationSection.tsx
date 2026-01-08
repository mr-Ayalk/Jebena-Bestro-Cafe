import React from "react";
import {
    MapPin,
    Phone,
    // Calendar,
    // Clock,
    // Users,
    ArrowRight,
    Navigation,
} from "lucide-react";

const ReservationSection = () => {
    return (
        /* Reduced height to ensure it fits on screen without scrolling (h-[80vh]) */
        <section className="pt-24 relative w-full h-[80vh] min-h-[550px] bg-[#FDFDFD] flex items-center justify-center py-4 font-sans">
            <div className="container mx-auto px-4 lg:px-12 h-full max-w-6xl">
                {/* Unified Slim Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden h-full max-h-[550px]">
                    {/* LEFT: Compact Form (7 Cols) */}
                    <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-[3px] bg-[#00A859] rounded-full"></span>

                                <h4 className="text-[#00A859] font-serif  italic text-2xl mb-4">
                                    Reservations
                                </h4>
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 mb-8">
                                Book Your{" "}
                                <span className="text-[#FF385C]">
                                    Experience
                                </span>
                            </h2>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
                                        Guests
                                    </label>
                                    <select className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                                        <option>2 People</option>
                                        <option>4 People</option>
                                        <option>6+ People</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-100 focus:border-[#FF385C] outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-[#FF385C] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#ff385dce] transition-all group active:scale-[0.98]">
                            Confirm Table
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>

                    {/* RIGHT: Visual Info & Slim Map (5 Cols) */}
                    <div className="lg:col-span-5 bg-gray-50 flex flex-col p-6 border-l border-gray-100">
                        {/* Address & Phone Branding */}
                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#FF385C]">
                                    <MapPin size={18} />
                                </div>
                                <p className="text-xs font-bold text-gray-600 leading-snug">
                                    3654 Clairmont Rd, <br /> Chamblee, GA 30341
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#00A859]">
                                    <Phone size={18} />
                                </div>
                                <p className="text-sm font-black text-gray-800">
                                    (404) 987-4466
                                </p>
                            </div>
                        </div>

                        {/* Smaller, Stylized Map */}
                        <div className="flex-grow rounded-3xl overflow-hidden relative shadow-inner border-2 border-white group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4343187216694!2d-84.3106197!3d33.852655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f508ef1288c87f%3A0x6e3b5e4a07d9f96b!2s3654%20Clairmont%20Rd%2C%20Chamblee%2C%20GA%2030341!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: "grayscale(0.1) brightness(1.02)",
                                }}
                                // allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            {/* Overlay Button for real map navigation */}
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-gray-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Navigation size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationSection;
