
import HeroSection from "@/components/HeroSection";
import BlogPosts from "@/components/BlogPosts";
import SocialLinks from "@/components/SocialLinks";
import CalendarEmbed from "@/components/CalendarEmbed";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BlogPosts />
      <CalendarEmbed />
      <SocialLinks />
    </main>
  );
};

export default Index;
