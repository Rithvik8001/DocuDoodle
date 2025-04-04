"use client";

import { useState } from "react";
import { SocialsSection as SocialsSectionType, Social } from "../types/socials";
import {
  Check,
  X,
  Plus,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Youtube,
  Twitch,
  MessageCircle,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Predefined socials
const initialSocials: Social[] = [
  // Social media
  {
    id: "twitter",
    platform: "Twitter",
    username: "",
    url: "https://twitter.com/username",
    icon: "twitter",
    selected: false,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "",
    url: "https://linkedin.com/in/username",
    icon: "linkedin",
    selected: false,
  },
  {
    id: "github",
    platform: "GitHub",
    username: "",
    url: "https://github.com/username",
    icon: "github",
    selected: false,
  },
  {
    id: "instagram",
    platform: "Instagram",
    username: "",
    url: "https://instagram.com/username",
    icon: "instagram",
    selected: false,
  },
  {
    id: "facebook",
    platform: "Facebook",
    username: "",
    url: "https://facebook.com/username",
    icon: "facebook",
    selected: false,
  },
  {
    id: "youtube",
    platform: "YouTube",
    username: "",
    url: "https://youtube.com/@username",
    icon: "youtube",
    selected: false,
  },
  {
    id: "twitch",
    platform: "Twitch",
    username: "",
    url: "https://twitch.tv/username",
    icon: "twitch",
    selected: false,
  },
  {
    id: "discord",
    platform: "Discord",
    username: "",
    url: "https://discord.gg/username",
    icon: "discord",
    selected: false,
  },

  // Contact info
  {
    id: "website",
    platform: "Website",
    username: "",
    url: "https://username.com",
    icon: "globe",
    selected: false,
  },
  {
    id: "email",
    platform: "Email",
    username: "",
    url: "mailto:username@example.com",
    icon: "mail",
    selected: false,
  },
  {
    id: "phone",
    platform: "Phone",
    username: "",
    url: "tel:+1234567890",
    icon: "phone",
    selected: false,
  },
  {
    id: "location",
    platform: "Location",
    username: "",
    url: "https://maps.google.com/?q=location",
    icon: "map-pin",
    selected: false,
  },
];

export default function SocialsSection() {
  const [socialsData, setSocialsData] = useState<SocialsSectionType>({
    socials: initialSocials,
  });

  const [customSocial, setCustomSocial] = useState<Social>({
    id: "",
    platform: "",
    username: "",
    url: "",
    icon: "globe",
    selected: false,
  });

  const toggleSocial = (id: string) => {
    setSocialsData((prev) => ({
      ...prev,
      socials: prev.socials.map((social) =>
        social.id === id ? { ...social, selected: !social.selected } : social
      ),
    }));
  };

  const updateSocialUsername = (id: string, username: string) => {
    setSocialsData((prev) => ({
      ...prev,
      socials: prev.socials.map((social) => {
        if (social.id === id) {
          const url = social.url.replace(/\/[^\/]*$/, `/${username}`);
          return { ...social, username, url };
        }
        return social;
      }),
    }));
  };

  const addCustomSocial = () => {
    if (customSocial.platform && customSocial.url) {
      const newSocial = {
        ...customSocial,
        id: `custom-${Date.now()}`,
        selected: true,
      };

      setSocialsData((prev) => ({
        ...prev,
        socials: [...prev.socials, newSocial],
      }));

      setCustomSocial({
        id: "",
        platform: "",
        username: "",
        url: "",
        icon: "globe",
        selected: false,
      });
    }
  };

  const removeSocial = (id: string) => {
    setSocialsData((prev) => ({
      ...prev,
      socials: prev.socials.filter((social) => social.id !== id),
    }));
  };

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "twitter":
        return <Twitter size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "github":
        return <Github size={18} />;
      case "instagram":
        return <Instagram size={18} />;
      case "facebook":
        return <Facebook size={18} />;
      case "youtube":
        return <Youtube size={18} />;
      case "twitch":
        return <Twitch size={18} />;
      case "discord":
        return <MessageCircle size={18} />;
      case "globe":
        return <Globe size={18} />;
      case "mail":
        return <Mail size={18} />;
      case "phone":
        return <Phone size={18} />;
      case "map-pin":
        return <MapPin size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-[8px_8px_0_#000] border-4 border-black my-8 mx-4 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiBpZD0iYiIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg text-gray-800 flex items-center">
            <span className="text-red-500 mr-1">*</span> Socials
          </label>
          <p className="text-gray-600 mb-4">
            Connect your social media profiles and contact information.
          </p>
        </div>

        {/* Social Media Platforms */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-6"></div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-1">Social Media</h3>
            <div className="border-b-2 border-dashed border-gray-300 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {socialsData.socials
              .filter((social) =>
                [
                  "twitter",
                  "linkedin",
                  "github",
                  "instagram",
                  "facebook",
                  "youtube",
                  "twitch",
                  "discord",
                ].includes(social.id)
              )
              .map((social) => (
                <div key={social.id} className="relative group">
                  <div
                    className={`p-3 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] ${
                      social.selected ? "bg-gray-50" : ""
                    }`}
                  >
                    <div
                      className="flex items-center gap-3 mb-2 cursor-pointer"
                      onClick={() => toggleSocial(social.id)}
                    >
                      {getIconComponent(social.icon)}
                      <span className="font-semibold">{social.platform}</span>
                      <button
                        className={`ml-auto p-1 rounded-md transition-all duration-200 ${
                          social.selected
                            ? "bg-green-400 text-black"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {social.selected ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>
                    </div>

                    {social.selected && (
                      <div className="mt-2 pt-2 border-t border-dashed border-gray-300">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {getIconComponent(social.icon)}
                          </div>
                          <input
                            type="text"
                            value={social.username}
                            onChange={(e) =>
                              updateSocialUsername(social.id, e.target.value)
                            }
                            placeholder={`${social.platform} Username (e.g., johndoe)`}
                            className="p-2 pl-10 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-500 text-black"
                          />
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {social.url}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-teal-300 rounded-tr-lg border-b-2 border-l-2 border-black transform -rotate-6"></div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-1">
              Contact Information
            </h3>
            <div className="border-b-2 border-dashed border-gray-300 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {socialsData.socials
              .filter((social) =>
                ["website", "email", "phone", "location"].includes(social.id)
              )
              .map((social) => (
                <div key={social.id} className="relative group">
                  <div
                    className={`p-3 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_#000] ${
                      social.selected ? "bg-gray-50" : ""
                    }`}
                  >
                    <div
                      className="flex items-center gap-3 mb-2 cursor-pointer"
                      onClick={() => toggleSocial(social.id)}
                    >
                      {getIconComponent(social.icon)}
                      <span className="font-semibold">{social.platform}</span>
                      <button
                        className={`ml-auto p-1 rounded-md transition-all duration-200 ${
                          social.selected
                            ? "bg-green-400 text-black"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {social.selected ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>
                    </div>

                    {social.selected && (
                      <div className="mt-2 pt-2 border-t border-dashed border-gray-300">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {getIconComponent(social.icon)}
                          </div>
                          <input
                            type="text"
                            value={social.username}
                            onChange={(e) =>
                              updateSocialUsername(social.id, e.target.value)
                            }
                            placeholder={`${social.platform} ${
                              social.id === "email"
                                ? "Address (e.g., john@example.com)"
                                : social.id === "phone"
                                ? "Number (e.g., +1 234 567 8900)"
                                : social.id === "location"
                                ? "Details (e.g., New York, USA)"
                                : "URL (e.g., https://example.com)"
                            }`}
                            className="p-2 pl-10 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-500 text-black"
                          />
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {social.url}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Custom Social */}
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-300 rounded-tr-lg border-b-2 border-l-2 border-black transform rotate-3"></div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-1">
              Add Custom Social
            </h3>
            <div className="border-b-2 border-dashed border-gray-300 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Globe size={18} />
              </div>
              <input
                type="text"
                value={customSocial.platform}
                onChange={(e) =>
                  setCustomSocial((prev) => ({
                    ...prev,
                    platform: e.target.value,
                  }))
                }
                placeholder="Platform Name (e.g., Medium)"
                className="p-2 pl-10 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-500 text-black"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Globe size={18} />
              </div>
              <input
                type="text"
                value={customSocial.url}
                onChange={(e) =>
                  setCustomSocial((prev) => ({ ...prev, url: e.target.value }))
                }
                placeholder="Profile URL (e.g., https://medium.com/@username)"
                className="p-2 pl-10 border-2 border-black rounded-lg text-base bg-white shadow-[2px_2px_0_#000] transition-all duration-200 focus:outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0_#000] w-full placeholder:text-gray-500 text-black"
              />
            </div>
          </div>
          <button
            onClick={addCustomSocial}
            className="bg-red-400 text-black border-2 border-black py-2 px-4 rounded-lg font-semibold cursor-pointer shadow-[4px_4px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#000] flex items-center justify-center gap-2 text-sm"
          >
            <Plus size={16} />
            Add Social
          </button>
        </div>
      </div>
    </div>
  );
}
