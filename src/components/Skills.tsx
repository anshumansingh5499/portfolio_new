/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaRobot, FaBrain, FaLayerGroup,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiFramer, SiGraphql,
  SiRedux, SiMaterialdesign, SiOpenai, SiN8N,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { MdOutlineStorage } from "react-icons/md";

/* ─── data ─── */
const CAPS = [
  {
    title: "Frontend Engineering",
    subtitle: "User-facing systems",
    tag: "frontend.tsx",
    color: "#22d3ee",
    icon: FaLayerGroup,
    description: "Designing high-performance interfaces and production-grade web applications with modern frontend architecture.",
    tools: [
      { name: "HTML",          icon: FaHtml5,          color: "#fb923c" },
      { name: "CSS",           icon: FaCss3Alt,         color: "#60a5fa" },
      { name: "JavaScript",    icon: FaJs,              color: "#facc15" },
      { name: "TypeScript",    icon: SiTypescript,      color: "#3b82f6" },
      { name: "React",         icon: FaReact,           color: "#22d3ee" },
      { name: "Tailwind",      icon: SiTailwindcss,     color: "#38bdf8" },
      { name: "Framer Motion", icon: SiFramer,          color: "#f472b6" },
      { name: "Material UI",   icon: SiMaterialdesign,  color: "#818cf8" },
    ],
  },
  {
    title: "State & Data Architecture",
    subtitle: "Application state",
    tag: "state.ts",
    color: "#a78bfa",
    icon: GiBearFace,
    description: "Managing scalable application state and predictable data flow for complex frontend systems.",
    tools: [
      { name: "Redux",       icon: SiRedux,           color: "#a78bfa" },
      { name: "Zustand",     icon: GiBearFace,        color: "#fbbf24" },
      { name: "Context API", icon: MdOutlineStorage,  color: "#cbd5e1" },
      { name: "GraphQL",     icon: SiGraphql,         color: "#ec4899" },
    ],
  },
  {
    title: "Generative AI Systems",
    subtitle: "LLM applications",
    tag: "ai_engine.py",
    color: "#34d399",
    icon: FaBrain,
    description: "Designing intelligent systems powered by large language models, retrieval pipelines, and AI agents.",
    tools: [
      { name: "Python",           icon: FaBrain,          color: "#facc15" },
      { name: "OpenAI API",       icon: SiOpenai,         color: "#34d399" },
      { name: "LangChain",        icon: FaBrain,          color: "#4ade80" },
      { name: "Hugging Face",     icon: FaBrain,          color: "#fb923c" },
      { name: "RAG Pipelines",    icon: FaBrain,          color: "#22d3ee" },
      { name: "Vector Databases", icon: MdOutlineStorage, color: "#c4b5fd" },
      { name: "AI Agents",        icon: FaRobot,          color: "#818cf8" },
    ],
  },
  {
    title: "AI Automation",
    subtitle: "Workflow intelligence",
    tag: "automation.ts",
    color: "#fb923c",
    icon: FaRobot,
    description: "Automating workflows and building AI-powered systems that integrate with APIs, tools, and business processes.",
    tools: [
      { name: "n8n",               icon: SiN8N,    color: "#fb923c" },
      { name: "AI Workflow Bots",  icon: FaRobot,  color: "#f87171" },
      { name: "Prompt Engineering",icon: FaBrain,  color: "#4ade80" },
      { name: "LLM Integrations",  icon: SiOpenai, color: "#34d399" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    subtitle: "AI application runtime",
    tag: "server.py",
    color: "#fb923c",
    icon: MdOutlineStorage,
    description: "Building backend services and infrastructure that power AI applications and scalable APIs.",
    tools: [
      { name: "FastAPI",   icon: FaLayerGroup,     color: "#2dd4bf" },
      { name: "REST APIs", icon: MdOutlineStorage, color: "#cbd5e1" },
      { name: "Docker",    icon: FaLayerGroup,     color: "#93c5fd" },
      { name: "Git",       icon: FaGitAlt,         color: "#fb923c" },
    ],
  },
];

/* ════════════════════════════════════
   SKILLS SECTION
   ════════════════════════════════════ */
export const Skills = () => {
  const [active, setActive] = useState(0);
  const cur = CAPS[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .sk-section *,
        .sk-section *::before,
        .sk-section *::after { box-sizing: border-box; }

        .sk-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* eyebrow */
        .sk-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; color: #7b61ff;
          text-transform: uppercase; display: flex; align-items: center; gap: 12px;
          margin-bottom: 14px;
        }
        .sk-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; flex-shrink: 0; display: inline-block; }

        .sk-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em; color: #f0eeff;
          line-height: 1; margin: 0 0 10px;
        }
        .sk-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(240,238,255,0.35); line-height: 1.8;
          margin: 0 0 52px; max-width: 440px;
        }

        /* ── editor shell ── */
        .sk-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
          display: grid;
          grid-template-rows: 42px 1fr 26px;
          height: 580px;
        }
        @media(max-width:767px){ .sk-shell { height: auto; min-height: 560px; } }

        /* title bar */
        .sk-titlebar {
          background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 16px; gap: 0;
        }
        .sk-lights { display: flex; gap: 7px; margin-right: 20px; flex-shrink: 0; }
        .sk-tl { width: 12px; height: 12px; border-radius: 50%; }
        .sk-tabs { display: flex; align-items: stretch; flex: 1; overflow: hidden; }
        .sk-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 16px; height: 42px;
          display: flex; align-items: center; gap: 7px;
          position: relative; transition: background 0.2s, color 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .sk-tab.active { background: rgba(123,97,255,0.08); color: #f0eeff; }
        .sk-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
        }
        .sk-tab-pip { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.15); flex-shrink: 0; }
        .sk-tab.active .sk-tab-pip { background: #7b61ff; }

        /* body */
        .sk-body { display: flex; overflow: hidden; min-height: 0; }

        /* ── left: capability selector ── */
        .sk-selector {
          width: 240px; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex; flex-direction: column;
          overflow: hidden;
        }
        .sk-sel-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          padding: 14px 14px 10px;
        }
        .sk-sel-item {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          padding: 10px 14px;
          display: flex; align-items: center; gap: 10px;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          cursor: pointer; position: relative;
        }
        .sk-sel-item:hover { background: rgba(255,255,255,0.025); color: #f0eeff; }
        .sk-sel-item.active { color: #f0eeff; background: rgba(123,97,255,0.07); }
        .sk-sel-num {
          font-size: 9px; color: rgba(255,255,255,0.18);
          flex-shrink: 0; width: 18px; text-align: right;
          font-family: 'JetBrains Mono', monospace;
        }
        .sk-sel-item.active .sk-sel-num { color: rgba(123,97,255,0.6); }
        .sk-sel-sub {
          font-size: 9px; color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em; text-transform: uppercase;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .sk-sel-name {
          font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          line-height: 1.3;
        }

        /* ── right: detail panel ── */
        .sk-detail {
          flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;
        }

        /* breadcrumb */
        .sk-breadcrumb {
          height: 30px; background: #0a0a14;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; padding: 0 20px; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(255,255,255,0.2); flex-shrink: 0;
        }
        .sk-bc-sep { color: rgba(255,255,255,0.1); }
        .sk-bc-active { color: rgba(240,238,255,0.5); }

        /* code area */
        .sk-code-wrap {
          flex: 1; display: flex; overflow: hidden; min-height: 0;
        }
        .sk-gutter {
          width: 44px; padding: 20px 0; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .sk-gutter span {
          display: block; font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 2;
          color: rgba(255,255,255,0.1); text-align: right;
          padding-right: 10px; user-select: none;
        }
        .sk-lines { flex: 1; padding: 20px 24px; overflow: hidden; min-width: 0; }

        /* code tokens */
        .sk-kw   { color: #c792ea; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .sk-fn   { color: #82aaff; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .sk-cm   { color: rgba(255,255,255,0.25); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-style: italic; }
        .sk-str  { color: #c3e88d; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .sk-plain{ color: #cdd3de; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .sk-line { line-height: 2; white-space: nowrap; overflow: hidden; }

        /* tool chips */
        .sk-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .sk-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.55);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }
        .sk-chip:hover {
          border-color: rgba(123,97,255,0.4);
          background: rgba(123,97,255,0.07);
          transform: translateY(-2px);
          color: #f0eeff;
        }

        /* cursor blink */
        .sk-cursor {
          display: inline-block; width: 2px; height: 14px;
          background: #00e5ff; vertical-align: middle; margin-left: 2px;
          animation: skBlink 1s step-end infinite;
        }

        /* status bar */
        .sk-status {
          background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; padding: 0 14px; gap: 16px;
        }
        .sk-st {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .sk-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          animation: skPls 2.5s ease-in-out infinite;
        }

        /* mobile: collapse selector to top tab row */
        @media(max-width:767px){
          .sk-selector { width: 100%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); }
          .sk-body { flex-direction: column; }
          .sk-sel-item { padding: 8px 12px; }
          .sk-sel-sub { display: none; }
        }

        @keyframes skBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes skPls   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes skOrb   { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,-50px)} }
      `}</style>

      <section
        id="skills"
        className="sk-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div className="sk-bg-grid" />

        {/* ambient orb — active color */}
        <motion.div
          style={{
            position: "absolute", borderRadius: "50%",
            filter: "blur(100px)", pointerEvents: "none",
            width: 380, height: 380, opacity: 0.12,
            top: "20%", right: "5%",
            animation: "skOrb 18s ease-in-out infinite",
          }}
          animate={{ backgroundColor: cur.color }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)",
          pointerEvents: "none",
          width: 300, height: 300, background: "rgba(123,97,255,0.07)",
          bottom: -40, left: "5%",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 48 }}
          >
            <div className="sk-eyebrow">
              <span className="sk-eyebrow-line" />
              Skills &amp; Capabilities
            </div>
            <h2 className="sk-heading">
              Capability-Driven<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                Engineering Systems
              </span>
            </h2>
            <p className="sk-sub">Not just tools — complete systems designed to scale.</p>
          </motion.div>

          {/* editor shell */}
          <motion.div
            className="sk-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="sk-titlebar">
              <div className="sk-lights">
                <div className="sk-tl" style={{ background: "#ff5f57" }} />
                <div className="sk-tl" style={{ background: "#febc2e" }} />
                <div className="sk-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="sk-tabs">
                <div className="sk-tab active">
                  <span className="sk-tab-pip" />
                  {cur.tag}
                </div>
                <div className="sk-tab">
                  <span className="sk-tab-pip" />
                  index.ts
                </div>
              </div>
              <div style={{
                marginLeft: "auto", padding: "0 16px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, color: "rgba(255,255,255,0.13)",
                display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
              }}>
                <span>TSX</span><span>UTF-8</span>
              </div>
            </div>

            {/* body */}
            <div className="sk-body">

              {/* selector */}
              <div className="sk-selector">
                <div className="sk-sel-title">Capabilities</div>
                {CAPS.map((cap, i) => {
                  const Icon = cap.icon;
                  const isA = i === active;
                  return (
                    <div
                      key={i}
                      className={`sk-sel-item${isA ? " active" : ""}`}
                      style={{ borderLeftColor: isA ? cap.color : "transparent" }}
                      onClick={() => setActive(i)}
                    >
                      <span className="sk-sel-num">{String(i + 1).padStart(2, "0")}</span>
                      <Icon style={{ color: isA ? cap.color : "rgba(255,255,255,0.2)", width: 14, height: 14, flexShrink: 0 }} />
                      <div style={{ overflow: "hidden", minWidth: 0 }}>
                        <div className="sk-sel-sub">{cap.subtitle}</div>
                        <div className="sk-sel-name">{cap.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* detail */}
              <div className="sk-detail">

                {/* breadcrumb */}
                <div className="sk-breadcrumb">
                  <span>src</span>
                  <span className="sk-bc-sep">/</span>
                  <span>skills</span>
                  <span className="sk-bc-sep">/</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={cur.tag}
                      className="sk-bc-active"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                    >
                      {cur.tag}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* code area */}
                <div className="sk-code-wrap">
                  <div className="sk-gutter">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  <div className="sk-lines">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={cur.title}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.28 }}
                      >
                        {/* line 1: comment */}
                        <div className="sk-line">
                          <span className="sk-cm">// {cur.subtitle} — {cur.title}</span>
                        </div>

                        {/* line 2: blank */}
                        <div className="sk-line">&nbsp;</div>

                        {/* line 3: export const ... */}
                        <div className="sk-line">
                          <span className="sk-kw">export const </span>
                          <span className="sk-fn">{cur.title.replace(/\s+/g, "")}</span>
                          <span className="sk-plain"> = () =&gt; {"{"}</span>
                        </div>

                        {/* line 4: description comment */}
                        <div className="sk-line">
                          <span className="sk-cm" style={{ paddingLeft: 20 }}>
                            {"  "}// {cur.description}
                          </span>
                        </div>

                        {/* line 5: blank */}
                        <div className="sk-line">&nbsp;</div>

                        {/* line 6: return tools */}
                        <div className="sk-line">
                          <span className="sk-plain">{"  "}</span>
                          <span className="sk-kw">return </span>
                          <span className="sk-plain">[</span>
                          <span className="sk-cursor" />
                        </div>

                        {/* tool chips */}
                        <div className="sk-chips">
                          {cur.tools.map((tool, ti) => {
                            const Icon = tool.icon;
                            return (
                              <motion.div
                                key={tool.name}
                                className="sk-chip"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: ti * 0.05 }}
                              >
                                <Icon style={{ color: tool.color, width: 14, height: 14, flexShrink: 0 }} />
                                <span>{tool.name}</span>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* closing */}
                        <div className="sk-line" style={{ marginTop: 14 }}>
                          <span className="sk-plain">  ]</span>
                        </div>
                        <div className="sk-line">
                          <span className="sk-plain">{"}"}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="sk-status">
              <span className="sk-st">
                <span className="sk-st-dot" style={{ background: cur.color }} />
                {cur.tag}
              </span>
              <span className="sk-st">TypeScript 5.3</span>
              <span className="sk-st" style={{ marginLeft: "auto" }}>
                {cur.tools.length} tools · cap {active + 1}/{CAPS.length}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};