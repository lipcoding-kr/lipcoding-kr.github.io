
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users, ExternalLink, Mic, Laptop, Headphones, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-dark via-[#232323] to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary transform rotate-45 opacity-20 blur-xl" />
        <div className="absolute top-40 right-40 w-32 h-32 bg-primary-muted opacity-20 blur-xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-md bg-secondary">
            Limited Spots Available
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            천하제일 입코딩 대회 (with GitHub Copilot)
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            🎙️ GitHub Copilot을 활용한 음성 기반 코딩 대회, 지금 바로 바이브 코딩에 도전하세요!
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a 
              href="https://event-us.kr/msftkrdevrel/event/104124" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-7 h-auto font-semibold transition-all duration-300 hover:translate-y-[-5px] shadow-lg hover:shadow-primary/30 flex items-center"
              >
                Apply Now <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
          
          {/* Event details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="font-bold text-secondary mb-4 text-xl">행사 개요</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-primary mr-3 w-5 h-5" />
                  <p className="text-white">일시: 2025.06.28 토 12:00~18:00</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3 w-5 h-5" />
                  <p className="text-white">장소: 한국 마이크로소프트 13층 (서울 종로구 종로1길 50 더 케이트윈타워 A동)</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="font-bold text-secondary mb-4 text-xl">대회 방식</h3>
              <ul className="space-y-3 text-white ml-6 list-disc">
                <li>개인전</li>
                <li>"GitHub Copilot의 Voice 기능을 사용하여 음성으로" 앱 개발하기</li>
                <li>
                  대상: 바이브 코딩에 관심 있고 경험이 있는 누구나
                  <p className="text-white/70 text-sm mt-1">(연차, 연령 등에 제한이 없으나 원활한 행사 참여를 위해 코드 에러 발생 시 문제 해결 능력이 있는 분 권장)</p>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Timeline and Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="font-bold text-secondary mb-4 text-xl">행사 시간표</h3>
              <p className="text-white/70 italic mb-3 text-sm">(※시간대별 상세 정보는 추후 업데이트 예정)</p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 w-5 h-5 mt-0.5" />
                  <span>오프닝 및 행사 안내</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 w-5 h-5 mt-0.5" />
                  <span>실전 입코딩</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 w-5 h-5 mt-0.5" />
                  <span>발표 및 시상</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 w-5 h-5 mt-0.5" />
                  <span>클로징</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="font-bold text-secondary mb-4 text-xl">준비물</h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-center">
                  <Laptop className="text-primary mr-3 w-5 h-5" />
                  <span>개인 노트북</span>
                </li>
                <li className="flex items-center">
                  <Headphones className="text-primary mr-3 w-5 h-5" />
                  <span>헤드셋(노이즈 캔슬링 기능 권장)</span>
                </li>
                <li className="flex items-center">
                  <Mic className="text-primary mr-3 w-5 h-5" />
                  <span>마이크</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Event stats (original) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <Calendar className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Event Date</h3>
              <p className="text-white text-xl">2025.06.28</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Location</h3>
              <p className="text-white text-xl">Microsoft Korea</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <Users className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Registration</h3>
              <p className="text-white text-xl">Open Now</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
