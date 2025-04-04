"use client";

import { useState } from "react";
import { X, Copy, Download } from "lucide-react";
import { AboutSection } from "../types/about";
import { SkillsSection } from "../types/skills";
import { SocialsSection } from "../types/socials";
import { AddOnsSection } from "../types/addons";

interface ReadmeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  aboutData: AboutSection;
  skillsData: SkillsSection;
  socialsData: SocialsSection;
  addOnsData: AddOnsSection;
}

export default function ReadmeSheet({
  isOpen,
  onClose,
  aboutData,
  skillsData,
  socialsData,
  addOnsData,
}: ReadmeSheetProps) {
  const [copied, setCopied] = useState(false);

  const generateReadme = () => {
    let readme = "";

    // Title and subtitle with HTML alignment
    if (aboutData.title) {
      readme += `<h1 align="center">${aboutData.title}</h1>\n\n`;
    }
    if (aboutData.subtitle) {
      readme += `<h3 align="center">${aboutData.subtitle}</h3>\n\n`;
    }

    // About section
    if (aboutData.about) {
      readme += `## About Me\n\n${aboutData.about}\n\n`;
    }

    // Work projects
    if (aboutData.workProjects.length > 0) {
      readme += `## Work Projects\n\n`;
      aboutData.workProjects.forEach((project) => {
        readme += `- [${project.name}](${project.link})\n`;
      });
      readme += "\n";
    }

    // Collaboration projects
    if (aboutData.collaborationProjects.length > 0) {
      readme += `## Collaboration Projects\n\n`;
      aboutData.collaborationProjects.forEach((project) => {
        readme += `- [${project.name}](${project.link})\n`;
      });
      readme += "\n";
    }

    // Help projects
    if (aboutData.helpProjects.length > 0) {
      readme += `## Help Projects\n\n`;
      aboutData.helpProjects.forEach((project) => {
        readme += `- [${project.name}](${project.link})\n`;
      });
      readme += "\n";
    }

    // Skills section
    if (skillsData.categories.length > 0) {
      readme += `## Skills\n\n`;
      skillsData.categories.forEach((category) => {
        if (category.skills.some((skill) => skill.selected)) {
          readme += `### ${category.name}\n\n`;
          category.skills
            .filter((skill) => skill.selected)
            .forEach((skill) => {
              readme += `- ${skill.name}\n`;
            });
          readme += "\n";
        }
      });
    }

    // Socials section
    if (socialsData.socials.length > 0) {
      readme += `## Connect With Me\n\n`;
      socialsData.socials
        .filter((social) => social.selected)
        .forEach((social) => {
          readme += `- [${social.platform}](${social.url})\n`;
        });
      readme += "\n";
    }

    // Badges
    if (addOnsData.badges.length > 0) {
      readme += `## Badges\n\n`;
      addOnsData.badges
        .filter((badge) => badge.selected)
        .forEach((badge) => {
          readme += `![${badge.name}](${badge.url})\n`;
        });
      readme += "\n";
    }

    // GitHub stats
    if (addOnsData.showProfileViews) {
      readme += `![Profile Views](https://komarev.com/ghpvc/?username=YOUR_USERNAME&style=flat-square)\n\n`;
    }

    if (addOnsData.showStreak) {
      readme += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&theme=dark)\n\n`;
    }

    if (addOnsData.showTopLanguages) {
      readme += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=dark)\n\n`;
    }

    if (addOnsData.showContributions) {
      readme += `![GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=YOUR_USERNAME&theme=github)\n\n`;
    }

    // Statistics
    if (addOnsData.stats.length > 0) {
      readme += `## Statistics\n\n`;
      addOnsData.stats
        .filter((stat) => stat.selected)
        .forEach((stat) => {
          readme += `${stat.value}\n`;
        });
      readme += "\n";
    }

    // Quotes
    if (addOnsData.quotes.length > 0) {
      readme += `## Quotes\n\n`;
      addOnsData.quotes
        .filter((quote) => quote.selected)
        .forEach((quote) => {
          readme += `> "${quote.text}"\n> > — ${quote.author}\n\n`;
        });
    }

    return readme;
  };

  const handleCopy = async () => {
    const readme = generateReadme();
    await navigator.clipboard.writeText(readme);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const readme = generateReadme();
    const blob = new Blob([readme], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-end z-50">
      <div className="bg-white w-full max-w-4xl h-full overflow-y-auto p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Your README</h2>
          <p className="text-gray-600">
            Preview and download your generated README file
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Copy size={20} />
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Download size={20} />
            Download README.md
          </button>
        </div>

        {/* Preview */}
        <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
          <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
            {generateReadme()}
          </pre>
        </div>
      </div>
    </div>
  );
}
