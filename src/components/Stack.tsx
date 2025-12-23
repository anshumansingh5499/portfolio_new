// import React from "react";
// import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiGit, SiTypescript } from "react-icons/si";
// import { TbApi } from "react-icons/tb";

// export const TechStack = () => {
//   const stacks = [
//     { name: "React", icon: <SiReact className="w-10 h-10 text-cyan-400" /> },
//     { name: "HTML", icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
//     { name: "CSS", icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
//     { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
//     { name: "TailwindCSS", icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" /> },
//     { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-purple-600" /> },
//     { name: "Git", icon: <SiGit className="w-10 h-10 text-red-500" /> },
//     { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-blue-600" /> },
//     { name: "REST API", icon: <TbApi className="w-10 h-10 text-green-500" /> },
//   ];

//   return (
//     <section className="w-full  py-10 rounded-full">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-y-8 gap-x-6 items-center justify-items-center px-6">
//         {stacks.map((stack) => (
//           <div
//             key={stack.name}
//             className="flex flex-col items-center gap-2 text-white font-medium"
//           >
//             {stack.icon}
//             {/* <span className="text-sm md:text-base">{stack.name}</span> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };