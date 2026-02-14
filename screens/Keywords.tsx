import React, { useState } from 'react';
import { Screen } from '../types';
import { generateKeywordsAnalysis } from '../services/geminiService';

interface KeywordsProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export const Keywords: React.FC<KeywordsProps> = ({ onNavigate, onBack }) => {
  const [topic, setTopic] = useState("2026智能体值不值得学, 大学生是否有必要学习智能体");
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalysis = async () => {
    setAnalyzing(true);
    await generateKeywordsAnalysis(topic);
    // In a real app, we would process the response. 
    // Here we just simulate a delay and proceed or show completion.
    setTimeout(() => setAnalyzing(false), 1500);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <div onClick={onBack} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-slate-900 dark:text-white text-[17px] font-semibold leading-tight tracking-tight">关键词与优化目标</h2>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">2026 Agent Vocational Education</span>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-10 bg-transparent text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-xl">info</span>
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 py-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900 dark:text-white text-base font-bold flex items-center gap-2">
            判断型关键词输入
            <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30 uppercase">Entry</span>
          </h3>
        </div>
        <div className="relative">
          <textarea 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="form-input flex w-full resize-none rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151B28] placeholder:text-slate-400 dark:placeholder:text-slate-600 min-h-[140px] p-4 text-[15px] leading-relaxed transition-all shadow-inner" 
            placeholder="输入核心判断逻辑关键词..."
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            <span className="text-[10px] text-slate-400 font-mono">UTF-8 / Engineering</span>
            {analyzing && <span className="text-[10px] text-primary animate-pulse">Analyzing...</span>}
          </div>
        </div>

        <div className="mt-3 flex items-start gap-2 p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
          <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">notification_important</span>
          <p className="text-xs text-amber-600 dark:text-amber-400/80 leading-normal">
            <span className="font-bold">重要提示：</span>关键词用于模型判断入口，而非搜索流量。系统将基于此进行语义向量偏移计算。
          </p>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <div className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-3 py-1.5">
            <span className="text-slate-600 dark:text-slate-300 text-xs font-medium"># 判断型词根</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-3 py-1.5">
            <span className="text-slate-600 dark:text-slate-300 text-xs font-medium"># 职业教育逻辑</span>
          </div>
          <button 
            onClick={handleAnalysis}
            className="flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 active:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-xs text-primary">smart_toy</span>
            <span className="text-primary text-xs font-bold">AI Analyze</span>
          </button>
        </div>

        <div className="h-1.5 bg-slate-100 dark:bg-slate-900/50 my-6 rounded-full"></div>

        <h3 className="text-slate-900 dark:text-white text-base font-bold mb-4">优化方向选择 (GEO/模型引用)</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-primary/5 dark:bg-primary/10 relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-active:scale-150"></div>
            <div className="flex items-center gap-4 relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">language</span>
              </div>
              <div>
                <p className="text-[15px] font-bold dark:text-white">GEO 搜索引擎优化</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Generative Engine Optimization</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary text-2xl relative">check_circle</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151B28] opacity-60">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-2xl">format_quote</span>
              </div>
              <div>
                <p className="text-[15px] font-bold dark:text-white">LLM 模型引用增强</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Model Citation & Attribution</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-700"></div>
          </div>
        </div>

        <div className="h-1.5 bg-slate-100 dark:bg-slate-900/50 my-6 rounded-full"></div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900 dark:text-white text-base font-bold">工程指标提示</h3>
          <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Live Analysis</span>
        </div>
        
        <div className="bg-white dark:bg-[#151B28] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-end mb-2.5">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">模型提取潜力</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tight">Model Extraction Potential</span>
                </div>
                <span className="text-sm font-bold text-primary">87.4%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800/50 h-2.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[87.4%] rounded-full shadow-[0_0_8px_rgba(19,91,236,0.5)]"></div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">BERT-Based Engineering Score</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">settings_input_component</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-white/90 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50">
        <button 
          onClick={() => onNavigate(Screen.Context)}
          className="w-full h-[54px] bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.97] transition-all shadow-xl shadow-primary/20"
        >
          <span className="text-[16px]">应用工程配置</span>
          <span className="material-symbols-outlined text-xl">bolt</span>
        </button>
        <div className="mt-3 flex justify-center">
          <div className="w-32 h-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
