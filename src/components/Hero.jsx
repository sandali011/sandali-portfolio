import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const roles = [
  'Full-Stack Developer',
  'React & Flutter Developer',
  'IT Undergraduate @ ITUM',
  'FastAPI & Backend Explorer',
  'Open Source Enthusiast',
]

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting && display === word) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () =>
          setDisplay((prev) =>
            deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
          ),
        deleting ? 45 : 95
      )
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, index, words])

  return display
}

const socialLinks = [
  { icon: FiGithub,   href: personalInfo.github,            label: 'GitHub'   },
  { icon: FiLinkedin, href: personalInfo.linkedin,           label: 'LinkedIn' },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
]

export default function Hero() {
  const displayText = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="text-left order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-300 text-sm mb-8 select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Available for Internship &amp; Collaborations
            </motion.div>

            {/* Greeting + Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight mb-2"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Sandali</span>
              <span className="ml-2 inline-block animate-float">👋</span>
            </motion.h1>

            {/* Full name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-6 font-medium"
            >
              {personalInfo.name}
            </motion.p>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="h-10 flex items-center mb-4"
            >
              <span className="text-xl sm:text-2xl font-semibold text-gray-200">
                <span className="text-cyan-400">{displayText}</span>
                <span className="ml-0.5 inline-block w-0.5 h-6 bg-cyan-400 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Institute */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-gray-400 text-sm mb-7"
            >
              <span>🎓</span>
              <span>{personalInfo.institute}</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-gray-300 text-base leading-relaxed mb-9 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons with Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-9"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              >
                View My Work →
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-xl border border-white/15 text-gray-300 font-semibold hover:border-cyan-400/50 hover:text-white hover:bg-white/5 transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href={personalInfo.cvUrl || '/Sandali_Aloka_CV.pdf'}
                download="Sandali_Aloka_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/10"
              >
                <FiDownload size={18} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-3 rounded-xl border border-white/8 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-30 scale-110 animate-pulse-slow" />

              {/* Gradient border ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1428]">
                  <img
                    src="/profile.jpg"
                    alt="Sandali Aloka"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      if (!e.target.dataset.tried) {
                        e.target.dataset.tried = 'true';
                        e.target.src = '/photo.jpg';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Floating badge — ITUM */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-6 px-3 py-2 rounded-xl border border-white/10 bg-[#0d1428]/90 backdrop-blur-sm text-xs text-gray-300 shadow-xl"
              >
                🎓 ITUM · UoM
              </motion.div>

              {/* Floating badge — React */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-3 -right-6 px-3 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-sm text-xs text-cyan-300 shadow-xl"
              >
                ⚛️ React Dev
              </motion.div>

              {/* Floating badge — Full-Stack */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-10 px-3 py-2 rounded-xl border border-purple-400/20 bg-purple-400/10 backdrop-blur-sm text-xs text-purple-300 shadow-xl"
              >
                🚀 Full-Stack
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
