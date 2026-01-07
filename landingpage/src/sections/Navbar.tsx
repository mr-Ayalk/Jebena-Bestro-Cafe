import React from "react";
import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/images/jebenalogo.png";
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo"
                            fill
                            className="rounded-full object-cover transition-transform group-hover:scale-110"
                        />
                    </div>
                    <div className="text-2xl font-bold flex items-center gap-1">
                        <span className="text-orange-500 italic">Jebena </span>
                        {"  "}
                        <span className="text-black">Bestro</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6 font-medium text-gray-700">
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                            Home <ChevronDown size={16} />
                        </li>
                        <li className="cursor-pointer hover:text-orange-500 transition-colors">
                            About Us
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                            Shop <ChevronDown size={16} />
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                            Blog <ChevronDown size={16} />
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                            Pages <ChevronDown size={16} />
                        </li>
                        <li className="cursor-pointer hover:text-orange-500 transition-colors">
                            Contact
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer p-2">
                        <ShoppingCart className="text-gray-700" size={24} />
                        <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            0
                        </span>
                    </div>

                    <button className="hidden md:block bg-[#FFC12B] hover:bg-[#eab308] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-sm">
                        Contact Us
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-gray-700">
                        <Menu size={28} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
