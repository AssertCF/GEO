import React, { useState } from 'react';
import { Screen } from '../types';

interface ExecutionProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export const Execution: React.FC<ExecutionProps> = ({ onNavigate, onBack }) => {
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecution = () => {
    setIsExecuting(true);
    setTimeout(() => {
      onNavigate(Screen.Preview);
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl p-4 justify-between border-b border-slate-200 dark:border-slate-800">
        <div onClick={onBack} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-[17px] font-bold leading-tight">GEO 内容生成</h2>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Execution Phase</span>
        </div>
        <div className="size-10 flex items-center justify-end">
          <span className="material-symbols-outlined text-slate-400">info</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-5">
        <div className="bg-white dark:bg-card-dark p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden mb-6">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <span className="material-symbols-outlined text-6xl">engineering</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-white flex items-center justify-center rounded-xl bg-primary shrink-0 size-12 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">当前执行项目</h3>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">智能体值不值得学 (2026版)</p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span> 问题树就绪
                </span>
                <span className="text-[11px] text-slate-500">已选 12 个核心节点</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 flex gap-3 mb-6">
          <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">warning</span>
          <p className="text-[12px] text-amber-600 dark:text-amber-400/80 leading-relaxed">
            <span className="font-bold">风控提醒：</span>自动化生成会放大结构问题，请确保问题树与边界完整，以免产生偏离预期的生成结果。
          </p>
        </div>

        <div className="mb-4">
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                <h3 className="text-slate-900 dark:text-white text-sm font-bold">选择分发平台</h3>
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] px-1.5 py-0.5 rounded-full font-bold">10</span>
                </div>
                <button className="text-primary text-xs font-bold px-2 py-1 bg-primary/10 rounded-md">全选</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
                 {[
                     { name: 'CSDN', type: '技术社区', color: 'red', icon: 'terminal', checked: true },
                     { name: '知乎', type: '知识问答', color: 'blue', icon: 'quiz', checked: true },
                     { name: '微信公众号', type: '私域流量', color: 'emerald', icon: 'chat_bubble', checked: true },
                     { name: '小红书', type: '生活方式', color: 'rose', icon: 'auto_awesome', checked: true },
                     { name: '掘金', type: '开发者社区', color: 'indigo', icon: 'code', checked: false },
                     { name: '今日头条', type: '泛资讯', color: 'orange', icon: 'newspaper', checked: false },
                 ].map((platform) => (
                    <label key={platform.name} className={`group relative flex flex-col gap-3 p-4 bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 transition-all active:scale-95 ${!platform.checked ? 'opacity-50' : ''}`}>
                        <div className={`absolute top-3 right-3 h-5 w-5 rounded-full border border-slate-600 flex items-center justify-center ${platform.checked ? 'bg-primary border-primary' : ''}`}>
                             {platform.checked && <span className="material-symbols-outlined text-white text-sm">check</span>}
                        </div>
                        <div className={`size-10 flex items-center justify-center rounded-xl bg-${platform.color}-500/10 text-${platform.color}-500`}>
                            <span className="material-symbols-outlined text-2xl" style={{ color: `var(--color-${platform.color}-500)`}}>{platform.icon}</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-900 dark:text-white text-sm font-bold">{platform.name}</p>
                            <p className="text-[10px] text-slate-500">{platform.type}</p>
                        </div>
                    </label>
                 ))}
            </div>
        </div>

        <div className="mt-8">
            <div className="bg-black/40 dark:bg-black/60 rounded-xl p-4 font-mono text-[11px] border border-slate-800/50">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                <span className="text-slate-500 font-bold uppercase tracking-widest">Execution Log</span>
                <div className="flex gap-1">
                    <div className="size-2 rounded-full bg-red-500/50"></div>
                    <div className="size-2 rounded-full bg-amber-500/50"></div>
                    <div className="size-2 rounded-full bg-emerald-500/50"></div>
                </div>
                </div>
                <div className="space-y-1.5 text-slate-400">
                <p className="flex gap-2"><span className="text-emerald-500 opacity-50">[OK]</span> 系统环境检查完成...</p>
                <p className="flex gap-2"><span className="text-emerald-500 opacity-50">[OK]</span> 智能体知识库已加载 (v2026.4.1)</p>
                <p className="flex gap-2"><span className="text-primary opacity-50">{isExecuting ? '[RUN]' : '[WAIT]'}</span> {isExecuting ? '生成引擎启动中...' : '等待指令以开始内容生成工程...'}</p>
                {isExecuting && <p className="flex gap-2 text-primary animate-pulse">> Initializing GEO-V4 nodes...</p>}
                </div>
            </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-5 pb-8 space-y-5 z-[70] left-1/2 -translate-x-1/2">
        <div className="space-y-3">
            <div className="flex justify-between items-end">
            <div className="flex flex-col">
                <span className="text-[13px] text-slate-900 dark:text-white font-bold">准备生成 10 篇结构化内容</span>
                <span className="text-[10px] text-slate-500">涵盖 6 个分发渠道 · 深度 AI 搜索优化</span>
            </div>
            <span className="text-xs font-black text-primary bg-primary/10 px-2 py-0.5 rounded">READY</span>
            </div>
            <div className="relative w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 -translate-x-full"></div>
                <div className={`w-0 h-full bg-primary rounded-full transition-all duration-[2000ms] ${isExecuting ? 'w-full' : ''}`}></div>
            </div>
        </div>
        <button 
            onClick={handleExecution}
            disabled={isExecuting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transition-all active:scale-95 group disabled:opacity-80"
        >
            <span className="material-symbols-outlined font-bold group-hover:rotate-12 transition-transform">bolt</span>
            <span className="tracking-wide">{isExecuting ? 'EXECUTING...' : '执行 GEO 内容工程生成'}</span>
        </button>
      </footer>
    </div>
  );
};
