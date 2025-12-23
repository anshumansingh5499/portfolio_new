import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiRedux,
  SiMaterialdesign,
 
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi"; 
import { motion } from "framer-motion";
import { MdOutlineStorage } from "react-icons/md"; 

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    { name: "GraphQL", icon: <SiGraphql />, color: "text-fuchsia-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    
    { name: "Context API", icon: <MdOutlineStorage />, color: "text-amber-600" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { name: "Material UI", icon: <SiMaterialdesign />, color: "text-blue-400" },
{ name: "Zustand", icon: <GiBearFace />, color: "text-emerald-600" },
  ];

  const tapeColors = ["bg-yellow-200", "bg-pink-200", "bg-green-200", "bg-blue-200"];

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 relative overflow-hidden bg-[#fffdf7] font-sans">
      {/* Paper Texture Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paper-grain"
            width="0.5"
            height="0.5"
            patternUnits="userSpaceOnUse"
          >
            <rect width="0.5" height="0.5" fill="rgba(0,0,0,0.04)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />
      </svg>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <p className="italic text-pink-600 font-handwriting text-xl mb-2">
          Tools I love to use
        </p>
        <h3 className="text-5xl font-extrabold text-black relative inline-block font-handwriting">
          My{" "}
          <span className="relative text-yellow-600 font-handwriting rotate-[-2deg] inline-block">
            Skills
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-black"></span>
          </span>
        </h3>
      </div>

      {/* Collage Style Layout */}
      <div className="relative flex flex-wrap justify-center gap-12 z-10">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
            whileHover={{ rotate: Math.random() * 4 - 2, scale: 1.05 }}
            className="relative w-40 h-44 p-6 flex flex-col items-center justify-center text-center bg-white border-2 border-black shadow-lg"
            style={{
              transform: `rotate(${(Math.random() * 8 - 4).toFixed(2)}deg)`,
            }}
          >
            {/* Tape pieces */}
            <span
              className={`absolute -top-3 -left-2 w-16 h-4 rotate-[-6deg] ${tapeColors[i % tapeColors.length]} opacity-80 shadow`}
            ></span>
            <span
              className={`absolute -bottom-3 -right-2 w-16 h-4 rotate-[8deg] ${
                tapeColors[(i + 1) % tapeColors.length]
              } opacity-80 shadow`}
            ></span>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="text-5xl mb-3"
            >
              <span className={s.color}>{s.icon}</span>
            </motion.div>

            {/* Label */}
            <p className="text-base font-handwriting font-bold text-black">
              {s.name}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-16 left-8 text-4xl text-pink-400"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-12 right-12 text-3xl text-blue-400"
      >
        ➶
      </motion.div>
    </section>
  );
};
