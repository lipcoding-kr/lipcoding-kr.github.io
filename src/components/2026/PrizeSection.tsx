import { motion } from "framer-motion";

type Prize = {
  medal: string;
  rank: string;
  sub: string;
  img: string;
  name: string;
  highlight?: boolean;
};

const PRIZES: Prize[] = [
  {
    medal: "🥇",
    rank: "대상",
    sub: "1명 또는 1팀",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/prize-xbox-series-s.png",
    name: "Xbox Series S",
    highlight: true,
  },
  {
    medal: "🥈",
    rank: "최우수상",
    sub: "1명 또는 1팀",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/prize-jabra-evolve3-85.png",
    name: "Jabra Evolve3 85",
  },
  {
    medal: "🥉",
    rank: "우수상",
    sub: "1명 또는 1팀",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/prize-jabra-evolve3-75.png",
    name: "Jabra Evolve3 75",
  },
];

const PrizeSection = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-0 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots opacity-15 pointer-events-none" />

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
            🏆 입상자 <span className="text-mint">상품</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {PRIZES.map((prize, i) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 md:p-8 text-center flex flex-col ${
                prize.highlight ? "ring-1 ring-mint/40" : ""
              }`}
            >
              <div className="text-5xl mb-3">{prize.medal}</div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-1 ${
                  prize.highlight ? "text-mint" : "text-white"
                }`}
              >
                {prize.rank}
              </h3>
              <p className="text-white/50 text-sm mb-6">{prize.sub}</p>
              <div className="flex-1 flex items-center justify-center bg-white rounded-xl p-4 mb-4 min-h-[180px]">
                <img
                  src={prize.img}
                  alt={prize.name}
                  className="max-h-40 md:max-h-44 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-semibold text-sm md:text-base">{prize.name}</p>
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
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            <a
              href="https://www.megazone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white rounded-xl px-6 py-4 flex items-center justify-center transition-transform hover:-translate-y-0.5"
            >
              <img
                src="https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-megazonecloud.png"
                alt="메가존 클라우드"
                className="h-8 md:h-10 object-contain"
                loading="lazy"
              />
            </a>
            <div className="flex-1">
              <p className="text-white/70 text-sm md:text-base">
                위 입상자 상품에 더해 우수작은{" "}
                <span className="text-white font-bold">메가존 클라우드</span>에서 선정하여{" "}
                <span className="text-mint font-bold">1500만원 상당의 제품화 컨설팅</span>을 제공합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizeSection;
