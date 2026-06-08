import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/dwarkasuthar",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/dwarka-suthar-078a5936a/",
      label: "LinkedIn",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className={`relative overflow-hidden ${
        darkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-primary mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Let's build something
            <span className="gradient-text block">
              amazing together.
            </span>
          </h2>

          <a
            href="mailto:dwarkasuthar471@gmail.com"
            className={`inline-flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:text-primary ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <FiMail />
            dwarkasuthar471@gmail.com
          </a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-14">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-black/5 hover:bg-black/10"
              }`}
            >
              <social.icon
                size={22}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px mb-12 ${
            darkMode ? "bg-white/10" : "bg-black/10"
          }`}
        />

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className={`group relative text-sm font-medium transition-colors duration-300 ${
                darkMode
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              {link.name}

              {/* <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" /> */}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-3xl font-black gradient-text tracking-tight">
            DS
          </div>

          {/* Copyright */}
          <p
            className={`text-sm text-center ${
              darkMode ? "text-white/40" : "text-black/40"
            }`}
          >
            © {currentYear} Dwarka Suthar.
          </p>

          {/* Scroll To Top */}
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={`group flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ${
              darkMode
                ? "bg-white/5 hover:bg-white/10"
                : "bg-black/5 hover:bg-black/10"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              Top
            </span>

            <FiArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}