// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect } from "react";

// export default function CustomCursor(): JSX.Element {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
//   const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       x.set(e.clientX - 6);
//       y.set(e.clientY - 6);
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <motion.div
//       className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-emerald-400 mix-blend-difference"
//       style={{ translateX: smoothX, translateY: smoothY }}
//     />
//   );
// }
