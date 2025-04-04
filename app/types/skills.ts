export interface Skill {
  name: string;
  selected: boolean;
  url: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsSection {
  categories: SkillCategory[];
}

export interface SkillsSectionProps {
  onDataChange: (data: SkillsSection) => void;
}
