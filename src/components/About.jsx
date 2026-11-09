import { motion } from 'framer-motion'
import { FiCode, FiServer, FiCloud, FiZap } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend',
    desc: 'Building responsive, accessible UIs with React 19, JavaScript & Tailwind CSS',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/15 to-cyan-500/5',
    border: 'hover:border-cyan-400/25',
  },
  {
    icon: FiServer,
    title: 'Backend',
    desc: 'Developing RESTful APIs with Python & FastAPI, expanding into Node.js',
    color: 'text-purple-400',
    bg: 'from-purple-500/15 to-purple-500/5',
    border: 'hover:border-purple-400/25',
  },
  {
    icon: FiCloud,
    title: 'Deployment & Tools',
    desc: 'Working with Docker containers, Git workflows, Vercel & CI/CD basics',
    color: 'text-blue-400',
    bg: 'from-blue-500/15 to-blue-500/5',
    border: 'hover:border-blue-400/25',
  },
  {
    icon: FiZap,
    title: 'Continuous Learning',
    desc: 'Currently mastering Node.js, Express, Full-Stack Open & cloud concepts',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/15 to-emerald-500/5',
    border: 'hover:border-emerald-400/25',
  },
]

const traits = ['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented']

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(168,85,247,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Who Am I?</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Bio */}
          <div className="space-y-5">
            <motion.p {...fadeUp(0.05)} className="text-gray-100 text-lg leading-relaxed font-medium">
              I'm{' '}
              <span className="text-cyan-300 font-semibold">Sandali Aloka</span>, an IT
              undergraduate at the{' '}
              <span className="text-purple-300 font-semibold">
                Institute of Technology, University of Moratuwa (ITUM)
              </span>
              , specializing in building clean, user-centric full-stack web and mobile applications.
            </motion.p>

            <motion.p {...fadeUp(0.1)} className="text-gray-300 text-base leading-relaxed">
              I focus on building reliable applications — from smooth React frontends to robust
              REST APIs with Python &amp; FastAPI, supported by PostgreSQL and Docker. I am passionate
              about clean code, modern UI design, and learning cutting-edge technologies.
            </motion.p>

            <motion.p {...fadeUp(0.15)} className="text-gray-300 text-base leading-relaxed">
              When I'm not coding, I'm working through global technical coursework like University
              of Helsinki's Full Stack Open and preparing for a high-impact Software Engineering internship.
            </motion.p>

            {/* Trait badges */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2 pt-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                >
                  {trait}
                </span>
              ))}
            </motion.div>

            {/* Quick stat strip */}
            <motion.div
              {...fadeUp(0.25)}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Tech Stack', value: '12+' },
                { label: 'Focus', value: 'Full-Stack' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl border border-white/10 bg-white/[0.04]"
                >
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-gray-300 text-xs mt-1 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <motion.div
                key={title}
                {...fadeUp(0.08 * i)}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-xl border border-white/10 bg-white/[0.03] ${border} transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={color} size={22} />
                </div>
                <h3 className="text-white font-semibold mb-1.5 text-base">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
