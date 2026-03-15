import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { useRef, useState, useEffect } from "react";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const CARD_WIDTH = 420;
  const GAP = 64;
  const STEP = CARD_WIDTH + GAP;

  /* ===== Stable active detection ===== */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const index = Math.floor((el.scrollLeft + STEP / 2) / STEP);
          setActive(Math.max(0, Math.min(projects.length - 1, index)));
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== Auto-play (no conflict) ===== */
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      const next = (active + 1) % projects.length;
      containerRef.current?.scrollTo({
        left: next * STEP,
        behavior: "smooth",
      });
    }, 4500);

    return () => clearInterval(id);
  }, [active, paused]);

  /* ===== Pause on tab blur ===== */
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const scrollToIndex = (i: number) => {
    containerRef.current?.scrollTo({
      left: i * STEP,
      behavior: "smooth",
    });
  };

  const accent = projects[active].accentColor;

  return (
    <section
      id="projects"
      className="relative bg-black py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glow */}
      <motion.div
        key={active}
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(600px at 50% 40%, ${accent}33, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-8xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-green-500 mb-6 font-handwriting">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Selected work
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Centered active project with smooth transitions.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-white/60">
            {active + 1} / {projects.length}
          </span>

          <div className="flex gap-3">
            <button
              onClick={() => scrollToIndex(Math.max(active - 1, 0))}
              className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() =>
                scrollToIndex(Math.min(active + 1, projects.length - 1))
              }
              className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-12 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{
              width: `${((active + 1) / projects.length) * 100}%`,
              backgroundColor: accent,
            }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="
            flex gap-16 overflow-x-auto scrollbar-hide
            pb-12
            px-[calc(50%-210px)]
          "
        >
          {projects.map((project, i) => {
            const offset = i - active;

            return (
              <motion.div
                key={project.id}
                className="shrink-0 w-[420px]"
                animate={{
                  scale: offset === 0 ? 1.05 : 0.9,
                  opacity: offset === 0 ? 1 : 0.55,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div
                  className="relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden"
                  style={{
                    boxShadow:
                      offset === 0
                        ? `0 30px 100px ${accent}55`
                        : "0 15px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[240px] object-contain bg-black"
                  />

                  <div className="p-6 space-y-5">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/60">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: project.accentColor }}
                      >
                        View case study
                        <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
