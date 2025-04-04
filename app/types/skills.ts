export interface Skill {
  name: string;
  selected: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsSection {
  categories: SkillCategory[];
}
