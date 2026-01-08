import BeverageMenu from "@/sections/BeverageMenu";
import Footer from "@/sections/Footer";
import Navbar2 from "@/sections/Navbar2";
import TrendingMenu from "@/sections/TrendingMenu";
import React from "react";

const page = () => {
    return (
        <div>
            <Navbar2 />
            <TrendingMenu />
            <BeverageMenu />
            <Footer />
        </div>
    );
};

export default page;
