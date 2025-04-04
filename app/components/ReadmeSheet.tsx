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
    let content = "";

    // Title and subtitle
    content += `<h1 align="center">${aboutData.title}</h1>\n\n`;
    content += `<h3 align="center">${aboutData.subtitle}</h3>\n\n`;

    // About section
    if (aboutData.about) {
      content += `## About Me\n\n${aboutData.about}\n\n`;
    }

    // Work projects
    if (aboutData.workProjects.length > 0) {
      content += `## Work Projects\n\n`;
      aboutData.workProjects.forEach((project) => {
        content += `### ${project.name}\n\n`;
        content += `${project.description}\n\n`;
        if (project.technologies.length > 0) {
          content += `**Technologies:** ${project.technologies.join(", ")}\n\n`;
        }
        if (project.link) {
          content += `[View Project](${project.link})\n\n`;
        }
      });
    }

    // Collaboration projects
    if (aboutData.collaborationProjects.length > 0) {
      content += `## Collaboration Projects\n\n`;
      aboutData.collaborationProjects.forEach((project) => {
        content += `### ${project.name}\n\n`;
        content += `${project.description}\n\n`;
        if (project.technologies.length > 0) {
          content += `**Technologies:** ${project.technologies.join(", ")}\n\n`;
        }
        if (project.link) {
          content += `[View Project](${project.link})\n\n`;
        }
      });
    }

    // Help projects
    if (aboutData.helpProjects.length > 0) {
      content += `## Help Projects\n\n`;
      aboutData.helpProjects.forEach((project) => {
        content += `### ${project.name}\n\n`;
        content += `${project.description}\n\n`;
        if (project.technologies.length > 0) {
          content += `**Technologies:** ${project.technologies.join(", ")}\n\n`;
        }
        if (project.link) {
          content += `[View Project](${project.link})\n\n`;
        }
      });
    }

    // Skills section
    const hasSelectedSkills = skillsData.categories.some((category) =>
      category.skills.some((skill) => skill.selected)
    );
    if (hasSelectedSkills) {
      content += `## Skills\n\n`;
      skillsData.categories.forEach((category) => {
        const selectedSkills = category.skills.filter(
          (skill) => skill.selected
        );
        if (selectedSkills.length > 0) {
          content += `### ${category.name}\n\n`;
          content += `<p align="left">\n`;
          selectedSkills.forEach((skill) => {
            content += `<a href="${skill.url}" target="_blank" rel="noreferrer"><img src="${skill.icon}" alt="${skill.name}" width="40" height="40"/></a>\n`;
          });
          content += `</p>\n\n`;
        }
      });
    }

    // Social section
    const hasSocials = socialsData.socials.some((social) => social.selected);
    if (hasSocials) {
      content += `## Social\n\n`;
      content += `<p align="left">\n`;
      socialsData.socials.forEach((social) => {
        if (social.selected) {
          content += `<a href="${social.url}" target="_blank" rel="noreferrer"><img src="${social.icon}" alt="${social.platform}" width="40" height="40"/></a>\n`;
        }
      });
      content += `</p>\n\n`;
    }

    // Badges section
    const selectedBadges = addOnsData.badges.filter((badge) => badge.selected);
    if (selectedBadges.length > 0) {
      content += `## Badges\n\n`;
      content += `<p align="left">\n`;
      selectedBadges.forEach((badge) => {
        content += `<img src="${badge.url}" alt="${badge.name}" width="100" height="100"/>\n`;
      });
      content += `</p>\n\n`;
    }

    // GitHub Stats section
    if (addOnsData.githubStats.selected) {
      content += `## GitHub Stats\n\n`;
      content += `<p align="left">\n`;
      content += `<img src="https://github-readme-stats.vercel.app/api?username=${addOnsData.githubStats.username}&show_icons=true&theme=${addOnsData.githubStats.theme}" alt="GitHub Stats" />\n`;
      content += `</p>\n\n`;
    }

    // Statistics section
    const selectedStats = addOnsData.statistics.filter((stat) => stat.selected);
    if (selectedStats.length > 0) {
      content += `## Statistics\n\n`;
      content += `<p align="left">\n`;
      selectedStats.forEach((stat) => {
        content += `<img src="${stat.url}" alt="${stat.name}" width="100" height="100"/>\n`;
      });
      content += `</p>\n\n`;
    }

    // Quotes section
    const selectedQuotes = addOnsData.quotes.filter((quote) => quote.selected);
    if (selectedQuotes.length > 0) {
      content += `## Quotes\n\n`;
      selectedQuotes.forEach((quote) => {
        content += `> ${quote.text}\n\n`;
        if (quote.author) {
          content += `> — ${quote.author}\n\n`;
        }
      });
    }

    return content;
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
          className="absolute top-4 right-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-md"
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

        {/* Social Links */}
        {socialsData.socials.filter((social) => social.selected).length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Social</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {socialsData.socials
                .filter((social) => social.selected)
                .map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0_#000] transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]"
                  >
                    <img
                      src={social.icon}
                      alt={social.platform}
                      className="w-5 h-5"
                    />
                    <span className="font-medium">{social.platform}</span>
                  </a>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
