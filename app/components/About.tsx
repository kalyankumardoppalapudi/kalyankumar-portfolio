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
          I am a Software Engineer and Master’s graduate in Computer Science from the
          University at Buffalo, driven by a passion for engineering resilient,
          cloud-native backend architectures. I specialize in bridging the gap between
          large-scale data processing and responsive full-stack applications, building
          systems that are scalable, reliable, and easy to maintain.
        </p>

        <br />

        <p className="text-gray-300 leading-8 text-lg">
          My engineering philosophy centers on measurable impact and scalable design.
          I focus on developing clean, fault-tolerant, and production-ready software
          using technologies such as Python, Node.js, React, AWS, Docker,
          PostgreSQL, and MongoDB. I enjoy designing backend services, APIs,
          and distributed systems that solve real-world engineering challenges.
        </p>

        <br />

        <p className="text-gray-300 leading-8 text-lg">
          Whether I am optimizing database architectures for high-throughput workloads,
          designing cloud-native applications, or building AI-powered solutions, my
          goal is to create intuitive, high-performance software from the ground up.
          I am passionate about continuous learning and delivering systems that make a
          measurable impact.
        </p>

      </div>
    </section>
  );
}