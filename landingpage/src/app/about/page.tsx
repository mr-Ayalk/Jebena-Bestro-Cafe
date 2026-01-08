import AboutFood from "@/sections/AboutFood";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";
import HowWeServe from "@/sections/HowWeServe";
import Navbar2 from "@/sections/Navbar2";
import React from "react";

const page = () => {
    return (
        <div>
            <Navbar2 />
            <AboutFood />
            <HowWeServe />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default page;
