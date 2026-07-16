import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Available Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 transition-all duration-500 hover:scale-105 ${darkMode
              ? 'bg-primary/5 text-primary border border-primary/20'
              : 'bg-primary/5 text-primary-dark border border-primary/15'
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-4 sm:mb-6 leading-[0.95]"
          >
            <span className={darkMode ? 'text-dark-text' : 'text-light-text'}>
              Hi, I'm{' '}
            </span>
            <span className="gradient-text inline-block hover:scale-105 transition-all duration-300 cursor-pointer">
              Dwarka
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold tracking-tight ${darkMode ? 'text-dark-muted' : 'text-light-muted'
                }`}
            >
              {typedText}
              <span className="typing-cursor" />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 px-4 ${darkMode ? 'text-primary-light' : 'text-primary'
              }`}
          >
            BCA STUDENT • FRONTEND DEVELOPER
          </motion.p>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg max-w-xl md:max-w-2xl mb-10 sm:mb-12 leading-relaxed px-4 sm:px-6 font-medium ${darkMode ? 'text-dark-muted' : 'text-light-muted'
              }`}
          >
            Passionate about building{' '}
            <span className={darkMode ? 'text-dark-text' : 'text-light-text'}>
              modern, responsive, and user-friendly
            </span>{' '}
            web experiences using cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0 justify-center"
          >
            {/* View Projects Button */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl font-bold text-white text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)' }}
            >
              <FiExternalLink size={18} />
              View Projects
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl font-bold text-sm sm:text-base border-2 transition-all duration-300 hover:scale-105 active:scale-95  ${darkMode
                ? 'border-white/20 text-white hover:border-primary hover:bg-white/5'
                : 'border-black/20 text-light-text hover:border-primary hover:bg-black/5'
                }`}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute -bottom-9 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer animate-bounce"
          >
            <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${darkMode ? 'text-dark-muted' : 'text-light-muted'
              }`}>
              SCROLL DOWN
            </span>
            <div className={`w-[1px] h-12 bg-gradient-to-b from-primary to-transparent`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}