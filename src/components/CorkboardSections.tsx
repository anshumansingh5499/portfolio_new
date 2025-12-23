
import { Briefcase } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFramer, SiGraphql } from "react-icons/si";
import { ArrowRight } from "lucide-react";

// Dummy projects
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    tags: ["React", "Tailwind", "UI"],
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "A full-featured e-commerce app built with MERN stack.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Web app to generate images using AI prompts.",
    tags: ["React", "AI", "API"],
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
];

// Skills
const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-fuchsia-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
];

// Experience
const experiences = [
  { company: "TraviYo", role: "Full-time UI Designer", years: "2024 - 2025" },
  { company: "Freelance", role: "Frontend Developer (React + Tailwind)", years: "2022 - 2024" },
];

const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export const CorkboardSections = () => {
  return (
    <div className="corkboard-bg min-h-screen px-8 py-16 space-y-32">

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 font-handwriting">
          📌 My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`sticky-note p-6 relative ${rotations[i % rotations.length]}`}
              style={{ backgroundColor: stickyColors[i % stickyColors.length] }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
              <h3 className="text-xl font-bold mb-2 font-handwriting">{p.title}</h3>
              <p className="text-gray-800 mb-3 font-handwriting">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white/50 text-sm px-2 py-1 rounded font-handwriting"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} className="text-blue-600 font-handwriting font-bold underline flex items-center gap-1">
                  Visit <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 font-handwriting">
          ✏️ My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={`sticky-note p-4 flex flex-col items-center ${rotations[i % rotations.length]}`}
              style={{ backgroundColor: stickyColors[i % stickyColors.length] }}
            >
              <div className={`text-3xl mb-2 ${s.color}`}>{s.icon}</div>
              <p className="font-handwriting text-sm">{s.name}</p>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md border border-black/30"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 font-handwriting">
          🎯 My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`sticky-note p-6 relative ${rotations[i % rotations.length]}`}
              style={{ backgroundColor: stickyColors[i % stickyColors.length] }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-md">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-handwriting">{exp.company}</h3>
              </div>
              <p className="text-gray-700 font-medium">{exp.role}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.years}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
