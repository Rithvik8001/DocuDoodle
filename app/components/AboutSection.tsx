"use client";

import { useState } from "react";
import { AboutSection as AboutSectionType } from "../types/about";
import {
  Github,
  Mail,
  Globe,
  FileText,
  Lightbulb,
  Plus,
  Trash2,
} from "lucide-react";

export default function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutSectionType>({
    title: "",
    subtitle: "",
    work: [{ projectName: "", projectLink: "" }],
    collaboration: [{ projectName: "", projectLink: "" }],
    help: [{ projectName: "", projectLink: "" }],
    learning: "",
    expertise: [""],
    contact: "",
    portfolio: "",
    blog: "",
    resume: "",
    funFact: "",
  });

  const [sectionHeadings, setSectionHeadings] = useState({
    work: "🔭 Work",
    collaboration: "👯 Collaboration",
    help: "�� Looking for Help",
    learning: "🌱 Currently Learning",
    expertise: "💬 Expertise",
    contact: "📫 Contact",
    portfolio: "👨‍💻 Portfolio",
    blog: "📝 Blog",
    resume: "📄 Resume",
    funFact: "⚡ Fun Fact",
  });

  const handleInputChange = (field: keyof AboutSectionType, value: any) => {
    setAboutData((prev) => ({ ...prev, [field]: value }));
  };

  const handleHeadingChange = (section: string, value: string) => {
    setSectionHeadings((prev) => ({ ...prev, [section]: value }));
  };

  const addProject = (field: "work" | "collaboration" | "help") => {
    setAboutData((prev) => ({
      ...prev,
      [field]: [...prev[field], { projectName: "", projectLink: "" }],
    }));
  };

  const removeProject = (
    field: "work" | "collaboration" | "help",
    index: number
  ) => {
    setAboutData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const updateProject = (
    field: "work" | "collaboration" | "help",
    index: number,
    key: "projectName" | "projectLink",
    value: string
  ) => {
    setAboutData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-auto max-w-3xl relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBpZD0iYiIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="flex flex-col gap-6 relative z-10">
        <h2 className="text-3xl font-extrabold text-black uppercase tracking-tight mb-4 text-shadow-sm relative">
          About Section
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-red-400 rounded-full"></div>
        </h2>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Title
          </label>
          <input
            type="text"
            value={aboutData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Hi 👋, I'm [Your Name]"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Subtitle
          </label>
          <input
            type="text"
            value={aboutData.subtitle}
            onChange={(e) => handleInputChange("subtitle", e.target.value)}
            placeholder="Junior IOS Engineer | Frontend Enthusiast"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
            required
          />
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-6"></div>
          <input
            type="text"
            value={sectionHeadings.work}
            onChange={(e) => handleHeadingChange("work", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🔭 Work"
          />
          {aboutData.work.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  updateProject("work", index, "projectName", e.target.value)
                }
                placeholder="Project Name (e.g., My Awesome App)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.projectLink}
                  onChange={(e) =>
                    updateProject("work", index, "projectLink", e.target.value)
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
                />
                {aboutData.work.length > 1 && (
                  <button
                    onClick={() => removeProject("work", index)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("work")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-6"></div>
          <input
            type="text"
            value={sectionHeadings.collaboration}
            onChange={(e) =>
              handleHeadingChange("collaboration", e.target.value)
            }
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="👯 Collaboration"
          />
          {aboutData.collaboration.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  updateProject(
                    "collaboration",
                    index,
                    "projectName",
                    e.target.value
                  )
                }
                placeholder="Project Name (e.g., Open Source Library)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.projectLink}
                  onChange={(e) =>
                    updateProject(
                      "collaboration",
                      index,
                      "projectLink",
                      e.target.value
                    )
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
                />
                {aboutData.collaboration.length > 1 && (
                  <button
                    onClick={() => removeProject("collaboration", index)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("collaboration")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.help}
            onChange={(e) => handleHeadingChange("help", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🤝 Looking for Help"
          />
          {aboutData.help.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  updateProject("help", index, "projectName", e.target.value)
                }
                placeholder="Project Name (e.g., Mobile App Development)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.projectLink}
                  onChange={(e) =>
                    updateProject("help", index, "projectLink", e.target.value)
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
                />
                {aboutData.help.length > 1 && (
                  <button
                    onClick={() => removeProject("help", index)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("help")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.learning}
            onChange={(e) => handleHeadingChange("learning", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🌱 Currently Learning"
          />
          <input
            type="text"
            value={aboutData.learning}
            onChange={(e) => handleInputChange("learning", e.target.value)}
            placeholder="I am currently diving deep into iOS Development, SwiftUI, and React Native"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.expertise}
            onChange={(e) => handleHeadingChange("expertise", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="💬 Expertise"
          />
          <input
            type="text"
            value={aboutData.expertise.join(", ")}
            onChange={(e) =>
              handleInputChange(
                "expertise",
                e.target.value.split(",").map((item) => item.trim())
              )
            }
            placeholder="React, Javascript, Swift, SwiftUI, Node.js, TypeScript"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.contact}
            onChange={(e) => handleHeadingChange("contact", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📫 Contact"
          />
          <div className="relative flex items-center">
            <Mail size={20} className="absolute left-4 text-gray-600" />
            <input
              type="email"
              value={aboutData.contact}
              onChange={(e) => handleInputChange("contact", e.target.value)}
              placeholder="your.email@example.com"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.portfolio}
            onChange={(e) => handleHeadingChange("portfolio", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="👨‍💻 Portfolio"
          />
          <div className="relative flex items-center">
            <Globe size={20} className="absolute left-4 text-gray-600" />
            <input
              type="url"
              value={aboutData.portfolio}
              onChange={(e) => handleInputChange("portfolio", e.target.value)}
              placeholder="https://your-portfolio.com"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.blog}
            onChange={(e) => handleHeadingChange("blog", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📝 Blog"
          />
          <input
            type="url"
            value={aboutData.blog}
            onChange={(e) => handleInputChange("blog", e.target.value)}
            placeholder="https://your-blog.com or https://medium.com/@yourusername"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.resume}
            onChange={(e) => handleHeadingChange("resume", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📄 Resume"
          />
          <div className="relative flex items-center">
            <FileText size={20} className="absolute left-4 text-gray-600" />
            <input
              type="url"
              value={aboutData.resume}
              onChange={(e) => handleInputChange("resume", e.target.value)}
              placeholder="https://your-resume.com or link to your LinkedIn profile"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={sectionHeadings.funFact}
            onChange={(e) => handleHeadingChange("funFact", e.target.value)}
            className="font-semibold text-lg text-gray-800 bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="⚡ Fun Fact"
          />
          <div className="relative flex items-center">
            <Lightbulb size={20} className="absolute left-4 text-gray-600" />
            <input
              type="text"
              value={aboutData.funFact}
              onChange={(e) => handleInputChange("funFact", e.target.value)}
              placeholder="Share something interesting about yourself (e.g., I can solve a Rubik's cube in under 30 seconds)"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
