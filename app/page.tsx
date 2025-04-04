import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import AddOnsSection from "./components/AddOnsSection";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4 relative inline-block">
            DocuDoodle
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full"></div>
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full"></div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Create Beautiful GitHub READMEs
          </p>
        </div>

        <AboutSection />
        <SkillsSection />
        <AddOnsSection />
      </div>
    </main>
  );
}
