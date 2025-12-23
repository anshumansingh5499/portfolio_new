
import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  FileText,
  Bug,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "Understand your goals, target audience, and create sitemap & scope.",
    icon: <Lightbulb className="w-9 h-9 text-yellow-500" />,
    bg: "bg-yellow-100",
    rotate: "-3deg",
  },
  {
    id: 2,
    title: "Creative Design",
    description:
      "Wireframes, mood boards & visual identity to match your brand.",
    icon: <Palette className="w-9 h-9 text-pink-500" />,
    bg: "bg-pink-100",
    rotate: "2deg",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Bring designs to life with clean, scalable & responsive code.",
    icon: <Code2 className="w-9 h-9 text-blue-500" />,
    bg: "bg-blue-100",
    rotate: "-2deg",
  },
  {
    id: 4,
    title: "Content Integration",
    description:
      "Add engaging content, images & videos aligned with the design.",
    icon: <FileText className="w-9 h-9 text-green-500" />,
    bg: "bg-green-100",
    rotate: "1deg",
  },
  {
    id: 5,
    title: "Testing & QA",
    description:
      "Cross-browser & device testing to ensure smooth experience.",
    icon: <Bug className="w-9 h-9 text-red-500" />,
    bg: "bg-red-100",
    rotate: "-1deg",
  },
  {
    id: 6,
    title: "Launch",
    description: "Deploy & make your website live with best practices.",
    icon: <Rocket className="w-9 h-9 text-purple-500" />,
    bg: "bg-purple-100",
    rotate: "3deg",
  },
  {
    id: 7,
    title: "Growth & Optimization",
    description: "Analytics, SEO & improvements for long-term success.",
    icon: <TrendingUp className="w-9 h-9 text-indigo-500" />,
    bg: "bg-indigo-100",
    rotate: "-2deg",
  },
];

// Tape color pairs (alternating diagonals)
const tapePairs = [
  { top: "bg-yellow-200", bottom: "bg-pink-200" },
  { top: "bg-blue-200", bottom: "bg-green-200" },
];

export const WebsiteApproach = () => {
  return (
    <section className="relative py-20 px-6 min-h-screen overflow-hidden">
      {/* Paper Background */}
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
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="100"
            y1={`${5 + i * 5}%`}
            y2={`${5 + i * 5}%`}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-900 font-handwriting relative z-10">
        Our <span className="text-pink-500">Website Approach</span>
      </h2>

      {/* Steps Grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto z-10">
        {steps.map((step, index) => {
          const tapes = tapePairs[index % tapePairs.length]; // alternate
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`${step.bg} relative p-8 rounded-xl shadow-xl border-2 border-black font-handwriting`}
              style={{ transform: `rotate(${step.rotate})` }}
            >
              {/* Two Diagonal Tape Strips */}
              <span
                className={`absolute -top-4 -left-3 w-20 h-5 ${tapes.top} rotate-[-12deg] opacity-80 shadow-md`}
              ></span>
              <span
                className={`absolute -bottom-4 -right-3 w-20 h-5 ${tapes.bottom} rotate-[10deg] opacity-80 shadow-md`}
              ></span>

              {/* Icon */}
              <div className="mb-5">{step.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Floating doodles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
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
