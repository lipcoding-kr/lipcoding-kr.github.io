
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary-muted rounded-full bg-secondary">
            Welcome to my blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Exploring Design, Technology, and Innovation
          </h1>
          <p className="text-lg md:text-xl text-primary-muted mb-8">
            Join me on a journey through the intersection of design and technology, where simplicity meets innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
