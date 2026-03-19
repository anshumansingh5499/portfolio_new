import { Mail, MapPin, Linkedin, Github, Dribbble, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anshuman-singh7/", color: "#0a66c2" },
  { icon: Github,   label: "GitHub",   href: "https://github.com/tanujgrover9",              color: "#f0eeff" },
  { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com/",                        color: "#ea4c89" },
];

export const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState<string | null>(null);
  const [sent,    setSent]    = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .ct-section *,
        .ct-section *::before,
        .ct-section *::after { box-sizing: border-box; }

        .ct-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .ct-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; color: #7b61ff;
          text-transform: uppercase; display: flex; align-items: center; gap: 12px;
          margin-bottom: 14px;
        }
        .ct-eyebrow-line { width: 28px; height: 1px; background: #7b61ff; flex-shrink: 0; display: inline-block; }

        .ct-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(28px, 3.5vw, 48px);
          letter-spacing: -0.03em; color: #f0eeff;
          line-height: 1; margin: 0 0 10px;
        }
        .ct-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: rgba(240,238,255,0.35);
          line-height: 1.8; margin: 0 0 48px; max-width: 480px;
        }

        /* shell */
        .ct-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0,0,0,0.7);
        }

        /* title bar */
        .ct-titlebar {
          height: 42px; background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 16px; gap: 0;
          flex-shrink: 0;
        }
        .ct-lights { display: flex; gap: 7px; margin-right: 20px; flex-shrink: 0; }
        .ct-tl { width: 12px; height: 12px; border-radius: 50%; }
        .ct-tabs { display: flex; align-items: stretch; flex: 1; overflow: hidden; }
        .ct-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 16px; height: 42px;
          display: flex; align-items: center; gap: 7px;
          position: relative; white-space: nowrap; flex-shrink: 0;
        }
        .ct-tab.active { background: rgba(123,97,255,0.08); color: #f0eeff; }
        .ct-tab.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #7b61ff;
        }
        .ct-tab-pip { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.15); flex-shrink: 0; }
        .ct-tab.active .ct-tab-pip { background: #7b61ff; }

        /* body */
        .ct-body {
          display: flex; overflow: hidden;
        }

        /* sidebar */
        .ct-sidebar {
          width: 220px; flex-shrink: 0;
          background: #080812;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex; flex-direction: column;
          padding: 16px 0; overflow: hidden;
        }
        .ct-sidebar-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          padding: 0 14px 12px;
        }
        .ct-info-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.35);
          border-left: 2px solid transparent;
          transition: background 0.15s, color 0.15s;
        }
        .ct-info-row:hover { background: rgba(255,255,255,0.02); color: #f0eeff; }

        /* social links in sidebar */
        .ct-social-sec { margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.04); padding: 16px 14px 0; }
        .ct-social-lbl {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em; color: rgba(255,255,255,0.18);
          text-transform: uppercase; margin-bottom: 12px;
        }
        .ct-social-link {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 0;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.28);
          text-decoration: none;
          border-left: 2px solid transparent;
          padding-left: 4px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ct-social-link:hover { color: #f0eeff; }

        /* status badge */
        .ct-status-badge {
          margin-top: auto; margin-bottom: 0;
          padding: 14px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .ct-badge-inner {
          background: rgba(57,255,122,0.05);
          border: 1px solid rgba(57,255,122,0.15);
          padding: 10px 12px;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #39ff7a;
          animation: ctPls 2s ease-in-out infinite; flex-shrink: 0;
        }
        .ct-badge-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.08em;
          color: #39ff7a;
        }

        /* main panel */
        .ct-main {
          flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden;
        }

        /* breadcrumb */
        .ct-breadcrumb {
          height: 30px; background: #0a0a14;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          display: flex; align-items: center; padding: 0 20px; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(255,255,255,0.2); flex-shrink: 0;
        }
        .ct-bc-sep { color: rgba(255,255,255,0.1); }
        .ct-bc-active { color: rgba(240,238,255,0.5); }

        /* form area */
        .ct-form-wrap {
          flex: 1; padding: 28px 28px; overflow-y: auto; overflow-x: hidden;
          scrollbar-width: none;
        }
        .ct-form-wrap::-webkit-scrollbar { display: none; }

        /* form comment header */
        .ct-form-comment {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          color: rgba(255,255,255,0.25); font-style: italic;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }

        /* field groups */
        .ct-field-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 12px;
        }
        @media(max-width:640px){ .ct-field-row { grid-template-columns: 1fr; } }

        /* inputs */
        .ct-input, .ct-textarea {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 11px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: #f0eeff;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          resize: none;
        }
        .ct-input::placeholder, .ct-textarea::placeholder {
          color: rgba(240,238,255,0.2);
        }
        .ct-input:focus, .ct-textarea:focus {
          border-color: rgba(123,97,255,0.5);
          background: rgba(123,97,255,0.04);
        }
        .ct-field-label {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.18em; color: rgba(255,255,255,0.2);
          text-transform: uppercase; margin-bottom: 6px;
        }

        /* submit */
        .ct-submit {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #080810; background: #f0eeff;
          border: none; padding: 14px 28px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          width: 100%; margin-top: 18px;
          position: relative; overflow: hidden;
          transition: color 0.35s; cursor: pointer;
        }
        .ct-submit::after {
          content: ''; position: absolute; inset: 0;
          background: #7b61ff; transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .ct-submit:hover::after { transform: translateX(0); }
        .ct-submit:hover { color: #fff; }
        .ct-submit span { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; }

        /* sent state */
        .ct-submit.sent { background: rgba(57,255,122,0.12); border: 1px solid rgba(57,255,122,0.3); color: #39ff7a; }
        .ct-submit.sent::after { display: none; }

        /* status bar */
        .ct-statusbar {
          height: 26px; background: #07070f;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; padding: 0 14px; gap: 16px;
        }
        .ct-st {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.18); white-space: nowrap; flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .ct-st-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #39ff7a; animation: ctPls 2.5s ease-in-out infinite;
        }

        @media(max-width:640px){ .ct-sidebar { display: none; } }

        @keyframes ctPls  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes ctOrb  { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,40px)} }
      `}</style>

      <section
        id="contact"
        className="ct-section"
        style={{
          position: "relative",
          background: "#080810",
          padding: "100px 0",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div className="ct-bg-grid" />

        {/* orbs */}
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(100px)",
          pointerEvents: "none",
          width: 420, height: 420, background: "rgba(123,97,255,0.08)",
          top: -80, left: "50%", transform: "translateX(-50%)",
          animation: "ctOrb 16s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(80px)",
          pointerEvents: "none",
          width: 280, height: 280, background: "rgba(0,229,255,0.05)",
          bottom: -40, right: "8%",
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
            <div className="ct-eyebrow">
              <span className="ct-eyebrow-line" />
              Contact
            </div>
            <h2 className="ct-heading">
              Let's Build<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,238,255,0.2)" }}>
                Something Together
              </span>
            </h2>
            <p className="ct-sub">
              Have a project, idea, or opportunity in mind?<br />
              Open to collaborations, freelance work, and full-time roles.
            </p>
          </motion.div>

          {/* editor shell */}
          <motion.div
            className="ct-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* title bar */}
            <div className="ct-titlebar">
              <div className="ct-lights">
                <div className="ct-tl" style={{ background: "#ff5f57" }} />
                <div className="ct-tl" style={{ background: "#febc2e" }} />
                <div className="ct-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="ct-tabs">
                <div className="ct-tab active">
                  <span className="ct-tab-pip" />
                  contact.tsx
                </div>
                <div className="ct-tab">
                  <span className="ct-tab-pip" />
                  sendMessage.ts
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
            <div className="ct-body" style={{ minHeight: 500 }}>

              {/* sidebar */}
              <div className="ct-sidebar">
                <div className="ct-sidebar-title">Info</div>

                <div className="ct-info-row">
                  <Mail size={12} color="rgba(255,255,255,0.3)" />
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10 }}>
                    anshumansingh10701@gmail.com
                  </span>
                </div>
                <div className="ct-info-row">
                  <MapPin size={12} color="rgba(255,255,255,0.3)" />
                  <span>India</span>
                </div>

                {/* socials */}
                <div className="ct-social-sec">
                  <div className="ct-social-lbl">Socials</div>
                  {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="ct-social-link"
                      style={{ color: undefined }}
                      onMouseEnter={e => (e.currentTarget.style.color = color)}
                      onMouseLeave={e => (e.currentTarget.style.color = "")}
                    >
                      <Icon size={12} />
                      {label}
                    </a>
                  ))}
                </div>

                {/* availability badge */}
                <div className="ct-status-badge">
                  <div className="ct-badge-inner">
                    <div className="ct-badge-dot" />
                    <span className="ct-badge-text">Available for work</span>
                  </div>
                </div>
              </div>

              {/* main panel */}
              <div className="ct-main">

                {/* breadcrumb */}
                <div className="ct-breadcrumb">
                  <span>src</span>
                  <span className="ct-bc-sep">/</span>
                  <span>contact</span>
                  <span className="ct-bc-sep">/</span>
                  <span className="ct-bc-active">contact.tsx</span>
                </div>

                {/* form */}
                <div className="ct-form-wrap">
                  <div className="ct-form-comment">
                    <span style={{ color: "#7b61ff" }}>//</span>
                    sendMessage(recipient: "anshumansingh10701@gmail.com")
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* name + email */}
                    <div className="ct-field-row">
                      <div>
                        <div className="ct-field-label">name</div>
                        <input
                          className="ct-input"
                          placeholder="Your name"
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                      <div>
                        <div className="ct-field-label">email</div>
                        <input
                          className="ct-input"
                          type="email"
                          placeholder="your@email.com"
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                    </div>

                    {/* subject */}
                    <div style={{ marginBottom: 12 }}>
                      <div className="ct-field-label">subject</div>
                      <input
                        className="ct-input"
                        placeholder="Project / Opportunity / Collaboration"
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    {/* message */}
                    <div>
                      <div className="ct-field-label">message</div>
                      <textarea
                        className="ct-textarea"
                        rows={5}
                        placeholder="Tell me about your project…"
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    {/* submit */}
                    <button
                      type="submit"
                      className={`ct-submit${sent ? " sent" : ""}`}
                    >
                      <span>
                        {sent ? (
                          <>✔ Message sent</>
                        ) : (
                          <><Send size={13} /> Send Message</>
                        )}
                      </span>
                    </button>
                  </form>

                  {/* footer note */}
                  <div style={{
                    marginTop: 20,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, color: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{ color: "rgba(57,255,122,0.5)" }}>//</span>
                    Typically responds within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* status bar */}
            <div className="ct-statusbar">
              <span className="ct-st">
                <span className="ct-st-dot" />
                contact.tsx
              </span>
              <span className="ct-st">TypeScript 5.3</span>
              <span className="ct-st" style={{ color: "#39ff7a" }}>
                ● Available for work
              </span>
              <span className="ct-st" style={{ marginLeft: "auto" }}>
                India · Remote
              </span>
            </div>
          </motion.div>

          {/* footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 13, letterSpacing: "0.22em",
              color: "rgba(240,238,255,0.25)", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              Anshuman Singh
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7b61ff", display: "inline-block" }} />
            </div>

            <div style={{ display: "flex", gap: 20 }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "rgba(240,238,255,0.2)",
                    transition: "color 0.2s",
                    display: "flex",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f0eeff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,238,255,0.2)")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.15)",
            }}>
              © {new Date().getFullYear()} · Built with React + TypeScript
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};