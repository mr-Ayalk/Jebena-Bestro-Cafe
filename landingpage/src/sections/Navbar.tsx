"use client";
import React, { useEffect, useState } from "react";
import { Menu, ChevronDown, Globe, X } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/images/jebenalogo.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("English");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const languages = [
        { name: "English", code: "EN" },
        { name: "Amharic", code: "AM" },
    ];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Dishes", href: "/dishes" },
        { name: "Menu", href: "/menu" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled || isMobileMenuOpen
                    ? "bg-white backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between h-20 px-4 xs:px-6">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="tracking-tight text-xl xs:text-2xl font-bold flex items-center gap-1">
                        <span className="text-[#E92348]">Jebena</span>
                        <span
                            className={
                                isScrolled || isMobileMenuOpen
                                    ? "text-black"
                                    : "text-white"
                            }
                        >
                            Bistro
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul
                        className={`flex items-center gap-6 font-medium ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <li className="cursor-pointer hover:text-red-400 transition-colors">
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 xs:gap-6">
                    {/* Language Dropdown (Desktop) */}
                    <div className="relative hidden md:block">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className={`flex items-center gap-1.5 font-bold text-xs uppercase ${
                                isScrolled ? "text-gray-800" : "text-white"
                            }`}
                        >
                            <Globe size={16} className="text-[#FF385C]" />
                            {currentLang}
                            <ChevronDown
                                size={14}
                                className={isLangOpen ? "rotate-180" : ""}
                            />
                        </button>
                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-3 bg-white shadow-2xl rounded-xl border border-gray-100 min-w-[120px]"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setCurrentLang(lang.name);
                                                setIsLangOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-red-400"
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Book Table Button - Hidden on mobile/tablet, shown on Desktop */}
                    <Link href="/booktable" className="hidden sm:block">
                        <button className="bg-[#FF385C] hover:bg-red-400 text-white px-4 py-2 md:px-7 md:py-2.5 rounded-md text-xs md:text-sm font-bold shadow-lg transition-all">
                            Book A Table
                        </button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="text-gray-900" size={28} />
                        ) : (
                            <Menu
                                className={
                                    isScrolled ? "text-gray-900" : "text-white"
                                }
                                size={28}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-semibold text-gray-800 hover:text-[#FF385C]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="my-2" />
                            <div className="flex items-center gap-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setCurrentLang(lang.name);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`text-sm font-bold ${
                                            currentLang === lang.name
                                                ? "text-[#FF385C]"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>

                            {/* NEW: Book Table button inside the mobile menu */}
                            <Link href="/booktable" className="mt-2">
                                <button className="w-full bg-[#FF385C] text-white py-3 rounded-md font-bold shadow-md active:scale-95 transition-transform">
                                    Book A Table
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
