import HeroSection    from "./components/HeroSection";
import AboutSection   from "./components/AboutSection";
import XFactorSection from "./components/XFactorSection";
import ServicesSection from "./components/ServicesSection";
import CTASection     from "./components/CTASection";
import TeamSection    from "./components/TeamSection";
import Footer         from "./components/Footer";
import AnimatedX      from "./components/AnimatedX";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <XFactorSection />
      <ServicesSection />
      <TeamSection />
      <CTASection />
      <Footer />
      {/* <AnimatedX /> */}
    </main>
  );
}