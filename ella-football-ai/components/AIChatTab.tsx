import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Bot, User, TrendingUp, Calendar, BarChart3, Zap } from 'lucide-react';

const chatMessages = [
  {
    id: 1,
    type: 'ai',
    content: 'Hi! I\'m Ella. Professional match predictions, real-time odds, and stats.',
    timestamp: '10:30',
  },
  {
    id: 2,
    type: 'ai',
    content: 'What would you like to know about today\'s matches?',
    timestamp: '10:30',
  },
];

const quickActions = [
  { id: 1, icon: Calendar, label: '今日赛程', color: 'from-[#4A90E2] to-[#00B0FF]' },
  { id: 2, icon: TrendingUp, label: '预测比分', color: 'from-[#FF6B35] to-[#E53935]' },
  { id: 3, icon: BarChart3, label: '数据统计', color: 'from-[#4CAF50] to-[#2E7D32]' },
  { id: 4, icon: Zap, label: 'AI 洞察', color: 'from-[#9C27B0] to-[#6A1B9A]' },
];

const suggestedQueries = [
  'Predict Brazil vs Argentina',
  '巴西队最近战绩如何？',
  'Show me top scorers',
  '今天有什么重要比赛？',
];

export function AIChatTab() {
  return (
    <div className="flex flex-col h-[calc(100vh-280px)] max-h-[600px]">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'ai' 
                ? 'bg-gradient-to-br from-[#4A90E2] to-[#00B0FF]' 
                : 'bg-[#1E1E1E]'
            }`}>
              {message.type === 'ai' ? (
                <Bot className="size-5 text-white" />
              ) : (
                <User className="size-5 text-white" />
              )}
            </div>
            
            <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
              <div className={`inline-block max-w-[85%] p-4 rounded-2xl ${
                message.type === 'ai'
                  ? 'bg-[#1E1E1E] text-white'
                  : 'bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] text-white'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-60 mt-1">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#00B0FF] flex items-center justify-center">
            <Bot className="size-5 text-white" />
          </div>
          <div className="bg-[#1E1E1E] p-4 rounded-2xl">
            <div className="flex gap-1">
              <div className="size-2 bg-[#4A90E2] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="size-2 bg-[#4A90E2] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="size-2 bg-[#4A90E2] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mb-4">
        <p className="text-sm text-[#B0B0B0] mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Card
              key={action.id}
              className="bg-[#1E1E1E] border-[#2A2A2A] cursor-pointer hover:border-[#4A90E2] transition-all"
            >
              <CardContent className="p-4">
                <div className={`size-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-2`}>
                  <action.icon className="size-5 text-white" />
                </div>
                <p className="text-sm text-white font-medium">{action.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Suggested Queries */}
      <div className="mb-4">
        <p className="text-sm text-[#B0B0B0] mb-3">Suggested Queries</p>
        <div className="flex flex-wrap gap-2">
          {suggestedQueries.map((query, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="bg-transparent border-[#2A2A2A] text-[#B0B0B0] hover:bg-[#1E1E1E] hover:text-white hover:border-[#4A90E2]"
            >
              {query}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Input Area */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask Ella anything about football..."
          className="flex-1 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#4A90E2]"
        />
        <Button className="bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] hover:opacity-90 px-6">
          Send
        </Button>
      </div>
    </div>
  );
}
