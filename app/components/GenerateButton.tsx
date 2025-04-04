"use client";

import { FileText } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
}

export default function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        onClick={onClick}
        className="bg-red-400 text-black border-2 border-black py-3 px-6 rounded-lg font-bold cursor-pointer shadow-[6px_6px_0_#000] transition-all duration-200 uppercase tracking-wide hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_#000] flex items-center justify-center gap-2 text-lg"
      >
        <FileText size={24} />
        Generate README
      </button>
    </div>
  );
}
