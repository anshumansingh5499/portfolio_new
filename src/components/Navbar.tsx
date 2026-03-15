// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const navItems = [
//   { label: "Home", id: "home" },
//   { label: "Projects", id: "projects" },
//   { label: "Skills", id: "skills" },
//   { label: "Experience", id: "experience" },
//   { label: "Contact", id: "contacts" },

// ];

// export default function Navbar() {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const onScroll = () => {
//       navItems.forEach(({ id }) => {
//         const el = document.getElementById(id);
//         if (!el) return;

//         const rect = el.getBoundingClientRect();
//         if (rect.top <= 120 && rect.bottom >= 120) {
//           setActive(id);
//         }
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="
//         fixed top-6 left-1/2 -translate-x-1/2 z-50
//         flex items-center gap-1 rounded-full
//         border border-white/15 bg-black/60
//         backdrop-blur-xl px-2 py-2
//       "
//     >
//       {navItems.map((item) => {
//         const isActive = active === item.id;

//         return (
//           <button
//             key={item.id}
//             onClick={() => scrollTo(item.id)}
//             className={`
//               relative px-4 py-2 rounded-full text-sm font-medium transition
//               ${isActive ? "text-white" : "text-white/60 hover:text-white"}
//             `}
//           >
//             {isActive && (
//               <motion.span
//                 layoutId="nav-pill"
//                 className="absolute inset-0 rounded-full bg-white/10"
//                 transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               />
//             )}
//             <span className="relative z-10">{item.label}</span>
//           </button>
//         );
//       })}
//     </motion.nav>
//   );
// }
