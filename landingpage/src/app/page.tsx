import AboutFood from "@/sections/AboutFood";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import HotDeliciousSection from "@/sections/HotDeliciousSection";
import HowWeServe from "@/sections/HowWeServe";
import Navbar from "@/sections/Navbar";
import PromoCards from "@/sections/PromoCards";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PromoCards />
            <AboutSection />
            <HotDeliciousSection />
            <AboutFood />
            <HowWeServe />
            <Footer />
        </div>
    );
}
