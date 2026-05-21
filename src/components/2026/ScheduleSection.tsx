import { motion } from "framer-motion";

type Item = {
  time: string;
  title: string;
  sub?: string;
  highlight?: boolean;
};

const SCHEDULE: Item[] = [
  { time: "09:00 – 09:30", title: "체크인" },
  { time: "09:30 – 09:40", title: "오프닝" },
  { time: "09:40 – 10:20", title: "키노트", sub: "이희진 · GitHub", highlight: true },
  { time: "10:20 – 10:30", title: "주제 소개" },
  { time: "10:30 – 17:00", title: "입코딩 해커톤", sub: "VS Code · Copilot CLI · GitHub App", highlight: true },
  { time: "17:00 – 17:30", title: "발표" },
  { time: "17:30 – 18:00", title: "시상 및 클로징" },
];

const ScheduleSection = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-0 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-3">
            Schedule
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            하루 <span className="text-primer-gradient">일정</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            2026년 6월 20일 토요일 · 09:00 – 18:00
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />

          <div className="space-y-3">
            {SCHEDULE.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative flex items-stretch gap-4 md:gap-6"
              >
                <div className="relative shrink-0 w-10 md:w-12 flex justify-center pt-5">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ring-4 ring-ink-0 z-10 ${
                      item.highlight ? "bg-white" : "bg-white/30"
                    }`}
                  />
                </div>

                <div className="flex-1 glass-card rounded-xl px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <div className="text-xs font-mono text-white/60 font-semibold tracking-wider whitespace-nowrap">
                      {item.time}
                    </div>
                    <div className={`text-white font-semibold ${item.highlight ? "text-lg" : "text-base"}`}>
                      {item.title}
                    </div>
                  </div>
                  {item.sub && (
                    <div className="text-white/50 text-sm mt-1">{item.sub}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
