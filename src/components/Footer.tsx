import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
// FaFacebookF, FaTwitter, FaInstagram, 
const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export const Footer = () => {
  return (
    <footer className="relative px-8 py-20 min-h-[70vh] space-y-16 bg-cream font-handwriting overflow-hidden">

      {/* Paper Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="paper-grain" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="0.5" fill="rgba(0,0,0,0.03)" />
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
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Floating Doodles */}
      <motion.div className="absolute inset-0 pointer-events-none z-10">
        {[
          { icon: "★", x: 10, y: 20, size: 24, color: "text-yellow-400" },
          { icon: "✦", x: 70, y: 10, size: 22, color: "text-pink-500" },
          { icon: "➶", x: 40, y: 60, size: 20, color: "text-blue-400" },
          { icon: "〰", x: 80, y: 70, size: 26, color: "text-green-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color}`}
            style={{ top: `${item.y}%`, left: `${item.x}%`, fontSize: item.size }}
            animate={{ y: [0, -12, 0], x: [0, 8, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA Sticky Note */}
      <motion.div
        className={`sticky-note p-8 md:p-12 relative ${rotations[0]} max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-lg`}
        whileHover={{ rotate: 0, scale: 1.03 }}
        style={{ backgroundColor: stickyColors[0] }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-md border border-black/30"></div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
          Ready to transform <br /> your space?
        </h2>

        <motion.button
          whileHover={{ rotate: 10, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-0 w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-xl hover:bg-pink-600 transition relative"
        >
          <FiArrowUpRight className="w-7 h-7" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Contact & Social Sticky Note */}
      <motion.div
        className={`sticky-note p-8 relative ${rotations[1]} max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-lg`}
        style={{ backgroundColor: stickyColors[1] }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Contact Me</h3>
            <p className="flex items-center gap-2"><FiMail /> anshumansingh10701@gmail.com</p>
            <p className="flex items-center gap-2"><FiPhone /> +91 7080216257</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Follow Me</h3>
            <div className="flex gap-4 justify-center md:justify-start mt-1">
              {/* <motion.a whileHover={{ scale: 1.2 }} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white transition">
                <FaTwitter />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </motion.a> */}
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/tanujgrover9" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white transition">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/anshuman-singh7/" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-white transition">
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright Sticky Note */}
      <motion.div
        className={`sticky-note p-4 relative ${rotations[2]} max-w-6xl mx-auto text-center shadow-md`}
        style={{ backgroundColor: stickyColors[2] }}
        whileHover={{ rotate: 0, scale: 1.01 }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Anshuman Singh. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};
