import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* LEFT SIDE */}
      <div className="text-center md:text-left flex-1">

        <h1 className="text-5xl md:text-6xl font-bold text-[#67E8F9]">
          Kalyan Kumar Doppalapudi
        </h1>

        <p className="text-2xl text-[#67E8F9] mt-5">
          Software Engineer | Full Stack Developer | Backend Engineer
        </p>

        <p className="text-gray-300 mt-6 max-w-2xl leading-8">
          Master's student in Computer Science at SUNY Buffalo passionate about
          building scalable backend systems, cloud-native applications,
          distributed systems, and AI-powered software solutions.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

          {/* Resume */}
          <a
            href="/resume/Resume.pdf"
            target="_blank"
            className="bg-[#67E8F9] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
          >
            Download Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kalyankumardoppalapudi"
            target="_blank"
            className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kalyan-kumar-doppalapudi-bb6832239/"
            target="_blank"
            className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg transition"
          >
            LinkedIn
          </a>

        </div>
      </div>

      {/* RIGHT SIDE (PROFILE IMAGE) */}
      <div className="flex justify-center">

        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">

          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            fill
            className="rounded-full border-4 border-[#67E8F9] object-cover"
            priority
          />

        </div>

      </div>

    </section>
  );
}