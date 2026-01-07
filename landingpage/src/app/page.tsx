import AboutSection from "@/sections/AboutSection";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import PromoCards from "@/sections/PromoCards";
import PromoGrid from "@/sections/PromoGrid";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PromoCards />
            <AboutSection />
        </div>
    );
}
