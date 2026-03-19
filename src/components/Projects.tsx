import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { useRef, useState, useEffect } from "react";

export const Projects = () => {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);

  const CARD_W = 440;
  const GAP    = 32;
  const STEP   = CARD_W + GAP;

  /* scroll → sync active */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let tick = false;
    const fn = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        setActive(Math.max(0, Math.min(projects.length - 1, Math.round(el.scrollLeft / STEP))));
        tick = false;
      });
    };
    el.addEventListener("scroll", fn, { passive: true });
    return () => el.removeEventListener("scroll", fn);
  }, []);

  /* auto-play */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const next = (active + 1) % projects.length;
      scrollRef.current?.scrollTo({ left: next * STEP, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(id);
  }, [active, paused]);

  /* pause on hidden */
  useEffect(() => {
    const fn = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", fn);
    return () => document.removeEventListener("visibilitychange", fn);
  }, []);

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * STEP, behavior: "smooth" });
    setActive(i);
  };

  const cur    = projects[active];
  const accent = cur.accentColor ?? "#7b61ff";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .pj-section *,
        .pj-section *::before,
        .pj-section *::after { box-sizing: border-box; }

        .pj-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .pj-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; color: #7b61ff;
          text-transform: uppercase; display: flex; align-items: center; gap: 12px;
          margin-bottom: 14px;
        }
        .pj-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; flex-shrink: 0; display: inline-block; }

        .pj-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em; color: #f0eeff;
          line-height: 1; margin: 0 0 10px;
        }
        .pj-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(240,238,255,0.35);
          line-height: 1.8; margin: 0 0 48px; max-width: 440px;
        }

        /* ── shell ── */
        .pj-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
        }

        /* title bar */
        .pj-titlebar {
          height: 42px; background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 16px; gap: 0;
          flex-shrink: 0;
        }
        .pj-lights { display: flex; gap: 7px; margin-right: 20px; flex-shrink: 0; }
        .pj-tl { width: 12px; height: 12px; border-radius: 50%; }
        .pj-tabs { display: flex; align-items: stretch; flex: 1; overflow: hidden; }
        .pj-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 16px; height: 42px;
          display: flex; align-items: center; gap: 7px;
          position: relative; transition: background 0.2s, color 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .pj-tab.active { background: rgba(123,97,255,0.08); color: #f0eeff; }
        .pj-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: #7b61ff;
        }
        .pj-tab-pip { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.15); flex-shrink: 0; }
        .pj-tab.active .pj-tab-pip { background: #7b61ff; }

        /* body layout */
        .pj-body { display: flex; overflow: hidden; }

        /* ── sidebar: project list ── */
        .pj-sidebar {
          width: 220px; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex; flex-direction: column;
          overflow-y: auto; overflow-x: hidden;
          scrollbar-width: none;
        }
        .pj-sidebar::-webkit-scrollbar { display: none; }
        .pj-sidebar-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          padding: 14px 14px 10px; flex-shrink: 0;
        }
        .pj-proj-item {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.28);
          padding: 9px 14px;
          display: flex; align-items: center; gap: 10px;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          cursor: pointer; flex-shrink: 0;
        }
        .pj-proj-item:hover { background: rgba(255,255,255,0.025); color: #f0eeff; }
        .pj-proj-item.active { color: #f0eeff; background: rgba(123,97,255,0.07); }
        .pj-proj-num {
          font-size: 9px; color: rgba(255,255,255,0.18);
          flex-shrink: 0; width: 18px; text-align: right;
        }
        .pj-proj-item.active .pj-proj-num { color: rgba(123,97,255,0.6); }

        /* ── main panel ── */
        .pj-main {
          flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;
        }

        /* breadcrumb */
        .pj-breadcrumb {
          height: 30px; background: #0a0a14;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; padding: 0 20px; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(255,255,255,0.2); flex-shrink: 0;
        }
        .pj-bc-sep { color: rgba(255,255,255,0.1); }
        .pj-bc-active { color: rgba(240,238,255,0.5); }

        /* progress row */
        .pj-progress-row {
          padding: 10px 20px 8px; background: #0b0b16;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .pj-prog-label {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
        }
        .pj-prog-track {
          flex: 1; height: 1px; background: rgba(255,255,255,0.07); overflow: hidden;
        }
        .pj-prog-pct {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); flex-shrink: 0; min-width: 32px; text-align: right;
        }

        /* carousel container */
        .pj-carousel-area {
          flex: 1; overflow: hidden; position: relative;
          padding: 24px 0 24px 24px;
        }
        .pj-carousel {
          display: flex; gap: 32px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding-right: 24px; height: 100%;
          align-items: center;
        }
        .pj-carousel::-webkit-scrollbar { display: none; }

        /* card */
        .pj-card {
          scroll-snap-align: center; flex-shrink: 0;
          width: 440px;
          background: #0b0b16;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          transition: border-color 0.3s;
          position: relative;
        }
        @media(max-width:600px){ .pj-card { width: 280px; } }

        .pj-card-img {
          width: 100%; height: 200px; object-fit: cover;
          background: #070710; display: block;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          filter: grayscale(0.2);
          transition: filter 0.3s;
        }
        .pj-card.active .pj-card-img { filter: grayscale(0); }

        .pj-card-body { padding: 20px 22px 22px; }

        .pj-card-toprow {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 10px;
        }
        .pj-card-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }
        .pj-card-link {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          display: flex; align-items: center; gap: 5px;
          text-decoration: none; transition: color 0.2s;
          opacity: 0; pointer-events: none;
          transition: opacity 0.2s;
        }
        .pj-card.active .pj-card-link { opacity: 1; pointer-events: all; }

        .pj-card-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 17px; color: rgba(240,238,255,0.5);
          margin: 0 0 10px; letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .pj-card.active .pj-card-title { color: #f0eeff; }

        .pj-card-desc {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          line-height: 1.8; color: rgba(240,238,255,0.3);
          margin: 0 0 16px; transition: color 0.2s;
        }
        .pj-card.active .pj-card-desc { color: rgba(240,238,255,0.5); }

        /* tags */
        .pj-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .pj-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 4px 10px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(240,238,255,0.3);
          transition: border-color 0.2s, color 0.2s;
        }
        .pj-card.active .pj-tag {
          border-color: rgba(255,255,255,0.1);
          color: rgba(240,238,255,0.55);
        }

        /* nav controls */
        .pj-controls {
          display: flex; align-items: center;
          padding: 10px 20px;
          border-top: 1px solid rgba(255,255,255,0.04);
          background: #09090f; gap: 12px; flex-shrink: 0;
        }
        .pj-ctrl-btn {
          width: 30px; height: 30px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(240,238,255,0.4);
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .pj-ctrl-btn:hover { background: rgba(123,97,255,0.1); color: #f0eeff; border-color: rgba(123,97,255,0.3); }
        .pj-ctrl-btn:disabled { opacity: 0.25; pointer-events: none; }

        .pj-dots { display: flex; align-items: center; gap: 6px; flex: 1; justify-content: center; }
        .pj-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          transition: background 0.2s, transform 0.2s;
          cursor: pointer; border: none; padding: 0;
        }
        .pj-dot.active { transform: scale(1.5); }

        /* status bar */
        .pj-status {
          height: 26px; background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; padding: 0 14px; gap: 16px;
        }
        .pj-st {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .pj-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          animation: pjPls 2.5s ease-in-out infinite;
        }

        /* mobile: hide sidebar */
        @media(max-width:640px){ .pj-sidebar { display: none; } }

        @keyframes pjPls  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes pjOrb  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
      `}</style>

      <section
        id="projects"
        className="pj-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div className="pj-bg-grid" />

        {/* accent glow — follows active project color */}
        <motion.div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(600px at 50% 30%, ${accent}18, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(90px)",
          pointerEvents: "none",
          width: 320, height: 320, background: "rgba(123,97,255,0.07)",
          bottom: -40, right: "8%", animation: "pjOrb 20s ease-in-out infinite",
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
            <div className="pj-eyebrow">
              <span className="pj-eyebrow-line" />
              Projects
            </div>
            <h2 className="pj-heading">
              Selected<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                Work
              </span>
            </h2>
            <p className="pj-sub">Production-grade systems shipped and live.</p>
          </motion.div>

          {/* editor shell */}
          <motion.div
            className="pj-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="pj-titlebar">
              <div className="pj-lights">
                <div className="pj-tl" style={{ background: "#ff5f57" }} />
                <div className="pj-tl" style={{ background: "#febc2e" }} />
                <div className="pj-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="pj-tabs">
                <div className="pj-tab active">
                  <span className="pj-tab-pip" />
                  projects.ts
                </div>
                <div className="pj-tab">
                  <span className="pj-tab-pip" />
                  index.ts
                </div>
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
            <div className="pj-body" style={{ height: 540 }}>

              {/* sidebar */}
              <div className="pj-sidebar">
                <div className="pj-sidebar-title">Projects</div>
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className={`pj-proj-item${i === active ? " active" : ""}`}
                    style={{ borderLeftColor: i === active ? (p.accentColor ?? "#7b61ff") : "transparent" }}
                    onClick={() => goTo(i)}
                  >
                    <span className="pj-proj-num">{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* main */}
              <div className="pj-main">

                {/* breadcrumb */}
                <div className="pj-breadcrumb">
                  <span>projects</span>
                  <span className="pj-bc-sep">/</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={cur.id}
                      className="pj-bc-active"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                    >
                      {cur.title.toLowerCase().replace(/\s+/g, "-")}.ts
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* progress */}
                <div className="pj-progress-row">
                  <span className="pj-prog-label">
                    <span style={{ color: "#f0eeff" }}>{active + 1}</span> / {projects.length}
                  </span>
                  <div className="pj-prog-track">
                    <motion.div
                      style={{ height: "100%" }}
                      animate={{ width: `${((active + 1) / projects.length) * 100}%`, backgroundColor: accent }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <span className="pj-prog-pct" style={{ color: accent }}>
                    {Math.round(((active + 1) / projects.length) * 100)}%
                  </span>
                </div>

                {/* carousel */}
                <div className="pj-carousel-area">
                  <div
                    ref={scrollRef}
                    className="pj-carousel"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onTouchStart={() => setPaused(true)}
                    onTouchEnd={() => setPaused(false)}
                  >
                    {projects.map((p, i) => {
                      const isA = i === active;
                      const ac  = p.accentColor ?? "#7b61ff";
                      return (
                        <motion.div
                          key={p.id}
                          className={`pj-card${isA ? " active" : ""}`}
                          style={{
                            borderColor: isA ? `${ac}44` : undefined,
                            boxShadow: isA ? `0 24px 80px ${ac}22` : "none",
                          }}
                          animate={{ scale: isA ? 1.02 : 0.96, opacity: isA ? 1 : 0.5 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          onClick={() => goTo(i)}
                        >
                          {/* top accent line */}
                          {isA && (
                            <motion.div
                              layoutId="proj-accent-line"
                              style={{ height: 1, background: ac }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}

                          <img src={p.image} alt={p.title} className="pj-card-img" />

                          <div className="pj-card-body">
                            <div className="pj-card-toprow">
                              <span className="pj-card-num">
                                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                              </span>
                              {p.link && (
                                <a
                                  href={p.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="pj-card-link"
                                  style={{ color: ac }}
                                >
                                  View project
                                  <ExternalLink size={11} />
                                </a>
                              )}
                            </div>

                            <AnimatePresence mode="wait">
                              <motion.h3
                                key={p.title}
                                className="pj-card-title"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.22 }}
                              >
                                {p.title}
                              </motion.h3>
                            </AnimatePresence>

                            <p className="pj-card-desc">{p.description}</p>

                            <div className="pj-tags">
                              {p.tags.slice(0, 6).map(t => (
                                <span key={t} className="pj-tag">{t}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* nav controls + dots */}
                <div className="pj-controls">
                  <button
                    className="pj-ctrl-btn"
                    disabled={active === 0}
                    onClick={() => goTo(active - 1)}
                  >
                    <ArrowLeft size={13} />
                  </button>

                  <div className="pj-dots">
                    {projects.map((p, i) => (
                      <button
                        key={i}
                        className={`pj-dot${i === active ? " active" : ""}`}
                        style={{ background: i === active ? (p.accentColor ?? "#7b61ff") : undefined }}
                        onClick={() => goTo(i)}
                      />
                    ))}
                  </div>

                  <button
                    className="pj-ctrl-btn"
                    disabled={active === projects.length - 1}
                    onClick={() => goTo(active + 1)}
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="pj-status">
              <span className="pj-st">
                <span className="pj-st-dot" style={{ background: accent }} />
                projects.ts
              </span>
              <span className="pj-st">TypeScript 5.3</span>
              <span className="pj-st" style={{ marginLeft: "auto" }}>
                {active + 1} / {projects.length} projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};