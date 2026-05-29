import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500`}
      >
        <div className="section-container !py-0">
          <nav className={`h-20 px-8 flex items-center justify-between rounded-[2rem] transition-all duration-500 border ${
            scrolled
              ? 'glass shadow-2xl shadow-black/10'
              : 'bg-transparent border-transparent'
          }`}>
            {/* Branding */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
              className="group text-2xl font-black gradient-text font-mono tracking-tighter"
            >
              <span className="opacity-30 group-hover:opacity-100 transition-opacity">_</span>
            </a>

            {/* Links Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary'
                      : darkMode
                        ? 'text-dark-muted hover:text-white'
                        : 'text-light-muted hover:text-black'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNavTab"
                      className={`absolute inset-0 rounded-full ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Interaction Group */}
            <div className="flex items-center gap-4">
              {/* Theme Switcher */}
              <button
                onClick={toggleDarkMode}
                className={`p-3.5 rounded-2xl glass transition-all duration-500 hover:rotate-[360deg] ${
                  darkMode ? 'text-yellow-400 border-white/5 bg-white/5' : 'text-gray-700 border-black/5 bg-black/5'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Mobile Trigger */}
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className={`lg:hidden p-3.5 rounded-2xl glass transition-all duration-300 ${
                   darkMode ? 'text-white border-white/5' : 'text-black border-black/5'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu with Backdrop Blur */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop - Blur Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-[55] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed inset-y-0 right-0 w-full sm:w-[400px] z-[60] glass p-12 flex flex-col justify-between ${
                darkMode 
                  ? 'bg-dark-surface border-l border-white/5' 
                  : 'bg-white border-l border-black/5 shadow-2xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-2xl font-black gradient-text">Menu</div>
                  <button 
                    onClick={() => setMobileOpen(false)} 
                    className={`p-4 rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/5'}`}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                      className={`block py-4 text-4xl font-black tracking-tighter ${
                        activeSection === link.href.slice(1)
                        ? 'gradient-text'
                        : darkMode ? 'text-white/80' : 'text-black/50'
                      } hover:text-primary transition-colors`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <div className={`text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-30`}>
                  Social Channels
                </div>
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                    <FiGithub size={20} />
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                    <FiLinkedin size={20} />
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}