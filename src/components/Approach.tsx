import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb, Palette, Code2, FileText, Bug, Rocket, TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Discovery & Planning", icon: Lightbulb,   color: "#39ff7a", tag: "init",    description: "Align goals, audience, scope, and metrics before a single line is written." },
  { title: "Design & UX",          icon: Palette,     color: "#a78bfa", tag: "design",  description: "Wireframes and high-fidelity visuals focused on clarity and conversion." },
  { title: "Development",          icon: Code2,       color: "#60a5fa", tag: "build",   description: "Build fast, scalable, and accessible interfaces with modern tooling." },
  { title: "Content Integration",  icon: FileText,    color: "#facc15", tag: "content", description: "Structure content architecture for product messaging and SEO." },
  { title: "Testing & QA",         icon: Bug,         color: "#f87171", tag: "test",    description: "Cross-device testing, performance audits, and edge-case polishing." },
  { title: "Launch",               icon: Rocket,      color: "#00e5ff", tag: "deploy",  description: "Deploy to production with CI/CD, performance monitoring, and SEO checks." },
  { title: "Iteration & Growth",   icon: TrendingUp,  color: "#34d399", tag: "iterate", description: "Measure with analytics, run experiments, ship improvements continuously." },
];

const CARD_W = 300;
const GAP    = 24;
const STEP   = CARD_W + GAP;

export const WebsiteApproach = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [hint,   setHint]     = useState(true);

  /* scroll → sync active */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const fn = () => {
      setActive(Math.min(steps.length - 1, Math.round(el.scrollLeft / STEP)));
      setHint(false);
    };
    el.addEventListener("scroll", fn, { passive: true });
    return () => el.removeEventListener("scroll", fn);
  }, []);

  /* auto-play */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % steps.length;
        scrollRef.current?.scrollTo({ left: next * STEP, behavior: "smooth" });
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  /* pause on hidden tab */
  useEffect(() => {
    const fn = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", fn);
    return () => document.removeEventListener("visibilitychange", fn);
  }, []);

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
    setActive(i);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .proc-section *,
        .proc-section *::before,
        .proc-section *::after { box-sizing: border-box; }

        /* bg grid */
        .proc-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* eyebrow */
        .proc-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; color: #7b61ff;
          text-transform: uppercase; display: flex; align-items: center; gap: 12px;
          margin-bottom: 14px;
        }
        .proc-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; flex-shrink: 0; display: inline-block; }

        /* heading */
        .proc-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em; color: #f0eeff;
          line-height: 1; margin: 0 0 8px;
        }
        .proc-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(240,238,255,0.35);
          line-height: 1.8; margin: 0 0 40px; max-width: 480px;
        }

        /* ── editor shell ── */
        .proc-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
        }

        /* title bar */
        .proc-titlebar {
          height: 42px; background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 16px; gap: 0;
          flex-shrink: 0;
        }
        .proc-lights { display: flex; gap: 7px; margin-right: 20px; flex-shrink: 0; }
        .proc-tl { width: 12px; height: 12px; border-radius: 50%; }

        /* tabs row */
        .proc-tabs { display: flex; align-items: stretch; flex: 1; overflow: hidden; }
        .proc-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 18px; height: 42px;
          display: flex; align-items: center; gap: 7px;
          position: relative; transition: background 0.2s, color 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .proc-tab.active { background: rgba(123,97,255,0.08); color: #f0eeff; }
        .proc-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #7b61ff;
        }
        .proc-tab-pip { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.15); flex-shrink: 0; }
        .proc-tab.active .proc-tab-pip { background: #7b61ff; }

        /* body */
        .proc-body {
          display: flex; overflow: hidden;
        }

        /* sidebar — step list */
        .proc-sidebar {
          width: 220px; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.05);
          padding: 16px 0;
          overflow: hidden;
        }
        .proc-sidebar-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          padding: 0 14px 12px;
        }
        .proc-step-item {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.28);
          padding: 8px 14px;
          display: flex; align-items: center; gap: 10px;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          cursor: pointer;
        }
        .proc-step-item:hover { background: rgba(255,255,255,0.025); color: #f0eeff; }
        .proc-step-item.active { color: #f0eeff; background: rgba(123,97,255,0.07); }
        .proc-step-num {
          font-size: 9px; color: rgba(255,255,255,0.18); flex-shrink: 0;
          width: 18px; text-align: right;
        }
        .proc-step-item.active .proc-step-num { color: rgba(123,97,255,0.7); }

        /* main panel */
        .proc-main {
          flex: 1; min-width: 0; display: flex; flex-direction: column;
          overflow: hidden;
        }

        /* breadcrumb */
        .proc-breadcrumb {
          height: 30px; background: #0a0a14;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; padding: 0 20px; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        .bc-sep { color: rgba(255,255,255,0.1); }
        .bc-active { color: rgba(240,238,255,0.5); }

        /* progress bar row */
        .proc-progress-row {
          padding: 14px 20px 10px;
          background: #0b0b16;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; gap: 14px;
          flex-shrink: 0;
        }
        .proc-progress-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
        }
        .proc-progress-track {
          flex: 1; height: 2px; background: rgba(255,255,255,0.07); overflow: hidden;
        }
        .proc-progress-pct {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); flex-shrink: 0; min-width: 32px; text-align: right;
        }

        /* carousel area */
        .proc-carousel-wrap {
          flex: 1; overflow: hidden; position: relative; min-height: 0;
          padding: 24px 0 24px 20px;
        }
        .proc-carousel {
          display: flex; gap: 24px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding-right: 20px; height: 100%;
          align-items: stretch;
        }
        .proc-carousel::-webkit-scrollbar { display: none; }

        /* card */
        .proc-card {
          scroll-snap-align: center; flex-shrink: 0;
          width: 300px;
          background: rgba(255,255,255,0.018);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 24px;
          display: flex; flex-direction: column; gap: 16px;
          transition: border-color 0.25s, background 0.25s;
          position: relative; overflow: hidden;
        }
        .proc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: transparent;
          transition: background 0.3s;
        }
        .proc-card.active::before { background: var(--step-color); }
        .proc-card.active { background: rgba(255,255,255,0.03); }

        .proc-card-top { display: flex; align-items: center; gap: 12px; }
        .proc-card-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .proc-card-meta { display: flex; flex-direction: column; gap: 2px; }
        .proc-card-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.2);
        }
        .proc-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 14px; color: rgba(240,238,255,0.5);
          transition: color 0.2s;
        }
        .proc-card.active .proc-card-title { color: #f0eeff; }

        /* tag pill */
        .proc-card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.12em;
          padding: 3px 10px;
          background: rgba(123,97,255,0.08);
          border: 1px solid rgba(123,97,255,0.18);
          color: rgba(123,97,255,0.7);
          align-self: flex-start;
          text-transform: uppercase;
        }
        .proc-card.active .proc-card-tag {
          color: var(--step-color);
          border-color: var(--step-color-dim);
          background: var(--step-color-bg);
        }

        .proc-card-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 1.85;
          color: rgba(240,238,255,0.35);
          transition: color 0.2s;
        }
        .proc-card.active .proc-card-desc { color: rgba(240,238,255,0.55); }

        /* dot nav */
        .proc-dots {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.04);
          background: #09090f; flex-shrink: 0;
        }
        .proc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          transition: background 0.2s, transform 0.2s;
          cursor: pointer; border: none;
        }
        .proc-dot.active { transform: scale(1.4); }

        /* status bar */
        .proc-status {
          height: 26px; background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center;
          padding: 0 14px; gap: 16px; flex-shrink: 0;
        }
        .proc-st {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: rgba(255,255,255,0.18);
          white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .proc-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          animation: procPls 2.5s ease-in-out infinite;
        }

        /* hint */
        .proc-hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.2); text-align: center;
          padding: 8px; text-transform: uppercase;
        }

        /* mobile: hide sidebar */
        @media(max-width:640px){
          .proc-sidebar { display: none; }
          .proc-card { width: 260px; }
        }

        @keyframes procPls { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes procOrb { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }
      `}</style>

      <section
        id="Process"
        className="proc-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {/* bg */}
        <div className="proc-bg-grid" />

        {/* ambient orb — follows active step color */}
        <motion.div
          style={{
            position: "absolute", borderRadius: "50%",
            filter: "blur(100px)", pointerEvents: "none",
            width: 400, height: 400, opacity: 0.18,
            top: "30%", left: "10%",
          }}
          animate={{ backgroundColor: steps[active].color }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)",
          pointerEvents: "none",
          width: 260, height: 260, background: "rgba(123,97,255,0.07)",
          bottom: -40, right: "8%", animation: "procOrb 18s ease-in-out infinite",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

          {/* ── section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 48 }}
          >
            <div className="proc-eyebrow">
              <span className="proc-eyebrow-line" />
              Process
            </div>
            <h2 className="proc-heading">
              From Idea<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                to Launch
              </span>
            </h2>
            <p className="proc-sub">
              A structured workflow designed for clarity, scale, and long-term maintainability.
            </p>
          </motion.div>

          {/* ── editor shell ── */}
          <motion.div
            className="proc-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="proc-titlebar">
              <div className="proc-lights">
                <div className="proc-tl" style={{ background: "#ff5f57" }} />
                <div className="proc-tl" style={{ background: "#febc2e" }} />
                <div className="proc-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="proc-tabs">
                {["workflow.ts", "steps.json"].map((f, i) => (
                  <div key={f} className={`proc-tab${i === 0 ? " active" : ""}`}>
                    <span className="proc-tab-pip" />
                    {f}
                  </div>
                ))}
              </div>
              <div style={{
                marginLeft: "auto", padding: "0 16px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, color: "rgba(255,255,255,0.13)",
                display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
              }}>
                <span>TS</span><span>UTF-8</span>
              </div>
            </div>

            {/* body */}
            <div className="proc-body" style={{ height: 480 }}>

              {/* sidebar */}
              <div className="proc-sidebar">
                <div className="proc-sidebar-title">Steps</div>
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`proc-step-item${i === active ? " active" : ""}`}
                    onClick={() => goTo(i)}
                  >
                    <span className="proc-step-num">{String(i + 1).padStart(2, "0")}</span>
                    <span style={{
                      display: "inline-block", width: 6, height: 6,
                      borderRadius: "50%", flexShrink: 0,
                      background: i === active ? s.color : "rgba(255,255,255,0.12)",
                    }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 11 }}>
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* main panel */}
              <div className="proc-main">

                {/* breadcrumb */}
                <div className="proc-breadcrumb">
                  <span>workflow</span>
                  <span className="bc-sep">/</span>
                  <span>steps</span>
                  <span className="bc-sep">/</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={active}
                      className="bc-active"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(active + 1).padStart(2, "0")}_{steps[active].title.toLowerCase().replace(/\s+/g, "_")}.ts
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* progress bar */}
                <div className="proc-progress-row">
                  <span className="proc-progress-label">
                    Step <span style={{ color: "#f0eeff" }}>{active + 1}</span> / {steps.length}
                  </span>
                  <div className="proc-progress-track">
                    <motion.div
                      style={{ height: "100%" }}
                      animate={{
                        width: `${((active + 1) / steps.length) * 100}%`,
                        backgroundColor: steps[active].color,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="proc-progress-pct" style={{ color: steps[active].color }}>
                    {Math.round(((active + 1) / steps.length) * 100)}%
                  </span>
                </div>

                {/* carousel */}
                <div className="proc-carousel-wrap">
                  <div
                    ref={scrollRef}
                    className="proc-carousel"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onTouchStart={() => setPaused(true)}
                    onTouchEnd={() => setPaused(false)}
                  >
                    {steps.map((s, i) => {
                      const Icon = s.icon;
                      const isActive = i === active;
                      return (
                        <motion.div
                          key={i}
                          className={`proc-card${isActive ? " active" : ""}`}
                          style={{
                            "--step-color":     s.color,
                            "--step-color-dim": `${s.color}44`,
                            "--step-color-bg":  `${s.color}12`,
                          } as React.CSSProperties}
                          animate={{ scale: isActive ? 1.02 : 1, borderColor: isActive ? `${s.color}44` : "rgba(255,255,255,0.07)" }}
                          transition={{ type: "spring", stiffness: 200, damping: 24 }}
                          onClick={() => goTo(i)}
                        >
                          {/* top row */}
                          <div className="proc-card-top">
                            <div className="proc-card-icon" style={{ borderColor: isActive ? `${s.color}30` : undefined }}>
                              <Icon size={16} color={isActive ? s.color : "rgba(255,255,255,0.3)"} />
                            </div>
                            <div className="proc-card-meta">
                              <span className="proc-card-num">
                                {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                              </span>
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={s.title}
                                  className="proc-card-title"
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {s.title}
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>

                          {/* tag */}
                          <div className="proc-card-tag">{s.tag}</div>

                          {/* desc */}
                          <p className="proc-card-desc">{s.description}</p>

                          {/* active glow bottom line */}
                          {isActive && (
                            <motion.div
                              layoutId="card-glow"
                              style={{
                                position: "absolute", bottom: 0, left: 0, right: 0,
                                height: 1, background: s.color, opacity: 0.5,
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* dot nav */}
                <div className="proc-dots">
                  {steps.map((s, i) => (
                    <button
                      key={i}
                      className={`proc-dot${i === active ? " active" : ""}`}
                      style={{ background: i === active ? s.color : undefined }}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="proc-status">
              <span className="proc-st">
                <span className="proc-st-dot" style={{ background: steps[active].color }} />
                {steps[active].tag}
              </span>
              <span className="proc-st">workflow.ts</span>
              <span className="proc-st" style={{ marginLeft: "auto" }}>
                {active + 1} / {steps.length} steps
              </span>
            </div>
          </motion.div>

          {/* mobile swipe hint */}
          {hint && (
            <div className="proc-hint md:hidden" style={{ marginTop: 12 }}>
              ← swipe to explore →
            </div>
          )}
        </div>
      </section>
    </>
  );
};