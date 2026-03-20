# Ella Football AI - World Cup Design

完整的世界杯足球AI助手应用设计实现。

## 功能特性

### 🤖 AI Chat (AI对话)
- Ella AI助手智能对话
- 快捷操作按钮（今日赛程、预测比分、数据统计、AI洞察）
- 建议查询提示
- 打字机动画效果

### 🎯 Prediction (预测功能)
- TECNO Camon 50活动横幅
- 比赛信息展示
- AI预测结果（主胜/平局/客胜概率）
- 关键因素分析（近期状态、进攻能力、防守能力等）
- 置信度显示

### 📺 Live Match (实时比赛)
- 沉浸式比赛页面（球场背景）
- 实时比分显示
- 比赛时间线（进球、黄牌等事件）
- 比赛统计数据（控球率、射门、角球等）
- 双方阵容展示

### 🏆 Standings (积分榜)
- 多组别排名展示（A/B/C/D组）
- 详细积分表格
- 晋级标识

### 📊 Stats (数据统计)
- 球队统计亮点
- 射手榜
- 助攻榜
- 门将零封榜

## 设计规范

### 颜色主题
- **背景色**: #121212 (深色主题)
- **卡片背景**: #1E1E1E
- **边框**: #2A2A2A
- **主色调**: #4A90E2 (科技蓝)
- **强调色**: #FF6B35 (活力橙)
- **成功色**: #4CAF50 (绿色)
- **错误色**: #E53935 (红色)

### 设计风格
- Material Design 3
- 渐变按钮和卡片
- 圆角设计
- 高对比度UI
- 动效和过渡效果

## 技术栈

- React + TypeScript
- Tailwind CSS v4
- Lucide React (图标)
- Shadcn/ui (UI组件库)
- Unsplash (真实图片)

## 组件结构

```
App.tsx (主入口)
├── WorldCupHeader.tsx (头部组件)
└── Tabs (标签页切换)
    ├── AIChatTab.tsx (AI对话)
    ├── PredictionTab.tsx (预测功能)
    ├── MatchDetailTab.tsx (比赛详情)
    ├── StandingsTab.tsx (积分榜)
    └── StatsTab.tsx (数据统计)
```

## 使用说明

1. 所有组件采用深色主题设计
2. 支持中英文双语界面
3. 使用真实球场和奖品图片提升视觉体验
4. 渐变色设计增强现代感
5. 完整的交互动效

## 作者

Designed and developed for Ella Assistant by Figma Make AI
Date: March 20, 2026
