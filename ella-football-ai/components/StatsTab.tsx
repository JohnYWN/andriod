import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Award, Shield, Zap } from 'lucide-react';

const topScorers = [
  { rank: 1, name: '梅西', team: '阿根廷', flag: '🇦🇷', goals: 5, assists: 3 },
  { rank: 2, name: '姆巴佩', team: '法国', flag: '🇫🇷', goals: 5, assists: 2 },
  { rank: 3, name: '内马尔', team: '巴西', flag: '🇧🇷', goals: 4, assists: 2 },
  { rank: 4, name: '凯恩', team: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 4, assists: 1 },
  { rank: 5, name: '理查利森', team: '巴西', flag: '🇧🇷', goals: 3, assists: 1 },
];

const topAssists = [
  { rank: 1, name: '布鲁诺', team: '葡萄牙', flag: '🇵🇹', assists: 4, goals: 1 },
  { rank: 2, name: '格列兹曼', team: '法国', flag: '🇫🇷', assists: 3, goals: 0 },
  { rank: 3, name: '梅西', team: '阿根廷', flag: '🇦🇷', assists: 3, goals: 5 },
  { rank: 4, name: '德布劳内', team: '比利时', flag: '🇧🇪', assists: 2, goals: 1 },
  { rank: 5, name: '维尼修斯', team: '巴西', flag: '🇧🇷', assists: 2, goals: 2 },
];

const cleanSheets = [
  { rank: 1, name: '库尔图瓦', team: '比利时', flag: '🇧🇪', cleanSheets: 3, saves: 15 },
  { rank: 2, name: '阿利松', team: '巴西', flag: '🇧🇷', cleanSheets: 3, saves: 12 },
  { rank: 3, name: '皮克福德', team: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', cleanSheets: 2, saves: 10 },
  { rank: 4, name: '洛里', team: '法国', flag: '🇫🇷', cleanSheets: 2, saves: 8 },
  { rank: 5, name: '马丁内斯', team: '阿根廷', flag: '🇦🇷', cleanSheets: 2, saves: 11 },
];

const teamStats = [
  { team: '巴西', flag: '🇧🇷', stat: '85%', label: '控球率', color: 'bg-blue-500' },
  { team: '西班牙', flag: '🇪🇸', stat: '92%', label: '传球成功率', color: 'bg-green-500' },
  { team: '英格兰', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', stat: '18', label: '场均射门', color: 'bg-purple-500' },
  { team: '法国', flag: '🇫🇷', stat: '3.5', label: '场均进球', color: 'bg-yellow-500' },
];

function RankingList({ 
  data, 
  title, 
  icon: Icon, 
  statKey 
}: { 
  data: any[]; 
  title: string; 
  icon: any; 
  statKey: string;
}) {
  return (
    <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2 text-white">
          <Icon className="size-5 text-[#4A90E2]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className={`size-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.rank === 1 
                    ? 'bg-yellow-500/20 text-yellow-500' 
                    : item.rank === 2 
                    ? 'bg-gray-400/20 text-gray-400'
                    : item.rank === 3
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'bg-[#4A90E2]/20 text-[#4A90E2]'
                }`}>
                  {item.rank}
                </div>
                <span className="text-xl">{item.flag}</span>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-[#B0B0B0]">{item.team}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-[#4A90E2]">
                  {item[statKey]}
                </p>
                {statKey === 'goals' && item.assists > 0 && (
                  <p className="text-xs text-[#B0B0B0]">{item.assists} 助攻</p>
                )}
                {statKey === 'cleanSheets' && (
                  <p className="text-xs text-[#B0B0B0]">{item.saves} 扑救</p>
                )}
                {statKey === 'assists' && item.goals > 0 && (
                  <p className="text-xs text-[#B0B0B0]">{item.goals} 进球</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsTab() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Zap className="size-5 text-[#4A90E2]" />
        <h2 className="text-lg font-semibold text-white">数据统计</h2>
      </div>
      
      {/* Team Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {teamStats.map((stat, index) => (
          <Card key={index} className="bg-[#1E1E1E] border-[#2A2A2A]">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{stat.flag}</span>
                <span className="text-sm font-medium text-white">{stat.team}</span>
              </div>
              <p className="text-2xl font-bold text-[#4A90E2] mb-1">{stat.stat}</p>
              <p className="text-xs text-[#B0B0B0]">{stat.label}</p>
              <div className={`h-1 ${stat.color} rounded mt-2`} />
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="space-y-6">
        <RankingList 
          data={topScorers}
          title="射手榜"
          icon={Target}
          statKey="goals"
        />
        
        <RankingList 
          data={topAssists}
          title="助攻榜"
          icon={Award}
          statKey="assists"
        />
        
        <RankingList 
          data={cleanSheets}
          title="零封榜（门将）"
          icon={Shield}
          statKey="cleanSheets"
        />
      </div>
    </div>
  );
}