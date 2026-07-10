export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Kalyan Kumar Doppalapudi. All rights reserved.
        </p>

        {/* Center Text */}
        <p className="text-gray-500 text-sm text-center">
          Built with Next.js & Tailwind CSS
        </p>

        {/* Right Side Links */}
        <div className="flex gap-6">

          <a
            href="https://github.com/kalyankumardoppalapudi"
            target="_blank"
            className="text-gray-400 hover:text-[#67E8F9] transition text-sm"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kalyan-kumar-doppalopudi-bb6832239/"
            target="_blank"
            className="text-gray-400 hover:text-[#67E8F9] transition text-sm"
          >
            LinkedIn
          </a>

          <a
            href="mailto:kalyankumardoppalapudi@gmail.com"
            className="text-gray-400 hover:text-[#67E8F9] transition text-sm"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}