"use client";

import { useState } from "react";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import SocialsSection from "./components/SocialsSection";
import AddOnsSection from "./components/AddOnsSection";
import GenerateButton from "./components/GenerateButton";
import ReadmeSheet from "./components/ReadmeSheet";
import { AboutSection as AboutSectionType } from "./types/about";
import { SkillsSection as SkillsSectionType } from "./types/skills";
import { SocialsSection as SocialsSectionType } from "./types/socials";
import { AddOnsSection as AddOnsSectionType } from "./types/addons";

export default function Home() {
  const [isReadmeSheetOpen, setIsReadmeSheetOpen] = useState(false);
  const [aboutData, setAboutData] = useState<AboutSectionType>({
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
  const [skillsData, setSkillsData] = useState<SkillsSectionType>({
    categories: [],
  });
  const [socialsData, setSocialsData] = useState<SocialsSectionType>({
    socials: [],
  });
  const [addOnsData, setAddOnsData] = useState<AddOnsSectionType>({
    badges: [],
    stats: [],
    quotes: [],
    showProfileViews: false,
    showStreak: false,
    showTopLanguages: false,
    showContributions: false,
  });

  const handleAboutDataChange = (data: AboutSectionType) => {
    setAboutData(data);
  };

  const handleSkillsDataChange = (data: SkillsSectionType) => {
    setSkillsData(data);
  };

  const handleSocialsDataChange = (data: SocialsSectionType) => {
    setSocialsData(data);
  };

  const handleAddOnsDataChange = (data: AddOnsSectionType) => {
    setAddOnsData(data);
  };

  const openReadmeSheet = () => {
    setIsReadmeSheetOpen(true);
  };

  const closeReadmeSheet = () => {
    setIsReadmeSheetOpen(false);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 relative inline-block bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
            DocuDoodle
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500"></div>
          </h1>
          <p className="text-2xl md:text-2xl text-gray-700 mt-4 tracking-tight font-semibold">
            Create Beautiful GitHub READMEs
          </p>
        </div>

        <AboutSection onDataChange={handleAboutDataChange} />
        <SkillsSection onDataChange={handleSkillsDataChange} />
        <SocialsSection onDataChange={handleSocialsDataChange} />
        <AddOnsSection onDataChange={handleAddOnsDataChange} />
      </div>

      <GenerateButton onClick={openReadmeSheet} />

      <ReadmeSheet
        isOpen={isReadmeSheetOpen}
        onClose={closeReadmeSheet}
        aboutData={aboutData}
        skillsData={skillsData}
        socialsData={socialsData}
        addOnsData={addOnsData}
      />
    </main>
  );
}
