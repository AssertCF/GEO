import React from 'react';
import { Screen } from '../types';

interface PreviewProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export const ContentPreview: React.FC<PreviewProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="relative flex h-full w-full flex-col min-h-screen bg-background-dark pb-24">
      <div className="h-10 w-full bg-background-dark flex items-center justify-between px-6 sticky top-0 z-50">
        <span className="text-xs font-semibold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
          <span className="material-symbols-outlined text-[14px]">wifi</span>
          <span className="material-symbols-outlined text-[14px]">battery_full</span>
        </div>
      </div>
      
      <header className="flex items-center bg-background-dark p-4 pt-2 pb-4 justify-between border-b border-[#324467]/30 sticky top-10 z-40">
        <div onClick={onBack} className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <h2 className="text-white text-base font-semibold leading-tight flex-1 text-center">内容预览与结构校验</h2>
        <div className="flex w-10 items-center justify-end">
          <p className="text-primary text-sm font-bold cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate(Screen.Assets)}>发布</p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Content Preview</span>
            <span className="text-[10px] text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">GEO Optimized</span>
          </div>
          
          <div className="rounded-xl bg-[#131a27] border border-[#324467]/40 p-5 shadow-2xl">
            <article className="space-y-4">
              <h1 className="text-xl font-bold text-white leading-tight">2026智能体职业教育的风险边界</h1>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">calendar_today</span>2026-05-14</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">verified_user</span>GEO Engineering</span>
              </div>
              <div className="h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-primary font-bold">摘要：</span>本文旨在定义大模型驱动的智能体在职业教育交付中的技术性与合规性边界，确保在2026年全面智能化背景下的教学质量确定性。
              </p>
              <div className="space-y-3">
                <h3 class="text-xs font-bold text-slate-400 uppercase">核心架构</h3>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 font-mono text-[12px] text-emerald-400 overflow-x-auto">
                    {`{
  "scope": "Agent-Led Vocational Education",
  "risk_level": "Tier-2 (Controlled)",
  "recovery_protocol": "Human-in-the-loop"
}`}
                </div>
              </div>
              <p className="text-sm text-slate-400 italic">
                [... 渲染引擎: GEO-V4-Pro ...]
              </p>
            </article>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-white text-sm font-bold">结构化校验</h3>
            <div className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-emerald-400 font-medium uppercase">Active Analysis</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#131a27] border border-[#324467]/40">
              <div className="flex items-center justify-center size-6 rounded bg-primary/20 border border-primary/40">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-[13px] font-medium">是否包含一句话结论</p>
                <p className="text-slate-500 text-[10px]">校验内容摘要的GEO索引友好度</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#131a27] border border-[#324467]/40">
              <div className="flex items-center justify-center size-6 rounded bg-primary/20 border border-primary/40">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-[13px] font-medium">是否明确适用边界</p>
                <p className="text-slate-500 text-[10px]">判断技术应用的合规与地理限制</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#131a27] border border-[#324467]/40 border-l-4 border-l-primary/60">
              <div className="flex items-center justify-center size-6 rounded bg-slate-800 border border-slate-700">
                <span className="material-symbols-outlined text-slate-600 text-lg">hourglass_bottom</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-[13px] font-medium">脱离上下文是否仍可被模型复述</p>
                <p className="text-slate-500 text-[10px]">测试信息熵在片段分发时的完整性</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-gradient-to-br from-[#1a2333] to-[#0d131f] p-5 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <span className="material-symbols-outlined text-6xl">neurology</span>
            </div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Model Friendliness</p>
                <h4 className="text-white text-lg font-bold">模型友好度分析</h4>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-primary">88<span className="text-sm">%</span></span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{width: '88%'}}></div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Excellent</span>
            </div>
            <div className="mt-4 flex gap-3 p-3 bg-black/40 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-primary text-sm shrink-0">info</span>
              <p className="text-[11px] text-slate-400 leading-tight">
                该内容针对 AI 搜索引擎进行了深度优化。语义权重主要集中在 <span className="text-white">"风险边界"</span> 与 <span class="text-white">"职业教育"</span>，建议进一步强化因果链条描述。
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/5 flex gap-3 pb-8 z-50">
        <button className="flex-1 py-3.5 px-4 rounded-xl bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-lg">edit_note</span>
          重新优化
        </button>
        <button onClick={() => onNavigate(Screen.Assets)} className="flex-[2] py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-lg">verified</span>
          完成校验
        </button>
      </footer>
    </div>
  );
};
