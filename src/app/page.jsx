"use client";

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import BackgroundShapes from '../components/BackgroundShapes'
import Loader from '../components/Loader'
import CustomCursor from '../components/CustomCursor'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  // if (loading) {
  //   return <Loader darkMode={darkMode} />
  // }

  return (
    <div className="relative min-h-screen">
      <BackgroundShapes />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <ScrollToTop darkMode={darkMode} />
    </div>
  )
}

export default App
