import AboutFood from "@/sections/AboutFood";
import AboutSection from "@/sections/AboutSection";
import BestSellers from "@/sections/BestSellers";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import HowWeServe from "@/sections/HowWeServe";
import Navbar from "@/sections/Navbar";
import PromoCards from "@/sections/PromoCards";
import Testimonial from "@/sections/Testimonial";
import TrendingMenu from "@/sections/TrendingMenu";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PromoCards />
            <AboutSection />
            <BestSellers />
            {/* <HotDeliciousSection /> */}
            <TrendingMenu />
            <AboutFood />
            <HowWeServe />
            <Testimonial />
            <Footer />
        </div>
    );
}
