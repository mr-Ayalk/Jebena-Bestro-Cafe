import AboutFood from "@/sections/AboutFood";
import AboutSection from "@/sections/AboutSection";
import BestSellers from "@/sections/BestSellers";
import BeverageMenu from "@/sections/BeverageMenu";

import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import HowWeServe from "@/sections/HowWeServe";
import Navbar from "@/sections/Navbar";
import PromoCards from "@/sections/PromoCards";
import ReservationSection from "@/sections/ReservationSection";
import Testimonial from "@/sections/Testimonial";
import TrendingMenu from "@/sections/TrendingMenu";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PromoCards />

            <BestSellers />
            <AboutSection />
            {/* <HotDeliciousSection /> */}
            <TrendingMenu />
            <BeverageMenu />
            {/* <BestOffer /> */}
            <AboutFood />
            <HowWeServe />
            <Testimonial />
            <ReservationSection />
            <Footer />
        </div>
    );
}
