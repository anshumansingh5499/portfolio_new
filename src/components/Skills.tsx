/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaRobot,
  FaBrain,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiRedux,
  SiMaterialdesign,
  SiOpenai,
  SiN8N,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { MdOutlineStorage } from "react-icons/md";

const capabilities = [
  {
    title: "Frontend engineering",
    subtitle: "User-facing systems",
    color: "cyan",
    icon: FaLayerGroup,
    description:
      "Designing high-performance interfaces and production-grade web applications with modern frontend architecture.",
    tools: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-400" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
      { name: "Material UI", icon: SiMaterialdesign, color: "text-indigo-400" },
    ],
  },

  {
    title: "State & data architecture",
    subtitle: "Application state",
    color: "purple",
    icon: GiBearFace,
    description:
      "Managing scalable application state and predictable data flow for complex frontend systems.",
    tools: [
      { name: "Redux", icon: SiRedux, color: "text-purple-400" },
      { name: "Zustand", icon: GiBearFace, color: "text-amber-400" },
      { name: "Context API", icon: MdOutlineStorage, color: "text-slate-300" },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    ],
  },

  {
    title: "Generative AI systems",
    subtitle: "LLM applications",
    color: "emerald",
    icon: FaBrain,
    description:
      "Designing intelligent systems powered by large language models, retrieval pipelines, and AI agents.",
    tools: [
      { name: "Python", icon: FaBrain, color: "text-yellow-400" },
      { name: "OpenAI API", icon: SiOpenai, color: "text-emerald-400" },
      { name: "LangChain", icon: FaBrain, color: "text-green-400" },
      { name: "Hugging Face", icon: FaBrain, color: "text-orange-400" },
      { name: "RAG Pipelines", icon: FaBrain, color: "text-cyan-400" },
      { name: "Vector Databases", icon: MdOutlineStorage, color: "text-violet-400" },
      { name: "AI Agents", icon: FaRobot, color: "text-indigo-400" },
    ],
  },

  {
    title: "AI automation",
    subtitle: "Workflow intelligence",
    color: "green",
    icon: FaRobot,
    description:
      "Automating workflows and building AI-powered systems that integrate with APIs, tools, and business processes.",
    tools: [
      { name: "n8n", icon: SiN8N, color: "text-orange-400" },
      { name: "AI Workflow Bots", icon: FaRobot, color: "text-red-400" },
      { name: "Prompt Engineering", icon: FaBrain, color: "text-green-400" },
      { name: "LLM Integrations", icon: SiOpenai, color: "text-emerald-400" },
    ],
  },

  {
    title: "Backend & infrastructure",
    subtitle: "AI application runtime",
    color: "orange",
    icon: MdOutlineStorage,
    description:
      "Building backend services and infrastructure that power AI applications and scalable APIs.",
    tools: [
      { name: "FastAPI", icon: FaLayerGroup, color: "text-teal-400" },
      { name: "REST APIs", icon: MdOutlineStorage, color: "text-slate-300" },
      { name: "Docker", icon: FaLayerGroup, color: "text-blue-300" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    ],
  },
];

export const Skills = () => {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section id="skills" className="relative bg-black py-32 border-t border-white/10 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <span className="inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-green-400 mb-6 font-handwriting">
            Skills & capabilities
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Capability-driven
            <br />
            engineering systems
          </h2>

          <p className="mt-6 text-lg text-white/60">
            Not just tools — complete systems designed to scale.
          </p>
        </motion.div>

        {/* ===== CONTROL PANEL ===== */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* LEFT: SELECTOR */}
          <div className="relative space-y-2">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isActive = index === active;

              return (
                <motion.button
                  key={cap.title}
                  onClick={() => setActive(index)}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-full text-left rounded-xl px-5 py-4 border overflow-hidden
                    ${
                      isActive
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05]"
                    }
                  `}
                >
                  {/* Active glow bar */}
                  {isActive && (
                    <motion.span
                      layoutId="active-glow"
                      className={`absolute inset-y-0 left-0 w-1 bg-${cap.color}-400`}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <Icon className={`text-${cap.color}-400`} size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide opacity-60">
                        {cap.subtitle}
                      </p>
                      <p className="font-medium">{cap.title}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: DETAIL PANEL */}
         <AnimatePresence mode="wait">
  <motion.div
    key={current.title}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35 }}
    className="relative rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl"
  >
    {/* ================= VS CODE TOP BAR ================= */}
    <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#111]">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />

      <span className="ml-4 text-xs text-white/50 font-mono">
        {current.title.toLowerCase().replace(/\s/g, "-")}.tsx
      </span>
    </div>

    {/* ================= EDITOR BODY ================= */}
    <div className="grid grid-cols-[48px_1fr] font-mono text-sm">

      {/* GUTTER (LINE NUMBERS FEEL) */}
      <div className="py-6 px-3 text-white/30 text-right select-none">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="leading-6">{n}</div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="py-6 pr-6">

        {/* HEADER LINE */}
        <div className="flex items-center gap-3 mb-4">
          <current.icon
            className={`text-${current.color}-400`}
            size={18}
          />
          <span className="text-purple-400">export</span>
          <span className="text-cyan-400">const</span>
          <span className="text-yellow-300">
            {current.title.replace(/\s/g, "")}
          </span>
        </div>

        {/* DESCRIPTION AS COMMENT */}
        <p className="text-white/40 mb-8 leading-relaxed">
          <span className="text-green-400">//</span> {current.description}
        </p>

        {/* ================= TOOLS AS CODE BLOCK ================= */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {current.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-black px-4 py-2 text-xs text-white/80"
              >
                <Icon className={tool.color} size={14} />
                <span>{tool.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>

    {/* ================= CURSOR BLINK ================= */}
    <motion.div
      className="absolute bottom-6 left-24 h-4 w-[2px] bg-cyan-400"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.1, repeat: Infinity }}
    />
  </motion.div>
</AnimatePresence>

        </div>
      </div>
    </section>
  );
};
