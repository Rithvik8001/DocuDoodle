export interface Project {
  name: string;
  link: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  about: string;
  workProjects: Project[];
  collaborationProjects: Project[];
  helpProjects: Project[];
  learning: string;
  expertise: string[];
  contact: string;
  portfolio: string;
  blog: string;
  resume: string;
  funFact: string;
}

export interface AboutSectionProps {
  onDataChange: (data: AboutSection) => void;
}
