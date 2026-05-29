import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'Frontend / Web Development Intern',
    company: 'Pinepesoft Private Limited',
    period: '2 january 2026 - Present',
    location: 'Delhi, India',
    description: 'Spearheading the development of modern web architectures using Next.js and Tailwind. Collaborating with cross-functional teams to deliver pixel-perfect user interfaces.',
    tags: ['React.js', 'Next.js', 'Tailwind', 'UI/UX', 'Collaborative Development'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
  }
]

export default function Experience({ darkMode }) {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Visual Accent */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent`} />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Header Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-[1px] bg-primary" />
                 <span className={`text-[10px] font-bold tracking-[0.4em] uppercase ${darkMode ? 'text-primary-light' : 'text-primary'}`}>Career Log</span>
              </div>
              <h2 className="heading-lg mb-8 leading-none">
                Professional <br /> <span className="gradient-text">Trajectory</span>
              </h2>
              <p className={`text-lg font-medium leading-relaxed mb-10 ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
                A brief overview of my professional growth, documenting the milestones and roles that have shaped my technical foundation.
              </p>

              <div className={`p-8 rounded-[2rem] border ${darkMode ? 'bg-dark-surface border-white/5' : 'bg-white border-black/5 shadow-xl shadow-black/[0.02]'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="text-sm font-bold tracking-tight">Currently open to freelance and full-time inquiries.</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience List Column */}
          <div className="lg:col-span-7">
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className={`group relative p-10 rounded-[3rem] transition-all duration-500 overflow-hidden ${
                    darkMode 
                      ? 'bg-dark-surface hover:bg-dark-card border border-white/5' 
                      : 'bg-white border border-black/5 shadow-xl shadow-black/[0.02] hover:shadow-2xl'
                  }`}
                >
                  {/* Subtle Gradient Background */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${exp.gradient} blur-3xl opacity-20 pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                          <FiBriefcase size={24} />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-primary font-bold text-sm">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                        darkMode ? 'bg-white/5 border-white/10 text-dark-muted' : 'bg-black/5 border-black/10 text-light-muted'
                      }`}>
                        <FiCalendar className="text-primary" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6 text-sm font-medium opacity-60 italic">
                       <FiMapPin size={14} className="text-secondary" />
                       {exp.location}
                    </div>

                    <p className={`text-lg leading-relaxed mb-10 font-medium ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {exp.tags.map(tag => (
                         <span key={tag} className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase ${
                           darkMode ? 'bg-white/5 text-dark-muted border border-white/5' : 'bg-black/5 text-light-muted border border-black/5'
                         }`}>
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
