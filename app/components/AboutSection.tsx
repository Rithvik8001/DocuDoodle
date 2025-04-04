"use client";

import { useState } from "react";
import {
  AboutSection as AboutSectionType,
  AboutSectionProps,
  Project,
} from "../types/about";
import {
  Github,
  Mail,
  Globe,
  FileText,
  Lightbulb,
  Plus,
  Trash2,
} from "lucide-react";

export default function AboutSection({ onDataChange }: AboutSectionProps) {
  const [data, setData] = useState<AboutSectionType>({
    title: "",
    subtitle: "",
    about: "",
    workProjects: [],
    collaborationProjects: [],
    helpProjects: [],
    learning: "",
    expertise: [],
    contact: "",
    portfolio: "",
    blog: "",
    resume: "",
    funFact: "",
  });

  const [sectionHeadings, setSectionHeadings] = useState({
    work: "🔭 Work",
    collaboration: "👯 Collaboration",
    help: "🤝 Looking for Help",
    learning: "🌱 Learning",
    expertise: "💡 Expertise",
    contact: "📫 Contact",
    portfolio: "🌐 Portfolio",
    blog: "📝 Blog",
    resume: "📄 Resume",
    funFact: "🎯 Fun Fact",
  });

  const handleDataChange = (newData: Partial<AboutSectionType>) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);
    onDataChange(updatedData);
  };

  const handleHeadingChange = (
    section: keyof typeof sectionHeadings,
    value: string
  ) => {
    setSectionHeadings((prev) => ({ ...prev, [section]: value }));
  };

  const addProject = (
    field: "workProjects" | "collaborationProjects" | "helpProjects"
  ) => {
    const newProject: Project = { name: "", link: "" };
    setData((prev) => ({
      ...prev,
      [field]: [...prev[field], newProject],
    }));
  };

  const removeProject = (
    field: "workProjects" | "collaborationProjects" | "helpProjects",
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const updateProject = (
    field: "workProjects" | "collaborationProjects" | "helpProjects",
    index: number,
    key: keyof Project,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-4 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBpZD0iYiIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Title
          </label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleDataChange({ title: e.target.value })}
            placeholder="Hi 👋, I'm [Your Name]"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] placeholder:text-gray-400 text-black"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Subtitle
          </label>
          <input
            type="text"
            value={data.subtitle}
            onChange={(e) => handleDataChange({ subtitle: e.target.value })}
            placeholder="Junior IOS Engineer | Frontend Enthusiast"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] placeholder:text-gray-400 text-black"
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
          {data.workProjects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject("workProjects", index, "name", e.target.value)
                }
                placeholder="Project Name (e.g., My Awesome App)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] placeholder:text-gray-400 text-black"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) =>
                    updateProject("workProjects", index, "link", e.target.value)
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
                />
                {data.workProjects.length > 1 && (
                  <button
                    onClick={() => removeProject("workProjects", index)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("workProjects")}
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
          {data.collaborationProjects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject(
                    "collaborationProjects",
                    index,
                    "name",
                    e.target.value
                  )
                }
                placeholder="Project Name (e.g., Open Source Library)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] placeholder:text-gray-400 text-black"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) =>
                    updateProject(
                      "collaborationProjects",
                      index,
                      "link",
                      e.target.value
                    )
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
                />
                {data.collaborationProjects.length > 1 && (
                  <button
                    onClick={() =>
                      removeProject("collaborationProjects", index)
                    }
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("collaborationProjects")}
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
          {data.helpProjects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative group"
            >
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject("helpProjects", index, "name", e.target.value)
                }
                placeholder="Project Name (e.g., Mobile App Development)"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] placeholder:text-gray-400 text-black"
              />
              <div className="relative">
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) =>
                    updateProject("helpProjects", index, "link", e.target.value)
                  }
                  placeholder="Project Link (e.g., https://github.com/username/project)"
                  className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
                />
                {data.helpProjects.length > 1 && (
                  <button
                    onClick={() => removeProject("helpProjects", index)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={() => addProject("helpProjects")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.learning}
            onChange={(e) => handleHeadingChange("learning", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🌱 Learning"
          />
          <input
            type="text"
            value={data.learning}
            onChange={(e) => handleDataChange({ learning: e.target.value })}
            placeholder="I am currently diving deep into iOS Development, SwiftUI, and React Native"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.expertise}
            onChange={(e) => handleHeadingChange("expertise", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="💡 Expertise"
          />
          <input
            type="text"
            value={data.expertise.join(", ")}
            onChange={(e) =>
              handleDataChange({
                expertise: e.target.value.split(",").map((item) => item.trim()),
              })
            }
            placeholder="React, Javascript, Swift, SwiftUI, Node.js, TypeScript"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-pink-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.contact}
            onChange={(e) => handleHeadingChange("contact", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📫 Contact"
          />
          <div className="relative flex items-center">
            <Mail size={20} className="absolute left-4 text-gray-600" />
            <input
              type="email"
              value={data.contact}
              onChange={(e) => handleDataChange({ contact: e.target.value })}
              placeholder="your.email@example.com"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-teal-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.portfolio}
            onChange={(e) => handleHeadingChange("portfolio", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🌐 Portfolio"
          />
          <div className="relative flex items-center">
            <Globe size={20} className="absolute left-4 text-gray-600" />
            <input
              type="url"
              value={data.portfolio}
              onChange={(e) => handleDataChange({ portfolio: e.target.value })}
              placeholder="https://your-portfolio.com"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.blog}
            onChange={(e) => handleHeadingChange("blog", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📝 Blog"
          />
          <input
            type="url"
            value={data.blog}
            onChange={(e) => handleDataChange({ blog: e.target.value })}
            placeholder="https://your-blog.com or https://medium.com/@yourusername"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.resume}
            onChange={(e) => handleHeadingChange("resume", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="📄 Resume"
          />
          <div className="relative flex items-center">
            <FileText size={20} className="absolute left-4 text-gray-600" />
            <input
              type="url"
              value={data.resume}
              onChange={(e) => handleDataChange({ resume: e.target.value })}
              placeholder="https://your-resume.com or link to your LinkedIn profile"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>
          <input
            type="text"
            value={sectionHeadings.funFact}
            onChange={(e) => handleHeadingChange("funFact", e.target.value)}
            className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
            placeholder="🎯 Fun Fact"
          />
          <div className="relative flex items-center">
            <Lightbulb size={20} className="absolute left-4 text-gray-600" />
            <input
              type="text"
              value={data.funFact}
              onChange={(e) => handleDataChange({ funFact: e.target.value })}
              placeholder="Share something interesting about yourself (e.g., I can solve a Rubik's cube in under 30 seconds)"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full placeholder:text-gray-400 text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
