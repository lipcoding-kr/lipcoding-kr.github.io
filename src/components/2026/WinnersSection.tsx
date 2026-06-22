import { motion } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Winner = {
  medal: string;
  rank: string;
  team: string;
  app: string;
  repository: string;
  review: string;
  highlight?: boolean;
};

const WINNERS: Winner[] = [
  {
    medal: "🥇",
    rank: "대상",
    team: "JambalayaSeasoning",
    app: "AIssistant",
    repository: "https://github.com/gjc-detour/lipcoding",
    review:
      "https://raw.githubusercontent.com/lipcoding-kr/lipcoding-competition-2026/main/results/1-prize-winner.jpg",
    highlight: true,
  },
  {
    medal: "🥈",
    rank: "최우수상",
    team: "SCG",
    app: "PulsePlan",
    repository: "https://github.com/soma17-admin/PulsePlan",
    review:
      "https://raw.githubusercontent.com/lipcoding-kr/lipcoding-competition-2026/main/results/2-prize-winner.jpg",
  },
  {
    medal: "🥉",
    rank: "우수상",
    team: "KillerSmith",
    app: "말그림 - Copilot과 말로 그리는 플로우차트",
    repository: "https://github.com/JSpiner/lipcoding2026",
    review:
      "https://raw.githubusercontent.com/lipcoding-kr/lipcoding-competition-2026/main/results/3-prize-winner.jpg",
  },
];

const repoLabel = (url: string) => url.replace("https://github.com/", "");

const WinnersSection = () => {
  return (
    <section className="relative py-24 px-4 bg-ink-1 font-display overflow-hidden">
      <div className="absolute inset-0 halftone-dots-corner opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-3">
            Winners
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            🏆 입상자 <span className="text-mint">명단</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            치열한 경쟁을 뚫고 빛난 입상자를 소개합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {WINNERS.map((winner, i) => (
            <motion.div
              key={winner.rank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 md:p-7 flex flex-col ${
                winner.highlight ? "ring-1 ring-mint/40" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{winner.medal}</span>
                <h3
                  className={`text-xl md:text-2xl font-bold ${
                    winner.highlight ? "text-mint" : "text-white"
                  }`}
                >
                  {winner.rank}
                </h3>
              </div>

              <div className="space-y-3 flex-1 flex flex-col">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-1">
                    Team
                  </p>
                  <p className="text-white font-bold text-base md:text-lg">{winner.team}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-1">
                    App
                  </p>
                  <p className="text-white/80 text-sm md:text-base">{winner.app}</p>
                </div>

                <a
                  href={winner.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors text-xs md:text-sm font-mono bg-ink-0/60 px-3 py-2 rounded-lg break-all"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  {repoLabel(winner.repository)}
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 text-white hover:text-mint transition-colors text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg"
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      심사평 보기
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-ink-1 border-white/10 p-3 md:p-4">
                    <DialogTitle className="sr-only">
                      {winner.team} 심사평
                    </DialogTitle>
                    <div className="bg-white rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto">
                      <img
                        src={winner.review}
                        alt={`${winner.team} 심사평`}
                        className="w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
