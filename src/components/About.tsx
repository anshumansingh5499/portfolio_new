import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiOpenai,
  SiPython,
  SiLangchain,
  SiHuggingface,
  SiFastapi,
  SiDocker,
  SiN8N,
} from "react-icons/si";

const stack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Redux / Zustand", icon: SiRedux, color: "text-purple-400" },

  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "LangChain", icon: SiLangchain, color: "text-green-400" },
  { name: "Hugging Face", icon: SiHuggingface, color: "text-orange-400" },
  { name: "OpenAI API", icon: SiOpenai, color: "text-emerald-400" },

  { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-300" },

  { name: "AI Agents", icon: SiOpenai, color: "text-indigo-400" },
  { name: "RAG Systems", icon: SiOpenai, color: "text-cyan-300" },
  { name: "Vector Databases", icon: SiOpenai, color: "text-violet-400" },

  { name: "AI Automation", icon: SiN8N, color: "text-orange-400" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ================= TERMINAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-[0_60px_160px_rgba(0,0,0,0.8)]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs text-white/50">
              AI Runtime — about.sh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm text-white/80 space-y-6">
            <TerminalLine command="whoami" />

            <TerminalOutput>
              Anshuman Singh — Frontend Engineer · Generative AI Developer
            </TerminalOutput>

            <TerminalLine command="cat about.txt" />

            <TerminalOutput>
              I build modern web applications and AI-powered systems that combine
              frontend engineering with intelligent automation. My focus is on
              creating scalable AI products using Python, LLM frameworks, and
              modern web technologies.
            </TerminalOutput>

            <TerminalLine command="ls tech-stack/" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pl-4">
              {stack.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-xs text-white/80">{name}</span>
                </motion.div>
              ))}
            </div>

            <TerminalLine command="cat ai_focus.md" />

            <TerminalOutput>
              Building intelligent systems including LLM applications,
              AI agents, retrieval-augmented generation (RAG) pipelines,
              and automation tools that improve productivity and decision making.
            </TerminalOutput>

            <TerminalLine command="exit" />

            <span className="text-emerald-400">✔ AI runtime completed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ================= TERMINAL COMPONENTS ================= */

const TerminalLine = ({ command }: { command: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex gap-2"
  >
    <span className="text-emerald-400">$</span>
    <span className="text-white">{command}</span>
  </motion.div>
);

const TerminalOutput = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="pl-6 text-white/60 leading-relaxed"
  >
    {children}
  </motion.p>
);