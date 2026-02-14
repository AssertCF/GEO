import React from 'react';
import { Screen, NavItem } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems: NavItem[] = [
  { id: Screen.Dashboard, icon: 'dashboard', label: '仪表盘' },
  { id: Screen.Projects, icon: 'assignment', label: '项目管理' },
  { id: Screen.Keywords, icon: 'auto_awesome', label: '生成', isSpecial: true }, // Entry point to creation flow
  { id: Screen.Preview, icon: 'fact_check', label: '校验' },
  { id: Screen.Assets, icon: 'settings', label: '设置' }, // Mapping Assets to Settings/My slot for now
];

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-dark/90 backdrop-blur-2xl border-t border-slate-800/60 flex justify-around items-end pt-2 pb-[calc(env(safe-area-inset-bottom)+16px)] z-40">
      {navItems.map((item) => {
        const isActive = currentScreen === item.id || 
          (item.id === Screen.Keywords && [Screen.Context, Screen.ProblemTree, Screen.Execution].includes(currentScreen));
        
        if (item.isSpecial) {
          return (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 w-1/5 text-slate-500"
            >
              <div className={`relative -mt-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-background-dark transition-all ${isActive ? 'bg-primary shadow-primary/30' : 'bg-slate-700'}`}>
                <span className="material-symbols-outlined text-white text-2xl">auto_awesome</span>
              </div>
              <span className={`text-[10px] font-medium mt-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>{item.label}</span>
            </button>
          );
        }

        return (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-1 w-1/5 transition-colors ${isActive ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
