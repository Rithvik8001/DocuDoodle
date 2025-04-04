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
export const initialCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML",
        selected: false,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        selected: false,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        selected: false,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        selected: false,
        url: "https://www.typescriptlang.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        selected: false,
        url: "https://reactjs.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Vue",
        selected: false,
        url: "https://vuejs.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Angular",
        selected: false,
        url: "https://angular.io/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Svelte",
        selected: false,
        url: "https://svelte.dev/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
      },
      {
        name: "Next.js",
        selected: false,
        url: "https://nextjs.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        selected: false,
        url: "https://tailwindcss.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Bootstrap",
        selected: false,
        url: "https://getbootstrap.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Sass",
        selected: false,
        url: "https://sass-lang.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        selected: false,
        url: "https://nodejs.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        selected: false,
        url: "https://expressjs.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "Django",
        selected: false,
        url: "https://www.djangoproject.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      },
      {
        name: "Flask",
        selected: false,
        url: "https://flask.palletsprojects.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
      {
        name: "Ruby on Rails",
        selected: false,
        url: "https://rubyonrails.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      },
      {
        name: "Laravel",
        selected: false,
        url: "https://laravel.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
      },
      {
        name: "Spring Boot",
        selected: false,
        url: "https://spring.io/projects/spring-boot",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      },
      {
        name: "ASP.NET",
        selected: false,
        url: "https://dotnet.microsoft.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "GraphQL",
        selected: false,
        url: "https://graphql.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      },
      {
        name: "RESTful APIs",
        selected: false,
        url: "https://restfulapi.net/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg",
      },
    ],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "React Native",
        selected: false,
        url: "https://reactnative.dev/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Flutter",
        selected: false,
        url: "https://flutter.dev/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      },
      {
        name: "Swift",
        selected: false,
        url: "https://developer.apple.com/swift/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      },
      {
        name: "Kotlin",
        selected: false,
        url: "https://kotlinlang.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
      },
      {
        name: "iOS Development",
        selected: false,
        url: "https://developer.apple.com/ios/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg",
      },
      {
        name: "Android Development",
        selected: false,
        url: "https://developer.android.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
      },
      {
        name: "Xamarin",
        selected: false,
        url: "https://dotnet.microsoft.com/apps/xamarin",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xamarin/xamarin-original.svg",
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "SQL",
        selected: false,
        url: "https://www.w3.org/SQL/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "MySQL",
        selected: false,
        url: "https://www.mysql.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        selected: false,
        url: "https://www.postgresql.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        selected: false,
        url: "https://www.mongodb.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        selected: false,
        url: "https://firebase.google.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Redis",
        selected: false,
        url: "https://redis.io/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "DynamoDB",
        selected: false,
        url: "https://aws.amazon.com/dynamodb/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      },
    ],
  },
  {
    name: "DevOps",
    skills: [
      {
        name: "Docker",
        selected: false,
        url: "https://www.docker.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        selected: false,
        url: "https://kubernetes.io/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "CI/CD",
        selected: false,
        url: "https://github.com/features/actions",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "AWS",
        selected: false,
        url: "https://aws.amazon.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Azure",
        selected: false,
        url: "https://azure.microsoft.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      },
      {
        name: "Google Cloud",
        selected: false,
        url: "https://cloud.google.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Terraform",
        selected: false,
        url: "https://www.terraform.io/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
      },
      {
        name: "Jenkins",
        selected: false,
        url: "https://www.jenkins.io/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Git",
        selected: false,
        url: "https://git-scm.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        selected: false,
        url: "https://github.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "GitLab",
        selected: false,
        url: "https://gitlab.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "Jira",
        selected: false,
        url: "https://www.atlassian.com/software/jira",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
      },
      {
        name: "Agile",
        selected: false,
        url: "https://www.agilealliance.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg",
      },
      {
        name: "Scrum",
        selected: false,
        url: "https://www.scrum.org/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg",
      },
      {
        name: "UI/UX Design",
        selected: false,
        url: "https://www.figma.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      },
      {
        name: "Figma",
        selected: false,
        url: "https://www.figma.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        selected: false,
        url: "https://www.adobe.com/products/xd.html",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg",
      },
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
      const skills = [
        ...category.skills,
        {
          name: "",
          selected: true,
          url: "",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/custom/custom-original.svg",
        },
      ];

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
