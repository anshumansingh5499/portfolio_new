import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

/* ================= MAGNETIC BUTTON ================= */
function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.button
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ================= HERO ================= */
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const glow = useMotionTemplate`
    radial-gradient(420px at ${smoothX}px ${smoothY}px,
      rgba(56,189,248,0.10),
      transparent 70%)
  `;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const tiltY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleEditorMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set(-(y / rect.height - 0.5) * 8);
    rotateY.set((x / rect.width - 0.5) * 8);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const codeLines = [
    <>
      <span className="text-[#c792ea]">export default function</span>{" "}
      <span className="text-[#82aaff]">Developer</span>() {"{"}
    </>,
    <>
      {"  "}
      <span className="text-[#c792ea]">return</span> (
    </>,
    <>
      {"    "}
      <span className="text-[#89ddff]">&lt;section</span>{" "}
      <span className="text-[#82aaff]">className</span>
      <span className="text-[#89ddff]">=</span>
      <span className="text-[#ecc48d]">"ai-portfolio"</span>
      <span className="text-[#89ddff]">&gt;</span>
    </>,
    <>
      {"      "}
      <span className="text-[#89ddff]">&lt;h1&gt;</span>
      I'm Anshuman Singh
      <span className="text-[#89ddff]">&lt;/h1&gt;</span>
    </>,
    <>
      {"      "}
      <span className="text-[#89ddff]">&lt;h2&gt;</span>
      Frontend Engineer · Generative AI Developer
      <span className="text-[#89ddff]">&lt;/h2&gt;</span>
    </>,
    <>
      {"      "}
      <span className="text-[#89ddff]">&lt;p&gt;</span>
      Building AI powered applications with Python and LLMs
      <span className="text-[#89ddff]">&lt;/p&gt;</span>
    </>,
    <>
      {"      "}
      <span className="text-[#89ddff]">&lt;p&gt;</span>
      React · Next.js · LangChain · HuggingFace
      <span className="text-[#89ddff]">&lt;/p&gt;</span>
    </>,
    <>
      {"      "}
      <span className="text-[#89ddff]">&lt;p&gt;</span>
      AI Agents · RAG Systems · Automation
      <span className="text-[#89ddff]">&lt;/p&gt;</span>
    </>,
    <>
      {"    "}
      <span className="text-[#89ddff]">&lt;/section&gt;</span>
    </>,
    <>{"  "} );</>,
    <>{"}"} </>,
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) => (v < codeLines.length ? v + 1 : v));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-28 mt-[-60px]">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#060606]" />
      <motion.div className="absolute inset-0" style={{ background: glow }} />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center gap-14">
        {/* Headline */}
        <h1 className="text-[clamp(2.7rem,5vw,5.2rem)] leading-[1.05] font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Building intelligent
          <br />
          <span className="bg-white bg-clip-text text-transparent font-handwriting">
            AI-powered products
          </span>
        </h1>

        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-5 py-2.5 shadow-[0_0_60px_rgba(34,197,94,0.18)]"
        >
          <span className="text-sm font-medium text-white/80">
            Frontend Engineer · Generative AI Developer
          </span>

          <span className="h-4 w-px bg-white/20" />

          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-400/30">
            Open to work
          </span>
        </motion.div>

        {/* Editor */}
        <MagneticButton className="relative w-full flex justify-center">
          <motion.div
            onMouseMove={handleEditorMove}
            onMouseLeave={resetTilt}
            style={{ rotateX: tiltX, rotateY: tiltY }}
            className="w-full max-w-6xl rounded-2xl border border-white/10 bg-[#0b0b0c]/80 backdrop-blur-xl shadow-[0_80px_220px_rgba(0,0,0,0.85)] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-white/40">
                ai-portfolio.tsx
              </span>
            </div>

            <pre className="p-6 text-sm font-mono leading-relaxed whitespace-pre-wrap text-[#e5e7eb] max-h-[340px] overflow-hidden">
              <code>
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <span className="animate-pulse text-white/40">▍</span>
              </code>
            </pre>

            <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-black/40">
              <span className="text-xs text-white/40 font-mono">
                AI Runtime · portfolio
              </span>

              <div className="flex gap-3">
                <a href="#projects">
                  <MagneticButton className="rounded-md bg-emerald-500/90 px-4 py-1.5 text-xs font-mono text-black shadow-lg">
                    ▶ View Projects
                  </MagneticButton>
                </a>

                <a href="https://drive.google.com/file/d/1fvxwJD3-C-J0p6nBcLPvdLS7ZsRIp2g7/view">
                  <MagneticButton className="rounded-md border border-white/20 px-4 py-1.5 text-xs font-mono text-white hover:bg-white/5">
                    ⬇ Download CV
                  </MagneticButton>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute right-6 top-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-white/60 flex items-center gap-2"
          >
            <SiOpenai /> LLM Apps
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute left-6 bottom-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-white/60 flex items-center gap-2"
          >
            <FaReact /> AI Interfaces
          </motion.div>
        </MagneticButton>
      </div>

      {/* Social */}
      <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-4 text-white/50">
        <a
          href="https://www.linkedin.com/in/anshuman-singh7/"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tanujgrover9"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}