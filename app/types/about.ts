export interface AboutSection {
  title: string;
  subtitle: string;
  work: {
    projectName: string;
    projectLink: string;
  }[];
  collaboration: {
    projectName: string;
    projectLink: string;
  }[];
  help: {
    projectName: string;
    projectLink: string;
  }[];
  learning: string;
  expertise: string[];
  contact: string;
  portfolio: string;
  blog: string;
  resume: string;
  funFact: string;
}
