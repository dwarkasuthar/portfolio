"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";
import { useInView } from "./useInView";

interface Project {
  title: string;
  // category: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Task Management App",
    description:
      "A responsive task management application with task creation, editing, filtering, and local storage persistence.",
    image: "/todo1.png",
    tags: ["React", "Tailwind CSS", "Local Storage"],
    live: "https://todo-app-dk.vercel.app/",
    github: "https://github.com/dwarkasuthar/todo-app",
  },
  {
    title: "Modern Calculator",
    description:
      "A modern calculator built with React featuring responsive design and smooth user interactions.",
    image: "/calculator.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://calculator-pro-1.vercel.app/",
    github: "https://github.com/dwarkasuthar/calculator-pro",
  },
];

export default function Projects({
  darkMode,
}: {
  darkMode: boolean;
}) {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className={`text-sm font-semibold tracking-[0.25em] uppercase ${
              darkMode ? "text-primary-light" : "text-primary"
            }`}
          >
            Portfolio
          </span>

          <h2 className="heading-lg mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p
            className={`max-w-3xl mx-auto text-lg ${
              darkMode ? "text-dark-muted" : "text-light-muted"
            }`}
          >
            A collection of projects showcasing my frontend development
            skills, UI design approach, and passion for building modern web
            experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`group overflow-hidden rounded-3xl transition-all duration-300 ${
                darkMode
                  ? "bg-dark-surface border border-white/10 hover:border-primary/40"
                  : "bg-white border border-black/10 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                  {/* <div
                    className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${
                      darkMode ? "text-primary-light" : "text-primary"
                    }`}
                  >
                    {project.category}
                  </div> */}

                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`leading-relaxed mb-6 ${
                    darkMode ? "text-dark-muted" : "text-light-muted"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium hover:scale-105 transition"
                  >
                    Live Demo
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
                      darkMode
                        ? "border-white/10 hover:bg-white/5"
                        : "border-black/10 hover:bg-black/5"
                    }`}
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition ${
                      darkMode
                        ? "border-white/10 hover:bg-white/5"
                        : "border-black/10 hover:bg-black/5"
                    }`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}