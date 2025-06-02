
import VideoSection from "@/components/VideoSection";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import PrizeSection from '@/components/PrizeSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <VideoSection />
      <HeroSection />
      <PrizeSection />
      <SponsorsSection />
    </main>
  );
};

export default Index;
