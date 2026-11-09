import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiDownload, FiExternalLink, FiCheckCircle, FiX } from 'react-icons/fi'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="py-20 relative">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 flex items-center justify-center gap-2">
            <FiAward size={15} /> Learning Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Certifications
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Academic coursework and verified certifications
          </p>
        </motion.div>

        {/* Compact Certificate Card */}
        <div className="max-w-2xl mx-auto">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-[#0d1428]/70 backdrop-blur-md p-6 hover:border-cyan-400/30 transition-all duration-200 shadow-lg"
            >
              {/* Header row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    <FiAward size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {cert.issuer}
                    </h4>
                    <span className="text-xs text-gray-500">{cert.year}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                  <FiCheckCircle size={12} />
                  {cert.status}
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-lg font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Subtle status note */}
              {cert.inProgressNote && (
                <p className="text-xs text-amber-300/80 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>{cert.inProgressNote}</span>
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/5">
                <button
                  onClick={() => setSelectedCert(cert.certificateUrl)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 transition-all"
                >
                  <FiExternalLink size={14} />
                  <span>View Certificate</span>
                </button>

                <a
                  href={cert.certificateUrl}
                  download={cert.downloadName || 'certificate.png'}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold hover:bg-white/10 hover:text-white transition-all"
                >
                  <FiDownload size={14} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl bg-[#0d1428] border border-white/20 rounded-xl p-3 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-cyan-500 transition-colors"
              >
                <FiX size={18} />
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
