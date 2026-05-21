import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";

const PastEventCard = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-0 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots-corner opacity-15 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/2025" className="block group">
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-2">
                    Past Event · 2025
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2">
                    <span className="text-white/80">2025</span> 천하제일 입코딩 대회
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    첫 번째 대회의 키노트, 입상작, 후원사를 확인하세요.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl glass-card text-white font-semibold text-sm group-hover:bg-white/[0.08] transition-colors">
                  보러가기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PastEventCard;
