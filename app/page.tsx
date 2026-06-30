import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "E-Learning Web Application",
      image: "/projects/elearning.png",
      description:
        "Developed a full-stack learning platform with secure authentication, role-based access, and an intuitive user experience.",
    },
    {
      title: "Customer Churn Prediction",
      image: "/projects/churn.png",
      description:
        "Built machine learning models to predict customer churn using Python, feature engineering, and data visualization.",
    },
    {
      title: "Real-Time Object Detection",
      image: "/projects/object-detection.png",
      description:
        "Implemented real-time object detection and tracking using OpenCV and deep learning techniques.",
    },
  ];

  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
  ];

  return (
    <main
  className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/background.jpg')",
  }}
>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="text-center md:text-left flex-1">

          <h1 className="text-5xl md:text-6xl font-bold text-[#67E8F9]">
            Kalyan Kumar Doppalapudi
          </h1>

          <p className="text-2xl text-[#67E8F9] mt-5">
            Software Engineer | Full Stack Developer | Backend Engineer
          </p>

          <p className="text-gray-400 mt-6 max-w-2xl leading-8">
            Master's student in Computer Science at SUNY Buffalo passionate
            about building scalable backend systems, cloud-native applications,
            distributed systems, and AI-powered software solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

            <a
              href="/resume/Resume.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/kalyankumardoppalapudi"
              target="_blank"
              className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kalyan-kumar-doppalapudi-bb6832239/"
              target="_blank"
              className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div>

          <Image
            src="/images/profile.png"
            alt="Profile"
            width={280}
            height={280}
            className="rounded-full border-4 border-blue-500 object-cover"
          />

        </div>

      </section>

      {/* About */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am a Software Engineer currently pursuing a Master's degree in
          Computer Science at the University at Buffalo. I enjoy designing
          scalable backend systems, building modern full-stack web
          applications, optimizing databases, and developing AI-powered
          solutions that solve real-world problems. I continuously learn new
          technologies and enjoy building production-ready software.
        </p>

      </section>

      {/* Skills */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {skills.map((skill) => (

            <span
              key={skill}
              className="bg-gray-900 hover:bg-blue-600 transition px-5 py-3 rounded-lg"
            >
              {skill}
            </span>

          ))}

        </div>

      </section>

      {/* Projects */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Contact */}

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-gray-300 text-lg">
          📧 kalyankumardoppalapudi@gmail.com
        </p>

        <p className="text-gray-500 mt-3">
          Open to Software Engineer, Full Stack, Backend, and Cloud Engineering opportunities.
        </p>

      </section>

    </main>
  );
}