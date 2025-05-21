
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-secondary-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full opacity-70" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary transform rotate-45 opacity-70" />
        <div className="absolute top-40 right-40 w-32 h-32 bg-primary-muted opacity-60" />
      </div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-none bg-secondary">
            Limited Spots Available
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            천하제일 입코딩 대회 (with GitHub Copilot)
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Be part of this transformative experience where innovation meets creativity. Don't miss your chance to participate.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-7 h-auto font-semibold"
            >
              Apply
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
