import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const PRIZES = [
  { emoji: "🥇", title: "대상", sub: "1명 또는 1팀", highlight: true },
  { emoji: "🥈", title: "최우수상", sub: "1명 또는 1팀" },
  { emoji: "🥉", title: "우수상", sub: "1명 또는 1팀" },
];

const PrizeSection = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-1 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots-corner opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-3">
            Prizes
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            <span className="text-mint">상</span> &amp; 상품
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            입상자에게는 아래와 같은 상품을 제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PRIZES.map((prize, i) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl mb-4">{prize.emoji}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                {prize.title}
              </h3>
              <p className="text-white/50 text-sm">{prize.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <Gift className="w-7 h-7 text-white/80" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                참가자 기념품
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                모든 참가자에게 천하제일 입코딩 대회에서만 받을 수 있는 특별한 기념품을 제공합니다.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-white/40 text-sm mt-6">
          자세한 내용은 추후 안내합니다.
        </p>
      </div>
    </section>
  );
};

export default PrizeSection;
