import { motion } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  base: string;
  flex: string;
  total: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  { name: "Pro", price: "$10/month", base: "$10", flex: "$5", total: "$15" },
  { name: "Pro+", price: "$39/month", base: "$39", flex: "$31", total: "$70" },
  {
    name: "Max",
    price: "$100/month",
    base: "$100",
    flex: "$100",
    total: "$200",
    highlight: true,
  },
];

const BenefitsSection = () => {
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
            Benefits
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            ✨ 참가자를 위한 <span className="text-mint">특별한 혜택</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            천하제일 입코딩 대회에 참석하는 모든 참가자에게
            <br className="hidden sm:inline" />{" "}
            <a
              href="https://github.blog/news-insights/company-news/github-copilot-individual-plans-introducing-flex-allotments-in-pro-and-pro-and-a-new-max-plan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint font-bold hover:underline underline-offset-4 decoration-mint/60"
            >
              GitHub Copilot Max
            </a>{" "}
            <span className="text-mint font-bold">한달 이용권</span>을 무료로 드립니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl overflow-hidden mb-6"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="bg-white/[0.06] border-b border-white/10 text-xs md:text-sm uppercase tracking-wider font-semibold text-white/70">
                  <th className="px-4 py-4 md:px-6">Plan</th>
                  <th className="px-4 py-4 md:px-6">Price</th>
                  <th className="px-4 py-4 md:px-6">Base</th>
                  <th className="px-4 py-4 md:px-6">Flex</th>
                  <th className="px-4 py-4 md:px-6">Total included usage</th>
                </tr>
              </thead>
              <tbody>
                {PLANS.map((plan, i) => {
                  const isLast = i === PLANS.length - 1;
                  return (
                    <tr
                      key={plan.name}
                      className={`text-sm md:text-base ${
                        !isLast ? "border-b border-white/5" : ""
                      } ${
                        plan.highlight
                          ? "bg-mint/[0.12] ring-2 ring-inset ring-mint shadow-[0_0_30px_rgba(95,237,131,0.15)_inset]"
                          : ""
                      }`}
                    >
                      <td
                        className={`px-4 py-4 md:px-6 ${
                          plan.highlight ? "text-mint font-black text-lg md:text-xl" : "text-white font-bold"
                        }`}
                      >
                        {plan.name}
                      </td>
                      <td
                        className={`px-4 py-4 md:px-6 ${
                          plan.highlight ? "text-white font-bold" : "text-white/80"
                        }`}
                      >
                        {plan.price}
                      </td>
                      <td
                        className={`px-4 py-4 md:px-6 ${
                          plan.highlight ? "text-white font-semibold" : "text-white/70"
                        }`}
                      >
                        {plan.base}
                      </td>
                      <td
                        className={`px-4 py-4 md:px-6 ${
                          plan.highlight ? "text-white font-semibold" : "text-white/70"
                        }`}
                      >
                        {plan.flex}
                      </td>
                      <td
                        className={`px-4 py-4 md:px-6 ${
                          plan.highlight ? "text-mint font-black text-lg md:text-xl" : "text-white font-bold"
                        }`}
                      >
                        {plan.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="shrink-0 text-4xl">🎁</div>
            <div className="flex-1">
              <p className="text-white/70 text-sm md:text-base">
                이에 더해 천하제일 입코딩 대회에서만 받을 수 있는{" "}
                <span className="text-mint font-bold">특별한 기념품</span>을 제공합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
