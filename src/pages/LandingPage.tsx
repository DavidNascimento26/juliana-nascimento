import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Add a slight delay/lag effect using transform translation instead of left/top for performance
        cursorRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-body overflow-x-hidden selection:bg-brand-heading selection:text-white">
      {!isTouch && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-3 h-3 rounded-full bg-brand-heading/60 pointer-events-none z-50 transition-transform duration-100 ease-out"
          style={{ willChange: "transform" }}
        />
      )}
      
      <Navbar />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="sobre" className="relative z-10">
          <AboutSection />
        </div>

        <div id="formacao" className="relative z-10">
          <CredentialsSection />
        </div>
        
        <div id="servicos" className="relative z-20">
          <ServicesSection />
        </div>
        
        <div id="processo" className="relative z-10">
          <HowItWorksSection />
        </div>
        
        <div id="depoimentos" className="relative z-20">
          <TestimonialsSection />
        </div>
        
        <div id="contato" className="relative z-10">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
