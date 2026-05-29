import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiExternalLink } from 'react-icons/fi'

export default function Hero({ darkMode }) {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Frontend Developer'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-5 transition-all duration-500 hover:scale-105 transition-all duration-300 cursor-pointer ${
              darkMode
                ? 'bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 mx-12'
                : 'bg-primary/5 text-primary-dark border border-primary/15 hover:bg-primary/10 mx-12'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
          >
            <span className={darkMode ? 'text-dark-text' : 'text-light-text'}>Hi, I'm </span>
            <span className="gradient-text inline-block hover:scale-105 transition-all duration-300 cursor-pointer">Dwarka</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold tracking-tight hover:scale-105 transition-all duration-300 cursor-pointer ${
              darkMode ? 'text-dark-muted' : 'text-light-muted'
            }`}>
              {typedText}
              <span className="typing-cursor" />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-sm sm:text-base font-bold tracking-widest uppercase mb-6 ${
              darkMode ? 'text-primary-light' : 'text-primary'
            }`}
          >
            BCA Student &bull; Frontend Developer &bull; UI/UX Enthusiast
          </motion.p>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed font-medium md:px-10 ${
              darkMode ? 'text-dark-muted' : 'text-light-muted'
            }`}
          >
            Passionate about building <span className={darkMode ? 'text-dark-text' : 'text-light-text'}>modern, responsive, and user-friendly</span> web
            experiences using cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 justify-center"
          >
            <a
              href="#projects"
              id="cta-projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-lg font-bold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiExternalLink size={18} />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              id="cta-contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 border-2 active:scale-95 cursor-pointer ${
                darkMode
                  ? 'border-white/10 text-dark-text hover:border-primary hover:bg-white/5'
                  : 'border-black/5 text-light-text hover:border-primary hover:bg-black/5'
              }`}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`flex flex-col items-center gap-3 ${
                darkMode ? 'text-dark-muted' : 'text-light-muted'
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
