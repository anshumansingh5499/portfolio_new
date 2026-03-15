import { Mail, MapPin, Linkedin, Github, Dribbble } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black py-32 border-t border-white/10 overflow-hidden"
    >
      {/* SaaS grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient accent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-black/30 blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <span className="inline-flex rounded-full bg-white/5 px-4 py-1 text-sm text-green-500 mb-6 font-handwriting">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Let’s build something
            <br />
            meaningful together
          </h2>

          <p className="mt-6 text-lg text-white/60">
            Have a project, idea, or opportunity in mind?  
            I’m open to collaborations, freelance work, and full-time roles.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                className="rounded-lg bg-black border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your name"
              />
              <input
                className="rounded-lg bg-black border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Email address"
                type="email"
              />
              <input
                className="sm:col-span-2 rounded-lg bg-black border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Subject"
              />
              <textarea
                rows={5}
                className="sm:col-span-2 rounded-lg bg-black border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tell me about your project…"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-green-500 to-green-500 px-6 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Send message
            </button>
          </motion.form>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-medium text-white mb-6">
                Get in touch
              </h3>

              <div className="space-y-4 text-white/70">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>anshumansingh10701@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-4">
                Social
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/anshuman-singh7/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/tanujgrover9"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Dribbble size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
