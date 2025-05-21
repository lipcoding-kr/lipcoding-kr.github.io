
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { HandshakeIcon } from "lucide-react";

const sponsors = [
  {
    name: "Microsoft",
    logo: "/placeholder.svg",
    level: "Platinum",
  },
  {
    name: "GitHub",
    logo: "/placeholder.svg",
    level: "Platinum",
  },
  {
    name: "Azure",
    logo: "/placeholder.svg",
    level: "Gold",
  },
  {
    name: "Visual Studio",
    logo: "/placeholder.svg",
    level: "Gold",
  },
  {
    name: "VS Code",
    logo: "/placeholder.svg",
    level: "Silver",
  },
];

const SponsorsSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-xl" />
        <div className="absolute top-10 left-10 w-60 h-60 bg-secondary-dark transform rotate-45 opacity-10 blur-xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-md bg-secondary">
            스폰서
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            함께하는 <span className="text-primary">파트너사</span>
          </h2>
          <p className="text-lg text-white/80">
            입코딩 챔피언십을 후원하고 지원하는 기업과 단체를 소개합니다
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Platinum Sponsors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center justify-center gap-2">
              <HandshakeIcon className="h-5 w-5" /> Platinum 스폰서
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sponsors
                .filter((sponsor) => sponsor.level === "Platinum")
                .map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
                      <CardContent className="p-8 flex flex-col items-center justify-center">
                        <div className="bg-white/10 p-4 rounded-xl mb-4 w-32 h-32 flex items-center justify-center">
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} 로고`} 
                            className="max-w-full max-h-full object-contain" 
                          />
                        </div>
                        <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Gold & Silver Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors
              .filter((sponsor) => sponsor.level === "Gold" || sponsor.level === "Silver")
              .map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div className="bg-white/10 p-3 rounded-lg mb-3 w-24 h-24 flex items-center justify-center">
                        <img 
                          src={sponsor.logo} 
                          alt={`${sponsor.name} 로고`}  
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-1 text-xs rounded ${sponsor.level === "Gold" ? "bg-yellow-500/20 text-yellow-300" : "bg-gray-400/20 text-gray-300"} mb-2`}>
                          {sponsor.level}
                        </span>
                        <h4 className="text-lg font-semibold text-white">{sponsor.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
