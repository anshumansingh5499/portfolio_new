import  { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import {
  FaPenNib,
  FaCode,
 
  FaReact,

  FaJsSquare,
 
} from "react-icons/fa";
import { BsEye } from "react-icons/bs";



export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);

  // Mouse trail positions
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Push new point to trail
      setTrail((prev) => {
        const updated = [...prev, { x: e.clientX, y: e.clientY }];
        return updated.slice(-26); // keep last ~26 points
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Build doodle stroke path from trail points (scaled to container) — fall back to empty
  const pathD = trail.length > 1 ? `M ${trail.map((p) => `${p.x},${p.y}`).join(" L ")}` : "";



  return (
    <div className="min-h-screen px-6 md:px-20 py-12 relative overflow-hidden font-sans bg-cream">
      {/* Sketchbook paper background (subtle) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* faint paper grain + horizontal notebook lines */}
        <defs>
          <pattern id="paper-grain" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="0.5" fill="rgba(255,255,255,0.02)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />

        {/* notebook faint lines */}
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

      {/* Floating doodles & icons (stack) */}
      <div className="absolute z-10 inset-0 pointer-events-none">
        {/* floating stack cluster (grouped icons) */}
        <motion.div
          className="absolute top-24 left-8 z-20 flex flex-col gap-2 items-center"
          style={{ rotateX, rotateY }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <div className="p-2 bg-white/80 rounded-xl shadow-md border border-dashed border-gray-200 backdrop-blur-sm">
            <FaReact size={34} className="text-blue-600" />
          </div>
          <div className="p-2 bg-white/80 rounded-xl shadow-md border border-dashed border-gray-200">
            <FaJsSquare size={30} className="text-yellow-600" />
          </div>
        </motion.div>

        {/* doodle arrows (example) */}
        <motion.svg
          viewBox="0 0 100 30"
          className="absolute right-6 top-36 w-36 opacity-90"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <path d="M2 20 Q40 0, 98 20" fill="none" stroke="#ff7ab6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M92 17 L98 20 L92 23" fill="#ff7ab6" />
        </motion.svg>
      </div>

      {/* Mouse Trail Doodle Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.path
          d={pathD}
          stroke="#2b2b2b"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.9, 0.3, 0.0] }}
          transition={{ duration: 0.6 }}
        />
      </svg>

      {/* Header */}
      <motion.header
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-between items-center mb-8 relative z-30"
>
  {/* Left: Name */}
  <div className="flex items-center gap-3 relative">
  {/* Doodle User Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-10 h-10 text-gray-800"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M32 32c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14z" />
    <path d="M8 60c0-8 12-14 24-14s24 6 24 14" />
  </svg>

  <span className="font-semibold text-lg relative font-handwriting">
    Anshuman Singh
    {/* Sketch underline */}
    <svg
      className="absolute left-0 bottom-[-6px] w-full h-3 text-pink-400"
      viewBox="0 0 100 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 6 Q10 2, 20 6 T 40 4 T 60 7 T 80 5 T 100 6" />
    </svg>
  </span>
</div>


  {/* Right: Navigation */}
  <div className="flex items-center gap-4">
    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-6 text-gray-800">
      <a href="#home" className="hover:underline font-handwriting">
        Home
      </a>
      <a href="#about" className="hover:underline font-handwriting">
        About Us
      </a>
      <a href="#projects" className="hover:underline font-handwriting">
        Projects
      </a>
      <a href="#contacts" className="hover:underline font-handwriting">
        Contact
      </a>
    </nav>

    {/* Download CV – Always visible */}
    <a
      href="https://drive.google.com/file/d/1fvxwJD3-C-J0p6nBcLPvdLS7ZsRIp2g7/view?usp=sharing"
      download="Anshuman_Singh_CV.pdf"
      className="px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-50 font-medium font-handwriting"
    >
      Download CV
    </a>

    {/* Hamburger menu - visible on mobile */}
    <div className="md:hidden relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 border rounded-md"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-gray-800 z-50">
          <a href="#home" className="hover:underline font-handwriting">
            Home
          </a>
          <a href="#about" className="hover:underline font-handwriting">
            About Us
          </a>
          <a href="#projects" className="hover:underline font-handwriting">
            Projects
          </a>
          <a href="#contacts" className="hover:underline font-handwriting">
            Contact
          </a>
        </div>
      )}
    </div>
  </div>
</motion.header>


      {/* Hero Section */}
      <section id="home" className="relative w-full flex flex-col items-center px-6 z-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl text-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-black">
            I <span className="text-pink-500 relative font-handwriting">design
              <svg
                className="absolute left-0 bottom-[-8px] w-full h-4 text-pink-400"
                viewBox="0 0 100 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 6 Q15 2, 30 6 T 50 5 T 70 7 T 90 6 T 100 5" />
              </svg>
            </span>
            <br /> beautiful, usable websites
          </h1>

          <p className="font-handwriting mt-6 text-lg md:text-xl text-gray-700 mx-auto max-w-2xl">
            I’ll design your website and develop it to launch on the internet using modern tools — no-code & code friendly.
          </p>

          {/* Animated Email button with doodle arrow */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="mt-8 flex justify-center items-center gap-4">
            <a
  href="mailto:anshumansingh10701@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Anshuman,"
  className="group flex items-center gap-4 px-6 py-3 bg-black text-white font-medium rounded-full shadow-lg transition relative font-handwriting"
>
  Email Me
  <svg
    className="w-6 h-6 transform group-hover:translate-x-1 transition"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path d="M5 12h14" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 5l7 7-7 7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</a>


            {/* Doodle arrow pointing to contact section */}
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:underline">
              <svg className="w-20 h-10" viewBox="0 0 100 40" fill="none">
                <path d="M2 30 Q40 2, 98 30" stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M92 27 L98 30 L92 33" fill="#7c3aed" />
              </svg>
              See contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* What I do section (keeps original cards but adds small doodles) */}
      <section id="about" className="mt-16 relative z-20">
        <p className="italic text-pink-600 font-handwriting text-xl">What I do?</p>

        <div className="flex flex-wrap gap-6 mt-10">
          {/* Card 1 */}
          <motion.div whileHover={{ rotate: -2, scale: 1.05 }} style={{ rotateX, rotateY }} className="relative w-64 h-72 bg-yellow-300 rounded-xl shadow-lg p-6 transform rotate-[-3deg]">
            <span className="absolute -top-3 left-4 bg-blue-200 text-blue-800 font-handwriting text-sm px-2 py-1 rounded-sm shadow rotate-[-5deg]">Pen/Paper</span>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FaPenNib size={40} className="mb-4" />
              <h3 className="font-bold text-lg font-handwriting">User Research <br /> Design</h3>
            </div>
            {/* small doodle inside card */}
            <svg className="absolute -right-6 -top-6 w-24 h-24 opacity-80" viewBox="0 0 80 80">
              <path d="M2 20 Q20 2, 38 20 T 74 18" stroke="#f59e0b" strokeWidth="1.6" fill="none" />
            </svg>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ rotate: 1, scale: 1.05 }} style={{ rotateX, rotateY }} className="relative w-64 h-72 bg-blue-300 rounded-xl shadow-lg p-6 transform rotate-[2deg]">
            <span className="absolute -top-3 right-4 bg-pink-200 text-pink-800 font-handwriting text-sm px-2 py-1 rounded-sm shadow rotate-[5deg]">Figma</span>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <BsEye size={40} className="mb-4" />
              <h3 className="font-bold text-lg font-handwriting">UI & Product <br /> Design</h3>
            </div>
            <svg className="absolute -left-6 -top-6 w-24 h-24 opacity-80" viewBox="0 0 80 80">
              <path d="M2 20 Q20 2, 38 20 T 74 18" stroke="#60a5fa" strokeWidth="1.6" fill="none" />
            </svg>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ rotate: -1, scale: 1.05 }} style={{ rotateX, rotateY }} className="relative w-64 h-72 bg-blue-400 rounded-xl shadow-lg p-6 transform rotate-[-2deg]">
            <span className="absolute -top-3 right-6 bg-yellow-200 text-yellow-800 font-handwriting text-sm px-2 py-1 rounded-sm shadow rotate-[-6deg]">Webflow</span>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FaCode size={40} className="mb-4" />
              <h3 className="font-bold text-lg font-handwriting">No-code <br /> Development</h3>
            </div>
            <svg className="absolute -right-6 bottom-[-6px] w-24 h-24 opacity-80" viewBox="0 0 80 80">
              <path d="M2 20 Q20 2, 38 20 T 74 18" stroke="#f97316" strokeWidth="1.6" fill="none" />
            </svg>
          </motion.div>

          {/* Card 4 — same content, slight doodle */}
          <motion.div whileHover={{ rotate: 1, scale: 1.05 }} style={{ rotateX, rotateY }} className="relative w-60 h-72 bg-green-300 rounded-xl shadow-lg p-6 transform rotate-[1deg]">
            <span className="absolute -top-3 left-6 bg-white text-green-800 font-handwriting text-sm px-2 py-1 rounded-sm shadow rotate-[-4deg]">Best Practices</span>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FaCode size={44} className="mb-4" />
              <h3 className="font-bold text-lg font-handwriting">Write clean, <br /> maintainable & <br /> efficient code</h3>
            </div>
            <svg className="absolute left-0 bottom-[-6px] w-20 h-20 opacity-80" viewBox="0 0 80 80">
              <path d="M2 20 Q20 2, 38 20" stroke="#10b981" strokeWidth="1.6" fill="none" />
            </svg>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
}


