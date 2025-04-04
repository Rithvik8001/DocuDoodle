"use client";

import { useState } from "react";
import {
  AddOnsSection as AddOnsSectionType,
  Badge,
  Stat,
  Quote,
} from "../types/addons";
import {
  Check,
  X,
  Plus,
  Image,
  Link,
  Star,
  Activity,
  Code,
  MessageSquare,
  Eye,
  Flame,
  Languages,
  GitBranch,
  Trash2,
  Edit2,
  Save,
  Award,
  Heart,
  Quote as QuoteIcon,
} from "lucide-react";

// Predefined badges
const initialBadges: Badge[] = [
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
const initialStats: Stat[] = [
  {
    id: "github-repos",
    type: "github",
    name: "GitHub Repositories",
    value:
      "![GitHub Repositories](https://img.shields.io/github/repo-count/username)",
    selected: false,
  },
  {
    id: "github-followers",
    type: "github",
    name: "GitHub Followers",
    value:
      "![GitHub Followers](https://img.shields.io/github/followers/username?style=social)",
    selected: false,
  },
  {
    id: "github-contributions",
    type: "github",
    name: "GitHub Contributions",
    value:
      "![GitHub Contributions](https://img.shields.io/github/contributions/username/username)",
    selected: false,
  },
  {
    id: "github-streak",
    type: "github",
    name: "GitHub Streak",
    value:
      "![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=username&theme=default)",
    selected: false,
  },
];

// Predefined quotes
const initialQuotes: Quote[] = [
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

export default function AddOnsSection() {
  const [addOnsData, setAddOnsData] = useState<AddOnsSectionType>({
    badges: initialBadges,
    stats: initialStats,
    quotes: initialQuotes,
    showProfileViews: false,
    showStreak: false,
    showTopLanguages: false,
    showContributions: false,
  });

  const [customBadge, setCustomBadge] = useState<Badge>({
    id: "",
    type: "custom",
    name: "",
    url: "",
    selected: false,
  });

  const [customStat, setCustomStat] = useState<Stat>({
    id: "",
    type: "custom",
    name: "",
    value: "",
    selected: false,
  });

  const [customQuote, setCustomQuote] = useState<Quote>({
    id: "",
    text: "",
    author: "",
    selected: false,
  });

  const toggleBadge = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      badges: prev.badges.map((badge) =>
        badge.id === id ? { ...badge, selected: !badge.selected } : badge
      ),
    }));
  };

  const toggleStat = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      stats: prev.stats.map((stat) =>
        stat.id === id ? { ...stat, selected: !stat.selected } : stat
      ),
    }));
  };

  const toggleQuote = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      quotes: prev.quotes.map((quote) =>
        quote.id === id ? { ...quote, selected: !quote.selected } : quote
      ),
    }));
  };

  const toggleFeature = (
    feature:
      | "showProfileViews"
      | "showStreak"
      | "showTopLanguages"
      | "showContributions"
  ) => {
    setAddOnsData((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const addCustomBadge = () => {
    if (customBadge.name && customBadge.url) {
      const newBadge = {
        ...customBadge,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      setAddOnsData((prev) => ({
        ...prev,
        badges: [...prev.badges, newBadge],
      }));

      setCustomBadge({
        id: "",
        type: "custom",
        name: "",
        url: "",
        selected: false,
      });
    }
  };

  const addCustomStat = () => {
    if (customStat.name && customStat.value) {
      const newStat = {
        ...customStat,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      setAddOnsData((prev) => ({
        ...prev,
        stats: [...prev.stats, newStat],
      }));

      setCustomStat({
        id: "",
        type: "custom",
        name: "",
        value: "",
        selected: false,
      });
    }
  };

  const addCustomQuote = () => {
    if (customQuote.text && customQuote.author) {
      const newQuote = {
        ...customQuote,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      setAddOnsData((prev) => ({
        ...prev,
        quotes: [...prev.quotes, newQuote],
      }));

      setCustomQuote({
        id: "",
        text: "",
        author: "",
        selected: false,
      });
    }
  };

  const removeBadge = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      badges: prev.badges.filter((badge) => badge.id !== id),
    }));
  };

  const removeStat = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      stats: prev.stats.filter((stat) => stat.id !== id),
    }));
  };

  const removeQuote = (id: string) => {
    setAddOnsData((prev) => ({
      ...prev,
      quotes: prev.quotes.filter((quote) => quote.id !== id),
    }));
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Code size={18} />;
      case "social":
        return <Link size={18} />;
      case "tech":
        return <Award size={18} />;
      default:
        return <Star size={18} />;
    }
  };

  const getStatIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Code size={18} />;
      default:
        return <Award size={18} />;
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-4 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBpZD0iYiIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Add-ons
          </label>
          <p className="text-gray-600 mb-4">
            Enhance your README with badges, statistics, quotes, and other
            visual elements.
          </p>
        </div>

        {/* GitHub Features */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-6"></div>

          <h3 className="text-xl font-bold mb-4 text-black">GitHub Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => toggleFeature("showProfileViews")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                addOnsData.showProfileViews
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Eye
                size={20}
                className={
                  addOnsData.showProfileViews ? "text-black" : "text-gray-600"
                }
              />
              <span>Profile Views Counter</span>
              {addOnsData.showProfileViews ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showStreak")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                addOnsData.showStreak
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Flame
                size={20}
                className={
                  addOnsData.showStreak ? "text-black" : "text-gray-600"
                }
              />
              <span>GitHub Streak</span>
              {addOnsData.showStreak ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showTopLanguages")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                addOnsData.showTopLanguages
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Languages
                size={20}
                className={
                  addOnsData.showTopLanguages ? "text-black" : "text-gray-600"
                }
              />
              <span>Top Languages</span>
              {addOnsData.showTopLanguages ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showContributions")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                addOnsData.showContributions
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <GitBranch
                size={20}
                className={
                  addOnsData.showContributions ? "text-black" : "text-gray-600"
                }
              />
              <span>Contribution Graph</span>
              {addOnsData.showContributions ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-6"></div>

          <h3 className="text-xl font-bold mb-4 text-black">Badges</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {addOnsData.badges.map((badge) => (
              <div key={badge.id} className="relative group">
                <button
                  onClick={() => toggleBadge(badge.id)}
                  className={`w-full p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                    badge.selected
                      ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                      : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
                  } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
                >
                  {getBadgeIcon(badge.type)}
                  <span>{badge.name}</span>

                  {badge.selected ? (
                    <Check size={16} className="ml-auto text-black" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
                  )}
                </button>

                {badge.type === "custom" && (
                  <button
                    onClick={() => removeBadge(badge.id)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="border-t-2 border-dashed border-gray-300 pt-4">
            <h4 className="font-semibold mb-3 text-black">Add Custom Badge</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                value={customBadge.name}
                onChange={(e) =>
                  setCustomBadge((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Badge Name"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
              <input
                type="text"
                value={customBadge.url}
                onChange={(e) =>
                  setCustomBadge((prev) => ({ ...prev, url: e.target.value }))
                }
                placeholder="Badge URL"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
            </div>
            <button
              onClick={addCustomBadge}
              className="bg-red-400 text-black border-2 border-black py-2 px-4 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2 text-sm"
            >
              <Plus size={16} />
              Add Badge
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>

          <h3 className="text-xl font-bold mb-4 text-black">Statistics</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {addOnsData.stats.map((stat) => (
              <div key={stat.id} className="relative group">
                <button
                  onClick={() => toggleStat(stat.id)}
                  className={`w-full p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                    stat.selected
                      ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                      : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
                  } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
                >
                  {getStatIcon(stat.type)}
                  <span>{stat.name}</span>

                  {stat.selected ? (
                    <Check size={16} className="ml-auto text-black" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
                  )}
                </button>

                {stat.type === "custom" && (
                  <button
                    onClick={() => removeStat(stat.id)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="border-t-2 border-dashed border-gray-300 pt-4">
            <h4 className="font-semibold mb-3 text-black">Add Custom Stat</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                value={customStat.name}
                onChange={(e) =>
                  setCustomStat((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Stat Name"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
              <input
                type="text"
                value={customStat.value}
                onChange={(e) =>
                  setCustomStat((prev) => ({ ...prev, value: e.target.value }))
                }
                placeholder="Stat Value (Markdown)"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
            </div>
            <button
              onClick={addCustomStat}
              className="bg-red-400 text-black border-2 border-black py-2 px-4 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2 text-sm"
            >
              <Plus size={16} />
              Add Stat
            </button>
          </div>
        </div>

        {/* Quotes */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-3"></div>

          <h3 className="text-xl font-bold mb-4 text-black">Quotes</h3>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {addOnsData.quotes.map((quote) => (
              <div key={quote.id} className="relative group">
                <button
                  onClick={() => toggleQuote(quote.id)}
                  className={`w-full p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                    quote.selected
                      ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                      : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
                  } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
                >
                  <QuoteIcon
                    size={18}
                    className={quote.selected ? "text-black" : "text-gray-600"}
                  />
                  <div className="flex flex-col items-start">
                    <span className="italic">"{quote.text}"</span>
                    <span className="text-sm">- {quote.author}</span>
                  </div>

                  {quote.selected ? (
                    <Check size={16} className="ml-auto text-black" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
                  )}
                </button>

                {quote.id.startsWith("custom-") && (
                  <button
                    onClick={() => removeQuote(quote.id)}
                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full p-1 border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="border-t-2 border-dashed border-gray-300 pt-4">
            <h4 className="font-semibold mb-3 text-black">Add Custom Quote</h4>
            <div className="grid grid-cols-1 gap-3 mb-3">
              <input
                type="text"
                value={customQuote.text}
                onChange={(e) =>
                  setCustomQuote((prev) => ({ ...prev, text: e.target.value }))
                }
                placeholder="Quote Text"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
              <input
                type="text"
                value={customQuote.author}
                onChange={(e) =>
                  setCustomQuote((prev) => ({
                    ...prev,
                    author: e.target.value,
                  }))
                }
                placeholder="Quote Author"
                className="p-2 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-400 text-black"
              />
            </div>
            <button
              onClick={addCustomQuote}
              className="bg-red-400 text-black border-2 border-black py-2 px-4 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2 text-sm"
            >
              <Plus size={16} />
              Add Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
