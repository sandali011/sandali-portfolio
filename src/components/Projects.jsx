import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiLock } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const accentMap = {
  cyan:    'border-cyan-400/50   text-cyan-400',
  purple:  'border-purple-400/50 text-purple-400',
  emerald: 'border-emerald-400/50 text-emerald-400',
}

function ProjectCard({ project, index }) {
  const accent = accentMap[project.accentColor] ?? accentMap.cyan

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
    >
      {/* Top colour bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl select-none">{project.emoji}</span>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              {!project.github && !project.live && (
                <span className="inline-flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                  <FiLock size={10} />
                  Private
                </span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="p-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <FiGithub size={15} />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className={`p-2 rounded-lg border text-gray-200 hover:scale-105 transition-all ${accent}`}
              >
                <FiExternalLink size={15} />
              </a>
            ) : null}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-sm leading-relaxed mb-5 font-normal">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-gray-300 text-xs leading-normal">
              <span className={`mt-0.5 flex-shrink-0 font-bold ${accent.split(' ')[1]}`}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium border border-white/10 bg-white/[0.06] text-gray-200 hover:border-white/20 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(34,211,238,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            A selection of projects I've built — from full-stack web apps to mobile applications
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sandali011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/15 text-gray-200 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 font-medium"
          >
            <FiGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}