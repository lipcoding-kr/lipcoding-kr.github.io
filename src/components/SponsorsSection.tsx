import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ListPlus } from "lucide-react";

const sponsors = [
  {
    name: "Microsoft",
    logo: "/lovable-uploads/dd45eb43-fab5-4709-8b48-503deb4fe2b4.png",
    level: "Platinum",
    description: "마이크로소프트는 온세상의 모든 사람들과 조직들이 더 많은 것들을 성취할 수 있도록 지원하는 것을 사명으로 삼고 있습니다. 따라서, 더 많은 개발자들이 GitHub Copilot을 통해 더 쉽게 앱을 개발하고 더 높은 생산성을 발휘할 수 있도록 클라우드와 AI 솔루션을 제공합니다."
  },
  {
    name: "Code; Without Barriers",
    logo: "/lovable-uploads/dffa94b3-5760-4ff0-8976-f7327b6e1cfc.png",
    level: "Platinum",
    description: "Microsoft에서 13개의 글로벌 기업과 협력하여 아시아 태평양 지역 9개국에서 운영되는 프로그램입니다. 여성 개발자와 기술 인재의 성장을 지원하는 것을 목표로 하며 5가지 핵심 요소인 Skilling, Partnerships, Mentorship, Communities, Hackathon을 기반으로 운영되고 있습니다."
  },
  {
    name: "위민후코드 코리아(Womxn Who Code Korea)",
    logo: "/lovable-uploads/wwckorea.png",
    level: "Gold",
    description: "위민후코드 코리아는 IT분야에 종사하는 여성의 커리어 발전에 영감을 불어넣자는 미션을 가진 비영리조직입니다. 2018년 설립된 위민후코드 서울(글로벌 비영리 기구 Women Who Code의 지부)에 뿌리를 두고 2024년 새롭게 위민후코드 코리아로 리브랜딩 하였습니다."
  },
  {
    name: "아이인위 (I in We)",
    logo: "/lovable-uploads/32994c4f-db26-4b6f-bb66-2ca70c488966.png",
    level: "Gold",
    description: "아이인위(I in We)는 테크 분야의 여성 리더쉽 양성 비전 하에 활동하던 \"걸스인텍 코리아\"를 모태로 2024년에 창립된 비영리단체입니다. 저희는 (I) 개인이 먼저 본보기가 되고 (We) 개인이 속한 조직의 강점을 극대화하여 선한 영향력의 문화를 전파하는 것을 목표로 합니다."
  }
];

const SponsorsSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      
    <div className="container px-4 mx-auto relative z-10">
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block px-2 py-1 border border-white/20 rounded text-sm text-white/80">
          행사후원
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">함께하는</span> <span className="text-white/80 text-5xl md:text-7xl">파트너사</span>
        </h2>
        <p className="text-white/70 text-xl md:text-2xl mb-12">
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
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-white p-3 rounded-lg mb-4 md:mb-0 w-full md:w-1/5 h-24 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} 로고`} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  </div>
                  <div className="w-full md:w-4/5 text-center md:text-left">
                    <div className="mb-3">
                      <h4 className="text-2xl font-bold text-white">{sponsor.name}</h4>
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
