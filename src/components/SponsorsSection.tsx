
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

const SponsorsSection = () => {
  return (
    <section className="relative py-24 bg-[#0C0F2A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#2541FE] rounded-full opacity-20 blur-xl" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#2541FE] transform rotate-45 opacity-10 blur-xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      
    <div className="container px-4 mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-lg font-black tracking-wider text-white rounded-md bg-[#2541FE] uppercase">
          SPONSORS
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight uppercase">
          <span className="text-[#2541FE]">파트너사</span>와 함께하는 대회
        </h2>
        <p className="text-xl text-white/80 font-medium">
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
          <h3 className="text-2xl font-black text-[#2541FE] mb-8 flex items-center justify-center gap-2 uppercase">
            <BadgeCheck className="h-8 w-8" /> Platinum 스폰서
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
                  <Card className="bg-[#161A3A] backdrop-blur-sm border-[#2541FE]/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
                    <CardContent className="p-8 flex flex-col items-center justify-center">
                      <div className="bg-white p-4 rounded-xl mb-4 w-48 h-24 flex items-center justify-center">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} 로고`} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{sponsor.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <div>
          <h3 className="text-xl font-black text-[#2541FE] mb-8 flex items-center justify-center gap-2 uppercase">
            <BadgeCheck className="h-6 w-6" /> Gold 스폰서
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
                  <Card className="bg-[#161A3A] backdrop-blur-sm border-[#2541FE]/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between">
                      <div className="bg-white p-3 rounded-lg mb-3 sm:mb-0 w-36 h-20 flex items-center justify-center">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} 로고`}  
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <div className="text-center sm:text-right">
                        <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-300 mb-2">
                          {sponsor.level}
                        </span>
                        <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-5 bottom-20 w-16 h-16 border-4 border-[#2541FE]/30 rounded-full"></div>
      <div className="absolute right-10 top-32 w-20 h-20 border-4 border-[#2541FE]/20 rounded-full rotate-45"></div>
      <div className="absolute left-1/4 top-10 w-8 h-8 bg-[#2541FE]/30 rounded-full blur-sm"></div>
      <div className="absolute right-1/3 bottom-14 w-12 h-12 bg-[#2541FE]/20 rotate-45"></div>
    </div>
    </section>
  );
};

export default SponsorsSection;
