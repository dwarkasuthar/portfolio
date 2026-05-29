import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiInstagram, FiArrowUp } from 'react-icons/fi'

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/dwarkasuthar', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/dwarka-suthar-078a5936a/', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' }
  ]

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className={`relative overflow-hidden ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="section-container">
        {/* Call to Action Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary rounded-full" />
              <span className={`text-xs font-bold tracking-[0.3em] uppercase ${darkMode ? 'text-primary-light' : 'text-primary'}`}>
                Let's Build Something
              </span>
            </div>
            <h2 className="heading-lg leading-[1.1] mb-10">
              Have a visionary <br />
              <span className="gradient-text">project in mind?</span>
            </h2>
            <a
              href="mailto:dwarkasuthar471@gmail.com"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-[2rem] bg-primary text-white font-black text-sm tracking-widest uppercase hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-500"
            >
              <FiMail className="text-xl" />
              Start a Conversation
            </a>
          </div>

          <div className="lg:text-right">
            <div className={`text-xl font-medium mb-10 ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}>
              Based in India. <br />
              Available worldwide.
            </div>
            <div className="flex lg:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 rounded-3xl glass transition-all duration-500 hover:scale-110 hover:-rotate-6 hover:shadow-2xl ${
                    darkMode ? 'text-white border-white/5 hover:bg-white/10' : 'text-black border-black/5 hover:bg-black/5'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className={`w-full h-[1px] ${darkMode ? 'bg-white' : 'bg-black/40'} mb-16`} />

        {/* Bottom Footer Section */}
        <div className="flex flex-col lg:flex items-center justify-between gap-8">
          
          {/* Left - Copyright */}
          <div className="flex items-center gap-10">
            <div className="text-2xl font-black gradient-text font-mono tracking-tighter">
              <span className="opacity-30">_</span>
            </div>
            <p className={`text-sm font-bold opacity-50`}>
              © {currentYear} Dwarka Suthar. Built with Intent.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  darkMode ? 'text-dark-muted hover:text-white' : 'text-light-muted hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right - Scroll to Top */}
          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-300 ${darkMode ? 'text-dark-muted hover:text-white' : 'text-light-muted hover:text-black'}`}
          >
            Scroll to top
            <div className={`p-4 rounded-full glass border-white/10 group-hover:bg-primary group-hover:text-black dark:group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
              <FiArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}