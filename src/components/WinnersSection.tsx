import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Trophy, Award, Medal } from "lucide-react";

const WinnersSection = () => {
  const winners = [
    {
      rank: "1위",
      prize: "장원급제",
      name: "정성민",
      githubId: "@JSpiner",
      repository: "JSpiner/lipcoding-competition",
      submissionTime: "17:09:56",
      icon: Trophy,
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-50",
      badgeColor: "bg-yellow-600"
    },
    {
      rank: "2위", 
      prize: "너가급제",
      name: "오다혜",
      githubId: "@devohda",
      repository: "devohda/lipcoding",
      submissionTime: "16:40:53",
      icon: Award,
      bgColor: "bg-gray-400",
      textColor: "text-gray-50",
      badgeColor: "bg-gray-500"
    },
    {
      rank: "3위",
      prize: "입찰됐었게",
      name: "이찬영", 
      githubId: "@coldzero94",
      repository: "coldzero94/lipcoding",
      submissionTime: "17:05:13",
      icon: Medal,
      bgColor: "bg-orange-500",
      textColor: "text-orange-50",
      badgeColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🏆 챔피언 명단
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            치열한 경쟁을 뚫고 챔피언이 된 참가자들을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {winners.map((winner, index) => {
            const IconComponent = winner.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className={`${winner.bgColor} p-6 rounded-t-lg`}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${winner.badgeColor} text-white font-bold`}>
                        {winner.rank}
                      </Badge>
                      <IconComponent className={`w-8 h-8 ${winner.textColor}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${winner.textColor} mb-2`}>
                      {winner.prize}
                    </h3>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{winner.name}</h4>
                      <p className="text-blue-400 font-mono text-sm">{winner.githubId}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">저장소:</span>
                      </div>
                      <a 
                        href={`https://github.com/${winner.repository}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono bg-gray-800 px-3 py-1 rounded"
                      >
                        {winner.repository}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 h-auto font-bold transition-all duration-300 hover:-translate-y-1"
          >
            <a href="https://github.com/lipcoding-kr/lipcoding-competition" target="_blank" rel="noopener noreferrer">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              대회 저장소 보기
              <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
