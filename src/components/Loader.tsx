import { motion } from 'framer-motion'

export default function Loader({ darkMode }) {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated logo */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #00D9FF)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <div className={`absolute inset-1 rounded-xl flex items-center justify-center ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
            <motion.span
              className="text-2xl font-bold gradient-text font-mono"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              DS
            </motion.span>
          </div>
        </div>

        {/* Loading bar */}
        <div className={`w-48 h-1 rounded-full overflow-hidden ${darkMode ? 'bg-dark-card' : 'bg-gray-200'}`}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #6C63FF, #00D9FF)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          className={`text-sm tracking-widest uppercase ${darkMode ? 'text-dark-muted' : 'text-light-muted'}`}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
