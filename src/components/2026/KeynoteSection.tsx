import { motion } from "framer-motion";

const SPEAKER_IMG =
  "https://devrel-kr.github.io/event-landing-page/ticketaco/2026/06/lipcoding/images/speaker-heejin-lee.png";

const KeynoteSection = () => {
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
            Keynote
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            키노트 <span className="text-primer-gradient">스피커</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            <div className="relative shrink-0">
              <img
                src={SPEAKER_IMG}
                alt="이희진"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-white/10"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-2">
                Featured Speaker
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                이희진
              </h3>
              <p className="text-white/70 text-base md:text-lg mb-1">
                Senior Solutions Engineer
              </p>
              <p className="text-white/50 text-sm md:text-base">
                GitHub · Microsoft
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full glass-card text-xs text-white/70 font-medium">
                  GitHub Copilot
                </span>
                <span className="px-3 py-1 rounded-full glass-card text-xs text-white/70 font-medium">
                  Voice Coding
                </span>
                <span className="px-3 py-1 rounded-full glass-card text-xs text-white/70 font-medium">
                  Agentic Workflows
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeynoteSection;
