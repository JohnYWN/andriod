import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const groupsData = {
  A: [
    { rank: 1, team: '荷兰', flag: '🇳🇱', played: 3, won: 2, drawn: 1, lost: 0, gf: 5, ga: 1, gd: 4, points: 7 },
    { rank: 2, team: '塞内加尔', flag: '🇸🇳', played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, gd: 1, points: 6 },
    { rank: 3, team: '厄瓜多尔', flag: '🇪🇨', played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 3, gd: 1, points: 4 },
    { rank: 4, team: '卡塔尔', flag: '🇶🇦', played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 7, gd: -6, points: 0 },
  ],
  B: [
    { rank: 1, team: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 3, won: 2, drawn: 1, lost: 0, gf: 9, ga: 2, gd: 7, points: 7 },
    { rank: 2, team: '美国', flag: '🇺🇸', played: 3, won: 1, drawn: 2, lost: 0, gf: 2, ga: 1, gd: 1, points: 5 },
    { rank: 3, team: '伊朗', flag: '🇮🇷', played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 7, gd: -3, points: 3 },
    { rank: 4, team: '威尔士', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 6, gd: -5, points: 1 },
  ],
  C: [
    { rank: 1, team: '阿根廷', flag: '🇦🇷', played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 2, gd: 3, points: 6 },
    { rank: 2, team: '波兰', flag: '🇵🇱', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 2, gd: 0, points: 4 },
    { rank: 3, team: '墨西哥', flag: '🇲🇽', played: 3, won: 1, drawn: 1, lost: 1, gf: 2, ga: 3, gd: -1, points: 4 },
    { rank: 4, team: '沙特', flag: '🇸🇦', played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 5, gd: -2, points: 3 },
  ],
  D: [
    { rank: 1, team: '法国', flag: '🇫🇷', played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 3, gd: 3, points: 6 },
    { rank: 2, team: '澳大利亚', flag: '🇦🇺', played: 3, won: 2, drawn: 0, lost: 1, gf: 3, ga: 4, gd: -1, points: 6 },
    { rank: 3, team: '突尼斯', flag: '🇹🇳', played: 3, won: 1, drawn: 1, lost: 1, gf: 1, ga: 1, gd: 0, points: 4 },
    { rank: 4, team: '丹麦', flag: '🇩🇰', played: 3, won: 0, drawn: 1, lost: 2, gf: 1, ga: 3, gd: -2, points: 1 },
  ],
};

function StandingsTable({ data }: { data: any[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#2A2A2A] bg-[#121212]">
            <th className="text-left p-3 text-sm font-medium text-[#B0B0B0]">排名</th>
            <th className="text-left p-3 text-sm font-medium text-[#B0B0B0]">球队</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">赛</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">胜</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">平</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">负</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">进</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">失</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">净</th>
            <th className="text-center p-3 text-sm font-medium text-[#B0B0B0]">积分</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr 
              key={team.rank} 
              className={`border-b border-[#2A2A2A] hover:bg-[#121212] ${team.rank <= 2 ? 'bg-[#4CAF50]/10' : ''}`}
            >
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">{team.rank}</span>
                  {team.rank <= 2 && <span className="text-[#4CAF50]">✓</span>}
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{team.flag}</span>
                  <span className="font-medium text-white">{team.team}</span>
                </div>
              </td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.played}</td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.won}</td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.drawn}</td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.lost}</td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.gf}</td>
              <td className="text-center p-3 text-[#B0B0B0]">{team.ga}</td>
              <td className="text-center p-3">
                <span className={team.gd > 0 ? 'text-[#4CAF50]' : team.gd < 0 ? 'text-[#E53935]' : 'text-[#B0B0B0]'}>
                  {team.gd > 0 ? '+' : ''}{team.gd}
                </span>
              </td>
              <td className="text-center p-3">
                <span className="font-bold text-[#4A90E2]">{team.points}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StandingsTab() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="size-5 text-[#4A90E2]" />
        <h2 className="text-lg font-semibold text-white">积分榜</h2>
      </div>
      
      <Tabs defaultValue="A" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-[#1E1E1E] border border-[#2A2A2A]">
          <TabsTrigger value="A" className="data-[state=active]:bg-[#4A90E2] data-[state=active]:text-white text-[#B0B0B0]">A组</TabsTrigger>
          <TabsTrigger value="B" className="data-[state=active]:bg-[#4A90E2] data-[state=active]:text-white text-[#B0B0B0]">B组</TabsTrigger>
          <TabsTrigger value="C" className="data-[state=active]:bg-[#4A90E2] data-[state=active]:text-white text-[#B0B0B0]">C组</TabsTrigger>
          <TabsTrigger value="D" className="data-[state=active]:bg-[#4A90E2] data-[state=active]:text-white text-[#B0B0B0]">D组</TabsTrigger>
        </TabsList>
        
        {Object.entries(groupsData).map(([group, data]) => (
          <TabsContent key={group} value={group}>
            <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
              <CardHeader>
                <CardTitle className="text-base text-white">小组 {group}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <StandingsTable data={data} />
              </CardContent>
            </Card>
            
            <div className="mt-4 p-3 bg-[#4CAF50]/10 rounded-lg border border-[#4CAF50]/30">
              <p className="text-sm text-[#4CAF50]">
                ✓ 前两名晋级淘汰赛
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}