import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users, ExternalLink, Mic, Laptop, Headphones, Clock, Volume2, VolumeX } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundTooltip, setShowSoundTooltip] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      if (isMuted) {
        // Unmute by changing mute=1 to mute=0
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
        setIsMuted(false);
        setShowSoundTooltip(false);
      } else {
        // Mute by changing mute=0 to mute=1
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
        setIsMuted(true);
      }
    }
  };

  // Auto hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSoundTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[110vh] md:min-h-[100vh] flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden">
      {/* YouTube Video Background - Mobile: top section, Desktop: full background */}
      <div className="relative w-full h-[40vh] md:absolute md:inset-0 md:h-full">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/IUY0TJEwnGA?si=SRK--23DlHJVvUe4&controls=0&autoplay=1&loop=1&playlist=IUY0TJEwnGA&showinfo=0&rel=0&modestbranding=1&mute=1&enablejsapi=1&playsinline=1&start=1"
          className="w-full h-full object-cover md:scale-150"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Sound Control Button */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label={isMuted ? "음성 켜기" : "음성 끄기"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* Custom Sound Tooltip */}
      {showSoundTooltip && isMuted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-6 z-40 bg-white rounded-2xl shadow-2xl p-4 max-w-xs"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Tooltip Arrow */}
          <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
          
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold text-sm">소리를 켜주세요!</h3>
            </div>
            <button
              onClick={() => setShowSoundTooltip(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* Colorful Decorative Elements - Hidden on mobile to avoid clutter */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-10">
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
      
      {/* Main content container - Mobile: below video, Desktop: centered over video */}
      <div className="flex-1 md:absolute md:inset-0 md:flex md:items-center md:justify-center z-20">
        <div className="container px-4 mx-auto relative pt-8 md:pt-16 lg:pt-0">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-col space-y-2 mb-8 sm:mb-12">
              {/* Updated text as requested */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-2 leading-none tracking-tight">
                천하제일
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">입코딩</span> <span className="text-white">대회</span>
              </h1>
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-300 leading-none tracking-tight mt-2">
                  with GitHub Copilot
                </h2>
                <Badge className="bg-red-500 hover:bg-red-600 text-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold mt-2 transform -rotate-3">
                  Coming Soon
                </Badge>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 sm:mb-16"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 px-2">
                GitHub Copilot을 활용한 음성 기반 코딩 대회,<br />
                지금 바로 바이브 코딩에 도전하세요!
              </p>
              <a 
                href="https://aka.ms/lipcoding/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 h-auto font-bold transition-all duration-300 hover:-translate-y-1"
                >
                  참가 신청하기 <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
      </div>
    </section>
  );
};

export default HeroSection;
