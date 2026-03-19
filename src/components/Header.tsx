import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",       id: "home" },
  { label: "About",      id: "about" },
  { label: "Process",    id: "Process" },
  { label: "Skills",     id: "skills" },
  { label: "Projects",   id: "projects" },
  { label: "Experience", id: "experience" },
];

const avatarUrl =
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_3.png";

/* ── tiny style tag injected once ── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  .nb-root *, .nb-root *::before, .nb-root *::after { box-sizing: border-box; }

  .nb-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(240,238,255,0.4);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: color 0.2s;
    position: relative;
    white-space: nowrap;
  }
  .nb-btn:hover { color: #f0eeff; }
  .nb-btn.nb-active { color: #f0eeff; }

  .nb-hire {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #080810;
    background: #f0eeff;
    border: none;
    padding: 10px 22px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color 0.35s;
    flex-shrink: 0;
  }
  .nb-hire::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #7b61ff;
    transform: translateX(-101%);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .nb-hire:hover { color: #fff; }
  .nb-hire:hover::after { transform: translateX(0); }
  .nb-hire span { position: relative; z-index: 1; }

  .mob-item {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(240,238,255,0.35);
    background: transparent;
    border: none;
    padding: 14px 20px;
    cursor: pointer;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: color 0.2s, background 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mob-item:last-child { border-bottom: none; }
  .mob-item:hover { color: #f0eeff; background: rgba(123,97,255,0.06); }

  @keyframes scanMove {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes pulseAccent {
    0%,100% { opacity:1; }
    50%     { opacity:0.45; }
  }
`;

export default function Navbar() {
  const [active,    setActive]    = useState("home");
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [mounted,   setMounted]   = useState(false);

  const { scrollYProgress } = useScroll();

  /* progress bar width */
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* mount fade-in */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* section tracker */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  /* section index for counter */
  const activeIdx  = navItems.findIndex(n => n.id === active);
  const counterStr = `0${activeIdx + 1} / 0${navItems.length}`;

  return (
    <>
      <style>{STYLES}</style>

      {/* ══════════════════════════════
          DESKTOP NAV
      ══════════════════════════════ */}
      <motion.nav
        className="nb-root hidden md:block"
        style={{
          position:  "sticky",
          top:       0,
          zIndex:    50,
          width:     "100%",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Progress bar — absolute above navbar */}
        <motion.div
          style={{
            position:   "absolute",
            top:        0,
            left:       0,
            height:     1,
            width:      progressWidth,
            background: "linear-gradient(90deg, #7b61ff, #00e5ff)",
            zIndex:     60,
          }}
        />

        {/* Backdrop strip */}
        <div style={{
          position:        "absolute",
          inset:           0,
         background: scrolled
  ? "#000000"
  : "#000000",
          backdropFilter:  "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:    "1px solid rgba(255,255,255,0.06)",
          transition:      "background 0.4s",
        }} />

        {/* Content row */}
        <div style={{
          position:       "relative",
          zIndex:         1,
          maxWidth:       1400,
          margin:         "0 auto",
          padding:        "0 48px",
          height:         60,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            32,
        }}>

          {/* ── Logo / identity ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            <div style={{ position: "relative" }}>
              <img
                src={avatarUrl}
                alt="Anshuman Singh"
                style={{
                  width:        36,
                  height:       36,
                  borderRadius: "50%",
                  border:       "1px solid rgba(123,97,255,0.4)",
                  display:      "block",
                }}
              />
              {/* online dot */}
              <span style={{
                position:     "absolute",
                bottom:       1,
                right:        1,
                width:        8,
                height:       8,
                borderRadius: "50%",
                background:   "#39ff7a",
                border:       "1.5px solid #080810",
                animation:    "pulseAccent 2.5s ease-in-out infinite",
              }} />
            </div>

            <div>
              <div style={{
                fontFamily:    "'Syne', sans-serif",
                fontWeight:    800,
                fontSize:      14,
                letterSpacing: "-0.01em",
                color:         "#f0eeff",
                lineHeight:    1.1,
              }}>
                Anshuman Singh
              </div>
              <div style={{
                fontFamily:    "'JetBrains Mono', monospace",
                fontSize:      9,
                letterSpacing: "0.18em",
                color:         "rgba(240,238,255,0.3)",
                textTransform: "uppercase",
                marginTop:     2,
              }}>
                AI · Frontend · Engineer
              </div>
            </div>
          </div>

          {/* ── Centre nav items ── */}
          <div style={{
            display:        "flex",
            alignItems:     "center",
            gap:            2,
            background:     "rgba(255,255,255,0.025)",
            border:         "1px solid rgba(255,255,255,0.06)",
            padding:        "6px 8px",
            position:       "relative",
          }}>
            {/* scanning highlight line */}
            <div style={{
              position:   "absolute",
              top:        0,
              left:       0,
              right:      0,
              height:     1,
              background: "linear-gradient(90deg, transparent, rgba(123,97,255,0.4), transparent)",
              animation:  "scanMove 4s linear infinite",
              pointerEvents: "none",
            }} />

            {navItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <div key={item.id} style={{ position: "relative" }}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      style={{
                        position:   "absolute",
                        inset:      0,
                        background: "rgba(123,97,255,0.12)",
                        borderLeft: "1px solid rgba(123,97,255,0.35)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <button
                    className={`nb-btn${isActive ? " nb-active" : ""}`}
                    onClick={() => scrollTo(item.id)}
                    style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span style={{
                      fontSize:      9,
                      color:         isActive ? "rgba(123,97,255,0.8)" : "rgba(255,255,255,0.18)",
                      letterSpacing: "0.05em",
                      fontFamily:    "'JetBrains Mono', monospace",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Right: counter + CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
            {/* Section counter */}
            <div style={{
              fontFamily:    "'JetBrains Mono', monospace",
              fontSize:      10,
              letterSpacing: "0.12em",
              color:         "rgba(240,238,255,0.2)",
              textTransform: "uppercase",
            }}>
              {counterStr}
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.08)" }} />

            {/* CTA */}
            <motion.button
              className="nb-hire"
              onClick={() => scrollTo("contact")}
              whileTap={{ scale: 0.97 }}
            >
              <span>Hire Me ↗</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>


      {/* ══════════════════════════════
          MOBILE BAR
      ══════════════════════════════ */}
      <div
        className="nb-root md:hidden"
        style={{ position: "sticky", top: 0, zIndex: 50, width: "100%" }}
      >
        {/* Progress bar */}
        <motion.div style={{
          position:   "absolute",
          top:        0,
          left:       0,
          height:     1,
          width:      progressWidth,
          background: "linear-gradient(90deg, #7b61ff, #00e5ff)",
          zIndex:     60,
        }} />

        {/* Backdrop */}
        <div style={{
          position:             "absolute",
          inset:                0,
          background:           "rgba(8,8,16,0.92)",
          backdropFilter:       "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:         "1px solid rgba(255,255,255,0.06)",
        }} />

        {/* Row */}
        <div style={{
          position:       "relative",
          zIndex:         1,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          padding:        "10px 20px",
        }}>
          {/* Identity */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <img
                src={avatarUrl}
                alt="Anshuman Singh"
                style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(123,97,255,0.4)" }}
              />
              <span style={{
                position: "absolute", bottom: 1, right: 1,
                width: 7, height: 7, borderRadius: "50%",
                background: "#39ff7a", border: "1.5px solid #080810",
              }} />
            </div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800, fontSize: 13,
              color: "#f0eeff",
            }}>
              Anshuman Singh
            </div>
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(p => !p)}
            style={{
              width:        38,
              height:       38,
              display:      "flex",
              alignItems:   "center",
              justifyContent: "center",
              background:   "rgba(123,97,255,0.08)",
              border:       "1px solid rgba(123,97,255,0.2)",
              color:        "#f0eeff",
              cursor:       "pointer",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open
                ? <motion.span key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X    size={16} /></motion.span>
                : <motion.span key="ham" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={16} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>


      {/* ══════════════════════════════
          MOBILE MENU DRAWER
      ══════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nb-root md:hidden"
            initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0,  scaleY: 1 }}
            exit={{   opacity: 0, y: -12, scaleY: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:             "fixed",
              top:                  56,
              left:                 0,
              right:                0,
              zIndex:               40,
              background:           "rgba(8,8,16,0.97)",
              backdropFilter:       "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom:         "1px solid rgba(123,97,255,0.15)",
              transformOrigin:      "top",
              overflow:             "hidden",
            }}
          >
            {/* Header row inside drawer */}
            <div style={{
              display:      "flex",
              alignItems:   "center",
              justifyContent: "space-between",
              padding:      "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{
                fontFamily:    "'JetBrains Mono', monospace",
                fontSize:      9,
                letterSpacing: "0.22em",
                color:         "rgba(240,238,255,0.2)",
                textTransform: "uppercase",
              }}>
                Navigation
              </div>
              <div style={{
                fontFamily:    "'JetBrains Mono', monospace",
                fontSize:      9,
                letterSpacing: "0.12em",
                color:         "rgba(123,97,255,0.6)",
              }}>
                {counterStr}
              </div>
            </div>

            {/* Nav items */}
            {navItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <motion.button
                  key={item.id}
                  className="mob-item"
                  onClick={() => scrollTo(item.id)}
                  style={{ color: isActive ? "#f0eeff" : undefined, background: isActive ? "rgba(123,97,255,0.07)" : undefined }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{
                      fontFamily:    "'JetBrains Mono', monospace",
                      fontSize:      9,
                      color:         isActive ? "rgba(123,97,255,0.8)" : "rgba(255,255,255,0.18)",
                      letterSpacing: "0.05em",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </div>
                  {isActive && (
                    <span style={{
                      width:  6, height: 6, borderRadius: "50%",
                      background: "#7b61ff", flexShrink: 0,
                    }} />
                  )}
                </motion.button>
              );
            })}

            {/* Hire Me */}
            <div style={{ padding: "16px 20px" }}>
              <button
                className="nb-hire"
                onClick={() => scrollTo("contact")}
                style={{ width: "100%", textAlign: "center" }}
              >
                <span>Hire Me ↗</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}