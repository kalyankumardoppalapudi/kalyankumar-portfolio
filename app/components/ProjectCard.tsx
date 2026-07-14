import Image from "next/image";
import type { Project } from "../types/project";

type Props = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

export default function ProjectCard({
  project,
  onViewDetails,
}: Props) {
  return (
    <div
      onClick={() => onViewDetails(project)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-gray-800
        bg-black/40
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#67E8F9]/50
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-[#67E8F9]">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between">

          <span className="font-medium text-[#67E8F9] transition-transform duration-300 group-hover:translate-x-1">
            Learn More →
          </span>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm transition hover:border-[#67E8F9] hover:text-[#67E8F9]"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}