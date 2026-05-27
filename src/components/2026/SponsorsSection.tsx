import { motion } from "framer-motion";

type Partner = {
  name: string;
  url: string;
  img: string;
  description: string;
};

const HOSTS: Partner[] = [
  {
    name: "Microsoft",
    url: "https://microsoft.com/ko-kr",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-microsoft-cropped.png",
    description:
      "마이크로소프트는 온세상의 모든 사람들과 조직들이 더 많은 것들을 성취할 수 있도록 지원하는 것을 사명으로 삼고 있습니다. 따라서, 더 많은 개발자들이 GitHub Copilot을 통해 더 쉽게 앱을 개발하고 더 높은 생산성을 발휘할 수 있도록 클라우드와 AI 솔루션을 제공합니다.",
  },
  {
    name: "위민후코드코리아 (Womxn Who Code Korea)",
    url: "https://linktr.ee/wwcodeseoul",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-womxnwhocodekorea.png",
    description:
      "위민후코드코리아는 IT분야에 종사하는 여성의 커리어 발전에 영감을 불어넣자는 미션을 가진 비영리조직입니다. 2018년 설립된 위민후코드 서울(글로벌 비영리 기구 Women Who Code의 지부)에 뿌리를 두고 2024년 새롭게 위민후코드코리아로 리브랜딩 하였습니다.",
  },
];

const SPONSORS: Partner[] = [
  {
    name: "메가존 클라우드",
    url: "https://www.megazone.com",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-megazonecloud.png",
    description: "AI Native 기업이자 Microsoft·GitHub 기업파트너인 메가존클라우드가 ‘천하제일 입코딩 대회’와 함께합니다. ”직접 걸어보지 않은 길은 안내하지 않는다”는 철학 아래, Customer Zero로서 AI를 직접 도입·검증한 메가존클라우드가 대한민국 개발자들의 도전을 응원합니다.",
  },
  {
    name: "Jabra",
    url: "https://www.jabra.com/ko-KR",
    img: "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/sponsor-jabra.png",
    description: "자브라는 155년 이상의 전통을 가진 덴마크 사운드 명가 GN그룹의 브랜드입니다. 기술을 통해 사람들의 업무와 일상에 활력을 불어 넣는 것을 사명으로 삼고 있으며, 커뮤니케이션과 협업 분야에서 오디오 및 비디오 솔루션을 개발하고 생산하여 전세계 100여 국가에서 판매하고 있습니다.",
  },
];

const TICKETA_URL = "https://ticketa.co/event/z49uyhx8";

type PartnerGroupProps = {
  label: string;
  title: string;
  partners: Partner[];
  delayOffset?: number;
};

const PartnerGroup = ({ label, title, partners, delayOffset = 0 }: PartnerGroupProps) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-6"
    >
      <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold">
        {label}
      </div>
      <div className="flex-1 divider-mint" />
      <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
        {title}
      </h3>
    </motion.div>

    <div className="space-y-4">
      {partners.map((partner, i) => (
        <motion.a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delayOffset + i * 0.1 }}
          className="block glass-card glass-card-hover rounded-2xl p-5 md:p-6"
        >
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-center">
            <div className="bg-white rounded-xl w-full md:w-44 h-24 flex items-center justify-center flex-shrink-0 p-4">
              <img
                src={partner.img}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="w-full md:flex-1 text-center md:text-left">
              <h4 className="text-lg md:text-xl font-black text-white mb-2">
                {partner.name}
              </h4>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {partner.description}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

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

        <PartnerGroup label="Hosts" title="주최" partners={HOSTS} />
        <PartnerGroup label="Sponsors" title="후원" partners={SPONSORS} delayOffset={0.1} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative glass-card rounded-3xl p-10 md:p-14 text-center overflow-hidden mt-16"
        >
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-4">
              지금 바로 신청하세요!
            </h3>
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
              자리는 한정적입니다. 음성으로 코딩하는 새로운 경험을 놓치지 마세요.
            </p>
            <motion.a
              href={TICKETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <button className="bg-[#2ea043] text-white hover:bg-[#46c860] text-base font-bold px-8 py-4 rounded-xl transition-all border border-[#46c860]/20 shadow-lg shadow-[#2ea043]/20">
                신청하기 →
              </button>
            </motion.a>
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
