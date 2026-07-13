export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">

      {/* Title */}
      <h2 className="text-4xl font-bold text-[#67E8F9] mb-8">
        Contact
      </h2>

      {/* Card */}
      <div className="bg-black/40 border border-gray-800 rounded-2xl p-10 backdrop-blur-md">

        <p className="text-gray-300 text-lg leading-8">
          I am actively open to Software Engineer, Backend, Full Stack,
          and Cloud Engineering opportunities. If you are looking for an engineer who treats
          system architecture as a craft and builds with scalability in mind,
          <br />
          <span className="inline-block mt-2">Let's collaborate.</span>
        </p>

        {/* Email */}
        <div className="mt-8">
          <p className="text-gray-400">Email</p>

          <a
            href="mailto:kalyankumardoppalapudi@gmail.com"
            className="text-[#67E8F9] text-xl font-semibold hover:underline"
          >
            kalyankumardoppalapudi@gmail.com
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* GitHub */}
          <a
            href="https://github.com/kalyankumardoppalapudi"
            target="_blank"
            className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kalyan-kumar-doppalapudi-bb6832239/"
            target="_blank"
            className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg transition"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}