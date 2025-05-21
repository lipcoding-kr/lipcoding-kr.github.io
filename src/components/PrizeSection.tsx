
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, Gift, Award, Medal, Gamepad2, Headphones, Keyboard } from "lucide-react";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";

const PrizeSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-[10%] left-[10%] w-32 h-32 bg-green-500 rounded-full opacity-20 blur-xl" />
        
        {/* Decorative circles like in the reference */}
        <div className="absolute bottom-[30%] right-[15%]">
          <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
          <div className="w-8 h-8 bg-red-400 rounded-full opacity-80 ml-4"></div>
          <div className="w-8 h-8 bg-red-300 rounded-full opacity-80 ml-8"></div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block px-2 py-1 border border-white/20 rounded text-sm text-white/80">
            참가자 혜택
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-none tracking-tight">
            입코딩 챔피언을 위한<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">특별한 보상</span>
          </h2>
          <p className="text-white/70 text-lg">
            코딩 챌린지를 완료하고 다양한 상품과 경험을 획득하세요!
          </p>
        </div>

        {/* Prize cards in modern style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-500" /> 대상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/5af7d938-ff77-43b9-8506-7ce8d775b402.png" 
                  alt="Xbox Series S console with controller" 
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-xl font-bold text-white">
                <Gamepad2 className="h-5 w-5 text-blue-400 inline-block mr-2" />
                상품: 엑스박스
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-400" /> 최우수상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/ceebd8b0-0a6a-4fe6-a84b-130633dd2bc2.png" 
                  alt="Nintendo Switch console" 
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-xl font-bold text-white">
                <Gamepad2 className="h-5 w-5 text-blue-400 inline-block mr-2" />
                상품: 닌텐도스위치
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                <Medal className="h-6 w-6 text-green-400" /> 우수상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/45c20fd6-c525-4a3f-ac25-30edbcbfb37c.png" 
                  alt="AirPods Pro earbuds" 
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-xl font-bold text-white">
                <Headphones className="h-5 w-5 text-blue-400 inline-block mr-2" />
                상품: 에어팟 프로
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                <Medal className="h-6 w-6 text-purple-400" /> 장려상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/f4123bcd-57ba-4738-a70a-a9c4113b0778.png" 
                  alt="Microsoft keyboard and mouse" 
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-xl font-bold text-white">
                <Keyboard className="h-5 w-5 text-blue-400 inline-block mr-2" />
                상품: 키보드/마우스
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
