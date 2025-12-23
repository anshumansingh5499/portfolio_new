
import { Mail, MapPin, Linkedin, Github, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export const Contact = () => {
  return (
    <section
      id="contacts"
      className="relative min-h-screen px-8 py-20 bg-cream overflow-hidden "
    >
      
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="paper-grain"
            width="0.5"
            height="0.5"
            patternUnits="userSpaceOnUse"
          >
            <rect width="0.5" height="0.5" fill="rgba(0,0,0,0.02)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="100"
            y1={`${6 + i * 6}%`}
            y2={`${6 + i * 6}%`}
            stroke="rgba(0,0,0,0.03)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Section Heading */}
      <h3 className="text-5xl font-extrabold text-center mt-30 mb-10 font-handwriting relative">
        Let’s <span className="text-pink-500 px-3 rounded-lg">Connect</span>
      </h3>

      <div className="grid md:grid-cols-2 gap-12 items-start justify-center relative z-10">
        {/* Contact Form Sticky Note */}
        <div
          className={`relative p-10 sticky-note ${rotations[0]} shadow-lg`}
          style={{ backgroundColor: stickyColors[0] }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>

          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Your Name"
              />
              <input
                className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Your Email"
                type="email"
              />
              <input
                className="border border-gray-300 rounded-xl px-4 py-3 sm:col-span-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
                placeholder="Subject"
              />
              <textarea
                className="border border-gray-300 rounded-xl px-4 py-3 sm:col-span-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
                rows={5}
                placeholder="Message"
              />
            </div>
            <button className="mt-8 w-full px-8 py-4 rounded-xl bg-pink-400 text-white font-semibold text-lg shadow-md hover:bg-pink-500 hover:shadow-lg transition-all">
              Send Message
            </button>
          </form>

          {/* Small Doodle Accents */}
          <svg
            className="absolute -bottom-6 -right-6 w-24 h-24 opacity-50"
            viewBox="0 0 80 80"
          >
            <path
              d="M2 20 Q20 2, 38 20 T 74 18"
              stroke="#f59e0b"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <svg
            className="absolute -top-6 -left-6 w-20 h-20 opacity-40"
            viewBox="0 0 80 80"
          >
            <path
              d="M2 30 Q20 10, 38 30 T 74 28"
              stroke="#f97316"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Contact Info Sticky Note */}
        <div
          className={`relative p-10 sticky-note ${rotations[1]} shadow-lg`}
          style={{ backgroundColor: stickyColors[1] }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>

          <h4 className="text-2xl font-semibold mb-8 font-handwriting">
            Contact Info
          </h4>

          <div className="flex items-center gap-4 mb-5">
            <Mail className="text-sky-600 w-6 h-6" />
            <p className="text-gray-700 font-handwriting">
              anshumansingh10701@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-4 mb-10">
            <MapPin className="text-sky-600 w-6 h-6" />
            <p className="text-gray-700 font-handwriting">India</p>
          </div>

          <h5 className="text-lg font-medium mb-4 font-handwriting">
            Social Links
          </h5>
          <div className="flex gap-5">
            <Link
              to="https://www.linkedin.com/in/anshuman-singh7/"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              to="https://github.com/tanujgrover9"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              to="https://dribbble.com/"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              <Dribbble className="w-5 h-5" />
            </Link>
          </div>

          {/* Doodle Accents */}
          <svg
            className="absolute -bottom-6 -left-6 w-20 h-20 opacity-40"
            viewBox="0 0 80 80"
          >
            <path
              d="M2 20 Q20 2, 38 20 T 74 18"
              stroke="#60a5fa"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <svg
            className="absolute -top-6 -right-6 w-24 h-24 opacity-50"
            viewBox="0 0 80 80"
          >
            <path
              d="M2 30 Q20 10, 38 30 T 74 28"
              stroke="#7c3aed"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Floating Doodle Icons */}
     <div className="absolute inset-0 pointer-events-none">
  <motion.div
    className="absolute top-10 left-10 flex flex-col gap-3"
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
  >
    <Mail className="w-7 h-7 text-sky-500" />
    <MapPin className="w-7 h-7 text-pink-500" />
    <Github className="w-7 h-7 text-gray-800" />
  </motion.div>
</div>
    </section>
  );
};
