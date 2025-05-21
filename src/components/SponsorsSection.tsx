
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ListPlus } from "lucide-react";

const sponsors = [
  {
    name: "Microsoft",
    logo: "/lovable-uploads/dd45eb43-fab5-4709-8b48-503deb4fe2b4.png",
    level: "Platinum",
    description: "마이크로소프트는 인공지능과 클라우드 컴퓨팅 솔루션을 제공하는 글로벌 기술 기업으로, GitHub Copilot을 통해 개발자들의 생산성을 향상시키는 도구를 제공합니다. 이번 바이브 코딩 챔피언십을 통해 AI 코딩 도구의 가능성을 함께 탐색합니다."
  },
  {
    name: "Code Without Barriers",
    logo: "/lovable-uploads/dffa94b3-5760-4ff0-8976-f7327b6e1cfc.png",
    level: "Platinum",
    description: "Code Without Barriers는 기술 분야에서 여성과 소외된 그룹의 참여를 증진하는 글로벌 이니셔티브입니다. 코딩 교육과 멘토링 프로그램을 통해 다양성을 촉진하며, 이번 대회를 통해 더 많은 사람들이 코딩에 접근할 수 있도록 지원합니다."
  },
  {
    name: "inWe",
    logo: "/lovable-uploads/32994c4f-db26-4b6f-bb66-2ca70c488966.png",
    level: "Gold",
    description: "inWe는 혁신적인 디지털 솔루션을 제공하는 테크 스타트업으로, 사용자 중심의 접근 방식으로 기술과 사람을 연결합니다. 이번 바이브 코딩 챔피언십을 통해 창의적인 코딩 아이디어가 현실이 되는 과정을 지원합니다."
  },
  {
    name: "Women Who Code Korea",
    logo: "/lovable-uploads/c553b11a-90e5-4f2e-aed2-777aa45a18a7.png",
    level: "Gold",
    description: "Women Who Code Korea는 기술 분야에서 여성의 참여와 리더십을 증진하는 커뮤니티입니다. 네트워킹 이벤트, 워크샵, 멘토링을 통해 여성 개발자들을 지원하며, 이번 대회를 통해 더 많은 여성들이 코딩에 도전할 수 있도록 격려합니다."
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

      <div className="max-w-5xl mx-auto">
        {/* All Sponsors in vertical list */}
        <div className="space-y-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full"
            >
              <div className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all hover:-translate-y-1 h-full">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="bg-white/90 p-4 rounded-lg mb-4 md:mb-0 w-full md:w-1/4 h-40 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} 로고`} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-3">
                      <h4 className="text-2xl font-bold text-white">{sponsor.name}</h4>
                      <span className={`inline-block px-3 py-1 text-xs rounded ${
                        sponsor.level === "Platinum" 
                          ? "bg-blue-500/20 text-blue-300" 
                          : "bg-yellow-500/20 text-yellow-300"
                      } mb-2 md:mb-0`}>
                        {sponsor.level}
                      </span>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {sponsor.description}
                    </p>
                  </div>
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
