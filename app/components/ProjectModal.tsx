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
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl w-[90%] md:w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-[#67E8F9]"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold text-[#67E8F9]">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mt-4 leading-7">
            {project.fullDescription}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-black/50 border border-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Button */}
          <div className="mt-8 flex gap-4">

            <a
              href={project.github}
              target="_blank"
              className="bg-[#67E8F9] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
            >
              View GitHub
            </a>

            <button
              onClick={onClose}
              className="border border-gray-500 px-6 py-3 rounded-lg hover:border-white transition"
            >
              Close
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}