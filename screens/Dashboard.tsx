import React from 'react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="glass-header px-5 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-0.5">GEO Content Engineering</span>
          <h1 className="text-xl font-bold text-white tracking-tight">仪表盘 Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px] text-slate-300">search</span>
          </button>
          <div className="relative">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[20px] text-slate-300">notifications</span>
            </button>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-background-dark rounded-full"></span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-5 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="engineering-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-accent-blue text-sm">inventory_2</span>
              <span className="text-xs font-medium text-slate-400">总项目数</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">128</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[10px] font-bold text-emerald-400">持续增长</span>
              </div>
            </div>
          </div>
          <div className="engineering-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-accent-blue text-sm">description</span>
              <span className="text-xs font-medium text-slate-400">GEO文章生成总数</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">15,240</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[10px] font-bold text-emerald-400">+5.4%</span>
              </div>
            </div>
          </div>
          <div className="engineering-card rounded-2xl p-4 col-span-2 flex items-center justify-between border-l-4 border-l-accent-blue">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-blue text-sm">precision_manufacturing</span>
                <span className="text-xs font-medium text-slate-400">模型可复用判断率</span>
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">94.2%</div>
            </div>
            <div className="w-16 h-16 relative flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle className="text-slate-800" cx="18" cy="18" fill="transparent" r="16" stroke="currentColor" strokeWidth="3"></circle>
                <circle className="text-accent-blue" cx="18" cy="18" fill="transparent" r="16" stroke="currentColor" strokeDasharray="94.2, 100" strokeLinecap="round" strokeWidth="3"></circle>
              </svg>
              <span className="absolute text-[10px] font-bold text-accent-blue tracking-tighter">AI</span>
            </div>
          </div>
        </div>

        <div className="engineering-card rounded-2xl overflow-hidden cursor-pointer active:scale-[0.99] transition-transform" onClick={() => onNavigate(Screen.Projects)}>
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-800/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-blue">analytics</span>
              <h3 className="text-sm font-bold text-white">当前工程焦点</h3>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent-blue/20 text-accent-blue border border-accent-blue/30">运行中</span>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase">项目名称</label>
              <p className="text-base font-semibold text-white">2026 智能体职业教育</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">当前状态</label>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <p className="text-sm font-medium text-blue-400">内容生成中</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">工程阶段</label>
                <p className="text-sm font-medium text-slate-300">问题树已完成</p>
              </div>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-accent-blue h-full w-[65%] shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
            </div>
            <p className="text-[11px] text-slate-500 italic">校验流程：待开启 (Waiting for validation)</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history</span>
              最近项目动态
            </h3>
            <button className="text-xs text-accent-blue font-medium hover:text-white transition-colors" onClick={() => onNavigate(Screen.Projects)}>查看全部</button>
          </div>
          <div className="space-y-3">
            <div className="engineering-card rounded-xl p-4 flex gap-4 items-start cursor-pointer hover:bg-slate-800/50 transition-colors" onClick={() => onNavigate(Screen.Projects)}>
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex-shrink-0 flex items-center justify-center border border-blue-800/50">
                <span className="material-symbols-outlined text-accent-blue">school</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white truncate">2026智能体职业教育</h4>
                  <span className="text-[10px] text-slate-500">刚刚</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">状态：内容生成中 · 校验未开始</p>
                <div className="flex gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">问题树: 100%</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">校验: 0%</span>
                </div>
              </div>
            </div>

            <div className="engineering-card rounded-xl p-4 flex gap-4 items-start opacity-70">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex-shrink-0 flex items-center justify-center border border-emerald-800/50">
                <span className="material-symbols-outlined text-emerald-400">check_circle</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white truncate">AI医疗长尾词矩阵</h4>
                  <span className="text-[10px] text-slate-500">2小时前</span>
                </div>
                <p className="text-xs text-slate-400">工程日志：完成 850 篇 GEO 文章校验与导出</p>
              </div>
            </div>
            
             <div className="engineering-card rounded-xl p-4 flex gap-4 items-start opacity-70">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center border border-slate-700">
                <span className="material-symbols-outlined text-slate-400">inventory</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white truncate">跨境电商搜索优化 V4</h4>
                  <span className="text-[10px] text-slate-500">昨天</span>
                </div>
                <p className="text-xs text-slate-400">阶段：模型可复用率校验通过 (95.1%)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
