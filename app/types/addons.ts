export interface Badge {
  id: string;
  type: "github" | "social" | "tech";
  name: string;
  url: string;
  selected: boolean;
}

export interface Stat {
  id: string;
  type: "github";
  name: string;
  url: string;
  selected: boolean;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  selected: boolean;
}

export interface GitHubStats {
  selected: boolean;
  username: string;
  theme: string;
}

export interface AddOnsSectionType {
  badges: Badge[];
  statistics: Stat[];
  quotes: Quote[];
  githubStats: GitHubStats;
}

export interface AddOnsSection {
  badges: Badge[];
  statistics: Stat[];
  quotes: Quote[];
  githubStats: GitHubStats;
  showProfileViews: boolean;
  showStreak: boolean;
  showTopLanguages: boolean;
  showContributions: boolean;
}

export interface AddOnsSectionProps {
  onDataChange: (data: AddOnsSection) => void;
}
