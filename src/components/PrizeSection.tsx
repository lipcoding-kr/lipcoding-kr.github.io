
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, Gift, Star, Award, Medal } from "lucide-react";

const PrizeSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-tr from-black to-secondary-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary opacity-10 blur-xl" />
        
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
            참가자 혜택
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            입코딩 챔피언을 위한 <br />
            <span className="text-primary">특별한 보상</span>
          </h2>
          <p className="text-lg text-white/80">
            GitHub Copilot의 음성 기능으로 코딩 챌린지를 완료하고 다양한 상품과 경험을 획득하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* First Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Trophy className="h-5 w-5" /> 대상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gift className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>상품: 최신형 개발자 워크스테이션</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>GitHub Copilot 1년 무료 라이센스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" /> 최우수상 (2명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gift className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>상품: 고급 노이즈 캔슬링 헤드셋</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>GitHub Copilot 6개월 무료 라이센스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Third Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Medal className="h-5 w-5" /> 우수상 (5명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gift className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>상품: 개발자 굿즈 패키지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span>GitHub Copilot 3개월 무료 라이센스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
