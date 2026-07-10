"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    image: "/projects/churn.png",
    shortDescription: "Machine learning model for churn prediction.",
    fullDescription:
      "Built an end-to-end machine learning pipeline using Python, Pandas, NumPy, Scikit-Learn and Docker. The project performs data preprocessing, feature engineering, model training, evaluation, and exposes predictions through a REST API.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Docker", "Flask"],
    github: "https://github.com/yourgithub/churn-prediction",
  },
  {
    title: "E-Learning Web Application",
    image: "/projects/elearning.png",
    shortDescription: "Full-stack learning platform with authentication.",
    fullDescription:
      "Developed a scalable e-learning platform with role-based authentication, course management, and responsive UI using modern web technologies.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourgithub/elearning",
  },
  {
    title: "Real-Time Object Detection",
    image: "/projects/object-detection.png",
    shortDescription: "Live object detection using OpenCV.",
    fullDescription:
      "Implemented real-time object detection and tracking using OpenCV and deep learning models for high-speed inference and accuracy.",
    technologies: ["Python", "OpenCV", "Deep Learning"],
    github: "https://github.com/yourgithub/object-detection",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#67E8F9] mb-12">
        Featured Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}