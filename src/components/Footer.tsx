import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Process",    href: "#Process" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const SOCIALS = [
  { icon: FaGithub,   href: "https://github.com/tanujgrover9",               label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/anshuman-singh7/",  label: "LinkedIn" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        .ft-root *,
        .ft-root *::before,
        .ft-root *::after { box-sizing: border-box; }

        .ft-bg-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* ── CTA shell ── */
        .ft-cta-shell {
          background: #0d0d18;
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }

        .ft-cta-titlebar {
          height: 38px; background: #09090f;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; padding: 0 14px; gap: 0;
        }
        .ft-lights { display: flex; gap: 6px; margin-right: 16px; flex-shrink: 0; }
        .ft-tl { width: 10px; height: 10px; border-radius: 50%; }
        .ft-tab {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.4);
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 0 14px; height: 38px;
          display: flex; align-items: center; gap: 6px;
          position: relative;
        }
        .ft-tab::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px; background: #7b61ff;
        }
        .ft-tab-pip { width: 5px; height: 5px; border-radius: 50%; background: #7b61ff; }

        .ft-cta-body {
          padding: 36px 40px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 24px;
        }
        @media(max-width:640px){ .ft-cta-body { padding: 28px 20px; } }

        .ft-cta-heading {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(22px, 3vw, 36px);
          letter-spacing: -0.03em; color: #f0eeff; line-height: 1.1;
          margin: 0;
        }
        .ft-cta-heading-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(240,238,255,0.22);
        }

        .ft-cta-btn {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #080810; background: #f0eeff;
          border: none; padding: 13px 26px;
          display: flex; align-items: center; gap: 10px;
          position: relative; overflow: hidden;
          transition: color 0.35s; white-space: nowrap; flex-shrink: 0;
          text-decoration: none;
        }
        .ft-cta-btn::after {
          content: ''; position: absolute; inset: 0;
          background: #7b61ff; transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .ft-cta-btn:hover::after { transform: translateX(0); }
        .ft-cta-btn:hover { color: #fff; }
        .ft-cta-btn span { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; }

        /* ── footer grid ── */
        .ft-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          padding: 48px 0 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media(max-width:900px){ .ft-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:540px){ .ft-grid { grid-template-columns: 1fr; } }

        /* brand col */
        .ft-brand-name {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 15px; letter-spacing: "0.02em";
          color: #f0eeff; margin-bottom: 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-brand-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #7b61ff;
          animation: ftPls 2s ease-in-out infinite;
        }
        .ft-brand-desc {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 1.85;
          color: rgba(240,238,255,0.3); max-width: 260px; margin: 0;
        }
        .ft-avail {
          margin-top: 18px;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px;
          background: rgba(57,255,122,0.05);
          border: 1px solid rgba(57,255,122,0.15);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #39ff7a; letter-spacing: 0.08em;
        }
        .ft-avail-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #39ff7a;
          animation: ftPls 2s ease-in-out infinite;
        }

        /* col labels */
        .ft-col-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.22em;
          color: rgba(255,255,255,0.18); text-transform: uppercase;
          margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
        }
        .ft-col-label::before { content: '//'; color: rgba(123,97,255,0.5); }

        /* nav links */
        .ft-nav-link {
          display: block; font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: rgba(240,238,255,0.3);
          text-decoration: none; padding: 4px 0;
          transition: color 0.2s, letter-spacing 0.2s;
          border-left: 2px solid transparent;
          padding-left: 0;
          transition: color 0.2s, padding-left 0.2s, border-color 0.2s;
        }
        .ft-nav-link:hover { color: #f0eeff; padding-left: 8px; border-left-color: #7b61ff; }

        /* contact rows */
        .ft-contact-row {
          display: flex; align-items: center; gap: 10px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.3); margin-bottom: 10px;
          transition: color 0.2s;
        }
        .ft-contact-row:hover { color: #f0eeff; }

        /* social links */
        .ft-social-link {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 0;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: rgba(240,238,255,0.28);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s, border-color 0.2s;
        }
        .ft-social-link:last-child { border-bottom: none; }
        .ft-social-link:hover { color: #f0eeff; border-bottom-color: rgba(255,255,255,0.1); }

        /* bottom bar */
        .ft-bottom {
          padding: 20px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ft-copy {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: rgba(255,255,255,0.15); letter-spacing: 0.08em;
        }
        .ft-scroll-top {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(240,238,255,0.2);
          background: transparent; border: 1px solid rgba(255,255,255,0.07);
          padding: 7px 14px; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ft-scroll-top:hover { color: #f0eeff; border-color: rgba(255,255,255,0.2); }

        @keyframes ftPls { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes ftOrb { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }
      `}</style>

      <footer
        className="ft-root"
        style={{
          position: "relative",
          background: "#080810",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          padding: "80px 0 0",
        }}
      >
        <div className="ft-bg-grid" />

        {/* orbs */}
        <div style={{
          position: "absolute", borderRadius: "50%", filter: "blur(100px)",
          pointerEvents: "none",
          width: 400, height: 400, background: "rgba(123,97,255,0.07)",
          top: -80, left: "50%", transform: "translateX(-50%)",
          animation: "ftOrb 18s ease-in-out infinite",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

          {/* ── CTA SHELL ── */}
          <motion.div
            className="ft-cta-shell"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 64 }}
          >
            {/* title bar */}
            <div className="ft-cta-titlebar">
              <div className="ft-lights">
                <div className="ft-tl" style={{ background: "#ff5f57" }} />
                <div className="ft-tl" style={{ background: "#febc2e" }} />
                <div className="ft-tl" style={{ background: "#28c840" }} />
              </div>
              <div className="ft-tab">
                <span className="ft-tab-pip" />
                cta.tsx
              </div>
              <div style={{
                marginLeft: "auto", padding: "0 14px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, color: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{ color: "rgba(57,255,122,0.5)", fontSize: 10, fontFamily: "'JetBrains Mono',monospace" }}>
                  ● Available
                </span>
              </div>
            </div>

            {/* body */}
            <div className="ft-cta-body">
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, letterSpacing: "0.18em",
                  color: "#7b61ff", textTransform: "uppercase",
                  marginBottom: 12, display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ width: 22, height: 1, background: "#7b61ff", display: "inline-block" }} />
                  Let's collaborate
                </div>
                <h2 className="ft-cta-heading">
                  Ready to build something<br />
                  <span className="ft-cta-heading-outline">meaningful together?</span>
                </h2>
              </div>
              <a href="#contact" className="ft-cta-btn">
                <span>Get in touch <ArrowUpRight size={13} /></span>
              </a>
            </div>
          </motion.div>

          {/* ── FOOTER GRID ── */}
          <motion.div
            className="ft-grid"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Brand */}
            <div>
              <div className="ft-brand-name">
                Anshuman Singh
                <span className="ft-brand-dot" />
              </div>
              <p className="ft-brand-desc">
                Frontend developer focused on building scalable SaaS interfaces,
                AI-driven products, and performance-first web experiences.
              </p>
              <div className="ft-avail">
                <span className="ft-avail-dot" />
                Available for work
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="ft-col-label">Navigation</div>
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href} className="ft-nav-link">{label}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="ft-col-label">Contact</div>
              <div className="ft-contact-row">
                <Mail size={12} color="rgba(255,255,255,0.25)" />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10 }}>
                  anshumansingh10701@gmail.com
                </span>
              </div>
              <div className="ft-contact-row">
                <Phone size={12} color="rgba(255,255,255,0.25)" />
                <span>+91 7080216257</span>
              </div>
              <div className="ft-contact-row" style={{ marginTop: 6 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                  color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em"
                }}>
                  📍 India · Remote-friendly
                </span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <div className="ft-col-label">Socials</div>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="ft-social-link">
                  <Icon size={13} />
                  {label}
                </a>
              ))}

              {/* tech stack line */}
              <div style={{ marginTop: 20 }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.15)",
                  textTransform: "uppercase", marginBottom: 10,
                }}>// Stack</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["React", "TypeScript", "Python", "LangChain"].map(t => (
                    <span key={t} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
                      padding: "3px 8px",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(240,238,255,0.3)",
                      letterSpacing: "0.06em",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── BOTTOM BAR ── */}
          <motion.div
            className="ft-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ft-copy">
              © {year} Anshuman Singh · All rights reserved
            </div>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              color: "rgba(255,255,255,0.12)", letterSpacing: "0.1em",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ color: "rgba(123,97,255,0.4)" }}>//</span>
              Built with React + TypeScript + Framer Motion
            </div>

            <button
              className="ft-scroll-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top <ArrowUpRight size={11} />
            </button>
          </motion.div>

        </div>
      </footer>
    </>
  );
};