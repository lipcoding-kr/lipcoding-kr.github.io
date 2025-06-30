
import VideoSection from "@/components/VideoSection";
import HeroSection from "@/components/HeroSection";
import KeynoteSection from "@/components/KeynoteSection";
import SponsorsSection from "@/components/SponsorsSection";
import PrizeSection from "@/components/PrizeSection";
import WinnersSection from "@/components/WinnersSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <VideoSection />
      <HeroSection />
      <WinnersSection />
      <KeynoteSection />
      <PrizeSection />
      <SponsorsSection />
    </main>
  );
};

export default Index;
