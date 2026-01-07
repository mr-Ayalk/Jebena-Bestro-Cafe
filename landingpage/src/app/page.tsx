import AboutFood from "@/sections/AboutFood";
import AboutSection from "@/sections/AboutSection";
import Hero from "@/sections/Hero";
import HotDeliciousSection from "@/sections/HotDeliciousSection";
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
        </div>
    );
}
