import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    hoverColor: 'hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'sandali-aloka',
    href: personalInfo.linkedin,
    hoverColor: 'hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5',
    external: true,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'sandali011',
    href: personalInfo.github,
    hoverColor: 'hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-400/5',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(168,85,247,0.08),transparent)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm actively looking for{' '}
            <span className="text-cyan-400">internship opportunities</span> and open to collaborating
            on exciting projects. Whether you have a question, a project idea, or just want to say
            hi — my inbox is always open!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href, hoverColor, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col items-center gap-3 p-7 rounded-xl border border-white/5 bg-white/[0.02] text-gray-500 transition-all duration-300 ${hoverColor}`}
            >
              <Icon size={26} />
              <div className="text-center">
                <p className="text-xs text-gray-700 mb-1">{label}</p>
                <p className="text-sm font-medium break-all">{value}</p>
              </div>
              <FiArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-shadow"
          >
            <FiMail size={22} />
            Say Hello 👋
          </motion.a>
          <p className="text-gray-700 text-sm mt-4">I usually respond within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
