import React from 'react';
import { Screen } from '../types';

interface ProjectListProps {
  onNavigate: (screen: Screen) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-background-dark/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 py-3 justify-between">
          <div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">项目管理</h2>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">GEO Engineering System</p>
          </div>
          <button 
            onClick={() => onNavigate(Screen.Keywords)}
            className="flex items-center justify-center rounded-lg h-9 bg-primary hover:bg-primary-hover px-3 text-white gap-1.5 text-xs font-semibold active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>新建项目</span>
          </button>
        </div>
        
        <div className="px-4 pb-3">
          <div className="flex w-full items-stretch rounded-lg h-9 overflow-hidden bg-slate-100 dark:bg-[#1a2233] border border-transparent dark:border-slate-800 focus-within:border-primary/50 transition-colors">
            <div className="text-slate-400 flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </div>
            <input className="w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 text-xs font-normal" placeholder="搜索项目、主题或创建人..." />
            <div className="flex items-center px-2">
              <span className="material-symbols-outlined text-[18px] text-slate-400 cursor-pointer hover:text-primary">mic</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-md bg-slate-100 dark:bg-[#1a2233] px-2.5 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 text-[11px] font-medium">所属主题</p>
            <span className="material-symbols-outlined text-slate-400 text-[14px]">expand_more</span>
          </button>
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-md bg-primary/10 border border-primary/30 px-2.5">
            <p className="text-primary dark:text-blue-400 text-[11px] font-semibold">2026智能体</p>
            <span className="material-symbols-outlined text-primary dark:text-blue-400 text-[14px]">close</span>
          </button>
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-md bg-slate-100 dark:bg-[#1a2233] px-2.5 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 text-[11px] font-medium">状态</p>
            <span className="material-symbols-outlined text-slate-400 text-[14px]">filter_alt</span>
          </button>
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-md bg-slate-100 dark:bg-[#1a2233] px-2.5 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 text-[11px] font-medium">创建人</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col pt-2 px-4">
        <div className="py-2 flex items-center justify-between">
          <h3 className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">2026智能体职业教育相关 (08)</h3>
          <span className="material-symbols-outlined text-slate-400 text-sm">swap_vert</span>
        </div>

        {/* Project Card 1 */}
        <div onClick={() => onNavigate(Screen.Keywords)} className="bg-white dark:bg-[#111927] mb-3 rounded-xl p-3 border border-slate-100 dark:border-slate-800/60 shadow-sm cursor-pointer active:scale-[0.98] transition-all">
          <div className="flex justify-between items-start mb-2.5">
            <div className="flex-1 pr-2">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">2026大学生智能体应用研究</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1e293b] px-1.5 py-0.5 rounded">2026智能体职业教育</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded text-[9px] font-bold border border-emerald-500/20">进行中</span>
              <button className="text-slate-400 dark:text-slate-500">
                <span className="material-symbols-outlined text-[18px]">more_horiz</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2.5 border-t border-slate-100 dark:border-slate-800/40">
            <div>
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">创建人</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">张</div>
                <p className="text-slate-700 dark:text-slate-300 text-[11px] font-medium">张一明</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter w-full text-right">操作</p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="material-symbols-outlined text-[16px] text-primary hover:text-white transition-colors">edit_note</span>
                <span className="material-symbols-outlined text-[16px] text-primary hover:text-white transition-colors">analytics</span>
                <span className="material-symbols-outlined text-[16px] text-primary hover:text-white transition-colors">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-[#111927] mb-3 rounded-xl p-3 border border-slate-100 dark:border-slate-800/60 shadow-sm opacity-80">
          <div className="flex justify-between items-start mb-2.5">
            <div className="flex-1 pr-2">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">职教智能体GEO内容工程化方案</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1e293b] px-1.5 py-0.5 rounded">2026智能体职业教育</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded text-[9px] font-bold border border-blue-500/20">已审核</span>
              <button className="text-slate-400 dark:text-slate-500">
                <span className="material-symbols-outlined text-[18px]">more_horiz</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2.5 border-t border-slate-100 dark:border-slate-800/40">
            <div>
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">创建人</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-bold">李</div>
                <p className="text-slate-700 dark:text-slate-300 text-[11px] font-medium">李建华</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter w-full text-right">操作</p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="material-symbols-outlined text-[16px] text-primary">edit_note</span>
                <span className="material-symbols-outlined text-[16px] text-primary">analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-[#111927] mb-3 rounded-xl p-3 border border-slate-100 dark:border-slate-800/60 shadow-sm opacity-60">
          <div className="flex justify-between items-start mb-2.5">
            <div className="flex-1 pr-2">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">2026高职教师智能体赋能计划</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1e293b] px-1.5 py-0.5 rounded">2026智能体职业教育</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="bg-slate-500/10 text-slate-500 px-1.5 py-0.5 rounded text-[9px] font-bold border border-slate-500/20">草稿</span>
            </div>
          </div>
           <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2.5 border-t border-slate-100 dark:border-slate-800/40">
            <div>
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">创建人</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[8px] text-white font-bold">王</div>
                <p className="text-slate-700 dark:text-slate-300 text-[11px] font-medium">王小龙</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-16 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center z-20">
         <div className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined fill">grid_view</span>
            <span className="text-[10px] font-semibold">项目</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">account_tree</span>
            <span className="text-[10px] font-medium">知识图谱</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="text-[10px] font-medium">GEO监控</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">settings_suggest</span>
            <span className="text-[10px] font-medium">系统</span>
        </div>
      </div>
    </div>
  );
};
