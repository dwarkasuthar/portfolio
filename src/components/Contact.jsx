import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/dwarkasuthar',
    username: '@dwarkasuthar',
    description: 'Check out my repositories and open source contributions.',
    gradient: 'from-[#333] to-[#555]',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/dwarka-suthar-078a5936a/',
    username: 'Dwarka Suthar',
    description: 'Let\'s connect professionally and explore opportunities.',
    gradient: 'from-[#0077B5] to-[#00A0DC]',
  },
]

export default function Contact({ darkMode }) {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            darkMode ? 'text-primary-light' : 'text-primary'
          }`}>
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${
            darkMode ? 'text-dark-muted' : 'text-light-muted'
          }`}>
            I'm always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`social-${social.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group block p-6 rounded-2xl card-hover ${
                darkMode
                  ? 'bg-dark-card/60 border border-dark-border/50 hover:border-primary/30'
                  : 'bg-white border border-gray-100 hover:border-primary/20 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${social.gradient}`}>
                  <social.icon size={22} className="text-white" />
                </div>
                <FiArrowUpRight
                  size={18}
                  className={`opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    darkMode ? 'text-dark-muted' : 'text-light-muted'
                  }`}
                />
              </div>

              <h3 className={`text-lg font-bold mb-1 ${
                darkMode ? 'text-dark-text' : 'text-light-text'
              }`}>
                {social.name}
              </h3>

              <p className={`text-xs font-mono mb-3 ${
                darkMode ? 'text-primary-light' : 'text-primary'
              }`}>
                {social.username}
              </p>

              <p className={`text-sm ${
                darkMode ? 'text-dark-muted' : 'text-light-muted'
              }`}>
                {social.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className={`inline-flex flex-col items-center p-8 rounded-2xl ${
            darkMode
              ? 'bg-dark-card/40 border border-dark-border/30'
              : 'bg-gray-50 border border-gray-100'
          }`}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-dark-text' : 'text-light-text'
            }`}>
              Open for Opportunities
            </h3>
            <p className={`text-sm mb-6 max-w-md ${
              darkMode ? 'text-dark-muted' : 'text-light-muted'
            }`}>
              Whether it's an internship, freelance work, or a frontend developer role —
              I'd love to hear from you!
            </p>
            <a
              href="https://www.linkedin.com/in/dwarka-suthar-078a5936a/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-connect-btn"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)' }}
            >
              <FiLinkedin size={16} />
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
