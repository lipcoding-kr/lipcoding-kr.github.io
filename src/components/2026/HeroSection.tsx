import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mic, ExternalLink } from "lucide-react";

const TICKETA_URL = "https://ticketa.co/event/z49uyhx8";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-0 font-display"
    >
      {/* Halftone dots background */}
      <div className="absolute inset-0 halftone-dots opacity-50 pointer-events-none" />

      {/* Pastel orbs */}
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] orb-pink pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] orb-cyan pointer-events-none" />

      <div className="container relative z-10 px-4 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs sm:text-sm font-medium text-white/70 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#5fed83] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5fed83]" />
            </span>
            2026 · 두 번째 행사
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tight leading-[0.95] mb-4 whitespace-normal sm:whitespace-nowrap">
            <span className="text-white">천하제일 </span>
            <span className="text-primer-gradient">입코딩</span>
            <span className="text-white"> 대회</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-medium mb-8">
            with GitHub Copilot
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            GitHub Copilot의 음성 코딩 기능으로 앱을 만들어 봅시다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href={TICKETA_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#2ea043] text-white hover:bg-[#46c860] text-base font-bold px-8 py-6 h-auto rounded-xl transition-all border border-[#46c860]/20"
              >
                참가 신청하기
                <motion.span
                  className="ml-2 inline-flex"
                  animate={{ y: [0, -4, 0, -2, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.8,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.span>
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            <InfoCard
              icon={<Calendar className="w-5 h-5" />}
              label="일시"
              value="2026.06.20 토"
              sub="09:00 – 18:00"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5" />}
              label="장소"
              value="광화문 마이크로소프트"
              sub="13층"
            />
            <InfoCard
              icon={<Mic className="w-5 h-5" />}
              label="대회 방식"
              value="음성 코딩"
              sub="Voice + Copilot"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) => (
  <div className="glass-card glass-card-hover rounded-2xl p-5 text-left">
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#2ea043] flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold mb-1">
          {label}
        </div>
        <div className="text-white font-semibold text-base leading-tight">{value}</div>
        <div className="text-white/50 text-sm">{sub}</div>
      </div>
    </div>
  </div>
);

export default HeroSection;
