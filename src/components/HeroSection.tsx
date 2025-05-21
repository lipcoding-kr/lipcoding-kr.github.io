
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-dark via-[#232323] to-black">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary transform rotate-45 opacity-20 blur-xl" />
        <div className="absolute top-40 right-40 w-32 h-32 bg-primary-muted opacity-20 blur-xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary-dark rounded-md bg-secondary">
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-7 h-auto font-semibold transition-all duration-300 hover:translate-y-[-5px] shadow-lg hover:shadow-primary/30"
            >
              Apply Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          
          {/* Event stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <Calendar className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Event Date</h3>
              <p className="text-white text-xl">Coming Soon</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Location</h3>
              <p className="text-white text-xl">Virtual Event</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-center mb-3">
                <Users className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-bold text-secondary mb-1">Registration</h3>
              <p className="text-white text-xl">Open Now</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
