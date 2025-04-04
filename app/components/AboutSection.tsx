"use client";

import { useState } from "react";
import { AboutSection as AboutSectionType } from "../types/about";
import { Github, Mail, Globe, FileText, Lightbulb } from "lucide-react";

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

  const handleInputChange = (field: keyof AboutSectionType, value: any) => {
    setAboutData((prev) => ({ ...prev, [field]: value }));
  };

  const addProject = (field: "work" | "collaboration" | "help") => {
    setAboutData((prev) => ({
      ...prev,
      [field]: [...prev[field], { projectName: "", projectLink: "" }],
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
    <div className="p-8 bg-gray-50 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-auto max-w-3xl">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold text-black uppercase tracking-tight mb-4 text-shadow-sm">
          About Section
        </h2>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">Title</label>
          <input
            type="text"
            value={aboutData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Hi ��, I'm [Your Name]"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            Subtitle
          </label>
          <input
            type="text"
            value={aboutData.subtitle}
            onChange={(e) => handleInputChange("subtitle", e.target.value)}
            placeholder="Junior IOS Engineer | Frontend Enthusiast"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000]">
          <h3 className="text-xl font-bold mb-4 text-black">🔭 Work</h3>
          {aboutData.work.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            >
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  updateProject("work", index, "projectName", e.target.value)
                }
                placeholder="Project Name"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
              <input
                type="text"
                value={project.projectLink}
                onChange={(e) =>
                  updateProject("work", index, "projectLink", e.target.value)
                }
                placeholder="Project Link"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
            </div>
          ))}
          <button
            onClick={() => addProject("work")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000]"
          >
            Add Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000]">
          <h3 className="text-xl font-bold mb-4 text-black">
            👯 Collaboration
          </h3>
          {aboutData.collaboration.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
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
                placeholder="Project Name"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
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
                placeholder="Project Link"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
            </div>
          ))}
          <button
            onClick={() => addProject("collaboration")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000]"
          >
            Add Project
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000]">
          <h3 className="text-xl font-bold mb-4 text-black">
            🤝 Looking for Help
          </h3>
          {aboutData.help.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            >
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  updateProject("help", index, "projectName", e.target.value)
                }
                placeholder="Project Name"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
              <input
                type="text"
                value={project.projectLink}
                onChange={(e) =>
                  updateProject("help", index, "projectLink", e.target.value)
                }
                placeholder="Project Link"
                className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
              />
            </div>
          ))}
          <button
            onClick={() => addProject("help")}
            className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000]"
          >
            Add Project
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            🌱 Currently Learning
          </label>
          <input
            type="text"
            value={aboutData.learning}
            onChange={(e) => handleInputChange("learning", e.target.value)}
            placeholder="I am currently diving deep into..."
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            💬 Expertise
          </label>
          <input
            type="text"
            value={aboutData.expertise.join(", ")}
            onChange={(e) =>
              handleInputChange(
                "expertise",
                e.target.value.split(",").map((item) => item.trim())
              )
            }
            placeholder="React, Javascript, Swift, SwiftUI"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            📫 Contact
          </label>
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
          <label className="font-semibold text-lg text-gray-800">
            👨‍💻 Portfolio
          </label>
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
          <label className="font-semibold text-lg text-gray-800">📝 Blog</label>
          <input
            type="url"
            value={aboutData.blog}
            onChange={(e) => handleInputChange("blog", e.target.value)}
            placeholder="https://your-blog.com"
            className="p-3 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            📄 Resume
          </label>
          <div className="relative flex items-center">
            <FileText size={20} className="absolute left-4 text-gray-600" />
            <input
              type="url"
              value={aboutData.resume}
              onChange={(e) => handleInputChange("resume", e.target.value)}
              placeholder="https://your-resume.com"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800">
            ⚡ Fun Fact
          </label>
          <div className="relative flex items-center">
            <Lightbulb size={20} className="absolute left-4 text-gray-600" />
            <input
              type="text"
              value={aboutData.funFact}
              onChange={(e) => handleInputChange("funFact", e.target.value)}
              placeholder="Share something interesting about yourself"
              className="p-3 pl-12 border-2 border-black rounded-lg text-base bg-white shadow-[4px_4px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0_#000] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
