import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-4 relative inline-block">
            DocuDoodle
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full transform -rotate-1"></div>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 rounded-full transform rotate-1 translate-y-1"></div>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mt-6">
            Create Beautiful GitHub READMEs
          </p>
        </div>

        <AboutSection />
      </div>
    </main>
  );
}
