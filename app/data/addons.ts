import { Badge, Stat, Quote } from "../types/addons";

// Predefined badges
export const initialBadges: Badge[] = [
  // GitHub badges
  {
    id: "github-stars",
    type: "github",
    name: "GitHub Stars",
    url: "https://img.shields.io/github/stars/username/repo",
    selected: false,
  },
  {
    id: "github-forks",
    type: "github",
    name: "GitHub Forks",
    url: "https://img.shields.io/github/forks/username/repo",
    selected: false,
  },
  {
    id: "github-issues",
    type: "github",
    name: "GitHub Issues",
    url: "https://img.shields.io/github/issues/username/repo",
    selected: false,
  },
  {
    id: "github-license",
    type: "github",
    name: "GitHub License",
    url: "https://img.shields.io/github/license/username/repo",
    selected: false,
  },

  // Social badges
  {
    id: "twitter",
    type: "social",
    name: "Twitter",
    url: "https://img.shields.io/twitter/follow/username?style=social",
    selected: false,
  },
  {
    id: "linkedin",
    type: "social",
    name: "LinkedIn",
    url: "https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin",
    selected: false,
  },
  {
    id: "dev-to",
    type: "social",
    name: "Dev.to",
    url: "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white",
    selected: false,
  },
  {
    id: "medium",
    type: "social",
    name: "Medium",
    url: "https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white",
    selected: false,
  },

  // Tech badges
  {
    id: "react",
    type: "tech",
    name: "React",
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    selected: false,
  },
  {
    id: "typescript",
    type: "tech",
    name: "TypeScript",
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    selected: false,
  },
  {
    id: "javascript",
    type: "tech",
    name: "JavaScript",
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    selected: false,
  },
  {
    id: "nodejs",
    type: "tech",
    name: "Node.js",
    url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    selected: false,
  },
  {
    id: "python",
    type: "tech",
    name: "Python",
    url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    selected: false,
  },
  {
    id: "swift",
    type: "tech",
    name: "Swift",
    url: "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
    selected: false,
  },
];

// Predefined stats
export const initialStats: Stat[] = [
  {
    id: "github-repos",
    type: "github",
    name: "GitHub Repositories",
    url: "https://img.shields.io/github/repo-count/username",
    selected: false,
  },
  {
    id: "github-followers",
    type: "github",
    name: "GitHub Followers",
    url: "https://img.shields.io/github/followers/username?style=social",
    selected: false,
  },
  {
    id: "github-contributions",
    type: "github",
    name: "GitHub Contributions",
    url: "https://img.shields.io/github/contributions/username/username",
    selected: false,
  },
  {
    id: "github-streak",
    type: "github",
    name: "GitHub Streak",
    url: "https://github-readme-streak-stats.herokuapp.com/?user=username&theme=default",
    selected: false,
  },
];

// Predefined quotes
export const initialQuotes: Quote[] = [
  {
    id: "quote1",
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    selected: false,
  },
  {
    id: "quote2",
    text: "Code is poetry.",
    author: "WordPress",
    selected: false,
  },
  {
    id: "quote3",
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    selected: false,
  },
  {
    id: "quote4",
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    selected: false,
  },
];
