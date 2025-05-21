
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users, ExternalLink, Mic, Laptop, Headphones, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

// Pixel art decorative elements
const PixelArt = ({ className }: { className?: string }) => (
  <div className={`${className} relative`}>
    <div className="absolute w-6 h-6 bg-[#2277FF] border border-white transform rotate-45"></div>
    <div className="absolute w-4 h-4 bg-[#2277FF] border border-white transform translate-x-1 translate-y-1 rotate-45"></div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pixel art background elements */}
        <PixelArt className="top-20 right-10" />
        <PixelArt className="bottom-40 left-20" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-[#2277FF]/50 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-[#2277FF]/20 rotate-45"></div>
        <div className="absolute top-40 left-20 w-10 h-10 bg-[#2277FF]/20 rounded-full"></div>
        
        {/* Pixelated star */}
        <div className="absolute bottom-32 right-1/4">
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-0 left-4"></div>
          <div className="w-12 h-4 bg-[#2277FF] border border-white absolute top-4 left-0"></div>
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-8 left-4"></div>
        </div>
        
        {/* Pixelated lightning bolt */}
        <div className="absolute top-40 left-1/4">
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-0 left-4"></div>
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-4 left-0"></div>
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-8 left-4"></div>
          <div className="w-4 h-4 bg-[#2277FF] border border-white absolute top-12 left-8"></div>
        </div>

        {/* Blue accent rectangles */}
        <div className="absolute top-1/3 left-1/4 w-64 h-10 bg-[#2277FF] transform rotate-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-6 bg-[#2277FF] transform -rotate-2"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-6 py-2 mb-6 text-xl font-black tracking-wider text-black rounded-md bg-[#2277FF] transform -rotate-2 uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
            LipCoding
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
            천하제일 입코딩 대회 <br />
            <span className="text-[#2277FF]">with GitHub Copilot</span>
          </h1>
          <p className="text-xl text-white font-medium px-4 py-2 bg-[#2277FF]/20 inline-block transform rotate-1 border-b-4 border-[#2277FF]">
            🎙️ GitHub Copilot을 활용한 음성 기반 코딩 대회, 지금 바로 바이브 코딩에 도전하세요!
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-10"
          >
            <a 
              href="https://event-us.kr/msftkrdevrel/event/104124" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-[#2277FF] hover:bg-[#2277FF]/90 text-white text-xl px-12 py-7 h-auto font-black transition-all duration-300 hover:translate-y-[-5px] border-2 border-white transform rotate-1 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] flex items-center"
              >
                Apply Now <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Event Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16 max-w-5xl mx-auto">
          {/* Event Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black border-2 border-[#2277FF] shadow-[8px_8px_0px_0px_rgba(34,119,255,0.3)] transform rotate-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-[#2277FF]" /> 행사 개요
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#2277FF] mt-0.5 shrink-0" />
                    <span>일시: 2025.06.28 토 12:00~18:00</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#2277FF] mt-0.5 shrink-0" />
                    <span>장소: 한국 마이크로소프트 13층 (서울 종로구 종로1길 50 더 케이트윈타워 A동)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Competition Format Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-black border-2 border-[#2277FF] shadow-[8px_8px_0px_0px_rgba(34,119,255,0.3)] transform -rotate-1 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="h-5 w-5 text-[#2277FF]" /> 대회 방식
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2 pl-5">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#2277FF] mt-2 shrink-0"></div>
                    <span>개인전</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#2277FF] mt-2 shrink-0"></div>
                    <span>"GitHub Copilot의 Voice 기능을 사용하여 음성으로" 앱 개발하기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#2277FF] mt-2 shrink-0"></div>
                    <span>
                      대상: 바이브 코딩에 관심 있고 경험이 있는 누구나
                      <p className="text-white/70 text-sm mt-1">(코드 에러 발생 시 문제 해결 능력이 있는 분 권장)</p>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Requirements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-black border-2 border-[#2277FF] shadow-[8px_8px_0px_0px_rgba(34,119,255,0.3)] transform rotate-2 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Laptop className="h-5 w-5 text-[#2277FF]" /> 준비물
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Laptop className="text-[#2277FF] h-4 w-4 shrink-0" />
                    <span>개인 노트북</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Headphones className="text-[#2277FF] h-4 w-4 shrink-0" />
                    <span>헤드셋(노이즈 캔슬링 기능 권장)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic className="text-[#2277FF] h-4 w-4 shrink-0" />
                    <span>마이크</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Pixelated decorative elements */}
      <div className="absolute left-5 bottom-20 w-16 h-16 border-4 border-[#2277FF]/70 transform rotate-12"></div>
      <div className="absolute right-10 top-32 w-12 h-12 bg-[#2277FF]/30 transform rotate-45"></div>
      
      {/* CODE */}
      <div className="absolute bottom-12 right-20">
        <div className="text-3xl font-black text-white bg-[#2277FF] px-6 py-2 transform -rotate-2 border-2 border-white">
          CODING!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
