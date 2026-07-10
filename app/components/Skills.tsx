import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#67E8F9] mb-12">
        Technical Skills
      </h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-4">

        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-black/40 border border-gray-800 px-5 py-3 rounded-lg text-gray-200 hover:border-[#67E8F9] transition"
          >
            {skill}
          </span>
        ))}

      </div>
    </section>
  );
}