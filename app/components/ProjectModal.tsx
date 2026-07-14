import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "../types/project";

type Props = {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalProjects: number;
};

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalProjects,
}: Props) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrevious]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Background */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700 bg-[#111827] shadow-2xl animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-black/40 p-2 text-white transition hover:bg-[#67E8F9] hover:text-black"
        >
          ✕
        </button>

        {/* Previous */}
        <button
          onClick={onPrevious}
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-[#67E8F9] hover:text-black"
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-[#67E8F9] hover:text-black"
        >
          →
        </button>

        <div className="grid md:grid-cols-2">

          {/* Left Side */}
          <div className="relative h-72 md:h-full min-h-[400px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between p-8">

            <div>

              <h2 className="text-3xl font-bold text-[#67E8F9]">
                {project.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                {project.fullDescription}
              </p>

              <div className="mt-8">

                <h3 className="mb-4 text-xl font-semibold text-white">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-700 bg-black/40 px-4 py-2 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
                        {/* Footer */}
            <div className="mt-10">

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#67E8F9] px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                View GitHub ↗
              </a>

              {/* Project Counter */}
              {/* Project Counter */}
              <div className="mt-8 border-t border-gray-700 pt-6">
                <p className="text-center text-sm text-gray-400">
                Project {currentIndex + 1} of {totalProjects}
                </p>
              </div>

              {/* Keyboard Tip */}
              <p className="mt-5 text-center text-xs text-gray-500">
              Tip: Use ← → arrow keys to navigate between projects or press Esc to close.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}