import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Trophy, Zap, TrendingUp, Gift } from 'lucide-react';

const upcomingMatch = {
  homeTeam: '巴西',
  homeFlag: '🇧🇷',
  awayTeam: '阿根廷',
  awayFlag: '🇦🇷',
  time: '今天 22:00',
  stage: '1/4决赛',
  venue: '卢赛尔体育场',
};

const aiPrediction = {
  homeWin: 45,
  draw: 25,
  awayWin: 30,
  confidence: 78,
  insight: 'Based on recent form and head-to-head stats, Brazil has a slight edge with their strong attacking lineup.',
};

const keyFactors = [
  { label: '近期状态', home: 85, away: 78 },
  { label: '进攻能力', home: 92, away: 88 },
  { label: '防守能力', home: 75, away: 82 },
  { label: '主场优势', home: 0, away: 0 },
];

export function PredictionTab() {
  return (
    <div className="space-y-4">
      {/* Campaign Banner */}
      <Card className="bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] border-none overflow-hidden">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="size-5 text-white" />
                <Badge className="bg-white/20 text-white border-none">限时活动</Badge>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">预测赢 TECNO Camon 50</h3>
              <p className="text-white/90 text-sm">准确预测比赛结果，赢取最新智能手机</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1584658645175-90788b3347b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcHJpemUlMjBhd2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NzM5NzU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Prize"
              className="size-20 object-contain opacity-90"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Match Info */}
      <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <Badge variant="outline" className="border-[#4A90E2] text-[#4A90E2] mb-2">
              {upcomingMatch.stage}
            </Badge>
            <p className="text-[#B0B0B0] text-sm">{upcomingMatch.time}</p>
            <p className="text-[#B0B0B0] text-xs mt-1">📍 {upcomingMatch.venue}</p>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center flex-1">
              <span className="text-5xl mb-2">{upcomingMatch.homeFlag}</span>
              <span className="text-white font-bold">{upcomingMatch.homeTeam}</span>
            </div>
            
            <div className="px-4">
              <span className="text-[#B0B0B0] text-2xl font-bold">VS</span>
            </div>
            
            <div className="flex flex-col items-center flex-1">
              <span className="text-5xl mb-2">{upcomingMatch.awayFlag}</span>
              <span className="text-white font-bold">{upcomingMatch.awayTeam}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* AI Prediction */}
      <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2 text-white">
            <Zap className="size-5 text-[#4A90E2]" />
            Ella's AI Prediction
            <Badge className="bg-[#4CAF50] text-white ml-auto">
              {aiPrediction.confidence}% Confidence
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button className="bg-[#121212] hover:bg-gradient-to-br hover:from-[#4CAF50] hover:to-[#2E7D32] border border-[#2A2A2A] hover:border-transparent rounded-xl p-4 transition-all group">
              <p className="text-white font-bold text-2xl mb-1">{aiPrediction.homeWin}%</p>
              <p className="text-[#B0B0B0] text-xs group-hover:text-white">主队胜</p>
            </button>
            
            <button className="bg-[#121212] hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#E53935] border border-[#2A2A2A] hover:border-transparent rounded-xl p-4 transition-all group">
              <p className="text-white font-bold text-2xl mb-1">{aiPrediction.draw}%</p>
              <p className="text-[#B0B0B0] text-xs group-hover:text-white">平局</p>
            </button>
            
            <button className="bg-[#121212] hover:bg-gradient-to-br hover:from-[#4CAF50] hover:to-[#2E7D32] border border-[#2A2A2A] hover:border-transparent rounded-xl p-4 transition-all group">
              <p className="text-white font-bold text-2xl mb-1">{aiPrediction.awayWin}%</p>
              <p className="text-[#B0B0B0] text-xs group-hover:text-white">客队胜</p>
            </button>
          </div>
          
          <div className="bg-[#121212] rounded-xl p-4 mb-4">
            <p className="text-sm text-[#B0B0B0] leading-relaxed">{aiPrediction.insight}</p>
          </div>
          
          <div className="space-y-3 mb-4">
            <p className="text-sm text-white font-medium flex items-center gap-2">
              <TrendingUp className="size-4 text-[#4A90E2]" />
              Key Factors
            </p>
            {keyFactors.map((factor, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs text-[#B0B0B0] mb-1">
                  <span>{factor.label}</span>
                  <span>{factor.home} : {factor.away}</span>
                </div>
                <div className="flex gap-2 h-2">
                  <div 
                    className="bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] rounded-full"
                    style={{ width: `${factor.home}%` }}
                  />
                  <div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#E53935] rounded-full"
                    style={{ width: `${factor.away}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] hover:opacity-90 text-white">
            <Trophy className="size-4 mr-2" />
            Submit Your Prediction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
