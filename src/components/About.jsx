import { motion } from "framer-motion";
import { useInView } from "./useInView";
import Image from "next/image";

export default function About({ darkMode }) {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="section-container" ref={ref}>
      <div className="grid lg:grid-cols-1 gap-20 items-center">
        {/* Left: Graphic Content */}
        {/* <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-square relative flex items-center justify-center">
            Background Blob Decorations
            <div className={`absolute inset-0 blur-3xl opacity-20 bg-gradient-to-tr from-primary to-secondary rounded-full animate-pulse`} />
            
            Main Visual Component
            <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden border ${
              darkMode ? 'bg-dark-surface border-white/5' : 'bg-white border-black/5'
            } shadow-2xl flex flex-col`}>
              Fake UI Header
              <div className={`h-12 flex items-center px-6 gap-2 border-b ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              Profile/About Content Branding
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-8xl font-black gradient-text">
                DS
                <div className={`mt-4 text-sm font-bold tracking-[0.4em] uppercase ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
                  Frontend
                </div>
              </div>
            </div>

            Floating Info Cards
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute top-10 -right-8 p-6 rounded-2xl glass shadow-2xl z-10 max-w-[180px]`}
            >
              <div className="text-primary font-bold text-lg mb-1">2026</div>
              <div className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
                Current Year
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={`absolute bottom-10 -left-8 p-6 rounded-2xl glass shadow-2xl z-10 max-w-[200px]`}
            >
              <div className="text-secondary font-bold text-lg mb-1">BCA Student</div>
              <div className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
                Education Focus
              </div>
            </motion.div>
          </div>
        </motion.div> */}

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span
              className={`text-xs font-bold tracking-[0.3em] uppercase ${darkMode ? "text-primary-light" : "text-primary"}`}
            >
              The Journey
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            <h2 className="heading-lg">
              Designing digital <br />
              <span className="text-primary">experiences</span> that matter.
            </h2>

            {/* Image Container */}
            <div className="relative group flex-shrink-0 -mt-6 lg:-mt-20 rounded-2xl border-5 border-white/10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-9 group-hover:-translate-y-9 group-hover:shadow-2xl group-hover:shadow-green-500/50 mx-auto lg:mx-0">
              <div
                className="rounded-lg border-2 border-white/10 transition-all duration-300 ease-out 
                    group-hover:scale-110 group-hover:-translate-x-6 lg:group-hover:-translate-x-7 
                    group-hover:-translate-y-6 lg:group-hover:-translate-y-7 
                    group-hover:shadow-2xl group-hover:shadow-green-500/50"
              >
                <Image
                  src="/dwarka1.jpeg"
                  alt="Profile Image"
                  width={280}
                  height={280}
                  className="rounded-lg w-72 h-72 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-cover hidden lg:block 
                   transition-all duration-500 ease-out"
                  style={{
                    filter: "saturate(1.1) brightness(0.95) hue-rotate(15deg)",
                  }}
                />

                {/* Green Overlay */}
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-1200 
                   group-hover:bg-transparent lg:bg-green-500/20 group-hover:opacity-0"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={`space-y-6 text-lg leading-relaxed font-medium mt-10 lg:mt-8 ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
          >
            <p>
              I am a{" "}
              <span className={darkMode ? "text-dark-text" : "text-light-text"}>
                BCA student
              </span>{" "}
              from India with an interest in web development and UI/UX design. I
              enjoy building responsive and user-friendly web applications while
              continuously improving my technical skills.
            </p>
            <p>
              I believe that good software should be both functional and easy to
              use. Through my projects and learning experiences, I focus on
              creating clean interfaces and writing maintainable code.
            </p>
            <p>
              Currently, I am working as an Intern at{" "}
              <span className={darkMode ? "text-dark-text" : "text-light-text"}>
                Pinepesoft Private Limited
              </span>
              , where I gain practical experience by contributing to real-world
              projects and collaborating with development teams.
            </p>
          </div>

          {/* Stats/Details Grid */}
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-dark-border">
            <div>
              <div className="text-2xl font-bold mb-1">06 Months+</div>
              <div
                className={`text-xs font-bold tracking-widest uppercase ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
              >
                Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">03+</div>
              <div
                className={`text-xs font-bold tracking-widest uppercase ${darkMode ? "text-dark-muted" : "text-light-muted"}`}
              >
                Projects Built
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
