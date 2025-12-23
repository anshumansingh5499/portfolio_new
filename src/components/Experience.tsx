import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "TraviYo",
      role: "Full-time UI Designer",
      years: "2024 - 2025",
      description:
        "Designed and developed intuitive UI systems for travel-tech products, improving user journeys and engagement. Partnered with developers to convert Figma designs into scalable React + Tailwind components, reducing design-to-dev handoff time by 30%. Contributed to performance-optimized pages that improved load time by 25%, directly enhancing user retention."
    },
    {
      company: "Freelance",
      role: "Frontend Developer (React + Tailwind)",
      years: "2022 - 2024",
      description:
        "Delivered 12+ responsive web applications for startups and SMBs, focusing on high-performance, mobile-first design. Built interactive dashboards, landing pages, and e-commerce platforms using React and Tailwind CSS. Achieved an average of 40% faster page load speeds, boosting client SEO rankings and conversion rates. Recognized for writing clean, maintainable code and ensuring 100% cross-browser compatibility."
    },
  ];

  const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
  const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

  return (
    <section className="px-6 md:px-20 py-12 relative overflow-hidden font-sans bg-cream">
      {/* Background with doodle lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="paper-grain"
            width="0.5"
            height="0.5"
            patternUnits="userSpaceOnUse"
          >
            <rect width="0.5" height="0.5" fill="rgba(255,255,255,0.04)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="100"
            y1={`${6 + i * 6}%`}
            y2={`${6 + i * 6}%`}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Heading */}
      <h2 className="text-5xl font-extrabold mb-12 text-center relative font-handwriting">
        My{" "}
        <span className="text-pink-500 font-handwriting rotate-[-2deg] inline-block relative">
          Experience
          <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-no-repeat bg-contain bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%226%22><path d=%22M0,3 Q20,0 40,3 T80,3 T120,3 T160,3%22 stroke=%22%23ec4899%22 stroke-width=%222%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>')]"></span>
        </span>
      </h2>

      {/* Floating doodles */}
      <div className="absolute top-10 left-10 text-pink-400 text-3xl animate-bounce">★</div>
      <div className="absolute bottom-20 right-10 text-blue-400 text-2xl animate-pulse">➶</div>
      <div className="absolute top-1/3 left-0 text-green-500 text-xl animate-spin-slow">〰</div>
      <div className="absolute bottom-10 left-1/4 text-yellow-500 text-4xl animate-wiggle">✦</div>
      <div className="absolute top-5 right-1/4 text-purple-500 text-2xl animate-bounce-slow">➜</div>
      <div className="absolute bottom-1/3 right-0 text-red-500 text-xl animate-pulse">✎</div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp, idx) => {
          const bgColor = stickyColors[idx % stickyColors.length];
          const rotation = rotations[idx % rotations.length];

          return (
            <div
              key={idx}
              className={`relative p-6 rounded-xl border-2 border-black/60 ${rotation} transition-transform hover:rotate-0 hover:scale-105 hover:shadow-xl hover:animate-wiggle`}
              style={{
                backgroundColor: bgColor,
                boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
                borderStyle: "dashed",
              }}
            >
              {/* Pushpin */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-black shadow-md rotate-[-5deg]"></div>

              {/* Card Content */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-md rotate-[-3deg]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-handwriting">{exp.company}</h3>
              </div>

              <p className="text-gray-700 font-medium font-handwriting">{exp.role}</p>
              <p className="text-sm text-gray-500 mt-1 font-handwriting">{exp.years}</p>

              {/* New Description */}
              <p className="mt-3 text-gray-800 leading-relaxed text-sm font-handwriting">
                {exp.description}
              </p>

              {/* Extra doodle arrow */}
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-2xl text-black/40 rotate-12">
                ➜
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
