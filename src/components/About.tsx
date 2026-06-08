import { motion } from "framer-motion";
import { useInView } from "./useInView";
import Image from "next/image";

export default function About({ darkMode }) {
  const [ref, inView] = useInView(0.2);

  const skills = [
    "JavaScript",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    // "Laravel",
    // "Node.js",
    // "PHP",
    // "MySQL",
  ];

  const journey = [
    "Started BCA",
    // "Learned Web Development",
    "Built Real-World Projects",
    "Joined Pinepesoft as Frontend Intern",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-container py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute left-0 top-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" /> */}

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-30 items-center relative z-10">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div
            className="relative group shrink-0 -mt-6 lg:-mt-100 rounded-2xl border-4 dark:border-white/10 border-gray-200 hidden sm:block mx-auto lg:mx-0 transform-gpu will-change-transform
      transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-6 group-hover:-translate-y-6 
      group-hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)]"
          >
            <div className="relative overflow-hidden rounded-lg border-2 border-white/10 transform-gpu will-change-transform transition-all duration-300 ease-out group-hover:-translate-x-4 group-hover:-translate-y-4 hidden sm:block">
              <Image
                src="/dwarka1.jpeg"
                alt="Dwarka Profile"
                width={340}
                height={340}
                priority
                className="rounded-lg w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-98 object-cover transform-gpu will-change-transform
          backface-hidden transition-all duration-500 ease-out 
          filter-[saturate(1.15)_brightness(0.95)_hue-rotate(15deg)]"
              />

              {/* Green Tint */}
              <div className="absolute inset-0 rounded-lg bg-green-500/25 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-8">
            About <span className="text-primary">Me</span>
          </h2>

          <div
            className={`space-y-6 text-[17px] leading-relaxed ${darkMode ? "text-dark-muted" : "text-light-muted"
              }`}
          >
            <p>
              Hi, I am Dwarka Suthar, an frontend developer
              focused on building modern, responsive,
              and user-friendly web applications using Next.js, React.js,
              and Tailwind CSS.
            </p>

            <p>
              My journey started as a BCA student and evolved into creating
              real-world digital experiences that prioritize performance,
              accessibility, and clean code architecture.
            </p>

            <p>
              Currently working as a
              <span
                className={`font-semibold mx-1 ${darkMode ? "text-dark-text" : "text-light-text"
                  }`}
              >
                Junior Frontend Developer
              </span>
              at
              <span
                className={`font-semibold ml-1 ${darkMode ? "text-dark-text" : "text-light-text"
                  }`}
              >
                Pinepesoft Private Limited
              </span>
              , where I contribute to production-level applications and
              continuously improve my development skills.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3
              className={`text-lg font-semibold mb-4 ${darkMode ? "text-dark-text" : "text-light-text"
                }`}
            >
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div className="mt-10">
            <h3
              className={`text-lg font-semibold mb-4 ${darkMode ? "text-dark-text" : "text-light-text"
                }`}
            >
              My Journey
            </h3>

            <div className="space-y-4">
              {journey.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <p
                    className={
                      darkMode ? "text-dark-muted" : "text-light-muted"
                    }
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t ${darkMode ? "border-white/10" : "border-black/10"
              }`}
          >
            {[
              ["06+", "Months"],
              ["03+", "Projects"],
              ["10+", "Technologies"],
              ["100%", "Dedication"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-primary">{value}</div>

                <div
                  className={`text-xs uppercase tracking-widest mt-2 ${darkMode ? "text-dark-muted" : "text-light-muted"
                    }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className={`px-8 py-4 rounded-2xl border font-medium transition-all duration-300 ${
                darkMode
                  ? "border-white/10 hover:bg-white/5"
                  : "border-black/10 hover:bg-black/5"
              }`}
            >
              Contact Me
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
