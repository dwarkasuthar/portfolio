"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { useInView } from "./useInView";

const experiences = [
  {
    company: "Pinepesoft Private Limited",
    location: "Delhi, India",
    promotion: "Promoted from Intern to Junior Frontend Developer",
    positions: [
      {
        role: "Junior Frontend Developer",
        period: "Apr 2026 - Present",
        current: true,
        description:
          "Developing and maintaining scalable web applications using React.js, Next.js, and Tailwind CSS. Collaborating with designers and backend developers to build performant, responsive, and user-focused experiences.",
      },
      {
        role: "Frontend Development Intern",
        period: "Jan 2026 - Mar 2026",
        current: false,
        description:
          "Contributed to frontend development, UI implementation, and feature enhancements while gaining hands-on experience with modern web technologies and development workflows.",
      },
    ],
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      // "REST APIs",
      // "Git",
      // "Responsive Design",
    ],
  },
];

export default function Experience({ darkMode }) {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      <div className="section-container max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block text-sm font-semibold tracking-[0.25em] uppercase mb-4 ${
              darkMode ? "text-primary-light" : "text-primary"
            }`}
          >
            Experience
          </span>

          <h2 className="heading-lg mb-5">
            Professional <span className="gradient-text">Journey</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? "text-dark-muted" : "text-light-muted"
            }`}
          >
            My growth from an intern to a full-time frontend developer,
            building modern web applications and contributing to real-world
            products.
          </p>
        </motion.div>

        {experiences.map((company, companyIndex) => (
          <motion.div
            key={company.company}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: companyIndex * 0.2,
            }}
            className={`relative rounded-3xl overflow-hidden ${
              darkMode
                ? "bg-dark-surface border border-white/10"
                : "bg-white border border-black/10 shadow-xl"
            }`}
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 p-8 md:p-10">
              {/* Company Header */}
              <div className="mb-8">
                <h3
                  className={`text-3xl font-bold mb-3 ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {company.company}
                </h3>

                <div
                  className={`flex items-center gap-2 text-sm mb-4 ${
                    darkMode ? "text-dark-muted" : "text-light-muted"
                  }`}
                >
                  <FiMapPin size={14} />
                  {company.location}
                </div>

                {/* Promotion Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                  <FiArrowUpRight />
                  {company.promotion}
                </div>
              </div>

              {/* Timeline */}
              <div className="relative ml-2">
                {/* Vertical Line */}
                <div
                  className={`absolute left-3 top-0 bottom-0 w-px ${
                    darkMode ? "bg-white/10" : "bg-black/10"
                  }`}
                />

                <div className="space-y-10">
                  {company.positions.map((position, index) => (
                    <motion.div
                      key={position.role}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.15,
                      }}
                      className="relative pl-12"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-0 top-2 w-7 h-7 rounded-full flex items-center justify-center ${
                          position.current
                            ? "bg-primary"
                            : darkMode
                            ? "bg-white/20"
                            : "bg-black/20"
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      {/* Role */}
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4
                          className={`text-xl font-semibold ${
                            darkMode
                              ? "text-dark-text"
                              : "text-light-text"
                          }`}
                        >
                          {position.role}
                        </h4>

                        {position.current && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            Current
                          </span>
                        )}
                      </div>

                      <div
                        className={`text-sm font-medium mb-4 ${
                          darkMode
                            ? "text-dark-muted"
                            : "text-light-muted"
                        }`}
                      >
                        {position.period}
                      </div>

                      <p
                        className={`leading-relaxed ${
                          darkMode
                            ? "text-dark-muted"
                            : "text-light-muted"
                        }`}
                      >
                        {position.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-3">
                  {company.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}