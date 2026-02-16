import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TikTokSection from "@/components/TikTokSection";
import TestimonialV2 from "@/components/ui/testimonial-v2";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TikTokSection />
      <TestimonialV2 />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
