import React from 'react';
import { Screen } from '../types';

interface ContextInfoProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export const ContextInfo: React.FC<ContextInfoProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden border-x border-slate-200 dark:border-slate-800 shadow-2xl bg-background-light dark:bg-background-dark pb-24">
      <div className="sticky top-0 z-20 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl p-4 pb-3 justify-between border-b border-slate-200 dark:border-slate-800">
        <div onClick={onBack} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer active:opacity-50 transition-opacity">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-[17px] font-semibold leading-tight tracking-tight">公司与项目资料</h2>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-0.5">Context Info</span>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button onClick={() => onNavigate(Screen.ProblemTree)} className="text-primary text-[17px] font-semibold active:opacity-50 transition-opacity">保存</button>
        </div>
      </div>

      <div className="p-4 space-y-5 flex-1">
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">school</span>
          </div>
          <div>
            <h1 className="text-slate-900 dark:text-white text-lg font-bold">2026智能体职业教育</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">GEO 内容工程系统 / AI 搜索优化</p>
          </div>
        </div>

        <section className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
            <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider">智能体背景描述</h3>
          </div>
          <div className="flex flex-col gap-3">
            <textarea className="form-textarea flex w-full resize-none rounded-xl text-slate-900 dark:text-white focus:ring-1 focus:ring-primary border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0E131F] min-h-[160px] placeholder:text-slate-400 dark:placeholder:text-slate-600 p-4 text-sm font-normal leading-relaxed" placeholder="请输入关于 2026 智能体职业教育的核心背景。例如：行业趋势、智能体在教学中的角色、核心教学目标等..."></textarea>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 dark:text-slate-500">建议 200-500 字以获得最佳优化效果</span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">GEO-LAYER V2.4</span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">analytics</span>
              <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider">教育趋势报告</h3>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">PDF/DOCX</span>
          </div>
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-[#0E131F]/50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium dark:text-slate-200 truncate max-w-[180px]">2026_AI_Edu_Trends.pdf</span>
                  <span className="text-[10px] text-slate-500">2.4 MB</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-red-500">
                <span className="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-8 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/30 dark:bg-[#0E131F]/30 text-slate-400 dark:text-slate-500 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group">
              <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">cloud_upload</span>
              <span className="text-xs mt-2 font-medium">点击或拖拽上传报告</span>
              <span className="text-[10px] mt-1 opacity-60">支持智能体能力分析、市场研究报告</span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-xl">menu_book</span>
            <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider">课程目录与链接</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 ml-1">课程官方目录 (URL)</span>
              <div className="flex items-center bg-slate-50 dark:bg-[#0E131F] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus-within:ring-1 focus-within:ring-primary transition-all">
                <span className="material-symbols-outlined text-slate-400 text-lg mr-3">link</span>
                <input className="bg-transparent border-none p-0 focus:ring-0 text-sm w-full dark:text-white placeholder:text-slate-600" placeholder="https://edu.example.com/2026-agent-catalog" type="url"/>
              </div>
            </div>
          </div>
        </section>
        
        <div className="px-2 py-4 flex items-start gap-3 opacity-60">
            <span className="material-symbols-outlined text-lg mt-0.5 text-slate-400">verified_user</span>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                此上下文将直接影响 AI 智能体在职业教育场景下的语义理解与回答准确度。
            </p>
        </div>
      </div>
    </div>
  );
};
