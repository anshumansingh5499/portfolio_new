import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const tapeColors = [
  "bg-yellow-300",
  "bg-pink-300",
  "bg-blue-300",
  "bg-green-300",
];

const cardColors = [
  "bg-pink-200",
  "bg-yellow-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-orange-200",
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-20 py-16 bg-[#fffdf6] overflow-hidden font-sans"
    >
      {/* Paper texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:14px_14px] opacity-40" />

      {/* Floating doodles */}
      <span className="absolute top-10 left-10 text-pink-400 text-3xl animate-bounce">★</span>
      <span className="absolute top-24 right-16 text-blue-400 text-2xl animate-pulse">➶</span>
      <span className="absolute bottom-20 left-1/4 text-green-500 text-xl animate-spin-slow">〰</span>
      <span className="absolute bottom-1/3 right-10 text-yellow-500 text-4xl animate-wiggle">✦</span>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <p className="font-handwriting text-pink-600 text-xl">
          Things I’ve Built
        </p>
        <h2 className="mt-4 text-5xl font-extrabold font-handwriting text-gray-900">
          My{" "}
          <span className="relative inline-block bg-pink-300 px-3 rounded-md">
            Projects
            <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%226%22><path d=%22M0,3 Q20,0 40,3 T80,3 T120,3%22 stroke=%22%23000000%22 stroke-width=%222%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>')] bg-no-repeat bg-contain" />
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
        {projects.map((p, i) => {
          const tape = tapeColors[i % tapeColors.length];
          const cardColor = cardColors[i % cardColors.length];
          const tilt = i % 2 === 0 ? "-rotate-2" : "rotate-2";

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotate: [0, -2, 2, -1, 1, 0],
                scale: 1.06,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`relative w-72 h-[480px] ${cardColor} ${tilt}
                rounded-2xl border-2 border-dashed border-black
                shadow-[6px_6px_0_rgba(0,0,0,0.35)]`}
            >
              {/* Tape */}
              <span
                className={`absolute -top-4 left-1/2 -translate-x-1/2
                w-20 h-5 ${tape} rotate-[-6deg] rounded-sm shadow`}
              />

              {/* Tag */}
              <span className="absolute -top-3 left-4 bg-white px-2 py-1 text-xs font-handwriting border border-black rotate-[-5deg]">
                {p.tags[0] || "Project"}
              </span>

              {/* Inner white sheet */}
              <div className="m-3 h-[calc(100%-1.5rem)] bg-white rounded-xl border border-black p-4 flex flex-col text-center shadow">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover rounded-lg border-2 border-black mb-4"
                />

                <h3 className="font-handwriting font-bold text-lg mb-2">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-700 font-handwriting line-clamp-3 mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-yellow-100 border border-black rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <Link
                    to={p.link}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2
                      bg-black text-white rounded-full hover:scale-105 transition font-medium"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
