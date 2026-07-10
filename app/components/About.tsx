export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-[#67E8F9] mb-10 text-center md:text-left">
        About Me
      </h2>

      {/* Content Box */}
      <div className="bg-black/40 border border-gray-800 rounded-2xl p-8 md:p-10 backdrop-blur-md">

        <p className="text-gray-300 leading-8 text-lg">
          I am a Software Engineer currently pursuing a Master’s degree in Computer Science
          at the University at Buffalo. I specialize in building scalable backend systems,
          full-stack web applications, and cloud-native solutions.
        </p>

        <br />

        <p className="text-gray-300 leading-8 text-lg">
          I have experience working with technologies like React, Node.js, Python, AWS, Docker,
          and databases such as PostgreSQL and MongoDB. I enjoy solving real-world problems
          through clean, efficient, and production-ready software.
        </p>

        <br />

        <p className="text-gray-300 leading-8 text-lg">
          My focus is on backend engineering, distributed systems, and AI-powered applications.
          I am continuously learning and improving my skills to build impactful systems.
        </p>

      </div>
    </section>
  );
}