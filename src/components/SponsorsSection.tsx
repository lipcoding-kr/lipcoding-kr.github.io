
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { HandshakeIcon } from "lucide-react";

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
    <section className="relative py-24 bg-black overflow-hidden">
      
    <div className="container px-4 mx-auto relative z-10">
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block px-2 py-1 border border-white/20 rounded text-sm text-white/80">
          BENEFIT 03
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-none tracking-tight">
          <span className="text-green-500">함께하는</span> <span className="text-white/80 text-7xl" style={{ fontSize: '72px' }}>파트너사</span>
        </h2>
        <p className="text-white/70 text-lg mb-8">
          입코딩 챔피언십을 후원하고 지원하는 기업과 단체를 소개합니다
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Platinum Sponsors */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-6 text-center">
            <HandshakeIcon className="h-5 w-5 inline-block mr-2" /> Platinum 스폰서
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {sponsors
              .filter((sponsor) => sponsor.level === "Platinum")
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-1/2 max-w-md"
                >
                  <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                    <div className="bg-white/90 p-4 rounded-lg mb-4 w-48 h-24 mx-auto flex items-center justify-center">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} 로고`} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <h4 className="text-xl font-bold text-white text-center">{sponsor.name}</h4>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Gold & Silver Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sponsors
            .filter((sponsor) => sponsor.level === "Gold" || sponsor.level === "Silver")
            .map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all hover:-translate-y-1">
                  <div className="bg-white/90 p-3 rounded-lg mb-3 w-36 h-20 mx-auto flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} 로고`}  
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-2 py-1 text-xs rounded ${sponsor.level === "Gold" ? "bg-yellow-500/20 text-yellow-300" : "bg-gray-400/20 text-gray-300"} mb-2`}>
                      {sponsor.level}
                    </span>
                    <h4 className="text-lg font-semibold text-white">{sponsor.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default SponsorsSection;
