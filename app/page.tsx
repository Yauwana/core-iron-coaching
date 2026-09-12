import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CoachingSection } from "@/components/sections/CoachingSection";
import { WhoSection } from "@/components/sections/WhoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { HowSection } from "@/components/sections/HowSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { SHOW_RESULTS, SHOW_FAQ } from "@/lib/content";

export default function Home() {
  return (
    <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden", background: "var(--iron-900)" }}>
      <Header />
      <Hero />
      <CoachingSection />
      <WhoSection />
      <AboutSection />
      {SHOW_RESULTS ? <ResultsSection /> : null}
      <HowSection />
      {SHOW_FAQ ? <FaqSection /> : null}
      <ContactSection />
      <Footer />
    </div>
  );
}
