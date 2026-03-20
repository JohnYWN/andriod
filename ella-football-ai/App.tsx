import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { WorldCupHeader } from './components/WorldCupHeader';
import { AIChatTab } from './components/AIChatTab';
import { PredictionTab } from './components/PredictionTab';
import { MatchDetailTab } from './components/MatchDetailTab';
import { StandingsTab } from './components/StandingsTab';
import { StatsTab } from './components/StatsTab';
import { MessageSquare, Sparkles, Trophy, BarChart3, TrendingUp } from 'lucide-react';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#121212]">
      <WorldCupHeader />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6 bg-[#1E1E1E] border border-[#2A2A2A]">
            <TabsTrigger value="chat" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#4A90E2] data-[state=active]:to-[#00B0FF] data-[state=active]:text-white text-[#B0B0B0]">
              <MessageSquare className="size-5" />
              <span className="text-xs">AI Chat</span>
            </TabsTrigger>
            <TabsTrigger value="prediction" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#4A90E2] data-[state=active]:to-[#00B0FF] data-[state=active]:text-white text-[#B0B0B0]">
              <Sparkles className="size-5" />
              <span className="text-xs">预测</span>
            </TabsTrigger>
            <TabsTrigger value="match" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#4A90E2] data-[state=active]:to-[#00B0FF] data-[state=active]:text-white text-[#B0B0B0]">
              <TrendingUp className="size-5" />
              <span className="text-xs">直播</span>
            </TabsTrigger>
            <TabsTrigger value="standings" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#4A90E2] data-[state=active]:to-[#00B0FF] data-[state=active]:text-white text-[#B0B0B0]">
              <Trophy className="size-5" />
              <span className="text-xs">积分榜</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#4A90E2] data-[state=active]:to-[#00B0FF] data-[state=active]:text-white text-[#B0B0B0]">
              <BarChart3 className="size-5" />
              <span className="text-xs">数据</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat">
            <AIChatTab />
          </TabsContent>
          
          <TabsContent value="prediction">
            <PredictionTab />
          </TabsContent>
          
          <TabsContent value="match">
            <MatchDetailTab />
          </TabsContent>
          
          <TabsContent value="standings">
            <StandingsTab />
          </TabsContent>
          
          <TabsContent value="stats">
            <StatsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}