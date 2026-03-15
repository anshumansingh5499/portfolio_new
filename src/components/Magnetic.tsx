// import { motion, useMotionValue } from "framer-motion";
// import { ReactNode } from "react";

// interface MagneticProps {
//   children: ReactNode;
// }

// export default function Magnetic({ children }: MagneticProps): JSX.Element {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   return (
//     <motion.div
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
//         y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
//       }}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       style={{ x, y }}
//       transition={{ type: "spring", stiffness: 250, damping: 18 }}
//     >
//       {children}
//     </motion.div>
//   );
// }
