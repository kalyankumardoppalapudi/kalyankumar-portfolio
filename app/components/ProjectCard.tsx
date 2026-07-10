import Image from "next/image";

type Project = {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  github: string;
};

type Props = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

export default function ProjectCard({ project, onViewDetails }: Props) {
  return (
    <div className="bg-black/40 border border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 backdrop-blur-md">

      {/* Project Image */}
      <div className="relative w-full h-52">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3 leading-7">
          {project.shortDescription}
        </p>

        {/* Technologies Preview */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-900 border border-gray-700 px-3 py-1 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => onViewDetails(project)}
            className="bg-[#67E8F9] text-black px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition"
          >
            View Details
          </button>

          <a
            href={project.github}
            target="_blank"
            className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:border-white transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}