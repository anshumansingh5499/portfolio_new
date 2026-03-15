import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HangingBanner() {
  /* ================= PHYSICS ================= */
  const rotate = useMotionValue(0);
  const x = useMotionValue(0);

  const rotateSpring = useSpring(rotate, {
    stiffness: 90,
    damping: 14,
    mass: 1.2,
  });

  const xSpring = useSpring(x, {
    stiffness: 80,
    damping: 16,
  });

  /* ================= ROPE CURVE ================= */
  const leftRope = useTransform(
    rotateSpring,
    (r) => `M 0 0 Q 40 ${90 + r * 2} 80 180`
  );

  const rightRope = useTransform(
    rotateSpring,
    (r) => `M 80 0 Q 40 ${90 - r * 2} 0 180`
  );

  return (
    <div className="relative flex justify-center mt-32 overflow-hidden">
      {/* ================= SVG ROPES ================= */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2"
        width="420"
        height="200"
        viewBox="0 0 420 200"
        fill="none"
      >
        {/* Left Rope */}
        <motion.path
          d={leftRope}
          transform="translate(120,0)"
          stroke="url(#rope)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Right Rope */}
        <motion.path
          d={rightRope}
          transform="translate(220,0)"
          stroke="url(#rope)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="rope" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffffcc" />
            <stop offset="100%" stopColor="#ffffff22" />
          </linearGradient>
        </defs>
      </svg>

      {/* ================= BANNER ================= */}
      <motion.div
        drag
        dragElastic={0.35}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDrag={(e, info) => {
          rotate.set(info.offset.x * 0.05);
          x.set(info.offset.x * 0.25);
        }}
        onDragEnd={() => {
          rotate.set(0);
          x.set(0);
        }}
        style={{
          rotate: rotateSpring,
          x: xSpring,
          transformOrigin: "top center",
        }}
        className="
          relative
          px-12 py-10
          rounded-xl
          bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_rgba(255,255,255,0.25))]
          backdrop-blur-sm
          border border-black/10
          shadow-[0_50px_120px_rgba(0,0,0,0.55)]
        "
      >
        {/* ================= PAPER TEXTURE ================= */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[url('/noise.png')] opacity-[0.06]" />

        {/* Hooks */}
        <span className="absolute -top-3 left-10 w-3 h-3 rounded-full bg-neutral-200 shadow-inner" />
        <span className="absolute -top-3 right-10 w-3 h-3 rounded-full bg-neutral-200 shadow-inner" />

        {/* Text */}
        <h1 className="text-center text-[clamp(2.7rem,5vw,5.2rem)] leading-[1.05] font-semibold text-neutral-900">
          Designing & engineering
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            premium interfaces
          </span>
        </h1>

        {/* Bottom paper shadow */}
        <div className="absolute inset-x-0 -bottom-6 h-10 bg-black/30 blur-xl" />
      </motion.div>
    </div>
  );
}
