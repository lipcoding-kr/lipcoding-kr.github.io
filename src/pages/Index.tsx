import VideoSection from "@/components/2026/VideoSection";
import HeroSection from "@/components/2026/HeroSection";
import PastEventCard from "@/components/2026/PastEventCard";
import KeynoteSection from "@/components/2026/KeynoteSection";
import ScheduleSection from "@/components/2026/ScheduleSection";
import BenefitsSection from "@/components/2026/BenefitsSection";
import PrizeSection from "@/components/2026/PrizeSection";
import SponsorsSection from "@/components/2026/SponsorsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-ink-0">
      <VideoSection />
      <HeroSection />
      <PastEventCard />
      <KeynoteSection />
      <ScheduleSection />
      <BenefitsSection />
      <PrizeSection />
      <SponsorsSection />
    </main>
  );
};

export default Index;
