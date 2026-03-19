import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    company:     "TraviYo",
    role:        "Full-time UI Designer",
    years:       "2024 – 2025",
    tag:         "traviyoo.ts",
    type:        "Full-time",
    color:       "#00e5ff",
    metrics:     ["30% faster handoff", "25% load time↓", "User retention↑"],
    description: "Designed and developed intuitive UI systems for travel-tech products, improving user journeys and engagement. Partnered closely with engineers to convert Figma designs into scalable React + Tailwind components, reducing design-to-development handoff time by 30%. Contributed to performance-optimized pages that improved load time by 25%, directly increasing user retention.",
  },
  {
    company:     "Freelance",
    role:        "Frontend Developer",
    years:       "2022 – 2024",
    tag:         "freelance.ts",
    type:        "Contract",
    color:       "#39ff7a",
    metrics:     ["12+ projects", "40% load time↓", "SEO rankings↑"],
    description: "Delivered 12+ responsive web applications for startups and SMBs with a strong focus on performance and accessibility. Built dashboards, landing pages, and product websites using React and Tailwind CSS. Achieved up to 40% faster load times, improving SEO rankings and conversion rates while maintaining clean, scalable codebases.",
  },
];

export const Experience = () => {
  const [active, setActive] = useState(0);
  const cur = experiences[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .ex-section *,
        .ex-section *::before,
        .ex-section *::after { box-sizing: border-box; }

        .ex-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .ex-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; color: #7b61ff;
          text-transform: uppercase; display: flex; align-items: center; gap: 12px;
          margin-bottom: 14px;
        }
        .ex-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; flex-shrink: 0; display: inline-block; }

        .ex-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em; color: #f0eeff;
          line-height: 1; margin: 0 0 10px;
        }
        .ex-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(240,238,255,0.35);
          line-height: 1.8; margin: 0 0 48px; max-width: 440px;
        }

        /* shell */
        .ex-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
          display: grid;
          grid-template-rows: 42px 1fr 26px;
        }

        /* title bar */
        .ex-titlebar {
          background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 16px; gap: 0;
        }
        .ex-lights { display: flex; gap: 7px; margin-right: 20px; flex-shrink: 0; }
        .ex-tl { width: 12px; height: 12px; border-radius: 50%; }
        .ex-tabs { display: flex; align-items: stretch; flex: 1; overflow: hidden; }
        .ex-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 16px; height: 42px;
          display: flex; align-items: center; gap: 7px;
          position: relative; transition: background 0.2s, color 0.2s;
          white-space: nowrap; flex-shrink: 0; cursor: pointer;
        }
        .ex-tab:hover { background: rgba(255,255,255,0.03); color: #f0eeff; }
        .ex-tab.active { background: rgba(123,97,255,0.08); color: #f0eeff; }
        .ex-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #7b61ff;
        }
        .ex-tab-pip { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.15); flex-shrink: 0; }
        .ex-tab.active .ex-tab-pip { background: #7b61ff; }

        /* body */
        .ex-body { display: flex; overflow: hidden; min-height: 0; }

        /* sidebar */
        .ex-sidebar {
          width: 220px; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex; flex-direction: column; overflow: hidden;
        }
        .ex-sidebar-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          padding: 14px 14px 10px; flex-shrink: 0;
        }
        .ex-exp-item {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.28);
          padding: 10px 14px;
          display: flex; align-items: center; gap: 10px;
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          cursor: pointer;
        }
        .ex-exp-item:hover { background: rgba(255,255,255,0.025); color: #f0eeff; }
        .ex-exp-item.active { color: #f0eeff; background: rgba(123,97,255,0.07); }
        .ex-exp-num {
          font-size: 9px; color: rgba(255,255,255,0.18); flex-shrink: 0;
          width: 18px; text-align: right; font-family: 'JetBrains Mono', monospace;
        }
        .ex-exp-item.active .ex-exp-num { color: rgba(123,97,255,0.6); }

        /* sidebar bottom — timeline visualization */
        .ex-timeline-vis {
          margin-top: auto; padding: 16px 14px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .ex-tl-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.18em; color: rgba(255,255,255,0.15);
          text-transform: uppercase; margin-bottom: 12px;
        }
        .ex-tl-item {
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .ex-tl-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }
        .ex-tl-bar {
          flex: 1; height: 1px; background: rgba(255,255,255,0.06);
        }
        .ex-tl-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; color: rgba(255,255,255,0.18); flex-shrink: 0;
        }

        /* detail */
        .ex-detail {
          flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;
        }

        /* breadcrumb */
        .ex-breadcrumb {
          height: 30px; background: #0a0a14;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; padding: 0 20px; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(255,255,255,0.2); flex-shrink: 0;
        }
        .ex-bc-sep { color: rgba(255,255,255,0.1); }
        .ex-bc-active { color: rgba(240,238,255,0.5); }

        /* code pane */
        .ex-code-wrap {
          flex: 1; display: flex; overflow: hidden; min-height: 0;
        }
        .ex-gutter {
          width: 44px; padding: 24px 0; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.04);
        }
        .ex-gutter span {
          display: block; font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 2;
          color: rgba(255,255,255,0.1); text-align: right;
          padding-right: 10px; user-select: none;
        }
        .ex-gutter span.gl { color: rgba(123,97,255,0.55); }

        .ex-lines { flex: 1; padding: 24px 24px; overflow: hidden; min-width: 0; }

        /* syntax */
        .ex-kw   { color: #c792ea; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-fn   { color: #82aaff; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-str  { color: #c3e88d; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-cm   { color: rgba(255,255,255,0.25); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-style: italic; }
        .ex-num  { color: #f78c6c; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-prop { color: #80cbc4; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-pl   { color: #cdd3de; font-family: 'JetBrains Mono', monospace; font-size: 13px; }
        .ex-line { line-height: 2; white-space: nowrap; overflow: hidden; }

        /* metrics row */
        .ex-metrics {
          display: flex; gap: 10px; flex-wrap: wrap; margin: 14px 0;
        }
        .ex-metric {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.08em; padding: 5px 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(240,238,255,0.4);
          transition: border-color 0.2s, color 0.2s;
        }

        /* description block */
        .ex-desc-block {
          background: rgba(255,255,255,0.015);
          border-left: 2px solid rgba(123,97,255,0.3);
          padding: 14px 18px;
          margin: 8px 0;
        }
        .ex-desc-text {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          line-height: 1.85; color: rgba(240,238,255,0.4);
          margin: 0; white-space: normal;
        }

        /* cursor */
        .ex-cursor {
          display: inline-block; width: 2px; height: 14px;
          background: #00e5ff; vertical-align: middle; margin-left: 2px;
          animation: exBlink 1s step-end infinite;
        }

        /* status bar */
        .ex-status {
          background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; padding: 0 14px; gap: 16px;
        }
        .ex-st {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .ex-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          animation: exPls 2.5s ease-in-out infinite;
        }

        @media(max-width:640px){ .ex-sidebar { display: none; } }

        @keyframes exBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes exPls   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes exOrb   { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }
      `}</style>

      <section
        id="experience"
        className="ex-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div className="ex-bg-grid" />

        {/* ambient orb — follows active color */}
        <motion.div
          style={{
            position: "absolute", borderRadius: "50%",
            filter: "blur(100px)", pointerEvents: "none",
            width: 380, height: 380, opacity: 0.1,
            top: "15%", left: "5%",
          }}
          animate={{ backgroundColor: cur.color }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)",
          pointerEvents: "none",
          width: 280, height: 280, background: "rgba(123,97,255,0.07)",
          bottom: -40, right: "8%", animation: "exOrb 18s ease-in-out infinite",
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
            <div className="ex-eyebrow">
              <span className="ex-eyebrow-line" />
              Experience
            </div>
            <h2 className="ex-heading">
              Professional<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                Timeline
              </span>
            </h2>
            <p className="ex-sub">
              Roles, responsibilities, and measurable impact across my career.
            </p>
          </motion.div>

          {/* editor shell */}
          <motion.div
            className="ex-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="ex-titlebar">
              <div className="ex-lights">
                <div className="ex-tl" style={{ background: "#ff5f57" }} />
                <div className="ex-tl" style={{ background: "#febc2e" }} />
                <div className="ex-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="ex-tabs">
                {experiences.map((e, i) => (
                  <div
                    key={i}
                    className={`ex-tab${i === active ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="ex-tab-pip" />
                    {e.tag}
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
            <div className="ex-body" style={{ height: 520 }}>

              {/* sidebar */}
              <div className="ex-sidebar">
                <div className="ex-sidebar-title">Experience</div>
                {experiences.map((e, i) => (
                  <div
                    key={i}
                    className={`ex-exp-item${i === active ? " active" : ""}`}
                    style={{ borderLeftColor: i === active ? e.color : "transparent" }}
                    onClick={() => setActive(i)}
                  >
                    <span className="ex-exp-num">{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: i === active ? e.color : "rgba(255,255,255,0.12)" }} />
                    <div style={{ overflow: "hidden", minWidth: 0 }}>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>{e.type}</div>
                      <div style={{ fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.company}</div>
                    </div>
                  </div>
                ))}

                {/* timeline visualization */}
                <div className="ex-timeline-vis">
                  <div className="ex-tl-label">Timeline</div>
                  {experiences.map((e, i) => (
                    <div key={i} className="ex-tl-item">
                      <div className="ex-tl-dot" style={{ background: i === active ? e.color : "rgba(255,255,255,0.15)" }} />
                      <div className="ex-tl-bar" style={{ background: i === active ? `${e.color}33` : undefined }} />
                      <span className="ex-tl-year">{e.years}</span>
                    </div>
                  ))}
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "rgba(255,255,255,0.12)", marginTop: 12, letterSpacing: "0.1em" }}>
                    {experiences.length} positions · {(() => {
                      const start = Math.min(...experiences.map(e => parseInt(e.years.split("–")[0])));
                      const end   = Math.max(...experiences.map(e => {
                        const y = e.years.split("–")[1].trim();
                        return y === "Present" ? new Date().getFullYear() : parseInt(y);
                      }));
                      return `${end - start}+ yrs`;
                    })()}
                  </div>
                </div>
              </div>

              {/* detail */}
              <div className="ex-detail">

                {/* breadcrumb */}
                <div className="ex-breadcrumb">
                  <span>experience</span>
                  <span className="ex-bc-sep">/</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={cur.tag}
                      className="ex-bc-active"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                    >
                      {cur.tag}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* code lines */}
                <div className="ex-code-wrap">
                  <div className="ex-gutter">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className={i === 6 || i === 7 ? "gl" : ""}>{i + 1}</span>
                    ))}
                  </div>

                  <div className="ex-lines">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={cur.company}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.28 }}
                      >
                        {/* line 1 */}
                        <div className="ex-line">
                          <span className="ex-cm">// {cur.company} — {cur.role}</span>
                        </div>
                        {/* line 2 */}
                        <div className="ex-line">&nbsp;</div>
                        {/* line 3 */}
                        <div className="ex-line">
                          <span className="ex-kw">const </span>
                          <span className="ex-fn">{cur.company.replace(/\s+/g, "")}</span>
                          <span className="ex-pl">: </span>
                          <span className="ex-fn">Experience</span>
                          <span className="ex-pl"> = {"{"}</span>
                        </div>
                        {/* line 4 */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  company"}</span>
                          <span className="ex-pl">: </span>
                          <span className="ex-str">"{cur.company}"</span>
                          <span className="ex-pl">,</span>
                        </div>
                        {/* line 5 */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  role"}</span>
                          <span className="ex-pl">: </span>
                          <span className="ex-str">"{cur.role}"</span>
                          <span className="ex-pl">,</span>
                        </div>
                        {/* line 6 */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  period"}</span>
                          <span className="ex-pl">: </span>
                          <span className="ex-str">"{cur.years}"</span>
                          <span className="ex-pl">,</span>
                        </div>
                        {/* line 7 */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  type"}</span>
                          <span className="ex-pl">: </span>
                          <span className="ex-str">"{cur.type}"</span>
                          <span className="ex-pl">,</span>
                        </div>
                        {/* line 8 blank */}
                        <div className="ex-line">&nbsp;</div>
                        {/* line 9: metrics */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  metrics"}</span>
                          <span className="ex-pl">: [</span>
                          <span className="ex-cursor" />
                        </div>
                        {/* metrics chips */}
                        <div className="ex-metrics">
                          {cur.metrics.map((m, mi) => (
                            <motion.span
                              key={m}
                              className="ex-metric"
                              style={{ color: cur.color, borderColor: `${cur.color}30` }}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: mi * 0.08 }}
                            >
                              {m}
                            </motion.span>
                          ))}
                        </div>
                        {/* line 10 */}
                        <div className="ex-line">
                          <span className="ex-pl">{"  ],"}</span>
                        </div>
                        {/* line 11 blank */}
                        <div className="ex-line">&nbsp;</div>
                        {/* line 12: description */}
                        <div className="ex-line">
                          <span className="ex-prop">{"  description"}</span>
                          <span className="ex-pl">: `</span>
                        </div>
                        {/* description block */}
                        <div className="ex-desc-block">
                          <p className="ex-desc-text">{cur.description}</p>
                        </div>
                        {/* line 13 */}
                        <div className="ex-line" style={{ marginTop: 6 }}>
                          <span className="ex-pl">{"  `,"}</span>
                        </div>
                        {/* line 14 */}
                        <div className="ex-line">
                          <span className="ex-pl">{"}"}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="ex-status">
              <span className="ex-st">
                <span className="ex-st-dot" style={{ background: cur.color }} />
                {cur.tag}
              </span>
              <span className="ex-st">TypeScript 5.3</span>
              <span className="ex-st" style={{ color: cur.color }}>
                {cur.years}
              </span>
              <span className="ex-st" style={{ marginLeft: "auto" }}>
                {active + 1} / {experiences.length} positions
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};