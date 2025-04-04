export interface Badge {
  id: string;
  type: "github" | "social" | "tech" | "custom";
  name: string;
  url: string;
  selected: boolean;
}

export interface Stat {
  id: string;
  type: "github" | "custom";
  name: string;
  value: string;
  selected: boolean;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  selected: boolean;
}

export interface AddOnsSection {
  badges: Badge[];
  stats: Stat[];
  quotes: Quote[];
  showProfileViews: boolean;
  showStreak: boolean;
  showTopLanguages: boolean;
  showContributions: boolean;
}
