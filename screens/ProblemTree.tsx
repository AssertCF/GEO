import React from 'react';
import { Screen } from '../types';

interface ProblemTreeProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export const ProblemTree: React.FC<ProblemTreeProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800 sticky top-0 z-20">
        <div onClick={onBack} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-sm font-bold leading-tight tracking-tight">问题树构建器</h2>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Core Builder</span>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-primary text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">save</span>
          </button>
        </div>
      </header>

      <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-slate-500">GEO-SYSTEM v4.2</span>
          <span className="text-[10px] text-slate-400">Topic: 2026 Agent Vocational Education</span>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="p-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">account_tree</span>
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">逻辑架构编辑</h3>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">NODES: 03</span>
          </div>

          <div className="space-y-4">
            <div className="relative group cursor-pointer">
              <div className="flex items-center p-3.5 rounded-xl bg-node-root/10 border border-node-root/40 shadow-sm ring-1 ring-node-root/20">
                <div className="w-8 h-8 rounded-lg bg-node-root/20 flex items-center justify-center mr-3">
                  <span className="material-symbols-outlined text-node-root text-xl">hub</span>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-black text-node-root uppercase tracking-tighter mb-0.5">Root Problem</p>
                  <p className="text-sm font-bold leading-snug">2026年，智能体是否会成为大学生的核心能力?</p>
                </div>
              </div>
            </div>

            <div className="ml-8 relative">
              <div className="absolute -left-[18px] -top-3 bottom-6 w-px bg-slate-700"></div>
              <div className="absolute -left-[18px] top-6 w-[14px] h-px bg-slate-700"></div>
              
              <div className="flex items-center p-3.5 rounded-xl bg-slate-800/40 border border-slate-700 shadow-sm transition-all hover:border-node-must/50 ring-1 ring-transparent hover:ring-node-must/20 cursor-pointer">
                <div className="w-7 h-7 rounded bg-node-must/10 flex items-center justify-center mr-3">
                  <span className="material-symbols-outlined text-node-must text-lg">psychology</span>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-bold text-node-must uppercase mb-0.5">必答子问题</p>
                  <p className="text-sm font-medium">智能体适合哪些专业背景的大学生?</p>
                </div>
                <span className="material-symbols-outlined text-slate-600 text-sm">drag_handle</span>
              </div>
            </div>

            <div className="ml-8 relative">
              <div className="absolute -left-[18px] -top-6 bottom-6 w-px bg-slate-700"></div>
              <div className="absolute -left-[18px] top-6 w-[14px] h-px bg-slate-700"></div>

              <div className="flex items-center p-3.5 rounded-xl bg-slate-800/40 border border-slate-700 shadow-sm transition-all hover:border-node-boundary/50 ring-1 ring-transparent hover:ring-node-boundary/20 cursor-pointer">
                <div className="w-7 h-7 rounded bg-node-boundary/10 flex items-center justify-center mr-3">
                  <span className="material-symbols-outlined text-node-boundary text-lg">security</span>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-bold text-node-boundary uppercase mb-0.5">边界与风险</p>
                  <p className="text-sm font-medium">智能体职业教育的成本与风险边界是什么?</p>
                </div>
                <span className="material-symbols-outlined text-slate-600 text-sm">drag_handle</span>
              </div>
            </div>

            <div className="ml-8 relative">
               <div className="absolute -left-[18px] -top-6 bottom-10 w-px bg-slate-700"></div>
               <div className="absolute -left-[18px] top-6 w-[14px] h-px bg-slate-700"></div>
               
              <button className="w-full py-3 border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center gap-2 text-slate-500 hover:text-primary hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-sm">add_circle</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">Add Sub-Node</span>
              </button>
            </div>
          </div>

          <div className="mt-4 mx-0 mb-8 p-5 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <span className="material-symbols-outlined text-6xl">target</span>
            </div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                <h3 className="text-xs font-bold tracking-tight uppercase">节点补全逻辑</h3>
              </div>
              <span className="material-symbols-outlined text-slate-600">settings_input_component</span>
            </div>
            <div className="space-y-5">
              <div className="relative">
                <div className="absolute -left-2 top-2 bottom-2 w-0.5 bg-primary/30"></div>
                <p className="text-xs leading-relaxed text-slate-400 italic pl-3">
                  "问题树用于补全模型在该主题下的判断缺口，确保 GEO 优化路径覆盖职业教育向 Agentic Workflow 转型的关键决策点。"
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <label className="block text-[9px] font-bold text-slate-500 uppercase mb-2">模型倾向评分</label>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-primary">9.2</span>
                    <span className="text-[9px] text-slate-600 font-mono">/ 10.0</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-[92%]"></div>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <label className="block text-[9px] font-bold text-slate-500 uppercase mb-2">搜索覆盖深度</label>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold rounded border border-emerald-500/20">OPTIMIZED</span>
                  </div>
                  <div className="flex gap-1 mt-3">
                    <div className="h-1 w-full bg-emerald-500 rounded-full"></div>
                    <div className="h-1 w-full bg-emerald-500 rounded-full"></div>
                    <div className="h-1 w-full bg-emerald-500 rounded-full"></div>
                    <div className="h-1 w-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full px-6 py-4 pb-8 bg-background-dark/80 backdrop-blur-xl border-t border-slate-800 flex items-center justify-between gap-4 z-30">
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-2xl">science</span>
          <span className="text-[9px] font-bold uppercase">仿真运行</span>
        </button>
        <div className="flex-1 flex gap-2">
          <button className="flex-1 py-3 bg-slate-800 text-white text-[11px] font-bold rounded-xl border border-slate-700 active:scale-95 transition-transform uppercase">
            存为模板
          </button>
          <button onClick={() => onNavigate(Screen.Execution)} className="flex-[1.5] py-3 bg-primary text-white text-[11px] font-black rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-transform uppercase tracking-wider">
            推送引擎
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 text-slate-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-2xl">history_edu</span>
          <span className="text-[9px] font-bold uppercase">版本</span>
        </button>
      </footer>
    </div>
  );
};
