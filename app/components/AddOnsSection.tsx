"use client";

import { useState } from "react";
import {
  AddOnsSection as AddOnsSectionType,
  Badge,
  Stat,
  Quote,
  GitHubStats,
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
import { initialBadges, initialStats, initialQuotes } from "../data/addons";

interface AddOnsSectionProps {
  onDataChange: (data: AddOnsSectionType) => void;
}

export default function AddOnsSection({ onDataChange }: AddOnsSectionProps) {
  const [data, setData] = useState<AddOnsSectionType>({
    badges: initialBadges,
    statistics: initialStats,
    quotes: initialQuotes,
    githubStats: {
      selected: false,
      username: "",
      theme: "dark",
    },
    showProfileViews: false,
    showStreak: false,
    showTopLanguages: false,
    showContributions: false,
  });

  const [customBadge, setCustomBadge] = useState<Badge>({
    id: "",
    type: "github",
    name: "",
    url: "",
    selected: false,
  });

  const [customStat, setCustomStat] = useState<Stat>({
    id: "",
    type: "github",
    name: "",
    url: "",
    selected: false,
  });

  const [customQuote, setCustomQuote] = useState<Quote>({
    id: "",
    text: "",
    author: "",
    selected: false,
  });

  const handleDataChange = (newData: Partial<AddOnsSectionType>) => {
    const updatedData = { ...data, ...newData };
    setData(updatedData);
    onDataChange(updatedData);
  };

  const toggleBadge = (id: string) => {
    const updatedBadges = data.badges.map((badge) =>
      badge.id === id ? { ...badge, selected: !badge.selected } : badge
    );
    handleDataChange({ badges: updatedBadges });
  };

  const toggleStat = (id: string) => {
    const updatedStats = data.statistics.map((stat) =>
      stat.id === id ? { ...stat, selected: !stat.selected } : stat
    );
    handleDataChange({ statistics: updatedStats });
  };

  const toggleQuote = (id: string) => {
    const updatedQuotes = data.quotes.map((quote) =>
      quote.id === id ? { ...quote, selected: !quote.selected } : quote
    );
    handleDataChange({ quotes: updatedQuotes });
  };

  const toggleGitHubStats = () => {
    handleDataChange({
      githubStats: {
        ...data.githubStats,
        selected: !data.githubStats.selected,
      },
    });
  };

  const updateGitHubStats = (
    field: keyof GitHubStats,
    value: string | boolean
  ) => {
    handleDataChange({
      githubStats: {
        ...data.githubStats,
        [field]: value,
      },
    });
  };

  const toggleFeature = (
    feature:
      | "showProfileViews"
      | "showStreak"
      | "showTopLanguages"
      | "showContributions"
  ) => {
    handleDataChange({
      [feature]: !data[feature],
    });
  };

  const addCustomBadge = () => {
    if (customBadge.name && customBadge.url) {
      const newBadge = {
        ...customBadge,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      handleDataChange({
        badges: [...data.badges, newBadge],
      });

      setCustomBadge({
        id: "",
        type: "github",
        name: "",
        url: "",
        selected: false,
      });
    }
  };

  const addCustomStat = () => {
    if (customStat.name && customStat.url) {
      const newStat = {
        ...customStat,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      handleDataChange({
        statistics: [...data.statistics, newStat],
      });

      setCustomStat({
        id: "",
        type: "github",
        name: "",
        url: "",
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

      handleDataChange({
        quotes: [...data.quotes, newQuote],
      });

      setCustomQuote({
        id: "",
        text: "",
        author: "",
        selected: false,
      });
    }
  };

  const removeBadge = (id: string) => {
    handleDataChange({
      badges: data.badges.filter((badge) => badge.id !== id),
    });
  };

  const removeStat = (id: string) => {
    handleDataChange({
      statistics: data.statistics.filter((stat) => stat.id !== id),
    });
  };

  const removeQuote = (id: string) => {
    handleDataChange({
      quotes: data.quotes.filter((quote) => quote.id !== id),
    });
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
                data.showProfileViews
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Eye
                size={20}
                className={
                  data.showProfileViews ? "text-black" : "text-gray-600"
                }
              />
              <span>Profile Views Counter</span>
              {data.showProfileViews ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showStreak")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                data.showStreak
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Flame
                size={20}
                className={data.showStreak ? "text-black" : "text-gray-600"}
              />
              <span>GitHub Streak</span>
              {data.showStreak ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showTopLanguages")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                data.showTopLanguages
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <Languages
                size={20}
                className={
                  data.showTopLanguages ? "text-black" : "text-gray-600"
                }
              />
              <span>Top Languages</span>
              {data.showTopLanguages ? (
                <Check size={16} className="ml-auto text-black" />
              ) : (
                <div className="w-4 h-4 border-2 border-black rounded-sm ml-auto"></div>
              )}
            </button>

            <button
              onClick={() => toggleFeature("showContributions")}
              className={`p-3 border-2 border-black rounded-lg text-base transition-all duration-200 flex items-center gap-3 ${
                data.showContributions
                  ? "bg-green-400 text-black shadow-[2px_2px_0_#000]"
                  : "bg-white text-gray-700 shadow-[2px_2px_0_#000]"
              } hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000]`}
            >
              <GitBranch
                size={20}
                className={
                  data.showContributions ? "text-black" : "text-gray-600"
                }
              />
              <span>Contribution Graph</span>
              {data.showContributions ? (
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
            {data.badges.map((badge) => (
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

                {badge.id.startsWith("custom-") && (
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
            {data.statistics.map((stat) => (
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

                {stat.id.startsWith("custom-") && (
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
                value={customStat.url}
                onChange={(e) =>
                  setCustomStat((prev) => ({ ...prev, url: e.target.value }))
                }
                placeholder="Stat URL"
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
            {data.quotes.map((quote) => (
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
