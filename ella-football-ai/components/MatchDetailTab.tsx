import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, MapPin, Users, Activity } from 'lucide-react';

const liveMatch = {
  homeTeam: '巴西',
  homeFlag: '🇧🇷',
  homeScore: 2,
  homeScorers: [
    { player: '内马尔', time: '23\'', type: 'goal' },
    { player: '维尼修斯', time: '67\'', type: 'goal' },
  ],
  awayTeam: '阿根廷',
  awayFlag: '🇦🇷',
  awayScore: 1,
  awayScorers: [
    { player: '梅西', time: '45+2\'', type: 'goal' },
  ],
  time: '75\'',
  status: 'live',
  stage: '1/4决赛',
  venue: '卢赛尔体育场',
  attendance: '88,966',
};

const matchEvents = [
  { time: '67\'', type: 'goal', team: 'home', player: '维尼修斯', event: '⚽ 进球' },
  { time: '58\'', type: 'yellow', team: 'away', player: '迪马利亚', event: '🟨 黄牌' },
  { time: '45+2\'', type: 'goal', team: 'away', player: '梅西', event: '⚽ 进球' },
  { time: '38\'', type: 'yellow', team: 'home', player: '卡塞米罗', event: '🟨 黄牌' },
  { time: '23\'', type: 'goal', team: 'home', player: '内马尔', event: '⚽ 进球' },
];

const matchStats = [
  { label: '控球率', home: 58, away: 42 },
  { label: '射门', home: 15, away: 12 },
  { label: '射正', home: 8, away: 5 },
  { label: '角球', home: 6, away: 4 },
  { label: '犯规', home: 11, away: 14 },
];

const lineups = {
  home: [
    { number: 10, name: '内马尔', position: 'FW' },
    { number: 20, name: '维尼修斯', position: 'FW' },
    { number: 9, name: '理查利森', position: 'FW' },
    { number: 7, name: '帕奎塔', position: 'MF' },
  ],
  away: [
    { number: 10, name: '梅西', position: 'FW' },
    { number: 21, name: '迪巴拉', position: 'FW' },
    { number: 9, name: '阿尔瓦雷斯', position: 'FW' },
    { number: 24, name: '恩佐', position: 'MF' },
  ],
};

export function MatchDetailTab() {
  return (
    <div className="space-y-4">
      {/* Live Score Card */}
      <Card className="bg-gradient-to-br from-[#1E1E1E] to-[#121212] border-[#2A2A2A] overflow-hidden">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1767884162073-b0e3741aad63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzM5MjAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="stadium"
            className="absolute inset-0 size-full object-cover opacity-20"
          />
          <CardContent className="relative p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="bg-[#E53935] text-white animate-pulse">
                🔴 LIVE
              </Badge>
              <Badge variant="outline" className="border-[#4A90E2] text-[#4A90E2]">
                {liveMatch.stage}
              </Badge>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="size-4 text-[#FF6B35]" />
              <span className="text-[#FF6B35] font-bold text-lg">{liveMatch.time}</span>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center flex-1">
                <span className="text-6xl mb-2">{liveMatch.homeFlag}</span>
                <span className="text-white font-bold text-lg">{liveMatch.homeTeam}</span>
              </div>
              
              <div className="px-8">
                <div className="flex items-center gap-4">
                  <span className="text-white text-5xl font-bold">{liveMatch.homeScore}</span>
                  <span className="text-[#B0B0B0] text-3xl">-</span>
                  <span className="text-white text-5xl font-bold">{liveMatch.awayScore}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center flex-1">
                <span className="text-6xl mb-2">{liveMatch.awayFlag}</span>
                <span className="text-white font-bold text-lg">{liveMatch.awayTeam}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-[#B0B0B0]">
              <div className="flex items-center gap-1">
                <MapPin className="size-3" />
                {liveMatch.venue}
              </div>
              <div className="flex items-center gap-1">
                <Users className="size-3" />
                {liveMatch.attendance}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      
      {/* Match Timeline */}
      <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2 text-white">
            <Activity className="size-5 text-[#4A90E2]" />
            Match Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {matchEvents.map((event, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  event.team === 'home' ? 'bg-[#121212]' : 'bg-[#121212]'
                } ${event.team === 'home' ? '' : 'flex-row-reverse'}`}
              >
                <div className="size-8 bg-gradient-to-br from-[#4A90E2] to-[#00B0FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{event.time}</span>
                </div>
                <div className={`flex-1 ${event.team === 'away' ? 'text-right' : ''}`}>
                  <p className="text-white font-medium text-sm">{event.event}</p>
                  <p className="text-[#B0B0B0] text-xs">{event.player}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Match Stats */}
      <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
        <CardHeader>
          <CardTitle className="text-base text-white">Match Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matchStats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-medium">{stat.home}</span>
                  <span className="text-[#B0B0B0]">{stat.label}</span>
                  <span className="text-white font-medium">{stat.away}</span>
                </div>
                <div className="flex gap-1 h-2">
                  <div 
                    className="bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] rounded-full transition-all"
                    style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}
                  />
                  <div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#E53935] rounded-full transition-all"
                    style={{ width: `${(stat.away / (stat.home + stat.away)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Lineups */}
      <Card className="bg-[#1E1E1E] border-[#2A2A2A]">
        <CardHeader>
          <CardTitle className="text-base text-white">Key Players</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[#4A90E2] font-medium text-sm mb-3 flex items-center gap-2">
                <span className="text-2xl">{liveMatch.homeFlag}</span>
                {liveMatch.homeTeam}
              </p>
              <div className="space-y-2">
                {lineups.home.map((player, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#121212] p-2 rounded-lg">
                    <div className="size-6 bg-gradient-to-br from-[#4A90E2] to-[#00B0FF] rounded text-white text-xs flex items-center justify-center font-bold">
                      {player.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-xs font-medium">{player.name}</p>
                      <p className="text-[#B0B0B0] text-xs">{player.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-[#FF6B35] font-medium text-sm mb-3 flex items-center gap-2 justify-end">
                {liveMatch.awayTeam}
                <span className="text-2xl">{liveMatch.awayFlag}</span>
              </p>
              <div className="space-y-2">
                {lineups.away.map((player, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#121212] p-2 rounded-lg flex-row-reverse">
                    <div className="size-6 bg-gradient-to-br from-[#FF6B35] to-[#E53935] rounded text-white text-xs flex items-center justify-center font-bold">
                      {player.number}
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-white text-xs font-medium">{player.name}</p>
                      <p className="text-[#B0B0B0] text-xs">{player.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
