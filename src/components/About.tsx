import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiTypescript, SiTailwindcss, SiFramer, SiRedux,
  SiOpenai, SiPython, SiLangchain, SiHuggingface, SiFastapi,
  SiDocker, SiN8N,
} from "react-icons/si";

/* ─── stack data ─── */
const STACK = [
  { name: "React",           icon: SiReact,       color: "#22d3ee" },
  { name: "TypeScript",      icon: SiTypescript,  color: "#60a5fa" },
  { name: "Tailwind CSS",    icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Framer Motion",   icon: SiFramer,      color: "#f472b6" },
  { name: "Redux / Zustand", icon: SiRedux,       color: "#a78bfa" },
  { name: "Python",          icon: SiPython,      color: "#facc15" },
  { name: "LangChain",       icon: SiLangchain,   color: "#4ade80" },
  { name: "Hugging Face",    icon: SiHuggingface, color: "#fb923c" },
  { name: "OpenAI API",      icon: SiOpenai,      color: "#34d399" },
  { name: "FastAPI",         icon: SiFastapi,     color: "#2dd4bf" },
  { name: "Docker",          icon: SiDocker,      color: "#93c5fd" },
  { name: "AI Agents",       icon: SiOpenai,      color: "#818cf8" },
  { name: "RAG Systems",     icon: SiOpenai,      color: "#67e8f9" },
  { name: "Vector DBs",      icon: SiOpenai,      color: "#c4b5fd" },
  { name: "AI Automation",   icon: SiN8N,         color: "#fb923c" },
];

/* ─── terminal command lines ─── */
const COMMANDS = [
  {
    cmd: "whoami",
    output: "Anshuman Singh — Frontend Engineer · Generative AI Developer",
    type: "text",
  },
  {
    cmd: "cat about.txt",
    output:
      "I build modern web apps and AI-powered systems that combine frontend engineering with intelligent automation. Focused on scalable AI products using Python, LLM frameworks, and modern web tech.",
    type: "text",
  },
  {
    cmd: "ls tech-stack/",
    output: null,
    type: "grid",
  },
  {
    cmd: "cat ai_focus.md",
    output:
      "Building intelligent systems including LLM applications, AI agents, RAG pipelines, and automation tools that improve productivity and decision making.",
    type: "text",
  },
  {
    cmd: "exit",
    output: "✔ AI runtime completed",
    type: "exit",
  },
];

/* ════════════════════════════════════════
   ABOUT SECTION
   ════════════════════════════════════════ */
export const About = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef, { once: true, margin: "-80px" });
  const [visibleCmd, setVisibleCmd] = useState(0);

  /* reveal commands one-by-one after section enters view */
  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleCmd(i);
      if (i >= COMMANDS.length) clearInterval(id);
    }, 520);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .about-section *,
        .about-section *::before,
        .about-section *::after { box-sizing: border-box; }

        /* ── shell chrome ── */
        .ab-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
        }

        /* ── title bar ── */
        .ab-titlebar {
          height: 42px;
          background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 16px;
        }
        .ab-lights { display: flex; gap: 7px; flex-shrink: 0; }
        .ab-tl { width: 12px; height: 12px; border-radius: 50%; }

        /* ── section heading ── */
        .ab-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em;
          color: #7b61ff; text-transform: uppercase;
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }
        .ab-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; display: inline-block; flex-shrink: 0; }
        .ab-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em;
          color: #f0eeff;
          margin: 0 0 48px;
          line-height: 1;
        }

        /* ── terminal body ── */
        .ab-body {
          padding: 28px 28px 32px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: rgba(240,238,255,0.75);
          background: #0b0b16;
        }
        @media(max-width:640px){ .ab-body { padding: 20px 16px 24px; font-size: 12px; } }

        /* ── prompt line ── */
        .ab-prompt {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 6px;
        }
        .ab-ps1 {
          font-size: 11px; color: #39ff7a;
          display: flex; align-items: center; gap: 6px;
          flex-shrink: 0;
        }
        .ab-ps1-path { color: #7b61ff; }
        .ab-cmd { color: #f0eeff; }

        /* ── output text ── */
        .ab-output {
          margin: 0 0 20px;
          padding-left: 24px;
          color: rgba(240,238,255,0.45);
          line-height: 1.8;
          border-left: 1px solid rgba(255,255,255,0.05);
          margin-left: 4px;
        }

        /* ── stack grid ── */
        .ab-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 8px;
          margin: 10px 0 24px;
          padding-left: 0;
        }
        @media(max-width:480px){ .ab-grid { grid-template-columns: 1fr 1fr; } }

        .ab-chip {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .ab-chip:hover {
          border-color: rgba(123,97,255,0.4);
          background: rgba(123,97,255,0.07);
          transform: translateY(-3px);
        }
        .ab-chip-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: rgba(240,238,255,0.65);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ── exit line ── */
        .ab-exit { color: #39ff7a; margin-top: 4px; }

        /* ── status bar ── */
        .ab-statusbar {
          height: 26px;
          background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center;
          padding: 0 14px; gap: 16px;
        }
        .ab-st {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: rgba(255,255,255,0.18);
          white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .ab-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #39ff7a;
          animation: abPls 2.5s ease-in-out infinite;
        }

        /* ── cursor blink ── */
        .ab-cursor {
          display: inline-block; width: 7px; height: 13px;
          background: #00e5ff; vertical-align: middle;
          margin-left: 3px;
          animation: abBlink 1s step-end infinite;
        }

        /* ── bg decorations ── */
        .ab-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        @keyframes abPls  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes abBlink{ 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes abOrb  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="about-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {/* bg grid */}
        <div className="ab-bg-grid" />

        {/* ambient orbs */}
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(100px)",
          pointerEvents: "none",
          width: 500, height: 500,
          background: "rgba(0,229,255,0.05)",
          top: -100, left: "50%", transform: "translateX(-50%)",
          animation: "abOrb 16s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)",
          pointerEvents: "none",
          width: 300, height: 300,
          background: "rgba(123,97,255,0.06)",
          bottom: -60, right: "10%",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

          {/* ── section label ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              About Me
            </div>
            <h2 className="ab-heading">
              The Dev<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                Behind the Code
              </span>
            </h2>
          </motion.div>

          {/* ── terminal shell ── */}
          <motion.div
            className="ab-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="ab-titlebar">
              <div className="ab-lights">
                <div className="ab-tl" style={{ background: "#ff5f57" }} />
                <div className="ab-tl" style={{ background: "#febc2e" }} />
                <div className="ab-tl" style={{ background: "#28c840" }} />
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: "rgba(255,255,255,0.25)",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ color: "#7b61ff" }}>~/portfolio</span>
                <span style={{ color: "rgba(255,255,255,0.12)" }}>—</span>
                about.sh
              </div>
              {/* right side meta */}
              <div style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.12)" }}>
                bash · zsh
              </div>
            </div>

            {/* terminal body */}
            <div className="ab-body">
              {COMMANDS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={idx < visibleCmd ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* prompt */}
                  <div className="ab-prompt">
                    <span className="ab-ps1">
                      <span style={{ color: "#39ff7a" }}>anshuman</span>
                      <span style={{ color: "rgba(255,255,255,0.2)" }}>@</span>
                      <span className="ab-ps1-path">portfolio</span>
                      <span style={{ color: "rgba(255,255,255,0.2)" }}>$</span>
                    </span>
                    <span className="ab-cmd">{item.cmd}</span>
                    {/* blinking cursor on last revealed command */}
                    {idx === visibleCmd - 1 && idx < COMMANDS.length - 1 && (
                      <span className="ab-cursor" />
                    )}
                  </div>

                  {/* output */}
                  {item.type === "text" && item.output && (
                    <p className="ab-output">{item.output}</p>
                  )}

                  {item.type === "grid" && (
                    <div className="ab-grid">
                      {STACK.map(({ name, icon: Icon, color }, si) => (
                        <motion.div
                          key={name}
                          className="ab-chip"
                          initial={{ opacity: 0, y: 8 }}
                          animate={idx < visibleCmd ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: 0.3, delay: si * 0.04 }}
                        >
                          <Icon style={{ width: 16, height: 16, color, flexShrink: 0 }} />
                          <span className="ab-chip-name">{name}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {item.type === "exit" && (
                    <p className="ab-exit">{item.output}</p>
                  )}
                </motion.div>
              ))}

              {/* idle cursor at end */}
              {visibleCmd >= COMMANDS.length && (
                <div className="ab-prompt" style={{ marginTop: 8 }}>
                  <span className="ab-ps1">
                    <span style={{ color: "#39ff7a" }}>anshuman</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>@</span>
                    <span className="ab-ps1-path">portfolio</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>$</span>
                  </span>
                  <span className="ab-cursor" />
                </div>
              )}
            </div>

            {/* status bar */}
            <div className="ab-statusbar">
              <span className="ab-st">
                <span className="ab-st-dot" />
                bash
              </span>
              <span className="ab-st">about.sh</span>
              <span className="ab-st" style={{ marginLeft: "auto" }}>
                {STACK.length} technologies
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/* ── sub-components (kept for compatibility) ── */
export const TerminalLine = ({ command }: { command: string }) => (
  <div style={{ display: "flex", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
    <span style={{ color: "#39ff7a" }}>$</span>
    <span style={{ color: "#f0eeff" }}>{command}</span>
  </div>
);

export const TerminalOutput = ({ children }: { children: React.ReactNode }) => (
  <p style={{ paddingLeft: 24, color: "rgba(240,238,255,0.45)", lineHeight: 1.8, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
    {children}
  </p>
);