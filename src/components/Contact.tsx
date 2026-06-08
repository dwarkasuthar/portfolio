import { motion } from "framer-motion";
import { useInView } from "./useInView";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/dwarkasuthar",
    username: "@dwarkasuthar",
    description:
      "Explore my projects, repositories and open-source contributions.",
    gradient: "from-[#24292e] to-[#586069]",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/dwarka-suthar-078a5936a/",
    username: "Dwarka Suthar",
    description:
      "Let's connect professionally and discuss opportunities together.",
    gradient: "from-[#0077B5] to-[#00A0DC]",
  },
];

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className={`text-xs sm:text-sm font-bold tracking-[0.35em] uppercase ${
              darkMode ? "text-primary-light" : "text-primary"
            }`}
          >
            Get In Touch
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 mb-6">
            Let's Build Something
            <span className="gradient-text block pb-3">Together.</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed ${
              darkMode ? "text-dark-muted" : "text-light-muted"
            }`}
          >
            I'm always interested in new opportunities, collaborations,
            internships, and exciting frontend projects. Feel free to
            reach out and let's create something meaningful.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.1,
              }}
              className={`group p-6 sm:p-7 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "bg-dark-card/60 border border-dark-border/50 hover:border-primary/40"
                  : "bg-white border border-gray-100 hover:border-primary/30 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-br ${social.gradient}`}
                >
                  <social.icon size={22} className="text-white" />
                </div>

                <FiArrowUpRight
                  size={18}
                  className={`opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    darkMode ? "text-dark-muted" : "text-light-muted"
                  }`}
                />
              </div>

              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                {social.name}
              </h3>

              <p
                className={`text-xs font-mono mb-4 ${
                  darkMode ? "text-primary-light" : "text-primary"
                }`}
              >
                {social.username}
              </p>

              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-dark-muted" : "text-light-muted"
                }`}
              >
                {social.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="text-center mt-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-px bg-primary" />
          </div>

          <p
            className={`text-xs uppercase tracking-[0.35em] mb-4 ${
              darkMode ? "text-primary-light" : "text-primary"
            }`}
          >
            Email Me
          </p>

          <a
            href="mailto:dwarkasuthar471@gmail.com"
            className={`inline-flex items-center gap-3 text-lg sm:text-xl font-semibold transition-all duration-300 hover:text-primary ${
              darkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            <FiMail />
            <span className="break-all">
              dwarkasuthar471@gmail.com
            </span>
          </a>

          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/dwarka-suthar-078a5936a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              style={{
                background:
                  "linear-gradient(135deg, #6C63FF, #00D9FF)",
              }}
            >
              <FiLinkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}