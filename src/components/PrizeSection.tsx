
import { motion } from "framer-motion";
import { Trophy, Award, Gamepad2 } from "lucide-react";
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-normal tracking-tight">
            입코딩 챔피언을 위한<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">특별한 보상</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl mt-6">
            코딩 챌린지를 완료하고 다양한 상품과 경험을 획득하세요!
            <br />
            (제세공과금 본인 부담)
          </p>
        </div>

        {/* Prize cards in modern style - centered with mx-auto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" /> 대상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img
                  src="/images/x-box.png"
                  alt="Xbox Series S console with controller"
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-lg sm:text-xl font-bold text-white">
                <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 inline-block mr-2" />
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" /> 최우수상 (1명)
              </h3>
            </div>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <AspectRatio ratio={4/3} className="bg-black/40 rounded-md overflow-hidden mb-4">
                <img
                  src="/images/nintendo-switch.png"
                  alt="Nintendo Switch console"
                  className="object-contain w-full h-full"
                />
              </AspectRatio>
              <div className="text-lg sm:text-xl font-bold text-white">
                <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 inline-block mr-2" />
                상품: 닌텐도스위치
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/70 text-base sm:text-lg md:text-xl mt-6">
            이외에도 다양한 경품이 준비되어 있으며
            <br />
            모든 참가자에게 특별한 기념품을 드립니다!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
