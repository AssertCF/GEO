import React from 'react';
import { Screen } from '../types';

interface AssetsProps {
  onNavigate: (screen: Screen) => void;
}

export const AssetsLibrary: React.FC<AssetsProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-dark pb-24">
      <div className="sticky top-0 z-30 bg-background-dark/80 backdrop-blur-xl border-b border-slate-800">
        <div className="flex items-center p-4 pb-3 justify-between">
          <div className="flex items-center gap-2" onClick={() => onNavigate(Screen.Dashboard)}>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer">arrow_back_ios</span>
            <h1 className="text-lg font-bold tracking-tight text-white">内容资产库 <span className="text-slate-500 font-normal ml-1">Assets Library</span></h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="flex w-full items-center rounded-xl h-10 bg-slate-800/60 border border-slate-700/50 px-3">
            <span className="material-symbols-outlined text-slate-500 text-[20px]">search</span>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 py-0 text-white" placeholder="搜索资产、Prompt或GEO规则..." type="text"/>
            <span className="material-symbols-outlined text-slate-500 text-[18px]">mic</span>
          </div>
        </div>
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-full bg-accent-blue/20 border border-accent-blue/30 px-3">
            <p className="text-[11px] font-semibold text-primary">2026 智能体教育</p>
          </button>
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-800 px-3">
            <p className="text-[11px] font-medium text-slate-300">GEO 工程</p>
            <span className="material-symbols-outlined text-[14px] text-slate-500">expand_more</span>
          </button>
          <button className="flex h-7 shrink-0 items-center justify-center gap-x-1 rounded-full bg-slate-800 px-3">
            <p className="text-[11px] font-medium text-slate-300">版本 V1-V4</p>
            <span className="material-symbols-outlined text-[14px] text-slate-500">expand_more</span>
          </button>
        </div>
      </div>

      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">分类文件夹 / Folders</h3>
          <span className="text-[10px] text-primary font-medium">查看全部</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card-dark border border-slate-800 rounded-xl p-3 flex flex-col gap-2 active:bg-slate-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-amber-500 text-[28px] fill">folder</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">12 Files</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold leading-tight text-slate-200">判断型问题树模板</h4>
              <p className="text-[10px] text-slate-500 mt-1">(智能体教育)</p>
            </div>
          </div>
          <div className="bg-card-dark border border-slate-800 rounded-xl p-3 flex flex-col gap-2 active:bg-slate-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-blue-500 text-[28px] fill">folder</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">48 Files</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold leading-tight text-slate-200">GEO Prompt 规则</h4>
              <p className="text-[10px] text-slate-500 mt-1">搜索引擎优化库</p>
            </div>
          </div>
          <div className="bg-card-dark border border-slate-800 rounded-xl p-3 flex flex-col gap-2 active:bg-slate-800 transition-colors">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-emerald-500 text-[28px] fill">folder</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">124 Files</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold leading-tight text-slate-200">历史 GEO 文章</h4>
              <p className="text-[10px] text-slate-500 mt-1">2023-2025 归档</p>
            </div>
          </div>
          <div className="border border-dashed border-slate-700 rounded-xl p-3 flex flex-col items-center justify-center gap-1 min-h-[90px] active:bg-slate-800/50">
            <span className="material-symbols-outlined text-slate-600">create_new_folder</span>
            <span className="text-[10px] text-slate-500 font-medium">新建目录</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">所有资产 / Assets List (28)</h3>
          <div className="flex items-center gap-1 text-slate-500">
            <span className="text-[10px] font-bold uppercase">智能排序</span>
            <span className="material-symbols-outlined text-[14px]">swap_vert</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-card-dark border border-slate-800 rounded-xl overflow-hidden active:bg-slate-800 transition-colors">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="bg-red-500/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-red-500 text-[24px]">description</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 leading-snug">2026智能体职业教育研究-V1</h4>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase">VOCATIONAL</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 uppercase">ENGINEERING</span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-600">more_vert</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/50">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 uppercase">创建时间</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-slate-500">calendar_today</span>
                    <span className="text-[10px] text-slate-300">2024-03-24</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 uppercase">使用频率</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-slate-500">analytics</span>
                    <span className="text-[10px] text-slate-300">1,429 次</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-slate-500 uppercase">模型评分</span>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-primary fill">star</span>
                    <span className="text-[11px] font-bold text-primary">9.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card-dark border border-slate-800 rounded-xl overflow-hidden active:bg-slate-800 transition-colors">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-blue-500 text-[24px]">terminal</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-100 leading-snug">职业技能习得路径问题树模板</h4>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase">TEMPLATE</span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-600">more_vert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white active:scale-95 transition-transform z-20">
        <span className="material-symbols-outlined text-[32px]">upload_file</span>
      </button>
    </div>
  );
};
