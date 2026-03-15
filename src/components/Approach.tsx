import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  FileText,
  Bug,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Discovery & planning", icon: Lightbulb, color: "#22c55e", description: "Align goals, audience, scope, and metrics." },
  { title: "Design & UX", icon: Palette, color: "#a855f7", description: "Wireframes and visuals focused on clarity." },
  { title: "Development", icon: Code2, color: "#3b82f6", description: "Build fast, scalable interfaces." },
  { title: "Content integration", icon: FileText, color: "#eab308", description: "Structure content for product messaging." },
  { title: "Testing & QA", icon: Bug, color: "#ef4444", description: "Cross-device testing and polish." },
  { title: "Launch", icon: Rocket, color: "#22d3ee", description: "Deploy with performance and SEO." },
  { title: "Iteration & growth", icon: TrendingUp, color: "#10b981", description: "Measure, learn, and improve continuously." },
];

export const WebsiteApproach = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const CARD_WIDTH = 320;
  const GAP = 32;
  const STEP = CARD_WIDTH + GAP;

  /* ===== Scroll sync ===== */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const index = Math.round(el.scrollLeft / STEP);
        setActive(Math.min(steps.length - 1, index));
        setShowHint(false);
        ticking = false;
      });

      ticking = true;
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== Auto play (respects user) ===== */
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % steps.length;
        containerRef.current?.scrollTo({
          left: next * STEP,
          behavior: "smooth",
        });
        return next;
      });
    }, 4200);

    return () => clearInterval(id);
  }, [paused]);

  /* ===== Pause on tab switch ===== */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section
      id="Process"
      className="relative bg-black py-36 border-t border-white/10 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute top-[420px] left-0 w-[320px] h-[320px] rounded-full blur-[160px]"
        animate={{
          x: active * STEP + 40,
          backgroundColor: steps[active].color,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 30 }}
        style={{ opacity: 0.22 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-handwriting inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-emerald-400 mb-6">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            From idea to launch
          </h2>
          <p className="mt-6 text-lg text-white/60">
            A structured SaaS workflow designed for clarity, scale, and long-term
            maintainability.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/50 mb-2">
            <span>
              Step <span className="text-white">{active + 1}</span> / {steps.length}
            </span>
            <span>{Math.round(((active + 1) / steps.length) * 100)}%</span>
          </div>

          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              animate={{
                width: `${((active + 1) / steps.length) * 100}%`,
                backgroundColor: steps[active].color,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 p-2"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === active;

            return (
              <div key={i} className="snap-center shrink-0 w-[320px]">
                {/* Dot */}
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      containerRef.current?.scrollTo({
                        left: i * STEP,
                        behavior: "smooth",
                      })
                    }
                  >
                    <div
                      className="h-3 w-3 rounded-full transition"
                      style={{
                        backgroundColor: isActive ? step.color : "rgba(255,255,255,0.3)",
                        boxShadow: isActive
                          ? `0 0 0 6px ${step.color}33`
                          : "none",
                      }}
                    />
                  </button>
                </div>

                {/* Card */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.06 : 1,
                    borderColor: isActive ? step.color : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className="
                    mt-8 rounded-2xl border
                    bg-white/[0.03] backdrop-blur-xl
                    p-7 shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${step.color}22`,
                        color: step.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-xs text-white/40">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={step.title}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className={`font-medium mb-2 ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {step.title}
                    </motion.h3>
                  </AnimatePresence>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {showHint && (
          <div className="md:hidden mt-6 text-center text-xs text-white/40">
            Swipe to explore →
          </div>
        )}
      </div>
    </section>
  );
};
