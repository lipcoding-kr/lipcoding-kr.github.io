
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { BadgeCheck } from "lucide-react";

const sponsors = [
  {
    name: "Microsoft",
    logo: "/lovable-uploads/dd45eb43-fab5-4709-8b48-503deb4fe2b4.png",
    level: "Platinum",
  },
  {
    name: "Code Without Barriers",
    logo: "/lovable-uploads/dffa94b3-5760-4ff0-8976-f7327b6e1cfc.png",
    level: "Platinum",
  },
  {
    name: "inWe",
    logo: "/lovable-uploads/32994c4f-db26-4b6f-bb66-2ca70c488966.png",
    level: "Gold",
  },
  {
    name: "Women Who Code Korea",
    logo: "/lovable-uploads/c553b11a-90e5-4f2e-aed2-777aa45a18a7.png",
    level: "Gold",
  }
];

// Pixel art decorative elements
const PixelArt = ({ className }: { className?: string }) => (
  <div className={`${className} relative`}>
    <div className="absolute w-6 h-6 bg-white border border-black transform rotate-45"></div>
    <div className="absolute w-4 h-4 bg-white border border-black transform translate-x-1 translate-y-1 rotate-45"></div>
  </div>
);

const SponsorsSection = () => {
  return (
    <section className="relative py-24 bg-[#2277FF] overflow-hidden">
      {/* Pixel art background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <PixelArt className="top-20 right-10" />
        <PixelArt className="bottom-40 left-20" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-white/50 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-white/20 rotate-45"></div>
        <div className="absolute top-40 left-20 w-10 h-10 bg-white/20 rounded-full"></div>
        
        {/* Pixelated heart */}
        <div className="absolute bottom-32 left-1/4">
          <div className="w-4 h-4 bg-white border border-black absolute top-0 left-4"></div>
          <div className="w-4 h-4 bg-white border border-black absolute top-0 right-4"></div>
          <div className="w-12 h-4 bg-white border border-black absolute top-4 left-0"></div>
          <div className="w-8 h-4 bg-white border border-black absolute top-8 left-2"></div>
          <div className="w-4 h-4 bg-white border border-black absolute top-12 left-4"></div>
        </div>
        
        {/* Pixelated trophy */}
        <div className="absolute top-40 right-1/4">
          <div className="w-8 h-4 bg-white border border-black absolute top-0 left-2"></div>
          <div className="w-4 h-8 bg-white border border-black absolute top-4 left-4"></div>
          <div className="w-12 h-4 bg-white border border-black absolute top-12 left-0"></div>
        </div>
      </div>
      
    <div className="container px-4 mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <span className="inline-block px-6 py-2 mb-6 text-xl font-black tracking-wider text-[#2277FF] rounded-md bg-white border-4 border-black transform -rotate-2 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          SPONSORS
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight uppercase text-shadow-[4px_4px_0px_#000]">
          <span className="text-black">파트너사</span>와 함께하는 대회
        </h2>
        <p className="text-xl text-white font-medium px-4 py-2 bg-black/20 inline-block transform rotate-1 border-b-4 border-black">
          입코딩 챔피언십을 후원하고 지원하는 기업과 단체를 소개합니다
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Platinum Sponsors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-white mb-8 flex items-center justify-center gap-2 uppercase">
            <BadgeCheck className="h-8 w-8 text-black" /> 
            <span className="bg-black px-3 py-1 transform -rotate-2">Platinum 스폰서</span>
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {sponsors
              .filter((sponsor) => sponsor.level === "Platinum")
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="w-full md:w-1/2 max-w-md"
                >
                  <Card className="bg-white border-4 border-black h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-8 flex flex-col items-center justify-center">
                      <div className="bg-white p-4 rounded-xl mb-4 w-48 h-24 flex items-center justify-center border-2 border-black">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} 로고`} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-[#2277FF]">{sponsor.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <div>
          <h3 className="text-xl font-black text-white mb-8 flex items-center justify-center gap-2 uppercase">
            <BadgeCheck className="h-6 w-6 text-black" /> 
            <span className="bg-black px-3 py-1 transform rotate-1">Gold 스폰서</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sponsors
              .filter((sponsor) => sponsor.level === "Gold")
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white border-4 border-black h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between">
                      <div className="bg-white p-3 rounded-lg mb-3 sm:mb-0 w-36 h-20 flex items-center justify-center border-2 border-black">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} 로고`}  
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <div className="text-center sm:text-right">
                        <span className="inline-block px-2 py-1 text-xs rounded bg-[#2277FF] text-white border border-black mb-2">
                          {sponsor.level}
                        </span>
                        <h4 className="text-xl font-bold text-black">{sponsor.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Pixelated decorative elements */}
      <div className="absolute left-5 bottom-20 w-16 h-16 border-4 border-white/70 transform rotate-12"></div>
      <div className="absolute right-10 top-32 w-12 h-12 bg-white/30 transform rotate-45"></div>
      
      {/* Let's Go text */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="text-3xl font-black text-white bg-black px-6 py-2 transform rotate-2 border-2 border-white">
          LET'S GO!
        </div>
      </div>
    </div>
    </section>
  );
};

export default SponsorsSection;
