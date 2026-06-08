import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);

        if (!el) return false;

        const rect = el.getBoundingClientRect();

        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50">
        <div className="section-container !py-0">
          <nav
            className={`mx-auto flex items-center justify-between rounded-[28px] border transition-all duration-500 ${
              scrolled
                ? darkMode
                  ? "h-16 px-6 bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                  : "h-16 px-6 bg-white/70 backdrop-blur-2xl border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                : darkMode
                ? "h-20 px-8 bg-transparent border-transparent"
                : "h-20 px-8 bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#hero");
              }}
              className="group relative"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-black gradient-text font-mono"
              >
                DS
              </motion.div>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`relative px-5 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : darkMode
                      ? "text-white/60 hover:text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="active-navbar-tab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className={`absolute inset-0 rounded-full ${
                        darkMode ? "bg-white/5" : "bg-black/5"
                      }`}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Theme"
                className={`p-3 rounded-2xl transition-all duration-500 hover:rotate-180 ${
                  darkMode
                    ? "bg-white/5 border border-white/10 text-yellow-400"
                    : "bg-black/5 border border-black/10 text-gray-700"
                }`}
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open Menu"
                className={`lg:hidden p-3 rounded-2xl ${
                  darkMode
                    ? "bg-white/5 border border-white/10 text-white"
                    : "bg-black/5 border border-black/10 text-black"
                }`}
              >
                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-[55]"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
              className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] z-[60] p-10 flex flex-col justify-between ${
                darkMode
                  ? "bg-zinc-950 border-l border-white/10"
                  : "bg-white border-l border-black/10"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-3xl font-black">Menu</h2>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-xl bg-primary/10"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.07,
                      }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className={`block text-4xl font-black tracking-tight py-2 ${
                        activeSection === link.href.slice(1)
                          ? "gradient-text"
                          : darkMode
                          ? "text-white/80"
                          : "text-black/80"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="uppercase text-xs tracking-[0.3em] opacity-50 mb-5">
                  Connect
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/dwarkasuthar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-primary/10 hover:scale-110 transition-transform"
                  >
                    <FiGithub size={22} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dwarka-suthar-078a5936a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-primary/10 hover:scale-110 transition-transform"
                  >
                    <FiLinkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}