
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users, ExternalLink, Mic, Laptop, Headphones, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-md bg-secondary">
            LipCoding
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
        </motion.div>
        
        {/* Simplified Event Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16 max-w-5xl mx-auto">
          {/* Event Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Calendar className="h-5 w-5" /> 행사 개요
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>일시: 2025.06.28 토 12:00~18:00</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
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
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Users className="h-5 w-5" /> 대회 방식
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2 list-disc pl-5">
                  <li>개인전</li>
                  <li>"GitHub Copilot의 Voice 기능을 사용하여 음성으로" 앱 개발하기</li>
                  <li>
                    대상: 바이브 코딩에 관심 있고 경험이 있는 누구나
                    <p className="text-white/70 text-sm mt-1">(코드 에러 발생 시 문제 해결 능력이 있는 분 권장)</p>
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
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Laptop className="h-5 w-5" /> 준비물
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Laptop className="text-primary h-4 w-4 shrink-0" />
                    <span>개인 노트북</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Headphones className="text-primary h-4 w-4 shrink-0" />
                    <span>헤드셋(노이즈 캔슬링 기능 권장)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic className="text-primary h-4 w-4 shrink-0" />
                    <span>마이크</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-xl text-secondary">행사 시간표</CardTitle>
              <CardDescription className="text-center text-white/70">※시간대별 상세 정보는 추후 업데이트 예정</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div className="flex items-start gap-3">
                  <Clock className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">오프닝 및 행사 안내</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">실전 입코딩</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">발표 및 시상</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">클로징</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
