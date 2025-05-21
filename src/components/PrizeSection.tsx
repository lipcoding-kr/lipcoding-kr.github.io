
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, Gift, Award, Medal, Gamepad2, Headphones, Keyboard } from "lucide-react";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";

// Pixel art decorative elements
const PixelArt = ({ className }: { className?: string }) => (
  <div className={`${className} relative`}>
    <div className="absolute w-6 h-6 bg-white border border-black transform rotate-45"></div>
    <div className="absolute w-4 h-4 bg-white border border-black transform translate-x-1 translate-y-1 rotate-45"></div>
  </div>
);

const PrizeSection = () => {
  return (
    <section className="relative py-24 bg-[#E53935] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pixel art background elements */}
        <PixelArt className="top-20 right-10" />
        <PixelArt className="bottom-40 left-20" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-white/50 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-white/20 rotate-45"></div>
        <div className="absolute top-40 left-20 w-10 h-10 bg-white/20 rounded-full"></div>
        
        {/* Pixelated gift */}
        <div className="absolute bottom-60 right-40">
          <div className="w-12 h-4 bg-white border border-black absolute top-0 left-0"></div>
          <div className="w-12 h-8 bg-white border border-black absolute top-4 left-0"></div>
          <div className="w-4 h-12 bg-white border border-black absolute top-0 left-4"></div>
        </div>
        
        {/* Pixelated crown */}
        <div className="absolute top-40 left-40">
          <div className="w-4 h-4 bg-white border border-black absolute top-0 left-0"></div>
          <div className="w-4 h-4 bg-white border border-black absolute top-0 left-4"></div>
          <div className="w-4 h-4 bg-white border border-black absolute top-0 left-8"></div>
          <div className="w-12 h-4 bg-white border border-black absolute top-4 left-0"></div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-6 py-2 mb-6 text-xl font-black tracking-wider text-[#E53935] rounded-md bg-white border-4 border-black transform -rotate-2 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            참가자 혜택
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight uppercase text-shadow-[4px_4px_0px_#000]">
            입코딩 챔피언을 위한 <br />
            <span className="text-black">특별한 보상</span>
          </h2>
          <p className="text-xl text-white font-medium px-4 py-2 bg-black/20 inline-block transform rotate-1 border-b-4 border-black">
            코딩 챌린지를 완료하고 다양한 상품과 경험을 획득하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* First Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white border-4 border-black h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300 rotate-1">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-[#E53935]">
                  <Trophy className="h-5 w-5" /> 대상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden border-2 border-black">
                  <img 
                    src="/lovable-uploads/5af7d938-ff77-43b9-8506-7ce8d775b402.png" 
                    alt="Xbox Series S console with controller" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gamepad2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <span>상품: 엑스박스</span>
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
            <Card className="bg-white border-4 border-black h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300 -rotate-1">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-[#E53935]">
                  <Award className="h-5 w-5" /> 최우수상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden border-2 border-black">
                  <img 
                    src="/lovable-uploads/ceebd8b0-0a6a-4fe6-a84b-130633dd2bc2.png" 
                    alt="Nintendo Switch console" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gamepad2 className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <span>상품: 닌텐도스위치</span>
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
            <Card className="bg-white border-4 border-black h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300 rotate-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-[#E53935]">
                  <Medal className="h-5 w-5" /> 우수상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden border-2 border-black">
                  <img 
                    src="/lovable-uploads/45c20fd6-c525-4a3f-ac25-30edbcbfb37c.png" 
                    alt="AirPods Pro earbuds" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Headphones className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <span>상품: 에어팟 프로</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Fourth Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-white border-4 border-black h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-transform duration-300 -rotate-2">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-[#E53935]">
                  <Medal className="h-5 w-5" /> 장려상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden border-2 border-black">
                  <img 
                    src="/lovable-uploads/f4123bcd-57ba-4738-a70a-a9c4113b0778.png" 
                    alt="Microsoft keyboard and mouse" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Keyboard className="h-5 w-5 text-black mt-0.5 shrink-0" />
                    <span>상품: 키보드/마우스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Pixelated decorative elements */}
      <div className="absolute left-5 bottom-20 w-16 h-16 border-4 border-white/70 transform rotate-12"></div>
      <div className="absolute right-10 top-32 w-12 h-12 bg-white/30 transform rotate-45"></div>
      
      {/* Prizes text */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="text-3xl font-black text-white bg-black px-6 py-2 transform rotate-2 border-2 border-white">
          WIN BIG!
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
