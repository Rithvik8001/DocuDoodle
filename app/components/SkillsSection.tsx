"use client";

import { useState } from "react";
import {
  SkillsSection as SkillsSectionType,
  SkillCategory,
  Skill,
  SkillsSectionProps,
} from "../types/skills";
import { Check, X } from "lucide-react";

// Predefined skill categories and skills
const initialCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", selected: false },
      { name: "CSS", selected: false },
      { name: "JavaScript", selected: false },
      { name: "TypeScript", selected: false },
      { name: "React", selected: false },
      { name: "Vue", selected: false },
      { name: "Angular", selected: false },
      { name: "Svelte", selected: false },
      { name: "Next.js", selected: false },
      { name: "Tailwind CSS", selected: false },
      { name: "Bootstrap", selected: false },
      { name: "Sass", selected: false },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", selected: false },
      { name: "Express", selected: false },
      { name: "Django", selected: false },
      { name: "Flask", selected: false },
      { name: "Ruby on Rails", selected: false },
      { name: "Laravel", selected: false },
      { name: "Spring Boot", selected: false },
      { name: "ASP.NET", selected: false },
      { name: "GraphQL", selected: false },
      { name: "RESTful APIs", selected: false },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", selected: false },
      { name: "Flutter", selected: false },
      { name: "Swift", selected: false },
      { name: "Kotlin", selected: false },
      { name: "iOS Development", selected: false },
      { name: "Android Development", selected: false },
      { name: "Xamarin", selected: false },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "SQL", selected: false },
      { name: "MySQL", selected: false },
      { name: "PostgreSQL", selected: false },
      { name: "MongoDB", selected: false },
      { name: "Firebase", selected: false },
      { name: "Redis", selected: false },
      { name: "DynamoDB", selected: false },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", selected: false },
      { name: "Kubernetes", selected: false },
      { name: "CI/CD", selected: false },
      { name: "AWS", selected: false },
      { name: "Azure", selected: false },
      { name: "Google Cloud", selected: false },
      { name: "Terraform", selected: false },
      { name: "Jenkins", selected: false },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Git", selected: false },
      { name: "GitHub", selected: false },
      { name: "GitLab", selected: false },
      { name: "Jira", selected: false },
      { name: "Agile", selected: false },
      { name: "Scrum", selected: false },
      { name: "UI/UX Design", selected: false },
      { name: "Figma", selected: false },
      { name: "Adobe XD", selected: false },
    ],
  },
];

export default function SkillsSection({ onDataChange }: SkillsSectionProps) {
  const [skillsData, setSkillsData] = useState<SkillsSectionType>({
    categories: initialCategories,
  });

  const [categoryHeadings, setCategoryHeadings] = useState<
    Record<string, string>
  >({
    Frontend: "🖥️ Frontend",
    Backend: "⚙️ Backend",
    Mobile: "📱 Mobile",
    Database: "🗄️ Database",
    DevOps: "🛠️ DevOps",
    Other: "🔧 Other",
  });

  const handleHeadingChange = (category: string, value: string) => {
    setCategoryHeadings((prev) => ({ ...prev, [category]: value }));
  };

  const toggleSkill = (categoryIndex: number, skillIndex: number) => {
    setSkillsData((prev) => {
      const newCategories = [...prev.categories];
      const category = { ...newCategories[categoryIndex] };
      const skills = [...category.skills];
      const skill = { ...skills[skillIndex] };

      skill.selected = !skill.selected;
      skills[skillIndex] = skill;
      category.skills = skills;
      newCategories[categoryIndex] = category;

      return { categories: newCategories };
    });
  };

  const addCustomSkill = (categoryIndex: number) => {
    setSkillsData((prev) => {
      const newCategories = [...prev.categories];
      const category = { ...newCategories[categoryIndex] };
      const skills = [...category.skills, { name: "", selected: true }];

      category.skills = skills;
      newCategories[categoryIndex] = category;

      return { categories: newCategories };
    });
  };

  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    setSkillsData((prev) => {
      const newCategories = [...prev.categories];
      const category = { ...newCategories[categoryIndex] };
      const skills = category.skills.filter((_, i) => i !== skillIndex);

      category.skills = skills;
      newCategories[categoryIndex] = category;

      return { categories: newCategories };
    });
  };

  const updateCustomSkill = (
    categoryIndex: number,
    skillIndex: number,
    value: string
  ) => {
    setSkillsData((prev) => {
      const newCategories = [...prev.categories];
      const category = { ...newCategories[categoryIndex] };
      const skills = [...category.skills];
      const skill = { ...skills[skillIndex] };

      skill.name = value;
      skills[skillIndex] = skill;
      category.skills = skills;
      newCategories[categoryIndex] = category;

      return { categories: newCategories };
    });
  };

  const handleDataChange = (newData: Partial<SkillsSectionType>) => {
    const updatedData = { ...skillsData, ...newData };
    setSkillsData(updatedData);
    onDataChange(updatedData);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-4 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBpZD0iYiIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Skills
          </label>
          <p className="text-gray-600 mb-4">
            Select your development skills by checking the boxes below. You can
            also add custom skills to each category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative"
            >
              {/* Colored square in top right corner */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 rounded-tr-lg border-b-2 border-l-2 border-black transform ${
                  categoryIndex % 4 === 0
                    ? "bg-yellow-300 rotate-6"
                    : categoryIndex % 4 === 1
                    ? "bg-blue-300 -rotate-6"
                    : categoryIndex % 4 === 2
                    ? "bg-green-300 rotate-3"
                    : "bg-purple-300 -rotate-3"
                }`}
              ></div>

              {/* Category heading */}
              <input
                type="text"
                value={categoryHeadings[category.name] || category.name}
                onChange={(e) =>
                  handleHeadingChange(category.name, e.target.value)
                }
                className="text-xl font-bold mb-4 text-black bg-transparent border-b-2 border-dashed border-gray-300 focus:outline-none focus:border-black w-full"
                placeholder={`${category.name} Skills`}
              />

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative group">
                    {skill.name === "" ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) =>
                            updateCustomSkill(
                              categoryIndex,
                              skillIndex,
                              e.target.value
                            )
                          }
                          placeholder="Add custom skill"
                          className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
                          autoFocus
                        />
                        <button
                          onClick={() => removeSkill(categoryIndex, skillIndex)}
                          className="ml-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleSkill(categoryIndex, skillIndex)}
                        className={`w-full p-2 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center justify-between ${
                          skill.selected
                            ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                            : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
                        } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
                      >
                        <span>{skill.name}</span>
                        {skill.selected ? (
                          <Check size={16} className="text-black" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-black rounded-sm"></div>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Add custom skill button */}
              <button
                onClick={() => addCustomSkill(categoryIndex)}
                className="bg-red-400 text-black border-2 border-black py-2 px-4 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2 text-sm"
              >
                Add Custom Skill
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
