import VideoSection from "@/components/2025/VideoSection";
import HeroSection from "@/components/2025/HeroSection";
import KeynoteSection from "@/components/2025/KeynoteSection";
import SponsorsSection from "@/components/2025/SponsorsSection";
import PrizeSection from "@/components/2025/PrizeSection";
import WinnersSection from "@/components/2025/WinnersSection";

const Index2025 = () => {
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

export default Index2025;
