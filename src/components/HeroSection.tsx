import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users, ExternalLink, Mic, Laptop, Headphones, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-[110vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Colorful Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-16 h-16 bg-blue-500 rounded-full opacity-80 blur-sm" />
        <div className="absolute top-[30%] right-[10%] w-12 h-12 bg-green-500 rounded-full opacity-80 blur-sm" />
        <div className="absolute bottom-[20%] left-[20%] w-20 h-20 bg-indigo-600 rounded-full opacity-60 blur-sm" />
        <div className="absolute bottom-[25%] right-[15%] w-24 h-24 bg-red-500 rounded-full opacity-50 blur-sm" />
        
        {/* Circular elements like in the reference */}
        <div className="absolute top-[50%] left-[5%]">
          <div className="w-8 h-8 bg-blue-600 rounded-full opacity-80"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full opacity-80 ml-4"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full opacity-80 ml-8"></div>
        </div>
        
        <div className="absolute top-[20%] right-[20%]">
          <div className="w-6 h-6 bg-green-500 rounded-full opacity-80"></div>
          <div className="w-6 h-6 bg-green-400 rounded-full opacity-80 ml-3"></div>
          <div className="w-6 h-6 bg-green-300 rounded-full opacity-80 ml-6"></div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col space-y-2 mb-12">
            {/* Updated text as requested */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 leading-none tracking-tight">
              천하제일
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">입코딩</span> <span className="text-white">대회</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-300 leading-none tracking-tight mt-2">
                with GitHub Copilot
              </h2>
              <Badge className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 text-sm font-semibold mt-2 transform -rotate-3">
                Coming Soon
              </Badge>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-xl text-white/70 mb-8">
              GitHub Copilot을 활용한 음성 기반 코딩 대회,<br />
              지금 바로 바이브 코딩에 도전하세요!
            </p>
            <a 
              href="https://event-us.kr/msftkrdevrel/event/104124" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-4 h-auto font-bold transition-all duration-300 hover:-translate-y-1"
              >
                지금 지원하기 <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Event Info in modern cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-4 bg-zinc-900/80 backdrop-blur-sm rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-white/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white">
                    <span className="block text-white/60 text-sm">일시</span>
                    2025.06.28 토 12:00~18:00
                  </span>
                </div>
              </div>
              
              <div className="p-4 border border-white/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white">
                    <span className="block text-white/60 text-sm">장소</span>
                    한국 마이크로소프트 13층
                  </span>
                </div>
              </div>
              
              <div className="p-4 border border-white/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white">
                    <span className="block text-white/60 text-sm">대회 방식</span>
                    음성으로 앱 개발하기
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
