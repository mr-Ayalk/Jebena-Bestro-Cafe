"use client";
import React, { useEffect, useState } from "react";
import { Menu, ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/images/jebenalogo.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("English");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const languages = [
        { name: "English", code: "EN" },
        { name: "Amharic", code: "AM" },
    ];
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-white backdrop-blur-md shadow-lg "
                    : "bg-transparent "
            }`}
        >
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
                    <div className="  tracking-tight text-[#333] text-2xl font-bold flex items-center gap-1">
                        <span className="text-[#E92348] ">Jebena </span>
                        {"  "}
                        <span
                            className={`${
                                isScrolled ? "text-black" : "text-white"
                            }`}
                        >
                            Bestro
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul
                        className={`flex items-center gap-6 font-medium text-gray-700  ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        <Link href="/">
                            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                                Home
                            </li>
                        </Link>
                        <Link href="/#dishes">
                            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                                Dishes
                            </li>{" "}
                        </Link>

                        <Link href="/#menu">
                            <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                                Menu
                            </li>
                        </Link>
                        <Link href="/#about-us">
                            {" "}
                            <li className="cursor-pointer hover:text-orange-500 transition-colors">
                                About Us
                            </li>
                        </Link>
                        <Link href="/#contact-us">
                            {" "}
                            <li className="cursor-pointer hover:text-orange-500 transition-colors">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* Action Buttons & Language Switcher */}
                <div className="flex items-center gap-6">
                    {/* Language Dropdown (Desktop) */}
                    <div className="relative hidden md:block">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className={`flex items-center gap-1.5 font-bold text-xs uppercase transition-all ${
                                isScrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            <Globe size={16} className="text-[#FF385C]" />
                            {currentLang}
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${
                                    isLangOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-3 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden min-w-[120px]"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLang(lang.name);
                                                setIsLangOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Login Button (Desktop) */}
                    <Link href="/registration">
                        <button className="hidden md:block bg-[#FF385C] hover:bg-orange-600 text-white px-7 py-2.5 rounded-md text-sm font-bold shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95">
                            Book A Table
                        </button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu
                            className={
                                isScrolled ? "text-gray-900" : "text-white"
                            }
                            size={28}
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
