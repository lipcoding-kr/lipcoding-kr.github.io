
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, Gift, Award, Medal, Gamepad2, Headphones, Keyboard } from "lucide-react";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";

const PrizeSection = () => {
  return (
    <section className="relative py-24 bg-[#FCEB60] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary opacity-10 blur-xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Badge 
            className="mb-6 bg-black text-white px-4 py-1.5 text-sm font-medium tracking-wider rounded-md border-0"
            variant="outline"
          >
            참가자 혜택
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-dark mb-6 leading-tight">
            입코딩 챔피언을 위한 <br />
            <span className="text-primary">특별한 보상</span>
          </h2>
          <p className="text-lg text-secondary-dark/90">
            코딩 챌린지를 완료하고 다양한 상품과 경험을 획득하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* First Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Trophy className="h-5 w-5" /> 대상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/5af7d938-ff77-43b9-8506-7ce8d775b402.png" 
                    alt="Xbox Series S console with controller" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gamepad2 className="h-5 w-5 text-secondary-dark mt-0.5 shrink-0" />
                    <span>상품: 엑스박스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" /> 최우수상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1662997291246-31c7c8133cdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Nintendo Switch console" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Gamepad2 className="h-5 w-5 text-secondary-dark mt-0.5 shrink-0" />
                    <span>상품: 닌텐도스위치</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Third Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Medal className="h-5 w-5" /> 우수상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/45c20fd6-c525-4a3f-ac25-30edbcbfb37c.png" 
                    alt="AirPods Pro earbuds" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Headphones className="h-5 w-5 text-secondary-dark mt-0.5 shrink-0" />
                    <span>상품: 에어팟 프로</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Fourth Prize Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 h-full transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Medal className="h-5 w-5" /> 장려상 (1명)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black space-y-4">
                <AspectRatio ratio={4/3} className="bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Keyboard and mouse" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Keyboard className="h-5 w-5 text-secondary-dark mt-0.5 shrink-0" />
                    <span>상품: 키보드/마우스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
