"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject: Project | null =
    selectedIndex !== null ? projects[selectedIndex] : null;

  const openProject = (project: Project) => {
    const index = projects.findIndex((p) => p.title === project.title);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const closeProject = () => {
    setSelectedIndex(null);
  };

  const nextProject = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % projects.length);
  };

  const previousProject = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-[#67E8F9] mb-12">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onViewDetails={openProject}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
        onNext={nextProject}
        onPrevious={previousProject}
        currentIndex={selectedIndex ?? 0}
        totalProjects={projects.length}
      />
    </section>
  );
}