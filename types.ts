export enum Screen {
  Dashboard = 'Dashboard',
  Projects = 'Projects',
  Keywords = 'Keywords',
  Context = 'Context',
  ProblemTree = 'ProblemTree',
  Execution = 'Execution',
  Preview = 'Preview',
  Assets = 'Assets'
}

export interface NavItem {
  id: Screen;
  icon: string;
  label: string;
  isSpecial?: boolean;
}

export interface Project {
  id: string;
  title: string;
  status: 'running' | 'completed' | 'draft' | 'audited';
  topic: string;
  creator: string;
  creatorInitial: string;
  creatorColor: string;
  progress?: number;
}
