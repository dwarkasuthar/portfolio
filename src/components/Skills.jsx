import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FiCode, FiTerminal, FiLayers, FiCpu } from 'react-icons/fi'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const frontendSkills = [
  { name: 'React', icon: SiReact, level: 'Intermediate', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate', color: '#808080' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Intermediate', color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Intermediate', color: '#38BDF8' },
  { name: 'HTML5', icon: SiHtml5, level: 'Intermediate', color: '#E44D26' },
  { name: 'CSS3', icon: SiCss, level: 'Intermediate', color: '#264DE4' },
  // { name: 'Git', icon: SiGithub, level: 'Intermediate', color: '#F05032' },
]

export default function Skills({ darkMode }) {
  const [ref, inView] = useInView(0.1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="skills" className="section-container relative overflow-hidden" ref={ref}>
      {/* Background Graphic */}
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5 mb-6">
             <FiCpu className="text-primary animate-spin-slow" />
             <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Tech Ecosystem</span>
          </div>
          <h2 className="heading-lg mb-6 leading-none">
            Modern <br /> <span className="gradient-text">Software Stack</span>
          </h2>
          <p className={`text-lg font-medium ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
            Mastering the tools that power the modern web, from core languages to specialized frameworks.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {/* Main Card: Frontend Mastery */}
          <motion.div 
            variants={cardVariants}
            className={`md:col-span-4 lg:col-span-4 p-8 rounded-[2.5rem] relative overflow-hidden group ${
              darkMode ? 'bg-dark-surface' : 'bg-white shadow-xl shadow-black/[0.02]'
            } border ${darkMode ? 'border-white/5' : 'border-black/5'}`}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">Core Frontend</h3>
                <p className={`text-sm tracking-wide ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>Industry standard expertise.</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FiCode className="text-primary" size={24} />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center p-4 rounded-3xl hover:bg-white/5 transition-colors group/item">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-12"
                    style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}20` }}
                  >
                    <skill.icon size={26} style={{ color: skill.color }} />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                  <span className={`text-[10px] font-bold uppercase mt-1 opacity-50`}>{skill.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Card: Development Environment */}
          <motion.div 
            variants={cardVariants}
            className={`md:col-span-2 lg:col-span-2 p-8 rounded-[2.5rem] flex flex-col justify-between ${
              darkMode ? 'bg-primary/10' : 'bg-primary/5'
            } border border-primary/20 hover:border-primary/40 transition-all duration-500`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <FiLayers className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">Development Tools</h3>
              <p className={`text-sm font-medium ${darkMode ? 'text-primary/70' : 'text-primary/80'}`}>Efficiency & high velocity.</p>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/10">
                <SiGithub size={20} className={darkMode ? 'text-white' : 'text-black'} />
                <span className="text-sm font-bold tracking-tight">Version Control</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/10">
                <VscVscode size={20} className="text-[#007ACC]" />
                <span className="text-sm font-bold tracking-tight">VS Code Architect</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/10">
                <FiTerminal size={18} className="text-primary" />
                <span className="text-sm font-bold tracking-tight">CLI Mastery</span>
              </div>
            </div>
          </motion.div>

          {/* Extra: Antigravity Tool Badge */}
          <motion.div 
            variants={cardVariants}
            className={`md:col-span-4 lg:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl flex flex-col items-center justify-center text-center`}
          >
            <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center mb-6 border border-white/20">
               <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-3xl text-white">⚡</motion.div>
            </div>
            <h4 className="text-xl font-black text-white mb-2">Antigravity AI</h4>
            <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase mb-4">
               Certified Basic
            </div>
            <p className="text-sm font-medium text-white/70">
              Leveraging advanced AI workflows to accelerate product delivery.
            </p>
          </motion.div>

          {/* Extra: Design Principle */}
          <motion.div 
            variants={cardVariants}
            className={`md:col-span-2 lg:col-span-4 p-8 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden ${
              darkMode ? 'bg-dark-surface' : 'bg-white'
            } border ${darkMode ? 'border-white/5' : 'border-black/5'}`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[10rem] font-black opacity-[0.02] whitespace-nowrap pointer-events-none uppercase">
              Innovation
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-center">
                 <div className="text-4xl font-black mb-2 tracking-tighter gradient-text underline underline-offset-8 decoration-primary/20">UI & UX Research</div>
                 <p className={`text-sm font-bold tracking-[0.2em] uppercase ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>Crafting meaningful human interfaces</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
