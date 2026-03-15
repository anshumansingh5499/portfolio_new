import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute  left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-black/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 space-y-20">

        {/* ===== TOP CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-neutral-900 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight text-center md:text-left">
            Ready to build something
            <br />
            meaningful together?
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-white/20 px-6 py-3 text-green-500 font-medium hover:opacity-90 transition font-handwriting"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* ===== FOOTER GRID ===== */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">
              Anshuman Singh
            </h3>
            <p className="text-white/60 max-w-sm">
              Frontend developer focused on building scalable SaaS interfaces,
              AI-driven products, and performance-first web experiences.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-green-400" />
                anshumansingh10701@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                +91 7080216257
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">
              Social
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/tanujgrover9"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/anshuman-singh7/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="pt-10 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Anshuman Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
