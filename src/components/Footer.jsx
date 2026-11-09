import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const footerLinks = [
  { icon: FiGithub,   href: personalInfo.github,               label: 'GitHub',   external: true },
  { icon: FiLinkedin, href: personalInfo.linkedin,              label: 'LinkedIn', external: true },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`,    label: 'Email',    external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left: Attribution */}
          <p className="text-gray-700 text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            Designed &amp; built with
            <FiHeart className="text-pink-500/80" size={13} />
            by
            <span className="text-gray-500 font-medium">Sandali Aloka</span>
            &mdash;
            <span>© {year}</span>
          </p>

          {/* Right: Social icons */}
          <div className="flex items-center gap-3">
            {footerLinks.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 rounded-lg text-gray-700 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
