"use client";

import { useState, useEffect } from "react";
import { X, Copy, Download, Check } from "lucide-react";
import { AboutSection as AboutSectionType } from "../types/about";
import { SkillsSection as SkillsSectionType } from "../types/skills";
import { SocialsSection as SocialsSectionType } from "../types/socials";
import { AddOnsSection as AddOnsSectionType } from "../types/addons";

interface ReadmeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  aboutData: AboutSectionType;
  skillsData: SkillsSectionType;
  socialsData: SocialsSectionType;
  addOnsData: AddOnsSectionType;
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
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      generateReadme();
    }
  }, [isOpen, aboutData, skillsData, socialsData, addOnsData]);

  const generateReadme = () => {
    let content = "";

    // Add title and subtitle
    content += `# ${aboutData.title}\n\n`;
    content += `${aboutData.subtitle}\n\n`;

    // Add about section
    content += `## About Me\n\n`;
    content += `${aboutData.about}\n\n`;

    // Add work projects
    if (aboutData.workProjects.length > 0) {
      content += `## Work Projects\n\n`;
      aboutData.workProjects.forEach((project) => {
        content += `- [${project.name}](${project.link})\n`;
      });
      content += "\n";
    }

    // Add collaboration projects
    if (aboutData.collaborationProjects.length > 0) {
      content += `## Collaboration Projects\n\n`;
      aboutData.collaborationProjects.forEach((project) => {
        content += `- [${project.name}](${project.link})\n`;
      });
      content += "\n";
    }

    // Add help projects
    if (aboutData.helpProjects.length > 0) {
      content += `## Projects I've Helped With\n\n`;
      aboutData.helpProjects.forEach((project) => {
        content += `- [${project.name}](${project.link})\n`;
      });
      content += "\n";
    }

    // Add skills
    if (
      skillsData.categories.some((category) =>
        category.skills.some((skill) => skill.selected)
      )
    ) {
      content += `## Skills\n\n`;
      skillsData.categories.forEach((category) => {
        const selectedSkills = category.skills.filter(
          (skill) => skill.selected
        );
        if (selectedSkills.length > 0) {
          content += `### ${category.name}\n\n`;
          selectedSkills.forEach((skill) => {
            content += `- ${skill.name}\n`;
          });
          content += "\n";
        }
      });
    }

    // Add socials
    const selectedSocials = socialsData.socials.filter(
      (social) => social.selected
    );
    if (selectedSocials.length > 0) {
      content += `## Connect With Me\n\n`;
      selectedSocials.forEach((social) => {
        if (social.username) {
          content += `- [${social.platform}](${social.url})\n`;
        }
      });
      content += "\n";
    }

    // Add badges
    const selectedBadges = addOnsData.badges.filter((badge) => badge.selected);
    if (selectedBadges.length > 0) {
      content += `## Badges\n\n`;
      selectedBadges.forEach((badge) => {
        content += `![${badge.name}](${badge.url})\n`;
      });
      content += "\n";
    }

    // Add GitHub stats
    if (addOnsData.showProfileViews) {
      content += `![Profile Views](https://komarev.com/ghpvc/?username=yourusername&color=blueviolet)\n\n`;
    }

    if (addOnsData.showStreak) {
      content += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=radical)\n\n`;
    }

    if (addOnsData.showTopLanguages) {
      content += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=radical)\n\n`;
    }

    if (addOnsData.showContributions) {
      content += `![Contributions](https://github-readme-activity-graph.vercel.app/graph?username=yourusername&theme=radical)\n\n`;
    }

    // Add stats
    const selectedStats = addOnsData.stats.filter((stat) => stat.selected);
    if (selectedStats.length > 0) {
      content += `## Statistics\n\n`;
      selectedStats.forEach((stat) => {
        content += `- ${stat.name}: ${stat.value}\n`;
      });
      content += "\n";
    }

    // Add quotes
    const selectedQuotes = addOnsData.quotes.filter((quote) => quote.selected);
    if (selectedQuotes.length > 0) {
      content += `## Quotes\n\n`;
      selectedQuotes.forEach((quote) => {
        content += `> "${quote.text}" - ${quote.author}\n\n`;
      });
    }

    setReadmeContent(content);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadReadme = () => {
    const blob = new Blob([readmeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-3/4 lg:w-1/2 bg-white shadow-[-8px_0_0_#000] border-l-4 border-black transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b-2 border-black">
          <h2 className="text-xl font-bold">Generated README</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-lg border border-gray-200">
              {readmeContent}
            </pre>
          </div>
        </div>

        <div className="p-4 border-t-2 border-black flex justify-between">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button
            onClick={downloadReadme}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Download size={18} />
            Download README.md
          </button>
        </div>
      </div>
    </div>
  );
}
