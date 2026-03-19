/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Download,  } from "lucide-react";

/* ─────────────────────────────────────────
   REPLACE THIS with your real Google Drive
   shareable link before going live.
───────────────────────────────────────── */
const CV_LINK =
  "https://drive.google.com/file/d/1zt7ixrScP_GgHhT_Jv7uJIWKmzUi96bd/view?usp=sharing";

/* ─── file types ─── */
type FileKey = "Hero.tsx" | "Projects.tsx" | "Skills.json";

/* ─── syntax colors ─── */
const SYN: Record<string, string> = {
  kw:   "#c792ea",
  fn:   "#82aaff",
  str:  "#c3e88d",
  cm:   "rgba(255,255,255,0.26)",
  op:   "#00e5ff",
  ty:   "#ffcb6b",
  prop: "#80cbc4",
  "":   "#cdd3de",
};

/* ─── file content ─── */
const FILES: Record<FileKey, { lines: { t: string; v: string }[][] }> = {
  "Hero.tsx": {
    lines: [
      [{ t: "cm", v: "// developer.tsx — AI Systems Engineer" }],
      [],
      [{ t: "kw", v: "import " }, { t: "fn", v: "{ useState }" }, { t: "kw", v: " from " }, { t: "str", v: "'react'" }],
      [{ t: "kw", v: "import " }, { t: "fn", v: "{ AIEngine }" }, { t: "kw", v: " from " }, { t: "str", v: "'./engine'" }],
      [],
      [{ t: "kw", v: "const " }, { t: "fn", v: "Developer" }, { t: "op", v: " = () => {" }],
      [{ t: "kw", v: "  const " }, { t: "", v: "[model] = " }, { t: "fn", v: "useState" }, { t: "str", v: "('gpt-4-turbo')" }],
      [],
      [{ t: "cm", v: "  // Build intelligent systems" }],
      [{ t: "kw", v: "  return " }, { t: "", v: "(" }],
      [{ t: "", v: "    <" }, { t: "fn", v: "AIEngine" }, { t: "", v: " model={model}>" }],
      [{ t: "str", v: '      "Frontend + AI = Pure Magic"' }],
      [{ t: "", v: "    </" }, { t: "fn", v: "AIEngine" }, { t: "", v: ">" }],
      [{ t: "", v: "  )" }],
      [{ t: "", v: "}" }],
      [],
      [{ t: "kw", v: "export default " }, { t: "fn", v: "Developer" }],
    ],
  },
  "Projects.tsx": {
    lines: [
      [{ t: "cm", v: "// projects.ts — Featured work" }],
      [],
      [{ t: "kw", v: "const " }, { t: "fn", v: "projects" }, { t: "op", v: ": Project[] = [" }],
      [{ t: "", v: "  {" }],
      [{ t: "", v: "    name: " }, { t: "str", v: "'RAG System'" }, { t: "", v: "," }],
      [{ t: "", v: "    stack: [" }, { t: "str", v: "'LangChain'" }, { t: "", v: ", " }, { t: "str", v: "'ChromaDB'" }, { t: "", v: "]," }],
      [{ t: "", v: "    impact: " }, { t: "str", v: "'92% accuracy'" }, { t: "", v: "," }],
      [{ t: "", v: "  }," }],
      [{ t: "", v: "  {" }],
      [{ t: "", v: "    name: " }, { t: "str", v: "'AI Medical Triage'" }, { t: "", v: "," }],
      [{ t: "", v: "    stack: [" }, { t: "str", v: "'LangChain'" }, { t: "", v: ", " }, { t: "str", v: "'FastAPI'" }, { t: "", v: "]," }],
      [{ t: "", v: "    impact: " }, { t: "str", v: "'symptom triage'" }, { t: "", v: "," }],
      [{ t: "", v: "  }," }],
      [{ t: "", v: "  {" }],
      [{ t: "", v: "    name: " }, { t: "str", v: "'Profind'" }, { t: "", v: "," }],
      [{ t: "", v: "    stack: [" }, { t: "str", v: "'FastAPI'" }, { t: "", v: ", " }, { t: "str", v: "'GPT-4'" }, { t: "", v: "]," }],
      [{ t: "", v: "    impact: " }, { t: "str", v: "'job discovery'" }, { t: "", v: "," }],
      [{ t: "", v: "  }" }],
      [{ t: "", v: "]" }],
    ],
  },
  "Skills.json": {
    lines: [
      [{ t: "cm", v: "// skills.json — Full stack" }],
      [],
      [{ t: "", v: "{" }],
      [{ t: "str", v: '  "frontend"' }, { t: "", v: ": [" }],
      [{ t: "str", v: '    "React"' }, { t: "", v: ", " }, { t: "str", v: '"Next.js"' }, { t: "", v: ", " }, { t: "str", v: '"Tailwind"' }],
      [{ t: "", v: "  ]," }],
      [{ t: "str", v: '  "ai_ml"' }, { t: "", v: ": [" }],
      [{ t: "str", v: '    "LangChain"' }, { t: "", v: ", " }, { t: "str", v: '"HuggingFace"' }],
      [{ t: "str", v: '    "ChromaDB"' }, { t: "", v: ", " }, { t: "str", v: '"OpenAI"' }],
      [{ t: "", v: "  ]," }],
      [{ t: "str", v: '  "backend"' }, { t: "", v: ": [" }],
      [{ t: "str", v: '    "Python"' }, { t: "", v: ", " }, { t: "str", v: '"FastAPI"' }],
      [{ t: "str", v: '    "PostgreSQL"' }, { t: "", v: ", " }, { t: "str", v: '"Docker"' }],
      [{ t: "", v: "  ]," }],
      [{ t: "str", v: '  "experience"' }, { t: "", v: ": " }, { t: "str", v: '"1 year"' }],
      [{ t: "", v: "}" }],
    ],
  },
};

const SKILL_CHIPS = [
  "⚛ React", "▲ Next.js", "🐍 Python", "⚡ FastAPI",
  "🔗 LangChain", "🤗 HuggingFace", "🗄 ChromaDB", "🎨 Tailwind",
];

const FILE_KEYS = Object.keys(FILES) as FileKey[];

/* ════════════════════════════════════════
   HERO
   ════════════════════════════════════════ */
export default function Hero() {
  const [activeFile,    setActiveFile]   = useState<FileKey>("Hero.tsx");
  const [visibleLines,  setVisibleLines] = useState(0);
  const [clock,         setClock]        = useState("");
  const [isMobile,      setIsMobile]     = useState(false);
  const [showEditor,    setShowEditor]   = useState(false);

  /* cursor (desktop only) */
  const cx = useMotionValue(-200);
  const cy = useMotionValue(-200);
  const sx = useSpring(cx, { stiffness: 120, damping: 20 });
  const sy = useSpring(cy, { stiffness: 120, damping: 20 });

  /* responsive */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* clock */
  useEffect(() => {
    const t = () => setClock(new Date().toLocaleTimeString("en", { hour12: false }));
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  /* cursor tracking */
  useEffect(() => {
    if (isMobile) return;
    const fn = (e: MouseEvent) => { cx.set(e.clientX); cy.set(e.clientY); };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [isMobile, cx, cy]);

  /* line reveal */
  useEffect(() => {
    setVisibleLines(0);
    const total = FILES[activeFile].lines.length;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= total) clearInterval(id);
    }, 48);
    return () => clearInterval(id);
  }, [activeFile]);

  /* auto-cycle */
  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      idx = (idx + 1) % FILE_KEYS.length;
      setActiveFile(FILE_KEYS[idx]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const lines = FILES[activeFile].lines;

  /* scroll to projects section */
  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        html, body {
          margin: 0; padding: 0;
          max-width: 100vw; overflow-x: hidden;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
        *, *::before, *::after { box-sizing: border-box; }

        .hr-root {
          width: 100%; max-width: 100vw;
          overflow: hidden;
          background: #080810;
          position: relative;
        }
        @media(min-width:768px){
          .hr-root { cursor: none; }
          .hr-root * { cursor: none !important; }
        }

        /* backgrounds */
        .hr-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .hr-scan {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px
          );
        }

        /* h1 */
        .hr-h1 {
          font-family: 'Syne', sans-serif; font-weight: 800;
          line-height: 0.92; letter-spacing: -0.03em; color: #f0eeff;
          font-size: clamp(36px, 5.2vw, 78px);
          margin: 0;
        }
        .hr-h1-out {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(240,238,255,0.22);
        }

        /* ── PRIMARY button — arrow style ── */
        .hr-btn-projects {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #f0eeff;
          background: transparent;
          border: 1px solid rgba(240,238,255,0.25);
          padding: 13px 22px;
          display: inline-flex; align-items: center; gap: 10px;
          position: relative; overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
          white-space: nowrap; flex-shrink: 0;
        }
        .hr-btn-projects::before {
          content: '';
          position: absolute; inset: 0;
          background: #7b61ff;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
        }
        .hr-btn-projects:hover::before { transform: translateX(0); }
        .hr-btn-projects:hover { border-color: #7b61ff; color: #fff; }
        .hr-btn-projects > * { position: relative; z-index: 1; }

        /* ── CV button — filled white → purple ── */
        .hr-btn-cv {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #080810;
          background: #f0eeff;
          border: 1px solid #f0eeff;
          padding: 13px 20px;
          display: inline-flex; align-items: center; gap: 9px;
          position: relative; overflow: hidden;
          transition: color 0.3s;
          white-space: nowrap; flex-shrink: 0;
          text-decoration: none;
        }
        .hr-btn-cv::before {
          content: '';
          position: absolute; inset: 0;
          background: #7b61ff;
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
        }
        .hr-btn-cv:hover::before { transform: translateX(0); }
        .hr-btn-cv:hover { color: #fff; }
        .hr-btn-cv > * { position: relative; z-index: 1; }

        /* social */
        .hr-social {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.18em;
          color: rgba(240,238,255,0.18);
          text-decoration: none; text-transform: uppercase;
          transition: color 0.2s, letter-spacing 0.2s;
        }
        .hr-social:hover { color: #00e5ff; letter-spacing: 0.24em; }

        /* editor tabs */
        .hr-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.07);
          padding: 0 14px; height: 100%;
          display: flex; align-items: center; gap: 6px;
          position: relative; transition: background 0.2s, color 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .hr-tab:hover { background: rgba(255,255,255,0.025); color: #f0eeff; }
        .hr-tab.active { background: rgba(123,97,255,0.07); color: #f0eeff; }
        .hr-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #7b61ff;
        }

        /* skill chips */
        .hr-chip {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.06em; color: rgba(240,238,255,0.35);
          padding: 5px 10px; border: 1px solid rgba(255,255,255,0.07);
          white-space: nowrap; flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .hr-chip:hover { color: #fff; border-color: #7b61ff; background: rgba(123,97,255,0.1); }

        /* mobile toggle */
        .hr-mob-toggle {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(240,238,255,0.4);
          background: rgba(123,97,255,0.07);
          border: none; border-top: 1px solid rgba(123,97,255,0.15);
          padding: 12px 16px; width: 100%;
          transition: background 0.2s, color 0.2s;
        }
        .hr-mob-toggle:hover { background: rgba(123,97,255,0.14); color: #f0eeff; }

        @keyframes hrOrb1  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,60px) scale(1.05)} }
        @keyframes hrOrb2  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,-45px)} }
        @keyframes hrPls   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes hrScroll{ 0%{top:-100%} 100%{top:100%} }
        @keyframes hrBlink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* ── cursor (desktop) ── */}
      {!isMobile && (
        <>
          <motion.div
            className="fixed z-[9998] pointer-events-none rounded-full"
            style={{ width:38, height:38, border:"1px solid rgba(123,97,255,0.55)", x:sx, y:sy, translateX:"-50%", translateY:"-50%" }}
          />
          <motion.div
            className="fixed z-[9999] pointer-events-none rounded-full mix-blend-difference"
            style={{ width:10, height:10, background:"#00e5ff", x:cx, y:cy, translateX:"-50%", translateY:"-50%" }}
          />
        </>
      )}

      {/* ═══ ROOT ═══ */}
      <section
        className="hr-root"
        style={{ minHeight:"100vh", display:"flex", flexDirection:"column", fontFamily:"'Syne',sans-serif" }}
      >
        <div className="hr-dots" />
        <div className="hr-scan" />

        {/* orbs */}
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none", zIndex:0, width:400, height:400, background:"rgba(123,97,255,0.09)", top:-120, left:-100, animation:"hrOrb1 14s ease-in-out infinite" }} />
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none", zIndex:0, width:300, height:300, background:"rgba(0,229,255,0.05)", bottom:-60, right:"18%", animation:"hrOrb2 18s ease-in-out infinite" }} />

        {/* ═══ GRID ═══ */}
        <div style={{ flex:1, display:"grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", position:"relative", zIndex:10, width:"100%" }}>

          {/* ══ LEFT ══ */}
          <div style={{
            display:"flex", flexDirection:"column", justifyContent:"space-between",
            padding: isMobile ? "28px 20px 32px" : "44px 48px 44px 60px",
            borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.06)" : "none",
            position:"relative", overflow:"hidden",
            minHeight: isMobile ? "auto" : "100vh",
            gap: isMobile ? 32 : 0,
          }}>

            {/* top bar */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1 }}
                style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:13, letterSpacing:"0.22em", color:"rgba(240,238,255,0.35)", textTransform:"uppercase", display:"flex", alignItems:"center", gap:6 }}>
                Portfolio
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#7b61ff", display:"inline-block", animation:"hrPls 2s ease-in-out infinite" }} />
              </motion.div>

              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}
                style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.12em", color:"#39ff7a", display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#39ff7a", animation:"hrPls 2s ease-in-out infinite" }} />
                Available for work
              </motion.div>
            </div>

            {/* ghost counter — desktop */}
            {!isMobile && (
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
                style={{ position:"absolute", top:44, right:48, textAlign:"right", pointerEvents:"none" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:88, lineHeight:1, color:"transparent", WebkitTextStroke:"1px rgba(123,97,255,0.15)", userSelect:"none" }}>03</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.25em", color:"rgba(240,238,255,0.15)", textTransform:"uppercase", marginTop:4 }}>AI Projects shipped</div>
              </motion.div>
            )}

            {/* headline */}
            <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding: isMobile ? "8px 0" : "0" }}>
              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15, duration:0.7, ease:[0.16,1,0.3,1] }}
                style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:"0.2em", color:"#7b61ff", textTransform:"uppercase", marginBottom:22, display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ width:28, height:1, background:"#7b61ff", flexShrink:0, display:"inline-block" }} />
                Frontend &amp; AI Engineer
              </motion.div>

              <div className="hr-h1" style={{ marginBottom:24, overflow:"hidden" }}>
                {["Frontend", "Developer", "& AI Eng."].map((w, i) => (
                  <div key={w} style={{ overflow:"hidden", display:"block" }}>
                    <motion.span style={{ display:"block" }} className={i === 1 ? "hr-h1-out" : ""}
                      initial={{ y:"110%" }} animate={{ y:0 }}
                      transition={{ delay:0.2 + i * 0.14, duration:0.9, ease:[0.16,1,0.3,1] }}>
                      {w}
                    </motion.span>
                  </div>
                ))}
              </div>

              <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.65, duration:0.8, ease:[0.16,1,0.3,1] }}
                style={{ fontFamily:"'JetBrains Mono',monospace", fontSize: isMobile ? 11 : 12, lineHeight:1.9, color:"rgba(240,238,255,0.35)", maxWidth:340, margin:0 }}>
                Building intelligent systems at the intersection<br />
                of modern design and machine learning.<br />
                React · LangChain · FastAPI · ChromaDB.
              </motion.p>

              {/* ── CTA ROW ── */}
              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8, duration:0.8, ease:[0.16,1,0.3,1] }}
                style={{ display:"flex", alignItems:"center", gap:14, marginTop:32, flexWrap:"wrap" }}>

                {/* Projects button — outlined with arrow icon */}
                <button className="hr-btn-projects" onClick={scrollToProjects}>
                  <span>Projects</span>
                  <ArrowUpRight size={14} />
                </button>

                {/* Download CV — opens Google Drive in new tab */}
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="hr-btn-cv"
                >
                  <Download size={12} />
                  <span>Download CV</span>
                </a>
              </motion.div>
            </div>

            {/* bottom row */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.0, duration:0.8 }}
              style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {["GitHub", "LinkedIn", "Twitter"].map(s => (
                  <a key={s} href="#" className="hr-social">{s}</a>
                ))}
              </div>

              {!isMobile && (
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
                  <div style={{ width:1, height:48, background:"rgba(255,255,255,0.07)", position:"relative", overflow:"hidden" }}>
                    <div style={{ position:"absolute", top:"-100%", left:0, width:"100%", height:"100%", background:"linear-gradient(to bottom,transparent,#7b61ff)", animation:"hrScroll 2.2s 1.5s ease-in-out infinite" }} />
                  </div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.22em", color:"rgba(240,238,255,0.15)", textTransform:"uppercase", writingMode:"vertical-rl" }}>Scroll</div>
                </div>
              )}
            </motion.div>

            {/* watermark */}
            {!isMobile && (
              <div style={{ position:"absolute", bottom:44, right:-4, fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.3em", color:"rgba(255,255,255,0.05)", writingMode:"vertical-rl", transform:"rotate(180deg)", textTransform:"uppercase", userSelect:"none" }}>
                Frontend · AI · Systems · 2025
              </div>
            )}
          </div>

          {/* ══ RIGHT — EDITOR ══ */}
          {isMobile ? (
            <div style={{ width:"100%", maxWidth:"100%" }}>
              <button className="hr-mob-toggle" onClick={() => setShowEditor(p => !p)}>
                {showEditor ? "▲ Hide Code Editor" : "▼ View Code Editor"}
              </button>
              <AnimatePresence>
                {showEditor && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.32, ease:[0.16,1,0.3,1] }} style={{ overflow:"hidden" }}>
                    <EditorPanel activeFile={activeFile} setActiveFile={setActiveFile} lines={lines} visibleLines={visibleLines} clock={clock} isMobile />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <EditorPanel activeFile={activeFile} setActiveFile={setActiveFile} lines={lines} visibleLines={visibleLines} clock={clock} isMobile={false} />
          )}
        </div>

        {/* fixed social icons — desktop */}
        {!isMobile && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.3 }}
            style={{ position:"fixed", right:20, bottom:36, display:"flex", flexDirection:"column", gap:14, zIndex:20 }}>
            <motion.a href="https://www.linkedin.com/in/anshuman-singh7/" target="_blank" rel="noreferrer" whileHover={{ scale:1.2 }} style={{ color:"rgba(240,238,255,0.25)", fontSize:18, display:"flex" }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://github.com/tanujgrover9" target="_blank" rel="noreferrer" whileHover={{ scale:1.2 }} style={{ color:"rgba(240,238,255,0.25)", fontSize:18, display:"flex" }}>
              <FaGithub />
            </motion.a>
          </motion.div>
        )}
      </section>
    </>
  );
}

/* ════════════════════════════════════════
   EDITOR PANEL
   ════════════════════════════════════════ */
interface EPProps {
  activeFile:    FileKey;
  setActiveFile: (f: FileKey) => void;
  lines:         { t: string; v: string }[][];
  visibleLines:  number;
  clock:         string;
  isMobile:      boolean;
}

function EditorPanel({ activeFile, setActiveFile, lines, visibleLines, clock, isMobile }: EPProps) {
  return (
    <div style={{ display:"flex", flexDirection:"column", background:"#0b0b15", width:"100%", maxWidth:"100%", height: isMobile ? "auto" : "100vh", minHeight: isMobile ? 360 : undefined, overflow:"hidden" }}>

      {/* tab bar */}
      <div style={{ height:42, background:"#09090f", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"stretch", flexShrink:0, overflow:"hidden" }}>
        {FILE_KEYS.map(f => (
          <div key={f} className={`hr-tab${activeFile === f ? " active" : ""}`} onClick={() => setActiveFile(f)}>
            <span style={{ width:6, height:6, borderRadius:"50%", flexShrink:0, background: activeFile === f ? "#7b61ff" : "rgba(255,255,255,0.15)" }} />
            {isMobile ? f.replace(/\.(tsx|json)$/, "") : f}
          </div>
        ))}
        <div style={{ flex:1 }} />
        {!isMobile && (
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.13)", padding:"0 14px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
            <span>TSX</span><span>UTF-8</span>
          </div>
        )}
      </div>

      {/* code body */}
      <div style={{ flex:1, display:"flex", overflow:"hidden", minHeight: isMobile ? 260 : 0 }}>

        {/* gutter */}
        <div style={{ width:42, padding:"18px 0", borderRight:"1px solid rgba(255,255,255,0.07)", background:"#090912", flexShrink:0 }}>
          {lines.map((_, i) => (
            <div key={i} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize: isMobile ? 10 : 11, lineHeight:1.85, color: i === 12 ? "rgba(123,97,255,0.6)" : "rgba(255,255,255,0.1)", textAlign:"right", paddingRight:10, userSelect:"none" }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* lines */}
        <div style={{ flex:1, padding:"18px 16px", overflow:"hidden", minWidth:0 }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeFile} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.18 }}>
              {lines.map((tokens, li) => (
                <motion.div key={li}
                  initial={{ opacity:0, x:-6 }}
                  animate={li < visibleLines ? { opacity:1, x:0 } : { opacity:0, x:-6 }}
                  transition={{ duration:0.22 }}
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize: isMobile ? 11 : 12.5, lineHeight:1.85, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis",
                    background: li === 12 ? "rgba(123,97,255,0.055)" : "transparent",
                    marginLeft: li === 12 ? -16 : 0,
                    paddingLeft: li === 12 ? 14 : 0,
                    borderLeft: li === 12 ? "2px solid rgba(123,97,255,0.5)" : "none",
                  }}>
                  {tokens.length === 0 ? "\u00a0" : tokens.map((tok, ti) => (
                    <span key={ti} style={{ color: SYN[tok.t] ?? "#cdd3de" }}>{tok.v}</span>
                  ))}
                  {li === visibleLines - 1 && li === lines.length - 1 && (
                    <span style={{ display:"inline-block", width:2, height:13, background:"#00e5ff", verticalAlign:"middle", marginLeft:1, animation:"hrBlink 1s step-end infinite" }} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* minimap — desktop only */}
        {!isMobile && (
          <div style={{ width:56, borderLeft:"1px solid rgba(255,255,255,0.07)", background:"#070710", flexShrink:0, padding:"18px 8px", overflow:"hidden", position:"relative" }}>
            <div style={{ position:"absolute", top:18, left:0, right:0, height:50, background:"rgba(123,97,255,0.04)", borderTop:"1px solid rgba(123,97,255,0.15)", borderBottom:"1px solid rgba(123,97,255,0.15)" }} />
            {lines.map((tokens, i) => (
              <div key={i} style={{ height:2, borderRadius:1, marginBottom:3,
                background: tokens.length === 0 ? "transparent"
                  : tokens[0]?.t === "cm" ? "rgba(255,255,255,0.06)"
                  : tokens[0]?.t === "kw" ? "rgba(123,97,255,0.3)"
                  : tokens[0]?.t === "str" ? "rgba(195,232,141,0.2)"
                  : "rgba(255,255,255,0.06)",
                width: `${35 + (i * 19 % 45)}%`,
              }} />
            ))}
          </div>
        )}
      </div>

      {/* skills strip */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", padding:"10px 14px", display:"flex", gap:6, flexWrap:"wrap", background:"#090912", flexShrink:0 }}>
        {SKILL_CHIPS.map(label => <div key={label} className="hr-chip">{label}</div>)}
      </div>

      {/* status bar */}
      <div style={{ height:26, background:"#07070f", borderTop:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", padding:"0 12px", gap:14, flexShrink:0, overflow:"hidden" }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#39ff7a", animation:"hrPls 2.5s ease-in-out infinite" }} />
          Ready
        </div>
        {!isMobile && <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.18)", flexShrink:0 }}>TypeScript 5.3</div>}
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.18)", flexShrink:0 }}>
          Ln {Math.min(visibleLines, lines.length)}, Col 1
        </div>
        <div style={{ marginLeft:"auto", fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"rgba(255,255,255,0.18)", flexShrink:0 }}>
          {clock}
        </div>
      </div>
    </div>
  );
}
