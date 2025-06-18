
import { motion } from "framer-motion";
import { Trophy, Award, Gamepad2 } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

const KeynoteSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-[10%] left-[10%] w-32 h-32 bg-green-500 rounded-full opacity-20 blur-xl" />

        {/* Decorative circles like in the reference */}
        <div className="absolute bottom-[30%] right-[15%]">
          <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
          <div className="w-8 h-8 bg-red-400 rounded-full opacity-80 ml-4"></div>
          <div className="w-8 h-8 bg-red-300 rounded-full opacity-80 ml-8"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block px-2 py-1 border border-white/20 rounded text-sm text-white/80">
            키노트 스피커
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-normal tracking-tight">
            Klair Baek<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">
              내 동료 AI 개발자와 함께 만들어가는 미래
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl mt-6">
           Staff Manager, Engineering - Copilot
          </p>
        </div>

        {/* Centered image container */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/klair-baek.png"
                alt="Klair Baek, Staff Manager, Engineering - Copilot"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/70 text-base sm:text-lg md:text-xl mt-6">
            Klaire는 GitHub의 엔지니어링 리더로, 현재 Copilot의 메트릭 및 텔레메트리 인프라를 총괄하고 있습니다. 소프트웨어 엔지니어링, 데이터 분석, AI 기반 제품 개발에 대한 깊은 경험을 바탕으로, 내부 및 외부 이해관계자에게 유의미한 인사이트를 제공하는 확장 가능한 시스템 구축에 집중하고 있습니다. Klaire는 개발자 생산성 향상, 고성과 팀 육성, 데이터 기반 의사결정을 통한 비즈니스 임팩트 창출에 열정을 가지고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
