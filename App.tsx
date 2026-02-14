import React, { useState } from 'react';
import { Screen } from './types';
import { BottomNav } from './components/BottomNav';
import { Dashboard } from './screens/Dashboard';
import { ProjectList } from './screens/ProjectList';
import { Keywords } from './screens/Keywords';
import { ContextInfo } from './screens/ContextInfo';
import { ProblemTree } from './screens/ProblemTree';
import { Execution } from './screens/Execution';
import { ContentPreview } from './screens/ContentPreview';
import { AssetsLibrary } from './screens/AssetsLibrary';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Dashboard);

  // Helper to allow screens to navigate
  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    // Simple back logic based on flow
    if (currentScreen === Screen.Execution) handleNavigate(Screen.ProblemTree);
    else if (currentScreen === Screen.ProblemTree) handleNavigate(Screen.Context);
    else if (currentScreen === Screen.Context) handleNavigate(Screen.Keywords);
    else if (currentScreen === Screen.Keywords) handleNavigate(Screen.Projects);
    else if (currentScreen === Screen.Preview) handleNavigate(Screen.Execution);
    else handleNavigate(Screen.Dashboard);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Dashboard:
        return <Dashboard onNavigate={handleNavigate} />;
      case Screen.Projects:
        return <ProjectList onNavigate={handleNavigate} />;
      case Screen.Keywords:
        return <Keywords onNavigate={handleNavigate} onBack={handleBack} />;
      case Screen.Context:
        return <ContextInfo onNavigate={handleNavigate} onBack={handleBack} />;
      case Screen.ProblemTree:
        return <ProblemTree onNavigate={handleNavigate} onBack={handleBack} />;
      case Screen.Execution:
        return <Execution onNavigate={handleNavigate} onBack={handleBack} />;
      case Screen.Preview:
        return <ContentPreview onNavigate={handleNavigate} onBack={handleBack} />;
      case Screen.Assets:
        return <AssetsLibrary onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900 dark:text-slate-100 bg-background-light dark:bg-background-dark min-h-screen">
      {renderScreen()}
      {/* 
         We hide the bottom nav on full-screen editing flows to match standard mobile UX,
         but keep it on main tab views. 
      */}
      {[Screen.Dashboard, Screen.Projects, Screen.Assets].includes(currentScreen) && (
        <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;
