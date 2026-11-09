import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiSpringboot,
  SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiGithubactions, SiVercel, SiPostman,
  SiFlutter, SiDart, SiSocketdotio,
} from 'react-icons/si'
import { VscVscode, VscCode } from 'react-icons/vsc'
import { FaCubes, FaDiagramProject, FaRotate, FaNetworkWired } from 'react-icons/fa6'
import { skillCategories, softSkills } from '../data/portfolioData'

// Icon + color map — keyed by skill name
const skillIconMap = {
  'HTML5':          { icon: SiHtml5,          color: '#E34F26' },
  'CSS3':           { icon: SiCss,            color: '#1572B6' },
  'JavaScript':     { icon: SiJavascript,    color: '#F7DF1E' },
  'Dart':           { icon: SiDart,           color: '#0175C2' },
  'Flutter':        { icon: SiFlutter,        color: '#02569B' },
  'React':          { icon: SiReact,          color: '#61DAFB' },
  'Tailwind CSS':   { icon: SiTailwindcss,    color: '#06B6D4' },
  'Vite':           { icon: SiVite,           color: '#646CFF' },
  'Node.js':        { icon: SiNodedotjs,      color: '#339933' },
  'Express.js':     { icon: SiExpress,        color: '#bbbbbb' },
  'Python':         { icon: SiPython,         color: '#3776AB' },
  'FastAPI':        { icon: SiFastapi,        color: '#009688' },
  'Spring Boot':    { icon: SiSpringboot,     color: '#6DB33F' },
  'MongoDB':        { icon: SiMongodb,        color: '#47A248' },
  'PostgreSQL':     { icon: SiPostgresql,     color: '#336791' },
  'MySQL':          { icon: SiMysql,          color: '#4479A1' },
  'Docker':         { icon: SiDocker,         color: '#2496ED' },
  'Git':            { icon: SiGit,            color: '#F05032' },
  'GitHub':         { icon: SiGithub,         color: '#cccccc' },
  'GitHub Actions': { icon: SiGithubactions,  color: '#2088FF' },
  'Vercel':         { icon: SiVercel,         color: '#cccccc' },
  'Postman':        { icon: SiPostman,        color: '#FF6C37' },
  'Socket.io':      { icon: SiSocketdotio,    color: '#cccccc' },
  'VS Code':        { icon: VscVscode,        color: '#007ACC' },
  'REST APIs':      { icon: FaNetworkWired,   color: '#38BDF8' },
  'OOP Concepts':   { icon: FaCubes,          color: '#F59E0B' },
  'Microservices':  { icon: FaDiagramProject, color: '#A855F7' },
  'SDLC':           { icon: FaRotate,         color: '#10B981' },
  'Clean Code':     { icon: VscCode,          color: '#EC4899' },
}

const categoryColorMap = {
  cyan:   'border-cyan-400/30   bg-cyan-400/5   text-cyan-400',
  blue:   'border-blue-400/30   bg-blue-400/5   text-blue-400',
  purple: 'border-purple-400/30 bg-purple-400/5 text-purple-400',
  green:  'border-green-400/30  bg-green-400/5  text-green-400',
  orange: 'border-orange-400/30 bg-orange-400/5 text-orange-400',
  pink:   'border-pink-400/30   bg-pink-400/5   text-pink-400',
}

function SkillChip({ name }) {
  const meta = skillIconMap[name]
  const Icon = meta?.icon

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.05 }}
      className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl border border-white/5 bg-white/[0.015] hover:border-white/12 hover:bg-white/[0.04] transition-all duration-200 cursor-default group min-w-[80px]"
    >
      {Icon ? (
        <Icon size={26} style={{ color: meta.color }} className="group-hover:scale-110 transition-transform" />
      ) : (
        <span className="text-lg">⚙️</span>
      )}
      <span className="text-gray-400 text-xs text-center leading-tight group-hover:text-gray-200 transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(168,85,247,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Tech Stack &amp; Fundamentals
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Languages, frameworks, architecture concepts, and developer tools in my workflow
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map(({ label, color, skills }, catIndex) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.06 }}
            >
              {/* Category label row */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${categoryColorMap[color] || categoryColorMap.cyan}`}
                >
                  {label}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {skills.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <SkillChip name={name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-yellow-400/30 bg-yellow-400/5 text-yellow-400">
              Soft Skills &amp; Working Style
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -2 }}
                className="px-4 py-2 rounded-full border border-yellow-400/15 bg-yellow-400/5 text-yellow-300/80 text-sm cursor-default hover:border-yellow-400/35 hover:text-yellow-200 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
