import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-tighter text-amber-500">
          DocuDoodle
          <span className="block text-2xl text-gray-600 mt-2">
            Create Beautiful GitHub READMEs
          </span>
        </h1>
        <AboutSection />
      </div>
    </main>
  );
}
