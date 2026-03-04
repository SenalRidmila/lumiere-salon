import Hero from "../components/ui/Hero";
import BentoGrid from "../components/ui/BentoGrid"; // Aluth component eka import kala
import SocialProof from "../components/ui/SocialProof";
import Portfolio from "../components/ui/Portfolio"; // Import kala
import Team from "../components/ui/Team";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-salon-bg">
      <Hero />
      <BentoGrid /> {/* Methanata damma */}
      <SocialProof />
      <Portfolio />
      <Team />
      <Footer />
    </div>
  );
}