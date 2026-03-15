import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "TraviYo",
      role: "Full-time UI Designer",
      years: "2024 – 2025",
      description:
        "Designed and developed intuitive UI systems for travel-tech products, improving user journeys and engagement. Partnered closely with engineers to convert Figma designs into scalable React + Tailwind components, reducing design-to-development handoff time by 30%. Contributed to performance-optimized pages that improved load time by 25%, directly increasing user retention.",
    },
    {
      company: "Freelance",
      role: "Frontend Developer (React + Tailwind)",
      years: "2022 – 2024",
      description:
        "Delivered 12+ responsive web applications for startups and SMBs with a strong focus on performance and accessibility. Built dashboards, landing pages, and product websites using React and Tailwind CSS. Achieved up to 40% faster load times, improving SEO rankings and conversion rates while maintaining clean, scalable codebases.",
    },
  ];

  return (
    <section id="experience" className="relative bg-black py-32 border-t border-white/10">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <span className="inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-green-500 mb-6 font-handwriting">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Professional timeline
          </h2>
          <p className="mt-6 text-lg text-white/60">
            A snapshot of my professional journey, highlighting roles,
            responsibilities, and measurable impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/15" />

          <div className="space-y-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-lg">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-xl`}
                  >
                    <span className="text-xs text-white/40">{exp.years}</span>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {exp.company}
                    </h3>

                    <p className="mt-1 text-sm text-green-400">
                      {exp.role}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
