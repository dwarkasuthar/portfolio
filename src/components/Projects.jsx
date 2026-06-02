import { motion } from "framer-motion";
import { useInView } from "./useInView";
import {
  FiExternalLink,
  FiArrowRight,
  FiSmartphone,
  FiMonitor,
} from "react-icons/fi";

const projects = [
  {
    title: "Modern Task Management",
    Subtitle: "TODO List App",
    category: "Product Design / Web App",
    description:
      "A data-driven task architecture designed for high-performance teams. Built with React and Framer Motion for optimal efficiency.",
    tags: ["React", "Tailwind", "Product Design"],
    emoji: "📝",
    gradient: "from-[#6366f1] to-[#818cf8]",
    link: "https://todo-app-dk.vercel.app/",
    type: "Web",
  },
  {
    title: "Calculator ",
    Subtitle: "calculator",
    category: "Fintech Interface / UI Kit",
    description:
      "An advanced analytics engine with real-time data visualization and complex state management. Focuses on clarity and user trust.",
    tags: ["Next.js", "Chart.js", "Fintech"],
    emoji: "📊",
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
    link: "https://calculator-pro-1.vercel.app/",
    type: "Systems",
  },
];

export default function Projects({ darkMode }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" className="section-container relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span
                className={`text-[10px] font-bold tracking-[0.4em] uppercase ${darkMode ? "text-primary-light" : "text-primary"}`}
              >
                Case Studies
              </span>
            </div>
            <h2 className="heading-lg leading-none">
              Transforming <br />{" "}
              <span className="gradient-text">Concepts</span> into Reality.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p
              className={`text-lg font-medium max-w-sm ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
            >
              Selected works that demonstrate technical proficiency and a
              user-centric approach to design.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`group grid lg:grid-cols-12 gap-16 items-center`}
            >
              {/* Image side */}
              <div
                className={`lg:col-span-5 order-1 hidden sm:block ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-gradient-to-br ${project.gradient} p-12 group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl`}
                >
                  {/* Abstract Mockup Elements */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                  <div className="relative h-full w-full glass rounded-[2.5rem] border-white/20 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-white/10 text-[10px] uppercase font-bold text-white tracking-widest">
                        {project.type}
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center ">
                      <div className="text-9xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ">
                        {project.emoji}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                      <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div
                className={`lg:col-span-5 order-1 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div
                  className={`mb-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase ${darkMode ? "text-primary-light" : "text-primary"}`}
                >
                  {project.type === "Web" ? <FiMonitor /> : <FiSmartphone />}
                  {project.category}
                </div>
                <h3 className="heading-lg mb-6 leading-[1.1]">
                  {project.title}
                </h3>
                <p
                  className={`text-xl leading-relaxed mb-6 font-medium ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
                >
                  {project.Subtitle}
                </p>
                <p
                  className={`text-xl leading-relaxed mb-0 font-medium ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8 mb-12">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase ${
                        darkMode
                          ? "bg-white/5 text-dark-muted border border-white/5"
                          : "bg-black/5 text-light-muted border border-black/5"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}-link`}
                    className="group/link flex items-center gap-3 font-black text-sm tracking-widest uppercase py-2 relative overflow-hidden"
                  >
                    Explore Case Study
                    <FiArrowRight className="group-hover/link:translate-x-2 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full glass border-white/10 hover:scale-110 transition-transform duration-300 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    <FiExternalLink size={20} />
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
