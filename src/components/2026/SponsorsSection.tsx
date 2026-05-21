import { motion } from "framer-motion";

const SPONSORS = [
  {
    name: "Microsoft",
    url: "https://microsoft.com/ko-kr",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-microsoft-cropped.png",
  },
  {
    name: "메가존 클라우드",
    url: "https://www.megazone.com",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-megazonecloud.png",
  },
  {
    name: "Jabra",
    url: "https://www.jabra.com/ko-KR",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-jabra.png",
  },
  {
    name: "우먼후코드 코리아",
    url: "https://linktr.ee/wwcodeseoul",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-womxnwhocodekorea.png",
  },
];

const TICKETA_URL = "https://ticketa.co/event/z49uyhx8";

const SponsorsSection = () => {
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
            Sponsors
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            <span className="text-mint">후원</span> &amp; 지원
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            천하제일 입코딩 대회의 성공적인 개최를 위해 도와주시는 곳입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {SPONSORS.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 md:p-8 flex items-center justify-center min-h-[120px] md:min-h-[140px] transition-transform hover:-translate-y-1"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="max-h-12 md:max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative glass-card rounded-3xl p-10 md:p-14 text-center overflow-hidden"
        >
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-4">
              지금 바로 신청하세요!
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
              자리는 한정적입니다. 음성으로 코딩하는 새로운 경험을 놓치지 마세요.
            </p>
            <a href={TICKETA_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#2ea043] text-white hover:bg-[#46c860] text-base font-bold px-8 py-4 rounded-xl transition-all border border-[#46c860]/20">
                신청하기 →
              </button>
            </a>
            <p className="text-white/40 text-xs mt-6">
              문의: <a href="https://lipcoding.kr/discussions" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white hover:underline">lipcoding.kr/discussions</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
