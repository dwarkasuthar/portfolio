"use client";

import { motion } from "framer-motion";
import { useInView } from "./useInView";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

interface SkillsProps {
  darkMode: boolean;
}

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E44D26" },
  { name: "CSS", icon: SiCss, color: "#264DE4" },
  // { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#808080" },
];

const learningStack = [
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Express", icon: SiExpress, color: "#808080" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const strengths = [
  "Responsive Design",
  "Component Architecture",
  "API Integration",
  "Performance Optimization",
  // "UI Development",
  "Accessibility",
];

export default function Skills({ darkMode }: SkillsProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container relative overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span
            className={`text-xs font-bold tracking-[0.35em] uppercase ${
              darkMode ? "text-primary-light" : "text-primary"
            }`}
          >
            Technical Expertise
          </span>

          <h2 className="heading-lg mt-6 mb-6">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-dark-muted" : "text-light-muted"
            }`}
          >
            Building modern, scalable, and performant web applications using
            industry-standard technologies and development practices.
          </p>
        </motion.div>

        {/* Main Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="flex flex-wrap justify-center gap-5">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className={`
                  px-6 py-4 rounded-2xl
                  flex items-center gap-3
                  backdrop-blur-sm
                  transition-all duration-300
                  ${
                    darkMode
                      ? "bg-white/[0.03] border border-white/10 hover:border-white/20"
                      : "bg-white border border-black/5 shadow-lg"
                  }
                `}
              >
                <tech.icon
                  size={24}
                  style={{ color: tech.color }}
                />
                <span className="font-semibold">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className={`h-px w-full mb-20 ${
            darkMode ? "bg-white/10" : "bg-black/10"
          }`}
        />

        {/* Currently Learning */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-center text-2xl font-bold mb-10">
            Currently Learning
          </h3>

          <div className="flex justify-center flex-wrap gap-5">
            {learningStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20"
              >
                <tech.icon
                  size={22}
                  style={{ color: tech.color }}
                />
                <span className="font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-center text-2xl font-bold mb-10">
            Core Strengths
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {strengths.map((strength) => (
              <span
                key={strength}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium
                  ${
                    darkMode
                      ? "bg-white/5 border border-white/10"
                      : "bg-black/5 border border-black/10"
                  }
                `}
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}