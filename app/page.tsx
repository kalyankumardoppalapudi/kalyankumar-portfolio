export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Kalyan Kumar Doppalapudi
        </h1>

        <p className="text-xl text-gray-300 mt-4">
          Software Engineer | Full Stack Developer | Backend Engineer
        </p>

        <p className="max-w-2xl mx-auto mt-6 text-gray-400">
          Master's student in Computer Science at SUNY Buffalo passionate
          about building scalable applications, cloud-native systems,
          and AI-powered solutions.
        </p>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-300">
          I am pursuing a Master's in Computer Science at SUNY Buffalo.
          I enjoy building scalable backend systems, full-stack applications,
          and machine learning solutions that solve real-world problems.
        </p>
      </section>

      {/* Skills */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-Learning Web Application",
              description:
                "Built a learning platform with authentication and role-based access.",
            },
            {
              title: "Customer Churn Prediction",
              description:
                "Developed ML models to predict customer churn.",
            },
            {
              title: "Real-Time Object Detection",
              description:
                "Implemented object detection and tracking using OpenCV.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-gray-300">
          kalyankumardoppalapudi@gmail.com
        </p>
      </section>
    </main>
  );
}